import 'server-only'
import { createHmac, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'

/**
 * Admin AI tools reuse WordPress accounts instead of a separate user system:
 * editors sign in with their WordPress username + Application Password, which
 * is verified against WordPress once and never stored. The session is a signed,
 * httpOnly cookie holding only the username and an expiry.
 */

export const ADMIN_COOKIE = 'dep_ai_admin'
const TTL_SECONDS = 8 * 3600

function secret(): string | null {
  const s = process.env.AI_ADMIN_SESSION_SECRET
  return s && s.length >= 32 ? s : null
}

export function isAdminConfigured() {
  return Boolean(secret())
}

function sign(payload: string, key: string) {
  return createHmac('sha256', key).update(payload).digest('base64url')
}

export function createSessionValue(user: { username: string; name: string }): string {
  const key = secret()
  if (!key) throw new Error('AI_ADMIN_SESSION_SECRET is not set (min 32 chars).')
  const payload = Buffer.from(JSON.stringify({ u: user.username, n: user.name, exp: Math.floor(Date.now() / 1000) + TTL_SECONDS })).toString('base64url')
  return `${payload}.${sign(payload, key)}`
}

export const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
  maxAge: TTL_SECONDS,
}

export async function getAdminUser(): Promise<{ username: string; name: string } | null> {
  const key = secret()
  if (!key) return null
  const raw = (await cookies()).get(ADMIN_COOKIE)?.value
  if (!raw) return null
  const [payload, sig] = raw.split('.')
  if (!payload || !sig) return null
  const expected = Buffer.from(sign(payload, key))
  const given = Buffer.from(sig)
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString()) as { u: string; n: string; exp: number }
    if (data.exp < Date.now() / 1000) return null
    return { username: data.u, name: data.n }
  } catch {
    return null
  }
}

/** Checks the credentials against WordPress; the account must be able to edit posts. */
export async function verifyWordPressUser(username: string, appPassword: string): Promise<{ username: string; name: string } | null> {
  const api = (process.env.WORDPRESS_API_URL || 'https://digierapro.com/wp-json/wp/v2').replace(/\/$/, '')
  const token = Buffer.from(`${username}:${appPassword}`).toString('base64')
  const res = await fetch(`${api}/users/me?context=edit&_fields=id,name,slug,capabilities`, {
    headers: { Authorization: `Basic ${token}`, Accept: 'application/json' },
    cache: 'no-store',
    signal: AbortSignal.timeout(10_000),
  })
  if (!res.ok) return null
  const me = (await res.json()) as { name?: string; slug?: string; capabilities?: Record<string, boolean> }
  if (!me.capabilities?.edit_posts) return null
  return { username: me.slug || username, name: me.name || username }
}
