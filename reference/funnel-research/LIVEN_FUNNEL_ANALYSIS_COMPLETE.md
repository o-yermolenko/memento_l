# TheLiven Well-Being Management Quiz Funnel
## Complete Analysis & Specification

**Analysis Date:** November 29, 2024  
**URL:** `https://quiz.theliven.com/en/3508_0iu33/`  
**Product:** Personalized Well-Being Management Plan  
**Funnel ID:** `3508_0iu33`

---

## Executive Summary

TheLiven's funnel is a sophisticated 48-screen conversion system that uses a **26-question quiz** (actually has about 23 real questions + 3 inter stitials masquerading as questions) to qualify, engage, and convert users into paid subscribers for a well-being management app.

### Key Metrics
- **Total Screens:** 48
- **Quiz Questions:** 26 (advertised) / ~23 (actual)
- **Advertised Duration:** 3 minutes
- **Actual Duration:** 8-12 minutes (estimated)
- **Social Proof Claim:** "Over 2,500,000 people have chosen Liven"

---

## Funnel Structure Overview

```
ENTRY (Gender) → AGE → SOCIAL PROOF
    ↓
PROBLEM IDENTIFICATION (Q1-8: Pain points, emotions, overwhelm)
    ↓
SELF-ASSESSMENT (Q9-14: Self-esteem, confidence, relationships)
    ↓
LIFESTYLE ANALYSIS (Q15-23: Habits, sleep, triggers, goals)
    ↓
AUTHORITY BUILDING (3 interstitials: Science, Expert Review, Social Proof)
    ↓
COMMITMENT (Daily time goal)
    ↓
LEAD CAPTURE (Email + Subscription consent + Name)
    ↓
VALUE PRESENTATION (Profile Summary + Confirmation + Graph)
    ↓
PAYWALL (Primary conversion)
    ↓
UPSELLS (Coach, Cards, etc.)
```

---

## Screen-by-Screen Breakdown

### PRE-QUIZ SCREENS (0-2)

#### **Screen 0: Gender Selection** ✅ VERIFIED
**Type:** `ScreenGender`  
**Visual:** Large clickable cards with full-body professional avatars

**Copy:**
- **Headline:** "A PERSONALIZED WELL-BEING MANAGEMENT PLAN"
- **Subheadline:** "IMPROVE YOUR WELL-BEING WITH OUR PERSONALIZED PLAN"
- **Badge:** "3-MINUTE QUIZ"

**Options:**
- Male (avatar: professional man in green t-shirt)
- Female (avatar: professional woman in green blouse)

