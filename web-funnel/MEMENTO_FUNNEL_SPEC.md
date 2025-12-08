# Memento Web Funnel - Complete Specification

## Funnel Overview

**Product:** Memento - Personalized Emotional Wellness App  
**URL Pattern:** `quiz.memento.app/en/{funnel_id}/`  
**Advertised Duration:** 3-Minute Assessment  
**Total Screens:** 37  
**Quiz Questions:** 22  
**Target Audience:** Adults 25-54 seeking emotional stability  

---

## Design System

### Color Palette

```
Primary Accent:       #E07A4F (Warm Orange) — Memento brand color
Secondary Accent:     #C46A42 (Deep Orange) — Hover states
Hover State:          #F08B60 (Light Orange)

Background Primary:   #F6F4F0 (Warm Cream) — Liven style
Background Secondary: #EEE9DE (Light Tan)
Card Background:      #FFFFFF (White)
Divider Color:        #E5DCCA (Beige)

Text Primary:         #1A1A1A (Near Black)
Text Secondary:       #403E4D (Dark Gray)
Text Tertiary:        #6B6B6B (Muted Gray)

Success:              #429E71 (Green)
Warning:              #FFC107 (Amber)
Error:                #EF5350 (Red)

Accent Gold:          #F5B95F (For highlights/badges)
Button Border:        #C46A42 (Deep Orange)
```

### Typography

```
Headline Font:        Libre Baskerville (serif)
Body Font:            Source Sans 3 (sans-serif)
Font Weights:         400 (body), 500 (medium), 600 (semibold), 700 (bold)

H1:                   2.5rem / 700 / Libre Baskerville
H2:                   2rem / 600 / Libre Baskerville
H3:                   1.5rem / 600
Body:                 1rem / 400 / 1.6 line-height
Small:                0.875rem / 400
Caption:              0.75rem / 500 / uppercase
```

### UI Components

```
Buttons:
  - Primary: Orange background (#E07A4F), white text, rounded-full (pill)
  - Secondary: Transparent, orange border, orange text
  - Border Radius: 999px (pill shape)
  - Padding: 1rem 2rem
  - Hover: Darker orange, subtle shadow

Cards:
  - Background: #FFFFFF (White)
  - Border Radius: 16px
  - Border: 1px solid #E8E0D0
  - Shadow: 0 2px 12px rgba(0,0,0,0.08)

Option Tiles:
  - Background: #FFFFFF
  - Border: 1px solid #E8E0D0
  - Border Radius: 12px
  - Selected: Border #E07A4F, 2px, bg primary/5

Progress Bar:
  - Track: #E5DCCA
  - Fill: linear-gradient(90deg, #E07A4F, #F5B95F)
```

---

## Complete Screen Flow

### PRE-QUIZ SCREENS (Indices 0-2)

#### Screen 0: Gender Selection (Entry)
**Type:** `gender`  
**Route:** `/`

**Headline:** "YOUR PERSONALIZED EMOTIONAL WELLNESS JOURNEY"  
**Subheadline:** "DISCOVER YOUR PATH TO INNER STABILITY"  
**Badge:** "3-MINUTE ASSESSMENT"

**Options:**
- Male (with professional male avatar)
- Female (with professional female avatar)

**Legal:** By clicking "Male" or "Female" you agree with the Terms of Use and Service, Privacy Policy, Subscription Policy and Cookie Policy

---

#### Screen 1: Age Selection
**Type:** `age`  
**Route:** `/quiz`

**Question:** "What chapter of life are you in?"  
**Description:** "We use this to personalize your experience"

**Options (6 choices):**
1. 18-24
2. 25-34
3. 35-44
4. 45-54
5. 55-64
6. 65+

---

#### Screen 2: Social Proof Teaser
**Type:** `social_proof`

**Headline:** "2,500,000+ people"  
**Subheadline:** "have discovered their path to emotional stability"

**Visual:** Circular avatar constellation with diverse users

**CTA:** "Begin Assessment"

---

### QUIZ QUESTIONS (22 Total)

#### Section 1: Current Emotional State (Q1-8)

##### Q1: Emotional Intensity
**Model:** `emotionalIntensity`  
**Question:** "How often do you feel emotions more intensely than the situation seems to require?"

**Options:**
| Option | Score | Icon |
|--------|-------|------|
| Often | 16 | Check |
| Sometimes | 12 | Question |
| Rarely | 6 | Skip |

---

##### Q2: Emotional Exhaustion
**Model:** `exhaustion`  
**Question:** "How often do you feel exhausted from feeling too much?"

**Options:** Often (16), Sometimes (12), Rarely (6)

---

##### Q3: Overwhelm
**Model:** `overwhelm`  
**Question:** "How often do you feel overwhelmed by your emotions?"

**Options:** Often (16), Sometimes (14), Rarely (8)

---

##### Q4: Mood Swings
**Model:** `moodSwings`  
**Question:** "How often do you experience unexpected mood changes?"

