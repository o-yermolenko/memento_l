'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useFunnelStore } from '@/store/funnelStore'
import { ROUTES } from '@/lib/routes'
import { Mail, Bell, X, Check } from 'lucide-react'

// Selection feedback delay
const SELECTION_DELAY = 400

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

const optionVariants = {
  initial: { opacity: 0, y: 15 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.08,
      type: 'spring',
      stiffness: 400,
      damping: 25,
    },
  }),
}

const checkVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 25,
    },
  },
}

export default function EmailOptinScreen() {
  const router = useRouter()
  const { setEmailOptIn } = useFunnelStore()
  const [selectedChoice, setSelectedChoice] = useState<boolean | null>(null)
  const [isNavigating, setIsNavigating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // Prefetch next route
  useEffect(() => {
    router.prefetch(ROUTES.name)
  }, [router])
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])
  
  const handleChoice = useCallback((optIn: boolean) => {
    // Prevent double-taps
    if (isNavigating || selectedChoice !== null) return
    
    // Show selection immediately
    setSelectedChoice(optIn)
    setIsNavigating(true)
    setEmailOptIn(optIn)
    
    // Navigate after delay
    timeoutRef.current = setTimeout(() => {
      router.push(ROUTES.name)
    }, SELECTION_DELAY)
  }, [isNavigating, selectedChoice, setEmailOptIn, router])
  
  const options = [
    {
      optIn: true,
      icon: Mail,
      iconBg: 'bg-primary/10 text-primary',
      title: 'Yes, send me insights',
      subtitle: 'Get weekly tips for emotional wellness',
    },
    {
      optIn: false,
      icon: X,
      iconBg: 'bg-background-secondary text-text-tertiary',
      title: 'No thanks',
      subtitle: 'Just show me my results',
    },
  ]
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="email-optin-screen"
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
          <Bell className="w-10 h-10" />
        </motion.div>
        
        {/* Headline */}
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-text-primary mb-3 text-center font-serif max-w-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Would you like emotional wellness tips in your inbox?
        </motion.h2>
        
        <motion.p 
          className="text-text-secondary text-center mb-8 max-w-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Get weekly insights, practices, and support from our team
        </motion.p>
        
        {/* Options */}
        <div className="w-full max-w-md space-y-3">
          {options.map((option, index) => {
            const isSelected = selectedChoice === option.optIn
            const isOther = selectedChoice !== null && selectedChoice !== option.optIn
            const Icon = option.icon
            
            return (
              <motion.button
                key={String(option.optIn)}
                variants={optionVariants}
                initial="initial"
                animate="animate"
                custom={index}
                onClick={() => handleChoice(option.optIn)}
                disabled={isNavigating}
                className={`
                  w-full option-tile flex items-center gap-4 text-left
                  select-none touch-manipulation
                  ${isSelected ? 'selected' : ''}
                  ${isOther ? 'opacity-40' : ''}
                `}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div 
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    isSelected ? 'bg-primary text-white' : option.iconBg
                  }`}
                  animate={isSelected ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  {isSelected ? (
                    <motion.div
                      variants={checkVariants}
                      initial="initial"
                      animate="animate"
                    >
                      <Check className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}
                </motion.div>
                <div>
                  <span className={`block text-lg font-semibold transition-colors duration-200 ${
                    isSelected ? 'text-primary' : 'text-text-primary'
                  }`}>
                    {option.title}
                  </span>
                  <span className="text-sm text-text-tertiary">{option.subtitle}</span>
                </div>
              </motion.button>
            )
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
