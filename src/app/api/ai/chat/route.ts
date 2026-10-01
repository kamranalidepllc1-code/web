import type { NextRequest } from 'next/server'
import { z } from 'zod'
import { AI, isAiConfigured } from '@/lib/ai/config'
import { Groq, getGroq } from '@/lib/ai/client'
import { clientKey, guardRate, isSameOrigin, jsonError, parseBody } from '@/lib/ai/http'
import { dedupeByUrl, formatContext, searchBalanced } from '@/lib/ai/knowledge'
import { aiLog, usageFields } from '@/lib/ai/log'
import { CHAT_SYSTEM, LEAD_TOOL_NAME } from '@/lib/ai/prompts'
import { rateLimit } from '@/lib/ai/rate-limit'
import { LeadSchema, submitLead } from '@/lib/leads'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const RequestSchema = z.object({
  messages: z
    .array(z.object({ role: z.enum(['user', 'assistant']), content: z.string().trim().min(1).max(4000) }))
    .min(1)
    .max(40),
  /** Page the visitor is on — used to favour that page's content. */
  path: z.string().max(200).regex(/^\/[\w\-/]*$/).optional(),
})

/** Every field present, unknowns as null, so the model can't add fields. */
const nullable = (description: string) => ({ anyOf: [{ type: 'string' }, { type: 'null' }], description })
const LEAD_TOOL: Groq.Chat.ChatCompletionTool = {
  type: 'function',
  function: {
    name: LEAD_TOOL_NAME,
    description:
      'Send a qualified lead to the Digi Era Pro team. Call only after the visitor has provided their name and an email or phone number AND has explicitly confirmed they want their details sent. Use null for anything they did not provide. Never guess values.',
    parameters: {
      type: 'object',
      additionalProperties: false,
      properties: {
        name: { type: 'string', description: 'Visitor’s name as they gave it' },
        email: nullable('Email address'),
        phone: nullable('Phone number'),
        company: nullable('Company name'),
        website: nullable('Company website URL'),
        business_type: nullable('Type of business / industry'),
        main_problem: nullable('The main business problem, in the visitor’s words'),
        services: { type: 'array', items: { type: 'string' }, description: 'Services of interest, from the catalog' },
        budget: nullable('Approximate budget — only if the visitor volunteered it'),
        requirements: nullable('Project requirements / notes'),
        preferred_contact: { anyOf: [{ type: 'string', enum: ['email', 'phone', 'whatsapp', 'any'] }, { type: 'null' }] },
      },
      required: ['name', 'email', 'phone', 'company', 'website', 'business_type', 'main_problem', 'services', 'budget', 'requirements', 'preferred_contact'],
    },
  },
}

const ToolInput = z.object({
  name: z.string(),
  email: z.string().nullish(),
  phone: z.string().nullish(),
  company: z.string().nullish(),
  website: z.string().nullish(),
  business_type: z.string().nullish(),
  main_problem: z.string().nullish(),
  services: z.array(z.string()).default([]),
  budget: z.string().nullish(),
  requirements: z.string().nullish(),
  preferred_contact: z.enum(['email', 'phone', 'whatsapp', 'any']).nullish(),
})

type ToolCall = { id: string; name: string; arguments: string }

type Event =
  | { type: 'text'; text: string }
  | { type: 'sources'; items: { title: string; url: string; type: string }[] }
  | { type: 'lead'; ok: boolean }
  | { type: 'error'; message: string }
  | { type: 'done' }

/** Keeps the tail of the conversation within the configured budget. */
function trimHistory(messages: z.infer<typeof RequestSchema>['messages']) {
  const clipped = messages.slice(-AI.history.maxMessages).map(m => ({ ...m, content: m.content.slice(0, AI.history.maxCharsPerMessage) }))
  let total = 0
  const kept: typeof clipped = []
  for (let i = clipped.length - 1; i >= 0; i--) {
    total += clipped[i].content.length
    if (total > AI.history.maxTotalChars) break
    kept.unshift(clipped[i])
  }
  while (kept.length && kept[0].role !== 'user') kept.shift() // conversation must open with a user turn
  return kept
}

