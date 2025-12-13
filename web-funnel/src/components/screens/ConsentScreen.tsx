'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useFunnelStore } from '@/store/funnelStore'
import { Heart, Shield, Brain } from 'lucide-react'
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

export default function ConsentScreen() {
  const router = useRouter()
  const { profile } = useFunnelStore()
  const [isNavigating, setIsNavigating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // Prefetch next route
  useEffect(() => {
    router.prefetch(ROUTES.socialProof)
  }, [router])
  
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
      router.push(ROUTES.socialProof)
    }, 150)
  }, [isNavigating, router])
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="consent-screen"
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
          <Heart className="w-10 h-10" />
        </motion.div>
        
        {/* Headline */}
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-text-primary mb-4 text-center max-w-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          We're glad you're here
        </motion.h2>
        
        {/* Body copy */}
        <motion.div 
          className="text-center max-w-sm mb-8 space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-text-secondary leading-relaxed">
            To create your personalized <span className="text-primary font-semibold">Emotional Blueprint</span>, 
            we'll ask a few questions about your emotional patterns and experiences.
          </p>
          <p className="text-text-tertiary text-sm">
            Your responses help us build a plan that actually works for you — 
            not generic advice, but <span className="font-medium">real insights tailored to your patterns</span>.
          </p>
        </motion.div>
        
        {/* Trust indicators */}
        <motion.div 
          className="flex items-center gap-6 mb-8 text-sm text-text-tertiary"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <span>100% Private</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-accent-gold" />
            <span>Science-based</span>
          </div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.button
          onClick={handleContinue}
          disabled={isNavigating}
          className="btn-primary text-lg px-12 uppercase tracking-wider select-none touch-manipulation disabled:opacity-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileTap={{ scale: 0.98 }}
        >
          {isNavigating ? 'Loading...' : "I'm Ready to Begin"}
        </motion.button>
      </motion.div>
    </AnimatePresence>
  )
}
