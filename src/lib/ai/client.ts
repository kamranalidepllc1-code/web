import 'server-only'
import Groq from 'groq-sdk'
import { z } from 'zod'

let client: Groq | null = null

/** Server-side Groq client. The API key is read from GROQ_API_KEY and never leaves the server. */
export function getGroq(): Groq {
  if (!client) {
    client = new Groq({
      apiKey: process.env.GROQ_API_KEY,
      timeout: 45_000, // ms — public requests should fail fast rather than hang the UI
      maxRetries: 1,
    })
  }
  return client
}

/** Strict JSON-schema response format built from a Zod schema. */
export function jsonFormat(name: string, schema: z.ZodType) {
  const json = z.toJSONSchema(schema) as Record<string, unknown>
  delete json.$schema
  return { type: 'json_schema' as const, json_schema: { name, strict: true, schema: json } }
}

/** Parses and validates a structured-output reply; null if the model returned anything else. */
export function parseJson<T extends z.ZodType>(schema: T, completion: Groq.Chat.ChatCompletion): z.infer<T> | null {
  const choice = completion.choices[0]
  if (!choice?.message.content || choice.finish_reason !== 'stop') return null
  try {
    const parsed = schema.safeParse(JSON.parse(choice.message.content))
    return parsed.success ? parsed.data : null
  } catch {
    return null
  }
}

export { Groq }
