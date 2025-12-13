'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useFunnelStore } from '@/store/funnelStore'
import { useSupabase } from '@/components/SupabaseProvider'
import { quizQuestions } from '@/data/questions'
import { ROUTES } from '@/lib/routes'
import { Check, ChevronRight, ThumbsDown, ThumbsUp, Circle } from 'lucide-react'

interface QuestionScreenProps {
  questionIndex: number
}

// Selection feedback delay in ms - enough time to see the selection
const SELECTION_DELAY = 400

// Map question index to next route
const getNextRouteForQuestion = (questionIndex: number): string => {
  // After Q8 (index 7), show pattern_identified
  if (questionIndex === 7) {
    return ROUTES.patternIdentified
  }
  // After Q14 (index 13), show science interstitial
  if (questionIndex === 13) {
    return ROUTES.interstitial('science')
  }
  // After Q21 (index 20), show expert_review interstitial
  if (questionIndex === 20) {
    return ROUTES.interstitial('expert_review')
  }
  // After Q22 (index 21), show social_proof_2 interstitial
  if (questionIndex === 21) {
    return ROUTES.interstitial('social_proof_2')
  }
  // Otherwise, next question
  return ROUTES.quiz(questionIndex + 2)
}


// Likert scale icons
const LikertIcon = ({ index, isSelected }: { index: number; isSelected: boolean }) => {
  const baseClass = `w-7 h-7 transition-all duration-200 ${isSelected ? 'text-primary scale-110' : 'text-primary/60'}`
  
  switch (index) {
    case 0:
      return (
        <div className="relative">
          <ThumbsDown className={baseClass} />
          <span className="absolute -bottom-0.5 -right-0.5 text-status-error text-xs font-bold">✕</span>
        </div>
      )
    case 1:
      return <ThumbsDown className={baseClass} />
    case 2:
      return <span className={`text-2xl font-bold transition-all duration-200 ${isSelected ? 'text-primary scale-110' : 'text-primary/60'}`}>?</span>
    case 3:
      return <ThumbsUp className={baseClass} />
    case 4:
      return (
        <div className="relative">
          <ThumbsUp className={baseClass} />
          <span className="absolute -top-1 -right-1 text-accent-gold text-xs">✦</span>
          <span className="absolute -top-0.5 right-2 text-accent-gold text-[10px]">✦</span>
        </div>
      )
    default:
      return <Circle className={baseClass} />
  }
}

