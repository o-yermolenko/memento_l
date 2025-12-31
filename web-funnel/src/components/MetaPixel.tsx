'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { META_PIXEL_ID, trackPageView, trackEvent } from '@/lib/meta-pixel'

// Map routes to funnel stages for Meta tracking
// URL Standard: /onboarding/*, /quiz/* (semantic), /insight/*, /capture/*, /results/*, /checkout/*
const FUNNEL_STAGES: Record<string, { step: number; stage: string; name: string }> = {
  '/': { step: 1, stage: 'entry', name: 'Gender Selection' },
  '/onboarding/age': { step: 2, stage: 'entry', name: 'Age Selection' },
  '/onboarding/consent': { step: 3, stage: 'entry', name: 'Consent' },
  '/onboarding/welcome': { step: 4, stage: 'entry', name: 'Social Proof' },
  
  // Quiz questions - Section 1: Current Emotional State
  '/quiz/emotional-intensity': { step: 5, stage: 'quiz', name: 'Emotional Intensity' },
  '/quiz/exhaustion': { step: 6, stage: 'quiz', name: 'Exhaustion' },
  '/quiz/overwhelm': { step: 7, stage: 'quiz', name: 'Overwhelm' },
  '/quiz/mood-swings': { step: 8, stage: 'quiz', name: 'Mood Swings' },
  '/quiz/reactivity': { step: 9, stage: 'quiz', name: 'Reactivity' },
  '/quiz/stress-level': { step: 10, stage: 'quiz', name: 'Stress Level' },
  '/quiz/sleep-impact': { step: 11, stage: 'quiz', name: 'Sleep Impact' },
  '/quiz/inner-stability': { step: 12, stage: 'quiz', name: 'Inner Stability' },
  
  '/insight/pattern': { step: 13, stage: 'interstitial', name: 'Pattern Identified' },
  
  // Quiz questions - Section 2: Self-Understanding
  '/quiz/self-criticism': { step: 14, stage: 'quiz', name: 'Self Criticism' },
  '/quiz/emotion-expression': { step: 15, stage: 'quiz', name: 'Emotion Expression' },
  '/quiz/overthinking': { step: 16, stage: 'quiz', name: 'Overthinking' },
  '/quiz/compliment-accept': { step: 17, stage: 'quiz', name: 'Compliment Accept' },
  '/quiz/relationship-overthink': { step: 18, stage: 'quiz', name: 'Relationship Overthink' },
  '/quiz/others-needs': { step: 19, stage: 'quiz', name: 'Others Needs' },
  
  '/insight/science': { step: 20, stage: 'interstitial', name: 'Science Backing' },
  
  // Quiz questions - Section 3: Goals & Readiness
  '/quiz/last-calm': { step: 21, stage: 'quiz', name: 'Last Calm' },
  '/quiz/emotional-concerns': { step: 22, stage: 'quiz', name: 'Emotional Concerns' },
  '/quiz/morning-routine': { step: 23, stage: 'quiz', name: 'Morning Routine' },
  '/quiz/tried-before': { step: 24, stage: 'quiz', name: 'Tried Before' },
  '/quiz/struggle-triggers': { step: 25, stage: 'quiz', name: 'Struggle Triggers' },
  '/quiz/improvement-goal': { step: 26, stage: 'quiz', name: 'Improvement Goal' },
  '/quiz/action-priority': { step: 27, stage: 'quiz', name: 'Action Priority' },
  
  '/insight/expert_review': { step: 28, stage: 'interstitial', name: 'Expert Review' },
  
  // Daily commitment
  '/quiz/daily-time': { step: 29, stage: 'quiz', name: 'Daily Time' },
  
  '/insight/social_proof_2': { step: 30, stage: 'interstitial', name: 'Social Proof 2' },
  
  // Lead capture
  '/capture/email': { step: 31, stage: 'lead_capture', name: 'Email Capture' },
  '/capture/email-optin': { step: 32, stage: 'lead_capture', name: 'Email Opt-in' },
  '/capture/name': { step: 33, stage: 'lead_capture', name: 'Name Capture' },
  
  // Results
  '/results/loading': { step: 34, stage: 'results', name: 'Loading Analysis' },
  '/results/summary': { step: 35, stage: 'results', name: 'Results Summary' },
  
  // Checkout/Conversion
  '/checkout/paywall': { step: 36, stage: 'conversion', name: 'Paywall' },
  '/checkout/success': { step: 37, stage: 'conversion', name: 'Purchase Success' },
}

const TOTAL_FUNNEL_STEPS = 37

export function MetaPixel() {
  const pathname = usePathname()

  // Track page views and funnel steps on route changes
  useEffect(() => {
    // Always track PageView
    trackPageView()
    
    // Get funnel stage info for this route
    const stageInfo = FUNNEL_STAGES[pathname]
    
    if (stageInfo) {
      // Track ViewContent with funnel step details
      // This creates a trackable funnel in Meta Ads Manager
      trackEvent('ViewContent', {
        content_name: stageInfo.name,
        content_category: stageInfo.stage,
        content_ids: [`step_${stageInfo.step}`],
        content_type: 'funnel_step',
        // Custom parameters for funnel analysis
        funnel_step: stageInfo.step,
        funnel_stage: stageInfo.stage,
        funnel_progress: Math.round((stageInfo.step / TOTAL_FUNNEL_STEPS) * 100),
      })
      
      console.log(`Meta Pixel: Funnel step ${stageInfo.step}/${TOTAL_FUNNEL_STEPS} - ${stageInfo.name} (${stageInfo.stage})`)
    }
  }, [pathname])

  return (
    <>
      {/* Meta Pixel Base Code */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      {/* NoScript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}
