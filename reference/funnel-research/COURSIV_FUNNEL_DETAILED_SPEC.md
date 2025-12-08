# COURSIV FUNNEL - COMPLETE SPECIFICATION
## AI-Driven Income Growth Challenge

**Analysis Date:** November 29, 2025  
**Funnel URL:** https://coursiv.io/dynamic  
**Brand:** Coursiv (by Coursiv Limited, Limassol, Cyprus)  
**Vertical:** AI Education / Online Learning / Income Growth

---

## EXECUTIVE SUMMARY

Coursiv employs a sophisticated 30-step quiz funnel that segments users by demographics, assesses their current situation and aspirations, builds desire through salary anchoring and social proof, and converts them to a subscription-based AI education platform. The funnel promises income growth through AI skills acquisition with a specific, personalized timeline.

**Key Metrics:**
- **Total Steps:** 30 (23 quiz questions + 7 interstitials/conversion pages)
- **Estimated Time:** 3-5 minutes
- **Conversion Goal:** €19.99/4 weeks trial → €39.99/4 weeks recurring subscription
- **Main Value Prop:** "Become an AI Master and grow your income by learning AI skills in just 5-20 min/day"

---

## STEP-BY-STEP BREAKDOWN

### STEP 1: GENDER SELECTION (Entry Point)

**URL:** `https://coursiv.io/dynamic`

**Visual Description:**
- Clean white background with Coursiv logo (purple script font) centered at top
- Main headline in bold dark navy: "AI-DRIVEN INCOME GROWTH CHALLENGE"
- Subheadline in gray: "SELECT YOUR GENDER"
- Badge-style text: "1-MINUTE QUIZ" (sets time expectation)
- Two large cards side-by-side with purple rounded borders
- Left card: Illustrated young man in beige jacket, button text "MALE >"
- Right card: Illustrated young woman in gray top, button text "FEMALE >"
- Bottom disclaimer in small gray text with blue hyperlinks

**Exact Copy:**
```
AI-DRIVEN INCOME GROWTH CHALLENGE
SELECT YOUR GENDER
1-MINUTE QUIZ

[MALE >]  [FEMALE >]

By clicking "Male" or "Female", you agree with Terms and Conditions, Privacy Policy, Subscription Terms

Coursiv product by Coursiv Limited.
2025 ©All Rights Reserved.
```

**UX:**
- Click on either card auto-advances to next step
- No back button (entry point)
- Cards have subtle hover effect
- Illustrations are modern, friendly, semi-realistic digital art style

**Psychology:**
- **Low Barrier Entry:** Simple binary choice
- **Time Commitment Framing:** "1-minute" reduces perceived investment
- **Visual Appeal:** Friendly illustrations reduce intimidation
- **Immediate Engagement:** No explanation needed, instant clarity

**Technical:**
- Auto-progression on click
- Gender stored in URL parameter: `utm_gender=m`

---

### STEP 2: AGE SELECTION

**URL:** `https://coursiv.io/dynamic/square-select-landing?detected_locale=en&initial_locale=default&utm_gender=m`

**Visual Description:**
- Same header layout
- Main headline: "AI-DRIVEN INCOME GROWTH CHALLENGE"
- Subheadline changes to: "SELECT YOUR AGE"
- Four cards in 2x2 grid layout, all with purple rounded borders
- Each card shows illustrated male avatar matching the age bracket
- Top-left: Young professional (18-24)
- Top-right: Confident smiling man (25-34)
- Bottom-left: Mature man in black shirt (35-44)
- Bottom-right: Senior man with gray hair (45+)
- Each card has button text with arrow: "Age: XX-XX >"

**Exact Copy:**
```
AI-DRIVEN INCOME GROWTH CHALLENGE
SELECT YOUR AGE
1-MINUTE QUIZ

[Age: 18-24 >]    [Age: 25-34 >]

[Age: 35-44 >]    [Age: 45+ >]

By choosing your age, you agree with Terms and Conditions, Privacy Policy, Subscription Terms

Coursiv Limited. Limassol, Cyprus
```

**UX:**
- 2x2 grid for easy scanning
- Auto-progression on click
- Illustrations personalized to gender selected in Step 1
- Hover states on cards

**Psychology:**
- **Segmentation:** Allows for age-specific messaging later
- **Visual Relatability:** Users see themselves in the avatar
- **Consistency:** Same format as gender selection builds familiarity

---

### STEP 3: SOCIAL PROOF & AUTHORITY PAGE

**URL:** `https://coursiv.io/dynamic/quote-social-proof?block=square-select-landing`

**Visual Description:**
- Light purple/lavender background box
- Large purple text: "600 000+ people"
- Black text below: "already use Coursiv"
- White card with oversized quotation marks
- Quote in bold dark text
- Harvard Business Review logo with text
- Section below: "Latest AI tools mentioned in"
- Two rows of major media logos:
  - Row 1: TIME, WIRED
  - Row 2: TechCrunch (TC), The Guardian
  - Row 3: Forbes, The Economist
- Large purple CONTINUE button at bottom

**Exact Copy:**
```
600 000+ people
already use Coursiv

"AI Won't Replace Humans — But Humans With AI Will Replace Humans Without AI"

[Harvard Business Review logo]

Latest AI tools mentioned in

[TIME]  [WIRED]

[TC]  [The Guardian]

[Forbes]  [The Economist]

[CONTINUE]
```

**UX:**
- User must click CONTINUE to proceed
- No auto-progression
- No back button
- No quiz progress shown yet

**Psychology:**
- **Social Proof (Volume):** 600k+ users creates bandwagon effect
- **Authority:** Harvard Business Review quote establishes credibility
- **Media Validation:** Major publication logos build trust
- **Fear of Missing Out:** Implication of being left behind without AI
- **Pattern Interrupt:** Breaks from question format, increases engagement
- **Scarcity (Implied):** Large number suggests popularity/demand

**Design:**
- Clean, uncluttered layout
- Purple accent color reinforcement
- Recognizable brand logos
- Professional aesthetic

---

### STEP 4: QUIZ QUESTION 1/23 - MAIN GOAL

**URL:** `https://coursiv.io/dynamic/quiz-page?step=1`

**Visual Description:**
- Back arrow button (top left)
- Coursiv logo (center)
- Progress indicator (top right): "1 / 23"
- Horizontal progress bar (purple fill on gray background) - approximately 4% filled
- Question in large bold text: "What is your main goal?"
- Six vertical cards with illustrations and text
- Each card shows a different person/scenario matching the goal
- Cards have light gray background, rounded corners

**Options with Visuals:**
1. **Grow wealth** - Person holding fanned money
2. **Be my own boss** - Confident person in burgundy shirt with watch
3. **Financial freedom** - Person in suit with money/cards
4. **Travel the world** - Person with hat holding coffee cup
5. **Professional growth** - Person flexing muscles/celebrating
6. **Work-life balance** - Person (partial view)

