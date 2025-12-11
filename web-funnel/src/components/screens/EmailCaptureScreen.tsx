'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useFunnelStore } from '@/store/funnelStore'
import { useSupabase } from '@/components/SupabaseProvider'
import { ROUTES } from '@/lib/routes'
import { Mail, Shield, ArrowRight } from 'lucide-react'

export default function EmailCaptureScreen() {
  const router = useRouter()
  const { setEmail, profile } = useFunnelStore()
  const { syncProfile, syncLead } = useSupabase()
  const [email, setEmailValue] = useState(profile.email || '')
  const [error, setError] = useState('')
  
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setError('Please enter your email address')
      return
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }
    
    setEmail(email)
    
    // Sync to Supabase (async, non-blocking)
    syncProfile()
    syncLead()
    
    router.push(ROUTES.emailOptin)
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
        <Mail className="w-10 h-10" />
      </motion.div>
      
      {/* Headline */}
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-text-primary mb-3 text-center font-serif max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Where should we send your{' '}
        <span className="gradient-text">Emotional Blueprint</span>?
      </motion.h2>
      
      <motion.p 
        className="text-text-secondary text-center mb-8 max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Enter your email to see your personalized results and plan
      </motion.p>
      
      {/* Email form */}
      <motion.form 
        onSubmit={handleSubmit}
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmailValue(e.target.value)
              setError('')
            }}
            placeholder="Enter your email address"
            className={`
              input-field text-lg pr-14
              ${error ? 'border-status-error ring-2 ring-status-error/20' : ''}
            `}
            autoComplete="email"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        {error && (
          <p className="text-status-error text-sm mt-2">{error}</p>
        )}
        
        {/* Privacy note */}
        <div className="flex items-center gap-2 mt-4 text-text-tertiary text-sm">
          <Shield className="w-4 h-4" />
          <span>We respect your privacy. No spam, ever.</span>
        </div>
      </motion.form>
      
      {/* Submit button */}
      <motion.button
        type="submit"
        onClick={handleSubmit}
        className="btn-primary text-lg px-12 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        See My Results
      </motion.button>
    </motion.div>
  )
}
