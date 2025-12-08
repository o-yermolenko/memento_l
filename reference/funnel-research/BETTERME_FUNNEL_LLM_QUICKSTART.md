# BetterMe Mind Funnel - LLM Quickstart Guide

## Quick Reference for AI Implementation

### Funnel Identity
- **Product**: BetterMe Mind - Daily Routine & Mental Wellness Planning
- **Entry URL**: `https://mind.betterme.world/en/first-page-generated?flow=3122`
- **Funnel Type**: Long-form segmented quiz → email → paywall
- **Total Steps**: ~25-30 (extensive psychological profiling)

---

## Step Sequence Summary

```
1. LANDING (Age Selection)
   ├─ 18-29 → Quiz
   ├─ 30-39 → Quiz
   ├─ 40-49 → Quiz
   └─ 50+ → Quiz

2. QUIZ (Section: About Me)
   ├─ Gender Selection
   ├─ Consent Interstitial
   ├─ Goals Multi-Select
   ├─ Organization Assessment
   ├─ Energy Assessment
   ├─ Satisfaction Assessment
   ├─ [Motivational Interstitial]
   ├─ Focus Assessment
   └─ [15-20 more questions]

3. QUIZ (Section: Daily Routine)
   ├─ Morning habits
   ├─ Schedule preferences
   ├─ Time availability
   └─ ...

4. QUIZ (Section: Wellness)
   ├─ Stress levels
   ├─ Sleep quality
   ├─ Self-care practices
   └─ ...

5. EMAIL CAPTURE
   └─ "Get your personalized plan"

6. RESULTS/LOADING
   └─ Plan generation animation

7. TRANSFORMATION
   └─ Before/after preview

8. PAYWALL
   └─ Subscription tiers
```

---

## Component Types Used

### 1. Visual Card Selection (Landing)
```typescript
type AgeCard = {
  ageRange: "18-29" | "30-39" | "40-49" | "50+";
  illustration: string; // Couple illustration matching age
  onClick: () => void;
};
```

### 2. Single Choice (Radio Style)
```typescript
type SingleChoice = {
  question: string;
  options: Array<{
    text: string;
    value: string;
  }>;
  hasRadioIndicator: boolean;
};
```

### 3. Multi-Select (Checkbox Style)
```typescript
type MultiSelect = {
  question: string;
  instruction: string; // "Choose all that apply"
  options: Array<{
    text: string;
    value: string;
  }>;
  minSelections?: number;
  continueButton: boolean;
};
```

### 4. Consent Interstitial
```typescript
type ConsentScreen = {
  headline: string;
  bodyText: string[];
  illustration: string;
  ctaText: string;
};
```

### 5. Motivational Interstitial
```typescript
type MotivationalScreen = {
  headline: string;
  ctaText: string;
  progressContext?: string;
};
```

---

## Quiz Questions Reference

### Section: About Me

| # | Question | Type | Options |
|---|----------|------|---------|
| 1 | What's your gender? | single | Male, Female, Prefer not to say |
| 2 | [Consent Screen] | interstitial | I CONSENT |
| 3 | What are your main goals? | multi | 5 options |
| 4 | Do you consider yourself organized? | single | 4-point scale |
| 5 | Energy throughout the day? | single | 3 options |
| 6 | Lifestyle satisfaction? | single | 3 options |
| - | [Motivation Break] | interstitial | CONTINUE |
| 7 | Focus/concentration ability? | single | 4-point scale |

### Goals Options (Multi-Select)
```
- Organize my day better
- Reduce stress & worry
- Improve productivity
- Regain energy and motivation
- Have more time for myself and loved ones
```

---

## Design Tokens

### Colors
```css
--bg-primary: #0a1628;        /* Deep navy */
--bg-card: rgba(255,255,255,0.05);  /* Glass effect */
--accent-blue: #4a7dff;       /* CTA buttons */
--text-primary: #ffffff;
--text-secondary: #8b9ab5;
--border-card: rgba(255,255,255,0.1);
```

