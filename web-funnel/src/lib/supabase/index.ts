export { supabase, createServerClient } from './client'
export type {
  Database,
  FunnelSession,
  FunnelSessionInsert,
  FunnelSessionUpdate,
  FunnelAnswer,
  FunnelAnswerInsert,
  Lead,
  LeadInsert,
  Purchase,
  PurchaseInsert,
} from './types'
export {
  createSession,
  updateSession,
  getSession,
  completeSession,
  saveAnswer,
  saveAnswersBatch,
  getSessionAnswers,
  saveLead,
  updateLeadWithResults,
  createPurchase,
  updatePurchaseStatus,
  getUTMParams,
} from './api'
