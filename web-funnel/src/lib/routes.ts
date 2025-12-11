// Route configuration for the funnel
// Maps funnel flow to URL paths

export const ROUTES = {
  // Entry
  gender: '/',
  age: '/age',
  consent: '/consent',
  socialProof: '/social-proof',
  
  // Quiz
  quiz: (questionNumber: number) => `/quiz/${questionNumber}`,
  
  // Interstitials
  patternIdentified: '/pattern-identified',
  interstitial: (id: string) => `/interstitial/${id}`,
  
  // Lead capture
  email: '/email',
  emailOptin: '/email-optin',
  name: '/name',
  
  // Results
  loading: '/loading',
  results: '/results',
  
  // Conversion
  paywall: '/paywall',
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
  { type: 'question', route: ROUTES.quiz(1), questionIndex: 0 },
  { type: 'question', route: ROUTES.quiz(2), questionIndex: 1 },
  { type: 'question', route: ROUTES.quiz(3), questionIndex: 2 },
  { type: 'question', route: ROUTES.quiz(4), questionIndex: 3 },
  { type: 'question', route: ROUTES.quiz(5), questionIndex: 4 },
  { type: 'question', route: ROUTES.quiz(6), questionIndex: 5 },
  { type: 'question', route: ROUTES.quiz(7), questionIndex: 6 },
  { type: 'question', route: ROUTES.quiz(8), questionIndex: 7 },
  
  // Pattern Identified
  { type: 'pattern_identified', route: ROUTES.patternIdentified },
  
  // Quiz Section 2: Self-Understanding (Q9-14)
  { type: 'question', route: ROUTES.quiz(9), questionIndex: 8 },
  { type: 'question', route: ROUTES.quiz(10), questionIndex: 9 },
  { type: 'question', route: ROUTES.quiz(11), questionIndex: 10 },
  { type: 'question', route: ROUTES.quiz(12), questionIndex: 11 },
  { type: 'question', route: ROUTES.quiz(13), questionIndex: 12 },
  { type: 'question', route: ROUTES.quiz(14), questionIndex: 13 },
  
  // Interstitial: Science backing
  { type: 'interstitial', route: ROUTES.interstitial('science'), interstitialId: 'science' },
  
  // Quiz Section 3: Goals & Readiness (Q15-22)
  { type: 'question', route: ROUTES.quiz(15), questionIndex: 14 },
  { type: 'question', route: ROUTES.quiz(16), questionIndex: 15 },
  { type: 'question', route: ROUTES.quiz(17), questionIndex: 16 },
  { type: 'question', route: ROUTES.quiz(18), questionIndex: 17 },
  { type: 'question', route: ROUTES.quiz(19), questionIndex: 18 },
  { type: 'question', route: ROUTES.quiz(20), questionIndex: 19 },
  { type: 'question', route: ROUTES.quiz(21), questionIndex: 20 },
  
  // Interstitial: Expert review
  { type: 'interstitial', route: ROUTES.interstitial('expert_review'), interstitialId: 'expert_review' },
  
  // Daily commitment
  { type: 'question', route: ROUTES.quiz(22), questionIndex: 21 },
  
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

