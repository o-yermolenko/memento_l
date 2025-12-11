# Supabase Backend Setup

This directory contains the database schema and setup instructions for the Memento funnel backend.

## Quick Setup

### 1. Create Tables in Supabase

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Navigate to **SQL Editor**
3. Copy the contents of `schema.sql`
4. Paste and run the SQL

This will create:
- `funnel_sessions` - Tracks each user's quiz/funnel session
- `funnel_answers` - Stores individual quiz answers
- `leads` - Stores qualified leads (users who provided email)
- `purchases` - Tracks purchase attempts and completions

### 2. Environment Variables

The `.env.local` file should already be configured with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://krklrkbbvucpfoyyjwff.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Database Schema

### funnel_sessions
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| created_at | TIMESTAMPTZ | Session start time |
| updated_at | TIMESTAMPTZ | Last update time |
| completed_at | TIMESTAMPTZ | Quiz completion time |
| gender | ENUM | 'male' or 'female' |
| age_range | TEXT | User's age range |
| name | TEXT | User's name |
| email | TEXT | User's email |
| email_opt_in | BOOLEAN | Marketing consent |
| primary_pattern | TEXT | Detected emotional pattern |
| secondary_pattern | TEXT | Secondary pattern |
| emotional_blueprint_score | INTEGER | Quiz score |
| readiness_level | INTEGER | Readiness percentage |
| current_step | INTEGER | Current quiz step |
| total_steps | INTEGER | Total quiz steps |
| utm_source/medium/campaign | TEXT | Attribution tracking |
| device_type | TEXT | mobile/tablet/desktop |
| user_agent | TEXT | Browser info |

### funnel_answers
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| session_id | UUID | FK to funnel_sessions |
| question_id | TEXT | Question identifier |
| value | JSONB | Answer value(s) |
| score | INTEGER | Answer score |
| created_at | TIMESTAMPTZ | Answer timestamp |

### leads
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| session_id | UUID | FK to funnel_sessions |
| email | TEXT | Email (unique) |
| name | TEXT | User's name |
| gender | ENUM | 'male' or 'female' |
| age_range | TEXT | User's age range |
| email_opt_in | BOOLEAN | Marketing consent |
| primary_pattern | TEXT | Emotional pattern |
| secondary_pattern | TEXT | Secondary pattern |
| readiness_level | INTEGER | Readiness score |
| created_at | TIMESTAMPTZ | Lead capture time |
| converted_at | TIMESTAMPTZ | Purchase time |

### purchases
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| lead_id | UUID | FK to leads |
| session_id | UUID | FK to funnel_sessions |
| email | TEXT | Email |
| plan_type | TEXT | Selected plan |
| amount | DECIMAL | Purchase amount |
| currency | TEXT | Currency code |
| payment_provider | TEXT | Payment processor |
| payment_id | TEXT | External payment ID |
| status | ENUM | pending/completed/failed/refunded |
| created_at | TIMESTAMPTZ | Purchase time |

## Row Level Security (RLS)

The schema includes RLS policies that:
- Allow anonymous inserts for funnel_sessions, funnel_answers, leads, and purchases
- Allow updates/reads for sessions
- Restrict leads read access to service role only

## Analytics Views

Two views are created for analytics:

### funnel_daily_metrics
Daily aggregated funnel metrics including:
- Sessions started
- Email capture rate
- Completion rate

### pattern_distribution
Distribution of detected emotional patterns.

## Usage in Code

The Supabase client is automatically initialized and available through the `useSupabase` hook:

```tsx
import { useSupabase } from '@/components/SupabaseProvider'

function MyComponent() {
  const { sessionId, syncAnswer, syncProfile, syncLead, syncCompletion } = useSupabase()
  
  // Sync an answer
  await syncAnswer('question_id', 'answer_value', 5)
  
  // Sync profile data
  await syncProfile()
  
  // Save as lead
  await syncLead()
  
  // Mark session complete
  await syncCompletion()
}
```

## API Functions

Direct API functions are available in `@/lib/supabase`:

```tsx
import { 
  createSession,
  updateSession,
  saveAnswer,
  saveLead,
  createPurchase,
  completeSession 
} from '@/lib/supabase'
```
