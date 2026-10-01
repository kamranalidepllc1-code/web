import { NextResponse } from 'next/server'
import { LeadSchema, submitLead } from '@/lib/leads'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: 'Name, email, phone, and message are required.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
  }

  const lead = LeadSchema.safeParse({ name, email, phone, message })
  if (!lead.success) {
    return NextResponse.json({ error: 'Please check your details and try again.' }, { status: 400 })
  }
  // Same pipeline as AI-qualified leads (logged, and forwarded to LEAD_WEBHOOK_URL when set).
  await submitLead(lead.data, 'contact_form', { page: '/contact' })

  return NextResponse.json({ ok: true })
}
