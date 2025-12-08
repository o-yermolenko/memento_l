'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

interface QuizInterstitialProps {
  title: string;
  message: string;
  icon?: string;
  stats?: { label: string; value: string }[];
  onContinue: () => void;
}

export function QuizInterstitial({
  title,
  message,
  icon,
  stats,
  onContinue,
}: QuizInterstitialProps) {
  return (
    <div className="w-full max-w-lg mx-auto text-center py-8">
      {/* Icon */}
      {icon && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="text-6xl mb-6"
        >
          {icon}
        </motion.div>
      )}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4"
      >
        {title}
      </motion.h2>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-base md:text-lg text-[var(--text-secondary)] mb-8 max-w-sm mx-auto"
      >
        {message}
      </motion.p>

      {/* Stats if provided */}
      {stats && stats.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-8 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Continue Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button onClick={onContinue} size="lg">
          Continue
        </Button>
      </motion.div>
    </div>
  );
}

