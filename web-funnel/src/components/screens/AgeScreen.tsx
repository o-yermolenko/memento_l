'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useFunnelStore, AgeRange } from '@/store/funnelStore'
import { ROUTES } from '@/lib/routes'

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
  
  const handleSelect = (age: AgeRange) => {
    setAge(age)
    router.push(ROUTES.consent)
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center px-4 py-8"
    >
      {/* Question */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 font-serif">
          What chapter of life are you in?
        </h2>
        <p className="text-text-secondary">
          We use this to personalize your experience
        </p>
      </motion.div>
      
      {/* Age options */}
      <motion.div 
        className="w-full max-w-md space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {ageOptions.map((option, index) => (
          <motion.button
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className="w-full option-tile text-left text-lg font-medium text-text-primary flex items-center justify-between group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{option.label}</span>
            <svg 
              className="w-5 h-5 text-text-tertiary group-hover:text-primary group-hover:translate-x-1 transition-all" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  )
}
