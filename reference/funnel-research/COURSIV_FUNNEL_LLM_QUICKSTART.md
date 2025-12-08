# COURSIV FUNNEL - LLM QUICKSTART GUIDE
## Instructions for AI Coding Assistants

---

## PURPOSE

This document enables any LLM (Large Language Model) to quickly understand and implement the Coursiv AI-Driven Income Growth Challenge funnel. Use this if you need to:

- Build a similar quiz funnel
- Recreate this specific funnel
- Understand the conversion mechanics
- Adapt the structure for a different vertical

---

## TLDR: WHAT IS THIS FUNNEL?

**Type:** Quiz-based lead generation → Subscription paywall  
**Industry:** AI Education / Online Learning / Income Growth  
**Length:** 30 total steps (23 quiz questions + 7 conversion pages)  
**Time:** 3-5 minutes  
**Goal:** Convert to €19.99/4-week trial → €39.99/4-week recurring subscription  
**Core Promise:** "Become an AI Master by Jan 2026 and grow your income"

**Key Innovation:** Salary anchoring throughout the quiz ($42k-$100k examples from Upwork) to build aspiration and justify price.

---

## STRUCTURE AT A GLANCE

```
1. Gender Selection → 2. Age Selection → 3. Social Proof Page
                                              ↓
                           ┌──────────────────┴─────────────────┐
                           │                                     │
4-7. Discovery Questions  →  8. Interstitial  → 9-13. Work Questions
                                                       ↓
14-19. Skill Assessment with Salary Anchors → 20. Profile Results
                                                       ↓
21-26. Commitment Questions → 27-28. Timeline + Loading
                                                       ↓
29. Email Capture → 30. Readiness Results → 31. PAYWALL
```

---

## CORE COMPONENTS TO IMPLEMENT

### 1. **ENTRY SEQUENCE** (Steps 1-3)

**Purpose:** Low-friction start + authority building

```
Components:
├─ Gender selection (2 large cards with avatars)
├─ Age selection (4 cards in 2x2 grid)
└─ Social proof page (600k users + Harvard quote + media logos)

Key Details:
- Auto-progression on clicks
- "1-MINUTE QUIZ" badge to set expectation
- Legal footer with linked terms
- Friendly illustrated avatars
```

**Implementation Priority:** HIGH - First impression critical

---

### 2. **QUIZ ENGINE** (Steps 4-26)

**Core Features:**

```javascript
// Pseudo-code for quiz logic

const questionTypes = {
  singleChoice: {
    autoProgress: true,
    displayStyle: "vertical_cards",
    visualType: "emoji | illustration | text",
    progressBar: true,
    backButton: true
  },
  multiSelect: {
    autoProgress: false, // Requires NEXT STEP button
    minSelections: 1,
    displayStyle: "button_chips",
    ctaButton: "NEXT STEP"
  }
};

const progressIndicator = {
  format: "X / 23",
  barFill: calculatePercentage(currentStep, totalSteps),
  color: "#5B4FFF" // Coursiv purple
};

const interstitials = {
  trigger: "every_3_to_5_questions",
  types: ["motivational", "statistical", "results_preview"],
  requiredAction: "click_CONTINUE",
  noProgress: true // Don't show progress bar
};
```

**Key Question Types to Build:**

1. **Single-choice with emojis** (Most common)
   - Example: Q5 - Financial situation with 😌🤕😐
   
2. **Single-choice with illustrations** (Visual impact)
   - Example: Q1 - Main goal with 6 illustrated people

3. **Multi-select** (2 questions total)
   - Example: Q4 - Pain points, Q18 - Fields of interest
   - Must include NEXT STEP button (enabled after selection)

4. **Skill rating with salary benchmark** (High value)
   - Example: Q15 - "Upwork: $42,000 annually" + Expert/Proficient/Intermediate/Novice
   - This is the SECRET SAUCE - builds aspiration

**Implementation Priority:** CRITICAL - This is 70% of the funnel

---

### 3. **PATTERN INTERRUPTS** (5-7 interstitials)

**Purpose:** Break monotony, re-engage, build value

