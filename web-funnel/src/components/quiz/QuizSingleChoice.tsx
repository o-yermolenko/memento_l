'use client';

import { motion } from 'framer-motion';
import { Check, HelpCircle, X } from 'lucide-react';
import { QuizOption } from '@/data/quiz-data';

interface QuizSingleChoiceProps {
  question: string;
  subtitle?: string;
  options: QuizOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
  autoAdvance?: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  '✓': <Check className="w-4 h-4" />,
  '?': <HelpCircle className="w-4 h-4" />,
  '✗': <X className="w-4 h-4" />,
};

export function QuizSingleChoice({
  question,
  subtitle,
  options,
  selectedValue,
  onSelect,
}: QuizSingleChoiceProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Question */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl md:text-2xl font-bold text-[var(--text-primary)] text-center mb-2"
      >
        {question}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm text-[var(--text-muted)] text-center mb-6"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Options */}
      <div className="space-y-3 mt-8">
        {options.map((option, index) => {
          const isSelected = selectedValue === option.id;
          const icon = option.icon ? iconMap[option.icon] || option.icon : null;

          return (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              onClick={() => onSelect(option.id)}
              className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                isSelected
                  ? 'border-[var(--accent-primary)] bg-[var(--accent-subtle)]'
                  : 'border-[var(--border-light)] bg-white hover:border-[var(--accent-light)] hover:shadow-sm'
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {/* Icon */}
              {icon && (
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    isSelected
                      ? 'bg-[var(--accent-primary)] text-white'
                      : 'bg-[var(--bg-secondary)] text-[var(--text-muted)]'
                  }`}
                >
                  {icon}
                </span>
              )}

              {/* Label */}
              <span
                className={`flex-1 font-medium ${
                  isSelected ? 'text-[var(--accent-dark)]' : 'text-[var(--text-primary)]'
                }`}
              >
                {option.label}
              </span>

              {/* Selection indicator */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-5 h-5 rounded-full bg-[var(--accent-primary)] flex items-center justify-center"
                >
                  <Check className="w-3 h-3 text-white" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

