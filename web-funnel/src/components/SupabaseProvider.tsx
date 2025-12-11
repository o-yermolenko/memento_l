'use client'

import { useEffect, createContext, useContext, useState, useCallback, useRef } from 'react'
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
  const [mounted, setMounted] = useState(false)
  const initRef = useRef(false)

  // Mark as mounted (client-side only)
  useEffect(() => {
    setMounted(true)
    setIsReady(true) // Mark ready immediately - Supabase syncing is optional/async
  }, [])

  // Initialize session on mount (only on client)
  useEffect(() => {
    if (!mounted || initRef.current) return
    initRef.current = true
    
    async function init() {
      try {
        // Check for existing session
        const existingId = sessionStorage.getItem(SESSION_STORAGE_KEY)
        if (existingId) {
          setSessionId(existingId)
          return
        }

        // Create new session (don't block if it fails)
        const utmParams = getUTMParams()
        const session = await createSession({
          ...utmParams,
          current_step: 0,
          total_steps: 36,
        })
        
        sessionStorage.setItem(SESSION_STORAGE_KEY, session.id)
        setSessionId(session.id)
      } catch (error) {
        console.error('Failed to initialize Supabase session:', error)
        // App continues to work without backend
      }
    }

    init()
  }, [mounted])

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

  // Sync profile to Supabase - get fresh data from store
  const syncProfile = useCallback(async () => {
    if (!sessionId) return

    try {
      const state = useFunnelStore.getState()
      await updateSession(sessionId, {
        gender: state.profile.gender ?? undefined,
        age_range: state.profile.age ?? undefined,
        name: state.profile.name || undefined,
        email: state.profile.email || undefined,
        email_opt_in: state.profile.emailOptIn,
        current_step: state.currentStep,
      })
    } catch (error) {
      console.error('Failed to sync profile:', error)
    }
  }, [sessionId])

  // Save lead when email is captured - get fresh data from store
  const syncLead = useCallback(async () => {
    const state = useFunnelStore.getState()
    if (!state.profile.email) return

    try {
      await saveLead({
        session_id: sessionId ?? undefined,
        email: state.profile.email,
        name: state.profile.name || undefined,
        gender: state.profile.gender ?? undefined,
        age_range: state.profile.age ?? undefined,
        email_opt_in: state.profile.emailOptIn,
        primary_pattern: state.primaryPattern || undefined,
        secondary_pattern: state.secondaryPattern || undefined,
        readiness_level: state.readinessLevel || undefined,
      })
    } catch (error) {
      console.error('Failed to save lead:', error)
    }
  }, [sessionId])

  // Complete the session with final results - get fresh data from store
  const syncCompletion = useCallback(async () => {
    if (!sessionId) return

    try {
      const state = useFunnelStore.getState()
      await completeSession(sessionId, {
        primaryPattern: state.primaryPattern,
        secondaryPattern: state.secondaryPattern,
        emotionalBlueprintScore: state.emotionalBlueprintScore,
        readinessLevel: state.readinessLevel,
      })
    } catch (error) {
      console.error('Failed to complete session:', error)
    }
  }, [sessionId])

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
