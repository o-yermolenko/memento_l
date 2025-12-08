'use client'

import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import PatternIdentifiedScreen from '@/components/screens/PatternIdentifiedScreen'

export default function PatternIdentifiedPage() {
  return (
    <main className="min-h-screen bg-background-primary">
      <Header />
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <PatternIdentifiedScreen />
        </AnimatePresence>
      </div>
    </main>
  )
}

