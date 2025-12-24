import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { createServerClient } from '@/lib/supabase/client'
import type { SupabaseClient } from '@supabase/supabase-js'
import { trackPurchaseServer, generateEventId } from '@/lib/meta-capi'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')

  if (!signature) {
    console.error('No Stripe signature found')
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error(`Webhook signature verification failed: ${message}`)
    return NextResponse.json({ error: `Webhook Error: ${message}` }, { status: 400 })
  }

  const supabase = createServerClient()
  
  // Warn if Supabase is not configured (webhook will still acknowledge receipt)
  if (!supabase) {
    console.warn('Supabase not configured - webhook received but data not persisted')
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        if (supabase) {
          await handleCheckoutComplete(session, supabase)
        }
        break
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        console.log('Subscription event:', event.type, subscription.id, subscription.status)
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        if (supabase) {
          await handleSubscriptionCanceled(subscription, supabase)
        }
        break
      }

      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice
        console.log('Invoice paid:', invoice.id)
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        console.log('Invoice payment failed:', invoice.id)
        // Get subscription ID from invoice lines
        const subscriptionId = invoice.lines?.data?.[0]?.subscription
        if (supabase && subscriptionId && typeof subscriptionId === 'string') {
          await supabase
            .from('purchases')
            .update({ status: 'failed' })
            .eq('payment_id', subscriptionId)
        }
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }
}

async function handleCheckoutComplete(
  session: Stripe.Checkout.Session,
  supabase: SupabaseClient | null
) {
  const { planId, funnel_session_id, email, event_id } = session.metadata || {}
  const customerEmail = session.customer_details?.email || email
  const customerName = session.customer_details?.name
  const amount = (session.amount_total || 0) / 100
  const currency = session.currency?.toUpperCase() || 'USD'
  
  console.log('Checkout completed:', {
    sessionId: session.id,
    customerId: session.customer,
    subscriptionId: session.subscription,
    email: customerEmail,
    amount,
    currency,
  })

  // 🔥 Fire Meta Conversions API Purchase event (SERVER-SIDE)
  // This is the reliable way to track - even if client pixel is blocked
  if (customerEmail) {
    const capiEventId = event_id || generateEventId()
    
    try {
      await trackPurchaseServer({
        email: customerEmail,
        value: amount,
        currency,
        eventId: capiEventId,
        firstName: customerName?.split(' ')[0],
        sourceUrl: 'https://memento.app/success',
      })
      console.log('✅ Meta CAPI Purchase event sent:', { email: customerEmail, amount, currency, eventId: capiEventId })
    } catch (error) {
      console.error('❌ Meta CAPI Purchase event failed:', error)
    }
  }

  // Update Supabase if configured
  if (supabase && customerEmail) {
    // Update existing pending purchase or create new one
    const { error } = await supabase
      .from('purchases')
      .update({
        status: 'completed',
        payment_provider: 'stripe',
        payment_id: session.subscription as string,
      })
      .eq('email', customerEmail)
      .eq('status', 'pending')

    if (error) {
      console.error('Error updating purchase:', error)
      // Create new completed purchase if no pending found
      await supabase.from('purchases').insert({
        email: customerEmail,
        plan_type: planId || 'unknown',
        amount,
        currency,
        status: 'completed',
        payment_provider: 'stripe',
        payment_id: session.subscription as string,
        session_id: funnel_session_id || null,
      })
    }

    // Update lead as converted
    await supabase
      .from('leads')
      .update({ converted_at: new Date().toISOString() })
      .eq('email', customerEmail)
  }
}

async function handleSubscriptionCanceled(
  subscription: Stripe.Subscription,
  supabase: SupabaseClient
) {
  console.log('Subscription canceled:', subscription.id)
  await supabase
    .from('purchases')
    .update({ status: 'refunded' })
    .eq('payment_id', subscription.id)
}
