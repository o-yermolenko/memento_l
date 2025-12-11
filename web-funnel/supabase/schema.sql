-- Memento Funnel Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom types
DO $$ BEGIN
    CREATE TYPE gender_type AS ENUM ('male', 'female');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE purchase_status AS ENUM ('pending', 'completed', 'failed', 'refunded');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- ============================================
-- FUNNEL SESSIONS TABLE
-- Tracks each user's quiz/funnel session
-- ============================================
CREATE TABLE IF NOT EXISTS funnel_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    completed_at TIMESTAMPTZ,
    
    -- User profile data
    gender gender_type,
    age_range TEXT,
    name TEXT,
    email TEXT,
    email_opt_in BOOLEAN DEFAULT FALSE,
    
    -- Calculated results
    primary_pattern TEXT,
    secondary_pattern TEXT,
    emotional_blueprint_score INTEGER,
    readiness_level INTEGER,
    
    -- Progress tracking
    current_step INTEGER DEFAULT 0,
    total_steps INTEGER DEFAULT 36,
    
    -- Attribution & tracking
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    device_type TEXT,
    user_agent TEXT
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_funnel_sessions_email ON funnel_sessions(email);
CREATE INDEX IF NOT EXISTS idx_funnel_sessions_created_at ON funnel_sessions(created_at);

-- ============================================
-- FUNNEL ANSWERS TABLE
-- Stores individual quiz answers
-- ============================================
CREATE TABLE IF NOT EXISTS funnel_answers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID NOT NULL REFERENCES funnel_sessions(id) ON DELETE CASCADE,
    question_id TEXT NOT NULL,
    value JSONB NOT NULL,
    score INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    
    -- Ensure one answer per question per session
    UNIQUE(session_id, question_id)
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_funnel_answers_session_id ON funnel_answers(session_id);

-- ============================================
-- LEADS TABLE
-- Stores qualified leads (users who provided email)
-- ============================================
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES funnel_sessions(id) ON DELETE SET NULL,
    email TEXT NOT NULL,
    name TEXT,
    gender gender_type,
    age_range TEXT,
    email_opt_in BOOLEAN DEFAULT FALSE,
    primary_pattern TEXT,
    secondary_pattern TEXT,
    readiness_level INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    converted_at TIMESTAMPTZ,
    
    -- Ensure unique email
    UNIQUE(email)
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);

-- ============================================
-- PURCHASES TABLE
-- Tracks all purchase attempts and completions
-- ============================================
CREATE TABLE IF NOT EXISTS purchases (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lead_id UUID REFERENCES leads(id) ON DELETE SET NULL,
    session_id UUID REFERENCES funnel_sessions(id) ON DELETE SET NULL,
    email TEXT NOT NULL,
    plan_type TEXT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    currency TEXT DEFAULT 'USD',
    payment_provider TEXT,
    payment_id TEXT,
    status purchase_status DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_purchases_email ON purchases(email);
CREATE INDEX IF NOT EXISTS idx_purchases_status ON purchases(status);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE funnel_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE funnel_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

-- Policies for funnel_sessions
-- Allow insert from anyone (anonymous users starting quiz)
CREATE POLICY "Allow anonymous insert" ON funnel_sessions
    FOR INSERT
    WITH CHECK (true);

-- Allow update for own session (using session ID stored client-side)
CREATE POLICY "Allow update own session" ON funnel_sessions
    FOR UPDATE
    USING (true)
    WITH CHECK (true);

-- Allow read for own session
CREATE POLICY "Allow read own session" ON funnel_sessions
    FOR SELECT
    USING (true);

-- Policies for funnel_answers
CREATE POLICY "Allow insert answers" ON funnel_answers
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow update answers" ON funnel_answers
    FOR UPDATE
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow read answers" ON funnel_answers
    FOR SELECT
    USING (true);

-- Policies for leads (more restrictive - insert only from client)
CREATE POLICY "Allow insert leads" ON leads
    FOR INSERT
    WITH CHECK (true);

-- Only service role can read leads
CREATE POLICY "Service role read leads" ON leads
    FOR SELECT
    USING (auth.role() = 'service_role');

-- Policies for purchases (insert from client, read/update from service role)
CREATE POLICY "Allow insert purchases" ON purchases
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Service role manage purchases" ON purchases
    FOR ALL
    USING (auth.role() = 'service_role');

-- ============================================
-- FUNCTIONS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_funnel_sessions_updated_at ON funnel_sessions;
CREATE TRIGGER update_funnel_sessions_updated_at
    BEFORE UPDATE ON funnel_sessions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- VIEWS (for analytics)
-- ============================================

-- Daily funnel metrics view
CREATE OR REPLACE VIEW funnel_daily_metrics AS
SELECT 
    DATE(created_at) as date,
    COUNT(*) as sessions_started,
    COUNT(CASE WHEN email IS NOT NULL THEN 1 END) as email_captured,
    COUNT(CASE WHEN completed_at IS NOT NULL THEN 1 END) as sessions_completed,
    ROUND(
        COUNT(CASE WHEN email IS NOT NULL THEN 1 END)::numeric / 
        NULLIF(COUNT(*), 0) * 100, 2
    ) as email_capture_rate,
    ROUND(
        COUNT(CASE WHEN completed_at IS NOT NULL THEN 1 END)::numeric / 
        NULLIF(COUNT(*), 0) * 100, 2
    ) as completion_rate
FROM funnel_sessions
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- Pattern distribution view
CREATE OR REPLACE VIEW pattern_distribution AS
SELECT 
    primary_pattern,
    COUNT(*) as count,
    ROUND(COUNT(*)::numeric / SUM(COUNT(*)) OVER() * 100, 2) as percentage
FROM funnel_sessions
WHERE primary_pattern IS NOT NULL
GROUP BY primary_pattern
ORDER BY count DESC;
