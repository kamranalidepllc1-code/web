import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'gbp-optimization',
  visual: 'gbp',
  hero: {
    title: 'Make your Google Business Profile',
    titleAccent: 'work harder.',
    summary: 'We review, complete, and optimize your Google Business Profile so customers searching nearby see accurate, compelling information about your business.',
    cta: 'Get a profile review',
  },
  intro: {
    heading: 'Your profile is your',
    headingAccent: 'local shopfront.',
    lead: 'For many customers, your Google Business Profile is the first thing they see — before your website, and sometimes instead of it.',
    body: [
      'Google Business Profile optimization means making sure that listing is accurate, complete, and working for you: the right categories, clear services, a strong description, current hours, and photos that show what you do.',
      'We handle the details, follow Google’s guidelines, and keep your profile maintained over time, with regular check-ins so you can see how it is progressing.',
    ],
    highlights: [
      'Setup, verification help, and review',
      'Accurate, consistent business details',
      'Follows Google’s guidelines',
      'Ongoing management and progress updates',
    ],
  },
  features: {
    eyebrow: 'Service includes',
    heading: 'Every part of your profile,',
    headingAccent: 'covered.',
    note: 'Google decides how profiles rank, so no one can honestly guarantee positions. We focus on everything within your control.',
    items: [
      { title: 'Profile setup & review', desc: 'We set up new profiles, help with the verification process, and audit existing profiles for gaps and errors.' },
      { title: 'Business information', desc: 'Name, address, phone, hours, and website kept accurate and consistent with the rest of your online presence.' },
      { title: 'Category optimization', desc: 'Choosing the primary and secondary categories that best describe what your business actually does.' },
      { title: 'Services & offerings', desc: 'Listing your services clearly so customers — and Google — understand exactly what you provide.' },
      { title: 'Business description', desc: 'A clear, well-written description that explains who you are, what you do, and the areas you serve.' },
      { title: 'Photos & media', desc: 'Organizing and adding quality photos of your work, team, and location so your profile looks active and trustworthy.' },
      { title: 'Profile completeness', desc: 'Filling in the details that are often left blank, so your profile gives customers the full picture.' },
      { title: 'Review best practices', desc: 'Guidance on asking for and responding to reviews in a way that follows Google’s policies.' },
      { title: 'Local visibility', desc: 'Consistent local signals, such as citations, that help Google understand where you operate and who you serve.' },
    ],
  },
  process: {
    heading: 'A steady, careful',
    headingAccent: 'process.',
    steps: [
      { title: 'Profile Audit', desc: 'We review your current profile, compare it with local competitors, and list what is missing or inaccurate.' },
      { title: 'Optimization', desc: 'We correct business details, refine categories, and bring the core profile in line with best practice.' },
      { title: 'Content & Information', desc: 'We write your description, add services, and organize photos so the profile tells your story clearly.' },
      { title: 'Local Best Practices', desc: 'We align citations and listings and set up a simple approach for requesting and replying to reviews.' },
      { title: 'Ongoing Improvement', desc: 'We keep the profile current, make regular updates, and check in with you on how it is progressing.' },
    ],
  },
  showcase: {
    image: '/Assets/about us/imgi_127_a-business-meeting-1 (1).jpg',
    statement: 'Be the business people',
    statementAccent: 'choose nearby.',
    caption: 'A complete, well-maintained profile helps customers trust you before they ever call, visit, or click.',
  },
  pricing: true,
  cta: {
    heading: 'Let’s get your profile',
    headingAccent: 'in shape.',
    body: 'Send us your business name and location. We will review your Google Business Profile and outline what can be improved.',
    button: 'Get a profile review',
  },
}

export const metadata = serviceMetadata(content)

export default function GbpOptimizationPage() {
  return <ServicePage content={content} />
}
