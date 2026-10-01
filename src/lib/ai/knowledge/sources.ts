import 'server-only'
import { SERVICES } from '@/data/services'
import { SERVICE_PAGE_CONTENT } from '@/data/service-pages'
import { FOOTER_CONTACT, GOOGLE_REVIEWS, HISTORY, TEAM, WHY_CHOOSE_US, VALUES } from '@/data/site'
import { GBP_PLANS, OFFER_FEATURES, OFFER_STEPS, OFFER_WHY, SPECIAL_OFFER } from '@/data/specialOffer'
import type { KnowledgePost } from '@/lib/wordpress/api'
import type { KnowledgeChunk } from './types'

/**
 * Approved knowledge sources. Everything here is content already published on
 * the website — nothing is written specifically for the AI.
 *
 * Deliberately NOT indexed (look like template placeholders and conflict with
 * other site facts; re-enable once confirmed): TESTIMONIALS, STATS ("14 years",
 * "Cannes Lions"), PROCESS_STEPS, CLIENT_LOGOS.
 */

const CHUNK_CHARS = 900

function chunkText(text: string, size = CHUNK_CHARS): string[] {
  const sentences = text.replace(/\s+/g, ' ').trim().split(/(?<=[.!?])\s+/)
  const out: string[] = []
  let cur = ''
  for (const s of sentences) {
    if ((cur + ' ' + s).length > size && cur) {
      out.push(cur.trim())
      cur = ''
    }
    cur += ' ' + s
  }
  if (cur.trim()) out.push(cur.trim())
  return out
}

export function companyChunks(): KnowledgeChunk[] {
  const contact = FOOTER_CONTACT.map(c => `${c.label}: ${c.value}`).join('. ')
  const chunks: KnowledgeChunk[] = [
    {
      id: 'company:contact', type: 'company', title: 'Contact Digi Era Pro', url: '/contact', boost: 1.3,
      text: `Digi Era Pro LLC is a digital marketing agency. ${contact}. Visitors can also send an inquiry through the contact form on the Contact page.`,
      keywords: ['contact', 'phone', 'email', 'call', 'reach', 'talk'],
    },
    {
      id: 'company:history', type: 'company', title: 'About Digi Era Pro — company history', url: '/about',
      text: HISTORY.map(h => `${h.year}: ${h.title} — ${h.desc}`).join(' '),
      keywords: ['about', 'history', 'founded', 'started', 'malaysia'],
    },
    {
      id: 'company:team', type: 'company', title: 'Digi Era Pro leadership team', url: '/about',
      text: TEAM.map(t => `${t.name} — ${t.role}`).join('. ') + '.',
      keywords: ['team', 'founder', 'ceo', 'people'],
    },
    {
      id: 'company:mission', type: 'company', title: 'Why choose Digi Era Pro — mission, vision and philosophy', url: '/',
      text: WHY_CHOOSE_US.map(w => `${w.tab}: ${w.desc}`).join(' '),
      keywords: ['mission', 'vision', 'philosophy', 'why'],
    },
    {
      id: 'company:values', type: 'company', title: 'Digi Era Pro values', url: '/about',
      text: VALUES.map(v => `${v.word}: ${v.desc}`).join(' '),
      keywords: ['values'],
    },
    {
      id: 'company:services-overview', type: 'company', title: 'All Digi Era Pro services', url: '/#services', boost: 1.1,
      text: 'Digi Era Pro offers: ' + SERVICES.map(s => `${s.title} (${s.tagline})`).join(', ') + '.',
      keywords: ['services', 'offer', 'what do you do'],
    },
  ]
  return chunks
}

export function serviceChunks(): KnowledgeChunk[] {
  const out: KnowledgeChunk[] = []
  const pages = new Map(SERVICE_PAGE_CONTENT.map(p => [p.slug, p]))

  for (const s of SERVICES) {
    const page = pages.get(s.slug)
    const url = s.href
    const base = { type: 'service' as const, title: s.title, url, keywords: [s.title, s.tagline], boost: 1.35 }
    out.push({ ...base, id: `service:${s.slug}`, text: `${s.title} — ${s.tagline}. ${s.desc}${page ? ` ${page.hero.summary}` : ''}` })
    if (!page) continue

    out.push({
      ...base, id: `service:${s.slug}#intro`, section: 'Overview',
      text: [page.intro.lead, ...page.intro.body, `Highlights: ${page.intro.highlights.join('; ')}.`].join(' '),
    })
    out.push({
      ...base, id: `service:${s.slug}#features`, section: 'What’s included', boost: 1.2,
      text: page.features.items.map(f => `${f.title}: ${f.desc}`).join(' ') + (page.features.note ? ` ${page.features.note}` : ''),
    })
    out.push({
      ...base, id: `service:${s.slug}#process`, section: 'How we work', boost: 1,
      text: page.process.steps.map((st, i) => `Step ${i + 1}, ${st.title}: ${st.desc}`).join(' '),
    })
    if (page.stack) {
      out.push({ ...base, id: `service:${s.slug}#stack`, section: page.stack.heading, boost: 1, text: `${page.stack.note} ${page.stack.items.join(', ')}.` })
    }
    for (const [i, f] of (page.faq ?? []).entries()) {
      out.push({
        id: `faq:${s.slug}:${i}`, type: 'faq', title: f.question, section: `${s.title} FAQ`, url: `${url}#faq`,
        text: f.answer, keywords: [s.title], boost: 1.25,
      })
    }
  }
  return out
}

