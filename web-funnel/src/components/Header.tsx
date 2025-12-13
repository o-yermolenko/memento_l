'use client'

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronLeft, Menu } from 'lucide-react'
import { 
  funnelFlowWithRoutes, 
  getStepIndexFromRoute, 
  getPrevRoute,
  getQuestionNumberFromStep,
  getTotalQuizQuestions 
} from '@/lib/routes'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  
  const currentStepIndex = getStepIndexFromRoute(pathname)
  const currentStep = funnelFlowWithRoutes[currentStepIndex]
  
  const showBackButton = currentStepIndex > 0 && currentStep?.type !== 'paywall'
  const showProgress = currentStep?.type === 'question'
  
  const questionNumber = showProgress ? getQuestionNumberFromStep(currentStepIndex) : 0
  const totalQuestions = getTotalQuizQuestions()
  const progressPercent = (questionNumber / totalQuestions) * 100
  
  const handleBack = () => {
    const prevRoute = getPrevRoute(currentStepIndex)
    router.push(prevRoute)
  }
  
  return (
    <header className="sticky top-0 z-50 bg-background-primary border-b border-divider safe-area-top">
      <div className="max-w-2xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Back button */}
          <div className="w-10">
            {showBackButton && (
              <motion.button
                onClick={handleBack}
                className="p-2 -ml-2 text-text-secondary hover:text-text-primary transition-colors select-none touch-manipulation"
                aria-label="Go back"
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            )}
          </div>
          
          {/* Logo */}
          <div className="flex-1 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D94F30]" aria-hidden="true"></span>
            <h1 className="text-lg font-semibold tracking-widest uppercase" style={{ color: '#1F1A17' }}>
              MEMENTO
            </h1>
          </div>
          
          {/* Menu placeholder */}
          <div className="w-10">
            <motion.button
              className="p-2 -mr-2 text-text-secondary hover:text-text-primary transition-colors select-none touch-manipulation"
              aria-label="Menu"
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
        
        {/* Progress bar with animation */}
        {showProgress && (
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs text-text-tertiary mb-1">
              <span>{questionNumber} / {totalQuestions}</span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="progress-bar">
              <motion.div 
                className="progress-bar-fill"
                initial={false}
                animate={{ width: `${progressPercent}%` }}
                transition={{ 
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  mass: 1
                }}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
