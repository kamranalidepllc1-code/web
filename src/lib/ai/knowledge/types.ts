export type KnowledgeType = 'company' | 'service' | 'faq' | 'blog' | 'page' | 'offer' | 'review'

/** One retrievable piece of approved website content. */
export type KnowledgeChunk = {
  /** Stable id, e.g. "service:google-ads#features". */
  id: string
  type: KnowledgeType
  /** Title of the page/document this chunk belongs to. */
  title: string
  /** Section heading inside the document, if any. */
  section?: string
  /** Real, root-relative URL on this website. */
  url: string
  text: string
  /** Extra search terms (tags, categories, service names). */
  keywords?: string[]
  /** Ranking multiplier: services/FAQs are more authoritative than blog prose. */
  boost?: number
}

export type SearchHit = KnowledgeChunk & { score: number }
