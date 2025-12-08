'use client';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Memento Logo - Simple Text with Accent */}
      <span className="text-2xl font-bold tracking-tight">
        <span className="gradient-text">Memento</span>
      </span>
    </div>
  );
}

