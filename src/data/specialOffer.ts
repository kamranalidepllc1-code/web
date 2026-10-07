import { MonitorCog, Megaphone, Users, ChartPie, Sparkles, ReceiptText, Gem } from 'lucide-react'

/**
 * Special Offer content — edit this file to publish the real offer.
 *
 * Every field marked PLACEHOLDER is neutral copy and should be replaced
 * with confirmed business details. Fields set to `null` are simply not
 * rendered, so the page never shows a price, deadline or availability
 * claim that hasn't been filled in.
 */
export const SPECIAL_OFFER = {
  // PLACEHOLDER — the offer's public name
  title: 'The Growth Starter Offer',
  // PLACEHOLDER — one-line summary shown in the hero and offer panel
  summary:
    'A focused bundle of our core services to help your business look sharp, get found, and start turning attention into inquiries.',

  // e.g. '$2,400' — shown struck through when both prices are set
  originalPrice: null as string | null,
  // e.g. '$1,800'
  offerPrice: null as string | null,
  // e.g. 'Valid until 31 October 2026'
  validUntil: null as string | null,
  // e.g. 'Limited to 5 new clients this month'
  availability: null as string | null,

  // Shown as chips in the offer panel
  includes: [
    'Website Design',
    'Branding Strategy',
    'GBP Optimization',
    'Search Engine Optimization',
    'Social Media Marketing',
    'Content Creation',
  ],
}

export const OFFER_FEATURES = [
  { title: 'Complete Profile Optimization', desc: 'We ensure your business profile is fully optimized with accurate details like your name, address, phone number (NAP), business hours, and website link.', icon: MonitorCog },
  { title: 'Engaging Posts and Updates', desc: 'Regular updates and posts on your GBP profile keep customers informed and engaged, showcasing promotions, events, and business updates.', icon: Megaphone },
  { title: 'Customer Reviews Management', desc: 'We actively monitor and respond to customer reviews, helping build trust and credibility while addressing any concerns quickly.', icon: Users },
  { title: 'Local SEO Enhancement', desc: 'We optimize your GBP profile for local search, improving your visibility in relevant local searches and driving more foot traffic to your business.', icon: ChartPie },
  { title: 'Analytics and Insights Tracking', desc: 'We analyze GBP insights to track customer behavior and engagement, using that data to continuously improve your online presence and make data-driven decisions.', icon: Sparkles },
]

export const OFFER_WHY = [
  {
    label: 'The problem',
    text: 'Most growing businesses piece their online presence together one vendor at a time — a website here, a profile there — and it never quite adds up to something customers trust.',
  },
  {
    label: 'Who it’s for',
    text: 'Local and growing businesses that want a professional foundation across their website, brand, and search presence without managing several agencies.',
  },
  {
    label: 'What to expect',
    text: 'One team, one plan, and clear communication from your account manager — with every deliverable agreed before work begins.',
  },
]

export const OFFER_STEPS = [
  { num: '01', title: 'Get in touch', desc: 'Send an inquiry or give us a call and mention the special offer.' },
  { num: '02', title: 'Discuss your project', desc: 'We learn about your business, goals, and where you are today.' },
  { num: '03', title: 'Define the scope', desc: 'We confirm exactly what’s included and agree on the plan together.' },
  { num: '04', title: 'Start creating', desc: 'Our team gets to work, with regular updates along the way.' },
]

export const GBP_PLANS = [
  {
    name: 'Basic',
    price: '$350.00',
    icon: ReceiptText,
    featured: false,
    buttonHref: 'https://buy.stripe.com/5kQ28r0kgajm9Ge8gjawo0w',
    features: [
      'Weekly 2 GBP Posts (Offers, Updates, or Announcements)',
      '10 Local Citations per Month',
      'GBP Profile Setup/Optimization',
      'Keyword-Rich Business Description',
      'Category & Services Optimization',
      'Review Monitoring & Response Suggestions',
      'Monthly Performance Report',
      'High-Quality Image Uploads',
    ],
  },
  {
    name: 'Gold',
    price: '$525.00',
    icon: Gem,
    featured: true,
    buttonHref: 'https://buy.stripe.com/dRmbJ16IE0IMaKidADawo0x',
    features: [
      '3 Google Business Profile Posts per Week',
      '20 Local Citations per Month',
      'GBP Profile Setup & Full Optimization',
      'Keyword-Optimized Business Description',
      'Category & Services Optimization',
      'Review Monitoring & Response Suggestions',
      'Monthly Performance Report',
      'High-Quality Image Uploads',
    ],
  },
  {
    name: 'Premium',
    price: '$925.00',
    icon: ReceiptText,
    featured: false,
    buttonHref: 'https://buy.stripe.com/3cI28raYUdvy3hQ68bawo0z',
    features: [
      'Weekly 5 GBP Posts (Offers, Updates, or Announcements)',
      '30 Local Citations per Month',
      'Custom Business Flyers (Digital Format & Traditional Marketing)',
      'Professional Business Video (For GBP & Social Use)',
      'Keyword-Rich Business Description',
      'Category & Services Optimization',
      'Review Monitoring & Response Suggestions',
      'Monthly Performance Report',
      'High-Quality Image Uploads',
    ],
  },
]

// Replace '#' with the Terms & Conditions page URL once it exists
export const GBP_TERMS_HREF = '/terms-conditions'
