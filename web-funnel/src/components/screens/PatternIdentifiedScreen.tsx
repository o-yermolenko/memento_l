'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useFunnelStore } from '@/store/funnelStore'
import { Target, Check } from 'lucide-react'
import { ROUTES } from '@/lib/routes'

// Animation variants
const screenVariants = {
  initial: { opacity: 0, x: 40 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    }
  },
  exit: { 
    opacity: 0, 
    x: -40,
    transition: { duration: 0.15, ease: 'easeIn' }
  },
}

export default function PatternIdentifiedScreen() {
  const router = useRouter()
  const { profile, answers } = useFunnelStore()
  const [isNavigating, setIsNavigating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // Detect pattern based on current answers
  const getDetectedPattern = () => {
    const intensityAnswer = answers.find(a => a.questionId === 'emotional_intensity')
    const exhaustionAnswer = answers.find(a => a.questionId === 'exhaustion')
    
    if (intensityAnswer?.value === 'often' || exhaustionAnswer?.value === 'often') {
      return 'emotional sensitivity'
    }
    return 'overthinking tendencies'
  }
  
  const pattern = getDetectedPattern()
  const nextRoute = ROUTES.quiz(9)
  
  // Prefetch next route
  useEffect(() => {
    router.prefetch(nextRoute)
  }, [router, nextRoute])
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])
  
  const handleContinue = useCallback(() => {
    if (isNavigating) return
    
    setIsNavigating(true)
    
    // Small delay for button feedback
    timeoutRef.current = setTimeout(() => {
      router.push(nextRoute)
    }, 150)
  }, [isNavigating, router, nextRoute])
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="pattern-identified-screen"
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-8"
      >
        {/* Icon */}
        <motion.div 
          className="mb-6 p-5 rounded-full bg-primary/10 text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
        >
          <Target className="w-10 h-10" />
        </motion.div>
        
        {/* Headline */}
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-text-primary mb-4 text-center max-w-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Pattern Detected!
        </motion.h2>
        
        {/* Pattern badge */}
        <motion.div 
          className="mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
        >
          <span className="text-primary font-semibold">
            Signs of {pattern}
          </span>
        </motion.div>
        
        {/* Explanation */}
        <motion.p 
          className="text-text-secondary text-center max-w-sm mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Based on your responses, we're seeing a clear pattern. 
          Let's continue to understand your unique emotional blueprint better.
        </motion.p>
        
        {/* Progress indicators */}
        <motion.div 
          className="flex gap-4 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-primary">
            <Check className="w-5 h-5" />
            <span className="text-sm font-medium">Section 1 Complete</span>
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.button
          onClick={handleContinue}
          disabled={isNavigating}
          className="btn-primary text-lg px-12 select-none touch-manipulation disabled:opacity-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          whileTap={{ scale: 0.98 }}
        >
          {isNavigating ? 'Loading...' : 'Continue Analysis'}
        </motion.button>
      </motion.div>
    </AnimatePresence>
  )
}
