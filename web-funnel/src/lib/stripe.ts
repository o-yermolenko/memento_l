import Stripe from 'stripe'

// Check if Stripe is configured
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
export const isStripeConfigured = !!stripeSecretKey

// Server-side Stripe instance (will be null if not configured)
export const stripe = stripeSecretKey 
  ? new Stripe(stripeSecretKey)
  : null as unknown as Stripe // Type assertion to avoid null checks everywhere when we know it's configured

// Log warning if Stripe is not configured
if (!isStripeConfigured && typeof window === 'undefined') {
  console.warn(
    '⚠️ Stripe environment variables not configured. ' +
    'Payment functionality will not work. ' +
    'Set STRIPE_SECRET_KEY in .env.local'
  )
}

// Plan configurations with Stripe Price IDs
export const STRIPE_PLANS = {
  '1-week': {
    name: '1-Week Trial',
    priceId: process.env.STRIPE_PRICE_1_WEEK || '',
    amount: 699, // in cents
    currency: 'eur',
  },
  '4-week': {
    name: '4-Week Plan',
    priceId: process.env.STRIPE_PRICE_4_WEEK || '',
    amount: 1999, // in cents
    currency: 'eur',
  },
  '12-week': {
    name: '12-Week Plan',
    priceId: process.env.STRIPE_PRICE_12_WEEK || '',
    amount: 3999, // in cents
    currency: 'eur',
  },
} as const

export type PlanId = keyof typeof STRIPE_PLANS
