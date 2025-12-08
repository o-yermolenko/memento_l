# TheLiven Well-Being Management Quiz Funnel - Complete Specification

## Funnel Overview

**Product:** Personalized Well-Being Management Plan  
**URL:** `https://quiz.theliven.com/en/3508_0iu33/`  
**Advertised Duration:** 3-Minute Quiz  
**Total Screens:** 48  
**Quiz Questions:** 23  
**Target Audience:** Adults seeking well-being improvement  

---

## Design System

### Color Palette
- **Primary Accent:** `#429E71` (Green)
- **Icon Fade:** `#224735` (Dark Green)
- **Icon Accent:** `#F5B95F` (Gold/Yellow)
- **Icon Mid-Tone:** `#35845E` (Medium Green)
- **Icon Background:** `#64AB88` (Light Green)
- **Page Background:** `#F6F4F0` (Warm Cream)
- **Divider Color:** `#E5DCCA`
- **Button Border:** `#1C8073` (Teal)

### Typography
- **Font Family:** Inter
- **Font Weights:** 400 (Normal), 600 (Bold)

### UI Components
- **Button Radius:** 999.9rem (Pill-shaped)
- **Option Tile Radius:** 0.8rem
- **Progress Bar Background:** `#D3E6E1`

---

## Complete Screen Flow

### PRE-QUIZ SCREENS (Indices 0-2)

#### Screen 0: Gender Selection (Entry)
**Type:** `ScreenGender`
**Route:** `/`

**Headline:** "A PERSONALIZED WELL-BEING MANAGEMENT PLAN"  
**Subheadline:** "IMPROVE YOUR WELL-BEING WITH OUR PERSONALIZED PLAN"  
**Badge:** "3-MINUTE QUIZ"

**Options:**
- Male (with professional male avatar in green shirt)
- Female (with professional female avatar in green blouse)

**Legal:** By clicking "Male" or "Female" you agree with the Terms of Use and Service, Privacy Policy, Subscription Policy and Cookie Policy

**Design Notes:**
- Large clickable cards with full-body avatars
- Green accent color matching brand
- Clean, minimal layout

---

#### Screen 1: Age Selection
**Type:** `ScreenAge`
**Route:** `/quiz`

**Question:** "What's your age?"  
**Description:** "We only use your age to personalize your plan"

**Options (6 choices):**
1. 18-24
2. 25-34
3. 35-44
4. 45-54
5. 55-64
6. 65+

**UX Pattern:** Single-select with auto-advance

---

#### Screen 2: Social Proof Teaser
**Type:** `ScreenTeaser`

**Headline:** "Over 2,500,000 people"  
**Subheadline:** "have chosen Liven"

**Visual:** Gender-specific professional image
- Male: Professional man
- Female: Professional woman

---

### QUIZ QUESTIONS (Indices 3-25, 27-28, 31)

#### Q1 (Index 3): Energy & Fatigue
**Model:** `tired`

**Question:** "How often do you feel tired or lack energy, even after rest?"

**Options (with icons):**
| Option | Score | Value | Icon |
|--------|-------|-------|------|
| Often | 16.52 | Low | Check |
| Sometimes | 15.03 | Low | QuestionMark |
| Rarely | 9.93 | Medium | Skip |

---

#### Q2 (Index 4): Procrastination
**Model:** `expect`

**Question:** "Do you often leave things to the last minute?"

**Options (with icons):**
| Option | Score | Value | Icon |
|--------|-------|-------|------|
| Often | 16.07 | High | Check |
| Sometimes | 15.32 | High | QuestionMark |
| Never | 12.66 | Medium | Skip |

---

#### Q3 (Index 5): Focus Level
**Model:** `distracted`

**Question:** "How easily distracted are you?"

**Options (centered layout):**
1. Easily distracted
2. Occasionally lose focus
3. Rarely lose focus
4. Very focused

---

#### Q4 (Index 6): Worry & Overwhelm
**Model:** `worried`

**Question:** "How often do you feel worried or overwhelmed?"

**Options (with icons):**
| Option | Score | Icon |
|--------|-------|------|
| Often | 16.03 | Check |
| Sometimes | 16.02 | QuestionMark |
| Rarely | 11.52 | Skip |

---

#### Q5 (Index 7): Mood Swings
**Model:** `noenergy`

**Question:** "How often do you experience mood swings?"

**Options:**
- Often (Check icon)
- Sometimes (QuestionMark icon)
- Rarely (Skip icon)

