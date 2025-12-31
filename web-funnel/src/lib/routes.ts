// Route configuration for the funnel
// Maps funnel flow to URL paths
// 
// URL STANDARD (see 02_Funnels/README.md):
// - /onboarding/* - Demographics, social proof
// - /quiz/*       - Core quiz questions (semantic slugs)
// - /insight/*    - Research stats, transformations
// - /results/*    - Analysis, loading screens
// - /capture/*    - Lead capture
// - /checkout/*   - Payment flow

// Semantic quiz slugs mapped to question indices
// This allows URLs like /quiz/emotional-intensity instead of /quiz/1
export const QUIZ_SLUGS = [
  // Section 1: Current Emotional State (Q1-8)
  'emotional-intensity',   // 0
  'exhaustion',            // 1
  'overwhelm',             // 2
  'mood-swings',           // 3
  'reactivity',            // 4
  'stress-level',          // 5
  'sleep-impact',          // 6
  'inner-stability',       // 7
  // Section 2: Self-Understanding (Q9-14)
  'self-criticism',        // 8
  'emotion-expression',    // 9
  'overthinking',          // 10
  'compliment-accept',     // 11
  'relationship-overthink', // 12
  'others-needs',          // 13
  // Section 3: Goals & Readiness (Q15-22)
  'last-calm',             // 14
  'emotional-concerns',    // 15
  'morning-routine',       // 16
  'tried-before',          // 17
  'struggle-triggers',     // 18
  'improvement-goal',      // 19
  'action-priority',       // 20
  'daily-time',            // 21
] as const

export type QuizSlug = typeof QUIZ_SLUGS[number]

// Get question index from slug
export const getQuestionIndexFromSlug = (slug: string): number => {
  const index = QUIZ_SLUGS.indexOf(slug as QuizSlug)
  return index >= 0 ? index : -1
}

// Get slug from question index
export const getSlugFromQuestionIndex = (index: number): string => {
  return QUIZ_SLUGS[index] || ''
}

export const ROUTES = {
  // Entry / Onboarding
  gender: '/',
  age: '/onboarding/age',
  consent: '/onboarding/consent',
  socialProof: '/onboarding/welcome',
  
  // Quiz questions (semantic slugs)
  quiz: (indexOrSlug: number | string) => {
    if (typeof indexOrSlug === 'number') {
      return `/quiz/${QUIZ_SLUGS[indexOrSlug]}`
    }
    return `/quiz/${indexOrSlug}`
  },
  
  // Insights / Interstitials
  patternIdentified: '/insight/pattern',
  interstitial: (id: string) => `/insight/${id}`,
  
  // Lead capture
  email: '/capture/email',
  emailOptin: '/capture/email-optin',
  name: '/capture/name',
  
  // Results
  loading: '/results/loading',
  results: '/results/summary',
  
  // Checkout / Conversion
  paywall: '/checkout/paywall',
  success: '/checkout/success',
} as const

// Funnel flow with routes
export interface FunnelStep {
  type: string
  route: string
  questionIndex?: number
  interstitialId?: string
}

