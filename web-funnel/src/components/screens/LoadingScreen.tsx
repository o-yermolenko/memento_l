'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useFunnelStore } from '@/store/funnelStore'
import { ROUTES } from '@/lib/routes'
import { Check, Star } from 'lucide-react'

// Loading stages like Liven
const loadingStages = [
  { id: 'goals', label: 'Setting goals' },
  { id: 'patterns', label: 'Analyzing patterns' },
  { id: 'content', label: 'Picking content' },
]

// Modal questions to keep user engaged during loading (Liven pattern)
const modalQuestions = [
  { question: 'Are you inclined to finish what you start?', delay: 2000 },
  { question: 'Are you open to trying new emotional wellness practices?', delay: 6000 },
  { question: 'Do you want to build lasting emotional resilience?', delay: 10000 },
]

// Trustpilot-style reviews shown during loading
const reviews = [
  {
    title: 'It has really changed my life',
    author: 'Sarah M.',
    text: 'I have been using this app for three weeks now. During this time, I have been able to understand my emotional patterns better. The app has helped me respond instead of react.',
  },
  {
    title: 'Finally something that works',
    author: 'James L.',
    text: 'After trying many meditation apps, Memento actually addresses the root causes. I feel more in control of my emotions than ever before.',
  },
  {
    title: 'Eye-opening experience',
    author: 'Michelle K.',
    text: 'I am new to this app but not new to my own struggles. Such little time for eye-opening information about my inner self and emotional patterns.',
  },
]

export default function LoadingScreen() {
  const router = useRouter()
  const { calculateResults, profile } = useFunnelStore()
  const [currentStage, setCurrentStage] = useState(0)
  const [stageProgress, setStageProgress] = useState(0)
  const [completedStages, setCompletedStages] = useState<string[]>([])
  const [currentReview, setCurrentReview] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [currentModalIndex, setCurrentModalIndex] = useState(0)
  
  useEffect(() => {
    // Calculate results when loading starts
    calculateResults()
    
    // Progress through stages
    const stageInterval = setInterval(() => {
      setStageProgress(prev => {
        if (prev >= 100) {
          // Complete current stage and move to next
          setCompletedStages(completed => {
            const newCompleted = [...completed, loadingStages[currentStage].id]
            return newCompleted
          })
          setCurrentStage(stage => {
            if (stage < loadingStages.length - 1) {
              return stage + 1
            }
            return stage
          })
          return 0
        }
        return prev + 2
      })
    }, 100)
    
    // Rotate reviews
    const reviewInterval = setInterval(() => {
      setCurrentReview(prev => (prev + 1) % reviews.length)
    }, 4000)
    
    // Show modal questions
    modalQuestions.forEach((modal, index) => {
      setTimeout(() => {
        setCurrentModalIndex(index)
        setShowModal(true)
      }, modal.delay)
    })
    
    // Auto-advance after all stages complete
    const timeout = setTimeout(() => {
      router.push(ROUTES.results)
    }, 14000)
    
    return () => {
      clearInterval(stageInterval)
      clearInterval(reviewInterval)
      clearTimeout(timeout)
    }
  }, [router, calculateResults, currentStage])
  
  const handleModalAnswer = () => {
    setShowModal(false)
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
          const isCompleted = completedStages.includes(stage.id)
          const isCurrent = index === currentStage && !isCompleted
          const isPending = index > currentStage
          
          return (
            <div key={stage.id} className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`font-medium ${isCompleted ? 'text-text-primary' : isCurrent ? 'text-text-primary' : 'text-text-tertiary'}`}>
                  {stage.label}
                </span>
                {isCompleted ? (
                  <div className="w-6 h-6 rounded-full bg-accent-green flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                ) : isCurrent ? (
                  <span className="text-sm text-text-tertiary">{stageProgress}%</span>
                ) : null}
              </div>
              {isCurrent && (
                <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-accent-green rounded-full"
                    style={{ width: `${stageProgress}%` }}
                  />
                </div>
              )}
              {isCompleted && (
                <div className="h-0.5 bg-accent-green/30 rounded-full" />
              )}
            </div>
          )
        })}
      </motion.div>
      
      {/* Trustpilot-style review card */}
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
            {/* Star rating */}
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-6 h-6 bg-accent-green flex items-center justify-center">
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
      
      {/* Modal question overlay - Liven engagement pattern */}
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
                {modalQuestions[currentModalIndex]?.question}
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
