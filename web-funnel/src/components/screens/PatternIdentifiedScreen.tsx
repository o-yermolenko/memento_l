'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useFunnelStore } from '@/store/funnelStore'
import { Sparkles, Check } from 'lucide-react'
import { ROUTES } from '@/lib/routes'

export default function PatternIdentifiedScreen() {
  const router = useRouter()
  const { profile, answers } = useFunnelStore()
  
  // Detect pattern based on current answers
  const getDetectedPattern = () => {
    const intensityAnswer = answers.find(a => a.questionId === 'emotional_intensity')
    const exhaustionAnswer = answers.find(a => a.questionId === 'exhaustion')
    
    if (intensityAnswer?.value === 'often' || exhaustionAnswer?.value === 'often') {
      return 'emotional sensitivity'
    }
    return 'overthinking tendencies'
  }
  
  const pattern = getDetectedPattern()
  
  const handleContinue = () => {
    router.push(ROUTES.quiz(9))
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-8"
    >
      {/* Animated icon */}
      <motion.div 
        className="mb-6 p-5 rounded-full bg-accent-green/10 text-accent-green"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
      >
        <Sparkles className="w-10 h-10" />
      </motion.div>
      
      {/* Headline */}
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-text-primary mb-4 text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Pattern Detected!
      </motion.h2>
      
      {/* Pattern badge */}
      <motion.div
        className="mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-primary font-semibold">
          Signs of {pattern}
        </span>
      </motion.div>
      
      {/* Explanation */}
      <motion.p 
        className="text-text-secondary text-center max-w-sm mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Based on your responses, we're seeing a clear pattern. 
        Let's continue to understand your unique emotional blueprint better.
      </motion.p>
      
      {/* Progress indicators */}
      <motion.div 
        className="flex gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2 text-accent-green">
          <Check className="w-5 h-5" />
          <span className="text-sm font-medium">Section 1 Complete</span>
        </div>
      </motion.div>
      
      {/* CTA */}
      <motion.button
        onClick={handleContinue}
        className="btn-primary text-lg px-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Continue Analysis
      </motion.button>
    </motion.div>
  )
}
