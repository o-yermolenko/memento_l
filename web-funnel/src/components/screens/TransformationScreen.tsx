'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useFunnelStore } from '@/store/funnelStore'
import { ArrowRight, Frown, Smile, TrendingUp, Calendar, CheckCircle2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/lib/routes'

export default function TransformationScreen() {
  const router = useRouter()
  const { profile, readinessLevel } = useFunnelStore()
  
  const handleContinue = () => {
    router.push(ROUTES.planReady)
  }
  
  // Calculate specific future date (4 weeks from now) - Coursiv pattern
  const futureDate = new Date()
  futureDate.setDate(futureDate.getDate() + 28)
  const dateString = futureDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  
  // Get readiness score for display
  const readiness = readinessLevel || 85
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center px-4 py-8"
    >
      {/* Readiness Score - Coursiv pattern (gamification) */}
      <motion.div 
        className="w-full max-w-md card p-4 mb-6 border-accent-green border"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.05 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-accent-green" />
            <div>
              <p className="text-sm text-text-tertiary">Your readiness score</p>
              <p className="font-bold text-accent-green">Result: Excellent</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-accent-green">{readiness}%</p>
          </div>
        </div>
      </motion.div>
      
      {/* Header with specific timeline promise */}
      <motion.div 
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-3">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Target: {dateString}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
          {profile.name ? `${profile.name}, feel ` : 'Feel '}noticeably more stable by {futureDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
        </h2>
        <p className="text-text-secondary">
          Based on your {readiness}% readiness, here's your projected timeline
        </p>
      </motion.div>
      
      {/* Before/After comparison */}
      <motion.div 
        className="w-full max-w-md grid grid-cols-[1fr,auto,1fr] gap-4 items-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Before */}
        <div className="card p-5 text-center">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-status-error/10 flex items-center justify-center">
            <Frown className="w-8 h-8 text-status-error" />
          </div>
          <p className="text-sm text-text-tertiary mb-1">Today</p>
          <p className="font-semibold text-text-primary">Overwhelmed</p>
          <ul className="mt-3 space-y-1 text-sm text-text-secondary text-left">
            <li>• Reactive emotions</li>
            <li>• Mental exhaustion</li>
            <li>• Self-doubt</li>
          </ul>
        </div>
        
        {/* Arrow */}
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ArrowRight className="w-8 h-8 text-primary" />
          </motion.div>
          <span className="text-xs text-text-tertiary mt-1">4 weeks</span>
        </div>
        
        {/* After */}
        <div className="card p-5 text-center border-primary border-2">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-accent-green/10 flex items-center justify-center">
            <Smile className="w-8 h-8 text-accent-green" />
          </div>
          <p className="text-sm text-text-tertiary mb-1">{dateString}</p>
          <p className="font-semibold text-text-primary">Steady</p>
          <ul className="mt-3 space-y-1 text-sm text-text-secondary text-left">
            <li>• Calm responses</li>
            <li>• Inner clarity</li>
            <li>• Self-compassion</li>
          </ul>
        </div>
      </motion.div>
      
      {/* Progress visualization */}
      <motion.div 
        className="w-full max-w-md card p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Your Projected Progress
        </h3>
        
        {/* Simple chart visualization */}
        <div className="relative h-40 flex items-end justify-between gap-2">
          {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, index) => {
            const height = 30 + index * 20 // Progressive height
            return (
              <motion.div
                key={week}
                className="flex-1 flex flex-col items-center"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                style={{ transformOrigin: 'bottom' }}
              >
                <div 
                  className="w-full rounded-t-lg"
                  style={{ 
                    height: `${height}%`,
                    background: `linear-gradient(to top, #E07A4F, #F5B95F)`,
                    opacity: 0.5 + index * 0.15,
                  }}
                />
                <span className="text-xs text-text-tertiary mt-2">{week}</span>
              </motion.div>
            )
          })}
        </div>
        
        <p className="text-sm text-text-tertiary mt-4 text-center">
          <span className="font-semibold text-accent-green">85%</span> of users with your profile report feeling more stable within 3 weeks
        </p>
      </motion.div>
      
      {/* Stat callouts */}
      <motion.div 
        className="w-full max-w-md grid grid-cols-3 gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {[
          { value: '+35%', label: 'Emotional stability' },
          { value: '+45%', label: 'Self-awareness' },
          { value: '+72%', label: 'Inner calm' },
        ].map((stat, index) => (
          <div key={index} className="card p-4 text-center">
            <p className="text-xl font-bold gradient-text">{stat.value}</p>
            <p className="text-xs text-text-tertiary mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
      
      {/* CTA */}
      <motion.button
        onClick={handleContinue}
        className="btn-primary text-lg px-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        See My Personalized Plan
      </motion.button>
    </motion.div>
  )
}

