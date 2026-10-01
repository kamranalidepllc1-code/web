import 'server-only'
import { NextResponse, type NextRequest } from 'next/server'
import type { z } from 'zod'
import { aiLog, hashId } from './log'
import { rateLimit, type LimitName } from './rate-limit'

const MAX_BODY_BYTES = 32 * 1024

export function clientKey(request: NextRequest): string {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown'
  return hashId(ip)
}

/** Browsers always send Origin on cross-site POSTs; reject other sites calling our AI endpoints. */
export function isSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin')
  if (!origin) return true // same-origin navigations / server-to-server tools
  try {
    return new URL(origin).host === request.headers.get('host')
  } catch {
    return false
  }
}

export function jsonError(status: number, error: string, extra: Record<string, unknown> = {}) {
  return NextResponse.json({ error, ...extra }, { status })
}

/** Rate limit + global cost breaker. Returns a 429 response when blocked. */
export function guardRate(request: NextRequest, route: string, name: LimitName, opts: { countsAsModelCall?: boolean } = {}) {
  const key = clientKey(request)
  const res = rateLimit(name, key)
  if (!res.ok) {
    aiLog('warn', 'rate_limited', { route, client: key, retryAfter: res.retryAfter })
    return NextResponse.json(
      { error: 'You’re sending requests too quickly. Please wait a moment and try again.' },
      { status: 429, headers: { 'Retry-After': String(res.retryAfter) } },
    )
  }
  if (opts.countsAsModelCall !== false) {
    const global = rateLimit('globalDaily', 'all')
    if (!global.ok) {
      aiLog('error', 'global_cap_reached', { route })
      return jsonError(503, 'The assistant is temporarily unavailable. Please contact our team directly.')
    }
  }
  return null
}

/** Reads and validates a JSON body with a size cap. */
export async function parseBody<T extends z.ZodType>(request: NextRequest, schema: T, route: string): Promise<{ data: z.infer<T> } | { response: NextResponse }> {
  const length = Number(request.headers.get('content-length') ?? 0)
  if (length > MAX_BODY_BYTES) return { response: jsonError(413, 'Request is too large.') }
  let raw: unknown
  try {
    const text = await request.text()
    if (text.length > MAX_BODY_BYTES) return { response: jsonError(413, 'Request is too large.') }
    raw = JSON.parse(text)
  } catch {
    return { response: jsonError(400, 'Invalid request body.') }
  }
  const parsed = schema.safeParse(raw)
  if (!parsed.success) {
    aiLog('warn', 'invalid_request', { route, issues: parsed.error.issues.length })
    return { response: jsonError(400, 'Invalid request.') }
  }
  return { data: parsed.data }
}
