# Universal High-Converting Funnel Design System

> A comprehensive design system for building beautiful, conversion-optimized quiz funnels.
> Adaptable to any brand colors while maintaining proven UX patterns.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Funnel Structure Overview](#funnel-structure-overview)
3. [Color System Architecture](#color-system-architecture)
4. [Typography System](#typography-system)
5. [Spacing & Layout](#spacing--layout)
6. [Screen-by-Screen Guide](#screen-by-screen-guide)
7. [Component Library](#component-library)
8. [Animation & Motion](#animation--motion)
9. [Conversion Psychology Patterns](#conversion-psychology-patterns)
10. [Photography & Imagery](#photography--imagery)
11. [Mobile-First Principles](#mobile-first-principles)
12. [Technical Implementation](#technical-implementation)
13. [Implementation Checklist](#implementation-checklist)

---

## Design Philosophy

### Core Principles

1. **Aspirational, Not Symptomatic**
   - Show users who they'll BECOME, not how they feel now
   - Imagery should be hopeful, bright, confident
   - Copy focuses on outcomes and transformation

2. **Warm Over Clinical**
   - Use warm color temperatures (oranges, corals, creams)
   - Avoid cold blues/grays for primary actions
   - Create emotional connection, not sterile efficiency

3. **Confidence Through Simplicity**
   - One clear action per screen
   - Remove cognitive load wherever possible
   - White space is a feature, not waste

4. **Trust Through Transparency**
   - Show real numbers (even if small)
   - Explain time commitments upfront
   - Make "back" navigation always available

5. **Progress Creates Commitment**
   - Always show progress indicators
   - Celebrate micro-completions
   - Create sunk-cost psychology ethically

---

## Funnel Structure Overview

### The Complete Funnel Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         QUIZ FUNNEL ARCHITECTURE                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  1. LANDING PAGE                                                         │
│     └── Gender/Entry Selection → First commitment                        │
│                                                                          │
│  2. DEMOGRAPHIC QUESTIONS (2-3 screens)                                  │
│     ├── Age Selection                                                    │
│     └── Basic Context (optional)                                         │
│                                                                          │
│  3. SOCIAL PROOF INTERSTITIAL                                           │
│     └── "Join 2,500,000+ people" → Builds confidence                    │
│                                                                          │
│  4. QUIZ QUESTIONS (15-25 screens)                                       │
│     ├── Single-choice questions (auto-advance)                          │
│     ├── Multi-select questions (manual continue)                        │
│     ├── Slider questions (optional)                                      │
│     └── Pattern interrupts every 3-5 questions                          │
│                                                                          │
│  5. INTERSTITIALS (3-4 throughout quiz)                                  │
│     ├── Motivational messages                                            │
│     ├── Progress celebrations                                            │
│     ├── Authority/science mentions                                       │
│     └── Social proof reminders                                           │
│                                                                          │
│  6. EMAIL CAPTURE                                                        │
│     └── "Get your personalized results"                                  │
│                                                                          │
│  7. LOADING/PROCESSING SCREEN                                            │
│     └── "Creating your personalized plan..." (15-30 seconds)            │
│                                                                          │
│  8. RESULTS/PROFILE SCREEN                                               │
│     └── Personalized insights and profile summary                        │
│                                                                          │
│  9. TRANSFORMATION PREVIEW                                               │
│     └── Before/After visualization                                       │
│                                                                          │
│  10. PAYWALL                                                             │
│      ├── Pricing options                                                 │
│      ├── Testimonials                                                    │
│      ├── Guarantee                                                       │
│      └── Countdown timer (optional)                                      │
│                                                                          │
│  11. SUCCESS/THANK YOU                                                   │
│      └── Confirmation + next steps                                       │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Funnel Metrics to Track

```
┌────────────────────────────────────────────────────────────┐
│  STAGE                    │ TARGET RATE   │ BENCHMARK      │
├────────────────────────────────────────────────────────────┤
│  Landing → Quiz Start     │ 60-80%        │ Industry: 50%  │
│  Quiz Start → Complete    │ 50-70%        │ Industry: 40%  │
│  Complete → Email Submit  │ 80-95%        │ Industry: 70%  │
│  Email → Paywall View     │ 95-99%        │ Industry: 90%  │
│  Paywall → Purchase       │ 2-8%          │ Industry: 2-3% │
├────────────────────────────────────────────────────────────┤
│  OVERALL CONVERSION       │ 1-3%          │ Industry: 0.5% │
└────────────────────────────────────────────────────────────┘
```

---

## Color System Architecture

### Building Your Palette

Don't copy specific colors—build a SYSTEM with these roles:

```
┌─────────────────────────────────────────────────────────────┐
│                    COLOR ROLE ARCHITECTURE                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  BACKGROUNDS (3 levels of depth)                            │
│  ├── Deep BG      → Main page background                    │
│  ├── Mid BG       → Cards, elevated surfaces                │
│  └── Light BG     → Subtle differentiation, borders         │
│                                                              │
│  TEXT (3 levels of emphasis)                                │
│  ├── Primary      → Headlines, important content            │
│  ├── Secondary    → Body text, descriptions                 │
│  └── Muted        → Hints, placeholders, legal              │
│                                                              │
│  ACCENT (3-4 related tones)                                 │
│  ├── Primary      → Main brand color                        │
│  ├── Light        → Highlights, hover states                │
│  ├── Dark         → Depth, pressed states                   │
│  └── Subtle       → Backgrounds for badges                  │
│                                                              │
│  FUNCTIONAL                                                  │
│  ├── CTA          → Call-to-action buttons (often = accent) │
│  ├── Success      → Confirmations, positive states          │
│  ├── Urgent       → Timers, limited offers                  │
│  └── Error        → Validation, warnings                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Dark Theme Template

> ⚠️ **EXAMPLE COLORS ONLY** - The orange/coral accent colors below are just examples from one project. Replace the accent spectrum with YOUR brand colors (blue, green, purple, etc.). The background and text colors can stay similar, but accent colors should match your brand.

```css
:root {
  /* Backgrounds - dark to light (these can stay similar) */
  --deep-bg: #0F0F0F;      /* Deepest, main background */
  --mid-bg: #1A1A1A;       /* Cards, elevated surfaces */
  --light-bg: #2A2A2A;     /* Borders, subtle differentiation */
  
  /* Text - high to low emphasis (these can stay similar) */
  --text-primary: #FFFFFF;
  --text-secondary: #B8B8B8;
  --text-muted: #707070;
  
  /* ⬇️ ACCENT SPECTRUM - REPLACE WITH YOUR BRAND COLORS ⬇️ */
  /* Example: Orange brand */
  --accent-primary: #FF6B35;    /* Your brand color */
  --accent-light: #FF9B7A;      /* Lighter variant */
  --accent-dark: #C4572E;       /* Darker variant */
  --accent-subtle: rgba(255, 107, 53, 0.15); /* For backgrounds */
  
  /* Example: Blue brand would be:
  --accent-primary: #3B82F6;
  --accent-light: #60A5FA;
  --accent-dark: #2563EB;
  --accent-subtle: rgba(59, 130, 246, 0.15);
  */
  
  /* Functional (these typically stay the same) */
  --success: #4ADE80;
  --urgent: #FF4757;
  --cta-glow: rgba(255, 107, 53, 0.4); /* Match to your accent-primary */
}
```

### Light Theme Template

> ⚠️ **EXAMPLE COLORS ONLY** - Replace accent colors with your brand. For a blue brand, use blue tones instead of orange.

```css
:root {
  /* Backgrounds - light to dark (these can stay similar) */
  --deep-bg: #FDF8F3;      /* Warm cream, main background */
  --mid-bg: #FFFFFF;       /* Pure white cards */
  --light-bg: #E8E0D8;     /* Warm gray borders */
  
  /* Text - high to low emphasis (these can stay similar) */
  --text-primary: #1A1A1A;
  --text-secondary: #4A4A4A;
  --text-muted: #8A8A8A;
  
  /* ⬇️ ACCENT SPECTRUM - REPLACE WITH YOUR BRAND COLORS ⬇️ */
  /* Example: Orange brand */
  --accent-primary: #FF6B35;
  --accent-light: #FF8555;
  --accent-dark: #E55A2B;
  --accent-subtle: #FFF0E8;
  
  /* Example: Blue brand would be:
  --accent-primary: #3B82F6;
  --accent-light: #60A5FA;
  --accent-dark: #2563EB;
  --accent-subtle: #EFF6FF;
  */
  
  /* Functional (these typically stay the same) */
  --success: #22C55E;
  --urgent: #EF4444;
}
```

### Color Harmony Rules

1. **CTA buttons** should have highest contrast on page
2. **Accent color** appears in: badges, links, highlights, progress bars
3. **Success green** only for: checkmarks, completion states, "online" indicators
4. **Urgent red** only for: countdown timers, limited offers (use sparingly!)
5. **Never** use more than 3 colors in a single component

---

## Typography System

### Font Pairing Strategy

```
DISPLAY FONT (Headlines, CTAs)
├── Sans-serif, bold weight
├── High x-height for readability
├── Examples: DM Sans, Inter, Outfit, Plus Jakarta Sans
└── Usage: Headlines, buttons, badges, navigation

BODY FONT (Content, descriptions)
├── Serif OR readable sans-serif
├── Comfortable for longer reading
├── Examples: Lora, Source Serif, System UI
└── Usage: Paragraphs, descriptions, testimonials
```

### Type Scale

```css
/* Mobile-first type scale */
--text-xs: 0.75rem;    /* 12px - Legal, hints */
--text-sm: 0.875rem;   /* 14px - Secondary content */
--text-base: 1rem;     /* 16px - Body text */
--text-lg: 1.125rem;   /* 18px - Large body */
--text-xl: 1.25rem;    /* 20px - Section headers */
--text-2xl: 1.5rem;    /* 24px - Subheadlines */
--text-3xl: 1.875rem;  /* 30px - Headlines mobile */
--text-4xl: 2.25rem;   /* 36px - Headlines tablet */
--text-5xl: 3rem;      /* 48px - Headlines desktop */
--text-6xl: 3.75rem;   /* 60px - Hero headlines */
```

### Typography Rules

1. **Headlines**: Display font, bold (600-700), tight line-height (1.1-1.2)
2. **Body**: Body font, regular (400), comfortable line-height (1.5-1.65)
3. **Buttons**: Display font, semibold (600), uppercase + letter-spacing
4. **Never** go below 14px on mobile for readable text
5. **Gradient text** only for primary headlines (1 per page max)

---

## Spacing & Layout

### Spacing Scale

```css
/* 4px base unit system */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
```

### Layout Principles

```
┌─────────────────────────────────────────────────────────────┐
│                     MOBILE LAYOUT (375px)                    │
├─────────────────────────────────────────────────────────────┤
│  Padding: 16px horizontal                                    │
│  Max content width: 100%                                     │
│  Stack everything vertically                                 │
│  Touch targets: minimum 44x44px                             │
│  Gap between elements: 12-16px                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    TABLET LAYOUT (768px+)                    │
├─────────────────────────────────────────────────────────────┤
│  Padding: 20-24px horizontal                                 │
│  Max content width: 640px (centered)                         │
│  2-column grids for cards                                    │
│  Gap between elements: 16-24px                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   DESKTOP LAYOUT (1024px+)                   │
├─────────────────────────────────────────────────────────────┤
│  Padding: 24-32px horizontal                                 │
│  Max content width: 720px (centered)                         │
│  Generous white space                                        │
│  Gap between elements: 24-32px                              │
└─────────────────────────────────────────────────────────────┘
```

### Container Rules

1. **Quiz content**: Max 640px wide, centered
2. **Cards**: Full width on mobile, constrained on desktop
3. **Buttons**: Full width on mobile, auto-width on desktop
4. **Vertical rhythm**: Consistent spacing between sections

---

## Screen-by-Screen Guide

### 1. Landing Page

**Purpose**: Create intrigue, build trust, get first micro-commitment

```
┌─────────────────────────────────────────────────────────────┐
│  [🕐 3-MINUTE QUIZ]                      [🟢 142 online]    │
│                                                              │
│                    ● BRAND NAME                              │
│                                                              │
│              Get Your Personal                               │
│           [OUTCOME] Plan                                     │
│                                                              │
│     Subheadline explaining the benefit                       │
│                                                              │
│         [avatars] 2,500+ took this quiz                     │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │  ★★★★★ "Testimonial quote"          │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│              Start Your Journey                              │
│         Select your gender to begin                          │
│                                                              │
│     ┌──────────────┐    ┌──────────────┐                    │
│     │              │    │              │                    │
│     │    MALE      │    │   FEMALE     │                    │
│     │    [→]       │    │    [→]       │                    │
│     └──────────────┘    └──────────────┘                    │
│                                                              │
│     ✓ Free  🔒 Private  🕐 3 min                            │
│                                                              │
│         Terms · Privacy · Subscription                       │
└─────────────────────────────────────────────────────────────┘
```

**Must-Have Elements**:
- Time anchor badge
- Live social proof (online count)
- Outcome-focused headline
- Specific social proof number
- At least 1 testimonial
- Clear CTA with instruction
- Trust badges
- Legal footer

---

### 2. Age Selection Screen

**Purpose**: Easy second commitment, personalization signal

```
┌─────────────────────────────────────────────────────────────┐
│  [←]                                          1/12          │
│                                                              │
│               What's your age?                               │
│                                                              │
│        We use this to personalize your plan                  │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │           18-29                      │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │           30-39                      │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │           40-49                      │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │           50+                        │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Design Notes**:
- Back button always visible
- Progress indicator (X/Y or bar)
- Privacy reassurance under question
- 4-6 age brackets typical
- Auto-advance on selection

---

### 3. Social Proof Interstitial

**Purpose**: Build confidence before deeper questions

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                                                              │
│                    ○ ○ ○ ○ ○                                │
│                   ○       ○                                  │
│                  ○  [YOU]  ○                                 │
│                   ○       ○                                  │
│                    ○ ○ ○ ○ ○                                │
│                                                              │
│              Over 2,500,000 people                          │
│               have chosen [Brand]                            │
│                                                              │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │            CONTINUE                  │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Design Notes**:
- Visual representation of community
- Large, specific number
- Animated avatar arrangement (optional)
- Single CTA to continue

---

### 4. Quiz Question Screens

#### Single Choice (Auto-Advance)

```
┌─────────────────────────────────────────────────────────────┐
│  [←]                                          5/12          │
│  ████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                 │
│                                                              │
│        How often do you feel overwhelmed?                    │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │  ✓  Often                            │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │  ?  Sometimes                        │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │  ✗  Rarely                           │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Behavior**: Auto-advance 300-500ms after selection

#### Multi-Select (Manual Continue)

```
┌─────────────────────────────────────────────────────────────┐
│  [←]                                          7/12          │
│  ██████████████████░░░░░░░░░░░░░░░░░░░░░░░░                 │
│                                                              │
│         What are your main goals?                            │
│           Choose all that apply                              │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │  [✓] Reduce stress                   │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │  [✓] Better sleep                    │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │  [ ] More energy                     │                 │
│     └─────────────────────────────────────┘                 │
│     ┌─────────────────────────────────────┐                 │
│     │  [ ] Improved focus                  │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │            CONTINUE                  │                 │
│     └─────────────────────────────────────┘                 │
└─────────────────────────────────────────────────────────────┘
```

**Behavior**: Require at least 1 selection, show Continue button

#### Slider Question (Optional)

```
┌─────────────────────────────────────────────────────────────┐
│  [←]                                          9/12          │
│  ██████████████████████████░░░░░░░░░░░░░░░░                 │
│                                                              │
│     How satisfied are you with your current                  │
│              daily routine?                                  │
│                                                              │
│     Not at all ○───────────●───────────○ Very               │
│                            6                                 │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │            CONTINUE                  │                 │
│     └─────────────────────────────────────┘                 │
└─────────────────────────────────────────────────────────────┘
```

---

### 5. Motivational Interstitial

**Purpose**: Break fatigue, reinforce value, celebrate progress

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                                                              │
│                       🎯                                     │
│                                                              │
│              You're doing great!                             │
│                                                              │
│       We're building your personalized plan                  │
│          based on your unique responses.                     │
│                                                              │
│                  Almost there...                             │
│                                                              │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │            CONTINUE                  │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Variations**:
- Progress celebration: "Halfway there! 🎉"
- Authority building: "Developed using scientific research"
- Social proof: "Join 2.5M+ people who found clarity"
- Value reminder: "Your personalized plan is being created"

**Placement**: Every 3-5 questions

---

### 6. Email Capture Screen

**Purpose**: Capture lead before showing results

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                        📧                                    │
│                                                              │
│         Enter your email to see your                         │
│        personalized Profile Summary                          │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │  your@email.com                      │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │          SEE MY RESULTS              │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│        🔒 We respect your privacy and                        │
│        protect your personal data.                           │
│                                                              │
│                                                              │
│        [ ] Send me tips and updates                          │
│            (optional - can be unchecked)                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Best Practices**:
- Clear value exchange ("see your results")
- Privacy reassurance
- Optional marketing opt-in (builds trust)
- Large, easy input field
- No skip option (email required)

---

### 7. Loading/Processing Screen

**Purpose**: Build anticipation, justify wait, show "work" being done

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                                                              │
│                     [SPINNER]                                │
│                                                              │
│        Creating your personalized                            │
│           Well-being Plan...                                 │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │  ✓ Analyzing your responses          │                 │
│     │  ✓ Identifying patterns              │                 │
│     │  ● Building recommendations...       │                 │
│     │  ○ Finalizing your plan              │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│         ★★★★★ "This changed my life"                        │
│                — Sarah, 34                                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Design Notes**:
- 15-30 seconds duration (too short feels cheap)
- Progress steps that complete sequentially
- Testimonial rotator during wait
- No skip option
- Builds perceived value

---

### 8. Results/Profile Screen

**Purpose**: Deliver value, create "aha moment", prep for paywall

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│           Your Well-being Profile                            │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │  Your Type: The Overthinker          │                 │
│     │                                       │                 │
│     │  Key Insights:                        │                 │
│     │  • You tend to analyze deeply         │                 │
│     │  • Stress affects your sleep          │                 │
│     │  • You seek clarity and structure     │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │  Your Readiness Score: 83%           │                 │
│     │  ████████████████░░░░                 │                 │
│     │  Result: READY FOR CHANGE            │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │        SEE YOUR FULL PLAN            │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Must-Have Elements**:
- Personalized type/profile name
- 3-5 personalized insights
- Positive score/rating (always favorable)
- Clear CTA to continue
- Feel like valuable deliverable

---

### 9. Transformation Preview

**Purpose**: Visualize the outcome, create desire

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│           Your Transformation Journey                        │
│                                                              │
│     TODAY                           IN 4 WEEKS               │
│     ┌─────────┐                     ┌─────────┐             │
│     │ 😟      │        →           │ 😊      │             │
│     │ Stressed│                     │ Calm    │             │
│     └─────────┘                     └─────────┘             │
│                                                              │
│     Expected improvements:                                   │
│     ┌─────────────────────────────────────┐                 │
│     │  Stress levels     ↓ 45%            │                 │
│     │  Sleep quality     ↑ 72%            │                 │
│     │  Daily energy      ↑ 38%            │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │        GET MY PERSONALIZED PLAN      │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Design Notes**:
- Visual before/after
- Specific improvement percentages
- Timeline expectation
- Aspirational but believable

---

### 10. Paywall Screen

**Purpose**: Convert to paid customer

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│     ⏰ Special offer expires in 09:42                        │
│                                                              │
│        Your Personalized Plan is Ready                       │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │  ⭐ RECOMMENDED                       │                 │
│     │  4-Week Plan                         │                 │
│     │  $19.99 (was $39.99)                │                 │
│     │  ✓ Full personalized program         │                 │
│     │  ✓ Daily guidance                    │                 │
│     │  ✓ Progress tracking                 │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│     ┌───────────────┐ ┌───────────────┐                     │
│     │  1 Week       │ │  12 Weeks     │                     │
│     │  $9.99        │ │  $49.99       │                     │
│     └───────────────┘ └───────────────┘                     │
│                                                              │
│     ★★★★★ "Best investment I've made"                       │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │         START MY PLAN                │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│     🔒 30-Day Money-Back Guarantee                          │
│     Secure payment · Cancel anytime                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Must-Have Elements**:
- Urgency (countdown timer)
- Recommended plan highlighted
- Original price crossed out
- Clear value bullets
- Testimonial
- Strong CTA
- Risk reversal (guarantee)
- Trust signals (secure, cancel)

**Pricing Psychology**:
- 3 tiers: Decoy pricing (middle = best value)
- OR single "recommended for you" plan
- Show savings vs original price

---

### 11. Success/Thank You Screen

**Purpose**: Confirm purchase, set expectations, reduce refunds

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                        ✓                                     │
│                                                              │
│          Welcome to Your Journey!                            │
│                                                              │
│      Your personalized plan is now active.                   │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │  What happens next:                  │                 │
│     │                                       │                 │
│     │  1. Check your email for login       │                 │
│     │  2. Download the app                 │                 │
│     │  3. Start your first session         │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│     ┌─────────────────────────────────────┐                 │
│     │       ACCESS MY PLAN NOW             │                 │
│     └─────────────────────────────────────┘                 │
│                                                              │
│        Questions? support@brand.com                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Must-Have Elements**:
- Clear confirmation
- Next steps (numbered)
- Access CTA
- Support contact
- Excitement/celebration tone

---

## Component Library

### 1. Quiz Badge

```
┌─────────────────────────────────────────┐
│  🕐 3-MINUTE QUIZ                       │
└─────────────────────────────────────────┘

Specs:
- Background: accent-subtle
- Border: 1px accent with 30% opacity
- Text: accent-primary, uppercase, letter-spacing
- Icon: Clock, same color as text
- Border-radius: full (pill shape)
- Padding: 6px 16px
```

### 2. Live Viewer Badge

```
┌─────────────────────────────────────────┐
│  🟢 142 online                          │
└─────────────────────────────────────────┘

Specs:
- Background: card background
- Border: subtle border color
- Dot: success color, pulsing animation
- Position: fixed, top-right
- Text: muted, small
- Number: success color, semibold
```

### 3. Social Proof Avatars

```
     ┌───┬───┬───┬───┬───┐
     │ S │ M │ E │ J │ A │  "2,452+ took this quiz"
     └───┴───┴───┴───┴───┘
     (overlapping circles)

Specs:
- 5 circles, overlapping with negative margin
- Gradient background (accent colors)
- White text initials
- Border matching page background
- Size: 28-32px diameter
- Text: number in accent color, rest in secondary
```

### 4. Testimonial Card

```
┌─────────────────────────────────────────┐
│  ★★★★★                                  │
│  "Quote text here in italics"           │
│  — Author Name, Age                     │
└─────────────────────────────────────────┘

Specs:
- Background: mid-bg with backdrop blur
- Border: subtle, 1px
- Border-radius: 12-16px
- Stars: accent color
- Quote: secondary text, italic
- Author: muted text, small
- Padding: 12-16px
```

### 5. Gender/Selection Cards

```
┌─────────────────────────────────────────┐
│                                         │
│         [ASPIRATIONAL PHOTO]            │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Label                      [→]  │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘

Specs:
- Aspect ratio: 3:4 (portrait)
- Border-radius: 16px
- Photo: covers full card
- Gradient overlay: bottom 40%, dark to transparent
- Label: white, semibold, bottom-left
- Arrow button: accent color circle, bottom-right
- Hover: slight scale (1.02), border color change
```

### 6. Trust Badges Row

```
  ✓ 100% Free    🔒 Private & Secure    🕐 3 min

Specs:
- Horizontal row, centered
- Icon: success color (green)
- Text: muted color
- Gap: 16-24px between items
- Font size: small (12-14px)
```

### 7. CTA Button

```
┌─────────────────────────────────────────┐
│           START MY JOURNEY              │
└─────────────────────────────────────────┘

Specs:
- Background: gradient (accent-primary to accent-light)
- Text: white, uppercase, letter-spacing, semibold
- Border-radius: 12px
- Padding: 16px 32px
- Box-shadow: colored glow (accent with opacity)
- Hover: lift (translateY -2px), increased glow
- Active: return to normal position
```

### 8. Progress Bar

```
Section: About Me
[████████░░░░░░░░░░░░] 40%

Specs:
- Track: light-bg color
- Fill: gradient (accent spectrum)
- Border-radius: 6px
- Height: 6-8px
- Optional: subtle glow on fill
- Label: display font, above bar
```

### 9. Option Card (Quiz Answer)

```
┌─────────────────────────────────────────┐
│  [Icon]  Option text here               │
└─────────────────────────────────────────┘

Specs:
- Background: mid-bg
- Border: 2px transparent (unselected), accent (selected)
- Border-radius: 12-16px
- Padding: 16px 20px
- Hover: border accent, slight lift, subtle glow
- Selected: accent border, accent background tint
- Auto-advance on single select
```

---

## Animation & Motion

### Timing Guidelines

```css
/* Duration scale */
--duration-fast: 150ms;    /* Micro-interactions */
--duration-normal: 250ms;  /* Standard transitions */
--duration-slow: 400ms;    /* Page transitions */
--duration-slower: 600ms;  /* Complex animations */

/* Easing functions */
--ease-out: cubic-bezier(0, 0, 0.2, 1);     /* Entrances */
--ease-in: cubic-bezier(0.4, 0, 1, 1);      /* Exits */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1); /* Movement */
```

### Animation Patterns

#### 1. Page Load Sequence (Staggered)
```
Delay 0ms:    Badge fades in
Delay 50ms:   Logo fades in + slides up
Delay 100ms:  Headline fades in + slides up
Delay 150ms:  Subheadline fades in + slides up
Delay 200ms:  Social proof fades in
Delay 250ms:  Testimonials fade in
Delay 300ms:  CTA/Cards fade in + slide up
Delay 400ms:  Trust badges fade in
```

#### 2. Hover States
- Scale: 1.02-1.05 max
- Lift: translateY(-2px) max
- Duration: 200-300ms
- Always include transition on base state

#### 3. Pulsing Elements
- Live dots: scale 1→1.2→1, opacity 1→0.5→1
- Duration: 1.5-2s
- Infinite loop
- Subtle, not distracting

#### 4. Progress Animations
- Fill bar: ease-out, 500ms
- Celebrate completions with brief glow

### Performance Rules

1. Only animate `transform` and `opacity` (GPU accelerated)
2. Use `will-change` sparingly and only when needed
3. Reduce motion for users who prefer it
4. No animations longer than 1 second
5. Don't animate on scroll (performance killer on mobile)

---

## Conversion Psychology Patterns

### 1. Time Anchoring
```
"3-MINUTE QUIZ" badge at top
- Sets expectation immediately
- Reduces abandonment anxiety
- Creates commitment ("only 3 minutes")
```

### 2. Social Proof Stacking
```
Layer multiple types:
1. User count: "2,500+ took this quiz this week"
2. Live activity: "142 online now"
3. Testimonials: Real quotes with names/ages
4. Authority: "Based on proven frameworks"

Rule: At least 3 forms of social proof on landing page
```

### 3. Progress Commitment
```
Show progress to create sunk-cost psychology:
- "Question 3 of 12"
- Visual progress bar
- Section labels ("About You", "Your Goals")
- Celebrate milestones ("Great! Almost done")
```

### 4. Aspirational Imagery
```
Photos should show the END state, not current state:
✗ Sad, lost, confused person
✓ Calm, confident, hopeful person

Users click toward who they want to become
```

### 5. Micro-Commitments
```
Start with easy, non-threatening questions:
1. Gender (binary choice)
2. Age range (4-6 options)
3. Simple preferences

Build to deeper questions after commitment
```

### 6. Pattern Interrupts
```
Every 3-5 questions, insert an interstitial:
- Motivational message
- Progress celebration
- Social proof reminder
- Value reinforcement

Prevents quiz fatigue
```

### 7. Risk Reversal
```
Address objections before paywall:
- "100% Free" badge
- "Private & Secure"
- "3 minutes"
- Money-back guarantee (on paywall)
```

### 8. Urgency (Use Ethically)
```
Legitimate urgency only:
✓ "Limited consultation spots"
✓ "Discount expires in 10:00"
✗ Fake countdown that resets
✗ Fake scarcity

Urgency should be real or not used at all
```

---

## Photography & Imagery

### Portrait Guidelines for Selection Cards

```
THE ASPIRATIONAL PORTRAIT FORMULA:

Expression:
├── Slight, genuine smile (not forced)
├── Eyes conveying calm confidence
├── Peaceful, grounded demeanor
└── "I've found what I was looking for" energy

Lighting:
├── Bright, warm, natural light
├── Golden hour quality
├── Soft shadows, no harsh contrast
└── Creates optimism and warmth

Eye Contact:
├── Direct gaze at camera
├── Creates personal connection
├── Inviting, not intimidating
└── "I'm here for you" feeling

Styling:
├── Simple, quality clothing
├── Neutral warm tones (cream, beige, coral, terracotta)
├── Colors that complement your accent palette
├── Relatable, not overly polished
└── Natural hair and minimal styling

Background:
├── Soft, blurred (shallow depth of field)
├── Warm neutral tones
├── No distracting elements
└── Focus entirely on the person

Composition:
├── Head and shoulders (portrait crop)
├── Slight 3/4 angle
├── Space at bottom for text overlay
├── Centered or rule-of-thirds
└── Aspect ratio 3:4 for cards
```

### AI Image Generation Prompt Template

```
Professional portrait photo of a [man/woman] in their early 30s 
with a gentle, warm smile expressing quiet confidence and inner peace.

Looking directly at camera with a hopeful, grounded gaze.
Soft, warm natural light, golden hour quality.
Wearing a simple [cream/beige/coral] [shirt/top].
Soft, blurred warm-toned background.
Head and shoulders, portrait orientation, 3:4 aspect ratio.

Mood: Aspirational but attainable - someone who has found clarity.
Style: Professional quality, natural, relatable.
```

### Image Don'ts

- ❌ Dark, moody lighting
- ❌ Looking away or downcast
- ❌ Melancholic or sad expressions
- ❌ Black or dark clothing
- ❌ Busy or distracting backgrounds
- ❌ Over-processed or fake looking
- ❌ Stock photo "corporate smile"
- ❌ Too young or too perfect (unrelateable)

---

## Mobile-First Principles

### Critical Mobile Optimizations

```
1. TOUCH TARGETS
   - Minimum 44x44px for all interactive elements
   - Add padding, not just the element size
   - Space between targets: at least 8px

2. FONT SIZES
   - Body text: minimum 14px
   - Buttons: minimum 16px
   - Legal/fine print: minimum 10px
   - Input fields: minimum 16px (prevents iOS zoom)

3. THUMB ZONES
   - Primary actions in bottom 60% of screen
   - Navigation in easy reach
   - Avoid top corners for important actions

4. CONTENT PRIORITY
   - Most important content visible without scrolling
   - CTA visible on initial load
   - Don't hide critical info on mobile

5. PERFORMANCE
   - Images: WebP format, properly sized
   - Lazy load below-fold images
   - Minimize JavaScript
   - Target <3s load time on 3G

6. GESTURES
   - Support swipe for navigation where appropriate
   - Avoid hover-dependent interactions
   - Tap feedback (subtle scale/opacity)
```

### Responsive Breakpoints

```css
/* Mobile first approach */
/* Base styles: 0-639px (mobile) */

@media (min-width: 640px) {
  /* Tablet: 640px-1023px */
}

@media (min-width: 1024px) {
  /* Desktop: 1024px+ */
}
```

### Mobile Content Adjustments

| Element | Mobile | Desktop |
|---------|--------|---------|
| Headline | 26-30px | 48-60px |
| Subheadline | Hidden or 14px | 18-20px |
| Testimonials | 1, stacked | 2, side-by-side |
| Social proof | Simplified | Full version |
| Padding | 16px | 24-32px |
| Cards gap | 10-12px | 16-24px |

---

## Technical Implementation

### Recommended Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Framework** | Next.js 14+ (App Router) | Server components, file-based routing, built-in optimizations |
| **Language** | TypeScript | Type safety, better developer experience, fewer runtime errors |
| **Styling** | Tailwind CSS 4 | Utility-first CSS, JIT compilation, zero unused CSS |
| **Animations** | Framer Motion | Declarative animations, page transitions, gesture support |
| **Fonts** | next/font (Google Fonts) | Self-hosted, no layout shift, automatic optimization |
| **Images** | next/image | Automatic optimization, lazy loading, responsive sizing |
| **State** | Session Storage + React State | Persistent quiz progress, no backend needed for flow |
| **Analytics** | PostHog + GA4 + Vercel Analytics | Funnel tracking, conversion events, performance |
| **Payments** | Stripe | Checkout sessions, webhooks, subscription management |
| **Database** | Supabase | User storage, email capture, real-time capabilities |

### Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── globals.css               # CSS variables, utilities, base styles
│   ├── layout.tsx                # Root layout with fonts, analytics
│   ├── page.tsx                  # Landing page
│   ├── providers.tsx             # Context providers wrapper
│   ├── journey/
│   │   ├── page.tsx              # Quiz redirect
│   │   └── [step]/
│   │       └── page.tsx          # Dynamic quiz steps
│   ├── subscription/
│   │   └── page.tsx              # Paywall
│   ├── success/
│   │   └── page.tsx              # Thank you page
│   └── api/
│       ├── stripe/               # Payment endpoints
│       └── users/                # User management
├── components/
│   ├── landing/                  # Landing page components
│   │   ├── GenderCard.tsx
│   │   ├── LiveViewerBadge.tsx
│   │   └── TrustBadges.tsx
│   └── quiz/                     # Quiz components
│       ├── QuizLayout.tsx        # Shared quiz wrapper
│       ├── QuizSingleChoice.tsx  # Single-select questions
│       ├── QuizMultiSelect.tsx   # Multi-select questions
│       ├── QuizSlider.tsx        # Slider questions
│       ├── QuizInterstitial.tsx  # Motivational breaks
│       ├── QuizEmail.tsx         # Email capture
│       ├── QuizLoading.tsx       # Processing screen
│       ├── QuizTransformation.tsx # Before/after preview
│       └── QuizPaywall.tsx       # Pricing screen
├── data/
│   └── quiz-data.ts              # Question definitions, flow config
├── hooks/
│   ├── useQuizState.ts           # Quiz progress management
│   └── useAnalytics.ts           # Event tracking abstraction
├── lib/
│   ├── gtag.ts                   # Google Analytics helpers
│   ├── stripe.ts                 # Stripe configuration
│   ├── posthog/                  # PostHog setup
│   ├── meta/                     # Facebook Pixel tracking
│   └── supabase/                 # Database client
└── public/
    └── images/                   # Static assets
```

### Font Loading Strategy

```tsx
// layout.tsx - Self-hosted Google Fonts with next/font
import { DM_Sans, Lora } from "next/font/google";

// Display font - Headlines, buttons, UI elements
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Body font - Paragraphs, descriptions
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

### CSS Architecture

```css
/* globals.css - Design tokens as CSS variables */

@import "tailwindcss";

:root {
  /* Backgrounds */
  --deep-bg: #FDF8F3;
  --mid-bg: #FFFFFF;
  --light-bg: #E8E0D8;
  
  /* Text */
  --text-primary: #1A1A1A;
  --text-secondary: #4A4A4A;
  --text-muted: #8A8A8A;
  
  /* Accent - REPLACE WITH YOUR BRAND COLORS */
  --accent-primary: #FF6B35;
  --accent-light: #FF8555;
  --accent-dark: #E55A2B;
  --accent-subtle: #FFF0E8;
  
  /* Functional */
  --success: #22C55E;
  --urgent: #EF4444;
}

/* Font utilities */
.font-display { font-family: var(--font-dm-sans), system-ui, sans-serif; }
.font-body { font-family: var(--font-lora), Georgia, serif; }

/* Custom utilities */
@layer utilities {
  .gradient-warm {
    @apply bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-light)] 
           bg-clip-text text-transparent;
  }
  
  .glow-accent {
    box-shadow: 0 0 30px rgba(255, 107, 53, 0.3);
  }
}
```

### Framer Motion Patterns

```tsx
// Staggered page load animation
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function LandingPage() {
  return (
    <div>
      {/* Each element with increasing delay */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={pageVariants}
        transition={{ delay: 0.0, duration: 0.4, ease: [0, 0, 0.2, 1] }}
      >
        <QuizBadge />
      </motion.div>
      
      <motion.h1
        initial="initial"
        animate="animate"
        variants={pageVariants}
        transition={{ delay: 0.1 }}
      >
        Headline
      </motion.h1>
      
      <motion.p
        initial="initial"
        animate="animate"
        variants={pageVariants}
        transition={{ delay: 0.15 }}
      >
        Subheadline
      </motion.p>
      
      {/* Cards with stagger */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={pageVariants}
        transition={{ delay: 0.25 }}
      >
        <GenderCards />
      </motion.div>
    </div>
  );
}
```

```tsx
// Hover animation for interactive cards
<motion.button
  whileHover={{ 
    scale: 1.02, 
    y: -2,
    boxShadow: "0 10px 40px rgba(255, 107, 53, 0.2)"
  }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 400, damping: 25 }}
>
  Card Content
</motion.button>
```

```tsx
// Page transition wrapper
import { AnimatePresence, motion } from "framer-motion";

export function QuizLayout({ children, step }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

### Quiz State Management

```tsx
// hooks/useQuizState.ts
interface QuizState {
  currentStep: number;
  answers: Record<string, string | string[]>;
  startTime: number;
  email?: string;
  gender?: 'male' | 'female';
}

export function useQuizState() {
  const [state, setState] = useState<QuizState>(() => {
    // Hydrate from session storage on mount
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('quiz_state');
      if (saved) return JSON.parse(saved);
    }
    return {
      currentStep: 0,
      answers: {},
      startTime: Date.now(),
    };
  });

  // Persist to session storage on every change
  useEffect(() => {
    sessionStorage.setItem('quiz_state', JSON.stringify(state));
  }, [state]);

  const setAnswer = (questionId: string, value: string | string[]) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: value },
    }));
  };

  const nextStep = () => {
    setState(prev => ({ ...prev, currentStep: prev.currentStep + 1 }));
  };

  const prevStep = () => {
    setState(prev => ({ 
      ...prev, 
      currentStep: Math.max(0, prev.currentStep - 1) 
    }));
  };

  return { state, setAnswer, nextStep, prevStep };
}
```

### Image Optimization

```tsx
// Optimized image component for selection cards
import Image from "next/image";

export function GenderCard({ gender, imageSrc, onClick }) {
  return (
    <button onClick={onClick} className="relative aspect-[3/4] rounded-2xl overflow-hidden">
      <Image
        src={imageSrc}
        alt={`${gender} portrait`}
        fill
        priority  // Above-fold images should have priority
        sizes="(max-width: 640px) 45vw, 280px"
        className="object-cover"
        placeholder="blur"  // Optional: provide blurDataURL
      />
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Label */}
      <span className="absolute bottom-4 left-4 text-white font-semibold">
        {gender === 'male' ? 'Male' : 'Female'}
      </span>
    </button>
  );
}
```

### Analytics Integration

```tsx
// hooks/useAnalytics.ts
import posthog from 'posthog-js';

export function useAnalytics() {
  const trackEvent = (event: string, properties?: Record<string, any>) => {
    // PostHog
    posthog.capture(event, properties);
    
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, properties);
    }
    
    // Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', event, properties);
    }
  };

  const trackQuizStart = (gender: string) => {
    trackEvent('quiz_started', { gender });
  };

  const trackQuizStep = (step: number, questionId: string) => {
    trackEvent('quiz_step_viewed', { step, questionId });
  };

  const trackQuizComplete = () => {
    trackEvent('quiz_completed');
  };

  const trackEmailSubmit = () => {
    trackEvent('email_submitted');
  };

  const trackPurchase = (amount: number, planId: string) => {
    trackEvent('purchase', { value: amount, plan: planId });
  };

  return {
    trackEvent,
    trackQuizStart,
    trackQuizStep,
    trackQuizComplete,
    trackEmailSubmit,
    trackPurchase,
  };
}
```

### Quiz Data Structure

```tsx
// data/quiz-data.ts
export interface QuizQuestion {
  id: string;
  type: 'single' | 'multi' | 'slider' | 'interstitial' | 'email';
  question?: string;
  subtitle?: string;
  options?: { id: string; label: string; icon?: string }[];
  min?: number;  // For slider
  max?: number;
  // Interstitial specific
  title?: string;
  message?: string;
  icon?: string;
}

export const quizFlow: QuizQuestion[] = [
  {
    id: 'age',
    type: 'single',
    question: "What's your age?",
    subtitle: "We use this to personalize your plan",
    options: [
      { id: '18-29', label: '18-29' },
      { id: '30-39', label: '30-39' },
      { id: '40-49', label: '40-49' },
      { id: '50+', label: '50+' },
    ],
  },
  {
    id: 'interstitial-1',
    type: 'interstitial',
    title: 'Great choice!',
    message: 'Over 2,500,000 people have started their journey with us.',
    icon: '🎯',
  },
  {
    id: 'goals',
    type: 'multi',
    question: 'What are your main goals?',
    subtitle: 'Choose all that apply',
    options: [
      { id: 'clarity', label: 'Mental clarity', icon: '🧠' },
      { id: 'stress', label: 'Less stress', icon: '🧘' },
      { id: 'sleep', label: 'Better sleep', icon: '😴' },
      { id: 'energy', label: 'More energy', icon: '⚡' },
    ],
  },
  // ... more questions
  {
    id: 'email',
    type: 'email',
    title: 'Your results are ready!',
    message: 'Enter your email to see your personalized profile.',
  },
];

export const TOTAL_STEPS = quizFlow.length;
```

### Stripe Integration

```tsx
// app/api/stripe/create-checkout/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const { priceId, email, metadata } = await request.json();

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',  // or 'payment' for one-time
    payment_method_types: ['card'],
    customer_email: email,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/subscription`,
    metadata,
  });

  return NextResponse.json({ url: session.url });
}
```

### Performance Optimization Tips

```
1. IMAGES
   - Use WebP format (next/image handles this automatically)
   - Set explicit width/height or use fill with sizes
   - Use priority only for above-fold images (1-2 max)
   - Lazy load everything below the fold

2. FONTS
   - Use next/font for automatic optimization
   - Limit to 2 font families maximum
   - Subset fonts (latin only if applicable)
   - Always use display: 'swap'

3. JAVASCRIPT
   - Use Server Components by default (Next.js App Router)
   - Add 'use client' only when needed (interactivity)
   - Dynamic import heavy components: dynamic(() => import('./Heavy'))
   - Avoid large client-side bundles

4. CSS
   - Tailwind automatically purges unused styles
   - Keep custom CSS minimal
   - Use CSS variables for theming
   - Avoid runtime CSS-in-JS

5. ANALYTICS
   - Load analytics scripts after page load
   - Use Vercel Analytics for minimal bundle impact
   - Batch events where possible

6. BUILD
   - npm run build → Check bundle sizes
   - Target: <100KB initial JS
   - Use Lighthouse CI in CI/CD
```

### Environment Variables

```bash
# .env.local template

# App
NEXT_PUBLIC_URL=http://localhost:3000

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
NEXT_PUBLIC_META_PIXEL_ID=xxxxxxxxxx

# Stripe
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxxxxxxxxxx
SUPABASE_SERVICE_ROLE_KEY=eyJxxxxxxxxxxxxx
```

### Deployment Checklist

```
□ Environment variables set in hosting platform
□ Stripe webhooks configured for production URL
□ Analytics verified (GA, PostHog, Meta Pixel)
□ Supabase RLS policies reviewed
□ Images optimized and uploaded
□ Custom domain configured
□ SSL certificate active
□ Build passes without errors
□ Lighthouse score >90 on mobile
□ Test purchase flow end-to-end
□ Email capture verified in database
□ Error monitoring set up (optional: Sentry)
```

---

## Implementation Checklist

### Landing Page Must-Haves

```
□ Time anchor badge ("3-MINUTE QUIZ")
□ Live viewer count
□ Outcome-focused headline
□ Visible subheadline on mobile
□ Social proof with specific number
□ At least 1 testimonial visible
□ Aspirational selection photos
□ Clear CTA text ("Start Your Journey")
□ Trust badges (Free, Private, Time)
□ Authority signal
□ Legal footer with links
□ Staggered load animations
```

### Quiz Questions Must-Haves

```
□ Progress indicator (bar or X/Y counter)
□ Back button available
□ Clear question text
□ Distinct answer options with hover states
□ Auto-advance on single-select (300-500ms delay)
□ Continue button on multi-select
□ Minimum 1 selection required for multi-select
□ Mobile-optimized touch targets (44x44px min)
□ Consistent transition animations
```

### Interstitials Must-Haves

```
□ Pattern interrupt every 3-5 questions
□ Motivational/celebration messaging
□ Social proof reminder (at least 1)
□ Authority/science mention (at least 1)
□ Progress acknowledgment
□ Single clear CTA to continue
□ No skip option
```

### Email Capture Must-Haves

```
□ Clear value exchange ("see your results")
□ Large, easy-to-tap input field
□ Privacy reassurance text
□ Optional marketing checkbox (builds trust)
□ Validation feedback on input
□ Strong CTA button
□ 16px+ font size on input (prevents iOS zoom)
```

### Loading Screen Must-Haves

```
□ 15-30 second duration (too short = cheap)
□ Progress steps that complete sequentially
□ Testimonial display during wait
□ Personalization messaging ("Creating YOUR plan")
□ No skip option
□ Smooth animations
```

### Results Screen Must-Haves

```
□ Personalized type/profile name
□ 3-5 personalized insights based on answers
□ Positive score/rating (always favorable!)
□ Visual progress indicator or chart
□ Clear CTA to continue to paywall
□ Feels like valuable standalone deliverable
```

### Paywall Must-Haves

```
□ Urgency element (countdown timer)
□ Recommended plan clearly highlighted
□ Original price shown (crossed out)
□ Value bullets for each plan
□ At least 2 testimonials
□ Strong, action-oriented CTA
□ Money-back guarantee prominently displayed
□ Trust signals (secure payment, cancel anytime)
□ Multiple payment options
```

### Success Screen Must-Haves

```
□ Clear visual confirmation (checkmark)
□ Celebratory tone
□ Numbered next steps
□ Clear CTA to access product
□ Support contact info
□ Email confirmation mention
```

### Performance Checklist

```
□ Images optimized (<500KB each)
□ Fonts subset or use system fonts
□ Critical CSS inlined
□ JavaScript minimized
□ Lazy loading for below-fold
□ <3s load time on 3G
□ Lighthouse score >90
□ No layout shift (CLS)
```

### Accessibility Checklist

```
□ Color contrast ratio ≥4.5:1
□ Focus states visible
□ Keyboard navigable
□ Screen reader tested
□ Alt text on images
□ Touch targets ≥44px
□ Reduced motion support
```

---

## Quick Reference Card

### The 5-Second Test

When a user lands on your page, within 5 seconds they should understand:

1. **What** - What is this? (Quiz/Assessment)
2. **Why** - Why should I care? (Clear benefit)
3. **How long** - How much time? (3 minutes)
4. **Who** - Who else has done this? (Social proof)
5. **What do I do** - What's my action? (Clear CTA)

### The Emotional Journey

```
Landing:   "I'm curious" → Intrigue
Start:     "This is easy" → Confidence
Middle:    "I'm learning about myself" → Investment
End:       "I want my results" → Anticipation
Paywall:   "This could help me" → Desire
Purchase:  "I'm taking action" → Commitment
```

### Color Usage Cheatsheet

| Element | Color |
|---------|-------|
| CTA Buttons | Accent gradient |
| Links | Accent primary |
| Success indicators | Green |
| Urgency/timers | Red (sparingly) |
| Stars/ratings | Accent or gold |
| Progress bar | Accent gradient |
| Headlines | Primary text |
| Body | Secondary text |
| Legal/hints | Muted text |

---

## Version History

- **v1.0** - Initial design system based on Memento funnel optimization
- Based on analysis of 5 high-converting funnels: Liven, BetterMe, Copymind, Coursiv

---

*This design system is meant to be adapted, not copied verbatim. Customize colors, fonts, and imagery to match your brand while maintaining the structural patterns and psychological principles.*

