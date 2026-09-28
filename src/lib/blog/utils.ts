export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://digierapro.com').replace(/\/$/, '')

export function readingTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.round(words / 200))} min read`
}

export function formatDate(iso: string | null | undefined, style: 'short' | 'long' = 'long'): string {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', style === 'long'
    ? { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/New_York' }
    : { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'America/New_York' })
}
