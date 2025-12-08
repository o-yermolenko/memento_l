export type QuestionType = 'single' | 'multiple' | 'likert' | 'slider' | 'text'

export interface QuestionOption {
  id: string
  label: string
  value: string
  icon?: string
  score?: number
}

export interface Question {
  id: string
  type: QuestionType
  model: string
  question: string
  description?: string
  options: QuestionOption[]
  multiSelect?: boolean
  minSelect?: number
  maxSelect?: number
}

export interface InterstitialScreen {
  id: string
  type: 'social_proof' | 'science' | 'expert' | 'progress' | 'stat' | 'testimonial'
  headline: string
  subheadline?: string
  statValue?: string
  statLabel?: string
  ctaText?: string
}

export const quizQuestions: Question[] = [
  // SECTION 1: Current Emotional State (Q1-8)
  {
    id: 'emotional_intensity',
    type: 'single',
    model: 'emotionalIntensity',
    question: 'How often do you feel emotions more intensely than the situation seems to require?',
    options: [
      { id: 'often', label: 'Often', value: 'often', icon: 'check', score: 16 },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes', icon: 'question', score: 12 },
      { id: 'rarely', label: 'Rarely', value: 'rarely', icon: 'skip', score: 6 },
    ],
  },
  {
    id: 'exhaustion',
    type: 'single',
    model: 'exhaustion',
    question: 'How often do you feel exhausted from feeling too much?',
    options: [
      { id: 'often', label: 'Often', value: 'often', icon: 'check', score: 16 },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes', icon: 'question', score: 12 },
      { id: 'rarely', label: 'Rarely', value: 'rarely', icon: 'skip', score: 6 },
    ],
  },
  {
    id: 'overwhelm',
    type: 'single',
    model: 'overwhelm',
    question: 'How often do you feel overwhelmed by your emotions?',
    options: [
      { id: 'often', label: 'Often', value: 'often', icon: 'check', score: 16 },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes', icon: 'question', score: 14 },
      { id: 'rarely', label: 'Rarely', value: 'rarely', icon: 'skip', score: 8 },
    ],
  },
  {
    id: 'mood_swings',
    type: 'single',
    model: 'moodSwings',
    question: 'How often do you experience unexpected mood changes?',
    options: [
      { id: 'often', label: 'Often', value: 'often', icon: 'check', score: 14 },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes', icon: 'question', score: 12 },
      { id: 'rarely', label: 'Rarely', value: 'rarely', icon: 'skip', score: 6 },
    ],
  },
  {
    id: 'reactivity',
    type: 'single',
    model: 'reactivity',
    question: 'Do you often react to situations before you can think about them?',
    options: [
      { id: 'often', label: 'Often', value: 'often', icon: 'check', score: 16 },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes', icon: 'question', score: 12 },
      { id: 'rarely', label: 'Rarely', value: 'rarely', icon: 'skip', score: 6 },
    ],
  },
  {
    id: 'stress_level',
    type: 'single',
    model: 'stressLevel',
    question: 'How often do you carry stress in your body (tension, headaches, fatigue)?',
    options: [
      { id: 'often', label: 'Often', value: 'often', icon: 'check', score: 16 },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes', icon: 'question', score: 12 },
      { id: 'rarely', label: 'Rarely', value: 'rarely', icon: 'skip', score: 6 },
    ],
  },
  {
    id: 'sleep_impact',
    type: 'single',
    model: 'sleepImpact',
    question: 'Do your emotions affect your sleep quality?',
    options: [
      { id: 'often', label: 'Often', value: 'often', icon: 'check', score: 14 },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes', icon: 'question', score: 10 },
      { id: 'rarely', label: 'Rarely', value: 'rarely', icon: 'skip', score: 6 },
    ],
  },
  {
    id: 'inner_stability',
    type: 'single',
    model: 'innerStability',
    question: 'Have you felt emotionally stable and grounded in recent months?',
    options: [
      { id: 'yes', label: 'Yes', value: 'yes', icon: 'check', score: 6 },
      { id: 'moderately', label: 'Moderately', value: 'moderately', icon: 'question', score: 12 },
      { id: 'no', label: 'No', value: 'no', icon: 'skip', score: 16 },
    ],
  },
  
  // SECTION 2: Self-Understanding (Q9-14)
  {
    id: 'self_criticism',
    type: 'likert',
    model: 'selfCriticism',
    question: 'I am often hard on myself when things don\'t go as planned',
    options: [
      { id: 'strongly_disagree', label: 'Strongly disagree', value: 'strongly_disagree', icon: 'disagree2x', score: 4 },
      { id: 'somewhat_disagree', label: 'Somewhat disagree', value: 'somewhat_disagree', icon: 'disagree', score: 8 },
      { id: 'not_sure', label: 'Not sure', value: 'not_sure', icon: 'question', score: 12 },
      { id: 'somewhat_agree', label: 'Somewhat agree', value: 'somewhat_agree', icon: 'agree', score: 14 },
      { id: 'strongly_agree', label: 'Strongly agree', value: 'strongly_agree', icon: 'agree2x', score: 16 },
    ],
  },
  {
    id: 'emotion_expression',
    type: 'likert',
    model: 'emotionExpression',
    question: 'It\'s difficult for me to express my emotions to others',
    options: [
      { id: 'strongly_disagree', label: 'Strongly disagree', value: 'strongly_disagree', icon: 'disagree2x', score: 4 },
      { id: 'somewhat_disagree', label: 'Somewhat disagree', value: 'somewhat_disagree', icon: 'disagree', score: 8 },
      { id: 'not_sure', label: 'Not sure', value: 'not_sure', icon: 'question', score: 12 },
      { id: 'somewhat_agree', label: 'Somewhat agree', value: 'somewhat_agree', icon: 'agree', score: 14 },
      { id: 'strongly_agree', label: 'Strongly agree', value: 'strongly_agree', icon: 'agree2x', score: 16 },
    ],
  },
  {
    id: 'overthinking',
    type: 'single',
    model: 'overthinking',
    question: 'How often do you overthink past conversations or decisions?',
    options: [
      { id: 'often', label: 'Often', value: 'often', icon: 'check', score: 16 },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes', icon: 'question', score: 12 },
      { id: 'rarely', label: 'Rarely', value: 'rarely', icon: 'skip', score: 6 },
    ],
  },
  {
    id: 'compliment_accept',
    type: 'single',
    model: 'complimentAccept',
    question: 'Do you struggle to accept compliments because you don\'t believe they\'re true?',
    options: [
      { id: 'almost_always', label: 'Almost always', value: 'almost_always', score: 16 },
      { id: 'depends', label: 'Depends', value: 'depends', score: 12 },
      { id: 'not_at_all', label: 'Not at all', value: 'not_at_all', score: 4 },
      { id: 'not_sure', label: 'I\'m not sure', value: 'not_sure', score: 10 },
    ],
  },
  {
    id: 'relationship_overthink',
    type: 'single',
    model: 'relationshipOverthink',
    question: 'Do you tend to overanalyze other people\'s behavior towards you?',
    options: [
      { id: 'yes', label: 'Yes', value: 'yes', icon: 'check', score: 14 },
      { id: 'no', label: 'No', value: 'no', icon: 'skip', score: 4 },
      { id: 'not_sure', label: 'I\'m not sure', value: 'not_sure', icon: 'question', score: 10 },
    ],
  },
  {
    id: 'others_needs',
    type: 'single',
    model: 'othersNeeds',
    question: 'Do you often prioritize others\' emotional needs over your own?',
    options: [
      { id: 'often', label: 'Often', value: 'often', icon: 'check', score: 16 },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes', icon: 'question', score: 12 },
      { id: 'rarely', label: 'Rarely', value: 'rarely', icon: 'skip', score: 4 },
    ],
  },
  
  // SECTION 3: Goals & Readiness (Q15-23)
  {
    id: 'last_calm',
    type: 'single',
    model: 'lastCalm',
    question: 'When was the last time you felt truly calm and at peace?',
    options: [
      { id: 'few_weeks', label: 'A few weeks ago', value: 'few_weeks', score: 8 },
      { id: 'few_months', label: 'A few months ago', value: 'few_months', score: 12 },
      { id: 'few_years', label: 'More than a year ago', value: 'few_years', score: 16 },
      { id: 'cant_remember', label: 'I can\'t remember', value: 'cant_remember', score: 18 },
    ],
  },
  {
    id: 'emotional_concerns',
    type: 'multiple',
    model: 'emotionalConcerns',
    question: 'Which emotional challenges would you like to address?',
    description: 'Select all that apply',
    multiSelect: true,
    minSelect: 1,
    maxSelect: 6,
    options: [
      { id: 'anxiety', label: 'Anxiety or worry', value: 'anxiety', icon: 'worry', score: 3 },
      { id: 'overwhelm', label: 'Feeling overwhelmed', value: 'overwhelm', icon: 'overwhelm', score: 3 },
      { id: 'reactivity', label: 'Emotional reactivity', value: 'reactivity', icon: 'explosion', score: 3 },
      { id: 'self_doubt', label: 'Self-doubt', value: 'self_doubt', icon: 'doubt', score: 3 },
      { id: 'mood_swings', label: 'Mood fluctuations', value: 'mood_swings', icon: 'mood', score: 3 },
      { id: 'im_fine', label: 'I\'m doing fine', value: 'im_fine', icon: 'thumbsup', score: 0 },
    ],
  },
  {
    id: 'morning_routine',
    type: 'single',
    model: 'morningRoutine',
    question: 'What\'s the first thing you do when you wake up?',
    options: [
      { id: 'phone', label: 'Check my phone', value: 'phone', icon: 'phone', score: 12 },
      { id: 'lie_in_bed', label: 'Lie in bed thinking', value: 'lie_in_bed', icon: 'bed', score: 14 },
      { id: 'routine', label: 'Start my morning routine', value: 'routine', icon: 'routine', score: 6 },
      { id: 'other', label: 'Other', value: 'other', icon: 'other', score: 8 },
    ],
  },
  {
    id: 'tried_before',
    type: 'multiple',
    model: 'triedBefore',
    question: 'What have you tried before to manage your emotions?',
    description: 'Select all that apply',
    multiSelect: true,
    options: [
      { id: 'meditation', label: 'Meditation apps', value: 'meditation', icon: 'meditation', score: 2 },
      { id: 'therapy', label: 'Therapy', value: 'therapy', icon: 'therapy', score: 2 },
      { id: 'journaling', label: 'Journaling', value: 'journaling', icon: 'journal', score: 2 },
      { id: 'exercise', label: 'Exercise', value: 'exercise', icon: 'exercise', score: 2 },
      { id: 'nothing', label: 'Nothing yet', value: 'nothing', icon: 'nothing', score: 3 },
    ],
  },
  {
    id: 'struggle_triggers',
    type: 'multiple',
    model: 'struggleTriggers',
    question: 'What situations trigger your emotional struggles the most?',
    description: 'Select all that apply',
    multiSelect: true,
    options: [
      { id: 'work', label: 'Work or career stress', value: 'work', icon: 'work', score: 3 },
      { id: 'relationships', label: 'Relationships', value: 'relationships', icon: 'heart', score: 3 },
      { id: 'family', label: 'Family dynamics', value: 'family', icon: 'family', score: 3 },
      { id: 'self_image', label: 'Self-image concerns', value: 'self_image', icon: 'mirror', score: 3 },
      { id: 'uncertainty', label: 'Uncertainty about the future', value: 'uncertainty', icon: 'question', score: 3 },
      { id: 'other', label: 'Other', value: 'other', icon: 'other', score: 2 },
    ],
  },
  {
    id: 'improvement_goal',
    type: 'single',
    model: 'improvementGoal',
    question: 'What would you most like to improve about your emotional life?',
    options: [
      { id: 'calm', label: 'Feel more calm and stable', value: 'calm', icon: 'calm', score: 10 },
      { id: 'understand', label: 'Understand my emotions better', value: 'understand', icon: 'insight', score: 10 },
      { id: 'react_less', label: 'React less intensely', value: 'react_less', icon: 'peace', score: 10 },
      { id: 'self_compassion', label: 'Be kinder to myself', value: 'self_compassion', icon: 'heart', score: 10 },
      { id: 'energy', label: 'Have more emotional energy', value: 'energy', icon: 'energy', score: 10 },
    ],
  },
  {
    id: 'action_priority',
    type: 'single',
    model: 'actionPriority',
    question: 'Which would you like to start working on first?',
    options: [
      { id: 'stop_overthinking', label: 'Stop overthinking', value: 'stop_overthinking', icon: 'brain', score: 10 },
      { id: 'build_resilience', label: 'Build emotional resilience', value: 'build_resilience', icon: 'strength', score: 10 },
      { id: 'quiet_critic', label: 'Quiet my inner critic', value: 'quiet_critic', icon: 'silence', score: 10 },
      { id: 'set_boundaries', label: 'Set healthier boundaries', value: 'set_boundaries', icon: 'boundary', score: 10 },
      { id: 'daily_routine', label: 'Build a calming daily routine', value: 'daily_routine', icon: 'routine', score: 10 },
    ],
  },
  {
    id: 'daily_time',
    type: 'single',
    model: 'dailyTime',
    question: 'How much time can you dedicate to your emotional wellness each day?',
    options: [
      { id: '5min', label: '5 minutes', value: '5min', icon: 'clock5', score: 8 },
      { id: '10min', label: '10 minutes', value: '10min', icon: 'clock10', score: 10 },
      { id: '15min', label: '15 minutes', value: '15min', icon: 'clock15', score: 12 },
      { id: '20min', label: '20+ minutes', value: '20min', icon: 'clock20', score: 14 },
    ],
  },
]

