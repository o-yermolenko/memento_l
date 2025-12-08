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
          
          {/* Progress curve - SVG */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="33%" stopColor="#F97316" />
                <stop offset="66%" stopColor="#EAB308" />
                <stop offset="100%" stopColor="#22C55E" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 0 180 Q 60 170, 90 140 Q 120 110, 180 80 Q 240 50, 300 30 Q 330 20, 360 15"
              fill="none"
              stroke="url(#curveGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </svg>
          
          {/* Data points */}
          <motion.div 
            className="absolute"
            style={{ left: '5%', bottom: '5%' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow" />
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Today
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-red-500" />
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute"
            style={{ left: '30%', bottom: '35%' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="w-3 h-3 rounded-full bg-orange-500 border-2 border-white shadow" />
          </motion.div>
          
          <motion.div 
            className="absolute"
            style={{ left: '55%', bottom: '60%' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3 }}
          >
            <div className="w-3 h-3 rounded-full bg-yellow-500 border-2 border-white shadow" />
          </motion.div>
          
          <motion.div 
            className="absolute"
            style={{ left: '80%', bottom: '85%' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.6 }}
          >
            <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow" />
            {showAfterLabel && (
              <motion.div 
                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                After using
                <br />Memento
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-green-600" />
              </motion.div>
            )}
          </motion.div>
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