**Exact Copy:**
```
← [Coursiv logo]                                    1 / 23
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

What is your main goal?

[Illustration]  Grow wealth

[Illustration]  Be my own boss

[Illustration]  Financial freedom

[Illustration]  Travel the world

[Illustration]  Professional growth

[Illustration]  Work-life balance
```

**UX:**
- Back button available
- Progress bar and counter visible
- Auto-progression on click
- Scroll required to see all options
- Each card is tappable/clickable area

**Psychology:**
- **Goal Setting:** Establishes user's primary motivation
- **Visual Variety:** Illustrated people create emotional connection
- **Aspiration Framing:** All options are positive/aspirational
- **Personalization Start:** Answer used later in funnel
- **Commitment Building:** First meaningful decision in quiz

---

### STEP 5: QUIZ QUESTION 2/23 - INCOME SOURCE

**URL:** `https://coursiv.io/dynamic/quiz-page?step=2`

**Visual Description:**
- Progress: "2 / 23" (approximately 9% progress bar)
- Question: "What income source are you most familiar with?"
- Three vertical cards with emoji icons (left side) and text (right side)
- Simple, clean layout

**Options:**
1. 💼 **Full-time job** (briefcase emoji)
2. 📝✏️ **Passive income** (notepad and pencil emojis)
3. 🤔 **Other** (thinking face emoji)

**Exact Copy:**
```
← [Coursiv]                                    2 / 23
▬▬▬▬▬▬▬

What income source are you most familiar with?

💼  Full-time job

📝  Passive income

🤔  Other
```

**UX:**
- Auto-progression
- Back button
- Simpler visual design than previous question

**Psychology:**
- **Current State Assessment:** Understanding starting point
- **Segmentation:** Different paths for different income types
- **Simplification:** Only 3 options reduces decision fatigue

---

### STEP 6: QUIZ QUESTION 3/23 - WORK SCHEDULE

**URL:** `https://coursiv.io/dynamic/quiz-page?step=3`

**Visual Description:**
- Progress: "3 / 23" (approximately 13% progress bar)
- Question: "What is your work schedule like?"
- Four vertical cards with emoji icons

**Options:**
1. 👔 **9 to 5** (necktie emoji)
2. 🌓 **Night shifts** (moon emoji)
3. 👌 **My hours are flexible** (OK hand emoji)
4. 🧶 **I'm retired** (yarn emoji)

**Exact Copy:**
```
← [Coursiv]                                    3 / 23
▬▬▬▬▬▬▬▬▬

What is your work schedule like?

👔  9 to 5

🌓  Night shifts

👌  My hours are flexible

🧶  I'm retired
```

**UX:**
- Auto-progression
- Back button
- Emoji-based visual cues

---

### STEP 7: QUIZ QUESTION 4/23 - PAIN POINTS (Multi-Select)

**URL:** `https://coursiv.io/dynamic/quiz-page?step=4`

**Visual Description:**
- Progress: "4 / 23" (approximately 17% progress bar)
- Question: "What about your current situation bothers you the most?"
- Subtext in gray: "Choose all that apply"
- Seven vertical buttons (chips/pills style)
- NEXT STEP button at bottom (enabled after any selection)

**Options:**
1. Feeling underpaid
2. Financial dependence
3. No free time
4. Routine
5. Constant worry
6. Toxic environment
7. Other

**Exact Copy:**
```
← [Coursiv]                                    4 / 23
▬▬▬▬▬▬▬▬▬▬▬▬

What about your current situation bothers you the most?

Choose all that apply

[ Feeling underpaid ]
[ Financial dependence ]
[ No free time ]
[ Routine ]
[ Constant worry ]
[ Toxic environment ]
[ Other ]

[NEXT STEP]
```

**UX:**
- **First multi-select question** - requires manual progression
- Selected items change to purple background with white text
- NEXT STEP button disabled until at least one selection
- Can select multiple options

**Psychology:**
- **Problem Agitation:** Highlights pain points to increase desire for solution
- **Permission to Select Multiple:** Allows users to fully express frustrations
- **Validation:** User feels understood
- **Commitment Building:** More investment than single-choice questions

---

### STEP 8: INTERSTITIAL - "BE HUMAN AND SMART AT ONCE"

**URL:** `https://coursiv.io/dynamic/quiz-page?step=5` (intermediate page)

**Visual Description:**
- Full-screen interstitial
- Illustration of person in modern style
- Headline and motivational copy
- Large purple CONTINUE button

**Exact Copy (Estimated):**
```
Be Human and Smart at Once

Learn to combine human creativity with AI efficiency to unlock new opportunities and achieve your goals faster.

[CONTINUE]
```

**UX:**
- Mandatory stop - must click to proceed
- No progress bar shown
- Creates pause in quiz flow

**Psychology:**
- **Pattern Interrupt:** Breaks quiz monotony
- **Value Proposition:** Reinforces benefit of AI learning
- **Micro-Break:** Reduces survey fatigue
- **Aspiration:** "Smart" positioning

---

### STEP 9: QUIZ QUESTION 5/23 - FINANCIAL SITUATION

**URL:** `https://coursiv.io/dynamic/quiz-page?step=5`

**Visual Description:**
- Progress: "5 / 23" (approximately 22% progress bar)
- Question: "How do you feel about your financial situation?"
- Three vertical cards with emojis

**Options:**
1. 😌 **I'm comfortable** (relieved face)
2. 🤕 **I would like to have more stability** (bandaged face)
3. 😐 **I'm struggling to meet my financial goals** (neutral face)

**Exact Copy:**
```
← [Coursiv]                                    5 / 23
▬▬▬▬▬▬▬▬▬▬▬▬▬▬

How do you feel about your financial situation?

😌  I'm comfortable

🤕  I would like to have more stability

😐  I'm struggling to meet my financial goals
```

**Psychology:**
- **Current State Assessment:** Understanding financial stress level
- **Emoji Emotional Cues:** Visual representation of feelings
- **Segmentation:** Allows for tailored messaging based on urgency

---

### STEP 10: INTERSTITIAL - "STABILITY IS WITHIN REACH"

**URL:** Between steps (interstitial page)

**Visual Description:**
- Illustration of person meditating (in plaid shirt, peaceful pose with hands in OK mudra)
- Headline in bold: "Stability Is Within Reach"
- Body copy with stat highlighted
- White background, centered layout
- Large purple CONTINUE button at bottom

**Exact Copy:**
```
Stability Is Within Reach

Learn the strategies to build a stable and secure financial future, starting today. Did you know that 63% of people feel anxious about their financial future? It's time to turn that anxiety into confidence.

[CONTINUE]
```

**UX:**
- Full-screen interstitial
- Must click CONTINUE
- No back button
- No progress shown