export function offerChunks(): KnowledgeChunk[] {
  const offer = SPECIAL_OFFER
  const out: KnowledgeChunk[] = [
    {
      id: 'offer:special', type: 'offer', title: offer.title, url: '/special-offer', boost: 1.2,
      text: `${offer.summary} Includes: ${offer.includes.join(', ')}. ${OFFER_WHY.map(w => `${w.label}: ${w.text}`).join(' ')} ` +
        `How it works: ${OFFER_STEPS.map(s => `${s.title} — ${s.desc}`).join(' ')}` +
        (offer.offerPrice ? ` Offer price: ${offer.offerPrice}.` : ' No price is published for this bundle; pricing is confirmed with the team.'),
      keywords: ['special offer', 'deal', 'bundle', 'discount'],
    },
    {
      id: 'offer:gbp-features', type: 'offer', title: 'Google Business Profile management — what’s included', url: '/special-offer',
      text: OFFER_FEATURES.map(f => `${f.title}: ${f.desc}`).join(' '),
      keywords: ['gbp', 'google business profile', 'local'],
    },
  ]
  for (const plan of GBP_PLANS) {
    out.push({
      id: `offer:gbp-plan:${plan.name.toLowerCase()}`, type: 'offer', title: `GBP ${plan.name} plan — ${plan.price}`, url: '/special-offer#pricing', boost: 1.2,
      text: `The ${plan.name} Google Business Profile plan is published at ${plan.price}. It includes: ${plan.features.join('; ')}.`,
      keywords: ['price', 'pricing', 'plan', 'cost', 'gbp', plan.name],
    })
  }
  return out
}

export function reviewChunks(): KnowledgeChunk[] {
  // Real Google reviews shown on the site (short excerpts only).
  return GOOGLE_REVIEWS.slice(0, 6).map((r, i) => ({
    id: `review:${i}`, type: 'review' as const, title: `Google review from ${r.author_name} (${r.rating}★)`, url: '/',
    text: r.text.slice(0, 500), keywords: ['review', 'testimonial', 'feedback'], boost: 0.7,
  }))
}

export function pageChunks(): KnowledgeChunk[] {
  return [
    { id: 'page:blog', type: 'page', title: 'Digi Era Pro Blog', url: '/blog', text: 'Articles about SEO, Google Ads, web design, social media and digital marketing for growing businesses.', keywords: ['blog', 'articles', 'guides'] },
    { id: 'page:about', type: 'page', title: 'About Us', url: '/about', text: 'Who Digi Era Pro is, our history, values and the team behind the work.', keywords: ['about'] },
    { id: 'page:contact', type: 'page', title: 'Contact Us', url: '/contact', text: 'Send an inquiry, call or email the Digi Era Pro team.', keywords: ['contact', 'quote', 'consultation'] },
    { id: 'page:special-offer', type: 'page', title: 'Special Offer', url: '/special-offer', text: 'Current bundle offer and Google Business Profile plans with published prices.', keywords: ['offer', 'pricing'] },
  ]
}

export function blogChunks(posts: KnowledgePost[]): KnowledgeChunk[] {
  const out: KnowledgeChunk[] = []
  for (const post of posts) {
    const url = `/blog/${post.slug}`
    const keywords = [...post.tags.map(t => t.name), ...post.categories.map(c => c.name)]
    out.push({ id: `blog:${post.slug}`, type: 'blog', title: post.title, url, text: post.excerpt, keywords, boost: 0.9 })
    post.sections.forEach((sec, i) => {
      chunkText(sec.text).forEach((text, j) => {
        out.push({ id: `blog:${post.slug}#${i}.${j}`, type: 'blog', title: post.title, section: sec.heading || undefined, url, text, keywords, boost: 0.85 })
      })
    })
    post.faqs.forEach((f, i) => {
      out.push({ id: `blog-faq:${post.slug}:${i}`, type: 'faq', title: f.question, section: post.title, url, text: f.answer, keywords, boost: 0.9 })
    })
  }
  return out
}
