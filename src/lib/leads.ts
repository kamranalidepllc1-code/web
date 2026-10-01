import 'server-only'
import { createHmac, randomUUID } from 'node:crypto'
import { z } from 'zod'

/**
 * Single lead pipeline for the contact form and the AI assistant.
 *
 * No CRM is connected yet, so leads are logged server-side (visible in the
 * hosting provider's logs). Set LEAD_WEBHOOK_URL to forward every lead as JSON
 * to a CRM / Zapier / Make / GoHighLevel webhook; LEAD_WEBHOOK_SECRET adds an
 * HMAC signature header. Credentials never reach the browser.
 */

const optional = (max: number) => z.string().trim().max(max).optional().transform(v => v || undefined)

export const LeadSchema = z
  .object({
    name: z.string().trim().min(1).max(120),
    email: z.string().trim().max(200).email().optional().or(z.literal('').transform(() => undefined)),
    phone: z.string().trim().max(40).regex(/^[+()\d\s.-]{7,}$/, 'Invalid phone').optional().or(z.literal('').transform(() => undefined)),
    company: optional(160),
    website: optional(300),
    businessType: optional(160),
    problem: optional(1500),
    services: z.array(z.string().trim().max(80)).max(8).optional(),
    budget: optional(120),
    requirements: optional(2000),
    preferredContact: z.enum(['email', 'phone', 'whatsapp', 'any']).optional(),
    message: optional(4000),
  })
  .refine(l => l.email || l.phone, { message: 'Email or phone is required' })

export type Lead = z.infer<typeof LeadSchema>
export type LeadSource = 'contact_form' | 'ai_assistant'

export async function submitLead(lead: Lead, source: LeadSource, meta: { page?: string } = {}): Promise<{ ok: boolean; id: string }> {
  const id = randomUUID()
  const payload = { id, source, receivedAt: new Date().toISOString(), page: meta.page, lead }

  // Log the lead so it is never lost (server logs only — not exposed to visitors).
  console.log(JSON.stringify({ scope: 'lead', event: 'lead_received', ...payload }))

  const url = process.env.LEAD_WEBHOOK_URL
  if (!url) return { ok: true, id }

  try {
    const body = JSON.stringify(payload)
    const headers: Record<string, string> = { 'Content-Type': 'application/json' }
    if (process.env.LEAD_WEBHOOK_SECRET) {
      headers['X-Signature'] = createHmac('sha256', process.env.LEAD_WEBHOOK_SECRET).update(body).digest('hex')
    }
    const res = await fetch(url, { method: 'POST', headers, body, cache: 'no-store', signal: AbortSignal.timeout(8000) })
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`)
    return { ok: true, id }
  } catch (error) {
    // The lead is already in the logs above; report the delivery failure without PII.
    console.error(JSON.stringify({ scope: 'lead', event: 'crm_delivery_failed', id, source, message: error instanceof Error ? error.message : 'unknown' }))
    return { ok: false, id }
  }
}
