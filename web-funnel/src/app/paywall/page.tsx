'use client'

import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { PaywallScreen } from '@/components/screens'

export default function PaywallPage() {
  // Paywall has its own header built-in, so no Header component needed
  return (
    <main className="min-h-screen bg-background-primary">
      <AnimatePresence mode="wait">
        <PaywallScreen />
      </AnimatePresence>
    </main>
  )
}

