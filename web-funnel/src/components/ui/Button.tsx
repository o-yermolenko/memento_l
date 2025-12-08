'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-primary)] disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-light)] text-white shadow-md hover:shadow-lg hover:shadow-[var(--accent-primary)]/25',
    secondary: 'bg-transparent text-[var(--accent-primary)] border-2 border-[var(--accent-primary)] hover:bg-[var(--accent-subtle)]',
    ghost: 'bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base uppercase tracking-wider',
    lg: 'px-8 py-4 text-lg uppercase tracking-wider',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      whileHover={!disabled ? { scale: 1.02, y: -2 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.button>
  );
}