---

#### Q6 (Index 8): Harmony
**Model:** `harmony`

**Question:** "Have you felt in harmony with yourself and your circle in recent months?"

**Options:**
- Yes (Check icon)
- Moderately (QuestionMark icon)
- No (Skip icon)

---

#### Q7 (Index 9): Emotional Expression
**Model:** `emotions`

**Question:** "It's difficult for me to express emotions"

**Options (Likert Scale):**
1. Strongly disagree (Disagree2x icon)
2. Somewhat disagree (Disagree icon)
3. Not sure (QuestionMark icon)
4. Somewhat agree (Agree icon)
5. Strongly agree (Agree2x icon)

---

#### Q8 (Index 10): Task Overwhelm
**Model:** `amountoftasks`

**Question:** "I often feel overwhelmed by the amount of tasks I have to do"

**Options (Likert Scale):**
1. Strongly disagree
2. Somewhat disagree
3. Not sure
4. Somewhat agree
5. Strongly agree

---

#### Q9 (Index 11): Decision Making
**Model:** `decision`

**Question:** "I often find it challenging to make a decision"

**Options (Likert Scale):** Same as above

---

#### Q10 (Index 12): Fear of Failure
**Model:** `pursue`

**Question:** "I often struggle to pursue my ambitions due to fear of messing up and failing"

**Options (Likert Scale):** Same as above

---

#### Q11 (Index 13): Self-Esteem
**Model:** `compliment`

**Question:** "Have you ever struggled with accepting compliments because you didn't believe they are true?"

**Options:**
1. Almost always
2. Depends
3. Not at all
4. I'm not sure

---

#### Q12 (Index 14): Social Confidence
**Model:** `parents`

**Question:** "I tend to feel insecure while talking to others"

**Options:**
- Yes (Check icon)
- No (Skip icon)
- I'm not sure (QuestionMark icon)

---

#### Q13 (Index 15): Relationship Overthinking
**Model:** `needs`

**Question:** "I tend to overthink my partner's behavior"

**Options:**
- Yes (Check icon)
- No (Skip icon)
- I'm not sure (QuestionMark icon)

---

#### Q14 (Index 16): People Pleasing
**Model:** `mistake`

**Question:** "Do you often prioritize others' needs and sacrifice your own ones?"

**Options:**
- Often (Check icon)
- Sometimes (QuestionMark icon)
- Never (Skip icon)

---

#### Q15 (Index 17): Motivation Timeline
**Model:** `procrastinationPeriod`

**Question:** "When was the last time you felt driven and motivated?"

**Options:**
| Display Text | Value |
|-------------|-------|
| A few weeks ago | Few weeks |
| Less than a year ago | Few months |
| More than a year ago | Few years |
| Never in my life | Whole life |

---

#### Q16 (Index 18): Well-being Concerns (Multi-Select Style)
**Model:** `userProblem`

**Question:** "Are there aspects of your well-being you'd like to address?"

**Options (with icons):**
1. Low energy (LowCharge icon)
2. Worry (Stress icon)
3. Emotional exhaustion (LowMood icon)
4. Overthinking (Mental icon)
5. Irritability (Explosion icon)
6. I'm totally fine (Like icon)

---

#### Q17 (Index 19): Morning Routine
**Model:** `firstThing`

**Question:** "What do you usually do first thing in the morning?"

**Options (with icons):**
1. Picking up my phone (Phone icon)
2. Making coffee (Coffee icon)
3. Brushing teeth & Taking Shower (Toothbrush icon)
4. Other (Other icon)

---

#### Q18 (Index 20): Physical Activity
**Model:** `physicalActivity`

**Question:** "How much time do you dedicate to physical activity each week?"

**Options (with clock icons):**
1. 0-2 hours (Clock1 icon)
2. 3-5 hours (Clock2 icon)
3. 6-8 hours (Clock3 icon)
4. More than 8 hours (Clock4 icon)

---

#### Q19 (Index 21): Bad Habits
**Model:** `quitHabits`

**Question:** "Do you have any habits that you'd like to quit?"

**Options (with icons):**
1. Being late/running out of time (Late icon)
2. Self-doubt (Self icon)
3. Social media (Phone icon)
4. Sugar cravings or junk food (Candy icon)
5. Losing sleep (Sleep icon)
6. Nail-biting (Nail icon)
7. Binge-watching (TV icon)

---

#### Q20 (Index 22): Sleep Issues
**Model:** `improve`

