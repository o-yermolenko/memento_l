'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useFunnelStore } from '@/store/funnelStore'
import { Heart, Shield, Sparkles } from 'lucide-react'
import { ROUTES } from '@/lib/routes'

export default function ConsentScreen() {
  const router = useRouter()
  const { profile } = useFunnelStore()
  
  const handleContinue = () => {
    router.push(ROUTES.socialProof)
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-8"
    >
      {/* Icon */}
      <motion.div 
        className="mb-6 p-5 rounded-full bg-primary/10 text-primary"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
      >
        <Heart className="w-10 h-10" />
      </motion.div>
      
      {/* Headline */}
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-text-primary mb-4 text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        We're glad you're here
      </motion.h2>
      
      {/* Body copy */}
      <motion.div 
        className="text-center max-w-sm mb-8 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-accent-green" />
          <span>100% Private</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-accent-gold" />
          <span>Science-based</span>
        </div>
      </motion.div>
      
      {/* CTA Button */}
      <motion.button
        onClick={handleContinue}
        className="btn-primary text-lg px-12 uppercase tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        I'm Ready to Begin
      </motion.button>
    </motion.div>
  )
}