```
Interstitial Types:

1. Social Proof (Pre-quiz)
   └─ 600k users + authority quote + media logos

2. Motivational (Mid-quiz)
   └─ "Be Human and Smart at Once" with illustration

3. Statistical (Mid-quiz)
   └─ "63% feel anxious about finances" with solution promise

4. Profile Results (After Q20)
   └─ Readiness score + breakdown (Motivation/Potential/Focus/AI Knowledge)
   └─ THIS IS MAJOR MOMENT - gamification + positive reinforcement

5. Timeline Results (After Q23)
   └─ "AI Master by Jan 2026" with bar chart progression

6. Loading Screen (Before email)
   └─ Animated percentage + testimonial + social proof

7. Readiness Curve (Before paywall)
   └─ Curved line graph showing 4-week progression
```

**Implementation Priority:** HIGH - These keep engagement high

---

### 4. **PERSONALIZATION ENGINE**

**Data to Capture:**

```javascript
const userProfile = {
  // Demographics
  gender: "male | female",
  ageRange: "18-24 | 25-34 | 35-44 | 45+",
  
  // Discovery
  mainGoal: "grow_wealth | own_boss | financial_freedom | etc",
  incomeSource: "full_time | passive | other",
  workSchedule: "9_to_5 | night_shifts | flexible | retired",
  painPoints: ["underpaid", "no_time", "routine"], // multi-select
  
  // Situation
  financialFeeling: "comfortable | want_stability | struggling",
  incomeGoal: "$30-50k | $50-100k | $100k+",
  
  // Skills (THIS IS KEY FOR PERSONALIZATION)
  contentWritingLevel: "expert | proficient | intermediate | novice",
  digitalMarketingLevel: "expert | proficient | intermediate | novice",
  // ... more skills
  
  // Commitment
  specialGoal: "house | wedding | vacation | car | retirement | other",
  fieldsOfInterest: ["ai", "web_dev", "marketing"], // multi-select
  timeCommitment: "5 | 10 | 15 | 20" // minutes per day
};

// Use this data to personalize:
const personalizations = {
  avatarIllustrations: selectByGenderAndAge(),
  timelineMessage: `AI Master by ${calculateDate()}`, // Based on time commitment
  goalDisplay: `Your goal: ${userProfile.specialGoal}`,
  readinessScore: calculateScore(userProfile),
  recommendedProgram: "4-week" // Could vary based on answers
};
```

**Implementation Priority:** MEDIUM - Enhances conversion but not required for MVP

---

### 5. **EMAIL CAPTURE** (Step 29)

**Purpose:** Get permission for email marketing (but allow opt-out for trust)

```
Layout:
┌─────────────────────────────────────────┐
│ Do you want to receive emails with      │
│ AI & Income Growth tips and product     │
│ updates?                                 │
│                                          │
│  [YES, I'M IN!]  ← Primary button      │
│                                          │
│  I DON'T WANT TO RECEIVE TIPS OR UPDATES│
│  ↑ Secondary link (gray)                │
└─────────────────────────────────────────┘

Implementation:
- Both options advance to next page
- Track which was chosen
- Add tracking ID (tid) to URL after this step
- Purple highlight on "AI & Income Growth" text
```

**Why This Works:**
- Transparency builds trust
- Opt-out option paradoxically increases opt-ins (users appreciate choice)
- Value framing ("tips and product updates")

**Implementation Priority:** HIGH - Critical for lead generation

---

### 6. **PAYWALL/CONVERSION PAGE** (Step 31)

**Components (in order):**

```
1. STICKY HEADER
   ├─ Countdown: "Discount expires in 09:57" (left)
   └─ CTA: "GET MY PLAN" button (right)

2. BEFORE/AFTER COMPARISON
   ├─ Left: Frustrated person, Moderate AI skills, Limited income
   └─ Right: Confident person, High AI skills, High income (+35% +45% +72%)
   
3. READINESS SCORE
   └─ "Your readiness: 83%" + "💡 4-week program is enough for you"

4. TESTIMONIALS (3x)
   ├─ @username + 5 stars + detailed quote
   ├─ Focus on immediate results and skill improvement
   └─ Use sunglasses emoji avatar for consistency

5. PRICING & CTA
   ├─ Checkbox: "I agree to Terms and Conditions..."
   ├─ Large CTA: "GET MY PLAN"
   └─ Fine print: "First 4 weeks €19.99, then €39.99 every 4 weeks..."

6. MONEY-BACK GUARANTEE
   ├─ Green badge with checkmark
   └─ "30-day full refund OR before end of first subscription period"

7. MOBILE APP SHOWCASE
   └─ 3 device mockups showing actual app screens
```

