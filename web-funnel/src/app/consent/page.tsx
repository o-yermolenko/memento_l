'use client'

import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import ConsentScreen from '@/components/screens/ConsentScreen'

export default function ConsentPage() {
  return (
    <main className="min-h-screen bg-background-primary">
      <Header />
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <ConsentScreen />
        </AnimatePresence>
      </div>
    </main>
  )
}
