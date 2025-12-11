'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ROUTES } from '@/lib/routes'

// Avatar positions on world map - like Liven
const avatarPins = [
  { x: 15, y: 35, delay: 0.2, photo: '/images/map/avatar-3.png' },   // South America - Hispanic Man
  { x: 25, y: 25, delay: 0.3, photo: '/images/map/avatar-1.png' },   // North America - Asian Woman
  { x: 35, y: 15, delay: 0.4, photo: '/images/map/avatar-5.png' },   // Canada - Black Woman
  { x: 48, y: 20, delay: 0.5, photo: '/images/map/avatar-4.png' },   // Europe - White Man
  { x: 52, y: 35, delay: 0.6, photo: '/images/map/avatar-2.png' },   // Africa - Black Man
  { x: 65, y: 25, delay: 0.7, photo: '/images/map/avatar-7.png' },   // Middle East - Middle Eastern Man
  { x: 75, y: 30, delay: 0.8, photo: '/images/map/avatar-6.png' },   // Asia - Asian Man
]

export default function SocialProofScreen() {
  const router = useRouter()
  
  const handleContinue = () => {
    router.push(ROUTES.quiz(1))
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-8"
    >
      {/* World map with pins - Liven style */}
      <motion.div 
        className="relative w-full max-w-md aspect-[2/1] mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {/* Dotted world map background */}
        <div className="absolute inset-0 opacity-30">
          <svg viewBox="0 0 100 50" className="w-full h-full">
            {/* Simplified world map dots */}
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
        
        {/* Avatar pins */}
        {avatarPins.map((pin, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            initial={{ opacity: 0, y: -20, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: pin.delay, type: 'spring', stiffness: 200 }}
          >
            {/* Pin shape */}
            <div className="relative">
              <div className="w-10 h-12 flex flex-col items-center">
                {/* Avatar circle */}
                <div className="w-8 h-8 rounded-full border-2 border-white shadow-lg overflow-hidden" style={{ backgroundColor: '#D94F30' }}>
                  <img 
                    src={pin.photo} 
                    alt="" 
                    className="w-full h-full object-cover"
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
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
        className="btn-primary text-lg px-12 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Continue
      </motion.button>
    </motion.div>
  )
}