**Psychology:**
- **Problem Agitation:** 63% statistic normalizes financial anxiety
- **Solution Promise:** "Stability is within reach" creates hope
- **Authority:** Research citation (implied)
- **Transformation Framing:** "Turn anxiety into confidence"
- **Pattern Interrupt:** Visual break with meditation imagery
- **Emotional Connection:** Addresses user's likely pain point directly

---

### STEP 11: QUIZ QUESTION 6/23 - INCOME GOALS

**URL:** `https://coursiv.io/dynamic/quiz-page?step=6`

**Visual Description:**
- Progress: "6 / 23" (approximately 26% progress bar)
- Question: "What annual income level do you want to achieve?"
- Three simple text-based cards (no emojis)
- Decorative illustration of smiling person with wallet (bottom right corner)

**Options:**
1. $30,000 – $50,000
2. $50,000 – $100,000
3. More than $100,000

**Exact Copy:**
```
← [Coursiv]                                    6 / 23
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

What annual income level do you want to achieve?

[ $30,000 – $50,000 ]

[ $50,000 – $100,000 ]

[ More than $100,000 ]

                                    [Illustration: person with wallet]
```

**Psychology:**
- **Aspiration Setting:** Concrete income goals
- **Anchoring:** High numbers ($100k+) make program seem valuable
- **Goal Specificity:** Helps user visualize outcome

---

### STEP 12: QUIZ QUESTION 7/23 - WORK CONTROL

**URL:** `https://coursiv.io/dynamic/quiz-page?step=7`

**Visual Description:**
- Progress: "7 / 23" (approximately 30% progress bar)
- Question: "Do you wish you had more control over your work hours and location?"
- Three cards with emoji icons

**Options:**
1. 👍 **Yes** (thumbs up)
2. 👎 **No** (thumbs down)
3. 🤔 **Hm, not sure** (thinking face)

**Exact Copy:**
```
← [Coursiv]                                    7 / 23
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

Do you wish you had more control over your work hours and location?

👍  Yes

👎  No

🤔  Hm, not sure
```

**Psychology:**
- **Freedom Aspiration:** Taps into desire for autonomy
- **Remote Work Appeal:** Location independence is attractive benefit
- **Pain Point:** Lack of control is common frustration

---

### STEP 13: QUIZ QUESTION 8/23 - AI AUTOMATION

**URL:** `https://coursiv.io/dynamic/quiz-page?step=8`

**Visual Description:**
- Progress: "8 / 23" (approximately 35% progress bar)
- Question: "Would you enjoy a job where something else does the routine work for you?"
- Four text-based cards
- Decorative illustration of person with laptop (bottom right)

**Options:**
1. It's a dream
2. Somewhat
3. Maybe
4. Not necessarily

**Exact Copy:**
```
← [Coursiv]                                    8 / 23
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

Would you enjoy a job where something else does the routine work for you?

[ It's a dream ]

[ Somewhat ]

[ Maybe ]

[ Not necessarily ]

                                [Illustration: person with laptop]
```

**Psychology:**
- **AI Value Prop:** Subtly introduces AI automation benefit
- **Dream Job Framing:** "It's a dream" option is aspirational
- **Desire Building:** Makes users think about ideal work scenario

---

### STEP 14: QUIZ QUESTION 9/23 - (INFERRED)

**Note:** Question not captured but likely continues pattern of work/income questions

---

### STEP 15: QUIZ QUESTION 10/23 - JOB INTERESTS

**URL:** `https://coursiv.io/dynamic/quiz-page?step=10`

**Visual Description:**
- Progress: "10 / 23" (approximately 43% progress bar)
- Question: "Would you enjoy a job that matches your interests?"
- Four text-based cards
- Decorative illustration of businessman in suit (bottom right)

**Options:**
1. Absolutely
2. Somewhat
3. Maybe
4. Not necessarily

**Exact Copy:**
```
← [Coursiv]                                    10 / 23
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

Would you enjoy a job that matches your interests?

[ Absolutely ]

[ Somewhat ]

[ Maybe ]

[ Not necessarily ]

                                [Illustration: suited businessman]
```

**Psychology:**
- **Interest Alignment:** Taps into desire for fulfilling work
- **Passion Economy:** Suggests ability to monetize interests

---

### STEP 16: QUIZ QUESTION 11/23 - DIGITAL BUSINESS KNOWLEDGE

**URL:** `https://coursiv.io/dynamic/quiz-page?step=11`

**Visual Description:**
- Progress: "11 / 23" (approximately 48% progress bar)
- Question: "How much do you know about digital business?"
- Three cards with emoji icons

**Options:**
1. 🤓 **I'm well-informed about it** (nerd face)
2. 🙂 **I'm familiar with some aspects** (smiling face)
3. 😞 **My knowledge is limited** (disappointed face)

**Exact Copy:**
```
← [Coursiv]                                    11 / 23
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

How much do you know about digital business?

🤓  I'm well-informed about it

🙂  I'm familiar with some aspects

😞  My knowledge is limited
```

**Psychology:**
- **Self-Assessment:** Helps user realize knowledge gap
- **Educational Need:** Sets up value of courses

---

### STEP 17: QUIZ QUESTION 12/23 - SIDE INCOME EXPLORATION

**URL:** `https://coursiv.io/dynamic/quiz-page?step=12`

**Visual Description:**
- Progress: "12 / 23" (approximately 52% progress bar)
- Question: "Have you ever explored ways to earn money beyond regular work?"
- Three cards with emojis/icons

**Options:**
1. 💸 **Yes, occasional side gigs** (money with wings)
2. 🔧 **No, just a regular job** (wrench and hammer)
3. 📝✏️ **Freelanced for extra income** (notepad and pencil)

**Exact Copy:**
```
← [Coursiv]                                    12 / 23
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

Have you ever explored ways to earn money beyond regular work?

💸  Yes, occasional side gigs

🔧  No, just a regular job

📝  Freelanced for extra income
```

**Psychology:**
- **Experience Assessment:** Gauges entrepreneurial inclination
- **Validation:** Acknowledges different income paths
- **Future Framing:** Suggests side income is achievable goal

---

### STEPS 18-19: ADDITIONAL QUIZ QUESTIONS (INFERRED)

**Note:** Likely 2-3 more questions following similar patterns

---

### STEP 20: QUIZ QUESTION 15/23 - CONTENT WRITING SKILL

**URL:** `https://coursiv.io/dynamic/quiz-page?step=15`

**Visual Description:**
- Progress: "15 / 23" (approximately 65% progress bar)
- Question: "Rate your knowledge in content writing"
- **Salary benchmark** displayed above options: "According to Upwork, freelance content writer makes around $42,000 annually."
- Four cards with emoji icons

**Options:**
1. 🤩 **Expert** (star eyes face)
2. 😏 **Proficient** (smirking face)
3. 🤔 **Intermediate** (thinking face)
4. 😬 **Novice** (grimacing face)

