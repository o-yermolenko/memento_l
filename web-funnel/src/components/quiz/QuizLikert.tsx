'use client';

import { motion } from 'framer-motion';
import { QuizOption } from '@/data/quiz-data';

interface QuizLikertProps {
  question: string;
  subtitle?: string;
  options: QuizOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
}

export function QuizLikert({
  question,
  subtitle,
  options,
  selectedValue,
  onSelect,
}: QuizLikertProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Question (Statement format) */}
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

      {/* Likert Scale Options */}
      <div className="space-y-3 mt-8">
        {options.map((option, index) => {
          const isSelected = selectedValue === option.id;

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
              {/* Icon indicator */}
              {option.icon && (
                <span
                  className={`flex-shrink-0 text-lg font-bold ${
                    isSelected
                      ? 'text-[var(--accent-primary)]'
                      : 'text-[var(--text-muted)]'
                  }`}
                >
                  {option.icon}
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

              {/* Radio indicator */}
              <span
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  isSelected
                    ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]'
                    : 'border-[var(--text-muted)]'
                }`}
              >
                {isSelected && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 rounded-full bg-white"
                  />
                )}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

