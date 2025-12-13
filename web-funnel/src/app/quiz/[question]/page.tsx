'use client'

import React from 'react'
import { useParams, notFound } from 'next/navigation'
import Header from '@/components/Header'
import { QuestionScreen } from '@/components/screens'
import { quizQuestions } from '@/data/questions'

export default function QuizPage() {
  const params = useParams()
  const questionNumber = parseInt(params.question as string, 10)
  
  // Validate question number
  if (isNaN(questionNumber) || questionNumber < 1 || questionNumber > quizQuestions.length) {
    notFound()
  }
  
  const questionIndex = questionNumber - 1
  
  return (
    <main className="min-h-screen bg-background-primary">
      <Header />
      <div className="max-w-2xl mx-auto">
        {/* QuestionScreen handles its own AnimatePresence internally */}
        <QuestionScreen questionIndex={questionIndex} />
      </div>
    </main>
  )
}