**Question:** "Is there anything you want to improve about your sleep?"

**Options (with icons):**
1. Waking up tired (LowCharge icon)
2. Waking up during the night (Moon icon)
3. Reduced sleep quality (Level_4_1 icon)
4. Difficulty falling asleep (Sleep icon)
5. Waking up earlier than intended (Late icon)
6. I sleep well (Agree2x icon)

---

#### Q21 (Index 23): Struggle Triggers
**Model:** `trigger`

**Question:** "Have any of the following caused you to struggle more than before?"

**Options (with icons):**
1. Family or relationship (Family icon)
2. External circumstances (DoubleArrow icon)
3. My appearance (Mirror icon)
4. Sleep issues (Sleep icon)
5. Job-related stress (Work icon)
6. Other (Other icon)

---

#### Q22 (Index 24): Life Goals
**Model:** `userGoal`

**Question:** "In order to live a happier life, what do you think you need to improve?"

**Options (with icons):**
1. My state of calm (Calm icon)
2. My focus levels (Focus icon)
3. My willpower (Willpower icon)
4. My energy levels (Power icon)
5. My inner strength (Stress icon)
6. Other (Other icon)

---

#### Q23 (Index 25): Action Items
**Model:** `negativeConsequences`

**Question:** "Which of the following would you like to start working on with your plan?"

**Options (with icons):**
1. Stop doubting myself → Over-thinker (Stress icon)
2. Build emotional resilience → Self-Critic (Willpower icon)
3. Set and achieve goals → Perfectionist (Focus icon)
4. Stop overthinking → Worrier (Mental icon)
5. Improve my ability to trust others → Over-thinker (HeartBreak icon)
6. Improve my daily routine → Worrier (Sleep icon)

---

### INTERSTITIAL SCREENS

#### Index 26: University Teaser
**Type:** `ScreenTeaserUniversity`

**Headline:** "Liven was developed using scientific practices"

**Purpose:** Scientific credibility signal

---

#### Q24 (Index 27): Knowledge Assessment
**Model:** `techniques`

**Question:** "How much do you know about Behavioral Techniques?"

**Options (with icons):**
1. Nothing at all (Skip icon)
2. Not that much (Notes icon)
3. A lot (Book icon)

---

#### Q25 (Index 28): Referral Source
**Model:** `specialist`

**Question:** "Did you hear about Liven from a specialist?"

**Options:**
- Yes (Check icon)
- No (Skip icon)

---

#### Index 29: Expert Review Teaser
**Type:** `ScreenExpertTeaser`

**Headline:** "Your plan will be reviewed by our science team"

**Purpose:** Authority & quality assurance signal

---

#### Index 30: Animation Teaser
**Type:** `ScreenTeaserWithAnimation`

**Headline:** "Join over 2,500,000 people"

**Purpose:** Social proof with engaging animation

---

#### Index 31: Daily Commitment
**Model:** `timePerDay`

**Question:** "Set your daily goal"

**Options (with clock icons):**
1. 5 min/day (Clock0_5 icon)
2. 10 min/day (Clock1 icon)
3. 15 min/day (Clock1_5 icon)
4. 20 min/day (Clock2_0 icon)

---

### LEAD CAPTURE & PERSONALIZATION (Indices 32-34)

#### Index 32: Email Capture
**Type:** `ScreenEmail`

**Headline:** "Enter your email to see your personal Profile Summary"

**Placeholder:** "Enter your email to get your plan"

**Privacy Note:** "We respect your privacy and are committed to protecting your personal data."

---

#### Index 33: Email Subscription
**Type:** `ScreenEmailSubscription`

**Question:** "Do you want to receive emails with well-being tips and our product updates?"

---

#### Index 34: Name Personalization
**Type:** `ScreenPersonalisation`

**Question:** "What's your first name?"

---

### RESULTS & CONVERSION (Indices 35-39)

#### Index 35: Profile Summary
**Type:** `ScreenSummaryRedesign`

**Headline:** "Summary of your Well-being Profile"

---

#### Index 36: Plan Confirmation
**Type:** `ScreenConfirmWithRive`

**Headline:** "A plan designed to support your wellbeing journey"

**Visual:** Rive animation

---

#### Index 37: Loading/Calculation
**Type:** `ScreenCalculating`

**Headline:** "personalized Well-being Management plan"

**Purpose:** Build anticipation while "generating" plan

---

#### Index 38: Plan Ready
**Type:** `ScreenGraphWithRive`