export async function POST(request: NextRequest) {
  const route = 'chat'
  if (!isSameOrigin(request)) return jsonError(403, 'Forbidden.')
  if (!isAiConfigured()) return jsonError(503, 'The assistant is not available right now. Please contact our team at /contact.')

  const limited = guardRate(request, route, 'chat')
  if (limited) return limited

  const body = await parseBody(request, RequestSchema, route)
  if ('response' in body) return body.response

  const history = trimHistory(body.data.messages)
  const last = history.at(-1)
  if (!last || last.role !== 'user') return jsonError(400, 'Invalid request.')

  // Retrieval: the latest question plus the previous user turn for context.
  const prevUser = history.slice(0, -1).reverse().find(m => m.role === 'user')?.content ?? ''
  const hits = await searchBalanced(
    `${last.content} ${prevUser.slice(0, 300)}`,
    { service: 2, faq: 2, any: AI.retrieval.chatChunks - 4 },
    { boostUrl: body.data.path },
  )
  const context = formatContext(hits)

  const messages: Groq.Chat.ChatCompletionMessageParam[] = [
    { role: 'system', content: CHAT_SYSTEM },
    ...history.slice(0, -1).map(m => ({ role: m.role, content: m.content })),
    { role: 'user', content: `<website_content>\n${context || '(no matching website content)'}\n</website_content>\n\n${last.content}` },
  ]

  const client = getGroq()
  const encoder = new TextEncoder()
  const key = clientKey(request)
  const started = Date.now()

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (e: Event) => controller.enqueue(encoder.encode(`${JSON.stringify(e)}\n`))
      let leadSent = false
      try {
        for (let round = 0; round < AI.maxChatRounds; round++) {
          const turn = await client.chat.completions.create(
            {
              model: AI.chatModel,
              max_completion_tokens: AI.maxTokens.chat,
              reasoning_effort: 'low',
              include_reasoning: false,
              tools: [LEAD_TOOL],
              messages,
              stream: true,
            },
            { signal: request.signal },
          )

          // Text streams straight to the visitor; tool-call arguments arrive in fragments.
          let text = ''
          let finish: string | null = null
          const calls: ToolCall[] = []
          for await (const chunk of turn) {
            const choice = chunk.choices[0]
            if (choice?.delta.content) {
              text += choice.delta.content
              send({ type: 'text', text: choice.delta.content })
            }
            for (const tc of choice?.delta.tool_calls ?? []) {
              const call = (calls[tc.index] ??= { id: '', name: '', arguments: '' })
              if (tc.id) call.id = tc.id
              if (tc.function?.name) call.name += tc.function.name
              if (tc.function?.arguments) call.arguments += tc.function.arguments
            }
            if (choice?.finish_reason) finish = choice.finish_reason
            if (chunk.x_groq?.usage) aiLog('info', 'chat_turn', { client: key, round, model: AI.chatModel, stop: finish, ...usageFields(chunk.x_groq.usage) })
          }

          const toolCalls = calls.filter(Boolean)
          if (finish !== 'tool_calls' || !toolCalls.length) break

          messages.push({
            role: 'assistant',
            content: text || null,
            tool_calls: toolCalls.map(c => ({ id: c.id, type: 'function' as const, function: { name: c.name, arguments: c.arguments } })),
          })
          for (const call of toolCalls) {
            const r = await runTool(call, { leadSent, key, path: body.data.path })
            if (r.leadOk !== undefined) {
              leadSent = leadSent || r.leadOk
              send({ type: 'lead', ok: r.leadOk })
            }
            messages.push({ role: 'tool', tool_call_id: call.id, content: r.content })
          }
        }

        const sources = dedupeByUrl(hits).slice(0, 4).map(h => ({ title: h.title, url: h.url, type: h.type }))
        if (sources.length) send({ type: 'sources', items: sources })
        send({ type: 'done' })
      } catch (error) {
        if (request.signal.aborted) {
          aiLog('info', 'chat_aborted', { client: key })
        } else {
          aiLog('error', 'chat_failed', {
            client: key,
            status: error instanceof Groq.APIError ? error.status : undefined,
            kind: error instanceof Groq.RateLimitError ? 'provider_rate_limit' : error instanceof Groq.APIConnectionError ? 'connection' : 'other',
          })
          send({ type: 'error', message: 'Sorry — I couldn’t respond just now. Please try again, or contact our team at /contact.' })
        }
      } finally {
        aiLog('info', 'chat_done', { client: key, ms: Date.now() - started })
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: { 'Content-Type': 'application/x-ndjson; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
  })
}

async function runTool(
  call: ToolCall,
  ctx: { leadSent: boolean; key: string; path?: string },
): Promise<{ content: string; leadOk?: boolean }> {
  const fail = (message: string) => ({ content: `Error: ${message}` })

  if (call.name !== LEAD_TOOL_NAME) return fail('Unknown tool.')
  if (ctx.leadSent) return fail('A lead was already submitted in this conversation. Do not submit again.')
  const limit = rateLimit('lead', ctx.key)
  if (!limit.ok) return fail('Too many submissions from this visitor. Ask them to use the contact page instead.')

  // Tool arguments are model-generated JSON, so validate them fully before acting on them.
  let args: unknown = null
  try {
    args = JSON.parse(call.arguments || '{}')
  } catch {}
  const input = ToolInput.safeParse(args)
  if (!input.success) return fail('Invalid or incomplete details. Ask the visitor to confirm their details, then try once more.')
  const i = input.data
  const lead = LeadSchema.safeParse({
    name: i.name, email: i.email ?? undefined, phone: i.phone ?? undefined, company: i.company ?? undefined,
    website: i.website ?? undefined, businessType: i.business_type ?? undefined, problem: i.main_problem ?? undefined,
    services: i.services, budget: i.budget ?? undefined, requirements: i.requirements ?? undefined,
    preferredContact: i.preferred_contact ?? undefined,
  })
  if (!lead.success) {
    aiLog('warn', 'lead_invalid', { client: ctx.key, issues: lead.error.issues.map(x => x.path.join('.')) })
    return fail('The details are incomplete or invalid (a name and a valid email or phone number are required). Ask the visitor to correct them.')
  }

  const res = await submitLead(lead.data, 'ai_assistant', { page: ctx.path })
  aiLog(res.ok ? 'info' : 'error', res.ok ? 'lead_submitted' : 'lead_delivery_failed', { client: ctx.key, leadId: res.id })
  return {
    leadOk: true, // captured in logs even if CRM forwarding failed
    content: `Lead received (reference ${res.id.slice(0, 8)}). Tell the visitor the team will be in touch.`,
  }
}
