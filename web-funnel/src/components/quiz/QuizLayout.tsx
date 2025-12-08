'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { ReactNode } from 'react';
import { Logo } from '@/components/ui/Logo';
import { ProgressBar } from '@/components/ui/ProgressBar';

interface QuizLayoutProps {
  children: ReactNode;
  step: number;
  totalSteps: number;
  progress: number;
  onBack?: () => void;
  showProgress?: boolean;
  showBackButton?: boolean;
}

export function QuizLayout({
  children,
  step,
  totalSteps,
  progress,
  onBack,
  showProgress = true,
  showBackButton = true,
}: QuizLayoutProps) {
  return (
    <div className="quiz-container bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        {/* Back Button */}
        {showBackButton && onBack ? (
          <motion.button
            onClick={onBack}
            className="flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </motion.button>
        ) : (
          <div className="w-16" />
        )}

        {/* Logo */}
        <Logo />

        {/* Step Counter */}
        {showProgress && (
          <span className="text-sm font-medium text-[var(--text-muted)]">
            {step}/{totalSteps}
          </span>
        )}
      </header>

      {/* Progress Bar */}
      {showProgress && (
        <div className="px-4">
          <ProgressBar progress={progress} />
        </div>
      )}

      {/* Content */}
      <main className="quiz-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

