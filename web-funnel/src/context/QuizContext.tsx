'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

interface QuizState {
  currentStep: number;
  gender: 'male' | 'female' | null;
  answers: Record<string, string | string[]>;
  email: string;
  name: string;
  startTime: number;
  completedAt: number | null;
}

type QuizAction =
  | { type: 'SET_GENDER'; payload: 'male' | 'female' }
  | { type: 'SET_ANSWER'; payload: { questionId: string; value: string | string[] } }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_NAME'; payload: string }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'GO_TO_STEP'; payload: number }
  | { type: 'COMPLETE_QUIZ' }
  | { type: 'RESET' }
  | { type: 'HYDRATE'; payload: QuizState };

const initialState: QuizState = {
  currentStep: 0,
  gender: null,
  answers: {},
  email: '',
  name: '',
  startTime: Date.now(),
  completedAt: null,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'SET_GENDER':
      return { ...state, gender: action.payload };
    case 'SET_ANSWER':
      return {
        ...state,
        answers: { ...state.answers, [action.payload.questionId]: action.payload.value },
      };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'NEXT_STEP':
      return { ...state, currentStep: state.currentStep + 1 };
    case 'PREV_STEP':
      return { ...state, currentStep: Math.max(0, state.currentStep - 1) };
    case 'GO_TO_STEP':
      return { ...state, currentStep: action.payload };
    case 'COMPLETE_QUIZ':
      return { ...state, completedAt: Date.now() };
    case 'RESET':
      return { ...initialState, startTime: Date.now() };
    case 'HYDRATE':
      return action.payload;
    default:
      return state;
  }
}

interface QuizContextType {
  state: QuizState;
  setGender: (gender: 'male' | 'female') => void;
  setAnswer: (questionId: string, value: string | string[]) => void;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  completeQuiz: () => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  // Hydrate from session storage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('memento_quiz_state');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          dispatch({ type: 'HYDRATE', payload: parsed });
        } catch {
          // Invalid saved state, ignore
        }
      }
    }
  }, []);

  // Persist to session storage on every change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('memento_quiz_state', JSON.stringify(state));
    }
  }, [state]);

  const value: QuizContextType = {
    state,
    setGender: (gender) => dispatch({ type: 'SET_GENDER', payload: gender }),
    setAnswer: (questionId, value) => dispatch({ type: 'SET_ANSWER', payload: { questionId, value } }),
    setEmail: (email) => dispatch({ type: 'SET_EMAIL', payload: email }),
    setName: (name) => dispatch({ type: 'SET_NAME', payload: name }),
    nextStep: () => dispatch({ type: 'NEXT_STEP' }),
    prevStep: () => dispatch({ type: 'PREV_STEP' }),
    goToStep: (step) => dispatch({ type: 'GO_TO_STEP', payload: step }),
    completeQuiz: () => dispatch({ type: 'COMPLETE_QUIZ' }),
    resetQuiz: () => dispatch({ type: 'RESET' }),
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}

