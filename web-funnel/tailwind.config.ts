import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Memento Brand Colors - Updated Palette
        primary: {
          DEFAULT: '#D94F30',    // Warm Vermillion
          dark: '#B8432A',       // Darker for hover
          light: '#E56B4F',      // Lighter accent
        },
        accent: {
          gold: '#E8A849',       // Warm gold
          green: '#D94F30',      // Now uses primary orange
        },
        background: {
          primary: '#FAF7F2',    // Warm Cream
          secondary: '#F3EDE5',  // Slightly darker cream
          card: '#FFFFFF',       // Pure white
        },
        divider: '#E8E0D5',
        border: {
          DEFAULT: '#E5DDD2',
          input: '#DDD5CA',
        },
        text: {
          primary: '#1F1A17',    // Deep Brown-Black
          secondary: '#6B6360',  // Warm Gray
          tertiary: '#8A8582',   // Lighter warm gray
        },
        status: {
          success: '#4A9B6E',
          warning: '#E8A849',
          error: '#D94F30',
        },
      },
      fontFamily: {
        // Inter for everything (like Liven)
        display: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'pill': '999px',
        'card': '16px',
        'option': '12px',
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0,0,0,0.08)',
        'option': '0 1px 4px rgba(0,0,0,0.05)',
        'option-hover': '0 4px 16px rgba(0,0,0,0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-soft': 'pulseSoft 2s infinite',
        'progress': 'progress 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

