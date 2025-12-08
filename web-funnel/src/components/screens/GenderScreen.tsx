'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useFunnelStore, Gender } from '@/store/funnelStore'
import { ChevronRight } from 'lucide-react'
import { ROUTES } from '@/lib/routes'

export default function GenderScreen() {
  const router = useRouter()
  const { setGender } = useFunnelStore()
  
  const handleSelect = (gender: Gender) => {
    setGender(gender)
    router.push(ROUTES.age)
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center px-4 py-8"
    >
      {/* Headline */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 font-serif">
          YOUR PERSONALIZED<br />
          EMOTIONAL WELLNESS JOURNEY
        </h2>
        <p className="text-text-secondary text-lg">
          DISCOVER YOUR PATH TO INNER STABILITY
        </p>
      </motion.div>
      
      {/* Quiz badge */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full border border-primary/20">
          3-MINUTE ASSESSMENT
        </span>
      </motion.div>
      
      {/* Gender options */}
      <motion.div 
        className="w-full max-w-md grid grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* Male option */}
        <button
          onClick={() => handleSelect('male')}
          className="group relative overflow-hidden rounded-2xl border-2 border-border bg-background-card hover:border-primary transition-all duration-300 hover:shadow-lg"
        >
          <div className="aspect-[3/4] relative bg-gradient-to-b from-primary/5 to-primary/10">
            {/* Placeholder avatar - in production, use actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-20 h-20 text-primary/60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="p-4 bg-primary flex items-center justify-between">
            <span className="text-white font-semibold text-lg">Male</span>
            <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
        
        {/* Female option */}
        <button
          onClick={() => handleSelect('female')}
          className="group relative overflow-hidden rounded-2xl border-2 border-border bg-background-card hover:border-primary transition-all duration-300 hover:shadow-lg"
        >
          <div className="aspect-[3/4] relative bg-gradient-to-b from-primary/5 to-primary/10">
            {/* Placeholder avatar - in production, use actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-20 h-20 text-primary/60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="p-4 bg-primary flex items-center justify-between">
            <span className="text-white font-semibold text-lg">Female</span>
            <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </motion.div>
      
      {/* Legal disclaimer */}
      <motion.p 
        className="mt-8 text-center text-xs text-text-tertiary max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        By clicking "Male" or "Female" you agree with the{' '}
        <a href="#" className="text-primary hover:underline">Terms of Use and Service</a>,{' '}
        <a href="#" className="text-primary hover:underline">Privacy Policy</a>,{' '}
        <a href="#" className="text-primary hover:underline">Subscription Policy</a> and{' '}
        <a href="#" className="text-primary hover:underline">Cookie Policy</a>
      </motion.p>
    </motion.div>
  )
}
