'use client'

import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import { GenderScreen } from '@/components/screens'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background-primary">
      <Header />
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <GenderScreen />
        </AnimatePresence>
      </div>
    </main>
  )
}