**Options:** Often (14), Sometimes (12), Rarely (6)

---

##### Q5: Reactivity
**Model:** `reactivity`  
**Question:** "Do you often react to situations before you can think about them?"

**Options:** Often (16), Sometimes (12), Rarely (6)

---

##### Q6: Stress Level
**Model:** `stressLevel`  
**Question:** "How often do you carry stress in your body (tension, headaches, fatigue)?"

**Options:** Often (16), Sometimes (12), Rarely (6)

---

##### Q7: Sleep Impact
**Model:** `sleepImpact`  
**Question:** "Do your emotions affect your sleep quality?"

**Options:** Often (14), Sometimes (10), Rarely (6)

---

##### Q8: Inner Stability
**Model:** `innerStability`  
**Question:** "Have you felt emotionally stable and grounded in recent months?"

**Options:**
| Option | Score |
|--------|-------|
| Yes | 6 |
| Moderately | 12 |
| No | 16 |

---

#### INTERSTITIAL 1: Progress Stat
**Type:** `stat`  
**Headline:** "You're making progress"  
**Stat:** "87%"  
**Label:** "of people with your profile report feeling more stable within 3 weeks"

---

#### Section 2: Self-Understanding (Q9-14)

##### Q9: Self-Criticism (Likert)
**Model:** `selfCriticism`  
**Question:** "I am often hard on myself when things don't go as planned"

**Options (5-point Likert):**
1. Strongly disagree (4)
2. Somewhat disagree (8)
3. Not sure (12)
4. Somewhat agree (14)
5. Strongly agree (16)

---

##### Q10: Emotion Expression (Likert)
**Model:** `emotionExpression`  
**Question:** "It's difficult for me to express my emotions to others"

**Options:** Same Likert scale

---

##### Q11: Overthinking
**Model:** `overthinking`  
**Question:** "How often do you overthink past conversations or decisions?"

**Options:** Often (16), Sometimes (12), Rarely (6)

---

##### Q12: Compliment Acceptance
**Model:** `complimentAccept`  
**Question:** "Do you struggle to accept compliments because you don't believe they're true?"

**Options:**
- Almost always (16)
- Depends (12)
- Not at all (4)
- I'm not sure (10)

---

##### Q13: Relationship Overthinking
**Model:** `relationshipOverthink`  
**Question:** "Do you tend to overanalyze other people's behavior towards you?"

**Options:** Yes (14), No (4), I'm not sure (10)

---

##### Q14: People Pleasing
**Model:** `othersNeeds`  
**Question:** "Do you often prioritize others' emotional needs over your own?"

**Options:** Often (16), Sometimes (12), Rarely (4)

---

#### INTERSTITIAL 2: Science
**Type:** `science`  
**Headline:** "Memento was developed using evidence-based practices"  
**Subheadline:** "Grounded in behavioral science, nervous system regulation, and emotional intelligence research"

---

#### Section 3: Goals & Readiness (Q15-21)

##### Q15: Last Calm
**Model:** `lastCalm`  
**Question:** "When was the last time you felt truly calm and at peace?"

**Options:**
| Display | Value | Score |
|---------|-------|-------|
| A few weeks ago | few_weeks | 8 |
| A few months ago | few_months | 12 |
| More than a year ago | few_years | 16 |
| I can't remember | cant_remember | 18 |

---

##### Q16: Emotional Concerns (Multi-Select)
**Model:** `emotionalConcerns`  
**Question:** "Which emotional challenges would you like to address?"  
**Type:** Multi-select (min 1)

**Options:**
1. Anxiety or worry (3)
2. Feeling overwhelmed (3)
3. Emotional reactivity (3)
4. Self-doubt (3)
5. Mood fluctuations (3)
6. I'm doing fine (0)

---

##### Q17: Morning Routine
**Model:** `morningRoutine`  
**Question:** "What's the first thing you do when you wake up?"

**Options:**
- Check my phone (12)
- Lie in bed thinking (14)
- Start my morning routine (6)
- Other (8)

---

##### Q18: Previous Attempts (Multi-Select)
**Model:** `triedBefore`  
**Question:** "What have you tried before to manage your emotions?"

**Options:**
- Meditation apps (2)
- Therapy (2)
- Journaling (2)
- Exercise (2)
- Nothing yet (3)

---

##### Q19: Struggle Triggers (Multi-Select)
**Model:** `struggleTriggers`  
**Question:** "What situations trigger your emotional struggles the most?"

**Options:**
- Work or career stress (3)
- Relationships (3)
- Family dynamics (3)
- Self-image concerns (3)
- Uncertainty about the future (3)
- Other (2)

---

##### Q20: Improvement Goal
**Model:** `improvementGoal`  
**Question:** "What would you most like to improve about your emotional life?"

**Options:**
- Feel more calm and stable (10)
- Understand my emotions better (10)
- React less intensely (10)
- Be kinder to myself (10)
- Have more emotional energy (10)

