'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useFunnelStore } from '@/store/funnelStore'
import { ROUTES } from '@/lib/routes'
import { Mail, Bell, X } from 'lucide-react'

export default function EmailOptinScreen() {
  const router = useRouter()
  const { setEmailOptIn } = useFunnelStore()
  
  const handleChoice = (optIn: boolean) => {
    setEmailOptIn(optIn)
    router.push(ROUTES.name)
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
        <Bell className="w-10 h-10" />
      </motion.div>
      
      {/* Headline */}
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-text-primary mb-3 text-center font-serif max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Would you like emotional wellness tips in your inbox?
      </motion.h2>
      
      <motion.p 
        className="text-text-secondary text-center mb-8 max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Get weekly insights, practices, and support from our team
      </motion.p>
      
      {/* Options */}
      <motion.div 
        className="w-full max-w-md space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <button
          onClick={() => handleChoice(true)}
          className="w-full option-tile flex items-center gap-4 text-left hover:border-primary"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-green/10 text-accent-green flex items-center justify-center">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-lg font-semibold text-text-primary">Yes, send me insights</span>
            <span className="text-sm text-text-tertiary">Get weekly tips for emotional wellness</span>
          </div>
        </button>
        
        <button
          onClick={() => handleChoice(false)}
          className="w-full option-tile flex items-center gap-4 text-left hover:border-primary"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background-secondary text-text-tertiary flex items-center justify-center">
            <X className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-lg font-semibold text-text-primary">No thanks</span>
            <span className="text-sm text-text-tertiary">Just show me my results</span>
          </div>
        </button>
      </motion.div>
    </motion.div>
  )
}
