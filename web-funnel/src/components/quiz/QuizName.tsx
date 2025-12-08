'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface QuizNameProps {
  title: string;
  message: string;
  onSubmit: (name: string) => void;
}

export function QuizName({ title, message, onSubmit }: QuizNameProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name.trim() || 'Friend');
  };

  return (
    <div className="w-full max-w-lg mx-auto text-center">
      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-16 h-16 rounded-full bg-[var(--accent-subtle)] flex items-center justify-center mx-auto mb-6"
      >
        <User className="w-8 h-8 text-[var(--accent-primary)]" />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2"
      >
        {title}
      </motion.h2>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-base text-[var(--text-secondary)] mb-8"
      >
        {message}
      </motion.p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your first name"
          className="w-full"
        />

        <Button type="submit" fullWidth size="lg">
          Continue
        </Button>
      </motion.form>

      {/* Skip option */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        onClick={() => onSubmit('Friend')}
        className="mt-4 text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
      >
        Skip for now
      </motion.button>
    </div>
  );
}

