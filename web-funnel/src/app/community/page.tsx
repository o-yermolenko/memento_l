'use client'

import { SocialProofScreen } from '@/components/screens'
import Header from '@/components/Header'

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background-primary">
      <Header />
      <div className="max-w-2xl mx-auto">
        <SocialProofScreen />
      </div>
    </main>
  )
}

