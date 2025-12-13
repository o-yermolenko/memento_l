'use client'

import { useState, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface UseSelectionFeedbackOptions {
  /** Delay before navigation in milliseconds (default: 350ms) */
  delay?: number
  /** Callback to run immediately on selection (before delay) */
  onSelect?: (value: string) => void
  /** Route to navigate to after delay */
  nextRoute: string
}

interface UseSelectionFeedbackReturn {
  /** Currently selected value (for visual feedback) */
  selectedValue: string | null
  /** Whether navigation is in progress */
  isNavigating: boolean
  /** Handler to call when an option is selected */
  handleSelect: (value: string, score?: number) => void
}

/**
 * Hook that provides selection feedback with a visible delay before navigation.
 * This ensures users can see their selection before the screen changes.
 */
export function useSelectionFeedback({
  delay = 350,
  onSelect,
  nextRoute,
}: UseSelectionFeedbackOptions): UseSelectionFeedbackReturn {
  const router = useRouter()
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const [isNavigating, setIsNavigating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleSelect = useCallback(
    (value: string, score?: number) => {
      // Prevent double-taps during navigation
      if (isNavigating || selectedValue !== null) return

      // Show selection immediately
      setSelectedValue(value)
      setIsNavigating(true)

      // Call the onSelect callback immediately (for saving data, etc.)
      onSelect?.(value)

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // Navigate after delay
      timeoutRef.current = setTimeout(() => {
        router.push(nextRoute)
      }, delay)
    },
    [isNavigating, selectedValue, onSelect, delay, router, nextRoute]
  )

  return {
    selectedValue,
    isNavigating,
    handleSelect,
  }
}

/**
 * Hook for multi-select questions that don't auto-advance
 */
export function useMultiSelectFeedback() {
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toggleValue = useCallback((value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }, [])

  const reset = useCallback(() => {
    setSelectedValues([])
    setIsSubmitting(false)
  }, [])

  return {
    selectedValues,
    isSubmitting,
    setIsSubmitting,
    toggleValue,
    reset,
  }
}

