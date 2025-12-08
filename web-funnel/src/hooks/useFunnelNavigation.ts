'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useCallback } from 'react'
import { useFunnelStore } from '@/store/funnelStore'
import { 
  funnelFlowWithRoutes, 
  getStepIndexFromRoute, 
  getNextRoute, 
  getPrevRoute,
  getTotalQuizQuestions,
  getQuestionNumberFromStep,
  ROUTES
} from '@/lib/routes'

export function useFunnelNavigation() {
  const router = useRouter()
  const pathname = usePathname()
  const store = useFunnelStore()
  
  const currentStepIndex = getStepIndexFromRoute(pathname)
  const currentStepConfig = funnelFlowWithRoutes[currentStepIndex]
  const totalSteps = funnelFlowWithRoutes.length
  
  const navigateNext = useCallback(() => {
    const nextRoute = getNextRoute(currentStepIndex)
    store.setStep(currentStepIndex + 1)
    router.push(nextRoute)
  }, [currentStepIndex, router, store])
  
  const navigatePrev = useCallback(() => {
    if (currentStepIndex > 0) {
      const prevRoute = getPrevRoute(currentStepIndex)
      store.setStep(currentStepIndex - 1)
      router.push(prevRoute)
    }
  }, [currentStepIndex, router, store])
  
  const navigateTo = useCallback((route: string) => {
    const stepIndex = getStepIndexFromRoute(route)
    store.setStep(stepIndex)
    router.push(route)
  }, [router, store])
  
  const navigateToStep = useCallback((stepIndex: number) => {
    const step = funnelFlowWithRoutes[stepIndex]
    if (step) {
      store.setStep(stepIndex)
      router.push(step.route)
    }
  }, [router, store])
  
  // Calculate progress for quiz questions
  const totalQuestions = getTotalQuizQuestions()
  const currentQuestionNumber = currentStepConfig?.type === 'question' 
    ? getQuestionNumberFromStep(currentStepIndex) 
    : 0
  const quizProgress = (currentQuestionNumber / totalQuestions) * 100
  
  return {
    // Current state
    pathname,
    currentStepIndex,
    currentStepConfig,
    totalFunnelSteps: totalSteps,
    
    // Quiz progress
    totalQuestions,
    currentQuestionNumber,
    quizProgress,
    isQuizQuestion: currentStepConfig?.type === 'question',
    
    // Navigation functions
    navigateNext,
    navigatePrev,
    navigateTo,
    navigateToStep,
    
    // Store data (selectively include to avoid conflicts)
    profile: store.profile,
    answers: store.answers,
    primaryPattern: store.primaryPattern,
    secondaryPattern: store.secondaryPattern,
    readinessLevel: store.readinessLevel,
    setGender: store.setGender,
    setAge: store.setAge,
    setName: store.setName,
    setEmail: store.setEmail,
    addAnswer: store.addAnswer,
    calculateResults: store.calculateResults,
    
    // Route helpers
    routes: ROUTES,
  }
}