export default function QuestionScreen({ questionIndex }: QuestionScreenProps) {
  const router = useRouter()
  const { addAnswer, getAnswer } = useFunnelStore()
  const { syncAnswer } = useSupabase()
  const question = quizQuestions[questionIndex]
  const nextRoute = getNextRouteForQuestion(questionIndex)
  
  // Selection state - separate from stored answers to show visual feedback
  const [pendingSelection, setPendingSelection] = useState<string | null>(null)
  const [isNavigating, setIsNavigating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // For multi-select
  const existingAnswer = getAnswer(question.id)
  const [selectedValues, setSelectedValues] = useState<string[]>(
    existingAnswer 
      ? (Array.isArray(existingAnswer.value) ? existingAnswer.value : [existingAnswer.value])
      : []
  )
  
  // Prefetch next route
  useEffect(() => {
    router.prefetch(nextRoute)
  }, [router, nextRoute])
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])
  
  // Reset state when question changes
  useEffect(() => {
    setPendingSelection(null)
    setIsNavigating(false)
    const answer = getAnswer(question.id)
    setSelectedValues(
      answer 
        ? (Array.isArray(answer.value) ? answer.value : [answer.value])
        : []
    )
  }, [questionIndex, question.id, getAnswer])
  
  const handleSingleSelect = useCallback((optionId: string, score?: number) => {
    // Prevent double-taps
    if (isNavigating || pendingSelection !== null) return
    
    // Show selection immediately with visual feedback
    setPendingSelection(optionId)
    setIsNavigating(true)
    
    // Save answer to store immediately
    addAnswer({
      questionId: question.id,
      value: optionId,
      score: score,
    })
    
    // Sync to Supabase in background
    syncAnswer(question.id, optionId, score)
    
    // Navigate after delay so user sees the selection
    timeoutRef.current = setTimeout(() => {
      router.push(nextRoute)
    }, SELECTION_DELAY)
  }, [isNavigating, pendingSelection, addAnswer, question.id, syncAnswer, router, nextRoute])
  
  const handleMultiSelect = useCallback((optionId: string) => {
    const newValues = selectedValues.includes(optionId)
      ? selectedValues.filter(v => v !== optionId)
      : [...selectedValues, optionId]
    setSelectedValues(newValues)
  }, [selectedValues])
  
  const handleMultiSubmit = useCallback(() => {
    if (selectedValues.length < (question.minSelect || 1) || isNavigating) return
    
    setIsNavigating(true)
    
    const totalScore = selectedValues.reduce((acc, val) => {
      const option = question.options.find(o => o.id === val)
      return acc + (option?.score || 0)
    }, 0)
    
    addAnswer({
      questionId: question.id,
      value: selectedValues,
      score: totalScore,
    })
    
    syncAnswer(question.id, selectedValues, totalScore)
    
    // Small delay for button feedback
    timeoutRef.current = setTimeout(() => {
      router.push(nextRoute)
    }, 150)
  }, [selectedValues, question, isNavigating, addAnswer, syncAnswer, router, nextRoute])
  
  const isMultiSelect = question.multiSelect || question.type === 'multiple'
  const canSubmit = selectedValues.length >= (question.minSelect || 1)
  
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="flex flex-col items-center px-4 py-6"
    >
      {/* Question */}
      <div className="text-center mb-6 max-w-lg">
        <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-2 leading-relaxed">
          {question.question}
        </h2>
        {question.description && (
          <p className="text-text-secondary text-sm">
            {question.description}
          </p>
        )}
      </div>
      
      {/* Options - Likert scale (horizontal) vs regular (vertical) */}
      {question.type === 'likert' ? (
        // Horizontal Likert scale
        <div className="w-full max-w-lg flex-1 flex flex-col justify-center min-h-[40vh]">
          <div className="flex items-stretch gap-2 justify-center">
            {question.options.map((option, index) => {
              const isSelected = pendingSelection === option.id || selectedValues.includes(option.id)
              const isPending = pendingSelection === option.id
              
              return (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, type: 'spring', stiffness: 400, damping: 25 }}
                  onClick={() => handleSingleSelect(option.id, option.score)}
                  disabled={isNavigating}
                  className={`
                    flex-1 max-w-[90px] aspect-square card flex items-center justify-center
                    select-none touch-manipulation
                    transition-colors duration-200
                    ${isSelected 
                      ? 'border-primary border-2 bg-primary/10' 
                      : 'hover:border-primary/50 active:bg-primary/5'
                    }
                    ${isNavigating && !isPending ? 'opacity-40' : ''}
                  `}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={isPending ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LikertIcon index={index} isSelected={isSelected} />
                  </motion.div>
                </motion.button>
              )
            })}
          </div>
          
          {/* Labels at the ends */}
          <div className="flex justify-between mt-3 px-2">
            <span className="text-sm text-text-tertiary">Strongly disagree</span>
            <span className="text-sm text-text-tertiary">Strongly agree</span>
          </div>
        </div>
      ) : (
        // Regular vertical options
        <div className="w-full max-w-md space-y-3">
          {question.options.map((option, index) => {
            const isStored = selectedValues.includes(option.id)
            const isPending = pendingSelection === option.id
            const isSelected = isPending || isStored
            
            return (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, type: 'spring', stiffness: 400, damping: 25 }}
                onClick={() => isMultiSelect ? handleMultiSelect(option.id) : handleSingleSelect(option.id, option.score)}
                disabled={isNavigating && !isMultiSelect}
                className={`
                  w-full option-tile text-left flex items-center gap-4 group
                  select-none touch-manipulation
                  ${isSelected ? 'selected' : ''}
                  ${isNavigating && !isPending && !isMultiSelect ? 'opacity-40' : ''}
                `}
                whileTap={{ scale: 0.97 }}
              >
                {/* Selection indicator / icon */}
                <motion.div 
                  className={`
                    flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                    transition-colors duration-200
                    ${isSelected 
                      ? 'bg-primary text-white' 
                      : 'bg-background-secondary text-text-tertiary group-hover:bg-primary/10 group-hover:text-primary'
                    }
                  `}
                  animate={isPending ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  {isMultiSelect ? (
                    isSelected ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                      >
                        <Check className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <div className="w-5 h-5 border-2 border-current rounded" />
                    )
                  ) : (
                    isSelected ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                      >
                        <Check className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <div className="w-5 h-5 border-2 border-current rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 rounded-full bg-current transition-all group-hover:w-2 group-hover:h-2" />
                      </div>
                    )
                  )}
                </motion.div>
                
                {/* Label */}
                <span className={`
                  flex-1 text-lg font-medium transition-colors duration-200
                  ${isSelected ? 'text-primary' : 'text-text-primary'}
                `}>
                  {option.label}
                </span>
                
                {/* Arrow for single select */}
                {!isMultiSelect && (
                  <motion.div
                    animate={isPending ? { x: 4 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className={`
                      w-5 h-5 transition-colors duration-200
                      ${isSelected ? 'text-primary' : 'text-text-tertiary group-hover:text-primary'}
                    `} />
                  </motion.div>
                )}
              </motion.button>
            )
          })}
        </div>
      )}
        
      {/* Submit button for multi-select */}
      {isMultiSelect && (
        <motion.div 
          className="mt-8 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={handleMultiSubmit}
            disabled={!canSubmit || isNavigating}
            className="btn-primary w-full select-none touch-manipulation"
            whileTap={{ scale: 0.98 }}
          >
            {isNavigating ? 'Loading...' : 'Continue'}
          </motion.button>
          {question.minSelect && selectedValues.length < question.minSelect && (
            <p className="text-center text-sm text-text-tertiary mt-2">
              Select at least {question.minSelect} option{question.minSelect > 1 ? 's' : ''}
            </p>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}
