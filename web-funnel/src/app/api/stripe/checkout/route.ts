import { NextRequest, NextResponse } from 'next/server'
import { stripe, STRIPE_PLANS, PlanId } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { planId, email, sessionId, name, eventId } = body as {
      planId: PlanId
      email: string
      sessionId?: string
      name?: string
      eventId?: string // For Meta Pixel deduplication
    }

    // Validate plan
    const plan = STRIPE_PLANS[planId]
    if (!plan) {
      return NextResponse.json(
        { error: 'Invalid plan selected' },
        { status: 400 }
      )
    }

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Get or create customer
    let customerId: string
    const existingCustomers = await stripe.customers.list({
      email,
      limit: 1,
    })

    if (existingCustomers.data.length > 0) {
      customerId = existingCustomers.data[0].id
    } else {
      const customer = await stripe.customers.create({
        email,
        name: name || undefined,
        metadata: {
          funnel_session_id: sessionId || '',
        },
      })
      customerId = customer.id
    }

    // Determine the base URL for redirects
    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    // Create checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: plan.priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/paywall?canceled=true`,
      metadata: {
        planId,
        funnel_session_id: sessionId || '',
        email,
        event_id: eventId || '', // For Meta CAPI deduplication
      },
      subscription_data: {
        metadata: {
          planId,
          funnel_session_id: sessionId || '',
        },
      },
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
    })

    return NextResponse.json({
      url: checkoutSession.url,
    })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