export const funnelFlowWithRoutes: FunnelStep[] = [
  // Entry
  { type: 'gender', route: ROUTES.gender },
  { type: 'age', route: ROUTES.age },
  { type: 'consent', route: ROUTES.consent },
  { type: 'social_proof', route: ROUTES.socialProof },
  
  // Quiz Section 1: Current State (Q1-8)
  { type: 'question', route: ROUTES.quiz(0), questionIndex: 0 },   // emotional-intensity
  { type: 'question', route: ROUTES.quiz(1), questionIndex: 1 },   // exhaustion
  { type: 'question', route: ROUTES.quiz(2), questionIndex: 2 },   // overwhelm
  { type: 'question', route: ROUTES.quiz(3), questionIndex: 3 },   // mood-swings
  { type: 'question', route: ROUTES.quiz(4), questionIndex: 4 },   // reactivity
  { type: 'question', route: ROUTES.quiz(5), questionIndex: 5 },   // stress-level
  { type: 'question', route: ROUTES.quiz(6), questionIndex: 6 },   // sleep-impact
  { type: 'question', route: ROUTES.quiz(7), questionIndex: 7 },   // inner-stability
  
  // Pattern Identified
  { type: 'pattern_identified', route: ROUTES.patternIdentified },
  
  // Quiz Section 2: Self-Understanding (Q9-14)
  { type: 'question', route: ROUTES.quiz(8), questionIndex: 8 },   // self-criticism
  { type: 'question', route: ROUTES.quiz(9), questionIndex: 9 },   // emotion-expression
  { type: 'question', route: ROUTES.quiz(10), questionIndex: 10 }, // overthinking
  { type: 'question', route: ROUTES.quiz(11), questionIndex: 11 }, // compliment-accept
  { type: 'question', route: ROUTES.quiz(12), questionIndex: 12 }, // relationship-overthink
  { type: 'question', route: ROUTES.quiz(13), questionIndex: 13 }, // others-needs
  
  // Interstitial: Science backing
  { type: 'interstitial', route: ROUTES.interstitial('science'), interstitialId: 'science' },
  
  // Quiz Section 3: Goals & Readiness (Q15-22)
  { type: 'question', route: ROUTES.quiz(14), questionIndex: 14 }, // last-calm
  { type: 'question', route: ROUTES.quiz(15), questionIndex: 15 }, // emotional-concerns
  { type: 'question', route: ROUTES.quiz(16), questionIndex: 16 }, // morning-routine
  { type: 'question', route: ROUTES.quiz(17), questionIndex: 17 }, // tried-before
  { type: 'question', route: ROUTES.quiz(18), questionIndex: 18 }, // struggle-triggers
  { type: 'question', route: ROUTES.quiz(19), questionIndex: 19 }, // improvement-goal
  { type: 'question', route: ROUTES.quiz(20), questionIndex: 20 }, // action-priority
  
  // Interstitial: Expert review
  { type: 'interstitial', route: ROUTES.interstitial('expert_review'), interstitialId: 'expert_review' },
  
  // Daily commitment
  { type: 'question', route: ROUTES.quiz(21), questionIndex: 21 }, // daily-time
  
  // Interstitial: Social proof before email
  { type: 'interstitial', route: ROUTES.interstitial('social_proof_2'), interstitialId: 'social_proof_2' },
  
  // Lead Capture
  { type: 'email_capture', route: ROUTES.email },
  { type: 'email_optin', route: ROUTES.emailOptin },
  { type: 'name_capture', route: ROUTES.name },
  
  // Results
  { type: 'loading', route: ROUTES.loading },
  { type: 'results_summary', route: ROUTES.results },
  
  // Conversion
  { type: 'paywall', route: ROUTES.paywall },
]

// Helper to get current step index from route
export const getStepIndexFromRoute = (pathname: string): number => {
  const index = funnelFlowWithRoutes.findIndex(step => step.route === pathname)
  return index >= 0 ? index : 0
}

// Helper to get next route from current step
export const getNextRoute = (currentStepIndex: number): string => {
  const nextStep = funnelFlowWithRoutes[currentStepIndex + 1]
  return nextStep ? nextStep.route : ROUTES.paywall
}

// Helper to get previous route from current step
export const getPrevRoute = (currentStepIndex: number): string => {
  const prevStep = funnelFlowWithRoutes[currentStepIndex - 1]
  return prevStep ? prevStep.route : ROUTES.gender
}

// Get total quiz questions
export const getTotalQuizQuestions = (): number => {
  return funnelFlowWithRoutes.filter(step => step.type === 'question').length
}

// Get current question number from step index
export const getQuestionNumberFromStep = (stepIndex: number): number => {
  let count = 0
  for (let i = 0; i <= stepIndex; i++) {
    if (funnelFlowWithRoutes[i].type === 'question') {
      count++
    }
  }
  return count
}

