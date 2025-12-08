'use client'

import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { useParams, notFound } from 'next/navigation'
import Header from '@/components/Header'
import { InterstitialScreen } from '@/components/screens'
import { interstitials } from '@/data/questions'

export default function InterstitialPage() {
  const params = useParams()
  const interstitialId = params.id as string
  
  // Validate interstitial exists
  if (!interstitials[interstitialId]) {
    notFound()
  }
  
  return (
    <main className="min-h-screen bg-background-primary">
      <Header />
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <InterstitialScreen interstitialId={interstitialId} />
        </AnimatePresence>
      </div>
    </main>
  )
}