**Design Notes:**
- Green accent color (#429E71)
- Cream background (#F6F4F0)
- Professional photography (not illustrations)
- Legal disclaimer below: "By clicking 'Male' or 'Female' you agree with the Terms of Use and Service, Privacy Policy, Subscription Policy and Cookie Policy"

**Psychological Tactics:**
- Binary choice reduces decision fatigue
- Professional imagery builds trust
- Time commitment ("3-minute") lowers barrier to entry
- Immediate personalization promise

---

#### **Screen 1: Age Selection** ✅ VERIFIED
**Type:** `ScreenAge`

**Copy:**
- **Question:** "What's your age?"
- **Description:** "We only use your age to personalize your plan"

**Options (6 ranges):**
1. 18-24
2. 25-34
3. 35-44
4. 45-54
5. 55-64
6. 65+

**Design Notes:**
- Clean, minimal pill-shaped buttons
- Selected option highlighted with green border
- Privacy reassurance ("We only use your age...")

**Psychological Tactics:**
- Privacy reassurance reduces hesitation
- Broad age ranges feel less intrusive
- Reinforces personalization promise

---

#### **Screen 2: Social Proof Teaser** ✅ VERIFIED
**Type:** `ScreenTeaser`

**Copy:**
- **Headline:** "Over 2,500,000 people"
- **Subheadline:** "have chosen Liven"

**Visual:**
- Circular arrangement of 10+ diverse user avatars
- Concentric circles create community feeling
- Central featured user (gender-matched to selection)
- All users wearing green (brand unity)

**Design Notes:**
- Animated entrance (likely)
- Diverse ethnicities, ages shown
- Professional, aspirational imagery
- "Continue" button at bottom

**Psychological Tactics:**
- **Social proof:** 2.5M users claim (authority by numbers)
- **Belonging:** Visual community representation
- **Pattern interrupt:** Breaks quiz rhythm before questions start
- **Commitment escalation:** User has now made 2 choices (gender, age)

---

### QUIZ QUESTIONS (Screens 3-31)

#### **Q1/26: Energy & Fatigue** ✅ VERIFIED
**Model:** `tired`  
**Question:** "How often do you feel tired or lack energy, even after rest?"

**Options (with icons):**
| Option | Icon | Score | Value |
|--------|------|-------|-------|
| Often | ✓ Check (green) | 16.52 | Low |
| Sometimes | ? Question Mark (green) | 15.03 | Low |
| Rarely | ⊘ Skip/No (green) | 9.93 | Medium |

**Question Type:** Radio buttons with icon feedback  
**Layout:** Vertically stacked, left-aligned icons

**Psychological Tactics:**
- Starts with pain point (tired/low energy)
- Icons provide immediate visual feedback
- Scoring system (hidden from user) tracks severity
- "Even after rest" intensifies the problem

---

#### **Q2/26: Procrastination** ✅ VERIFIED
**Model:** `expect`  
**Question:** "Do you often leave things to the last minute?"

**Options (with icons):**
| Option | Icon | Score | Value |
|--------|------|-------|-------|
| Often | ✓ Check | 16.07 | High |
| Sometimes | ? Question Mark | 15.32 | High |
| Never | ⊘ Skip/No | 12.66 | Medium |

**Question Type:** Radio buttons with icon feedback  
**Layout:** Vertically stacked, left-aligned icons

**Psychological Tactics:**
- Identifies procrastination behavior
- Relatability (common issue)
- Builds problem awareness

---

#### **Q3/26: Focus & Distraction** ✅ VERIFIED
**Model:** `distracted`  
**Question:** "How easily distracted are you?"

**Options (4 choices, NO icons):**
1. Easily distracted
2. Occasionally lose focus
3. Rarely lose focus
4. Very focused

**Question Type:** Radio buttons, plain text  
**Layout:** **Centered**, vertically stacked

**Design Notes:**
- First question with centered layout
- No icons (design variety)
- Spectrum from worst to best

**Psychological Tactics:**
- Assesses focus challenges
- Inverted scale (negative to positive) creates variety

---

#### **Q4/26: Worry & Overwhelm** ✅ VERIFIED
**Model:** `worried`  
**Question:** "How often do you feel worried or overwhelmed?"

**Options (with icons):**
| Option | Icon | Score |
|--------|------|-------|
| Often | ✓ Check | 16.03 |
| Sometimes | ? Question Mark | 16.02 |
| Rarely | ⊘ Skip/No | 11.52 |

**Question Type:** Radio buttons with icon feedback  
**Layout:** Vertically stacked, left-aligned icons

**Psychological Tactics:**
- Emotional pain point (worry/overwhelm)
- Combines two related feelings
- High scores for both "Often" and "Sometimes" (most users fall here)

---

#### **Q5/26: Mood Swings** (from API)
**Model:** `noenergy`  
**Question:** "How often do you experience mood swings?"

**Options:** Often, Sometimes, Rarely (with icons)

---

#### **Q6/26: Harmony** (from API)
**Model:** `harmony`  
**Question:** "Have you felt in harmony with yourself and your circle in recent months?"

**Options:** Yes, Moderately, No (with icons)

---

#### **Q7/26: Emotional Expression** (from API)
**Model:** `emotions`  
**Question:** "It's difficult for me to express emotions"

**Options (5-point Likert Scale):**
1. Strongly disagree (⟹⟹ Disagree2x icon)
2. Somewhat disagree (⟹ Disagree icon)
3. Not sure (? Question Mark icon)
4. Somewhat agree (⟸ Agree icon)
5. Strongly agree (⟸⟸ Agree2x icon)

**Question Type:** First Likert scale question  
**Psychological Note:** Statement format (not question) for agreement scales

---

#### **Q8/26: Task Overwhelm** (from API)
**Model:** `amountoftasks`  
**Question:** "I often feel overwhelmed by the amount of tasks I have to do"

**Options:** 5-point Likert scale (same as Q7)

---

#### **Q9/26: Decision Making** (from API)
**Model:** `decision`  
**Question:** "I often find it challenging to make a decision"

**Options:** 5-point Likert scale

---

#### **Q10/26: Fear of Failure** (from API)
**Model:** `pursue`  
**Question:** "I often struggle to pursue my ambitions due to fear of messing up and failing"

**Options:** 5-point Likert scale

---

#### **Q11/26: Self-Esteem** (from API)
**Model:** `compliment`  
**Question:** "Have you ever struggled with accepting compliments because you didn't believe they are true?"

**Options (4 choices):**
1. Almost always
2. Depends
3. Not at all
4. I'm not sure

**Question Type:** Multi-option, no icons

---

#### **Q12/26: Social Confidence** (from API)
**Model:** `parents`  
**Question:** "I tend to feel insecure while talking to others"

**Options:** Yes, No, I'm not sure (with icons)

---

#### **Q13/26: Relationship Overthinking** (from API)
**Model:** `needs`  
**Question:** "I tend to overthink my partner's behavior"

**Options:** Yes, No, I'm not sure (with icons)

---

#### **Q14/26: People Pleasing** (from API)
**Model:** `mistake`  
**Question:** "Do you often prioritize others' needs and sacrifice your own ones?"

**Options:** Often, Sometimes, Never (with icons)

---

#### **Q15/26: Motivation Timeline** (from API)
**Model:** `procrastinationPeriod`  
**Question:** "When was the last time you felt driven and motivated?"

**Options (4 choices with mapped values):**
| Display Text | Value |
|--------------|-------|
| A few weeks ago | Few weeks |
| Less than a year ago | Few months |
| More than a year ago | Few years |
| Never in my life | Whole life |

**Psychological Tactic:** Time-based assessment of motivation decay

---

#### **Q16/26: Well-being Concerns** (from API)
**Model:** `userProblem`  
**Question:** "Are there aspects of your well-being you'd like to address?"

**Options (6 choices with icons):**
1. Low energy (⚡ LowCharge icon)
2. Worry (😰 Stress icon)
3. Emotional exhaustion (😔 LowMood icon)
4. Overthinking (🧠 Mental icon)
5. Irritability (💥 Explosion icon)
6. I'm totally fine (👍 Like icon)

**Question Type:** Multi-select style (can pick multiple?)  
**Design Note:** Large icon buttons

---

#### **Q17/26: Morning Routine** (from API)
**Model:** `firstThing`  
**Question:** "What do you usually do first thing in the morning?"

**Options (4 choices with icons):**
1. Picking up my phone (📱 Phone icon)
2. Making coffee (☕ Coffee icon)
3. Brushing teeth & Taking Shower (🪥 Toothbrush icon)
4. Other (❓ Other icon)

**Question Type:** Lifestyle behavior assessment

---

#### **Q18/26: Physical Activity** (from API)
**Model:** `physicalActivity`  
**Question:** "How much time do you dedicate to physical activity each week?"

**Options (4 ranges with clock icons):**
1. 0-2 hours (🕐 Clock1 icon)
2. 3-5 hours (🕑 Clock2 icon)
3. 6-8 hours (🕒 Clock3 icon)
4. More than 8 hours (🕓 Clock4 icon)

---

#### **Q19/26: Bad Habits** (from API)
**Model:** `quitHabits`  
**Question:** "Do you have any habits that you'd like to quit?"

**Options (7 choices with icons):**
1. Being late/running out of time (⏰ Late icon)
2. Self-doubt (😔 Self icon)
3. Social media (📱 Phone icon)
4. Sugar cravings or junk food (🍭 Candy icon)
5. Losing sleep (😴 Sleep icon)
6. Nail-biting (💅 Nail icon)
7. Binge-watching (📺 TV icon)

**Question Type:** Multi-select style

---

#### **Q20/26: Sleep Issues** (from API)
**Model:** `improve`  
**Question:** "Is there anything you want to improve about your sleep?"

**Options (6 choices with icons):**
1. Waking up tired (⚡ LowCharge icon)
2. Waking up during the night (🌙 Moon icon)
3. Reduced sleep quality (📊 Level_4_1 icon)
4. Difficulty falling asleep (😴 Sleep icon)
5. Waking up earlier than intended (⏰ Late icon)
6. I sleep well (✓✓ Agree2x icon)

---

#### **Q21/26: Struggle Triggers** (from API)
**Model:** `trigger`  
**Question:** "Have any of the following caused you to struggle more than before?"

**Options (6 choices with icons):**
1. Family or relationship (👨‍👩‍👧 Family icon)
2. External circumstances (⇄ DoubleArrow icon)
3. My appearance (🪞 Mirror icon)
4. Sleep issues (😴 Sleep icon)
5. Job-related stress (💼 Work icon)
6. Other (❓ Other icon)

---

#### **Q22/26: Life Goals** (from API)
**Model:** `userGoal`  
**Question:** "In order to live a happier life, what do you think you need to improve?"

**Options (6 choices with icons):**
1. My state of calm (🧘 Calm icon)
2. My focus levels (🎯 Focus icon)
3. My willpower (💪 Willpower icon)
4. My energy levels (⚡ Power icon)
5. My inner strength (💪 Stress icon)
6. Other (❓ Other icon)

---

#### **Q23/26: Action Items** (from API)
**Model:** `negativeConsequences`  
**Question:** "Which of the following would you like to start working on with your plan?"

**Options (6 choices with mapped outcomes):**
| Display Text | Mapped Value | Icon |
|--------------|--------------|------|
| Stop doubting myself | Over-thinker | 😰 Stress |
| Build emotional resilience | Self-Critic | 💪 Willpower |
| Set and achieve goals | Perfectionist | 🎯 Focus |
| Stop overthinking | Worrier | 🧠 Mental |
| Improve my ability to trust others | Over-thinker | 💔 HeartBreak |
| Improve my daily routine | Worrier | 😴 Sleep |

**Psychological Tactic:** Action-oriented goals (sets up product value proposition)

---

### INTERSTITIALS

#### **Screen 26: University/Science Teaser** (from API)
**Type:** `ScreenTeaserUniversity`  
**Headline:** "Liven was developed using scientific practices"

**Psychological Tactics:**
- **Authority building:** Science-based credibility
- **Pattern interrupt:** Breaks quiz monotony
- **Trust signal:** Research-backed product

---

#### **Q24/26: Knowledge Assessment** (from API)
**Model:** `techniques`  
**Question:** "How much do you know about Behavioral Techniques?"

**Options (3 choices with icons):**
1. Nothing at all (⊘ Skip icon)
2. Not that much (📝 Notes icon)
3. A lot (📚 Book icon)

**Psychological Tactic:** Establishes user's baseline knowledge (positions product as educational)

---

#### **Q25/26: Referral Source** (from API)
**Model:** `specialist`  
**Question:** "Did you hear about Liven from a specialist?"

**Options:** Yes (✓ Check), No (⊘ Skip)

**Psychological Tactic:** Implicit authority (specialists recommend us)

---

#### **Screen 29: Expert Review Teaser** (from API)
**Type:** `ScreenExpertTeaser`  
**Headline:** "Your plan will be reviewed by **our science team**"

**Psychological Tactics:**
- **Personalization theater:** "Your plan"
- **Quality assurance:** Expert review
- **Scarcity/exclusivity:** Limited attention from experts

---

#### **Screen 30: Animation Teaser with Social Proof** (from API)
**Type:** `ScreenTeaserWithAnimation`  
**Headline:** "Join over 2,500,000 people"

**Design:** Likely animated graphics showing user growth

**Psychological Tactics:**
- **Social proof (second time):** Reinforces popularity
- **Belonging:** "Join" language
- **Momentum:** Animated growth visualization

---

#### **Q26/26: Daily Commitment** (from API)
**Model:** `timePerDay`  
**Question:** "Set your daily goal"

**Options (4 choices with clock icons):**
1. 5 min/day (🕐 Clock0_5 icon)
2. 10 min/day (🕑 Clock1 icon)
3. 15 min/day (🕓 Clock1_5 icon)
4. 20 min/day (🕔 Clock2_0 icon)

**Psychological Tactics:**
- **Micro-commitment:** Small time ask
- **Reciprocity principle:** User commits time before seeing paywall
- **Foot-in-the-door:** Small ask leads to bigger ask (payment)
- **Expectation setting:** Primes user for daily engagement

---

### LEAD CAPTURE SCREENS (32-34)

#### **Screen 32: Email Capture** (from API)
**Type:** `ScreenEmail`  
**Headline:** "Enter your email to see your personal **Profile Summary**"

**Input:** Email text field  
**Privacy Note:** "We respect your privacy and are committed to protecting your personal data."

**Psychological Tactics:**
- **Value exchange:** Email for "Profile Summary"
- **Personalization:** "Your personal"
- **Privacy reassurance:** Reduces hesitation
- **Curiosity gap:** Must see results

---

#### **Screen 33: Email Subscription** (from API)
**Type:** `ScreenEmailSubscription`  
**Question:** "Do you want to receive emails with well-being tips and our product updates?"

**Psychological Tactics:**
- **Opt-in (after email captured):** Two-step consent
- **Value framing:** "Tips" not "marketing"
- **Compliance:** Small yes leads to bigger yes

---

#### **Screen 34: Name Personalization** (from API)
**Type:** `ScreenPersonalisation`  
**Question:** "What's your **first name**?"

**Psychological Tactics:**
- **Deepening relationship:** First-name basis
- **Email personalization:** For follow-up campaigns
- **Commitment escalation:** Another data point shared

---

### VALUE PRESENTATION (35-38)

#### **Screen 35: Profile Summary** (from API)
**Type:** `ScreenSummaryRedesign`  
**Headline:** "Summary of your Well-being Profile"

**Content:** Likely shows:
- Problem areas identified
- Scores/ratings
- Personalized insights

**Psychological Tactics:**
- **Personalization payoff:** Delivers promised "results"
- **Problem crystallization:** Makes issues concrete
- **Solution setup:** Primes need for product

---

#### **Screen 36: Plan Confirmation** (from API)
**Type:** `ScreenConfirmWithRive`  
**Headline:** "A plan designed to support your wellbeing journey"

**Visual:** Rive animation (premium feel)

**Psychological Tactics:**
- **Visual engagement:** Animation creates delight
- **Outcome visualization:** Shows transformation potential
- **Anticipation building:** Leading to paywall

---

#### **Screen 37: Loading/Calculation** (from API)
**Type:** `ScreenCalculating`  
**Headline:** "personalized Well-being Management plan"

**Visual:** Loading animation (building anticipation)

**Psychological Tactics:**
- **Anticipation:** Creates suspense
- **Perceived value:** "Calculating" implies complexity
- **Commitment:** Time invested waiting

---

#### **Screen 38: Plan Ready** (from API)
**Type:** `ScreenGraphWithRive`  
**Headline:** "Your personal **Well-being Management Plan** is ready!"

**Visual:** Progress graph with Rive animation

**Psychological Tactics:**
- **Achievement unlock:** "Ready!" creates excitement
- **Visualization:** Graph shows projected improvement
- **Personalization:** "Your" plan (not generic)

---

### CONVERSION (39)

#### **Screen 39: PAYWALL** (from API)
**Type:** `ScreenCheckoutMultiTemplate`

**Expected Elements (based on similar funnels):**
- Multiple pricing tiers (likely 1-month, 3-month, 12-month)
- "Most Popular" badge on preferred tier
- Money-back guarantee
- Countdown timer (urgency)
- Before/After testimonials
- Trust badges
- Mobile app showcase
- Benefits list
- Risk reversal ("30-day guarantee")

**Psychological Tactics:**
- **Anchoring:** Highest price shown first
- **Decoy pricing:** Middle option designed to look best
- **Urgency:** Countdown/limited time
- **Social proof:** Testimonials
- **Risk reversal:** Guarantee removes objection
- **Sunk cost:** User has invested time (quiz + waiting)

---

### UPSELLS & EXIT (40-47)

#### **Screen 40: Final Step** (from API)
**Type:** `ScreenFinalStep`

#### **Screen 41: Coach Upsell** (from API)
**Type:** `ScreenUpsellCoachMultiTemplate`

#### **Screen 42: Coach Discount Upsell** (from API)
**Type:** `ScreenUpsellCoachDiscountMultiTemplate`

#### **Screen 43: General Upsell** (from API)
**Type:** `ScreenUpsell`

#### **Screen 44: Cards Upsell** (from API)
**Type:** `ScreenUpsellCards`

#### **Screen 45: Thank You** (from API)
**Type:** `ScreenThankYou`

#### **Screen 46: Payment Declined** (from API)
**Type:** `ScreenDeclined`

#### **Screen 47: Alternative Checkout** (from API)
**Type:** `ScreenCheckoutMultiTemplate`

---

## Design System Specifications

### Color Palette
```
Primary Accent:    #429E71 (Green)
Icon Fade:         #224735 (Dark Green)
Icon Accent:       #F5B95F (Gold/Yellow)
Icon Mid-Tone:     #35845E (Medium Green)
Icon Background:   #64AB88 (Light Green)
Page Background:   #F6F4F0 (Warm Cream)
Banner Background: #EEE9DE (Light Tan)
Divider Color:     #E5DCCA (Beige)
Font Primary:      var(--VioletGrey-1000)
Font Secondary:    #403E4D (Dark Purple-Grey)
```

### Typography
```
Font Family (Title):     Inter
Font Family (Paragraph): Inter
Font Weight Normal:      400
Font Weight Bold:        600
```

### UI Component Styling
```
Button Primary:
  - Border Radius: 999.9rem (pill-shaped)
  - Border Color: #1C8073 (Teal)
  - Background Color: #429E71 (Green)
  - Hover Color: #4CAB7D (Lighter Green)
  
Option Tiles:
  - Border Radius: 0.8rem
  - Border Color: #E8E0D0 (Light Beige)
  
Progress Bar:
  - Background Color: #D3E6E1 (Light Green)
  
Input Fields:
  - Border Color: #E2DDD2 (Light Grey)
  - Checkbox Border: #D8CBB1 (Tan)
```

---

## Question Type Taxonomy

### 1. **Icon-Enhanced Radio (Most Common)**
**Examples:** Q1 (Tired), Q2 (Procrastination), Q4 (Worried)

**Characteristics:**
- 3 options: Often/Sometimes/Rarely (or Yes/No/Not Sure)
- Left-aligned icons (Check, Question Mark, Skip)
- Vertically stacked
- Auto-advance on selection

---

### 2. **Centered Plain Radio**
**Examples:** Q3 (Distracted), Q11 (Compliments)

**Characteristics:**
- 4+ options
- No icons
- Center-aligned text
- Cleaner, more formal appearance

---

### 3. **5-Point Likert Scale**
**Examples:** Q7-10 (Emotions, Tasks, Decision, Fear)

**Characteristics:**
- Statement format (not question)
- 5 options: Strongly Disagree → Strongly Agree
- Icons show intensity (⟹⟹, ⟹, ?, ⟸, ⟸⟸)
- Used for agree/disagree statements

---

### 4. **Large Icon Buttons**
**Examples:** Q16 (Well-being Concerns), Q17 (Morning Routine), Q19 (Bad Habits)

**Characteristics:**
- Prominent emoji/icon above text
- Lifestyle/behavior questions
- Often multi-select capable
- More engaging visual style

---

### 5. **Time/Numeric Ranges**
**Examples:** Q18 (Physical Activity), Q26 (Daily Goal)

**Characteristics:**
- Clock or time-based icons
- Quantitative ranges
- Hour increments

---

### 6. **Simple Text Lists**
**Examples:** Q15 (Motivation Timeline)

**Characteristics:**
- Plain text options
- No icons
- Temporal or categorical choices

---

## Psychological Conversion Tactics

### 1. **Commitment & Consistency (Cialdini)**
- **Initial Micro-Commitments:** Gender → Age → Simple questions
- **Progressive Investment:** Each answer increases sunk cost
- **Public Commitment:** Daily time goal before paywall
- **26 Questions:** Massive psychological investment

### 2. **Social Proof (Cialdini)**
- **Quantified:** "Over 2,500,000 people"
- **Visual:** Diverse user avatars (twice in funnel)
- **Animated Growth:** Screen 30 shows momentum
- **Implicit:** "Specialist recommendations" question

### 3. **Authority (Cialdini)**
- **Scientific Credibility:** "Developed using scientific practices"
- **Expert Review:** "Your plan will be reviewed by our science team"
- **Behavioral Techniques:** Positions as evidence-based

### 4. **Reciprocity (Cialdini)**
- **Free Profile:** User receives "personalized summary"
- **Value First:** Analysis and insights before asking for money
- **Expertise Shared:** Educational positioning

### 5. **Problem Agitation**
- **Pain Point Surfacing:** Q1-6 surface multiple struggles
- **Emotional Triggers:** Tired, worried, overwhelmed, self-doubt
- **Quantification:** Likert scales make problems measurable
- **Accumulation:** 26 questions compound awareness of issues

### 6. **Personalization Theater**
- **"Your" Language:** "Your plan", "Your profile"
- **Gender/Age Tailoring:** Avatar and imagery matching
- **Name Collection:** First-name basis
- **Loading Screens:** Implies custom generation

### 7. **Future Pacing**
- **Graph Visualization:** Shows projected improvement
- **Daily Goal:** Sets expectation of ongoing use
- **Journey Language:** "Wellbeing journey", "Start working on"

### 8. **Loss Aversion**
- **Time Investment:** Don't lose 10+ minutes of quiz work
- **Insights Risk:** Lose access to "your" profile
- **Opportunity Cost:** Miss out on transformation

### 9. **Foot-in-the-Door (Freedman & Fraser)**
- **Small → Big:** Gender/Age → Email → Name → Payment
- **Compliance Ladder:** Each yes makes next yes easier
- **Micro to Macro:** 5 min/day commitment → Subscription

### 10. **Zeigarnik Effect**
- **Incomplete Progress:** Progress bar creates tension
- **"X/26" Counter:** Shows progress, creates drive to complete
- **Loading Screens:** Anticipation of "results"

---

## Technical Implementation

### Frontend Stack
- **Framework:** Vue.js (detected via Sentry integration)
- **Animations:** Rive (premium web animations)
- **Routing:** Dynamic quiz progression
- **State Management:** Visitor-based session tracking

### Analytics & Tracking
```
Google Analytics:  G-W21J6HEDQ5
Bing Pixel:        187213619
Facebook Pixel:    779250597526399 (mentioned in API)
TikTok Pixel:      CPUPIA3C77UEB9QOFBPG (mentioned in API)
Google Ads:        4375245727 (mentioned in API)
New Relic:         Monitoring
Sentry:            Error tracking (sentry.javascript.vue/9.3.0)
```

### API Endpoints
```
Funnel Flow:       GET /funnel/flow/{funnel_id}
Analytics Track:   POST /analytics/track
Trace Event:       POST /trace/event
Funnel Attributes: PUT /visitors/{visitor_id}/funnel-attributes
Payment Plans:     GET /v2/payment/payment-plans/{funnel_id}
```

### CDN & Infrastructure
- **CDN:** Cloudflare
- **Image Delivery:** Cloudflare Images (`imagedelivery.net`)
- **Font Loading:** Custom web fonts (Inter from `cdn.theliven.com`)

---

## Conversion Optimization Insights

### Strengths
1. **Length Creates Commitment:** 26 questions = high sunk cost
2. **Visual Variety:** 6+ question styles prevent monotony
3. **Icon Usage:** Makes options more memorable and engaging
4. **Interstitials:** Pattern interrupts maintain engagement
5. **Progressive Disclosure:** Information revealed gradually
6. **Mobile-First Design:** Clean, thumb-friendly layouts
7. **Personalization Hooks:** Multiple points of customization
8. **Authority Stacking:** Science + Experts + Social Proof

### Potential Friction Points
1. **Length:** 26 questions vs. "3-minute" promise
2. **Repetition:** Multiple similar "Often/Sometimes/Rarely" questions
3. **No Skip:** Can't skip questions (increases abandonment risk)
4. **Late Lead Capture:** Email asked after Q26 (lose leads who drop mid-quiz)
5. **Question Counter:** "1/26" might discourage ("too long!")

### Optimization Opportunities
1. **Earlier Email Capture:** Get email at Q10-12 to recover abandoners
2. **Progressive Commitment Counter:** Show "80% complete" instead of "Question 15/26"
3. **Save & Return:** Allow users to pause and resume
4. **Question Clustering:** Group similar questions for perceived brevity
5. **Visual Progress Milestones:** Celebrate Q10, Q20 completions

---

## Competitive Differentiation

### vs. Copymind (Decision-Making)
- **Topic:** Well-being vs. Decision-making
- **Length:** Similar (26 vs 30+ screens)
- **Design:** Warmer colors (green/cream) vs. Cooler (purple/white)
- **Social Proof:** Larger number (2.5M vs. Copymind's claims)

### vs. Coursiv (AI Learning)
- **Topic:** Well-being vs. AI Education
- **Length:** Slightly longer (26 real questions vs. 22)
- **Authority:** Science-based vs. AI-driven
- **Visual Style:** Photography vs. Illustrations

---

## Files Generated

1. **`liven-s0-gender.png`** - Entry screen with gender selection
2. **`liven-s1-age.png`** - Age selection screen  
3. **`liven-after-age-click.png`** - Social proof teaser
4. **`liven-q1-tired.png`** - Q1: Energy/fatigue with icons
5. **`liven-q3-distracted.png`** - Q2: Procrastination
6. **`liven-q6-emotions.png`** - Q3: Focus (centered layout)
7. **`liven-end-screen.png`** - Q4: Worried/overwhelmed
8. **`liven-funnel-raw-api.json`** - Complete API response with all 48 screens
9. **`LIVEN_FUNNEL_DETAILED_SPEC.md`** - Comprehensive technical specification
10. **`LIVEN_FUNNEL_ANALYSIS_COMPLETE.md`** - This document

---

## Conclusion

TheLiven funnel is a **masterclass in conversion psychology**, using:
- **26 questions** to build massive commitment
- **48 total screens** for progressive engagement
- **7+ question types** for visual variety
- **3 interstitials** for authority building
- **Scientific positioning** for credibility
- **Personalization theater** throughout

The funnel successfully balances **length** (high commitment) with **engagement** (visual variety, animations) to convert users into a subscription-based well-being app.

---

*Analysis completed: November 29, 2024*  
*Analyst: AI Assistant via Cursor*  
*Method: Visual inspection + API analysis + UX psychology assessment*