**Exact Copy:**
```
← [Coursiv]                                    15 / 23
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

Rate your knowledge in content writing

According to Upwork, freelance content writer makes around $42,000 annually.

🤩  Expert

😏  Proficient

🤔  Intermediate

😬  Novice
```

**UX:**
- Salary stat provides context
- Four-level skill rating
- Auto-progression

**Psychology:**
- **Salary Anchoring:** $42k creates income aspiration
- **Authority:** Upwork citation adds credibility
- **Skill Gap Awareness:** Most will select Intermediate/Novice
- **Income Potential:** Suggests concrete earnings from skill

---

### STEP 21: QUIZ QUESTION 16/23 - DIGITAL MARKETING SKILL

**URL:** `https://coursiv.io/dynamic/quiz-page?step=16`

**Visual Description:**
- Progress: "16 / 23" (approximately 70% progress bar)
- Question: "Rate your knowledge in digital marketing"
- **Higher salary benchmark:** "According to Upwork, digital marketer makes around $100,000 annually."
- Four cards with party/celebration emojis

**Options:**
1. 🥳 **Expert** (partying face)
2. 😜 **Proficient** (winking tongue out)
3. 🤔 **Intermediate** (thinking face)
4. 😬 **Novice** (grimacing face)

**Exact Copy:**
```
← [Coursiv]                                    16 / 23
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

Rate your knowledge in digital marketing

According to Upwork, digital marketer makes around $100,000 annually.

🥳  Expert

😜  Proficient

🤔  Intermediate

😬  Novice
```

**Psychology:**
- **Higher Salary Anchor:** $100k creates strong aspiration
- **Progressive Anchoring:** Increasing from $42k to $100k
- **Income Potential Stacking:** Building desire through salary examples
- **Skill Assessment:** Makes user aware of high-value skills

---

### STEPS 22-24: ADDITIONAL SKILL QUESTIONS (17-19 / 23)

**Pattern:** Likely similar skill rating questions for other high-income fields

---

### STEP 25: QUIZ QUESTION 20/23 - FOCUS ABILITY

**URL:** `https://coursiv.io/dynamic/quiz-page?step=20`

**Visual Description:**
- Progress: "20 / 23" (approximately 87% progress bar)
- Question: "Do you find it easy to maintain your focus?"
- Four cards with emojis

**Options:**
1. 😌 **Yes, I can easily stay focused**
2. 😅 **Mostly, but I sometimes get distracted**
3. 😢 **I often struggle**
4. 😬 **No, I frequently procrastinate**

**Exact Copy:**
```
← [Coursiv]                                    20 / 23
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

Do you find it easy to maintain your focus?

😌  Yes, I can easily stay focused

😅  Mostly, but I sometimes get distracted

😢  I often struggle

😬  No, I frequently procrastinate
```

**Psychology:**
- **Self-Awareness:** Makes user think about challenges
- **Pain Point:** Focus struggles are common, creates need for structure
- **Solution Fit:** Program can help with focus issues

---

### STEP 26: INTERSTITIAL - AI-DRIVEN INCOME GROWTH PROFILE

**URL:** Between Q20 and Q21

**Visual Description:**
- White background
- Large headline: "Here's Your AI-Driven Income Growth Profile"
- Card with light background containing:
  - "Readiness score" label with "Result: Perfect" badge
  - Horizontal gradient progress bar (red→yellow→green)
  - Marker at "Moderate" position
  - Labels: LOW - INTERMEDIATE - HIGH
- Thumbs up emoji section:
  - "👍 Impressive score to succeed in AI"
  - Subtext: "A study in 2022 found that workers who use AI tools in their work have 10-20% higher hourly rates than those who don't."
- Profile breakdown with icons:
  - 🎯 Motivation: **High**
  - ⭐ Potential: **High**
  - 🕐 Focus: **Limited**
  - 💻 AI Knowledge: **Low**
- Illustration of confident person (right side)
- Purple CONTINUE button

**Exact Copy:**
```
Here's Your AI-Driven Income Growth Profile

Readiness score                      Result: Perfect

              [Moderate]
[▬▬▬▬▬▬▬▬●▬▬▬▬▬▬▬▬▬▬▬▬▬]
LOW         INTERMEDIATE         HIGH

👍 Impressive score to succeed in AI

A study in 2022 found that workers who use AI tools in their work have 10-20% higher hourly rates than those who don't.

🎯 Motivation
   High

⭐ Potential
   High

🕐 Focus
   Limited

💻 AI Knowledge
   Low

[Illustration]

[CONTINUE]
```

**UX:**
- Full-screen interstitial
- Visual profile summary
- Must click to proceed
- No back button

**Psychology:**
- **Personalization:** Custom profile based on answers
- **Positive Reinforcement:** "Perfect" result, high motivation/potential
- **Statistical Proof:** 10-20% higher rates statistic
- **Gap Identification:** Shows AI Knowledge as "Low" (creates need)
- **Balanced Framing:** Mix of strengths and areas to improve
- **Achievement Unlocked Feeling:** Getting a "profile" feels valuable
- **Pattern Interrupt:** Major pause before final questions
- **Social Proof:** Research citation

---

### STEP 27: QUIZ QUESTION 22/23 - SPECIAL GOAL

**URL:** `https://coursiv.io/dynamic/quiz-page?step=22`

**Visual Description:**
- Progress: "22 / 23" (approximately 96% progress bar - almost complete!)
- Question: "Is there something special you wish to achieve?"
- Subtext in gray: "You're more likely to reach your goal if you have something important to aim for"
- Six vertical cards with emoji icons

**Options:**
1. 🏠 **Buy a house** (house emoji)
2. 💍 **A perfect wedding** (ring emoji)
3. ✈️ **Vacation** (airplane emoji)
4. 🚗 **Buy a car** (car emoji)
5. 🥂 **Worry-free retirement** (champagne glasses)
6. **Other**

**Exact Copy:**
```
← [Coursiv]                                    22 / 23
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

Is there something special you wish to achieve?

You're more likely to reach your goal if you have something important to aim for

🏠  Buy a house

💍  A perfect wedding

✈️  Vacation

🚗  Buy a car

🥂  Worry-free retirement

[ Other ]
```

**UX:**
- Near end of quiz (builds anticipation)
- Subtext provides motivational framing
- Visual emojis for quick recognition

**Psychology:**
- **Emotional Anchoring:** Connects abstract income goal to concrete life goal
- **Motivation Enhancement:** Research-backed subtext about goal-setting
- **Visualization:** Helps user imagine outcome
- **Personalization:** This goal will be shown in results pages
- **Commitment Device:** Declaring a specific goal increases follow-through

---

### STEP 28: QUIZ QUESTION 18/23 - FIELDS OF INTEREST (Multi-Select)

**URL:** `https://coursiv.io/dynamic/quiz-page?step=18`

**Visual Description:**
- Progress: "18 / 23" (approximately 78% progress bar)
- Question: "What fields would you personally like to try yourself in?"
- Subtext: "Choose all that apply"
- Ten vertical buttons with emoji icons
- Purple NEXT STEP button at bottom (enabled after selection)
- May require scrolling to see all options

