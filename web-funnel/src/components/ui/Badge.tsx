'use client';

import { Clock, Users } from 'lucide-react';

interface BadgeProps {
  variant?: 'accent' | 'success' | 'live';
  children: React.ReactNode;
  icon?: 'clock' | 'users' | 'none';
  className?: string;
}

export function Badge({ variant = 'accent', children, icon = 'none', className = '' }: BadgeProps) {
  const baseClasses = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider';
  
  const variantClasses = {
    accent: 'bg-[var(--accent-subtle)] text-[var(--accent-primary)] border border-[rgba(224,122,79,0.25)]',
    success: 'bg-[var(--success-subtle)] text-[var(--success)]',
    live: 'bg-white/90 backdrop-blur-sm text-[var(--text-secondary)] border border-[var(--border-light)]',
  };

  const IconComponent = icon === 'clock' ? Clock : icon === 'users' ? Users : null;

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {IconComponent && <IconComponent className="w-3.5 h-3.5" />}
      {variant === 'live' && icon === 'none' && (
        <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse-soft" />
      )}
      {children}
    </span>
  );
}

