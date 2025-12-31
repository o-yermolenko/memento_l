'use client'

import React from 'react'
import { useParams, notFound } from 'next/navigation'
import Header from '@/components/Header'
import { QuestionScreen } from '@/components/screens'
import { quizQuestions } from '@/data/questions'
import { getQuestionIndexFromSlug } from '@/lib/routes'

export default function QuizPage() {
  const params = useParams()
  const slug = params.question as string
  
  // Get question index from semantic slug
  const questionIndex = getQuestionIndexFromSlug(slug)
  
  // Validate: must be a valid slug mapping to a question
  if (questionIndex === -1 || questionIndex >= quizQuestions.length) {
    notFound()
  }
  
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