**Options:**
1. 🎨 **Graphic Design**
2. ✏️ **Content Creation**
3. 💻 **Web Development**
4. 🤖 **Artificial Intelligence**
5. ⭐ **Digital Marketing**
6. **Social Media Management**
7. **Video Editing**
8. **Photography**
9. **E-commerce**
10. **Consulting**

**Exact Copy:**
```
← [Coursiv]                                    18 / 23
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

What fields would you personally like to try yourself in?

Choose all that apply

🎨  Graphic Design
✏️  Content Creation
💻  Web Development
🤖  Artificial Intelligence
⭐  Digital Marketing
    Social Media Management
    Video Editing
    Photography
    E-commerce
    Consulting

[NEXT STEP]
```

**UX:**
- Multi-select interaction
- Scrollable list
- Selected items turn purple
- NEXT STEP enabled after any selection

**Psychology:**
- **Personalization:** Allows expression of multiple interests
- **Curriculum Preview:** Shows breadth of available courses
- **Investment:** More clicks = more commitment
- **Empowerment:** "Choose all that apply" feels generous

---

### STEP 29: QUIZ QUESTION 23/23 - TIME COMMITMENT

**URL:** `https://coursiv.io/dynamic/quiz-page?step=23`

**Visual Description:**
- Progress: "23 / 23" (100% progress bar - complete!)
- Question: "How much time are you ready to spend to achieve your goal?"
- Four simple text cards
- Decorative illustration of person celebrating/fist pump (bottom right)

**Options:**
1. 5 min/day
2. 10 min/day
3. 15 min/day
4. 20 min/day

**Exact Copy:**
```
← [Coursiv]                                    23 / 23
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

How much time are you ready to spend to achieve your goal?

[ 5 min/day ]

[ 10 min/day ]

[ 15 min/day ]

[ 20 min/day ]

                        [Illustration: celebrating person]
```

**UX:**
- FINAL quiz question
- Progress bar filled 100%
- Low time options (reduces friction)
- Celebrating illustration creates positive anticipation

**Psychology:**
- **Commitment Framing:** "How much time are you READY to spend"
- **Low Barrier:** Minimum is only 5 min/day
- **Reasonable Range:** All options are achievable
- **Completion Effect:** 23/23 creates sense of accomplishment
- **Anticipation:** User knows results are coming next

---

### STEP 30: PERSONALIZED TIMELINE RESULTS

**URL:** `https://coursiv.io/dynamic/personal-plan-page`

**Visual Description:**
- Clean white background
- Headline: "Your Personal AI-Driven Income Growth Challenge"
- Subheadline: "Based on your answers, we expect you to gain necessary skills of"
- Large bold text: "AI Master by Jan, 2026" (underlined)
- Goal badge: "Your goal: Buy a house" (light gray pill)
- Progress chart in light gray card:
  - Bar chart showing progression over 4 months
  - X-axis: Nov, Dec, Jan, Feb
  - Y-axis: 0, 50%, 100%
  - Bars: gradient from red (Nov) → orange (Dec) → light green (Jan) → dark green (Feb)
  - Labels: "Beginner" (Nov bar), "AI Master" (Feb bar)
- Small gray disclaimer: "Individual results may vary."
- Large purple CONTINUE button at bottom

**Exact Copy:**
```
Your Personal AI-Driven Income Growth Challenge

Based on your answers, we expect you to gain necessary skills of

AI Master by Jan, 2026

Your goal: Buy a house

[Chart showing progression:]
100%                                      AI Master
                                             ▓
                                             ▓
 50%                        ▒               ▓
                            ▒               ▓
                  ▒         ▒               ▓
                  ▒         ▒               ▓
  0% Beginner    ▒         ▒               ▓
       ▒          ▒         ▒               ▓
     Nov        Dec       Jan             Feb

Individual results may vary.

[CONTINUE]
```

**UX:**
- Full-screen results page
- Must click CONTINUE
- Personalized with user's goal
- Visual timeline creates concreteness

**Psychology:**
- **Specificity:** Exact month (Jan 2026) makes goal feel real
- **Timeline Visualization:** Bar chart shows clear progression
- **Personalized Goal:** Displays user's selected special goal
- **Achievability:** Short timeline (2-3 months) feels attainable
- **Beginner Label:** Shows starting point, validates user
- **Master Label:** Aspirational end state
- **Disclaimer:** Legal protection while maintaining promise
- **Investment:** User has completed all 23 questions, high sunk cost

---

### STEP 31: LOADING PAGE WITH SOCIAL PROOF

**URL:** `https://coursiv.io/dynamic/magic-page`

**Visual Description:**
- White background
- Top section: Animated circular progress loader showing percentage (39%, 57%, etc.)
- Text below loader: "Creating your personal challenge..."
- Light purple/lavender box below containing:
  - Large purple text: "600,000+ people"
  - Black text: "have chosen Coursiv"
- White testimonial card with:
  - 5 green Trustpilot stars
  - Bold title: "The experience is topnotch"
  - Name: "Jeremy" (aligned right)
  - Quote text
- Attribution: "Featured reviews from Trustpilot."

**Exact Copy:**
```
                39%

Creating your personal challenge...


600,000+ people
have chosen Coursiv

★★★★★  The experience is topnotch         Jeremy

"The AI knowledge I've gained from the program can be immediately applied in my job. I've acquired skills that enhance my efficiency and effectiveness at work."

Featured reviews from Trustpilot.
```

**UX:**
- Animated loader (percentage increases automatically)
- No interaction required
- Loads for approximately 10-15 seconds
- Auto-progresses to next page

**Psychology:**
- **Anticipation Building:** Loader creates excitement for results
- **Social Proof:** 600k users reinforces popularity
- **Testimonial:** Real benefit story ("immediately applied in my job")
- **Credibility:** Trustpilot attribution
- **Time on Page:** Forces engagement while "creating" personalized plan
- **Zeigarnik Effect:** Incomplete progress creates desire to see results

**Technical:**
- Simulated progress (not real processing)
- Typically 10-20 second delay

---

### STEP 32: EMAIL PERMISSION REQUEST

**URL:** `https://coursiv.io/dynamic/email-page`

**Visual Description:**
- Clean white background
- Headline in large bold text with purple highlight on "AI & Income Growth"
- Two buttons: primary (purple) and secondary (gray text)

**Exact Copy:**
```
Do you want to receive emails with AI & Income Growth tips and product updates?


[YES, I'M IN!]

I DON'T WANT TO RECEIVE TIPS OR UPDATES
```

**UX:**
- Binary choice
- Both options allow progression (opt-out available!)
- Primary button is large and prominent
- Secondary is smaller, gray text
- No back button
- No progress indicator

