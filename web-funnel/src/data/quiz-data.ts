// Memento Quiz Data - Emotional Wellness Assessment
// Based on Liven funnel structure, adapted for emotional wellness positioning

export interface QuizOption {
  id: string;
  label: string;
  icon?: string;
  value?: string;
}

export interface QuizQuestion {
  id: string;
  type: 'single' | 'multi' | 'likert' | 'interstitial' | 'email' | 'name' | 'loading' | 'results' | 'paywall';
  question?: string;
  subtitle?: string;
  options?: QuizOption[];
  // Interstitial specific
  title?: string;
  message?: string;
  icon?: string;
  stats?: { label: string; value: string }[];
}

// Quiz flow following Liven's structure
export const quizFlow: QuizQuestion[] = [
  // SECTION 1: ENTRY (handled separately on landing page)
  // Gender is selected on landing page
  
  // Q1: Age Selection
  {
    id: 'age',
    type: 'single',
    question: "What chapter of life are you in?",
    subtitle: "This helps us personalize your experience",
    options: [
      { id: '18-24', label: '18-24' },
      { id: '25-34', label: '25-34' },
      { id: '35-44', label: '35-44' },
      { id: '45-54', label: '45-54' },
      { id: '55-64', label: '55-64' },
      { id: '65+', label: '65+' },
    ],
  },

  // INTERSTITIAL: Social Proof
  {
    id: 'social-proof-1',
    type: 'interstitial',
    title: "Join 2,500,000+ people",
    message: "who discovered their path to emotional stability",
    icon: '👥',
  },

  // SECTION 2: CURRENT STATE (Q2-9)
  
  // Q2: Energy & Fatigue
  {
    id: 'tired',
    type: 'single',
    question: "How often do you feel emotionally exhausted, even after rest?",
    options: [
      { id: 'often', label: 'Often', icon: '✓' },
      { id: 'sometimes', label: 'Sometimes', icon: '?' },
      { id: 'rarely', label: 'Rarely', icon: '✗' },
    ],
  },

  // Q3: Emotional Overwhelm
  {
    id: 'overwhelmed',
    type: 'single',
    question: "How often do you feel overwhelmed by your emotions?",
    options: [
      { id: 'often', label: 'Often', icon: '✓' },
      { id: 'sometimes', label: 'Sometimes', icon: '?' },
      { id: 'rarely', label: 'Rarely', icon: '✗' },
    ],
  },

  // Q4: Reactivity
  {
    id: 'reactive',
    type: 'single',
    question: "Do you find yourself reacting intensely to situations that others handle calmly?",
    options: [
      { id: 'often', label: 'Often', icon: '✓' },
      { id: 'sometimes', label: 'Sometimes', icon: '?' },
      { id: 'rarely', label: 'Rarely', icon: '✗' },
    ],
  },

  // Q5: Mood Consistency
  {
    id: 'mood-swings',
    type: 'single',
    question: "How often do you experience unexpected mood changes?",
    options: [
      { id: 'often', label: 'Often', icon: '✓' },
      { id: 'sometimes', label: 'Sometimes', icon: '?' },
      { id: 'rarely', label: 'Rarely', icon: '✗' },
    ],
  },

  // Q6: Sleep Quality
  {
    id: 'sleep',
    type: 'single',
    question: "Does emotional stress affect your sleep?",
    options: [
      { id: 'often', label: 'Often — I struggle to fall asleep or stay asleep', icon: '✓' },
      { id: 'sometimes', label: 'Sometimes — Depends on what\'s happening', icon: '?' },
      { id: 'rarely', label: 'Rarely — My sleep is usually fine', icon: '✗' },
    ],
  },

  // Q7: Inner Calm
  {
    id: 'inner-calm',
    type: 'single',
    question: "Have you felt a sense of inner calm in recent months?",
    options: [
      { id: 'yes', label: 'Yes, most of the time', icon: '✓' },
      { id: 'sometimes', label: 'Occasionally', icon: '?' },
      { id: 'rarely', label: 'Rarely or never', icon: '✗' },
    ],
  },

  // INTERSTITIAL: Progress
  {
    id: 'progress-1',
    type: 'interstitial',
    title: "You're making great progress",
    message: "87% of people with your responses have found meaningful improvement with Memento",
    icon: '📊',
  },

  // Q8: Emotional Expression (Likert)
  {
    id: 'express-emotions',
    type: 'likert',
    question: "It's difficult for me to express my emotions",
    options: [
      { id: 'strongly-disagree', label: 'Strongly disagree', icon: '⟸⟸' },
      { id: 'disagree', label: 'Disagree', icon: '⟸' },
      { id: 'neutral', label: 'Not sure', icon: '?' },
      { id: 'agree', label: 'Agree', icon: '⟹' },
      { id: 'strongly-agree', label: 'Strongly agree', icon: '⟹⟹' },
    ],
  },

  // Q9: Understanding Feelings
  {
    id: 'understand-feelings',
    type: 'likert',
    question: "I often don't understand why I feel the way I do",
    options: [
      { id: 'strongly-disagree', label: 'Strongly disagree', icon: '⟸⟸' },
      { id: 'disagree', label: 'Disagree', icon: '⟸' },
      { id: 'neutral', label: 'Not sure', icon: '?' },
      { id: 'agree', label: 'Agree', icon: '⟹' },
      { id: 'strongly-agree', label: 'Strongly agree', icon: '⟹⟹' },
    ],
  },

  // SECTION 3: SELF-UNDERSTANDING (Q10-14)

  // Q10: Self-Criticism
  {
    id: 'self-criticism',
    type: 'likert',
    question: "I'm often hard on myself when things don't go as planned",
    options: [
      { id: 'strongly-disagree', label: 'Strongly disagree', icon: '⟸⟸' },
      { id: 'disagree', label: 'Disagree', icon: '⟸' },
      { id: 'neutral', label: 'Not sure', icon: '?' },
      { id: 'agree', label: 'Agree', icon: '⟹' },
      { id: 'strongly-agree', label: 'Strongly agree', icon: '⟹⟹' },
    ],
  },

  // Q11: Accepting Compliments
  {
    id: 'compliments',
    type: 'single',
    question: "Have you ever struggled with accepting compliments because you didn't believe they were true?",
    options: [
      { id: 'almost-always', label: 'Almost always' },
      { id: 'depends', label: 'It depends' },
      { id: 'not-really', label: 'Not really' },
      { id: 'not-sure', label: "I'm not sure" },
    ],
  },

  // Q12: Relationship Dynamics
  {
    id: 'relationship-dynamics',
    type: 'single',
    question: "Do you tend to overthink your interactions with others?",
    options: [
      { id: 'yes', label: 'Yes', icon: '✓' },
      { id: 'no', label: 'No', icon: '✗' },
      { id: 'not-sure', label: "I'm not sure", icon: '?' },
    ],
  },

  // Q13: People Pleasing
  {
    id: 'people-pleasing',
    type: 'single',
    question: "Do you often prioritize others' needs over your own?",
    options: [
      { id: 'often', label: 'Often', icon: '✓' },
      { id: 'sometimes', label: 'Sometimes', icon: '?' },
      { id: 'rarely', label: 'Rarely', icon: '✗' },
    ],
  },

  // INTERSTITIAL: Science
  {
    id: 'science-teaser',
    type: 'interstitial',
    title: "Grounded in science",
    message: "Memento was developed with licensed therapists and behavioral scientists using evidence-based practices",
    icon: '🔬',
  },

  // Q14: Decision Making
  {
    id: 'decision-making',
    type: 'likert',
    question: "I often find it challenging to make decisions without second-guessing myself",
    options: [
      { id: 'strongly-disagree', label: 'Strongly disagree', icon: '⟸⟸' },
      { id: 'disagree', label: 'Disagree', icon: '⟸' },
      { id: 'neutral', label: 'Not sure', icon: '?' },
      { id: 'agree', label: 'Agree', icon: '⟹' },
      { id: 'strongly-agree', label: 'Strongly agree', icon: '⟹⟹' },
    ],
  },

  // SECTION 4: GOALS & LIFESTYLE (Q15-20)

  // Q15: When Last Felt Stable
  {
    id: 'last-stable',
    type: 'single',
    question: "When was the last time you felt emotionally stable and grounded?",
    options: [
      { id: 'weeks', label: 'A few weeks ago' },
      { id: 'months', label: 'A few months ago' },
      { id: 'years', label: 'More than a year ago' },
      { id: 'never', label: "I can't remember" },
    ],
  },

  // Q16: Main Concerns (Multi-select style)
  {
    id: 'main-concerns',
    type: 'multi',
    question: "What aspects of your emotional well-being would you like to address?",
    subtitle: "Select all that apply",
    options: [
      { id: 'anxiety', label: 'Anxiety or worry', icon: '😰' },
      { id: 'overwhelm', label: 'Emotional overwhelm', icon: '😔' },
      { id: 'reactivity', label: 'Overreacting to situations', icon: '💥' },
      { id: 'understanding', label: "Not understanding my feelings", icon: '🤔' },
      { id: 'self-criticism', label: 'Being too hard on myself', icon: '💭' },
      { id: 'fine', label: "I'm doing okay", icon: '👍' },
    ],
  },

  // Q17: Morning Routine
  {
    id: 'morning',
    type: 'single',
    question: "What do you usually do first thing in the morning?",
    options: [
      { id: 'phone', label: 'Check my phone', icon: '📱' },
      { id: 'coffee', label: 'Make coffee/tea', icon: '☕' },
      { id: 'routine', label: 'Morning routine (shower, etc.)', icon: '🚿' },
      { id: 'other', label: 'Something else', icon: '✨' },
    ],
  },

  // Q18: Daily Stress Triggers
  {
    id: 'triggers',
    type: 'multi',
    question: "What tends to trigger emotional stress for you?",
    subtitle: "Select all that apply",
    options: [
      { id: 'work', label: 'Work or career', icon: '💼' },
      { id: 'relationships', label: 'Relationships', icon: '💔' },
      { id: 'family', label: 'Family dynamics', icon: '👨‍👩‍👧' },
      { id: 'health', label: 'Health concerns', icon: '🩺' },
      { id: 'finances', label: 'Financial stress', icon: '💰' },
      { id: 'uncertainty', label: 'Uncertainty about the future', icon: '❓' },
    ],
  },

  // INTERSTITIAL: Expert Review
  {
    id: 'expert-teaser',
    type: 'interstitial',
    title: "Your plan will be personalized",
    message: "Our approach is tailored to your unique Emotional Blueprint based on your responses",
    icon: '✨',
  },

  // Q19: Goals
  {
    id: 'goals',
    type: 'multi',
    question: "What would make the biggest difference in your life right now?",
    subtitle: "Select all that apply",
    options: [
      { id: 'calm', label: 'Feeling calmer and more centered', icon: '🧘' },
      { id: 'understanding', label: 'Understanding why I feel the way I do', icon: '🧠' },
      { id: 'reactions', label: 'Better control over my reactions', icon: '⚡' },
      { id: 'confidence', label: 'More self-confidence', icon: '💪' },
      { id: 'relationships', label: 'Improved relationships', icon: '❤️' },
      { id: 'sleep', label: 'Better sleep', icon: '😴' },
    ],
  },

  // Q20: Past Approaches
  {
    id: 'past-approaches',
    type: 'multi',
    question: "What have you tried before to manage your emotions?",
    subtitle: "Select all that apply",
    options: [
      { id: 'meditation', label: 'Meditation apps', icon: '🧘' },
      { id: 'therapy', label: 'Therapy or counseling', icon: '💭' },
      { id: 'journaling', label: 'Journaling', icon: '📓' },
      { id: 'exercise', label: 'Exercise', icon: '🏃' },
      { id: 'books', label: 'Self-help books', icon: '📚' },
      { id: 'nothing', label: 'Nothing yet', icon: '🆕' },
    ],
  },

  // INTERSTITIAL: Social Proof Animation
  {
    id: 'social-proof-2',
    type: 'interstitial',
    title: "You're in good company",
    message: "Over 2.5 million people have started their journey to emotional stability with us",
    icon: '🌟',
  },

  // Q21: Daily Time Commitment
  {
    id: 'time-commitment',
    type: 'single',
    question: "How much time can you dedicate to yourself daily?",
    subtitle: "Even small moments can create big changes",
    options: [
      { id: '5min', label: '5 minutes', icon: '⏱️' },
      { id: '10min', label: '10 minutes', icon: '⏱️' },
      { id: '15min', label: '15 minutes', icon: '⏱️' },
      { id: '20min', label: '20+ minutes', icon: '⏱️' },
    ],
  },

  // Q22: Readiness
  {
    id: 'readiness',
    type: 'single',
    question: "How ready are you to make a change in how you handle emotions?",
    options: [
      { id: 'very-ready', label: "Very ready — I want to start now", icon: '🔥' },
      { id: 'somewhat-ready', label: "Somewhat ready — I'm curious", icon: '🤔' },
      { id: 'exploring', label: "Just exploring options", icon: '👀' },
    ],
  },

  // EMAIL CAPTURE
  {
    id: 'email',
    type: 'email',
    title: "Where should we send your Emotional Blueprint?",
    message: "Enter your email to see your personalized results",
  },

  // EMAIL SUBSCRIPTION
  {
    id: 'email-subscribe',
    type: 'single',
    question: "Would you like to receive tips and insights for emotional wellness?",
    options: [
      { id: 'yes', label: 'Yes, send me insights', icon: '✓' },
      { id: 'no', label: 'No thanks', icon: '✗' },
    ],
  },

  // NAME CAPTURE
  {
    id: 'name',
    type: 'name',
    title: "What should we call you?",
    message: "We'll personalize your journey",
  },

  // LOADING/PROCESSING
  {
    id: 'loading',
    type: 'loading',
    title: "Analyzing your Emotional Blueprint...",
    message: "Creating your personalized plan",
  },

  // RESULTS
  {
    id: 'results',
    type: 'results',
    title: "Your Emotional Blueprint",
  },

  // PAYWALL
  {
    id: 'paywall',
    type: 'paywall',
    title: "Your Personalized Program is Ready",
  },
];

export const TOTAL_QUESTIONS = quizFlow.filter(q => 
  q.type === 'single' || q.type === 'multi' || q.type === 'likert'
).length;

export function getQuestionNumber(currentIndex: number): number {
  let count = 0;
  for (let i = 0; i <= currentIndex && i < quizFlow.length; i++) {
    const q = quizFlow[i];
    if (q.type === 'single' || q.type === 'multi' || q.type === 'likert') {
      count++;
    }
  }
  return count;
}

export function getProgressPercentage(currentIndex: number): number {
  const questionNumber = getQuestionNumber(currentIndex);
  return Math.round((questionNumber / TOTAL_QUESTIONS) * 100);
}