export const interstitials: Record<string, InterstitialScreen> = {
  social_proof_1: {
    id: 'social_proof_1',
    type: 'social_proof',
    headline: 'Join 2,500,000+ people',
    subheadline: 'who discovered their path to emotional stability',
    ctaText: 'Continue',
  },
  progress_stat: {
    id: 'progress_stat',
    type: 'stat',
    headline: 'You\'re making progress',
    statValue: '87%',
    statLabel: 'of people with your profile report feeling more stable within 3 weeks',
    ctaText: 'Continue',
  },
  science: {
    id: 'science',
    type: 'testimonial',
    headline: '"I used to spiral for hours. Now I catch myself in minutes."',
    subheadline: 'Sarah M., 34 • Using Memento for 3 weeks',
    statValue: '3 weeks',
    statLabel: 'to feel noticeably different',
    ctaText: 'Continue',
  },
  expert_review: {
    id: 'expert_review',
    type: 'expert',
    headline: 'Your plan will be reviewed by our team of behavioral scientists',
    subheadline: 'We ensure every recommendation is tailored to your unique Emotional Blueprint',
    ctaText: 'Continue',
  },
  social_proof_2: {
    id: 'social_proof_2',
    type: 'social_proof',
    headline: 'You\'re not alone in this journey',
    statValue: '2,500,000+',
    statLabel: 'people have already started rewiring their emotional responses',
    ctaText: 'Almost there!',
  },
}

