'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ScreenTransitionProps {
  children: React.ReactNode
  screenKey: string
  className?: string
}

// Optimized spring config for smooth but quick transitions
const springTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
  mass: 1,
}

// Screen transition variants - slide and fade
const screenVariants = {
  initial: {
    opacity: 0,
    x: 30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: springTransition,
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: {
      duration: 0.15,
      ease: 'easeIn',
    },
  },
}

export function ScreenTransition({ children, screenKey, className = '' }: ScreenTransitionProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={screenKey}
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

// Higher-order component for wrapping screens
export function withScreenTransition<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  getKey: (props: P) => string
) {
  return function WithScreenTransition(props: P) {
    return (
      <ScreenTransition screenKey={getKey(props)}>
        <WrappedComponent {...props} />
      </ScreenTransition>
    )
  }
}

