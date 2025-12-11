import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { createServerClient } from '@/lib/supabase/client'

// Disable body parsing, we need the raw body for webhook verification
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')

  if (!signature) {
    console.error('No Stripe signature found')
    return NextResponse.json(
      { error: 'No signature' },
      { status: 400 }
    )
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
    return NextResponse.json(
      { error: `Webhook Error: ${message}` },
      { status: 400 }
    )
  }

  // Get Supabase client for database operations
  const supabase = createServerClient()

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        await handleCheckoutComplete(session, supabase)
        break
      }

      case 'customer.subscription.created': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionCreated(subscription, supabase)
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionUpdated(subscription, supabase)
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionCanceled(subscription, supabase)
        break
      }

      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice
        await handleInvoicePaid(invoice, supabase)
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        await handleInvoicePaymentFailed(invoice, supabase)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

async function handleCheckoutComplete(
  session: Stripe.Checkout.Session,
  supabase: ReturnType<typeof createServerClient>
) {
  const { planId, funnel_session_id, email } = session.metadata || {}
  
  console.log('Checkout completed:', {
    sessionId: session.id,
    customerId: session.customer,
    subscriptionId: session.subscription,
    planId,
    email: session.customer_details?.email || email,
  })

  // Update purchase record to completed
  if (email || session.customer_details?.email) {
    const customerEmail = (session.customer_details?.email || email)!
    
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
      .order('created_at', { ascending: false })
      .limit(1)

    if (error) {
      console.error('Error updating purchase:', error)
      
      // If no pending purchase found, create a new completed one
      await supabase.from('purchases').insert({
        email: customerEmail,
        plan_type: planId || 'unknown',
        amount: (session.amount_total || 0) / 100,
        currency: session.currency?.toUpperCase() || 'EUR',
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

async function handleSubscriptionCreated(
  subscription: Stripe.Subscription,
  supabase: ReturnType<typeof createServerClient>
) {
  console.log('Subscription created:', {
    id: subscription.id,
    status: subscription.status,
    customerId: subscription.customer,
  })
  
  // Additional subscription tracking can be added here
}

async function handleSubscriptionUpdated(
  subscription: Stripe.Subscription,
  supabase: ReturnType<typeof createServerClient>
) {
  console.log('Subscription updated:', {
    id: subscription.id,
    status: subscription.status,
  })

  // Handle subscription status changes (e.g., past_due, canceled)
  if (subscription.status === 'past_due' || subscription.status === 'unpaid') {
    // Update purchase status
    await supabase
      .from('purchases')
      .update({ status: 'failed' })
      .eq('payment_id', subscription.id)
  }
}

async function handleSubscriptionCanceled(
  subscription: Stripe.Subscription,
  supabase: ReturnType<typeof createServerClient>
) {
  console.log('Subscription canceled:', subscription.id)

  // Update purchase status to refunded/canceled
  await supabase
    .from('purchases')
    .update({ status: 'refunded' })
    .eq('payment_id', subscription.id)
}

async function handleInvoicePaid(
  invoice: Stripe.Invoice,
  supabase: ReturnType<typeof createServerClient>
) {
  const subscriptionId = typeof invoice.subscription === 'string' 
    ? invoice.subscription 
    : invoice.subscription?.id

  console.log('Invoice paid:', {
    id: invoice.id,
    subscriptionId,
    amountPaid: invoice.amount_paid,
  })

  // Track recurring payments if needed
}

async function handleInvoicePaymentFailed(
  invoice: Stripe.Invoice,
  supabase: ReturnType<typeof createServerClient>
) {
  const subscriptionId = typeof invoice.subscription === 'string' 
    ? invoice.subscription 
    : invoice.subscription?.id

  console.log('Invoice payment failed:', {
    id: invoice.id,
    subscriptionId,
  })

  // Update purchase status
  if (subscriptionId) {
    await supabase
      .from('purchases')
      .update({ status: 'failed' })
      .eq('payment_id', subscriptionId)
  }
}
