import {
  Monitor,
  Code,
  ShoppingCart,
  Palette,
  Share2,
  Search,
  PenTool,
  Link,
  Megaphone,
  Bot,
  Globe,
  MapPin,
  LayoutTemplate,
  Smartphone,
  Boxes,
  Gamepad2,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  num: string
  slug: string
  title: string
  /** Short phrase used in compact navigation (mega menu). */
  tagline: string
  desc: string
  icon: LucideIcon
  /** Where the service links to — its own page when one exists, otherwise the services section. */
  href: string
}

// Slugs of services that have a dedicated page under src/app/services/<slug>.
// Add a slug here when you create its page; everything else links to the home services section.
const SERVICE_PAGES = new Set([
  'web-development',
  'website-design',
  'ecommerce-development',
  'ai-solutions',
  'app-development',
  'software-development',
  'game-development',
  'landing-page',
  'gbp-optimization',
  'search-engine-optimization',
  'google-ads',
  'graphic-design',
  'social-media-marketing',
  'citation-backlinks',
  'content-creation',
  'branding-strategy',
])

// Listed in reading order (left to right, row by row) — the mega menu shows them in 4 columns.
const SERVICE_LIST: Omit<Service, 'num' | 'href'>[] = [
  // Row 1
  { slug: 'gbp-optimization', title: 'GBP Optimization', tagline: 'Google Business Profile', desc: 'We optimize and manage your Google Business Profile so nearby customers find accurate details, strong photos, and a reason to call.', icon: MapPin },
  { slug: 'search-engine-optimization', title: 'Search Engine Optimization', tagline: 'Get found by the right people', desc: 'Technical, on-page, and local SEO that helps your website rank for the searches your customers actually make.', icon: Search },
  { slug: 'social-media-marketing', title: 'Social Media Marketing', tagline: 'Campaigns that grow audiences', desc: 'Social media strategy, content, and management that keep your Facebook, Instagram, and other channels active and on-brand.', icon: Share2 },
  { slug: 'google-ads', title: 'Google Ads', tagline: 'Data-driven paid search', desc: 'Google Ads management with proper conversion tracking, so your budget goes to searches that turn into calls and sales.', icon: Megaphone },
  // Row 2
  { slug: 'web-development', title: 'Web Development', tagline: 'Fast, scalable web builds', desc: 'Fast, secure, responsive websites and web applications, built with clean code and ready for search from day one.', icon: Code },
  { slug: 'landing-page', title: 'Landing Page', tagline: 'Focused pages built to convert', desc: 'Single-purpose landing pages with clear messaging and one strong call to action, built for your ads and offers.', icon: LayoutTemplate },
  { slug: 'branding-strategy', title: 'Branding Strategy', tagline: 'Identity and positioning', desc: 'Positioning, messaging, and visual direction that make your business clear, consistent, and easy to remember.', icon: Palette },
  { slug: 'citation-backlinks', title: 'Citation & Backlinks', tagline: 'Authority and local signals', desc: 'Accurate local citations and white-hat backlinks that strengthen how search engines understand and trust your business.', icon: Link },
  // Row 3
  { slug: 'graphic-design', title: 'Graphic Design', tagline: 'Visuals that communicate', desc: 'Social graphics, flyers, ads, and print materials designed to communicate your message at a glance.', icon: PenTool },
  { slug: 'content-creation', title: 'Content Creation', tagline: 'Content that builds authority', desc: 'Website copy, blog articles, and social content written in your voice and structured for search.', icon: Globe },
  { slug: 'game-development', title: 'Game Development', tagline: 'Games for mobile and web', desc: 'Mobile and browser games taken from concept and prototype through development, testing, and launch.', icon: Gamepad2 },
  { slug: 'ecommerce-development', title: 'E-commerce Development', tagline: 'Online stores built to sell', desc: 'Online stores with clear product pages, simple checkout, and the integrations you need to sell and ship.', icon: ShoppingCart },
  // Row 4
  { slug: 'website-design', title: 'Website Design', tagline: 'Conversion-focused site design', desc: 'Website design that presents your business professionally and makes it easy for visitors to call, book, or buy.', icon: Monitor },
  { slug: 'software-development', title: 'Software Development', tagline: 'Custom software for your business', desc: 'Custom software, internal tools, and integrations that remove manual work and connect your systems.', icon: Boxes },
  { slug: 'app-development', title: 'App Development', tagline: 'Mobile apps people enjoy using', desc: 'iOS and Android apps with clean interfaces and reliable performance, from first idea to app store launch.', icon: Smartphone },
  { slug: 'ai-solutions', title: 'AI Solutions', tagline: 'Automate with practical AI', desc: 'Practical AI chat assistants, automations, and integrations that save your team time on repetitive work.', icon: Bot },
]

export const SERVICES: Service[] = SERVICE_LIST.map((s, i) => ({
  ...s,
  num: String(i + 1).padStart(2, '0'),
  href: SERVICE_PAGES.has(s.slug) ? `/services/${s.slug}` : '/#services',
}))

export function hasServicePage(service: Service) {
  return SERVICE_PAGES.has(service.slug)
}

export function getService(slug: string) {
  const service = SERVICES.find(s => s.slug === slug)
  if (!service) throw new Error(`Unknown service slug: ${slug}`)
  return service
}

// Keywords that tie a blog post (title, categories, tags) to a service page.
const SERVICE_KEYWORDS: [string, RegExp][] = [
  ['gbp-optimization', /google (my )?business|business profile|\bgbp\b|google maps|local listing/i],
  ['search-engine-optimization', /\bseo\b|search engine|ranking|keyword|organic/i],
  ['google-ads', /google ads|\bppc\b|pay[- ]per[- ]click|paid search|adwords/i],
  ['social-media-marketing', /social media|facebook|instagram|tiktok|linkedin/i],
  ['citation-backlinks', /citation|backlink|link building|directory/i],
  ['content-creation', /content|copywriting|blog(ging)?\b/i],
  ['branding-strategy', /brand/i],
  ['graphic-design', /graphic|logo|flyer|design/i],
  ['website-design', /website design|web design|redesign/i],
  ['web-development', /web develop|website|wordpress|next\.js/i],
  ['landing-page', /landing page|conversion rate/i],
  ['ecommerce-development', /e-?commerce|online store|shopify|woocommerce/i],
  ['app-development', /\bapps?\b|mobile app|ios|android/i],
  ['software-development', /software|automation|crm|integration/i],
  ['ai-solutions', /\bai\b|artificial intelligence|chatbot|chatgpt/i],
]

const DEFAULT_RELATED = ['search-engine-optimization', 'google-ads', 'social-media-marketing']

/** Up to `limit` service pages relevant to a piece of text, most specific first. */
export function relatedServicesFor(text: string, limit = 3): Service[] {
  const slugs = SERVICE_KEYWORDS.filter(([, re]) => re.test(text)).map(([slug]) => slug)
  for (const slug of DEFAULT_RELATED) if (slugs.length < limit && !slugs.includes(slug)) slugs.push(slug)
  return slugs.slice(0, limit).map(getService)
}
