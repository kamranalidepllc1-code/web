import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'landing-page',
  shortName: 'landing page design',
  seo: { title: 'Landing Page Design Services for Ads & Offers | Digi Era Pro', description: 'Conversion-focused landing page design for Google Ads, social campaigns, and special offers: clear messaging, strong calls to action, fast mobile-first pages.' },
  visual: 'landing',
  hero: {
    title: 'Landing page design that turns clicks into',
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
  fit: {
    audience: [
      { title: 'Businesses running paid ads', desc: 'Google Ads or social campaigns that currently send visitors to a busy homepage instead of a page built for the offer.' },
      { title: 'Launches, offers, and events', desc: 'A new service, seasonal promotion, or event that needs its own page with one clear next step.' },
      { title: 'Service businesses wanting more quote requests', desc: 'A page focused on a single service and area, with proof, pricing cues, and a short form.' },
      { title: 'Teams testing new ideas', desc: 'A fast way to test demand for a new offer before investing in a full website section.' },
    ],
    why: [
      { title: 'Built alongside your ads', desc: 'Our paid search team and designers work together, so the headline matches the ad and the page delivers on its promise.' },
      { title: 'Copy, design, and build in one team', desc: 'No waiting on separate writers, designers, and developers — one team takes the page from brief to launch.' },
      { title: 'Tracking connected from day one', desc: 'Forms, calls, and bookings are tracked so you can see exactly how many inquiries the page produces.' },
      { title: 'Refined after launch', desc: 'We review how visitors use the page and adjust headlines, layout, and calls to action where the data points.' },
    ],
  },
  faq: [
    { question: 'What is the difference between a landing page and a website?', answer: 'A website serves many purposes and audiences. A landing page has one goal — such as a quote request or booking — and removes anything that distracts from it, which usually makes it more effective for a specific campaign.' },
    { question: 'Do I need a landing page for Google Ads?', answer: 'It isn’t required, but it usually helps. Google rewards ads whose landing pages are relevant to the search, and visitors are more likely to act on a page that matches the ad they clicked.' },
    { question: 'Can you connect the form to my email or CRM?', answer: 'Yes. We can send form submissions to your inbox and to most common CRM and email marketing tools, and set up tracking so each submission is recorded as a conversion.' },
    { question: 'Will the landing page work on mobile?', answer: 'Yes. We design mobile-first with large tap targets, short forms, and click-to-call buttons, because much paid and social traffic arrives on phones.' },
    { question: 'Can you A/B test landing pages?', answer: 'Yes, where there is enough traffic for a fair test. On lower-traffic pages we make one considered change at a time and compare results over a reasonable period.' },
  ],
  related: ['google-ads', 'website-design', 'content-creation', 'social-media-marketing'],
  cta: {
    heading: 'Have a campaign that needs a',
    headingAccent: 'landing page?',
    body: 'Share your offer, audience, and goal. We will help you shape a page that gives your campaign a clear, focused home.',
    button: 'Plan your landing page',
  },
}

export default content
