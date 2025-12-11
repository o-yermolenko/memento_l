'use client'

import { useEffect, createContext, useContext, useState, useCallback } from 'react'
import {
  createSession,
  updateSession,
  saveAnswer,
  saveLead,
  completeSession,
  getUTMParams,
} from '@/lib/supabase'
import { useFunnelStore } from '@/store/funnelStore'

const SESSION_STORAGE_KEY = 'memento-session-id'

interface SupabaseContextType {
  sessionId: string | null
  isReady: boolean
  syncAnswer: (questionId: string, value: string | string[], score?: number) => Promise<void>
  syncProfile: () => Promise<void>
  syncLead: () => Promise<void>
  syncCompletion: () => Promise<void>
}

const SupabaseContext = createContext<SupabaseContextType>({
  sessionId: null,
  isReady: false,
  syncAnswer: async () => {},
  syncProfile: async () => {},
  syncLead: async () => {},
  syncCompletion: async () => {},
})

export function useSupabase() {
  return useContext(SupabaseContext)
}

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [isReady, setIsReady] = useState(false)

  const {
    profile,
    currentStep,
    primaryPattern,
    secondaryPattern,
    emotionalBlueprintScore,
    readinessLevel,
  } = useFunnelStore()

  // Initialize session on mount
  useEffect(() => {
    async function init() {
      try {
        // Check for existing session
        const existingId = sessionStorage.getItem(SESSION_STORAGE_KEY)
        if (existingId) {
          setSessionId(existingId)
          setIsReady(true)
          return
        }

        // Create new session
        const utmParams = getUTMParams()
        const session = await createSession({
          ...utmParams,
          current_step: 0,
          total_steps: 36,
        })
        
        sessionStorage.setItem(SESSION_STORAGE_KEY, session.id)
        setSessionId(session.id)
        setIsReady(true)
      } catch (error) {
        console.error('Failed to initialize Supabase session:', error)
        // Still mark as ready so the app can function without backend
        setIsReady(true)
      }
    }

    init()
  }, [])

  // Sync answer to Supabase
  const syncAnswer = useCallback(async (questionId: string, value: string | string[], score?: number) => {
    if (!sessionId) return

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
  }, [sessionId])

  // Sync profile to Supabase
  const syncProfile = useCallback(async () => {
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
  }, [sessionId, profile, currentStep])

  // Save lead when email is captured
  const syncLead = useCallback(async () => {
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
  }, [sessionId, profile, primaryPattern, secondaryPattern, readinessLevel])

  // Complete the session with final results
  const syncCompletion = useCallback(async () => {
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
  }, [sessionId, primaryPattern, secondaryPattern, emotionalBlueprintScore, readinessLevel])

  return (
    <SupabaseContext.Provider
      value={{
        sessionId,
        isReady,
        syncAnswer,
        syncProfile,
        syncLead,
        syncCompletion,
      }}
    >
      {children}
    </SupabaseContext.Provider>
  )
}
