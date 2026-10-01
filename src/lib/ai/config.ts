import 'server-only'

/**
 * Central AI settings (Groq). Every value can be overridden per environment;
 * the defaults are tuned for cost (public traffic) vs quality (admin tools).
 */
export const AI = {
  /** Public, high-volume features: chat, search intent, blog summary/Q&A. */
  chatModel: process.env.AI_CHAT_MODEL || 'openai/gpt-oss-20b',
  /** Editor-only content tools: quality matters more than cost, volume is tiny. */
  adminModel: process.env.AI_ADMIN_MODEL || 'openai/gpt-oss-120b',

  /**
   * Output caps per call (the model is told to be brief; these are hard ceilings).
   * They include the model's hidden reasoning tokens, hence the headroom.
   */
  maxTokens: { chat: 2000, search: 1500, blogSummary: 1500, blogAnswer: 1200, admin: 12000 },
  /** Chat history sent to the model: last N messages, each clipped. */
  history: { maxMessages: 10, maxCharsPerMessage: 1500, maxTotalChars: 9000 },
  /** Tool-use rounds per chat request (lead submission needs 2). */
  maxChatRounds: 3,
  /** Retrieved website content per request. */
  retrieval: { chatChunks: 6, maxContextChars: 6500, searchResults: 12 },
  /** Knowledge index rebuild interval (WordPress data itself is cached for 5 min). */
  indexTtlMs: 10 * 60 * 1000,
} as const

export function isAiConfigured(): boolean {
  return Boolean(process.env.GROQ_API_KEY)
}
