'use client'

import React, { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Check, PartyPopper, Heart, Star, Sparkles, ArrowRight } from 'lucide-react'
import { useFunnelStore } from '@/store/funnelStore'
import { trackPurchase, generateEventId } from '@/lib/meta-pixel'

// Confetti particle component
function ConfettiParticle({ delay, x }: { delay: number; x: number }) {
  const colors = ['#E07A4F', '#F5B95F', '#429E71', '#FF6B6B', '#4ECDC4', '#FFE66D']
  const color = colors[Math.floor(Math.random() * colors.length)]
  
  return (
    <motion.div
      className="absolute w-3 h-3 rounded-sm"
      style={{ backgroundColor: color, left: `${x}%` }}
      initial={{ y: -20, opacity: 1, rotate: 0 }}
      animate={{ 
        y: '100vh', 
        opacity: [1, 1, 0],
        rotate: 360 * 3,
        x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50]
      }}
      transition={{ 
        duration: 3 + Math.random() * 2, 
        delay: delay,
        ease: 'easeOut'
      }}
    />
  )
}

function SuccessContent() {
  const searchParams = useSearchParams()
  const { profile, primaryPattern } = useFunnelStore()
  const [isLoading, setIsLoading] = useState(true)
  const [hasFiredPixel, setHasFiredPixel] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    // Fire Meta Pixel Purchase event once (client-side)
    // The server-side CAPI event is fired by the Stripe webhook
    // Using the same eventId ensures Meta deduplicates them
    if (!hasFiredPixel && sessionId) {
      // Get the plan price from localStorage or default
      const selectedPlan = localStorage.getItem('selectedPlan') || '4-week'
      const prices: Record<string, number> = {
        '1-week': 6.99,
        '4-week': 19.99,
        '12-week': 39.99,
      }
      const value = prices[selectedPlan] || 19.99
      
      // Get the event ID from localStorage (set during checkout) for deduplication
      // If not found, generate a new one (server event may not deduplicate in this case)
      const storedEventId = localStorage.getItem('purchaseEventId')
      const eventId = storedEventId || generateEventId()
      
      trackPurchase(value, 'USD', eventId)
      setHasFiredPixel(true)
      
      // Clean up stored event ID
      localStorage.removeItem('purchaseEventId')
      console.log('Meta Pixel: Purchase event fired (client-side)', { value, currency: 'USD', eventId })
    }

    // Simulate brief loading
    const timer = setTimeout(() => {
      setIsLoading(false)
      setShowConfetti(true)
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
    <div className="min-h-screen bg-gradient-to-b from-background-primary via-background-primary to-primary/5 relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(30)].map((_, i) => (
            <ConfettiParticle key={i} delay={i * 0.1} x={Math.random() * 100} />
          ))}
        </div>
      )}

      <div className="max-w-md mx-auto px-4 py-8 relative z-10">
        {/* Celebration Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, type: 'spring' }}
          className="flex justify-center gap-4 mb-4"
        >
          <motion.div
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <PartyPopper className="w-8 h-8 text-accent-gold" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}
          >
            <Star className="w-8 h-8 text-primary" fill="currentColor" />
          </motion.div>
          <motion.div
            animate={{ rotate: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <PartyPopper className="w-8 h-8 text-accent-gold" style={{ transform: 'scaleX(-1)' }} />
          </motion.div>
        </motion.div>

        {/* Success Checkmark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6, delay: 0.2 }}
          className="w-28 h-28 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <Check className="w-14 h-14 text-white" strokeWidth={3} />
          </motion.div>
        </motion.div>

        {/* Celebration Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <motion.h1 
            className="text-4xl font-bold text-text-primary mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            🎉 Congratulations!
          </motion.h1>
          <motion.p 
            className="text-xl text-text-secondary mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            You've taken the first step towards
          </motion.p>
          <motion.p 
            className="text-2xl font-semibold text-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            Emotional Wellness
          </motion.p>
        </motion.div>

        {/* Success Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-3xl p-6 mb-6 shadow-xl border border-primary/10"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-primary" fill="currentColor" />
            <h2 className="font-bold text-text-primary text-lg">Your Journey Begins</h2>
            <Heart className="w-5 h-5 text-primary" fill="currentColor" />
          </div>
          
          <div className="space-y-3 text-center">
            {profile.name && (
              <p className="text-text-primary">
                Welcome, <span className="font-bold text-primary">{profile.name}</span>!
              </p>
            )}
            {primaryPattern && (
              <p className="text-text-secondary">
                Your emotional pattern: <span className="font-semibold text-text-primary">{primaryPattern}</span>
              </p>
            )}
            <div className="flex items-center justify-center gap-2 pt-2">
              <Sparkles className="w-4 h-4 text-accent-gold" />
              <span className="text-accent-green font-semibold">Plan Active</span>
              <Sparkles className="w-4 h-4 text-accent-gold" />
            </div>
          </div>
        </motion.div>

        {/* What's Next Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-br from-primary/10 to-accent-gold/10 rounded-3xl p-6 mb-8 border border-primary/20"
        >
          <h3 className="font-bold text-text-primary text-center mb-4">What's Next?</h3>
          <p className="text-text-secondary text-center mb-4">
            Your personalized emotional wellness program is ready and waiting for you in the Memento app.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-text-tertiary">
            <Check className="w-4 h-4 text-accent-green" />
            <span>Personalized exercises</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-text-tertiary mt-1">
            <Check className="w-4 h-4 text-accent-green" />
            <span>Daily check-ins</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-text-tertiary mt-1">
            <Check className="w-4 h-4 text-accent-green" />
            <span>Progress tracking</span>
          </div>
        </motion.div>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a
            href="https://app-memento.com/"
            className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-5 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="text-lg">Open Memento App</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Secondary link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-center text-text-tertiary text-sm mt-6"
        >
          Or visit{' '}
          <a 
            href="https://app-memento.com/" 
            className="text-primary font-medium hover:underline"
          >
            app-memento.com
          </a>
        </motion.p>

        {/* Support Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-text-tertiary text-sm mt-6"
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