**Psychology:**
- **Value Framing:** "tips and product updates" frames emails as valuable
- **Purple Highlight:** "AI & Income Growth" emphasizes core benefit
- **Opt-In Bias:** Primary button is "YES"
- **Permission-Based:** Respects user choice
- **Low Pressure:** Opt-out clearly available
- **Transparency:** Builds trust by being explicit

---

### STEP 33: READINESS LEVEL RESULTS

**URL:** `https://coursiv.io/dynamic/pathway-page`

**Visual Description:**
- White background
- Headline: "Your 4-week AI-Driven Income Growth Challenge is ready!"
- Card with light gray background:
  - Title: "Your readiness level"
  - Curved line graph showing progression
  - Start point labeled "Now" (red dot, bottom left)
  - End point labeled "After 4 weeks" (green dot, top right)
  - Smooth curve from red → orange → yellow → green
  - X-axis labels: Week 1, Week 2, Week 3, Week 4
  - Y-axis implied (no numbers)
- Disclaimer: "This chart is for illustrative purposes only"
- Large purple CONTINUE button

**Exact Copy:**
```
Your readiness level

            After 4 weeks ●
                         /
                       /
                     /
                   /
                 /
               /
    Now ●    /
           
    Week 1  Week 2  Week 3  Week 4

This chart is for illustrative purposes only


Your 4-week AI-Driven Income Growth Challenge is ready!

[CONTINUE]
```

**UX:**
- Smooth curved graph (not bar chart)
- Visual progression representation
- 4-week timeline commitment
- Must click CONTINUE

**Psychology:**
- **Visual Progress:** Curve shows smooth, achievable growth
- **Time-Bounded:** 4 weeks feels manageable
- **Readiness Framing:** User is "ready" (not starting from zero)
- **Color Psychology:** Red→green shows improvement
- **Anticipation:** "Challenge is ready!" creates excitement
- **Commitment Preview:** Shows what commitment period looks like

---

### STEP 34: FINAL PAYWALL / SELLING PAGE

**URL:** `https://coursiv.io/dynamic/selling-page`

**STICKY HEADER:**
```
Discount expires in                    [GET MY PLAN]
    09:57
  min    sec
```

**SECTION 1: BEFORE/AFTER COMPARISON**

Visual: Two side-by-side boxes labeled "Now" and "Goal"

**Now (Left Side):**
- Illustration: Person covering face (frustrated/stressed) in brown sweater
- **AI skills:** Gradient bar at "Moderate" (red→yellow→green, marker at middle)
- **Income Potential:** Blue progress bar at "Limited" (about 40%)

**Goal (Right Side):**
- Illustration: Confident smiling person in checkered shirt, arms crossed
- Money indicators floating: "+35%", "+45%", "+72%" in green bubbles
- **AI skills:** Gradient bar at "High" (marker near green end)
- **Income Potential:** Blue progress bar at "High" (about 90%)

**Disclaimer:** "This is not a guarantee or promise of results."

**Exact Copy:**
```
Now                                 Goal

[Frustrated person]           [Confident person]
                              +35%  +45%  +72%

AI skills                          AI skills
[●═══════════]                     [═════════●══]
Moderate                           High

Income Potential                   Income Potential
[●════════]                         [══════════●]
Limited                            High

This is not a guarantee or promise of results.
```

---

**SECTION 2: READINESS RECOMMENDATION**

Visual: Large text with green percentage, light box below with lightbulb icon

**Exact Copy:**
```
Your readiness: 83%

💡  4-week program is enough for you to start your AI journey
```

---

**SECTION 3: TESTIMONIALS**

Three testimonial cards stacked vertically, each with:
- Sunglasses emoji avatar
- @ username
- 5 orange/gold stars (★★★★★)
- Quoted testimonial text

**Testimonial 1:**
```
😎 @der_kennndy1

★★★★★

"The learning is straightforward and has all the necessary information! It serves as a great starting point if you are new to AI."
```

**Testimonial 2:**
```
😎 @dexter_brechtefeld

★★★★★

"Coursiv's wide range of educational materials and interactive features enables users of all levels to easily understand complicated AI principles. Kudos to Coursiv for pioneering a new approach to AI learning!"
```

**Testimonial 3:**
```
😎 @pattykivuva

★★★★★

"Coursiv has simplified understanding complex topics and enhancing my skills across subjects. The customized learning tailored to my needs has significantly boosted my progress towards achieving my goals."
```

---

**SECTION 4: PRICING & CTA**

Visual: White card with checkbox and two CTA buttons

**Exact Copy:**
```
☐ I agree to the Terms and Conditions, Privacy Policy, Subscription Policy and Refund Policy

[GET MY PLAN]

By clicking "Get My Plan", you agree to automatic subscription renewal to Coursiv: first 4 weeks at €19.99, then €39.99 every 4 weeks (both excluding taxes) until you cancel. You can cancel anytime via Subscription Terms

Coursiv Limited. Limassol, Cyprus
```

---

**SECTION 5: MONEY-BACK GUARANTEE**

Visual: Green badge icon with checkmark, light green background box

**Exact Copy:**
```
[Green badge with ✓]

Money-Back Guarantee

We are so confident in our service that we are ready to offer a full refund within 30 days of your initial purchase OR before the end of your first subscription period, whichever comes first. Additional terms and conditions apply.

For full details, please review our complete refund policy here.
```

---

**SECTION 6: MOBILE APP SHOWCASE**

Visual: Three mobile device mockups showing app interface

**Exact Copy:**
```
Access Coursiv anywhere using your mobile device

[Device 1: Schedule view]
[Device 2: Recommended courses]
[Device 3: Mastering progress]
```

---

## DESIGN SYSTEM

### Color Palette
- **Primary Purple:** #5B4FFF (Coursiv brand, CTAs, progress bars)
- **Light Purple:** #E8E6FF (backgrounds, highlights)
- **Success Green:** #50C878 (positive indicators, progress end-state)
- **Warning Orange/Yellow:** #FFA500 (mid-range progress)
- **Alert Red:** #DC2626 (low state, "Now" in comparisons)
- **Dark Navy:** #1A1A2E (headlines, primary text)
- **Medium Gray:** #6B7280 (subtexts, disclaimers)
- **Light Gray:** #F3F4F6 (card backgrounds)
- **White:** #FFFFFF (page background)

### Typography
- **Headlines:** Bold, 32-40px, Dark Navy
- **Questions:** Bold, 24-28px, Dark Navy
- **Options:** Medium, 18-20px, Dark Navy
- **Subtexts:** Regular, 14-16px, Medium Gray
- **CTAs:** Bold, 18px, White (on purple buttons)

### Component Styles

