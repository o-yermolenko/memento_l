import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SupabaseProvider } from '@/components/SupabaseProvider'
import { MetaPixel } from '@/components/MetaPixel'

// Inter - clean, geometric sans-serif (like Liven)
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover', // Enables safe area insets on notched iPhones
}

export const metadata: Metadata = {
  metadataBase: new URL('https://memento.app'),
  title: 'Memento - Your Personalized Emotional Wellness Journey',
  description: 'Take a 3-minute assessment to discover your Emotional Blueprint and get a personalized plan for lasting inner stability.',
  keywords: 'emotional wellness, mental health, emotional intelligence, anxiety relief, stress management, AI companion',
  openGraph: {
    title: 'Memento - Your Personalized Emotional Wellness Journey',
    description: 'Discover your Emotional Blueprint and find lasting inner stability',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-background-primary min-h-screen`}>
        <MetaPixel />
        <SupabaseProvider>
          {children}
        </SupabaseProvider>
        <Analytics />
      </body>
    </html>
  )
}
