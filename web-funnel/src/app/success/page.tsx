'use client'

import React, { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Check, Download, Mail, Sparkles } from 'lucide-react'
import { useFunnelStore } from '@/store/funnelStore'
import { trackPurchase } from '@/lib/meta-pixel'

function SuccessContent() {
  const searchParams = useSearchParams()
  const { profile, primaryPattern } = useFunnelStore()
  const [isLoading, setIsLoading] = useState(true)
  const [hasFiredPixel, setHasFiredPixel] = useState(false)
  
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    // Fire Meta Pixel Purchase event once
    if (!hasFiredPixel && sessionId) {
      // Get the plan price from localStorage or default
      const selectedPlan = localStorage.getItem('selectedPlan') || '4-week'
      const prices: Record<string, number> = {
        '1-week': 6.99,
        '4-week': 19.99,
        '12-week': 39.99,
      }
      const value = prices[selectedPlan] || 19.99
      
      trackPurchase(value, 'EUR')
      setHasFiredPixel(true)
      console.log('Meta Pixel: Purchase event fired', { value, currency: 'EUR' })
    }

    // Simulate brief loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [sessionId, hasFiredPixel])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background-primary flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-text-secondary">Confirming your payment...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Check className="w-12 h-12 text-white" strokeWidth={3} />
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Welcome to Memento!
          </h1>
          <p className="text-text-secondary">
            Your payment was successful. Your journey to emotional wellness starts now.
          </p>
        </motion.div>

        {/* Personalized Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-6 mb-6 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="font-bold text-text-primary">Your Personalized Plan</h2>
          </div>
          
          <div className="space-y-3">
            {profile.name && (
              <div className="flex justify-between">
                <span className="text-text-tertiary">Name</span>
                <span className="text-text-primary font-medium">{profile.name}</span>
              </div>
            )}
            {primaryPattern && (
              <div className="flex justify-between">
                <span className="text-text-tertiary">Primary Pattern</span>
                <span className="text-text-primary font-medium">{primaryPattern}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-text-tertiary">Status</span>
              <span className="text-primary font-medium">Active</span>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-6 mb-6 shadow-sm"
        >
          <h2 className="font-bold text-text-primary mb-4">Next Steps</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-text-primary">Check your email</p>
                <p className="text-sm text-text-secondary">
                  We've sent your login details to {profile.email || 'your email'}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Download className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-text-primary">Download the app</p>
                <p className="text-sm text-text-secondary">
                  Get the Memento app to start your personalized journey
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-3"
        >
          <a
            href="#"
            className="w-full bg-black text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            Download on App Store
          </a>
          
          <a
            href="#"
            className="w-full bg-black text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            Get it on Google Play
          </a>
        </motion.div>

        {/* Support Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-text-tertiary text-sm mt-8"
        >
          Need help? Contact us at{' '}
          <a href="mailto:support@memento.app" className="text-primary underline">
            support@memento.app
          </a>
        </motion.p>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background-primary flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}
