import 'server-only'

/**
 * In-memory sliding-window rate limiter.
 *
 * Limits are per server instance: on serverless hosting each instance keeps its
 * own counters, so treat these as abuse protection, not exact quotas. To share
 * limits across instances, swap `store` for Redis (e.g. Upstash) — the call
 * sites don't change.
 */

type Window = { limit: number; windowMs: number }
const store = new Map<string, number[]>()
let lastSweep = Date.now()

export const LIMITS = {
  chat: [{ limit: 20, windowMs: 10 * 60_000 }, { limit: 120, windowMs: 24 * 3_600_000 }],
  search: [{ limit: 30, windowMs: 10 * 60_000 }, { limit: 300, windowMs: 24 * 3_600_000 }],
  blog: [{ limit: 20, windowMs: 10 * 60_000 }, { limit: 150, windowMs: 24 * 3_600_000 }],
  lead: [{ limit: 5, windowMs: 60 * 60_000 }],
  adminLogin: [{ limit: 5, windowMs: 15 * 60_000 }],
  adminGenerate: [{ limit: 60, windowMs: 60 * 60_000 }],
  /** Whole-site ceiling on model calls per instance per day — a cost circuit breaker. */
  globalDaily: [{ limit: Number(process.env.AI_DAILY_CALL_CAP) || 3000, windowMs: 24 * 3_600_000 }],
} satisfies Record<string, Window[]>

export type LimitName = keyof typeof LIMITS

/** Records a hit and returns whether it is allowed, plus seconds until retry when blocked. */
export function rateLimit(name: LimitName, key: string): { ok: true } | { ok: false; retryAfter: number } {
  const now = Date.now()
  sweep(now)
  const windows: Window[] = LIMITS[name]
  const id = `${name}:${key}`
  const longest = Math.max(...windows.map(w => w.windowMs))
  const hits = (store.get(id) ?? []).filter(t => now - t < longest)

  for (const w of windows) {
    const inWindow = hits.filter(t => now - t < w.windowMs)
    if (inWindow.length >= w.limit) {
      store.set(id, hits)
      return { ok: false, retryAfter: Math.ceil((inWindow[0] + w.windowMs - now) / 1000) }
    }
  }
  hits.push(now)
  store.set(id, hits)
  return { ok: true }
}

function sweep(now: number) {
  if (now - lastSweep < 5 * 60_000) return
  lastSweep = now
  for (const [id, hits] of store) {
    if (!hits.length || now - hits[hits.length - 1] > 24 * 3_600_000) store.delete(id)
  }
}
