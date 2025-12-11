import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
  typescript: true,
})

// Client-side Stripe promise (lazy loaded)
let stripePromise: Promise<Stripe | null> | null = null

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  }
  return stripePromise
}

// Plan configurations with Stripe Price IDs
// You'll need to create these products and prices in your Stripe Dashboard
export const STRIPE_PLANS = {
  '1-week': {
    name: '1-Week Trial',
    priceId: process.env.STRIPE_PRICE_1_WEEK!,
    amount: 699, // in cents
    currency: 'eur',
    interval: 'week' as const,
    intervalCount: 1,
  },
  '4-week': {
    name: '4-Week Plan',
    priceId: process.env.STRIPE_PRICE_4_WEEK!,
    amount: 1999, // in cents
    currency: 'eur',
    interval: 'week' as const,
    intervalCount: 4,
  },
  '12-week': {
    name: '12-Week Plan',
    priceId: process.env.STRIPE_PRICE_12_WEEK!,
    amount: 3999, // in cents
    currency: 'eur',
    interval: 'week' as const,
    intervalCount: 12,
  },
} as const

export type PlanId = keyof typeof STRIPE_PLANS
