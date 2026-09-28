export type GoogleReview = {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
  profile_photo_url: string
}

export type GooglePlaceData = {
  name: string
  rating: number
  user_ratings_total: number
  reviews: GoogleReview[]
}

export type ClientVoice = {
  quote: string
  author: string
  title: string
  avatar: string
  rating: number
}

type Heading = { heading: string; headingAccent: string }

export type ServicePageContent = {
  slug: string
  visual: 'web' | 'app' | 'software' | 'game' | 'landing' | 'gbp' | 'seo' | 'ads' | 'design' | 'social' | 'links' | 'content' | 'brand'
  hero: { title: string; titleAccent: string; summary: string; cta: string }
  intro: Heading & { lead: string; body: string[]; highlights: string[] }
  features: Heading & { eyebrow: string; note?: string; items: { title: string; desc: string }[] }
  process: Heading & { steps: { title: string; desc: string }[] }
  showcase: { image?: string; statement: string; statementAccent: string; caption: string }
  stack?: { heading: string; note: string; items: string[] }
  pricing?: boolean
  faq?: { question: string; answer: string }[]
  cta: Heading & { body: string; button: string }
}
