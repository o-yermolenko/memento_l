'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  age: number;
  rating?: number;
}

export function TestimonialCard({ quote, author, age, rating = 5 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur-sm border border-[var(--border-light)] rounded-2xl p-4 shadow-sm"
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[var(--accent-gold)] text-[var(--accent-gold)]" />
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-sm text-[var(--text-secondary)] italic mb-2">
        &ldquo;{quote}&rdquo;
      </p>
      
      {/* Author */}
      <p className="text-xs text-[var(--text-muted)]">
        — {author}, {age}
      </p>
    </motion.div>
  );
}

