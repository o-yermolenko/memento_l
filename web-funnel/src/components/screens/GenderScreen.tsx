'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useFunnelStore, Gender } from '@/store/funnelStore'
import { ChevronRight, Check } from 'lucide-react'
import { ROUTES } from '@/lib/routes'

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

const cardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1 + i * 0.1,
      type: 'spring',
      stiffness: 300,
      damping: 25,
    },
  }),
}

export default function GenderScreen() {
  const router = useRouter()
  const { setGender } = useFunnelStore()
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null)
  const [isNavigating, setIsNavigating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // Prefetch next route
  useEffect(() => {
    router.prefetch(ROUTES.age)
  }, [router])
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])
  
  const handleSelect = useCallback((gender: Gender) => {
    // Prevent double-taps
    if (isNavigating || selectedGender !== null) return
    
    // Show selection immediately
    setSelectedGender(gender)
    setIsNavigating(true)
    setGender(gender)
    
    // Navigate after delay
    timeoutRef.current = setTimeout(() => {
      router.push(ROUTES.age)
    }, SELECTION_DELAY)
  }, [isNavigating, selectedGender, setGender, router])
  
  const genderOptions: { gender: Gender; label: string; image: string }[] = [
    { gender: 'male', label: 'Male', image: '/images/avatars/male.png' },
    { gender: 'female', label: 'Female', image: '/images/avatars/female.png' },
  ]
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="gender-screen"
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center px-4 py-8"
      >
        {/* Headline */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1F1A17' }}>
            YOUR PERSONALIZED<br />
            EMOTIONAL WELLNESS JOURNEY
          </h2>
          <p className="text-lg" style={{ color: '#6B6360' }}>
            DISCOVER YOUR PATH TO INNER STABILITY
          </p>
        </motion.div>
        
        {/* Quiz badge */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
        >
          <span 
            className="inline-block px-4 py-2 font-semibold text-sm rounded-full"
            style={{ backgroundColor: 'rgba(217, 79, 48, 0.1)', color: '#D94F30', border: '1px solid rgba(217, 79, 48, 0.2)' }}
          >
            3-MINUTE ASSESSMENT
          </span>
        </motion.div>
        
        {/* Gender options */}
        <div className="w-full max-w-md grid grid-cols-2 gap-4">
          {genderOptions.map((option, index) => {
            const isSelected = selectedGender === option.gender
            const isOther = selectedGender !== null && selectedGender !== option.gender
            
            return (
              <motion.button
                key={option.gender}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                custom={index}
                onClick={() => handleSelect(option.gender)}
                disabled={isNavigating}
                className={`
                  group relative overflow-hidden rounded-2xl border-2 
                  select-none touch-manipulation
                  transition-all duration-200
                  ${isSelected ? 'ring-4 ring-primary/30' : ''}
                  ${isOther ? 'opacity-40 scale-95' : ''}
                `}
                style={{ 
                  borderColor: isSelected ? '#D94F30' : '#E5DDD2', 
                  backgroundColor: '#FFFFFF' 
                }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-b from-primary/5 to-primary/10">
                  <Image 
                    src={option.image}
                    alt={option.label}
                    fill
                    sizes="(max-width: 768px) 50vw, 200px"
                    className="object-cover object-top"
                    priority
                  />
                  
                  {/* Selection overlay */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-primary/10 flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                          className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg"
                        >
                          <Check className="w-8 h-8 text-white" />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <motion.div 
                  className="p-4 flex items-center justify-between" 
                  style={{ backgroundColor: '#D94F30' }}
                  animate={isSelected ? { backgroundColor: '#B8432A' } : { backgroundColor: '#D94F30' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-white font-semibold text-lg">{option.label}</span>
                  <motion.div
                    animate={isSelected ? { x: 4 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5 text-white/80" />
                  </motion.div>
                </motion.div>
              </motion.button>
            )
          })}
        </div>
        
        {/* Legal disclaimer */}
        <motion.p 
          className="mt-8 text-center text-xs max-w-md" 
          style={{ color: '#8A8582' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          By clicking "Male" or "Female" you agree with the{' '}
          <a href="#" style={{ color: '#D94F30' }} className="hover:underline">Terms of Use and Service</a>,{' '}
          <a href="#" style={{ color: '#D94F30' }} className="hover:underline">Privacy Policy</a>,{' '}
          <a href="#" style={{ color: '#D94F30' }} className="hover:underline">Subscription Policy</a> and{' '}
          <a href="#" style={{ color: '#D94F30' }} className="hover:underline">Cookie Policy</a>
        </motion.p>
      </motion.div>
    </AnimatePresence>
  )
}
