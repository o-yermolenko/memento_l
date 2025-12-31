'use client'

import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import { ResultsSummaryScreen } from '@/components/screens'

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-background-primary">
      <Header />
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <ResultsSummaryScreen />
        </AnimatePresence>
      </div>
    </main>
  )
}

