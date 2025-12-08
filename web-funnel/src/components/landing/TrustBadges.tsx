'use client';

import { Check, Lock, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function TrustBadges() {
  const badges = [
    { icon: Check, label: '100% Free', color: 'var(--success)' },
    { icon: Lock, label: 'Private & Secure', color: 'var(--text-muted)' },
    { icon: Clock, label: '3 min', color: 'var(--text-muted)' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="flex items-center justify-center gap-4 md:gap-6 flex-wrap"
    >
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
          <badge.icon className="w-3.5 h-3.5" style={{ color: badge.color }} />
          <span>{badge.label}</span>
        </div>
      ))}
    </motion.div>
  );
}

