'use client'

import { useCallback, useEffect, useRef } from 'react'
import { useFunnelStore } from '@/store/funnelStore'
import {
  createSession,
  updateSession,
  saveAnswer,
  saveLead,
  completeSession,
  getUTMParams,
} from '@/lib/supabase'

const SESSION_STORAGE_KEY = 'memento-session-id'

/**
 * Hook to sync funnel state with Supabase
 * Handles session creation, answer saving, and lead capture
 */
export function useSupabaseFunnel() {
  const sessionIdRef = useRef<string | null>(null)
  const isInitializedRef = useRef(false)
  
  const {
    profile,
    answers,
    currentStep,
    primaryPattern,
    secondaryPattern,
    emotionalBlueprintScore,
    readinessLevel,
  } = useFunnelStore()

  // Get or create session ID
  const getSessionId = useCallback((): string | null => {
    if (sessionIdRef.current) return sessionIdRef.current
    
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem(SESSION_STORAGE_KEY)
      if (stored) {
        sessionIdRef.current = stored
        return stored
      }
    }
    return null
  }, [])

  // Initialize session on mount
  const initSession = useCallback(async () => {
    if (isInitializedRef.current) return getSessionId()
    
    try {
      const existingId = getSessionId()
      if (existingId) {
        isInitializedRef.current = true
        return existingId
      }

      const utmParams = getUTMParams()
      const session = await createSession({
        ...utmParams,
        current_step: 0,
        total_steps: 36,
      })
      
      sessionIdRef.current = session.id
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(SESSION_STORAGE_KEY, session.id)
      }
      
      isInitializedRef.current = true
      return session.id
    } catch (error) {
      console.error('Failed to initialize session:', error)
      return null
    }
  }, [getSessionId])

  // Save answer to Supabase
  const syncAnswer = useCallback(async (questionId: string, value: string | string[], score?: number) => {
    const sessionId = getSessionId()
    if (!sessionId) {
      console.warn('No session ID, cannot save answer')
      return
    }

    try {
      await saveAnswer({
        session_id: sessionId,
        question_id: questionId,
        value: value as any,
        score: score ?? null,
      })
    } catch (error) {
      console.error('Failed to save answer:', error)
    }
  }, [getSessionId])

  // Update session profile data
  const syncProfile = useCallback(async () => {
    const sessionId = getSessionId()
    if (!sessionId) return

    try {
      await updateSession(sessionId, {
        gender: profile.gender ?? undefined,
        age_range: profile.age ?? undefined,
        name: profile.name || undefined,
        email: profile.email || undefined,
        email_opt_in: profile.emailOptIn,
        current_step: currentStep,
      })
    } catch (error) {
      console.error('Failed to sync profile:', error)
    }
  }, [getSessionId, profile, currentStep])

  // Save lead when email is captured
  const syncLead = useCallback(async () => {
    const sessionId = getSessionId()
    if (!profile.email) return

    try {
      await saveLead({
        session_id: sessionId ?? undefined,
        email: profile.email,
        name: profile.name || undefined,
        gender: profile.gender ?? undefined,
        age_range: profile.age ?? undefined,
        email_opt_in: profile.emailOptIn,
        primary_pattern: primaryPattern || undefined,
        secondary_pattern: secondaryPattern || undefined,
        readiness_level: readinessLevel || undefined,
      })
    } catch (error) {
      console.error('Failed to save lead:', error)
    }
  }, [getSessionId, profile, primaryPattern, secondaryPattern, readinessLevel])

  // Complete the session with final results
  const syncCompletion = useCallback(async () => {
    const sessionId = getSessionId()
    if (!sessionId) return

    try {
      await completeSession(sessionId, {
        primaryPattern,
        secondaryPattern,
        emotionalBlueprintScore,
        readinessLevel,
      })
    } catch (error) {
      console.error('Failed to complete session:', error)
    }
  }, [getSessionId, primaryPattern, secondaryPattern, emotionalBlueprintScore, readinessLevel])

  // Auto-sync profile when it changes
  useEffect(() => {
    if (profile.email || profile.name || profile.gender || profile.age) {
      syncProfile()
    }
  }, [profile.email, profile.name, profile.gender, profile.age, syncProfile])

  // Auto-save lead when email is captured
  useEffect(() => {
    if (profile.email) {
      syncLead()
    }
  }, [profile.email, syncLead])

  return {
    initSession,
    getSessionId,
    syncAnswer,
    syncProfile,
    syncLead,
    syncCompletion,
  }
}
