import 'server-only'
import { createHash } from 'node:crypto'

type Level = 'info' | 'warn' | 'error'

/**
 * Structured, PII-free logging for the AI layer. Never pass message text,
 * names, emails or phone numbers here — log sizes, counts, ids and outcomes.
 */
export function aiLog(level: Level, event: string, fields: Record<string, unknown> = {}) {
  const line = JSON.stringify({ ts: new Date().toISOString(), level, scope: 'ai', event, ...fields })
  if (level === 'error') console.error(line)
  else if (level === 'warn') console.warn(line)
  else console.log(line)
}

/** Stable, non-reversible id for rate-limit keys and correlating logs without storing IPs. */
export function hashId(value: string): string {
  return createHash('sha256').update(`${process.env.AI_LOG_SALT ?? 'dep'}:${value}`).digest('hex').slice(0, 12)
}

/** Token usage summary for cost monitoring. */
export function usageFields(
  usage:
    | {
        prompt_tokens?: number | null
        completion_tokens?: number | null
        prompt_tokens_details?: { cached_tokens?: number | null } | null
        completion_tokens_details?: { reasoning_tokens?: number | null } | null
      }
    | null
    | undefined,
) {
  return {
    inTok: usage?.prompt_tokens ?? 0,
    outTok: usage?.completion_tokens ?? 0,
    cacheRead: usage?.prompt_tokens_details?.cached_tokens ?? 0,
    reasoningTok: usage?.completion_tokens_details?.reasoning_tokens ?? 0,
  }
}
