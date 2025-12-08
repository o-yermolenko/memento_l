import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Gender = 'male' | 'female' | null
export type AgeRange = '18-24' | '25-34' | '35-44' | '45-54' | '55-64' | '65+' | null

export interface FunnelAnswer {
  questionId: string
  value: string | string[]
  score?: number
}

export interface UserProfile {
  gender: Gender
  age: AgeRange
  name: string
  email: string
  emailOptIn: boolean
}

export interface FunnelState {
  // Navigation
  currentStep: number
  totalSteps: number
  
  // User data
  profile: UserProfile
  answers: FunnelAnswer[]
  
  // Calculated results
  emotionalBlueprintScore: number
  primaryPattern: string
  secondaryPattern: string
  readinessLevel: number
  
  // Actions
  setStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
  setGender: (gender: Gender) => void
  setAge: (age: AgeRange) => void
  setName: (name: string) => void
  setEmail: (email: string) => void
  setEmailOptIn: (optIn: boolean) => void
  addAnswer: (answer: FunnelAnswer) => void
  updateAnswer: (questionId: string, value: string | string[]) => void
  getAnswer: (questionId: string) => FunnelAnswer | undefined
  calculateResults: () => void
  resetFunnel: () => void
}

const initialProfile: UserProfile = {
  gender: null,
  age: null,
  name: '',
  email: '',
  emailOptIn: false,
}

export const useFunnelStore = create<FunnelState>()(
  persist(
    (set, get) => ({
      currentStep: 0,
      totalSteps: 36,
      profile: initialProfile,
      answers: [],
      emotionalBlueprintScore: 0,
      primaryPattern: '',
      secondaryPattern: '',
      readinessLevel: 0,
      
      setStep: (step) => set({ currentStep: step }),
      
      nextStep: () => set((state) => ({ 
        currentStep: Math.min(state.currentStep + 1, state.totalSteps - 1) 
      })),
      
      prevStep: () => set((state) => ({ 
        currentStep: Math.max(state.currentStep - 1, 0) 
      })),
      
      setGender: (gender) => set((state) => ({ 
        profile: { ...state.profile, gender } 
      })),
      
      setAge: (age) => set((state) => ({ 
        profile: { ...state.profile, age } 
      })),
      
      setName: (name) => set((state) => ({ 
        profile: { ...state.profile, name } 
      })),
      
      setEmail: (email) => set((state) => ({ 
        profile: { ...state.profile, email } 
      })),
      
      setEmailOptIn: (optIn) => set((state) => ({ 
        profile: { ...state.profile, emailOptIn: optIn } 
      })),
      
      addAnswer: (answer) => set((state) => {
        const existingIndex = state.answers.findIndex(a => a.questionId === answer.questionId)
        if (existingIndex >= 0) {
          const newAnswers = [...state.answers]
          newAnswers[existingIndex] = answer
          return { answers: newAnswers }
        }
        return { answers: [...state.answers, answer] }
      }),
      
      updateAnswer: (questionId, value) => set((state) => {
        const newAnswers = state.answers.map(a => 
          a.questionId === questionId ? { ...a, value } : a
        )
        return { answers: newAnswers }
      }),
      
      getAnswer: (questionId) => {
        return get().answers.find(a => a.questionId === questionId)
      },
      
      calculateResults: () => {
        const { answers, profile } = get()
        
        // Calculate emotional blueprint score based on answers
        let totalScore = 0
        let highIntensityCount = 0
        
        answers.forEach(answer => {
          if (answer.score) {
            totalScore += answer.score
          }
          // Count high-intensity responses
          if (answer.value === 'often' || answer.value === 'strongly_agree') {
            highIntensityCount++
          }
        })
        
        // Determine primary pattern based on answer patterns
        const patterns = {
          'The Over-Feeler': 0,
          'The Overthinker': 0,
          'The People-Pleaser': 0,
          'The Inner Critic': 0,
          'The Stress Absorber': 0,
        }
        
        // Simplified pattern detection
        answers.forEach(answer => {
          if (answer.questionId === 'emotional_intensity' && answer.value === 'often') {
            patterns['The Over-Feeler'] += 2
          }
          if (answer.questionId === 'overthinking' && answer.value === 'often') {
            patterns['The Overthinker'] += 2
          }
          if (answer.questionId === 'others_needs' && answer.value === 'often') {
            patterns['The People-Pleaser'] += 2
          }
          if (answer.questionId === 'self_criticism' && ['strongly_agree', 'somewhat_agree'].includes(answer.value as string)) {
            patterns['The Inner Critic'] += 2
          }
          if (answer.questionId === 'stress_level' && answer.value === 'often') {
            patterns['The Stress Absorber'] += 2
          }
        })
        
        // Find primary and secondary patterns
        const sortedPatterns = Object.entries(patterns).sort((a, b) => b[1] - a[1])
        const primaryPattern = sortedPatterns[0][0]
        const secondaryPattern = sortedPatterns[1][0]
        
        // Calculate readiness level (always positive - 78-92%)
        const baseReadiness = 78
        const readinessBonus = Math.min(14, answers.length * 0.6)
        const readinessLevel = Math.round(baseReadiness + readinessBonus)
        
        // Calculate emotional blueprint score (visualization purposes)
        const emotionalBlueprintScore = Math.round((totalScore / (answers.length * 20)) * 100)
        
        set({
          emotionalBlueprintScore,
          primaryPattern,
          secondaryPattern,
          readinessLevel,
        })
      },
      
      resetFunnel: () => set({
        currentStep: 0,
        profile: initialProfile,
        answers: [],
        emotionalBlueprintScore: 0,
        primaryPattern: '',
        secondaryPattern: '',
        readinessLevel: 0,
      }),
    }),
    {
      name: 'memento-funnel-storage',
    }
  )
)