### Typography
```css
--font-headline: 'Georgia', serif;
--font-body: 'Inter', sans-serif;
--size-h1: 2rem;
--size-h2: 1.5rem;
--size-body: 1rem;
```

### Spacing
```css
--card-padding: 1rem 1.25rem;
--card-gap: 0.75rem;
--section-margin: 2rem;
```

---

## Copy Patterns

### Headlines
```
"Get Your Personalized Daily Routine Plan"
"What's your gender?"
"What are your main goals?"
"Do you consider yourself an organized person?"
"Let us help you achieve your goals!"
```

### Subheadlines
```
"A step-by-step strategy to organize your day, improve productivity and reduce stress"
"Choose all that apply"
"SELECT YOUR AGE TO START"
```

### CTAs
```
"I CONSENT"
"CONTINUE"
"GET MY PLAN"
"START MY JOURNEY"
```

### Value Props
```
"Personalized Daily Routine Plan"
"Improve productivity"
"Reduce stress"
"Organize your day"
"Mental wellness"
```

---

## Progress Indicator Pattern

```typescript
type ProgressBar = {
  sections: number; // ~5 sections visible
  currentSection: number;
  sectionProgress: number; // 0-100 within section
  style: "segmented"; // Multiple distinct segments
};
```

**Header Format**: Section title + Progress bar
- "About me" → First section
- [Other section names for later sections]

---

## Psychological Triggers

1. **Visual Self-Selection**
   - Age cards with matching couple illustrations
   - Gender-appropriate avatars

2. **Consent Justification**
   - Explain why data is needed BEFORE asking
   - "Without consent, can't customize"

3. **Gradual Commitment**
   - Easy questions first (age, gender)
   - Deeper questions after commitment

4. **Multi-Select Engagement**
   - "Choose all that apply" = multiple yeses
   - Captures breadth of pain points

5. **Interstitial Breaks**
   - Prevents decision fatigue
   - Reinforces progress and partnership

6. **Self-Assessment Scales**
   - 3-4 point scales create honest reflection
   - Middle options dominate (need acknowledgment)

---

## Unique Elements

### 1. Age-Matched Visual Entry
Unlike single-gender landing pages, BetterMe shows diverse couples for each age group, making the entry point feel universally relevant.

### 2. Explicit Consent Step
Before asking personal questions, there's a dedicated screen explaining why data is needed and asking for consent.

### 3. Very Long Quiz
This funnel has significantly more questions (~25-30) than typical quiz funnels (~10-15), enabling deeper personalization.

### 4. Dark/Space Theme
The night sky aesthetic creates a calm, introspective mood suitable for mental wellness products.

### 5. Tropical Accents
Palm leaf decorations add warmth and relaxation associations.

---

## Implementation Priorities

### Must-Have
1. Age-segmented landing page with visual cards
2. Progress bar with section indicators
3. Single-choice and multi-choice question types
4. Consent interstitial before deep profiling
5. Motivational interstitials between sections
6. Back navigation

### Nice-to-Have
1. Animated transitions between questions
2. Personalized illustrations based on selections
3. Real-time progress saving
4. Help/support floating button

---

## API Data Structure (Estimated)

```typescript
interface QuizResponse {
  flow_id: string;
  user_id: string;
  answers: {
    age_group: "18-29" | "30-39" | "40-49" | "50+";
    gender: "male" | "female" | "prefer_not_to_say";
    consent: boolean;
    goals: string[];
    organization_level: 1 | 2 | 3 | 4;
    energy_level: 1 | 2 | 3;
    satisfaction_level: 1 | 2 | 3;
    focus_level: 1 | 2 | 3 | 4;
    // ... more answer fields
  };
  metadata: {
    started_at: string;
    completed_at?: string;
    source?: string;
    utm_params?: object;
  };
}
```

---

## Related Files

- `BETTERME_FUNNEL_DETAILED_SPEC.md` - Complete specification
- `BETTERME_FUNNEL_README.md` - Overview document
- Screenshots in `/tmp/cursor/screenshots/`

---

*Quick reference for LLM-based funnel implementation*

