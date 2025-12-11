'use client'

import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useFunnelStore } from '@/store/funnelStore'
import { useSupabase } from '@/components/SupabaseProvider'
import { ROUTES } from '@/lib/routes'
import { Heart, Brain, Shield, Zap, AlertCircle, Check } from 'lucide-react'

// Emotional intensity level data
const intensityLevels = {
  low: { label: 'Low', color: 'text-blue-500', bgColor: 'bg-blue-50', position: 15 },
  moderate: { label: 'Moderate', color: 'text-yellow-500', bgColor: 'bg-yellow-50', position: 45 },
  high: { label: 'High', color: 'text-orange-500', bgColor: 'bg-orange-50', position: 75 },
  veryHigh: { label: 'Very High', color: 'text-red-500', bgColor: 'bg-red-50', position: 90 },
}

// Pattern descriptions with detailed explanations
const patternData: Record<string, {
  description: string
  intensityExplanation: string
  coreWound: string
  copingPattern: string
  triggerSensitivity: string
  growthPath: string
}> = {
  'The Over-Feeler': {
    description: 'You experience emotions deeply and intensely. Your sensitivity is a strength, but it can sometimes feel overwhelming.',
    intensityExplanation: 'This means you may be highly sensitive to emotional stimuli. Your patterns include absorbing others\' emotions, difficulty setting boundaries, and emotional exhaustion from constantly processing intense feelings.',
    coreWound: 'Emotional flooding',
    copingPattern: 'Over-empathizing',
    triggerSensitivity: 'High',
    growthPath: 'Emotional regulation',
  },
  'The Overthinker': {
    description: 'Your mind tends to analyze and replay situations. You\'re thorough, but this can lead to mental exhaustion and anxiety spirals.',
    intensityExplanation: 'This means you may spend excessive time in mental loops. Your patterns include ruminating on past events, anticipating worst-case scenarios, and difficulty being present due to constant mental analysis.',
    coreWound: 'Uncertainty anxiety',
    copingPattern: 'Over-analysis',
    triggerSensitivity: 'Moderate',
    growthPath: 'Present-moment focus',
  },
  'The People-Pleaser': {
    description: 'You naturally tune into others\' needs and prioritize their comfort. Your empathy is valuable, but you may neglect your own needs.',
    intensityExplanation: 'This means you may struggle with self-abandonment. Your patterns include suppressing your true feelings, difficulty saying no, and deriving self-worth primarily from others\' approval.',
    coreWound: 'Fear of rejection',
    copingPattern: 'Self-sacrifice',
    triggerSensitivity: 'High',
    growthPath: 'Healthy boundaries',
  },
  'The Inner Critic': {
    description: 'You hold yourself to exceptionally high standards. Your drive for excellence can become harsh self-judgment.',
    intensityExplanation: 'This means you may experience persistent self-criticism. Your patterns include perfectionism, difficulty accepting compliments, and a harsh internal voice that undermines your confidence.',
    coreWound: 'Not enough',
    copingPattern: 'Self-criticism',
    triggerSensitivity: 'Moderate',
    growthPath: 'Self-compassion',
  },
  'The Stress Absorber': {
    description: 'You carry tension in your body and mind. You may absorb environmental stress without realizing it.',
    intensityExplanation: 'This means you may be highly reactive to stressors. Your patterns include physical tension, difficulty relaxing, and accumulating stress from multiple sources without adequate release.',
    coreWound: 'Hypervigilance',
    copingPattern: 'Tension holding',
    triggerSensitivity: 'Very High',
    growthPath: 'Nervous system reset',
  },
}

