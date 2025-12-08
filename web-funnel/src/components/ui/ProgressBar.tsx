'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  showLabel?: boolean;
  label?: string;
  className?: string;
}

export function ProgressBar({ progress, showLabel = false, label, className = '' }: ProgressBarProps) {
  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm font-medium text-[var(--text-secondary)]">{label}</span>}
          <span className="text-sm font-medium text-[var(--text-muted)]">{progress}%</span>
        </div>
      )}
      <div className="progress-bar">
        <motion.div
          className="progress-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