**Psychological Tactics Employed:**

```
✓ Urgency (countdown timer)
✓ Social proof (testimonials)
✓ Authority (stat citations throughout)
✓ Risk reversal (guarantee)
✓ Before/after transformation
✓ Positive reinforcement (83% readiness)
✓ Product demonstration (app mockups)
✓ Transparency (clear pricing terms)
✓ Dual CTAs (top sticky + bottom)
```

**Implementation Priority:** CRITICAL - This is where money is made

---

## DESIGN SYSTEM

### Colors

```css
/* Primary palette */
--primary-purple: #5B4FFF;
--light-purple: #E8E6FF;
--success-green: #50C878;
--warning-orange: #FFA500;
--alert-red: #DC2626;

/* Neutrals */
--dark-navy: #1A1A2E;
--medium-gray: #6B7280;
--light-gray: #F3F4F6;
--white: #FFFFFF;
```

### Typography

```css
/* Headings */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
h1: 32-40px, bold, dark-navy;
h2: 24-28px, bold, dark-navy;

/* Body */
p: 16px, regular, dark-navy;
small: 14px, regular, medium-gray;

/* Buttons */
button: 18px, bold, white (on purple bg);
```

### Components

```css
/* Option Cards */
.option-card {
  background: #F3F4F6;
  border-radius: 12px;
  padding: 20px 24px;
  transition: all 200ms ease;
}
.option-card:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.option-card.selected {
  background: #5B4FFF;
  color: white;
}

/* CTA Buttons */
.cta-button {
  background: linear-gradient(135deg, #5B4FFF 0%, #7B6FFF 100%);
  color: white;
  border-radius: 12px;
  padding: 16px 32px;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(91, 79, 255, 0.3);
}
.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(91, 79, 255, 0.4);
}

/* Progress Bar */
.progress-bar {
  height: 8px;
  background: #E5E7EB;
  border-radius: 4px;
}
.progress-fill {
  background: linear-gradient(90deg, #5B4FFF 0%, #7B6FFF 100%);
  height: 100%;
  border-radius: 4px;
  transition: width 400ms ease;
}
```

---

## KEY DIFFERENTIATORS (Why This Funnel Works)

### 1. **Salary Anchoring** 🎯
```
Regular approach: "Learn digital marketing"
Coursiv approach: "Learn digital marketing (Upwork: $100,000 annually)"

Impact: Creates concrete income aspiration and justifies subscription cost
```

### 2. **Low Time Commitment** ⏱️
```
Minimum option: 5 min/day
Psychology: Removes "I don't have time" objection
```

### 3. **Specific Timeline** 📅
```
"AI Master by Jan 2026" (exact month)
Psychology: Specificity creates believability
```

### 4. **Positive Readiness Score** ⭐
```
"Your readiness: 83%" + "Result: Perfect"
Psychology: User feels capable, not starting from zero
```

### 5. **Email Opt-Out Available** ✉️
```
Both yes/no options proceed
Psychology: Transparency builds trust, paradoxically increases opt-ins
```

### 6. **Recommended Program** 💡
```
"4-week program is enough for you"
Psychology: Feels like personalized expert advice
```

---

## TECHNICAL IMPLEMENTATION NOTES

### URL Structure

```
Pattern:
/dynamic/[page-slug]?detected_locale=en&initial_locale=default&utm_gender=[m|f]&block=[previous-page]&step=[1-23]&tid=[tracking-id]

Key Parameters:
- utm_gender: m | f (set after gender selection)
- step: 1-23 (tracks quiz progress)
- block: previous page identifier (for back button)
- tid: tracking ID (appears after email step)
```

### State Management Options

```javascript
// Option 1: URL-based (Coursiv's approach)
const currentStep = new URLSearchParams(window.location.search).get('step');

// Option 2: Local storage
localStorage.setItem('quizProgress', JSON.stringify(userProfile));

// Option 3: Session storage (clears on close)
sessionStorage.setItem('currentStep', stepNumber);

// Option 4: React/Vue state management
const [quizState, setQuizState] = useState(initialState);
```

### Progress Tracking

