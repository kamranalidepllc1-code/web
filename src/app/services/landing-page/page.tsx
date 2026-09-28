import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'landing-page',
  visual: 'landing',
  hero: {
    title: 'Landing pages that turn attention into',
    titleAccent: 'action.',
    summary: 'Focused, single-purpose pages with clear messaging and a strong call to action — built for your campaigns, offers, and launches.',
    cta: 'Plan your landing page',
  },
  intro: {
    heading: 'One page.',
    headingAccent: 'One clear goal.',
    lead: 'A landing page does one job: move a visitor from interest to action. Everything on the page should support that.',
    body: [
      'Whether you are running Google Ads, promoting an offer on social media, or launching a new service, we build a dedicated page that matches the message people clicked on and makes the next step obvious.',
      'We plan the structure, shape the content around your offer, design for clarity, and develop a fast, responsive page that works on every device.',
    ],
    highlights: [
      'Built around a single, clear action',
      'Aligned with your ads and campaigns',
      'Designed mobile-first',
      'Ready to refine after launch',
    ],
  },
  features: {
    eyebrow: 'What we focus on',
    heading: 'Every element',
    headingAccent: 'earns its place.',
    note: 'Results depend on your offer, audience, and traffic. Our job is to give every visitor a clear, convincing path to act.',
    items: [
      { title: 'Conversion-focused layouts', desc: 'Sections ordered to answer visitor questions in sequence — what it is, why it matters, and what to do next.' },
      { title: 'Strong CTA placement', desc: 'Calls to action that are easy to find and repeated at the moments a visitor is most ready to act.' },
      { title: 'Clear messaging', desc: 'Headlines and copy that match the ad or post people came from, so the page feels like the right place.' },
      { title: 'Visual hierarchy', desc: 'Type, spacing, and contrast that guide the eye to what matters first and keep distractions out of the way.' },
      { title: 'Responsive design', desc: 'Layouts that adapt cleanly from large desktop screens to tablets and phones.' },
      { title: 'Mobile optimization', desc: 'Tap-friendly buttons, readable text, and short forms for the many visitors who arrive on a phone.' },
      { title: 'Performance', desc: 'Lean pages that load quickly, because every second of waiting is a chance for a visitor to leave.' },
    ],
  },
  process: {
    heading: 'From brief to',
    headingAccent: 'live page.',
    steps: [
      { title: 'Strategy', desc: 'We define the goal, the audience, and where your traffic will come from, so the page has one clear job.' },
      { title: 'Content Structure', desc: 'We map the sections, key messages, and proof points in the order your visitors need them.' },
      { title: 'Design', desc: 'We design a focused layout with a clear visual hierarchy and a call to action that stands out.' },
      { title: 'Development', desc: 'We build a fast, responsive page and connect your forms, tracking, and booking or contact tools.' },
      { title: 'Optimization', desc: 'After launch, we review how the page is used and refine copy, layout, and CTAs where it helps.' },
    ],
  },
  showcase: {
    image: '/Assets/about us/whiteboard-session.jpg',
    statement: 'Less noise.',
    statementAccent: 'More clarity.',
    caption: 'Every section is planned around the one action you want visitors to take — nothing competes with it.',
  },
  cta: {
    heading: 'Have a campaign that needs a',
    headingAccent: 'landing page?',
    body: 'Share your offer, audience, and goal. We will help you shape a page that gives your campaign a clear, focused home.',
    button: 'Plan your landing page',
  },
}

export const metadata = serviceMetadata(content)

export default function LandingPageServicePage() {
  return <ServicePage content={content} />
}
