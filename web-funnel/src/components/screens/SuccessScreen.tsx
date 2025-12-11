'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Sparkles, ArrowRight } from 'lucide-react'
import { useFunnelStore } from '@/store/funnelStore'

export default function SuccessScreen() {
  const { profile } = useFunnelStore()
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    // Hide confetti after animation
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background-primary to-background-primary flex flex-col">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: ['#D94F30', '#F59E0B', '#22C55E', '#3B82F6', '#8B5CF6'][i % 5],
                left: `${Math.random() * 100}%`,
                top: -20,
              }}
              initial={{ y: -20, rotate: 0, opacity: 1 }}
              animate={{
                y: window.innerHeight + 20,
                rotate: Math.random() * 720 - 360,
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="relative mb-8"
        >
          <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-20 h-20 text-green-500" />
          </div>
          <motion.div
            className="absolute -top-2 -right-2"
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>
        </motion.div>

        {/* Congratulations Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-text-primary mb-4">
            Congratulations{profile.name ? `, ${profile.name}` : ''}! 🎉
          </h1>
          <p className="text-lg text-text-secondary mb-2">
            Your payment was successful!
          </p>
          <p className="text-text-tertiary">
            You now have full access to Memento
          </p>
        </motion.div>

        {/* What's Next Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-6 shadow-sm w-full max-w-md mb-8"
        >
          <h2 className="font-bold text-text-primary mb-4 text-center">What&apos;s Next?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
              <span className="text-text-secondary">Access the Memento app using the button below</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
              <span className="text-text-secondary">Sign in with your email to unlock your personalized plan</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
              <span className="text-text-secondary">Start your emotional wellness journey today</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom CTA - Fixed at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="sticky bottom-0 bg-gradient-to-t from-background-primary via-background-primary to-transparent pt-8 pb-8 px-6"
      >
        <a
          href="https://app-memento.com/"
          className="w-full max-w-md mx-auto bg-primary text-white font-bold py-4 px-6 rounded-full text-lg flex items-center justify-center gap-2 shadow-lg hover:bg-primary/90 transition-colors"
        >
          Go to Memento App
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="text-center text-text-tertiary text-sm mt-4">
          A confirmation email has been sent to your inbox
        </p>
      </motion.div>
    </div>
  )
}

