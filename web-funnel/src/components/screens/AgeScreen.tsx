'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useFunnelStore, AgeRange } from '@/store/funnelStore'
import { ChevronRight, Check } from 'lucide-react'
import { ROUTES } from '@/lib/routes'

// Selection feedback delay
const SELECTION_DELAY = 400

const ageOptions: { label: string; value: AgeRange }[] = [
  { label: '18-24', value: '18-24' },
  { label: '25-34', value: '25-34' },
  { label: '35-44', value: '35-44' },
  { label: '45-54', value: '45-54' },
  { label: '55-64', value: '55-64' },
  { label: '65+', value: '65+' },
]

export default function AgeScreen() {
  const router = useRouter()
  const { setAge } = useFunnelStore()
  const [selectedAge, setSelectedAge] = useState<AgeRange | null>(null)
  const [isNavigating, setIsNavigating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // Prefetch next route
  useEffect(() => {
    router.prefetch(ROUTES.consent)
  }, [router])
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])
  
  const handleSelect = useCallback((age: AgeRange) => {
    // Prevent double-taps
    if (isNavigating || selectedAge !== null) return
    
    // Show selection immediately
    setSelectedAge(age)
    setIsNavigating(true)
    setAge(age)
    
    // Navigate after delay
    timeoutRef.current = setTimeout(() => {
      router.push(ROUTES.consent)
    }, SELECTION_DELAY)
  }, [isNavigating, selectedAge, setAge, router])
  
  return (
    <div className="flex flex-col items-center px-4 py-8 animate-fade-in-right">
      {/* Question */}
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 font-serif">
          What chapter of life are you in?
        </h2>
        <p className="text-text-secondary animate-fade-in animation-delay-100">
          We use this to personalize your experience
        </p>
      </div>
      
      {/* Age options - CSS animations for smooth mobile */}
      <div className="w-full max-w-md space-y-3">
        {ageOptions.map((option, index) => {
          const isSelected = selectedAge === option.value
          const isOther = selectedAge !== null && selectedAge !== option.value
          
          return (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              disabled={isNavigating}
              className={`
                w-full option-tile text-left text-lg font-medium text-text-primary 
                flex items-center justify-between group
                select-none touch-manipulation
                active:scale-[0.98] transition-transform duration-150
                animate-fade-in-up
                ${isSelected ? 'selected' : ''}
                ${isOther ? 'opacity-40' : ''}
              `}
              style={{ animationDelay: `${50 + index * 40}ms` }}
            >
              {/* Selection indicator */}
              <div className="flex items-center gap-4">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    transition-colors duration-200
                    ${isSelected 
                      ? 'bg-primary text-white' 
                      : 'bg-background-secondary text-text-tertiary group-hover:bg-primary/10 group-hover:text-primary'
                    }
                  `}
                >
                  {isSelected ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                    >
                      <Check className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <div className="w-5 h-5 border-2 border-current rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 rounded-full bg-current transition-all group-hover:w-2 group-hover:h-2" />
                    </div>
                  )}
                </div>
                
                <span className={`
                  transition-colors duration-200
                  ${isSelected ? 'text-primary' : ''}
                `}>
                  {option.label}
                </span>
              </div>
              
              {/* Arrow */}
              <div className={`transition-transform duration-200 ${isSelected ? 'translate-x-1' : ''}`}>
                <ChevronRight className={`
                  w-5 h-5 transition-colors duration-200
                  ${isSelected ? 'text-primary' : 'text-text-tertiary group-hover:text-primary'}
                `} />
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
