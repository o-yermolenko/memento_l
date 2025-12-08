'use client'

import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useFunnelStore } from '@/store/funnelStore'
import { ROUTES } from '@/lib/routes'
import { Check, Star } from 'lucide-react'

// Loading stages
const loadingStages = [
  { id: 'goals', label: 'Setting goals' },
  { id: 'patterns', label: 'Analyzing patterns' },
  { id: 'content', label: 'Picking content' },
]

// Modal questions at 50% and 100%
const modalQuestions = [
  { question: 'Are you inclined to finish what you start?', triggerProgress: 50 },
  { question: 'Do you want to build lasting emotional resilience?', triggerProgress: 100 },
]

// Trustpilot-style reviews
const reviews = [
  {
    title: 'It has really changed my life',
    author: 'Sarah M.',
    text: 'I have been using this app for three weeks now. During this time, I have been able to understand my emotional patterns better.',
  },
  {
    title: 'Finally something that works',
    author: 'James L.',
    text: 'After trying many meditation apps, Memento actually addresses the root causes. I feel more in control of my emotions than ever before.',
  },
  {
    title: 'Eye-opening experience',
    author: 'Michelle K.',
    text: 'Such little time for eye-opening information about my inner self and emotional patterns.',
  },
]

export default function LoadingScreen() {
  const router = useRouter()
  const { calculateResults } = useFunnelStore()
  const [progress, setProgress] = useState(0)
  const [currentReview, setCurrentReview] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const answeredQuestions = useRef<Set<number>>(new Set())
  const hasNavigated = useRef(false)
  
  useEffect(() => {
    calculateResults()
  }, [calculateResults])
  
  // Main progress logic
  useEffect(() => {
    if (isPaused || isComplete) return
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1
        
        // Check for question triggers
        for (let i = 0; i < modalQuestions.length; i++) {
          if (newProgress >= modalQuestions[i].triggerProgress && !answeredQuestions.current.has(i)) {
            setCurrentQuestionIndex(i)
            setShowModal(true)
            setIsPaused(true)
            return prev // Don't increment, pause here
          }
        }
        
        // Check if complete
        if (newProgress >= 100) {
          setIsComplete(true)
          return 100
        }
        
        return newProgress
      })
    }, 50) // ~5 seconds total for 100%
    
    return () => clearInterval(interval)
  }, [isPaused, isComplete])
  
  // Review rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview(prev => (prev + 1) % reviews.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  
  // Navigate when complete and all questions answered
  useEffect(() => {
    if (isComplete && !showModal && !hasNavigated.current) {
      hasNavigated.current = true
      const timeout = setTimeout(() => {
        router.push(ROUTES.results)
      }, 800)
      return () => clearTimeout(timeout)
    }
  }, [isComplete, showModal, router])
  
  const handleModalAnswer = useCallback(() => {
    answeredQuestions.current.add(currentQuestionIndex)
    setShowModal(false)
    setIsPaused(false)
  }, [currentQuestionIndex])
  
  // Calculate which stages are complete based on progress
  const getStageStatus = (index: number) => {
    const stageSize = 100 / loadingStages.length
    const stageStart = index * stageSize
    const stageEnd = (index + 1) * stageSize
    
    if (progress >= stageEnd) return 'completed'
    if (progress >= stageStart) return 'current'
    return 'pending'
  }
  
  const getStageProgress = (index: number) => {
    const stageSize = 100 / loadingStages.length
    const stageStart = index * stageSize
    const stageEnd = (index + 1) * stageSize
    
    if (progress >= stageEnd) return 100
    if (progress < stageStart) return 0
    return Math.round(((progress - stageStart) / stageSize) * 100)
  }
  
  const review = reviews[currentReview]
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center min-h-[80vh] px-4 py-8"
    >
      {/* Main headline */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
          Creating your
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-primary">personalized Emotional</span>
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-primary">Blueprint</span>
        </h2>
      </motion.div>
      
      {/* Progress stages */}
      <motion.div 
        className="w-full max-w-md mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {loadingStages.map((stage, index) => {
          const status = getStageStatus(index)
          const stageProgress = getStageProgress(index)
          
          return (
            <div key={stage.id} className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`font-medium ${status === 'pending' ? 'text-text-tertiary' : 'text-text-primary'}`}>
                  {stage.label}
                </span>
                {status === 'completed' ? (
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                ) : status === 'current' ? (
                  <span className="text-sm text-text-tertiary">{stageProgress}%</span>
                ) : null}
              </div>
              {status === 'current' && (
                <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${stageProgress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              )}
              {status === 'completed' && (
                <div className="h-0.5 bg-primary/30 rounded-full" />
              )}
            </div>
          )
        })}
      </motion.div>
      
      {/* Review card */}
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="card p-5"
          >
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-6 h-6 bg-primary flex items-center justify-center">
                  <Star className="w-4 h-4 fill-white text-white" />
                </div>
              ))}
            </div>
            
            <h4 className="font-bold text-text-primary mb-1 flex items-center justify-between">
              {review.title}
              <span className="text-sm font-normal text-text-tertiary">{review.author}</span>
            </h4>
            
            <p className="text-text-secondary text-sm leading-relaxed">
              {review.text}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      
      {/* Modal question overlay */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl"
            >
              <p className="text-sm text-text-tertiary text-center mb-2">
                To move forward, specify
              </p>
              <h3 className="text-xl font-bold text-text-primary text-center mb-6">
                {modalQuestions[currentQuestionIndex]?.question}
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={handleModalAnswer}
                  className="flex-1 py-3 px-6 bg-background-secondary text-text-primary font-semibold rounded-full hover:bg-background-secondary/80 transition-colors"
                >
                  No
                </button>
                <button
                  onClick={handleModalAnswer}
                  className="flex-1 py-3 px-6 bg-background-secondary text-text-primary font-semibold rounded-full hover:bg-background-secondary/80 transition-colors"
                >
                  Yes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
