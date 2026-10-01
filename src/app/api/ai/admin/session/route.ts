import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'
import { ADMIN_COOKIE, createSessionValue, isAdminConfigured, sessionCookieOptions, verifyWordPressUser } from '@/lib/ai/admin-session'
import { clientKey, guardRate, isSameOrigin, jsonError, parseBody } from '@/lib/ai/http'
import { aiLog } from '@/lib/ai/log'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const LoginSchema = z.object({
  username: z.string().trim().min(1).max(100),
  appPassword: z.string().trim().min(8).max(100),
})

/** Sign in with a WordPress username + Application Password. */
export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) return jsonError(403, 'Forbidden.')
  if (!isAdminConfigured()) return jsonError(503, 'Admin AI tools are not configured.')
  const limited = guardRate(request, 'admin_login', 'adminLogin', { countsAsModelCall: false })
  if (limited) return limited

  const body = await parseBody(request, LoginSchema, 'admin_login')
  if ('response' in body) return body.response

  let user: Awaited<ReturnType<typeof verifyWordPressUser>> = null
  try {
    user = await verifyWordPressUser(body.data.username, body.data.appPassword)
  } catch (error) {
    aiLog('error', 'admin_login_wp_unreachable', { message: error instanceof Error ? error.message : 'unknown' })
    return jsonError(502, 'Could not reach WordPress. Please try again.')
  }
  if (!user) {
    aiLog('warn', 'admin_login_failed', { client: clientKey(request) })
    return jsonError(401, 'Sign-in failed. Check your WordPress username and Application Password (your account must be able to edit posts).')
  }

  aiLog('info', 'admin_login', { client: clientKey(request) })
  const res = NextResponse.json({ ok: true, name: user.name })
  res.cookies.set(ADMIN_COOKIE, createSessionValue(user), sessionCookieOptions)
  return res
}

/** Sign out. */
export async function DELETE(request: NextRequest) {
  if (!isSameOrigin(request)) return jsonError(403, 'Forbidden.')
  const res = NextResponse.json({ ok: true })
  res.cookies.set(ADMIN_COOKIE, '', { ...sessionCookieOptions, maxAge: 0 })
  return res
}