// Screen flow definition
export type ScreenType = 
  | 'gender'
  | 'age'
  | 'consent'
  | 'social_proof'
  | 'question'
  | 'interstitial'
  | 'pattern_identified'
  | 'email_capture'
  | 'email_optin'
  | 'name_capture'
  | 'loading'
  | 'results_summary'
  | 'transformation'
  | 'plan_ready'
  | 'paywall'

export interface ScreenConfig {
  type: ScreenType
  questionIndex?: number
  interstitialId?: string
}

export const funnelFlow: ScreenConfig[] = [
  // Entry
  { type: 'gender' },                    // 0
  { type: 'age' },                       // 1
  { type: 'consent' },                   // 2 - NEW: Builds trust & commitment (BetterMe pattern)
  { type: 'social_proof' },              // 3
  
  // Quiz Section 1: Current State (Q1-8)
  { type: 'question', questionIndex: 0 }, // 4 - emotional_intensity
  { type: 'question', questionIndex: 1 }, // 5 - exhaustion
  { type: 'question', questionIndex: 2 }, // 6 - overwhelm
  { type: 'question', questionIndex: 3 }, // 7 - mood_swings
  { type: 'question', questionIndex: 4 }, // 8 - reactivity
  { type: 'question', questionIndex: 5 }, // 9 - stress_level
  { type: 'question', questionIndex: 6 }, // 10 - sleep_impact
  { type: 'question', questionIndex: 7 }, // 11 - inner_stability
  
  // Pattern Identified - NEW: Mid-quiz validation (increases completion rate)
  { type: 'pattern_identified' },        // 12
  
  // Quiz Section 2: Self-Understanding (Q9-14)
  { type: 'question', questionIndex: 8 },  // 13 - self_criticism
  { type: 'question', questionIndex: 9 },  // 14 - emotion_expression
  { type: 'question', questionIndex: 10 }, // 15 - overthinking
  { type: 'question', questionIndex: 11 }, // 16 - compliment_accept
  { type: 'question', questionIndex: 12 }, // 17 - relationship_overthink
  { type: 'question', questionIndex: 13 }, // 18 - others_needs
  
  // Interstitial: Science backing
  { type: 'interstitial', interstitialId: 'science' }, // 19
  
  // Quiz Section 3: Goals & Readiness (Q15-23)
  { type: 'question', questionIndex: 14 }, // 20 - last_calm
  { type: 'question', questionIndex: 15 }, // 21 - emotional_concerns
  { type: 'question', questionIndex: 16 }, // 22 - morning_routine
  { type: 'question', questionIndex: 17 }, // 23 - tried_before
  { type: 'question', questionIndex: 18 }, // 24 - struggle_triggers
  { type: 'question', questionIndex: 19 }, // 25 - improvement_goal
  { type: 'question', questionIndex: 20 }, // 26 - action_priority
  
  // Interstitial: Expert review
  { type: 'interstitial', interstitialId: 'expert_review' }, // 27
  
  // Daily commitment
  { type: 'question', questionIndex: 21 }, // 28 - daily_time
  
  // Interstitial: Social proof before email
  { type: 'interstitial', interstitialId: 'social_proof_2' }, // 29
  
  // Lead Capture (email opt-out option builds trust - Coursiv pattern)
  { type: 'email_capture' },              // 30
  { type: 'email_optin' },                // 31
  { type: 'name_capture' },               // 32
  
  // Results
  { type: 'loading' },                    // 33
  { type: 'results_summary' },            // 34
  { type: 'transformation' },             // 35
  { type: 'plan_ready' },                 // 36
  
  // Conversion
  { type: 'paywall' },                    // 37
]

export const getQuestionNumber = (stepIndex: number): number => {
  let questionCount = 0
  for (let i = 0; i <= stepIndex; i++) {
    if (funnelFlow[i].type === 'question') {
      questionCount++
    }
  }
  return questionCount
}

export const getTotalQuestions = (): number => {
  return funnelFlow.filter(s => s.type === 'question').length
}