```javascript
const calculateProgress = (currentStep, totalSteps = 23) => {
  return Math.round((currentStep / totalSteps) * 100);
};

const progressBar = {
  percentage: calculateProgress(currentStep),
  display: `${currentStep} / ${totalSteps}`,
  fillColor: '#5B4FFF'
};
```

### Auto-Progression Logic

```javascript
const handleAnswer = (questionType, answer) => {
  saveAnswer(answer);
  
  if (questionType === 'single_choice') {
    // Auto-progress after brief delay (for UX feedback)
    setTimeout(() => {
      navigateToNextStep();
    }, 300);
  } else if (questionType === 'multi_select') {
    // Enable NEXT STEP button
    enableNextButton();
  }
};
```

### Countdown Timer Implementation

```javascript
const COUNTDOWN_DURATION = 10 * 60; // 10 minutes in seconds

const startCountdown = () => {
  let timeRemaining = COUNTDOWN_DURATION;
  
  const interval = setInterval(() => {
    timeRemaining--;
    
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    
    updateDisplay(minutes, seconds);
    
    if (timeRemaining <= 0) {
      clearInterval(interval);
      // Optional: Show "offer expired" message or reset timer
    }
  }, 1000);
};
```

---

## CONVERSION OPTIMIZATION CHECKLIST

### Must-Have Elements ✅

- [ ] Progress bar always visible on quiz questions
- [ ] Back button on all quiz questions (except Q1)
- [ ] Auto-progression on single-choice questions
- [ ] NEXT STEP button on multi-select (enabled only after selection)
- [ ] Salary benchmarks on skill questions ($42k, $100k)
- [ ] Readiness score/profile page after ~Q20
- [ ] User's special goal displayed in results pages
- [ ] Countdown timer on final paywall (10 minutes)
- [ ] Before/after visual comparison on paywall
- [ ] 30-day money-back guarantee prominently displayed
- [ ] 3+ testimonials on paywall
- [ ] Sticky CTA button on paywall
- [ ] Email opt-out option (builds trust)
- [ ] Legal checkbox before purchase
- [ ] Clear subscription terms

### Nice-to-Have Enhancements 🌟

- [ ] Animated loading screen with testimonial
- [ ] Mobile app mockups/screenshots
- [ ] Multiple interstitials (every 3-5 questions)
- [ ] Emoji icons for quick visual scanning
- [ ] Illustrated avatars matching demographics
- [ ] Smooth transitions between questions
- [ ] Readiness curve visualization
- [ ] Timeline bar chart
- [ ] Media logo badges
- [ ] Trustpilot integration

### A/B Test Ideas 🧪

1. **Quiz Length:** 23 questions vs 15 questions
2. **Countdown Duration:** 10 min vs 5 min vs no timer
3. **Email Opt-Out:** Available vs Required
4. **Pricing:** Single plan vs 3 tiers
5. **First Question:** Goal vs Income Source
6. **CTA Copy:** "GET MY PLAN" vs "START MY JOURNEY"
7. **Loading Duration:** 5 sec vs 15 sec vs 25 sec
8. **Testimonial Count:** 3 vs 5 vs 7

---

## COMMON IMPLEMENTATION PITFALLS

### ❌ Don't Do This

1. **Skip the salary anchoring**
   - This is the core value prop! ($42k-$100k examples)

2. **Make email required**
   - Opt-out option builds trust, paradoxically increases opt-ins

3. **Use generic "submit" buttons**
   - Use specific CTAs: "CONTINUE", "NEXT STEP", "GET MY PLAN"

4. **Show all questions on one page**
   - One question per screen creates commitment effect

5. **Skip the readiness score page**
   - This is a major conversion moment with positive reinforcement

6. **Hide the back button**
   - Users need to feel in control; back button reduces anxiety

7. **Use vague timeline promises**
   - "AI Master by Jan 2026" is specific and believable

8. **Skip interstitials**
   - Pattern interrupts are crucial for engagement on long quizzes

### ✅ Do This Instead

1. **Emphasize income potential** throughout quiz
2. **Offer email opt-out** for transparency
3. **Use action-oriented CTAs** that describe next step
4. **One question per screen** with smooth transitions
5. **Include positive reinforcement** via scores/profiles
6. **Always show back button** except on first question
7. **Be specific** with dates, numbers, and outcomes
8. **Break up quiz** with motivational content every 3-5 questions

---