---

##### Q21: Action Priority
**Model:** `actionPriority`  
**Question:** "Which would you like to start working on first?"

**Options:**
- Stop overthinking (10)
- Build emotional resilience (10)
- Quiet my inner critic (10)
- Set healthier boundaries (10)
- Build a calming daily routine (10)

---

#### INTERSTITIAL 3: Expert Review
**Type:** `expert`  
**Headline:** "Your plan will be reviewed by our team of behavioral scientists"  
**Subheadline:** "We ensure every recommendation is tailored to your unique Emotional Blueprint"

---

##### Q22: Daily Time Commitment
**Model:** `dailyTime`  
**Question:** "How much time can you dedicate to your emotional wellness each day?"

**Options:**
- 5 minutes (8)
- 10 minutes (10)
- 15 minutes (12)
- 20+ minutes (14)

---

#### INTERSTITIAL 4: Social Proof Reinforcement
**Type:** `social_proof`  
**Headline:** "You're not alone in this journey"  
**Stat:** "2,500,000+"  
**Label:** "people have already started rewiring their emotional responses"

---

### LEAD CAPTURE (Screens 29-31)

#### Screen 29: Email Capture
**Type:** `email_capture`

**Headline:** "Where should we send your Emotional Blueprint?"  
**Subheadline:** "Enter your email to see your personalized results and plan"  
**Privacy:** "We respect your privacy. No spam, ever."

---

#### Screen 30: Email Opt-In
**Type:** `email_optin`

**Question:** "Would you like emotional wellness tips in your inbox?"

**Options:**
- Yes, send me insights
- No thanks

---

#### Screen 31: Name Personalization
**Type:** `name_capture`

**Question:** "What should we call you?"  
**Subheadline:** "We'll personalize your experience just for you"

---

### RESULTS PHASE (Screens 32-35)

#### Screen 32: Loading/Processing
**Type:** `loading`

**Headline:** "[Name], Creating your Emotional Blueprint"

**Loading Steps:**
1. "Analyzing your responses..."
2. "Identifying emotional patterns..."
3. "Building your Emotional Blueprint..."
4. "Personalizing your plan..."

**Duration:** 5-7 seconds

---

#### Screen 33: Profile Summary
**Type:** `results_summary`

**Elements:**
- Primary Pattern identification (e.g., "The Overthinker")
- Pattern description
- Readiness Level score (78-92%)
- Key insights list

---

#### Screen 34: Transformation Preview
**Type:** `transformation`

**Elements:**
- Before/After comparison cards
- Timeline visualization (4 weeks)
- Projected progress chart
- Improvement stats (+35%, +45%, +72%)

---

#### Screen 35: Plan Ready
**Type:** `plan_ready`

**Elements:**
- Success confirmation
- Personalized plan card
- Feature list preview
- Journey chapters preview (4 weeks)

---

### CONVERSION (Screen 36)

#### Screen 36: Paywall
**Type:** `paywall`

**Elements:**
- Countdown timer (10 minutes)
- Personalized header with pattern
- 3 pricing tiers:
  - 1-Week Trial: $9.99
  - 4-Week Plan: $24.99 (RECOMMENDED)
  - 12-Week Plan: $49.99 (Best Value)
- Feature list
- 3 testimonials
- FAQ accordion
- 14-day money-back guarantee
- Dual CTAs (top and bottom)

---

## Psychological Tactics

### 1. Commitment & Consistency
- Gender → Age → Questions build investment
- 22 questions create sunk cost
- Daily time commitment before paywall

### 2. Social Proof
- "2,500,000+ people" at entry
- Reinforced mid-funnel
- Testimonials on paywall

### 3. Authority Building
- "Evidence-based practices"
- "Behavioral scientists"
- Expert review mention

### 4. Personalization Theater
- Name usage throughout
- "Your Emotional Blueprint"
- Pattern identification
- Readiness score

### 5. Urgency
- Countdown timer on paywall
- "Special offer expires"

### 6. Risk Reversal
- 14-day money-back guarantee
- Clear, prominent

---

## Key Differentiators vs. Liven

| Element | Liven | Memento |
|---------|-------|---------|
| **Name** | Liven | Memento |
| **Tagline** | "Life comes without a manual" | "Your emotions don't come with instructions" |
| **Primary Color** | Green (#429E71) | Orange (#E07A4F) |
| **AI Feature** | "AI Companion" | "Your Inner Ally" |
| **Core Term** | "Nervous System" | "Emotional Blueprint" |
| **Goal State** | "Safety and calm" | "Steady from the inside out" |

---

## Technical Implementation

### Stack
- **Framework:** Next.js 14 (React)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State:** Zustand with localStorage
- **Icons:** Lucide React

### Key Files
- `src/data/questions.ts` - All quiz data
- `src/store/funnelStore.ts` - State management
- `src/components/screens/` - All screen components

---

*Specification v1.0 — December 2024*

