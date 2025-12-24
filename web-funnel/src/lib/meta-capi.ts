// Meta Conversions API (CAPI) - Server-side event tracking
// This ensures reliable tracking even when client-side pixel is blocked

const PIXEL_ID = process.env.META_PIXEL_ID || '2399093320506915'
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN

const CAPI_URL = `https://graph.facebook.com/v18.0/${PIXEL_ID}/events`

export interface CAPIEventData {
  event_name: 'Purchase' | 'Lead' | 'InitiateCheckout' | 'CompleteRegistration' | 'PageView'
  event_time: number // Unix timestamp
  event_id: string // For deduplication with client-side pixel
  event_source_url?: string
  action_source: 'website'
  user_data: {
    em?: string[] // Hashed email
    ph?: string[] // Hashed phone
    fn?: string[] // Hashed first name
    client_ip_address?: string
    client_user_agent?: string
    fbc?: string // Facebook click ID
    fbp?: string // Facebook browser ID
  }
  custom_data?: {
    currency?: string
    value?: number
    content_name?: string
    content_category?: string
    content_ids?: string[]
    content_type?: string
  }
}

// SHA-256 hash function for PII
async function hashData(data: string): Promise<string> {
  const encoder = new TextEncoder()
  const dataBuffer = encoder.encode(data.toLowerCase().trim())
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

// Generate a unique event ID for deduplication
export function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`
}

// Send event to Meta Conversions API
export async function sendCAPIEvent(eventData: CAPIEventData): Promise<boolean> {
  if (!ACCESS_TOKEN) {
    console.warn('META_CAPI_ACCESS_TOKEN not configured - skipping server-side event')
    return false
  }

  try {
    const payload = {
      data: [eventData],
      access_token: ACCESS_TOKEN,
    }

    const response = await fetch(CAPI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error('Meta CAPI Error:', result)
      return false
    }

    console.log('Meta CAPI Success:', {
      event: eventData.event_name,
      event_id: eventData.event_id,
      events_received: result.events_received,
    })

    return true
  } catch (error) {
    console.error('Meta CAPI Request Failed:', error)
    return false
  }
}

// Track Purchase event (server-side)
export async function trackPurchaseServer({
  email,
  value,
  currency = 'USD',
  eventId,
  clientIp,
  userAgent,
  sourceUrl,
  firstName,
}: {
  email: string
  value: number
  currency?: string
  eventId: string
  clientIp?: string
  userAgent?: string
  sourceUrl?: string
  firstName?: string
}): Promise<boolean> {
  const hashedEmail = await hashData(email)
  const hashedFirstName = firstName ? await hashData(firstName) : undefined

  const eventData: CAPIEventData = {
    event_name: 'Purchase',
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    event_source_url: sourceUrl || 'https://memento.app/success',
    action_source: 'website',
    user_data: {
      em: [hashedEmail],
      ...(hashedFirstName && { fn: [hashedFirstName] }),
      ...(clientIp && { client_ip_address: clientIp }),
      ...(userAgent && { client_user_agent: userAgent }),
    },
    custom_data: {
      currency,
      value,
      content_name: 'Memento Subscription',
      content_category: 'subscription',
      content_type: 'product',
    },
  }

  return sendCAPIEvent(eventData)
}

// Track Lead event (server-side)
export async function trackLeadServer({
  email,
  eventId,
  clientIp,
  userAgent,
  sourceUrl,
}: {
  email: string
  eventId: string
  clientIp?: string
  userAgent?: string
  sourceUrl?: string
}): Promise<boolean> {
  const hashedEmail = await hashData(email)

  const eventData: CAPIEventData = {
    event_name: 'Lead',
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    event_source_url: sourceUrl,
    action_source: 'website',
    user_data: {
      em: [hashedEmail],
      ...(clientIp && { client_ip_address: clientIp }),
      ...(userAgent && { client_user_agent: userAgent }),
    },
  }

  return sendCAPIEvent(eventData)
}

// Track InitiateCheckout event (server-side)
export async function trackInitiateCheckoutServer({
  email,
  value,
  currency = 'USD',
  eventId,
  clientIp,
  userAgent,
  sourceUrl,
}: {
  email?: string
  value: number
  currency?: string
  eventId: string
  clientIp?: string
  userAgent?: string
  sourceUrl?: string
}): Promise<boolean> {
  const hashedEmail = email ? await hashData(email) : undefined

  const eventData: CAPIEventData = {
    event_name: 'InitiateCheckout',
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    event_source_url: sourceUrl,
    action_source: 'website',
    user_data: {
      ...(hashedEmail && { em: [hashedEmail] }),
      ...(clientIp && { client_ip_address: clientIp }),
      ...(userAgent && { client_user_agent: userAgent }),
    },
    custom_data: {
      currency,
      value,
      content_name: 'Memento Subscription',
      content_type: 'product',
    },
  }

  return sendCAPIEvent(eventData)
}

