'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ROUTES } from '@/lib/routes'

// Avatar positions on world map
const avatarPins = [
  { x: 15, y: 35, photo: '/images/map/avatar-3.jpg' },
  { x: 25, y: 25, photo: '/images/map/avatar-1.jpg' },
  { x: 35, y: 15, photo: '/images/map/avatar-5.jpg' },
  { x: 48, y: 20, photo: '/images/map/avatar-4.jpg' },
  { x: 52, y: 35, photo: '/images/map/avatar-2.jpg' },
  { x: 65, y: 25, photo: '/images/map/avatar-7.jpg' },
  { x: 75, y: 30, photo: '/images/map/avatar-6.jpg' },
]

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

const pinVariants = {
  initial: { opacity: 0, scale: 0, y: -10 },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.08,
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  }),
}

export default function SocialProofScreen() {
  const router = useRouter()
  const [isNavigating, setIsNavigating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // Prefetch next route
  useEffect(() => {
    router.prefetch(ROUTES.quiz(1))
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
      router.push(ROUTES.quiz(1))
    }, 150)
  }, [isNavigating, router])
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="social-proof-screen"
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-8"
      >
        {/* World map with pins */}
        <motion.div 
          className="relative w-full max-w-md aspect-[2/1] mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          {/* Dotted world map background */}
          <div className="absolute inset-0 opacity-30">
            <svg viewBox="0 0 100 50" className="w-full h-full">
              {/* North America */}
              {[...Array(20)].map((_, i) => (
                <circle key={`na-${i}`} cx={15 + (i % 5) * 3} cy={15 + Math.floor(i / 5) * 3} r="0.5" fill="currentColor" className="text-text-tertiary" />
              ))}
              {/* South America */}
              {[...Array(12)].map((_, i) => (
                <circle key={`sa-${i}`} cx={20 + (i % 3) * 3} cy={32 + Math.floor(i / 3) * 3} r="0.5" fill="currentColor" className="text-text-tertiary" />
              ))}
              {/* Europe */}
              {[...Array(15)].map((_, i) => (
                <circle key={`eu-${i}`} cx={45 + (i % 5) * 2} cy={12 + Math.floor(i / 5) * 2} r="0.5" fill="currentColor" className="text-text-tertiary" />
              ))}
              {/* Africa */}
              {[...Array(16)].map((_, i) => (
                <circle key={`af-${i}`} cx={48 + (i % 4) * 3} cy={28 + Math.floor(i / 4) * 3} r="0.5" fill="currentColor" className="text-text-tertiary" />
              ))}
              {/* Asia */}
              {[...Array(25)].map((_, i) => (
                <circle key={`as-${i}`} cx={60 + (i % 5) * 4} cy={15 + Math.floor(i / 5) * 3} r="0.5" fill="currentColor" className="text-text-tertiary" />
              ))}
              {/* Australia */}
              {[...Array(8)].map((_, i) => (
                <circle key={`au-${i}`} cx={80 + (i % 4) * 3} cy={38 + Math.floor(i / 4) * 3} r="0.5" fill="currentColor" className="text-text-tertiary" />
              ))}
            </svg>
          </div>
          
          {/* Avatar pins with staggered animation */}
          {avatarPins.map((pin, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              variants={pinVariants}
              initial="initial"
              animate="animate"
              custom={index}
            >
              <div className="relative">
                <div className="w-10 h-12 flex flex-col items-center">
                  {/* Avatar circle */}
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-lg overflow-hidden relative bg-primary">
                    <Image 
                      src={pin.photo} 
                      alt="" 
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  {/* Pin point */}
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent -mt-0.5" style={{ borderTopColor: '#D94F30' }} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Text content */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Join over <span className="text-primary">2,500,000</span> people
          </h2>
          <p className="text-lg text-text-secondary max-w-sm">
            Become part of a growing worldwide community and achieve your emotional wellness goals with us!
          </p>
        </motion.div>
        
        {/* CTA Button */}
        <motion.button
          onClick={handleContinue}
          disabled={isNavigating}
          className="btn-primary text-lg px-12 w-full max-w-md select-none touch-manipulation disabled:opacity-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileTap={{ scale: 0.98 }}
        >
          {isNavigating ? 'Loading...' : 'Continue'}
        </motion.button>
      </motion.div>
    </AnimatePresence>
  )
}
