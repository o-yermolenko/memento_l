'use client';

import { motion } from 'framer-motion';

export function SocialProofAvatars() {
  const avatarColors = [
    'from-[var(--accent-primary)] to-[var(--accent-light)]',
    'from-[var(--success)] to-emerald-400',
    'from-amber-400 to-orange-400',
    'from-rose-400 to-pink-400',
    'from-violet-400 to-purple-400',
  ];

  const initials = ['S', 'M', 'E', 'J', 'A'];

  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2">
        {avatarColors.map((gradient, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-semibold border-2 border-[var(--bg-primary)]`}
          >
            {initials[index]}
          </motion.div>
        ))}
      </div>
      <span className="text-sm text-[var(--text-secondary)]">
        <span className="font-semibold text-[var(--accent-primary)]">2,500+</span> took this quiz today
      </span>
    </div>
  );
}

