import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'branding-strategy',
  visual: 'brand',
  hero: {
    title: 'A brand with a clear idea',
    titleAccent: 'at its core.',
    summary: 'We help you define what your business stands for, who it serves, and how it should look and sound — so every decision about your brand has a strong foundation.',
    cta: 'Start a brand conversation',
  },
  intro: {
    heading: 'Strategy first,',
    headingAccent: 'then identity.',
    lead: 'A logo is not a brand. A brand is the idea people hold about your business — and strategy is how you shape it deliberately.',
    body: [
      'We start by understanding your business, your market, and the people you want to reach. Through research and focused workshops, we uncover what makes you genuinely different and define a position you can own.',
      'That strategy then shapes everything that follows: your messaging, personality, and visual direction — brought together in clear guidelines your team can use with confidence.',
    ],
    highlights: [
      'Research-led positioning',
      'Messaging and tone of voice',
      'Visual direction grounded in strategy',
      'Practical brand guidelines',
    ],
  },
  features: {
    eyebrow: 'What we define',
    heading: 'The foundations of',
    headingAccent: 'a lasting brand.',
    note: 'Every recommendation is tied back to your business goals and your audience, not trends.',
    items: [
      { title: 'Brand positioning', desc: 'Defining where you sit in your market, what you do differently, and why it matters to customers.' },
      { title: 'Target audience', desc: 'Understanding the people you serve — their needs, motivations, and how they make decisions.' },
      { title: 'Competitor landscape', desc: 'Mapping how competitors present themselves, to find the space your brand can stand in.' },
      { title: 'Brand messaging', desc: 'A core message, value proposition, and key messages that explain your business clearly and consistently.' },
      { title: 'Brand personality', desc: 'The character and tone of voice that make your brand recognizable in every interaction.' },
      { title: 'Visual direction', desc: 'Guidance on logo, color, typography, and imagery that expresses your strategy visually.' },
      { title: 'Brand story', desc: 'A narrative that connects where you came from, what you believe, and where you are going.' },
      { title: 'Brand guidelines', desc: 'A practical guide to using your brand correctly across your website, social, print, and more.' },
      { title: 'Brand consistency', desc: 'Reviewing your touchpoints and helping bring them in line so the brand feels coherent everywhere.' },
    ],
  },
  process: {
    heading: 'A strategic process,',
    headingAccent: 'step by step.',
    steps: [
      { title: 'Discover', desc: 'We learn about your business, goals, history, and challenges through conversations and research.' },
      { title: 'Research', desc: 'We study your audience and competitors to understand the landscape your brand operates in.' },
      { title: 'Define', desc: 'We shape your positioning, messaging, and personality into a clear brand strategy.' },
      { title: 'Express', desc: 'We translate the strategy into visual direction and tone of voice.' },
      { title: 'Guide', desc: 'We document everything in brand guidelines and support you as you roll it out.' },
    ],
  },
  showcase: {
    image: '/Assets/about us/story.jpg',
    statement: 'Know who you are.',
    statementAccent: 'Show it everywhere.',
    caption: 'A clear brand strategy gives every design, message, and campaign a shared direction — and makes your business easier to remember.',
  },
  faq: [
    { question: 'What is the difference between branding and a logo?', answer: 'A logo is one visual element of your brand. Branding strategy defines the thinking behind it — your positioning, audience, messaging, and personality — so the logo and everything else express a clear idea.' },
    { question: 'Do I need a brand strategy if I already have a logo?', answer: 'Often, yes. Many businesses have a logo but no clear positioning or messaging. A strategy helps you use your existing identity more effectively, or shows where it needs to evolve.' },
    { question: 'How long does a branding strategy project take?', answer: 'It depends on the scope and how quickly decisions can be made. We agree a timeline at the start, covering research, workshops, strategy development, and guidelines.' },
    { question: 'Can you help with a rebrand?', answer: 'Yes. We review what your current brand does well and what customers already recognize, so a rebrand builds on your strengths rather than starting from nothing.' },
    { question: 'What will I receive at the end?', answer: 'A documented brand strategy covering positioning, audience, messaging, personality, and visual direction, along with guidelines your team can refer to.' },
  ],
  cta: {
    heading: 'Let’s define what makes',
    headingAccent: 'you different.',
    body: 'Tell us about your business and where you want to take it. We will talk through your brand and suggest the right place to begin.',
    button: 'Start a brand conversation',
  },
}

export const metadata = serviceMetadata(content)

export default function BrandingStrategyPage() {
  return <ServicePage content={content} />
}
