export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      funnel_sessions: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          completed_at: string | null
          gender: 'male' | 'female' | null
          age_range: string | null
          name: string | null
          email: string | null
          email_opt_in: boolean
          primary_pattern: string | null
          secondary_pattern: string | null
          emotional_blueprint_score: number | null
          readiness_level: number | null
          current_step: number
          total_steps: number
          utm_source: string | null
          utm_medium: string | null
          utm_campaign: string | null
          device_type: string | null
          user_agent: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          completed_at?: string | null
          gender?: 'male' | 'female' | null
          age_range?: string | null
          name?: string | null
          email?: string | null
          email_opt_in?: boolean
          primary_pattern?: string | null
          secondary_pattern?: string | null
          emotional_blueprint_score?: number | null
          readiness_level?: number | null
          current_step?: number
          total_steps?: number
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
          device_type?: string | null
          user_agent?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          completed_at?: string | null
          gender?: 'male' | 'female' | null
          age_range?: string | null
          name?: string | null
          email?: string | null
          email_opt_in?: boolean
          primary_pattern?: string | null
          secondary_pattern?: string | null
          emotional_blueprint_score?: number | null
          readiness_level?: number | null
          current_step?: number
          total_steps?: number
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
          device_type?: string | null
          user_agent?: string | null
        }
      }
      funnel_answers: {
        Row: {
          id: string
          session_id: string
          question_id: string
          value: Json
          score: number | null
          created_at: string
        }
        Insert: {
          id?: string
          session_id: string
          question_id: string
          value: Json
          score?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          session_id?: string
          question_id?: string
          value?: Json
          score?: number | null
          created_at?: string
        }
      }
      leads: {
        Row: {
          id: string
          session_id: string | null
          email: string
          name: string | null
          gender: 'male' | 'female' | null
          age_range: string | null
          email_opt_in: boolean
          primary_pattern: string | null
          secondary_pattern: string | null
          readiness_level: number | null
          created_at: string
          converted_at: string | null
        }
        Insert: {
          id?: string
          session_id?: string | null
          email: string
          name?: string | null
          gender?: 'male' | 'female' | null
          age_range?: string | null
          email_opt_in?: boolean
          primary_pattern?: string | null
          secondary_pattern?: string | null
          readiness_level?: number | null
          created_at?: string
          converted_at?: string | null
        }
        Update: {
          id?: string
          session_id?: string | null
          email?: string
          name?: string | null
          gender?: 'male' | 'female' | null
          age_range?: string | null
          email_opt_in?: boolean
          primary_pattern?: string | null
          secondary_pattern?: string | null
          readiness_level?: number | null
          created_at?: string
          converted_at?: string | null
        }
      }
      purchases: {
        Row: {
          id: string
          lead_id: string | null
          session_id: string | null
          email: string
          plan_type: string
          amount: number
          currency: string
          payment_provider: string | null
          payment_id: string | null
          status: 'pending' | 'completed' | 'failed' | 'refunded'
          created_at: string
        }
        Insert: {
          id?: string
          lead_id?: string | null
          session_id?: string | null
          email: string
          plan_type: string
          amount: number
          currency?: string
          payment_provider?: string | null
          payment_id?: string | null
          status?: 'pending' | 'completed' | 'failed' | 'refunded'
          created_at?: string
        }
        Update: {
          id?: string
          lead_id?: string | null
          session_id?: string | null
          email?: string
          plan_type?: string
          amount?: number
          currency?: string
          payment_provider?: string | null
          payment_id?: string | null
          status?: 'pending' | 'completed' | 'failed' | 'refunded'
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      gender_type: 'male' | 'female'
      purchase_status: 'pending' | 'completed' | 'failed' | 'refunded'
    }
  }
}

// Helper types for easier usage
export type FunnelSession = Database['public']['Tables']['funnel_sessions']['Row']
export type FunnelSessionInsert = Database['public']['Tables']['funnel_sessions']['Insert']
export type FunnelSessionUpdate = Database['public']['Tables']['funnel_sessions']['Update']

export type FunnelAnswer = Database['public']['Tables']['funnel_answers']['Row']
export type FunnelAnswerInsert = Database['public']['Tables']['funnel_answers']['Insert']

export type Lead = Database['public']['Tables']['leads']['Row']
export type LeadInsert = Database['public']['Tables']['leads']['Insert']

export type Purchase = Database['public']['Tables']['purchases']['Row']
export type PurchaseInsert = Database['public']['Tables']['purchases']['Insert']
