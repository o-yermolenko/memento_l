'use client'

import React, { useState, useTransition, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useFunnelStore } from '@/store/funnelStore'
import { useSupabase } from '@/components/SupabaseProvider'
import { quizQuestions } from '@/data/questions'
import { ROUTES } from '@/lib/routes'
import { Check, Circle, HelpCircle, X, ChevronRight, ThumbsDown, ThumbsUp } from 'lucide-react'

interface QuestionScreenProps {
  questionIndex: number
}

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
  return ROUTES.quiz(questionIndex + 2) // +2 because questionIndex is 0-based and route is 1-based
}

// Likert scale icons - 5 options from strongly disagree to strongly agree
const LikertIcon = ({ index, isSelected }: { index: number; isSelected: boolean }) => {
  const baseClass = `w-7 h-7 ${isSelected ? 'text-primary' : 'text-primary/60'}`
  
  switch (index) {
    case 0: // Strongly disagree - thumbs down with X
      return (
        <div className="relative">
          <ThumbsDown className={baseClass} />
          <span className="absolute -bottom-0.5 -right-0.5 text-status-error text-xs font-bold">✕</span>
        </div>
      )
    case 1: // Somewhat disagree - thumbs down
      return <ThumbsDown className={baseClass} />
    case 2: // Not sure - question mark
      return <span className={`text-2xl font-bold ${isSelected ? 'text-primary' : 'text-primary/60'}`}>?</span>
    case 3: // Somewhat agree - thumbs up
      return <ThumbsUp className={baseClass} />
    case 4: // Strongly agree - thumbs up with sparkles
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
  const [isPending, startTransition] = useTransition()
  const question = quizQuestions[questionIndex]
  const nextRoute = getNextRouteForQuestion(questionIndex)
  
  // Prefetch next route for instant navigation
  useEffect(() => {
    router.prefetch(nextRoute)
  }, [router, nextRoute])
  
  const existingAnswer = getAnswer(question.id)
  const [selectedValues, setSelectedValues] = useState<string[]>(
    existingAnswer 
      ? (Array.isArray(existingAnswer.value) ? existingAnswer.value : [existingAnswer.value])
      : []
  )
  
  const handleSingleSelect = (optionId: string, score?: number) => {
    // Save answer to store immediately
    addAnswer({
      questionId: question.id,
      value: optionId,
      score: score,
    })
    // Navigate immediately, don't wait for Supabase
    startTransition(() => {
      router.push(nextRoute)
    })
    // Sync to Supabase in background (fire and forget)
    syncAnswer(question.id, optionId, score)
  }
  
  const handleMultiSelect = (optionId: string) => {
    const newValues = selectedValues.includes(optionId)
      ? selectedValues.filter(v => v !== optionId)
      : [...selectedValues, optionId]
    setSelectedValues(newValues)
  }
  
  const handleMultiSubmit = () => {
    if (selectedValues.length >= (question.minSelect || 1)) {
      const totalScore = selectedValues.reduce((acc, val) => {
        const option = question.options.find(o => o.id === val)
        return acc + (option?.score || 0)
      }, 0)
      
      addAnswer({
        questionId: question.id,
        value: selectedValues,
        score: totalScore,
      })
      // Navigate immediately
      startTransition(() => {
        router.push(nextRoute)
      })
      // Sync to Supabase in background
      syncAnswer(question.id, selectedValues, totalScore)
    }
  }
  
  const isMultiSelect = question.multiSelect || question.type === 'multiple'
  const canSubmit = selectedValues.length >= (question.minSelect || 1)
  
  return (
    <div
      key={question.id}
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
        // Horizontal Likert scale - centered in remaining space
        <div className="w-full max-w-lg flex-1 flex flex-col justify-center min-h-[40vh]">
          <div className="flex items-stretch gap-2 justify-center">
            {question.options.map((option, index) => {
              const isSelected = selectedValues.includes(option.id)
              
              return (
                <button
                  key={option.id}
                  onClick={() => handleSingleSelect(option.id, option.score)}
                  disabled={isPending}
                  className={`
                    flex-1 max-w-[90px] aspect-square card flex items-center justify-center
                    transition-all duration-150 active:scale-95 disabled:opacity-50
                    ${isSelected 
                      ? 'border-primary border-2 bg-primary/5' 
                      : 'hover:border-primary/50'
                    }
                  `}
                >
                  <LikertIcon index={index} isSelected={isSelected} />
                </button>
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
            const isSelected = selectedValues.includes(option.id)
            
            return (
              <button
                key={option.id}
                onClick={() => isMultiSelect ? handleMultiSelect(option.id) : handleSingleSelect(option.id, option.score)}
                disabled={isPending && !isMultiSelect}
                className={`
                  w-full option-tile text-left flex items-center gap-4 group
                  transition-transform duration-150 active:scale-[0.98] disabled:opacity-50
                  ${isSelected ? 'selected' : ''}
                `}
              >
                {/* Selection indicator / icon */}
                <div className={`
                  flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                  transition-colors duration-150
                  ${isSelected 
                    ? 'bg-primary text-white' 
                    : 'bg-background-secondary text-text-tertiary group-hover:bg-primary/10 group-hover:text-primary'
                  }
                `}>
                  {isMultiSelect ? (
                    // Multi-select: checkbox style
                    isSelected ? <Check className="w-5 h-5" /> : (
                      <div className="w-5 h-5 border-2 border-current rounded" />
                    )
                  ) : (
                    // Single-select: radio button style (filled dot)
                    isSelected ? <Check className="w-5 h-5" /> : (
                      <div className="w-5 h-5 border-2 border-current rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 rounded-full bg-current transition-all group-hover:w-2 group-hover:h-2" />
                      </div>
                    )
                  )}
                </div>
                
                {/* Label */}
                <span className={`
                  flex-1 text-lg font-medium transition-colors
                  ${isSelected ? 'text-primary' : 'text-text-primary'}
                `}>
                  {option.label}
                </span>
                
                {/* Arrow for single select */}
                {!isMultiSelect && (
                  <ChevronRight className={`
                    w-5 h-5 transition-all
                    ${isSelected ? 'text-primary' : 'text-text-tertiary group-hover:text-primary group-hover:translate-x-1'}
                  `} />
                )}
              </button>
            )
          })}
        </div>
      )}
      
      {/* Submit button for multi-select */}
      {isMultiSelect && (
        <div className="mt-8 w-full max-w-md">
          <button
            onClick={handleMultiSubmit}
            disabled={!canSubmit || isPending}
            className="btn-primary w-full"
          >
            {isPending ? 'Loading...' : 'Continue'}
          </button>
          {question.minSelect && selectedValues.length < question.minSelect && (
            <p className="text-center text-sm text-text-tertiary mt-2">
              Select at least {question.minSelect} option{question.minSelect > 1 ? 's' : ''}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
