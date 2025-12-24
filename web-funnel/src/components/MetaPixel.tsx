'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { META_PIXEL_ID, trackPageView, trackEvent } from '@/lib/meta-pixel'

// Map routes to funnel stages for Meta tracking
const FUNNEL_STAGES: Record<string, { step: number; stage: string; name: string }> = {
  '/': { step: 1, stage: 'entry', name: 'Gender Selection' },
  '/age': { step: 2, stage: 'entry', name: 'Age Selection' },
  '/consent': { step: 3, stage: 'entry', name: 'Consent' },
  '/social-proof': { step: 4, stage: 'entry', name: 'Social Proof' },
  
  // Quiz questions
  '/quiz/1': { step: 5, stage: 'quiz', name: 'Quiz Q1' },
  '/quiz/2': { step: 6, stage: 'quiz', name: 'Quiz Q2' },
  '/quiz/3': { step: 7, stage: 'quiz', name: 'Quiz Q3' },
  '/quiz/4': { step: 8, stage: 'quiz', name: 'Quiz Q4' },
  '/quiz/5': { step: 9, stage: 'quiz', name: 'Quiz Q5' },
  '/quiz/6': { step: 10, stage: 'quiz', name: 'Quiz Q6' },
  '/quiz/7': { step: 11, stage: 'quiz', name: 'Quiz Q7' },
  '/quiz/8': { step: 12, stage: 'quiz', name: 'Quiz Q8' },
  
  '/pattern-identified': { step: 13, stage: 'interstitial', name: 'Pattern Identified' },
  
  '/quiz/9': { step: 14, stage: 'quiz', name: 'Quiz Q9' },
  '/quiz/10': { step: 15, stage: 'quiz', name: 'Quiz Q10' },
  '/quiz/11': { step: 16, stage: 'quiz', name: 'Quiz Q11' },
  '/quiz/12': { step: 17, stage: 'quiz', name: 'Quiz Q12' },
  '/quiz/13': { step: 18, stage: 'quiz', name: 'Quiz Q13' },
  '/quiz/14': { step: 19, stage: 'quiz', name: 'Quiz Q14' },
  
  '/interstitial/science': { step: 20, stage: 'interstitial', name: 'Science Backing' },
  
  '/quiz/15': { step: 21, stage: 'quiz', name: 'Quiz Q15' },
  '/quiz/16': { step: 22, stage: 'quiz', name: 'Quiz Q16' },
  '/quiz/17': { step: 23, stage: 'quiz', name: 'Quiz Q17' },
  '/quiz/18': { step: 24, stage: 'quiz', name: 'Quiz Q18' },
  '/quiz/19': { step: 25, stage: 'quiz', name: 'Quiz Q19' },
  '/quiz/20': { step: 26, stage: 'quiz', name: 'Quiz Q20' },
  '/quiz/21': { step: 27, stage: 'quiz', name: 'Quiz Q21' },
  
  '/interstitial/expert_review': { step: 28, stage: 'interstitial', name: 'Expert Review' },
  
  '/quiz/22': { step: 29, stage: 'quiz', name: 'Quiz Q22' },
  
  '/interstitial/social_proof_2': { step: 30, stage: 'interstitial', name: 'Social Proof 2' },
  
  // Lead capture
  '/email': { step: 31, stage: 'lead_capture', name: 'Email Capture' },
  '/email-optin': { step: 32, stage: 'lead_capture', name: 'Email Opt-in' },
  '/name': { step: 33, stage: 'lead_capture', name: 'Name Capture' },
  
  // Results
  '/loading': { step: 34, stage: 'results', name: 'Loading Analysis' },
  '/results': { step: 35, stage: 'results', name: 'Results Summary' },
  
  // Conversion
  '/paywall': { step: 36, stage: 'conversion', name: 'Paywall' },
  '/success': { step: 37, stage: 'conversion', name: 'Purchase Success' },
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
