'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { QuizOption } from '@/data/quiz-data';
import { Button } from '@/components/ui/Button';

interface QuizMultiSelectProps {
  question: string;
  subtitle?: string;
  options: QuizOption[];
  selectedValues: string[];
  onSelect: (values: string[]) => void;
  onContinue: () => void;
}

export function QuizMultiSelect({
  question,
  subtitle,
  options,
  selectedValues,
  onSelect,
  onContinue,
}: QuizMultiSelectProps) {
  const toggleOption = (optionId: string) => {
    if (selectedValues.includes(optionId)) {
      onSelect(selectedValues.filter((v) => v !== optionId));
    } else {
      onSelect([...selectedValues, optionId]);
    }
  };

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

      {/* Options Grid */}
      <div className="grid grid-cols-2 gap-3 mt-8">
        {options.map((option, index) => {
          const isSelected = selectedValues.includes(option.id);

          return (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              onClick={() => toggleOption(option.id)}
              className={`relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                isSelected
                  ? 'border-[var(--accent-primary)] bg-[var(--accent-subtle)]'
                  : 'border-[var(--border-light)] bg-white hover:border-[var(--accent-light)] hover:shadow-sm'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Icon */}
              {option.icon && (
                <span className="text-2xl">{option.icon}</span>
              )}

              {/* Label */}
              <span
                className={`text-sm font-medium text-center ${
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
                  className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[var(--accent-primary)] flex items-center justify-center"
                >
                  <Check className="w-3 h-3 text-white" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Continue Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8"
      >
        <Button
          onClick={onContinue}
          disabled={selectedValues.length === 0}
          fullWidth
        >
          Continue
        </Button>
      </motion.div>
    </div>
  );
}

