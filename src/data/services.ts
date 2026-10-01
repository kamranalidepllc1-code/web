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
  { slug: 'gbp-optimization', title: 'GBP Optimization', tagline: 'Google Business Profile', desc: 'We optimize your Google Business Profile to dominate local search and attract more nearby customers.', icon: MapPin },
  { slug: 'search-engine-optimization', title: 'Search Engine Optimization', tagline: 'Get found by the right people', desc: 'We optimize your online presence so your business ranks higher and gets found by the right people.', icon: Search },
  { slug: 'social-media-marketing', title: 'Social Media Marketing', tagline: 'Campaigns that grow audiences', desc: 'We create and manage campaigns that grow your audience and turn followers into paying customers.', icon: Share2 },
  { slug: 'google-ads', title: 'Google Ads', tagline: 'Data-driven paid search', desc: 'We run data-driven ad campaigns that maximize your ROI and put your business in front of ready buyers.', icon: Megaphone },
  // Row 2
  { slug: 'web-development', title: 'Web Development', tagline: 'Fast, scalable web builds', desc: 'We build fast, scalable, and secure web applications engineered to perform and grow with your business.', icon: Code },
  { slug: 'landing-page', title: 'Landing Page', tagline: 'Focused pages built to convert', desc: 'We design focused landing pages with clear messaging and strong calls to action that turn visitors into enquiries.', icon: LayoutTemplate },
  { slug: 'branding-strategy', title: 'Branding Strategy', tagline: 'Identity and positioning', desc: 'We develop bold brand identities and strategies that position you ahead of the competition.', icon: Palette },
  { slug: 'citation-backlinks', title: 'Citation & Backlinks', tagline: 'Authority and local signals', desc: 'We build authoritative citations and backlinks that strengthen your domain and boost local rankings.', icon: Link },
  // Row 3
  { slug: 'graphic-design', title: 'Graphic Design', tagline: 'Visuals that communicate', desc: 'We design compelling visuals that communicate your message and make your brand impossible to ignore.', icon: PenTool },
  { slug: 'content-creation', title: 'Content Creation', tagline: 'Content that builds authority', desc: 'We produce high-quality content that engages your audience and builds lasting brand authority.', icon: Globe },
  { slug: 'game-development', title: 'Game Development', tagline: 'Games for mobile and web', desc: 'We turn game ideas into polished, playable experiences, from concept and design to development and launch.', icon: Gamepad2 },
  { slug: 'e-commerce', title: 'E-commerce', tagline: 'Online stores built to sell', desc: 'We build powerful online stores designed to convert visitors into loyal customers at scale.', icon: ShoppingCart },
  // Row 4
  { slug: 'website-design', title: 'Website Design', tagline: 'Conversion-focused site design', desc: 'We craft visually stunning, conversion-focused websites that reflect your brand and drive real results.', icon: Monitor },
  { slug: 'software-development', title: 'Software Development', tagline: 'Custom software for your business', desc: 'We build custom software, internal tools, and integrations that streamline how your business runs.', icon: Boxes },
  { slug: 'app-development', title: 'App Development', tagline: 'Mobile apps people enjoy using', desc: 'We design and build mobile apps with clean interfaces and reliable performance, from first idea to app store launch.', icon: Smartphone },
  { slug: 'virtual-ai-solution', title: 'Virtual AI Solution', tagline: 'Automate with smart AI tools', desc: 'We implement smart AI tools that automate your workflows and give your business a competitive edge.', icon: Bot },
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
