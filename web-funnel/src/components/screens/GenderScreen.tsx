'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useFunnelStore, Gender } from '@/store/funnelStore'
import { ChevronRight, Check } from 'lucide-react'
import { ROUTES } from '@/lib/routes'

// Selection feedback delay
const SELECTION_DELAY = 400

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
    { gender: 'male', label: 'Male', image: '/images/avatars/male.jpg' },
    { gender: 'female', label: 'Female', image: '/images/avatars/female.jpg' },
  ]
  
  return (
    <div className="flex flex-col items-center px-4 py-8 animate-fade-in">
      {/* Headline */}
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1F1A17' }}>
          YOUR PERSONALIZED<br />
          EMOTIONAL WELLNESS JOURNEY
        </h2>
        <p className="text-lg animate-fade-in animation-delay-100" style={{ color: '#6B6360' }}>
          DISCOVER YOUR PATH TO INNER STABILITY
        </p>
      </div>
      
      {/* Quiz badge */}
      <div className="mb-8 animate-fade-in-up animation-delay-150">
        <span 
          className="inline-block px-4 py-2 font-semibold text-sm rounded-full"
          style={{ backgroundColor: 'rgba(217, 79, 48, 0.1)', color: '#D94F30', border: '1px solid rgba(217, 79, 48, 0.2)' }}
        >
          3-MINUTE ASSESSMENT
        </span>
      </div>
      
      {/* Gender options - CSS animations for smooth mobile */}
      <div className="w-full max-w-md grid grid-cols-2 gap-4">
        {genderOptions.map((option, index) => {
          const isSelected = selectedGender === option.gender
          const isOther = selectedGender !== null && selectedGender !== option.gender
          
          return (
            <button
              key={option.gender}
              onClick={() => handleSelect(option.gender)}
              disabled={isNavigating}
              className={`
                group relative overflow-hidden rounded-2xl border-2 
                select-none touch-manipulation
                transition-all duration-200 active:scale-[0.97]
                animate-fade-in-up
                ${isSelected ? 'ring-4 ring-primary/30' : ''}
                ${isOther ? 'opacity-40 scale-95' : ''}
              `}
              style={{ 
                borderColor: isSelected ? '#D94F30' : '#E5DDD2', 
                backgroundColor: '#FFFFFF',
                animationDelay: `${200 + index * 100}ms`
              }}
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
              
              <div 
                className={`p-4 flex items-center justify-between transition-colors duration-200`}
                style={{ backgroundColor: isSelected ? '#B8432A' : '#D94F30' }}
              >
                <span className="text-white font-semibold text-lg">{option.label}</span>
                <div className={`transition-transform duration-200 ${isSelected ? 'translate-x-1' : ''}`}>
                  <ChevronRight className="w-5 h-5 text-white/80" />
                </div>
              </div>
            </button>
          )
        })}
      </div>
      
      {/* Legal disclaimer */}
      <p 
        className="mt-8 text-center text-xs max-w-md animate-fade-in animation-delay-400" 
        style={{ color: '#8A8582' }}
      >
        By clicking "Male" or "Female" you agree with the{' '}
        <Link href="/terms" style={{ color: '#D94F30' }} className="hover:underline">Terms of Use and Service</Link>,{' '}
        <Link href="/privacy" style={{ color: '#D94F30' }} className="hover:underline">Privacy Policy</Link>,{' '}
        <Link href="/subscription" style={{ color: '#D94F30' }} className="hover:underline">Subscription Policy</Link> and{' '}
        <a href="#" style={{ color: '#D94F30' }} className="hover:underline">Cookie Policy</a>
      </p>
    </div>
  )
}