**Option Cards:**
- Background: Light gray (#F3F4F6)
- Border Radius: 12px
- Padding: 20px 24px
- Hover: Slight shadow, scale 1.02
- Selected: Purple background, white text
- Transition: 200ms ease

**CTA Buttons:**
- Background: Purple gradient
- Color: White
- Border Radius: 12px
- Padding: 16px 32px
- Font Weight: Bold
- Shadow: 0 4px 12px rgba(91,79,255,0.3)
- Hover: Slight lift, darker shadow

**Progress Bar:**
- Height: 8px
- Background: #E5E7EB
- Fill: Purple gradient
- Border Radius: 4px
- Smooth animation on updates

---

## CONVERSION PSYCHOLOGY TACTICS

### 1. **Countdown Timer Urgency**
- **Location:** Final paywall (sticky header)
- **Copy:** "Discount expires in 09:57"
- **Psychology:** Creates time pressure, fear of missing deal
- **Principle:** Scarcity / Loss Aversion

### 2. **Social Proof - Volume**
- **Locations:** Quote page, Loading page
- **Copy:** "600,000+ people have chosen Coursiv"
- **Psychology:** Bandwagon effect, safety in numbers
- **Principle:** Social Proof / Popularity

### 3. **Authority Signals**
- **Location:** Quote page
- **Elements:** Harvard Business Review quote + 6 major media logos
- **Psychology:** Expert endorsement, credibility transfer
- **Principle:** Authority / Trust

### 4. **Salary Anchoring**
- **Locations:** Q15 ($42k), Q16 ($100k)
- **Copy:** "According to Upwork, [skill] makes around $X annually"
- **Psychology:** High income potential creates aspiration
- **Principle:** Anchoring / Income Aspiration

### 5. **Before/After Transformation**
- **Location:** Final paywall
- **Visual:** Frustrated person vs Confident person with income percentages
- **Psychology:** Visual contrast shows dramatic improvement
- **Principle:** Transformation Promise / Hope

### 6. **Readiness Score Gamification**
- **Locations:** Profile page, Final paywall
- **Copy:** "Your readiness: 83%" with "Result: Perfect"
- **Psychology:** Positive reinforcement, user feels capable
- **Principle:** Self-Efficacy / Gamification

### 7. **Statistical Authority**
- **Locations:** Stability interstitial, Profile page
- **Stats:** "63% anxious about finances", "10-20% higher rates with AI"
- **Psychology:** Research-backed claims increase trust
- **Principle:** Authority / Problem Agitation

### 8. **Personalized Timeline**
- **Location:** Results page
- **Copy:** "AI Master by Jan, 2026" + personalized goal
- **Psychology:** Specific date makes outcome feel real
- **Principle:** Specificity / Goal Visualization

### 9. **Low Time Commitment**
- **Location:** Q23, Final recommendation
- **Copy:** "5 min/day" as minimum option
- **Psychology:** Reduces perceived effort barrier
- **Principle:** Friction Reduction

### 10. **Risk Reversal Guarantee**
- **Location:** Final paywall
- **Copy:** "30-day money-back OR before end of first subscription period"
- **Psychology:** Removes financial risk
- **Principle:** Risk Reversal / Trust

### 11. **Testimonial Stacking**
- **Location:** Paywall
- **Count:** 3 detailed 5-star reviews
- **Psychology:** Multiple perspectives build credibility
- **Principle:** Social Proof / Trust

### 12. **Mobile-First Showcase**
- **Location:** Bottom of paywall
- **Visual:** 3 device mockups with app screens
- **Psychology:** Makes product tangible, shows ease of use
- **Principle:** Product Demonstration / Accessibility

### 13. **Micro-Commitment Ladder**
- **Location:** Throughout quiz (23 questions)
- **Mechanism:** Each answer is a small commitment
- **Psychology:** Builds consistency, harder to abandon
- **Principle:** Foot-in-the-Door / Consistency

### 14. **Pattern Interrupts**
- **Locations:** Every 3-5 questions
- **Types:** Motivational interstitials, profile results
- **Psychology:** Breaks monotony, re-engages attention
- **Principle:** Zeigarnik Effect / Engagement Maintenance

### 15. **Expert Recommendation**
- **Location:** Final paywall
- **Copy:** "4-week program is enough for you to start your AI journey"
- **Psychology:** Feels like personalized expert advice
- **Principle:** Authority / Personalization

### 16. **Email Opt-Out Transparency**
- **Location:** Email permission page
- **Feature:** "I DON'T WANT TO RECEIVE" option clearly available
- **Psychology:** Builds trust through transparency
- **Principle:** Honesty / Respect for User

### 17. **Progress Visualization**
- **Locations:** Results pages, Charts
- **Visuals:** Bar charts, curved lines, gradient progressions
- **Psychology:** Makes abstract improvement concrete
- **Principle:** Visualization / Hope

### 18. **Dual CTA Strategy**
- **Location:** Paywall
- **Placement:** Sticky top + bottom after content
- **Psychology:** Captures high-intent (top) and convinced (bottom) users
- **Principle:** Conversion Optimization

---

## COMPLETE FUNNEL FLOW

```
Entry: coursiv.io/dynamic
    ↓
Gender Selection (MALE/FEMALE)
    ↓
Age Selection (4 age brackets)
    ↓
Social Proof Page (600k users, Harvard quote, media logos)
    ↓
─────────── QUIZ BEGINS (23 Questions) ───────────
    ↓
Q1: Main goal (6 illustrated options)
    ↓
Q2: Income source (3 emoji options)
    ↓
Q3: Work schedule (4 emoji options)
    ↓
Q4: Pain points (multi-select, 7 options)
    ↓
💡 INTERSTITIAL: "Be Human and Smart at Once"
    ↓
Q5: Financial situation (3 emoji options)
    ↓
💡 INTERSTITIAL: "Stability Is Within Reach" (63% stat)
    ↓
Q6: Income goals ($30-100k+)
    ↓
Q7: Work control desire (Yes/No/Not sure)
    ↓
Q8: AI automation appeal (4 options)
    ↓
Q9: [Additional question]
    ↓
Q10: Job interest alignment (4 options)
    ↓
Q11: Digital business knowledge (3 emoji options)
    ↓
Q12: Side income exploration (3 emoji options)
    ↓
Q13-14: [Additional questions]
    ↓
Q15: Content writing skill ($42k anchor, 4 levels)
    ↓
Q16: Digital marketing skill ($100k anchor, 4 levels)
    ↓
Q17-19: [Additional skill questions]
    ↓
Q20: Focus ability (4 emoji options)
    ↓
💡 INTERSTITIAL: AI Growth Profile (Readiness: Moderate/Perfect, breakdown)
    ↓
Q21: [Additional question]
    ↓
Q22: Special goal (house/wedding/car/vacation/retirement)
    ↓
Q18: Fields of interest (multi-select, 10 options)
    ↓
Q23: Time commitment (5/10/15/20 min per day)
    ↓
─────────── QUIZ ENDS ───────────
    ↓
💡 RESULTS: Personal Timeline (AI Master by Jan 2026 + goal)
    ↓
⏳ LOADING: "Creating challenge..." (with testimonial)
    ↓
✉️ EMAIL PERMISSION: Yes I'm In / No opt-out
    ↓
💡 RESULTS: Readiness Level (curved progress chart)
    ↓
💰 PAYWALL: Before/After + Testimonials + Pricing + Guarantee
    ↓
[Conversion or Exit]
```

---

## KEY DIFFERENTIATORS VS COPYMIND

### Similarities:
1. Quiz-based funnel structure
2. Gender + Age segmentation upfront
3. Social proof with large user numbers
4. Authority quote from respected source
5. Pattern interrupt interstitials
6. Personalized results pages
7. Email capture before paywall
8. Subscription pricing model
9. Money-back guarantee
10. Countdown timer urgency
11. Visual before/after comparison
12. Back buttons on quiz questions
13. Progress indicators throughout

### Unique to Coursiv:
1. **Income-Focused:** Explicit salary benchmarking ($42k, $100k)
2. **Shorter Quiz:** 23 questions vs 25-30
3. **Skill Assessment:** Rates current knowledge in multiple skills
4. **Field Selection:** Multi-select of 10+ career fields
5. **Email Opt-Out:** Allows users to decline emails
6. **Single Plan:** Recommends one 4-week plan (not 3 tiers)
7. **Mobile App Showcase:** Shows actual app interface
8. **Professional Tone:** More business/career-oriented
9. **Upwork Citations:** Uses familiar platform for salary credibility
10. **Readiness Curve:** Smooth progression chart (not bars)
11. **Lower Entry Price:** €19.99 trial vs multiple tier options
12. **Explicit Time Frame:** "Jan 2026" creates concrete deadline

### Unique to Copymind:
1. **Psychology-Focused:** Decision-making assessment
2. **Personality Profiling:** Deep psychological insights
3. **More Questions:** Longer, more thorough assessment
4. **Required Email:** No opt-out option
5. **Three Pricing Tiers:** 1/4/12 week options
6. **AI Twin Concept:** More futuristic positioning
7. **Decision-Making Focus:** Not income-focused

---

## CONVERSION OPTIMIZATIONS EMPLOYED

### Friction Reduction:
- ✅ "1-minute quiz" promise (actually 3-5 min, but low expectation)
- ✅ Auto-progression on most questions
- ✅ Visual options (less reading required)
- ✅ Back buttons available (reduces anxiety)
- ✅ Low time commitment options (5 min/day minimum)
- ✅ Email opt-out available (respect for user)
- ✅ Mobile-friendly design

### Desire Building:
- ✅ Salary anchoring ($42k-$100k)
- ✅ Before/after visual transformation
- ✅ Specific income percentage increases
- ✅ Social proof (600k users)
- ✅ Authority signals (Harvard, major media)
- ✅ Success testimonials
- ✅ Personalized goal visualization

### Trust Building:
- ✅ 30-day money-back guarantee
- ✅ Trustpilot reviews
- ✅ Transparent pricing
- ✅ Clear subscription terms
- ✅ Opt-out options available
- ✅ Professional design
- ✅ Real company information (Cyprus location)

### Urgency Creation:
- ✅ Countdown timer (10 minutes)
- ✅ "Discount expires" messaging
- ✅ Specific deadline (Jan 2026 for mastery)

### Personalization:
- ✅ Gender-specific avatars
- ✅ Age-appropriate illustrations
- ✅ Goal displayed throughout
- ✅ Custom readiness score
- ✅ Recommended program length
- ✅ Timeline based on answers

---

## TECHNICAL IMPLEMENTATION NOTES

### URL Structure:
```
Base: https://coursiv.io/dynamic
Pattern: /[page-slug]?detected_locale=en&initial_locale=default&utm_gender=m&block=[previous-block]&step=[number]&tid=[tracking-id]
```

### State Management:
- **URL Parameters:** Primary method for tracking progress
- **Step Parameter:** Numeric (1-23 for quiz questions)
- **Block Parameter:** Tracks previous page/section
- **TID Parameter:** Tracking ID appears after email submission
- **Gender Parameter:** utm_gender=m/f

### Key Pages:
1. `/dynamic` - Entry/Gender
2. `/dynamic/square-select-landing` - Age
3. `/dynamic/quote-social-proof` - Social proof interstitial
4. `/dynamic/quiz-page?step=X` - Quiz questions 1-23
5. `/dynamic/personal-plan-page` - First results page
6. `/dynamic/magic-page` - Loading with testimonial
7. `/dynamic/email-page` - Email permission
8. `/dynamic/pathway-page` - Readiness level results
9. `/dynamic/selling-page` - Final paywall

### Animations:
- Page transitions: Smooth fade (300ms)
- Progress bar: Animated width transition (400ms ease)
- Loader: Circular with percentage increment
- Button hovers: Scale 1.02, shadow increase (150ms)
- Card selections: Background color transition (200ms)

---

## STRENGTHS OF THIS FUNNEL

1. **Clear Value Proposition:** Income growth through AI skills
2. **Strong Authority:** Harvard + major media logos
3. **Concrete Salary Examples:** $42k-$100k creates clear aspiration
4. **Low Time Barrier:** 5-20 min/day options
5. **Visual Consistency:** Professional illustrations throughout
6. **Transparent Opt-Outs:** Email and legal clarity
7. **Comprehensive Guarantee:** 30-day full refund
8. **Mobile App Evidence:** Shows actual product
9. **Positive Reinforcement:** 83% readiness, "Perfect" result
10. **Specific Timeline:** Jan 2026 deadline creates urgency
11. **Emotional + Logical:** Combines aspiration with statistics
12. **Professional Aesthetic:** Clean, modern, trustworthy design

---

## AREAS FOR POTENTIAL OPTIMIZATION

1. **Countdown Timer:** Test different durations (5 min vs 10 min vs 15 min)
2. **Pricing Tiers:** Test single plan vs 3-tier selection
3. **Video Testimonials:** Add video for higher engagement
4. **Email Requirement:** Test removing opt-out to grow list faster
5. **Course Preview:** Show actual curriculum/lesson examples
6. **Trial Period:** Test 1-week trial vs 4-week trial
7. **Income Calculator:** Interactive tool showing potential earnings
8. **Chat Support:** Add live chat for objection handling
9. **Exit Intent:** Popup with special offer on abandonment
10. **Loading Time:** Test shorter vs longer loading duration

---

## RECOMMENDED USE CASES

This funnel specification is ideal for:
- **AI/Tech education platforms**
- **Income growth programs**
- **Online course platforms**
- **Skills training services**
- **Career development programs**
- **Subscription-based learning products**

Adaptable elements:
- Question topics (change from AI to any skill vertical)
- Salary benchmarks (use different platforms/stats)
- Timeline promises (adjust to your program length)
- Pricing structure (modify subscription terms)
- Visual style (rebrand with your colors/illustrations)

---

**End of Specification**

*For implementation in another system, refer to the JSON file for machine-readable structure.*

