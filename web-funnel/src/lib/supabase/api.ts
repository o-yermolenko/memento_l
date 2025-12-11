import { supabase } from './client'
import type { 
  FunnelSession,
  FunnelSessionInsert, 
  FunnelSessionUpdate, 
  FunnelAnswer,
  FunnelAnswerInsert,
  Lead,
  LeadInsert,
  Purchase,
  PurchaseInsert 
} from './types'

// ============================================
// SESSION MANAGEMENT
// ============================================

/**
 * Create a new funnel session
 */
export async function createSession(data?: Partial<FunnelSessionInsert>): Promise<FunnelSession> {
  const insertData = {
    ...data,
    device_type: getDeviceType(),
    user_agent: typeof window !== 'undefined' ? navigator.userAgent : null,
  }
  
  const { data: session, error } = await supabase
    .from('funnel_sessions')
    .insert(insertData as Record<string, unknown>)
    .select()
    .single()

  if (error) {
    console.error('Error creating session:', error)
    throw error
  }

  return session as FunnelSession
}

/**
 * Update an existing funnel session
 */
export async function updateSession(sessionId: string, data: FunnelSessionUpdate): Promise<FunnelSession> {
  const { data: session, error } = await supabase
    .from('funnel_sessions')
    .update(data as Record<string, unknown>)
    .eq('id', sessionId)
    .select()
    .single()

  if (error) {
    console.error('Error updating session:', error)
    throw error
  }

  return session as FunnelSession
}

/**
 * Get a session by ID
 */
export async function getSession(sessionId: string): Promise<FunnelSession | null> {
  const { data: session, error } = await supabase
    .from('funnel_sessions')
    .select('*')
    .eq('id', sessionId)
    .single()

  if (error) {
    console.error('Error getting session:', error)
    return null
  }

  return session as FunnelSession
}

/**
 * Mark session as completed
 */
export async function completeSession(sessionId: string, results: {
  primaryPattern: string
  secondaryPattern: string
  emotionalBlueprintScore: number
  readinessLevel: number
}) {
  return updateSession(sessionId, {
    completed_at: new Date().toISOString(),
    primary_pattern: results.primaryPattern,
    secondary_pattern: results.secondaryPattern,
    emotional_blueprint_score: results.emotionalBlueprintScore,
    readiness_level: results.readinessLevel,
  })
}

// ============================================
// ANSWER MANAGEMENT
// ============================================

/**
 * Save or update a quiz answer
 */
export async function saveAnswer(data: FunnelAnswerInsert): Promise<FunnelAnswer> {
  const insertData = {
    ...data,
    value: typeof data.value === 'string' ? data.value : JSON.stringify(data.value),
  }
  
  const { data: answer, error } = await supabase
    .from('funnel_answers')
    .upsert(insertData as Record<string, unknown>, { onConflict: 'session_id,question_id' })
    .select()
    .single()

  if (error) {
    console.error('Error saving answer:', error)
    throw error
  }

  return answer as FunnelAnswer
}

/**
 * Save multiple answers at once
 */
export async function saveAnswersBatch(sessionId: string, answers: Array<{ questionId: string; value: string | string[]; score?: number }>): Promise<FunnelAnswer[]> {
  const formattedAnswers = answers.map(a => ({
    session_id: sessionId,
    question_id: a.questionId,
    value: a.value,
    score: a.score ?? null,
  }))

  const { data, error } = await supabase
    .from('funnel_answers')
    .upsert(formattedAnswers as Record<string, unknown>[], { onConflict: 'session_id,question_id' })
    .select()

  if (error) {
    console.error('Error saving answers batch:', error)
    throw error
  }

  return data as FunnelAnswer[]
}

/**
 * Get all answers for a session
 */
export async function getSessionAnswers(sessionId: string): Promise<FunnelAnswer[]> {
  const { data: answers, error } = await supabase
    .from('funnel_answers')
    .select('*')
    .eq('session_id', sessionId)
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error getting answers:', error)
    return []
  }

  return answers as FunnelAnswer[]
}

// ============================================
// LEAD MANAGEMENT
// ============================================

/**
 * Create or update a lead
 */
export async function saveLead(data: LeadInsert): Promise<Lead> {
  const { data: lead, error } = await supabase
    .from('leads')
    .upsert(data as Record<string, unknown>, { onConflict: 'email' })
    .select()
    .single()

  if (error) {
    console.error('Error saving lead:', error)
    throw error
  }

  return lead as Lead
}

/**
 * Update lead with final quiz results
 */
export async function updateLeadWithResults(email: string, results: {
  primaryPattern: string
  secondaryPattern: string
  readinessLevel: number
}): Promise<Lead> {
  const updateData = {
    primary_pattern: results.primaryPattern,
    secondary_pattern: results.secondaryPattern,
    readiness_level: results.readinessLevel,
  }
  
  const { data: lead, error } = await supabase
    .from('leads')
    .update(updateData as Record<string, unknown>)
    .eq('email', email)
    .select()
    .single()

  if (error) {
    console.error('Error updating lead:', error)
    throw error
  }

  return lead as Lead
}

// ============================================
// PURCHASE MANAGEMENT
// ============================================

/**
 * Create a purchase record
 */
export async function createPurchase(data: PurchaseInsert): Promise<Purchase> {
  const { data: purchase, error } = await supabase
    .from('purchases')
    .insert(data as Record<string, unknown>)
    .select()
    .single()

  if (error) {
    console.error('Error creating purchase:', error)
    throw error
  }

  return purchase as Purchase
}

/**
 * Update purchase status
 */
export async function updatePurchaseStatus(purchaseId: string, status: 'completed' | 'failed' | 'refunded', paymentId?: string): Promise<Purchase> {
  const updateData = { 
    status, 
    payment_id: paymentId ?? undefined 
  }
  
  const { data: purchase, error } = await supabase
    .from('purchases')
    .update(updateData as Record<string, unknown>)
    .eq('id', purchaseId)
    .select()
    .single()

  if (error) {
    console.error('Error updating purchase:', error)
    throw error
  }

  const typedPurchase = purchase as Purchase
  
  // If completed, update the lead's converted_at timestamp
  if (status === 'completed' && typedPurchase.lead_id) {
    await supabase
      .from('leads')
      .update({ converted_at: new Date().toISOString() } as Record<string, unknown>)
      .eq('id', typedPurchase.lead_id)
  }

  return typedPurchase
}

// ============================================
// UTILITIES
// ============================================

/**
 * Detect device type from user agent
 */
function getDeviceType(): string {
  if (typeof window === 'undefined') return 'unknown'
  
  const ua = navigator.userAgent
  if (/tablet|ipad|playbook|silk/i.test(ua)) return 'tablet'
  if (/mobile|iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(ua)) return 'mobile'
  return 'desktop'
}

/**
 * Parse UTM parameters from URL
 */
export function getUTMParams(): { utm_source?: string; utm_medium?: string; utm_campaign?: string } {
  if (typeof window === 'undefined') return {}
  
  const params = new URLSearchParams(window.location.search)
  return {
    utm_source: params.get('utm_source') ?? undefined,
    utm_medium: params.get('utm_medium') ?? undefined,
    utm_campaign: params.get('utm_campaign') ?? undefined,
  }
}
