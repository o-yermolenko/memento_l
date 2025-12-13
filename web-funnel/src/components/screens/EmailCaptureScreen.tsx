'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useFunnelStore } from '@/store/funnelStore'
import { useSupabase } from '@/components/SupabaseProvider'
import { ROUTES } from '@/lib/routes'
import { Mail, Shield, ArrowRight } from 'lucide-react'

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

export default function EmailCaptureScreen() {
  const router = useRouter()
  const { setEmail, profile } = useFunnelStore()
  const { syncProfile, syncLead } = useSupabase()
  const [email, setEmailValue] = useState(profile.email || '')
  const [error, setError] = useState('')
  const [isNavigating, setIsNavigating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // Prefetch next route
  useEffect(() => {
    router.prefetch(ROUTES.emailOptin)
  }, [router])
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])
  
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
  
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isNavigating) return
    
    if (!email.trim()) {
      setError('Please enter your email address')
      return
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }
    
    setIsNavigating(true)
    setEmail(email)
    
    // Sync to Supabase in background (fire and forget)
    syncProfile()
    syncLead()
    
    // Small delay for button feedback
    timeoutRef.current = setTimeout(() => {
      router.push(ROUTES.emailOptin)
    }, 150)
  }, [email, isNavigating, setEmail, syncProfile, syncLead, router])
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="email-capture-screen"
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
          <Mail className="w-10 h-10" />
        </motion.div>
        
        {/* Headline */}
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-text-primary mb-3 text-center font-serif max-w-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Where should we send your{' '}
          <span className="gradient-text">Emotional Blueprint</span>?
        </motion.h2>
        
        <motion.p 
          className="text-text-secondary text-center mb-8 max-w-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Enter your email to see your personalized results and plan
        </motion.p>
        
        {/* Email form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmailValue(e.target.value)
                setError('')
              }}
              placeholder="Enter your email address"
              className={`
                input-field text-lg pr-14
                ${error ? 'border-status-error ring-2 ring-status-error/20' : ''}
              `}
              autoComplete="email"
            />
            <motion.button
              type="submit"
              disabled={isNavigating}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-150 disabled:opacity-50 select-none touch-manipulation"
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
          
          <AnimatePresence>
            {error && (
              <motion.p 
                className="text-status-error text-sm mt-2"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>
          
          {/* Privacy note */}
          <div className="flex items-center gap-2 mt-4 text-text-tertiary text-sm">
            <Shield className="w-4 h-4" />
            <span>We respect your privacy. No spam, ever.</span>
          </div>
        </motion.form>
        
        {/* Submit button */}
        <motion.button
          type="submit"
          onClick={handleSubmit}
          disabled={isNavigating}
          className="btn-primary text-lg px-12 mt-6 select-none touch-manipulation disabled:opacity-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileTap={{ scale: 0.98 }}
        >
          {isNavigating ? 'Loading...' : 'See My Results'}
        </motion.button>
      </motion.div>
    </AnimatePresence>
  )
}