**Headline:** "Your personal Well-being Management Plan is ready!"

**Visual:** Progress graph with Rive animation

---

#### Index 39: Checkout/Paywall
**Type:** `ScreenCheckoutMultiTemplate`

**Purpose:** Primary purchase screen

---

### POST-PURCHASE & UPSELLS (Indices 40-47)

#### Index 40: Final Step
**Type:** `ScreenFinalStep`

#### Index 41: Coach Upsell
**Type:** `ScreenUpsellCoachMultiTemplate`

#### Index 42: Coach Discount Upsell
**Type:** `ScreenUpsellCoachDiscountMultiTemplate`

#### Index 43: General Upsell
**Type:** `ScreenUpsell`

#### Index 44: Cards Upsell
**Type:** `ScreenUpsellCards`

#### Index 45: Thank You
**Type:** `ScreenThankYou`

#### Index 46: Payment Declined
**Type:** `ScreenDeclined`

#### Index 47: Alternative Checkout
**Type:** `ScreenCheckoutMultiTemplate`

---

## Psychological Tactics Analysis

### 1. Commitment & Consistency
- Gender and age questions establish initial commitment
- Progressive question complexity builds investment
- Daily goal setting creates commitment before paywall

### 2. Social Proof
- "Over 2,500,000 people have chosen Liven"
- Multiple social proof interstitials throughout funnel
- Animation reinforces community feeling

### 3. Authority Building
- "Developed using scientific practices"
- "Your plan will be reviewed by our science team"
- Behavioral Techniques knowledge question positions expertise

### 4. Problem Agitation
- Questions surface pain points (tired, worried, overwhelmed)
- Multiple questions about negative states build awareness
- Trigger identification creates emotional connection

### 5. Personalization Theater
- Age-based personalization claim
- Gender-specific imagery
- "Personal Profile Summary" language
- Name collection for emails

### 6. Micro-Commitments
- 23+ questions create deep psychological investment
- Daily time commitment question before paywall
- Multiple small choices lead to bigger commitment

### 7. Future Pacing
- "Well-being Management Plan" implies ongoing journey
- Daily goal framing creates expectation
- Profile summary shows "transformation potential"

---

## Key UX Patterns

1. **Auto-Advance:** Single-select questions auto-advance (no Next button)
2. **Visual Icons:** Every answer includes custom iconography
3. **Likert Scales:** Multiple 5-point agree/disagree questions
4. **Progressive Disclosure:** Interstitials break up question fatigue
5. **Warm Color Scheme:** Cream/green creates calm, trustworthy feel
6. **Clean Typography:** Inter font throughout
7. **Mobile-First:** Design optimized for mobile viewing
8. **Rive Animations:** Premium feel on key conversion screens

---

## Conversion Funnel Structure

```
ENTRY (1 screen)
    ↓
QUALIFICATION (2 screens: age + social proof)
    ↓
PROBLEM IDENTIFICATION (10 questions: Q1-Q10)
    ↓
SELF-ASSESSMENT (6 questions: Q11-Q16)
    ↓
LIFESTYLE ANALYSIS (6 questions: Q17-Q22)
    ↓
GOAL SETTING (2 questions + interstitials)
    ↓
AUTHORITY BUILDING (3 interstitials)
    ↓
COMMITMENT (1 question: daily time)
    ↓
LEAD CAPTURE (3 screens)
    ↓
VALUE PRESENTATION (4 screens)
    ↓
PAYWALL (1 screen)
    ↓
UPSELLS (5+ screens)
    ↓
SUCCESS/FAILURE (2 screens)
```

---

## API Endpoints

- **Funnel Flow:** `GET https://api.theliven.com/funnel/flow/{funnel_id}`
- **Analytics Track:** `POST https://api.theliven.com/analytics/track`
- **Trace Event:** `POST https://api.theliven.com/trace/event`
- **Funnel Attributes:** `PUT https://api.theliven.com/visitors/{visitor_id}/funnel-attributes`
- **Payment Plans:** `GET https://api.theliven.com/v2/payment/payment-plans/{funnel_id}`

---

## Technical Stack

- **Frontend:** Vue.js
- **Monitoring:** Sentry
- **Analytics:** Google Analytics, New Relic, Bing Ads
- **CDN:** Cloudflare
- **Image Delivery:** Cloudflare Images
- **Animations:** Rive
- **Payments:** Custom payment system with multiple plans

---

*Document generated from API analysis of TheLiven funnel 3508_0iu33*