## SAMPLE QUESTION DATA STRUCTURE

```json
{
  "questions": [
    {
      "id": "q1",
      "step": 1,
      "type": "single_choice",
      "category": "discovery",
      "question": "What is your main goal?",
      "subtitle": null,
      "autoProgress": true,
      "backButton": true,
      "options": [
        {
          "id": "grow_wealth",
          "text": "Grow wealth",
          "visual": {
            "type": "illustration",
            "src": "person_with_money.svg"
          }
        },
        {
          "id": "own_boss",
          "text": "Be my own boss",
          "visual": {
            "type": "illustration",
            "src": "confident_businessman.svg"
          }
        }
      ],
      "progressDisplay": "1 / 23"
    },
    {
      "id": "q15",
      "step": 15,
      "type": "single_choice",
      "category": "skill_assessment",
      "question": "Rate your knowledge in content writing",
      "subtitle": "According to Upwork, freelance content writer makes around $42,000 annually.",
      "salaryAnchor": {
        "amount": 42000,
        "currency": "USD",
        "source": "Upwork",
        "job": "freelance content writer"
      },
      "autoProgress": true,
      "backButton": true,
      "options": [
        {
          "id": "expert",
          "text": "Expert",
          "visual": {
            "type": "emoji",
            "icon": "🤩"
          }
        },
        {
          "id": "proficient",
          "text": "Proficient",
          "visual": {
            "type": "emoji",
            "icon": "😏"
          }
        },
        {
          "id": "intermediate",
          "text": "Intermediate",
          "visual": {
            "type": "emoji",
            "icon": "🤔"
          }
        },
        {
          "id": "novice",
          "text": "Novice",
          "visual": {
            "type": "emoji",
            "icon": "😬"
          }
        }
      ],
      "progressDisplay": "15 / 23"
    }
  ],
  "interstitials": [
    {
      "id": "profile_results",
      "triggerAfterStep": 20,
      "type": "results_preview",
      "headline": "Here's Your AI-Driven Income Growth Profile",
      "content": {
        "readinessScore": {
          "value": "83",
          "label": "Moderate",
          "result": "Perfect"
        },
        "breakdown": [
          { "attribute": "Motivation", "value": "High", "icon": "🎯" },
          { "attribute": "Potential", "value": "High", "icon": "⭐" },
          { "attribute": "Focus", "value": "Limited", "icon": "🕐" },
          { "attribute": "AI Knowledge", "value": "Low", "icon": "💻" }
        ],
        "stat": "A study in 2022 found that workers who use AI tools in their work have 10-20% higher hourly rates than those who don't."
      },
      "cta": "CONTINUE"
    }
  ]
}
```

---

## MINIMAL VIABLE VERSION

If you need to build an MVP quickly, focus on these components:

### Phase 1: Core Quiz (1-2 days)

```
✓ Gender + Age selection
✓ 10-15 essential questions (not all 23)
✓ At least 2 with salary anchoring
✓ Progress bar + back button
✓ Basic styling (cards, purple theme)
```

### Phase 2: Results + Email (1 day)

```
✓ Simple results page (no complex charts)
✓ Email permission page
✓ Basic personalization (show their goal)
```

### Phase 3: Conversion (1-2 days)

```
✓ Paywall with before/after
✓ 1-2 testimonials
✓ Pricing + CTA
✓ Money-back guarantee
✓ (Skip countdown timer for MVP)
```

### Total MVP: 3-5 days for single developer

---

## QUICK REFERENCE: FUNNEL METRICS

```
Industry Benchmarks (Quiz Funnels):
├─ Start → Q1: 70-85% (after social proof)
├─ Q1 → Q23: 40-60% (quiz completion)
├─ Q23 → Email: 80-90% (results viewers)
├─ Email → Paywall: 95%+ (almost everyone proceeds)
└─ Paywall → Purchase: 2-8% (final conversion)

Overall Funnel Conversion: 0.5-3% (visitor to customer)

Key Drop-Off Points to Monitor:
1. Social proof → Q1 (losing uncommitted traffic)
2. Mid-quiz (~Q10-15) (fatigue sets in)
3. Multi-select questions (higher friction)
4. Paywall (price objection)
```

---

## FINAL IMPLEMENTATION CHECKLIST

Before launching, ensure you have:

