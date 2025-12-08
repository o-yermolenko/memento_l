'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface GenderCardProps {
  gender: 'male' | 'female';
  onClick: () => void;
}

export function GenderCard({ gender, onClick }: GenderCardProps) {
  const isMale = gender === 'male';
  
  return (
    <motion.button
      onClick={onClick}
      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer bg-[var(--bg-secondary)]"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {/* Placeholder for professional portrait - using gradient background */}
      <div 
        className={`absolute inset-0 ${
          isMale 
            ? 'bg-gradient-to-br from-[#F5E6DC] via-[#E8D5C4] to-[#D4C4B0]' 
            : 'bg-gradient-to-br from-[#FCE8E6] via-[#F5D6D3] to-[#E8C4C0]'
        }`}
      >
        {/* Silhouette placeholder */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <svg 
            viewBox="0 0 100 150" 
            className={`w-3/4 h-3/4 ${isMale ? 'text-[#A08060]' : 'text-[#C09080]'}`}
            fill="currentColor"
          >
            {isMale ? (
              <>
                <circle cx="50" cy="30" r="20" />
                <path d="M25 60 Q50 50 75 60 L80 120 Q50 130 20 120 Z" />
              </>
            ) : (
              <>
                <circle cx="50" cy="28" r="18" />
                <ellipse cx="50" cy="20" rx="25" ry="8" />
                <path d="M28 55 Q50 45 72 55 L78 125 Q50 135 22 125 Z" />
              </>
            )}
          </svg>
        </div>
      </div>
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
        <span className="text-white font-semibold text-lg">
          {isMale ? 'Male' : 'Female'}
        </span>
        
        {/* Arrow button */}
        <motion.div
          className="w-10 h-10 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </div>
      
      {/* Hover border effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--accent-primary)] transition-colors duration-300" />
    </motion.button>
  );
}

