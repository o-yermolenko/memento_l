'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { interstitials, InterstitialScreen as InterstitialData } from '@/data/questions'
import { ROUTES } from '@/lib/routes'
import { useFunnelStore } from '@/store/funnelStore'
import { Users, FlaskConical, UserCheck, TrendingUp, Zap, Star, ArrowRight } from 'lucide-react'

interface InterstitialScreenProps {
  interstitialId: string
}

// Map interstitial to next route
const getNextRouteForInterstitial = (interstitialId: string): string => {
  switch (interstitialId) {
    case 'science':
      return ROUTES.quiz(15)
    case 'expert_review':
      return ROUTES.quiz(22)
    case 'social_proof_2':
      return ROUTES.email
    default:
      return ROUTES.quiz(1)
  }
}

const getIcon = (type: InterstitialData['type']) => {
  switch (type) {
    case 'social_proof':
      return <Users className="w-12 h-12" />
    case 'science':
      return <FlaskConical className="w-12 h-12" />
    case 'expert':
      return <UserCheck className="w-12 h-12" />
    case 'stat':
      return <TrendingUp className="w-12 h-12" />
    case 'testimonial':
      return <Star className="w-12 h-12 fill-accent-gold text-accent-gold" />
    default:
      return <Zap className="w-12 h-12" />
  }
}

const getBackgroundImage = (type: InterstitialData['type']) => {
  switch (type) {
    case 'science':
      return '/images/interstitials/science.jpg'
    case 'expert':
      return '/images/interstitials/expert.jpg'
    case 'stat':
      return '/images/interstitials/progress.jpg'
    default:
      return null
  }
}

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

export default function InterstitialScreen({ interstitialId }: InterstitialScreenProps) {
  const router = useRouter()
  const { profile } = useFunnelStore()
  const [isNavigating, setIsNavigating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const interstitial = interstitials[interstitialId]
  const nextRoute = getNextRouteForInterstitial(interstitialId)
  
  // Gender-specific transformation images
  const isFemale = profile.gender === 'female'
  const beforeImage = isFemale ? '/images/transformation/before-female.jpg' : '/images/transformation/before.jpg'
  const afterImage = isFemale ? '/images/transformation/after-female.jpg' : '/images/transformation/after.jpg'
  
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
  
  if (!interstitial) {
    handleContinue()
    return null
  }
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`interstitial-${interstitialId}`}
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-8"
      >
        {interstitial.type === 'testimonial' ? (
          <div className="w-full max-w-md text-center">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex justify-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Star className="w-6 h-6 fill-accent-gold text-accent-gold" />
                  </motion.div>
                ))}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 font-serif">
                "{interstitial.headline}"
              </h2>
              <p className="text-lg text-text-secondary mb-6">
                {interstitial.subheadline?.split('•').map((part, i) => (
                  <span key={i} className={i > 0 ? 'block' : ''}>
                    {part.trim()}
                  </span>
                ))}
              </p>
            </motion.div>
            
            <motion.div 
              className="w-full grid grid-cols-[1fr,auto,1fr] gap-4 items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Before */}
              <div className="card p-4 text-center">
                <div className="w-32 h-32 mx-auto mb-2 rounded-full overflow-hidden shadow-lg relative bg-background-secondary">
                  <Image 
                    src={beforeImage} 
                    alt="Before" 
                    fill
                    sizes="128px"
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="text-sm text-text-tertiary">Before</p>
              </div>
              
              {/* Arrow */}
              <div className="flex flex-col items-center">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              
              {/* After */}
              <div className="card p-4 text-center border-primary border-2">
                <div className="w-32 h-32 mx-auto mb-2 rounded-full overflow-hidden shadow-lg relative bg-background-secondary">
                  <Image 
                    src={afterImage} 
                    alt="After" 
                    fill
                    sizes="128px"
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="text-sm text-text-tertiary">After</p>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-sm text-text-tertiary mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {interstitial.statLabel}
            </motion.p>
            
            <motion.button
              onClick={handleContinue}
              disabled={isNavigating}
              className="btn-primary text-lg px-12 mt-8 select-none touch-manipulation disabled:opacity-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              whileTap={{ scale: 0.98 }}
            >
              {isNavigating ? 'Loading...' : (interstitial.ctaText || 'Continue')}
            </motion.button>
          </div>
        ) : (
          <>
            {/* Background Image for science/expert/stat */}
            {getBackgroundImage(interstitial.type) && (
              <motion.div 
                className="w-full max-w-md mb-6 rounded-2xl overflow-hidden relative aspect-video bg-background-secondary"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Image 
                  src={getBackgroundImage(interstitial.type)!} 
                  alt="" 
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover"
                  priority
                />
              </motion.div>
            )}
            
            {/* Icon - only show if no background image */}
            {!getBackgroundImage(interstitial.type) && (
              <motion.div 
                className="mb-8 p-6 rounded-full bg-primary/10 text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
              >
                {getIcon(interstitial.type)}
              </motion.div>
            )}
            
            {/* Stat value if present */}
            {interstitial.statValue && (
              <motion.div 
                className="text-center mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
              >
                <span className="text-5xl md:text-6xl font-bold gradient-text font-serif">
                  {interstitial.statValue}
                </span>
              </motion.div>
            )}
            
            {/* Headline */}
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-text-primary mb-4 text-center font-serif max-w-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {interstitial.headline}
            </motion.h2>
            
            {/* Subheadline / stat label */}
            {(interstitial.subheadline || interstitial.statLabel) && (
              <motion.p 
                className="text-lg text-text-secondary text-center max-w-md mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                {interstitial.subheadline || interstitial.statLabel}
              </motion.p>
            )}
            
            {/* Expert avatars for expert type */}
            {interstitial.type === 'expert' && (
              <motion.div 
                className="flex -space-x-4 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-full border-4 border-background-primary overflow-hidden relative bg-background-secondary"
                  >
                    <Image 
                      src={`/images/map/avatar-${i}.jpg`}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            )}
            
            {/* CTA Button */}
            <motion.button
              onClick={handleContinue}
              disabled={isNavigating}
              className="btn-primary text-lg px-12 select-none touch-manipulation disabled:opacity-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              whileTap={{ scale: 0.98 }}
            >
              {isNavigating ? 'Loading...' : (interstitial.ctaText || 'Continue')}
            </motion.button>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