### Technical
- [ ] URL routing for all 30+ pages
- [ ] State persistence (user doesn't lose progress on refresh)
- [ ] Back button functionality
- [ ] Progress bar calculation
- [ ] Auto-progression on single-choice
- [ ] Manual progression on multi-select
- [ ] Loading screen with delay
- [ ] Countdown timer on paywall
- [ ] Mobile responsive design
- [ ] Fast page transitions (<300ms)

### Content
- [ ] All 23 questions written
- [ ] Salary benchmarks researched ($42k-$100k examples)
- [ ] 3+ testimonials collected
- [ ] Authority quote/stats sourced
- [ ] Legal pages (Terms, Privacy, Refund Policy)
- [ ] Email copy for opt-ins

### Design
- [ ] Illustrated avatars for gender/age
- [ ] Emoji icons for all relevant questions
- [ ] Before/after comparison image
- [ ] Mobile app mockups (if applicable)
- [ ] Progress charts/visualizations
- [ ] Purple brand color throughout
- [ ] Hover states on all interactive elements

### Conversion Elements
- [ ] Social proof (user count, logos)
- [ ] Authority signals (Harvard quote, media)
- [ ] Pattern interrupts (interstitials)
- [ ] Readiness score page
- [ ] Timeline results page
- [ ] Money-back guarantee
- [ ] Clear subscription terms
- [ ] Email opt-out option
- [ ] Dual CTAs on paywall

### Analytics
- [ ] Event tracking on each question
- [ ] Drop-off monitoring
- [ ] Conversion funnel setup
- [ ] A/B testing framework (optional but recommended)

---

## WHEN TO USE THIS FUNNEL STRUCTURE

### ✅ Good Fit For:

- **Online courses/education** (perfect match)
- **Coaching/training programs**
- **SaaS with skill-building component**
- **Career development tools**
- **Income-focused products**
- **Subscription-based learning**

### ❌ Not Ideal For:

- **E-commerce physical products** (too long, use shorter quiz)
- **High-ticket consulting** ($5k+, needs human touch)
- **Free tools** (overkill for free conversion)
- **B2B enterprise sales** (requires demo/sales call)

---

## CUSTOMIZATION GUIDE

To adapt this funnel for a different vertical:

### 1. Change the Value Proposition

```
Original: "AI Master by Jan 2026 + Income Growth"
Fitness: "Beach Body by Summer 2026 + Health Goals"
Business: "6-Figure Business by Q4 2026 + Financial Freedom"
```

### 2. Replace Salary Anchors

```
Original: "$42k-$100k from Upwork"
Fitness: "Lose 20-30 lbs in 12 weeks (Harvard Health)"
Business: "Average 6-figure earner works 35 hours/week (Inc. Magazine)"
```

### 3. Adjust Question Topics

```
Keep structure (23 questions), change content:
- Discovery (Q1-13): Goals, current situation, challenges
- Assessment (Q14-21): Skills, knowledge, readiness with benchmarks
- Commitment (Q22-26): Specific goals, interests, time commitment
```

### 4. Rebrand Design System

```
Colors: Change purple (#5B4FFF) to your brand color
Illustrations: Match your brand style (realistic, cartoon, abstract)
Emojis: Keep or remove based on brand tone
```

---

## CONCLUSION

This funnel succeeds because of:

1. **Psychological layering:** Each stage builds on the previous
2. **Salary anchoring:** Creates concrete aspiration ($42k-$100k)
3. **Positive reinforcement:** "83% readiness", "Perfect" result
4. **Low friction:** 5 min/day, email opt-out, back buttons
5. **Transparency:** Clear terms, money-back guarantee
6. **Personalization:** Shows user's goal throughout
7. **Urgency:** Countdown timer, specific timeline
8. **Social proof:** 600k users, testimonials, authority
9. **Pattern interrupts:** Interstitials maintain engagement
10. **Risk reversal:** 30-day guarantee removes fear

Implement these 10 elements and you'll have a high-converting quiz funnel.

---

**Ready to build?** Start with the MVP (Phase 1-3) and iterate based on user data.

**Questions?** Refer to:
- `coursiv-funnel-complete-spec.json` for machine-readable structure
- `COURSIV_FUNNEL_DETAILED_SPEC.md` for exact copy and visuals
- `coursiv-funnel-flow-diagram.md` for navigation map

**Good luck! 🚀**

