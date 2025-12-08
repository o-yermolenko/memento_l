'use client'

import PatternIdentifiedScreen from '@/components/screens/PatternIdentifiedScreen'
import Header from '@/components/Header'

export default function AnalyzingPage() {
  return (
    <main className="min-h-screen bg-background-primary">
      <Header />
      <div className="max-w-2xl mx-auto">
        <PatternIdentifiedScreen />
      </div>
    </main>
  )
}

