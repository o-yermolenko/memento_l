'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface QuizEmailProps {
  title: string;
  message: string;
  onSubmit: (email: string) => void;
}

export function QuizEmail({ title, message, onSubmit }: QuizEmailProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    onSubmit(email);
  };

  return (
    <div className="w-full max-w-lg mx-auto text-center">
      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-16 h-16 rounded-full bg-[var(--accent-subtle)] flex items-center justify-center mx-auto mb-6"
      >
        <Mail className="w-8 h-8 text-[var(--accent-primary)]" />
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
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError('');
            }}
            placeholder="Enter your email"
            className={`w-full ${error ? 'border-[var(--error)]' : ''}`}
          />
          {error && (
            <p className="text-sm text-[var(--error)] mt-1 text-left">{error}</p>
          )}
        </div>

        <Button type="submit" fullWidth size="lg">
          See My Results
        </Button>
      </motion.form>

      {/* Privacy Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-center gap-2 mt-6 text-sm text-[var(--text-muted)]"
      >
        <Lock className="w-4 h-4" />
        <span>We respect your privacy and protect your personal data.</span>
      </motion.div>
    </div>
  );
}