export default function ResultsSummaryScreen() {
  const router = useRouter()
  const { profile, primaryPattern, readinessLevel } = useFunnelStore()
  const { syncCompletion, syncLead } = useSupabase()
  const hasSynced = useRef(false)
  
  // Sync completion to Supabase when results are shown
  useEffect(() => {
    if (!hasSynced.current) {
      hasSynced.current = true
      syncCompletion()
      syncLead() // Update lead with final results
    }
  }, [syncCompletion, syncLead])
  
  const handleContinue = () => {
    router.push(ROUTES.paywall)
  }
  
  const pattern = patternData[primaryPattern] || patternData['The Overthinker']
  const patternName = primaryPattern || 'The Overthinker'
  
  // Determine intensity level based on readiness (inverse - higher readiness = more awareness of high intensity)
  const intensityScore = readinessLevel || 85
  const intensityLevel = intensityScore > 80 ? 'high' : intensityScore > 60 ? 'moderate' : 'low'
  const intensity = intensityLevels[intensityLevel]
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-8"
    >
      {/* Header */}
      <motion.div 
        className="text-center px-4 pt-6 pb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
          Your Emotional Blueprint
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
          {profile.name ? `${profile.name}, here's what we found` : 'Here\'s what we found'}
        </h2>
      </motion.div>
      
      {/* Emotional Intensity Level Card - Like Liven */}
      <motion.div 
        className="mx-4 card p-5 mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-text-primary">Emotional Intensity Level</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${intensity.color} ${intensity.bgColor}`}>
            {intensity.label}
          </span>
        </div>
        
        {/* Gradient bar with indicator */}
        <div className="relative mb-2">
          {/* Gradient bar */}
          <div className="h-3 rounded-full bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 via-orange-400 to-red-500" />
          
          {/* Indicator */}
          <motion.div 
            className="absolute top-1/2 -translate-y-1/2"
            initial={{ left: '0%' }}
            animate={{ left: `${intensity.position}%` }}
            transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
          >
            <div className="relative">
              <div className="w-5 h-5 rounded-full bg-white border-4 border-text-primary shadow-lg" />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-text-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Your level
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-text-primary" />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scale labels */}
        <div className="flex justify-between text-xs text-text-tertiary mb-4">
          <span>Low</span>
          <span>Normal</span>
          <span>Medium</span>
          <span>High</span>
        </div>
        
        {/* Explanation box */}
        <div className={`p-4 rounded-xl ${intensity.bgColor} border-l-4 ${intensity.label === 'High' ? 'border-l-orange-500' : intensity.label === 'Very High' ? 'border-l-red-500' : 'border-l-yellow-500'}`}>
          <div className="flex items-start gap-3">
            <AlertCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${intensity.color}`} />
            <div>
              <p className={`font-bold mb-1 ${intensity.color}`}>{intensity.label.toUpperCase()} level</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                {pattern.intensityExplanation}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Primary Pattern Card */}
      <motion.div 
        className="mx-4 card p-5 mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            <Heart className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-text-tertiary">Primary Pattern</p>
            <h3 className="text-xl font-bold text-text-primary">{patternName}</h3>
          </div>
        </div>
        <p className="text-text-secondary leading-relaxed">
          {pattern.description}
        </p>
      </motion.div>
      
      {/* Trait Cards Grid - Like Liven */}
      <motion.div 
        className="mx-4 grid grid-cols-2 gap-3 mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="card p-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
              <Zap className="w-4 h-4 text-orange-500" />
            </div>
          </div>
          <p className="text-xs text-text-tertiary">Core Challenge</p>
          <p className="font-semibold text-text-primary">{pattern.coreWound}</p>
        </div>
        
        <div className="card p-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary" />
            </div>
          </div>
          <p className="text-xs text-text-tertiary">Coping Pattern</p>
          <p className="font-semibold text-text-primary">{pattern.copingPattern}</p>
        </div>
        
        <div className="card p-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
              <AlertCircle className="w-4 h-4 text-yellow-600" />
            </div>
          </div>
          <p className="text-xs text-text-tertiary">Trigger Sensitivity</p>
          <p className="font-semibold text-text-primary">{pattern.triggerSensitivity}</p>
        </div>
        
        <div className="card p-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <Brain className="w-4 h-4 text-blue-600" />
            </div>
          </div>
          <p className="text-xs text-text-tertiary">Growth Path</p>
          <p className="font-semibold text-text-primary">{pattern.growthPath}</p>
        </div>
      </motion.div>
      
      {/* Readiness Score */}
      <motion.div 
        className="mx-4 card p-5 mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm text-text-tertiary">Your Readiness Level</p>
            <p className="text-3xl font-bold text-primary">{readinessLevel || 85}%</p>
          </div>
          <span className="px-3 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full">
            Excellent
          </span>
        </div>
        <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-accent-gold rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${readinessLevel || 85}%` }}
            transition={{ delay: 0.7, duration: 0.8 }}
          />
        </div>
        <p className="text-sm text-text-tertiary mt-3">
          You're highly ready for positive change. Based on your responses, you have strong potential for transformation.
        </p>
      </motion.div>
      
      {/* Key Insights */}
      <motion.div 
        className="mx-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-lg font-semibold text-text-primary mb-4">Key Insights</h3>
        <div className="space-y-3">
          {[
            'Your emotional responses can be rewired with the right approach',
            'Daily micro-practices will create lasting change',
            'Your sensitivity is a strength waiting to be channeled',
          ].map((insight, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-text-secondary">{insight}</p>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* CTA */}
      <motion.div 
        className="px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <button
          onClick={handleContinue}
          className="btn-primary w-full text-lg py-4"
        >
          Continue
        </button>
      </motion.div>
    </motion.div>
  )
}
