'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
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
      return '/images/interstitials/science.png'
    case 'expert':
      return '/images/interstitials/expert.png'
    case 'stat':
      return '/images/interstitials/progress.png'
    default:
      return null
  }
}

export default function InterstitialScreen({ interstitialId }: InterstitialScreenProps) {
  const router = useRouter()
  const { profile } = useFunnelStore()
  const interstitial = interstitials[interstitialId]
  
  // Gender-specific transformation images
  const isFemale = profile.gender === 'female'
  const beforeImage = isFemale ? '/images/transformation/before-female.png' : '/images/transformation/before.png'
  const afterImage = isFemale ? '/images/transformation/after-female.png' : '/images/transformation/after.png'
  
  const handleContinue = () => {
    const nextRoute = getNextRouteForInterstitial(interstitialId)
    router.push(nextRoute)
  }
  
  if (!interstitial) {
    handleContinue()
    return null
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-8"
    >
      {interstitial.type === 'testimonial' ? (
        <motion.div
          className="w-full max-w-md text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="mb-6">
            <div className="flex justify-center mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent-gold text-accent-gold" />
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
          </div>
          
          <div className="w-full grid grid-cols-[1fr,auto,1fr] gap-4 items-center mb-8">
            {/* Before */}
            <div className="card p-4 text-center">
              <div className="w-32 h-32 mx-auto mb-2 rounded-full overflow-hidden shadow-lg">
                <img 
                  src={beforeImage} 
                  alt="Before" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-text-tertiary">Before</p>
            </div>
            
            {/* Arrow */}
            <div className="flex flex-col items-center">
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
            
            {/* After */}
            <div className="card p-4 text-center border-primary border-2">
              <div className="w-32 h-32 mx-auto mb-2 rounded-full overflow-hidden shadow-lg">
                <img 
                  src={afterImage} 
                  alt="After" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-text-tertiary">After</p>
            </div>
          </div>
          
          <motion.p
            className="text-sm text-text-tertiary mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {interstitial.statLabel}
          </motion.p>
          
          <motion.button
            onClick={handleContinue}
            className="btn-primary text-lg px-12 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {interstitial.ctaText || 'Continue'}
          </motion.button>
        </motion.div>
      ) : (
        <>
          {/* Background Image for science/expert/stat */}
          {getBackgroundImage(interstitial.type) && (
            <motion.div
              className="w-full max-w-md mb-6 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <img 
                src={getBackgroundImage(interstitial.type)!} 
                alt="" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          )}
          
          {/* Icon - only show if no background image */}
          {!getBackgroundImage(interstitial.type) && (
            <motion.div
              className="mb-8 p-6 rounded-full bg-primary/10 text-primary"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              {getIcon(interstitial.type)}
            </motion.div>
          )}
          
          {/* Stat value if present */}
          {interstitial.statValue && (
            <motion.div
              className="text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-5xl md:text-6xl font-bold gradient-text font-serif">
                {interstitial.statValue}
              </span>
            </motion.div>
          )}
          
          {/* Headline */}
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-text-primary mb-4 text-center font-serif max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {interstitial.headline}
          </motion.h2>
          
          {/* Subheadline / stat label */}
          {(interstitial.subheadline || interstitial.statLabel) && (
            <motion.p
              className="text-lg text-text-secondary text-center max-w-md mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {interstitial.subheadline || interstitial.statLabel}
            </motion.p>
          )}
          
          {/* Expert avatars for expert type */}
          {interstitial.type === 'expert' && (
            <motion.div
              className="flex -space-x-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-14 h-14 rounded-full border-4 border-background-primary overflow-hidden"
                >
                  <img 
                    src={`/images/map/avatar-${i}.png`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          )}
          
          {/* CTA Button */}
          <motion.button
            onClick={handleContinue}
            className="btn-primary text-lg px-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {interstitial.ctaText || 'Continue'}
          </motion.button>
        </>
      )}
    </motion.div>
  )
}
