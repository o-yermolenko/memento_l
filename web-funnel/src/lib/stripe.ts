import Stripe from 'stripe'

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

// Plan configurations with Stripe Price IDs
export const STRIPE_PLANS = {
  '1-week': {
    name: '1-Week Trial',
    priceId: process.env.STRIPE_PRICE_1_WEEK!,
    amount: 699, // in cents
    currency: 'eur',
  },
  '4-week': {
    name: '4-Week Plan',
    priceId: process.env.STRIPE_PRICE_4_WEEK!,
    amount: 1999, // in cents
    currency: 'eur',
  },
  '12-week': {
    name: '12-Week Plan',
    priceId: process.env.STRIPE_PRICE_12_WEEK!,
    amount: 3999, // in cents
    currency: 'eur',
  },
} as const

export type PlanId = keyof typeof STRIPE_PLANS
