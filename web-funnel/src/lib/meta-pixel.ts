// Meta Pixel Configuration
export const META_PIXEL_ID = '2399093320506915'

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq: (
      action: string,
      event: string,
      params?: Record<string, unknown>
    ) => void
    _fbq: unknown
  }
}

// Track page view
export function trackPageView() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

// Track custom events
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params)
  }
}

// Track purchase
export function trackPurchase(value: number, currency: string = 'EUR') {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      value,
      currency,
    })
  }
}

// Track initiate checkout
export function trackInitiateCheckout(value: number, currency: string = 'EUR') {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      value,
      currency,
    })
  }
}

// Track lead
export function trackLead() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead')
  }
}

// Track complete registration (quiz completion)
export function trackCompleteRegistration() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CompleteRegistration')
  }
}
