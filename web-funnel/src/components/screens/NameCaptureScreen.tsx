'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useFunnelStore } from '@/store/funnelStore'
import { ROUTES } from '@/lib/routes'
import { User, ArrowRight } from 'lucide-react'

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

export default function NameCaptureScreen() {
  const router = useRouter()
  const { setName, profile } = useFunnelStore()
  const [name, setNameValue] = useState(profile.name || '')
  const [error, setError] = useState('')
  const [isNavigating, setIsNavigating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // Prefetch next route
  useEffect(() => {
    router.prefetch(ROUTES.loading)
  }, [router])
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])
  
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    
    if (isNavigating) return
    
    if (!name.trim()) {
      setError('Please enter your name')
      return
    }
    
    setIsNavigating(true)
    setName(name.trim())
    
    // Small delay for button feedback
    timeoutRef.current = setTimeout(() => {
      router.push(ROUTES.loading)
    }, 150)
  }, [name, isNavigating, setName, router])
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="name-capture-screen"
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
          <User className="w-10 h-10" />
        </motion.div>
        
        {/* Headline */}
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-text-primary mb-3 text-center font-serif max-w-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          What should we call you?
        </motion.h2>
        
        <motion.p 
          className="text-text-secondary text-center mb-8 max-w-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          We'll personalize your experience just for you
        </motion.p>
        
        {/* Name form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setNameValue(e.target.value)
                setError('')
              }}
              placeholder="Enter your first name"
              className={`
                input-field text-lg pr-14
                ${error ? 'border-status-error ring-2 ring-status-error/20' : ''}
              `}
              autoComplete="given-name"
              autoFocus
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
          {isNavigating ? 'Loading...' : 'Continue'}
        </motion.button>
      </motion.div>
    </AnimatePresence>
  )
}
