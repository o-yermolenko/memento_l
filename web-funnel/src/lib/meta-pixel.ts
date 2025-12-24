// Meta Pixel Configuration
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '2399093320506915'

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq: (
      action: string,
      event: string,
      params?: Record<string, unknown>,
      options?: { eventID?: string }
    ) => void
    _fbq: unknown
  }
}

// Generate a unique event ID for deduplication between client and server
export function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`
}

// Track page view
export function trackPageView() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

// Track custom events with optional event ID for deduplication
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>,
  eventId?: string
) {
  if (typeof window !== 'undefined' && window.fbq) {
    if (eventId) {
      window.fbq('track', eventName, params || {}, { eventID: eventId })
    } else {
      window.fbq('track', eventName, params)
    }
  }
}

// Track purchase with event ID for deduplication with server-side CAPI
export function trackPurchase(value: number, currency: string = 'USD', eventId?: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    const params = {
      value,
      currency,
      content_name: 'Memento Subscription',
      content_type: 'product',
    }
    
    if (eventId) {
      window.fbq('track', 'Purchase', params, { eventID: eventId })
      console.log('Meta Pixel: Purchase event fired with eventID for deduplication', { value, currency, eventId })
    } else {
      window.fbq('track', 'Purchase', params)
      console.log('Meta Pixel: Purchase event fired', { value, currency })
    }
  }
}

// Track initiate checkout with event ID for deduplication
export function trackInitiateCheckout(value: number, currency: string = 'USD', eventId?: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    const params = {
      value,
      currency,
      content_name: 'Memento Subscription',
      content_type: 'product',
    }
    
    if (eventId) {
      window.fbq('track', 'InitiateCheckout', params, { eventID: eventId })
    } else {
      window.fbq('track', 'InitiateCheckout', params)
    }
  }
}

// Track lead with event ID for deduplication
export function trackLead(eventId?: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    if (eventId) {
      window.fbq('track', 'Lead', {}, { eventID: eventId })
    } else {
      window.fbq('track', 'Lead')
    }
  }
}

// Track complete registration (quiz completion)
export function trackCompleteRegistration(eventId?: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    if (eventId) {
      window.fbq('track', 'CompleteRegistration', {}, { eventID: eventId })
    } else {
      window.fbq('track', 'CompleteRegistration')
    }
  }
}
