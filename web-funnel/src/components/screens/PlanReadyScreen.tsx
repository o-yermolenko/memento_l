'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useFunnelStore } from '@/store/funnelStore'
import { ROUTES } from '@/lib/routes'

export default function PlanReadyScreen() {
  const router = useRouter()
  const { profile } = useFunnelStore()
  
  const handleContinue = () => {
    router.push(ROUTES.paywall)
  }
  const [showAfterLabel, setShowAfterLabel] = useState(false)
  
  useEffect(() => {
    // Animate the "After using Memento" label after chart draws
    const timeout = setTimeout(() => {
      setShowAfterLabel(true)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col px-4 py-8 min-h-[80vh]"
    >
      {/* Header */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-primary">{profile.name || 'Friend'},</span>
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
          Your personal
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-primary">Emotional Blueprint</span>
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
          is ready!
        </h2>
      </motion.div>
      
      {/* Progress Chart - Liven style */}
      <motion.div 
        className="w-full max-w-md mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-bold text-text-primary text-center mb-6">
          Your Well-being level
        </h3>
        
        {/* Chart container */}
        <div className="relative h-48 mb-4">
          {/* Background gradient zones */}
          <div className="absolute inset-0 flex">
            <div className="flex-1 bg-gradient-to-t from-red-100 to-red-50" />
            <div className="flex-1 bg-gradient-to-t from-orange-100 to-orange-50" />
            <div className="flex-1 bg-gradient-to-t from-yellow-100 to-yellow-50" />
            <div className="flex-1 bg-gradient-to-t from-green-100 to-green-50" />
          </div>
          
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between py-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="border-t border-dashed border-gray-200" />
            ))}
          </div>
          
          {/* Curve SVG with viewBox matching container aspect ratio (roughly 2:1) */}
          <svg 
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox="0 0 400 192"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="33%" stopColor="#F97316" />
                <stop offset="66%" stopColor="#EAB308" />
                <stop offset="100%" stopColor="#22C55E" />
              </linearGradient>
            </defs>
            {/* Points: (48,154) -> (148,106) -> (248,67) -> (348,35) */}
            <motion.path
              d="M 48 154 C 98 130, 118 115, 148 106 C 178 97, 218 77, 248 67 C 278 57, 318 42, 348 35"
              fill="none"
              stroke="url(#curveGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            {/* Dot 1 */}
            <motion.circle cx="48" cy="154" r="8" fill="#EF4444" stroke="white" strokeWidth="3"
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} />
            {/* Dot 2 */}
            <motion.circle cx="148" cy="106" r="6" fill="#F97316" stroke="white" strokeWidth="2"
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }} />
            {/* Dot 3 */}
            <motion.circle cx="248" cy="67" r="6" fill="#EAB308" stroke="white" strokeWidth="2"
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.3 }} />
            {/* Dot 4 */}
            <motion.circle cx="348" cy="35" r="8" fill="#22C55E" stroke="white" strokeWidth="3"
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }} />
          </svg>
          
          {/* Today label */}
          <motion.div 
            className="absolute z-10"
            style={{ left: '12%', top: '80%' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Today
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-red-500" />
            </div>
          </motion.div>
          
          {/* After using Memento label */}
          {showAfterLabel && (
            <motion.div 
              className="absolute z-10"
              style={{ left: '87%', top: '18%' }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap text-center">
                After using<br />Memento
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary" />
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Week labels */}
        <div className="flex justify-between text-sm text-text-tertiary px-2">
          <span>WEEK 1</span>
          <span>WEEK 2</span>
          <span>WEEK 3</span>
          <span>WEEK 4</span>
        </div>
        
        {/* Disclaimer */}
        <p className="text-xs text-text-tertiary text-center mt-4">
          The chart is a non-customized illustration and results may vary
        </p>
      </motion.div>
      
      {/* Spacer */}
      <div className="flex-1" />
      
      {/* CTA */}
      <motion.button
        onClick={handleContinue}
        className="btn-primary w-full text-lg py-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Continue
      </motion.button>
    </motion.div>
  )
}
