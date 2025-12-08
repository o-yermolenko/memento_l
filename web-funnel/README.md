# Memento Web Funnel

A conversion-optimized quiz funnel for Memento, the personalized emotional wellness app. Built following the proven Liven funnel model, adapted with Memento's unique brand and messaging.

## 🎯 Overview

**Product:** Memento - Personalized Emotional Wellness App  
**Funnel Type:** Quiz-based lead generation & conversion  
**Advertised Duration:** 3-minute assessment  
**Total Screens:** 37  
**Quiz Questions:** 22  

### Key Features

- 🎨 **Memento Brand Colors:** Warm orange (#E07A4F) on cream (#F6F4F0)
- 📱 **Mobile-First Design:** Optimized for mobile conversion
- 🧠 **Emotional Wellness Focus:** Questions tailored to emotional patterns
- 🤖 **AI Companion Positioning:** "Your Inner Ally" branding
- ⚡ **Smooth Animations:** Framer Motion for premium feel
- 💾 **Persistent State:** Zustand with localStorage persistence

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd web-funnel
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the funnel.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
web-funnel/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & Tailwind config
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Main funnel page
│   ├── components/
│   │   ├── Header.tsx       # Navigation header with progress
│   │   └── screens/         # All funnel screens
│   │       ├── GenderScreen.tsx
│   │       ├── AgeScreen.tsx
│   │       ├── SocialProofScreen.tsx
│   │       ├── QuestionScreen.tsx
│   │       ├── InterstitialScreen.tsx
│   │       ├── EmailCaptureScreen.tsx
│   │       ├── EmailOptinScreen.tsx
│   │       ├── NameCaptureScreen.tsx
│   │       ├── LoadingScreen.tsx
│   │       ├── ResultsSummaryScreen.tsx
│   │       ├── TransformationScreen.tsx
│   │       ├── PlanReadyScreen.tsx
│   │       └── PaywallScreen.tsx
│   ├── data/
│   │   └── questions.ts     # Quiz questions & funnel flow
│   └── store/
│       └── funnelStore.ts   # Zustand state management
├── public/                  # Static assets (add images here)
├── tailwind.config.ts       # Tailwind with Memento colors
└── package.json
```

## 🎨 Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#E07A4F` | Primary brand orange |
| `primary-dark` | `#C46A42` | Hover states |
| `primary-light` | `#F08B60` | Light accents |
| `accent-gold` | `#F5B95F` | Highlights, badges |
| `accent-green` | `#429E71` | Success states |
| `background-primary` | `#F6F4F0` | Main background (cream) |
| `background-secondary` | `#EEE9DE` | Secondary background |
| `text-primary` | `#1A1A1A` | Main text |
| `text-secondary` | `#403E4D` | Secondary text |
| `text-tertiary` | `#6B6B6B` | Muted text |

### Typography

- **Headlines:** Libre Baskerville (serif) for emotional headlines
- **Body:** Source Sans 3 (sans-serif) for readability
- **Font Weights:** 400 (body), 500 (medium), 600 (semibold), 700 (bold)

## 📊 Funnel Flow

### Entry Phase (Screens 0-2)
1. Gender Selection
2. Age Selection  
3. Social Proof ("2,500,000+ people")

### Quiz Phase (Screens 3-27)

**Section 1: Current Emotional State (Q1-8)**
- Emotional intensity
- Exhaustion from emotions
- Overwhelm frequency
- Mood swings
- Reactivity
- Stress levels
- Sleep impact
- Inner stability

**Interstitial 1: Progress stat (87% success rate)**

**Section 2: Self-Understanding (Q9-14)**
- Self-criticism
- Emotion expression
- Overthinking
- Compliment acceptance
- Relationship analysis
- People-pleasing

**Interstitial 2: Science credibility**

**Section 3: Goals & Readiness (Q15-21)**
- Last calm moment
- Emotional concerns (multi-select)
- Morning routine
- Previous attempts
- Struggle triggers
- Improvement goals
- Action priorities

**Interstitial 3: Expert review**

**Commitment: Daily time question**

**Interstitial 4: Social proof reinforcement**

### Lead Capture (Screens 29-31)
1. Email Capture
2. Email Opt-in
3. Name Personalization

### Results Phase (Screens 32-35)
1. Loading Animation (5-7 seconds)
2. Emotional Blueprint Summary
3. Transformation Timeline
4. Plan Ready Preview

### Conversion (Screen 36)
- Paywall with 3 pricing tiers
- Countdown timer (urgency)
- Testimonials
- FAQ accordion
- Money-back guarantee

## 🧠 Psychology Tactics

### Implemented

- ✅ **Commitment & Consistency:** Progressive micro-commitments
- ✅ **Social Proof:** "2,500,000+ people" at multiple touchpoints
- ✅ **Authority:** Science-based credibility, expert review mention
- ✅ **Personalization Theater:** Name usage, "your" plan language
- ✅ **Progress Indicators:** X/22 counter, progress bar
- ✅ **Pattern Interrupts:** 4 interstitials break question fatigue
- ✅ **Urgency:** Countdown timer on paywall
- ✅ **Risk Reversal:** 14-day money-back guarantee
- ✅ **Before/After Visualization:** Transformation comparison
- ✅ **Readiness Score:** Gamification element (85%)
- ✅ **Loading Anticipation:** Multi-step "analyzing" animation

## 🔧 Customization

### Adding Questions

Edit `src/data/questions.ts`:

```typescript
{
  id: 'new_question',
  type: 'single',
  model: 'newQuestion',
  question: 'Your question here?',
  options: [
    { id: 'option1', label: 'Option 1', value: 'option1', icon: 'check', score: 16 },
    { id: 'option2', label: 'Option 2', value: 'option2', icon: 'question', score: 12 },
    { id: 'option3', label: 'Option 3', value: 'option3', icon: 'skip', score: 6 },
  ],
}
```

### Modifying Funnel Flow

Edit `funnelFlow` array in `src/data/questions.ts`:

```typescript
export const funnelFlow: ScreenConfig[] = [
  { type: 'gender' },
  { type: 'age' },
  { type: 'social_proof' },
  { type: 'question', questionIndex: 0 },
  // Add more screens...
]
```

### Updating Colors

Edit `tailwind.config.ts` or CSS variables in `globals.css`.

## 📱 Production Checklist

- [ ] Replace placeholder avatar images with real photography
- [ ] Add proper analytics tracking (GA4, Meta Pixel, etc.)
- [ ] Integrate payment processor (Stripe, etc.)
- [ ] Set up email capture backend
- [ ] Add error boundary for graceful error handling
- [ ] Implement A/B testing infrastructure
- [ ] Add Terms, Privacy Policy pages
- [ ] Mobile app deep linking
- [ ] Performance optimization (image lazy loading)
- [ ] CDN setup for assets

## 📈 Expected Metrics

Based on similar funnels:

| Metric | Target |
|--------|--------|
| Landing → Quiz Start | 75%+ |
| Quiz Completion Rate | 55%+ |
| Email Capture Rate | 85%+ |
| Paywall → Purchase | 4%+ |
| Overall Conversion | 1.5%+ |

## 🤝 Related Docs

- `/products-research/MEMENTO_NEW_PRODUCT_BRIEF.md` - Full product brief
- `/reference/funnel-research/LIVEN_FUNNEL_DETAILED_SPEC.md` - Liven funnel reference
- `/reference/UNIVERSAL_FUNNEL_PLAYBOOK.md` - Funnel best practices

---

Built with ❤️ for Memento
