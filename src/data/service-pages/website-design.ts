import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'website-design',
  shortName: 'website design',
  seo: { title: 'Website Design Services for Small Businesses | Digi Era Pro', description: 'Website design for small and local businesses: clear structure, mobile-first layouts, and calls to action that turn visitors into calls and bookings.' },
  visual: 'design',
  hero: {
    title: 'Website design that turns visitors into',
    titleAccent: 'inquiries.',
    summary: 'We design websites that explain what you do in seconds, look credible on every screen, and make it easy for visitors to call, book, or request a quote.',
    cta: 'Plan your website',
  },
  intro: {
    heading: 'Design is how your',
    headingAccent: 'website sells.',
    lead: 'Most visitors decide within a few seconds whether a website is worth their time. Good design earns those seconds and points them to the next step.',
    body: [
      'Website design is more than choosing colors and fonts. It is deciding what each page needs to say, in what order, and how a visitor moves from “is this the right company?” to “I’ll call them.” We plan the structure and content first, then design layouts that make that path obvious.',
      'Because our designers work alongside our SEO specialists and developers, the design is built to rank, load quickly, and be developed without compromise — not just to look good in a mockup.',
    ],
    highlights: [
      'Page structure planned before visuals',
      'Mobile-first, responsive layouts',
      'Clear calls to action on every page',
      'Designed with SEO and speed in mind',
    ],
  },
  features: {
    eyebrow: 'What we design',
    heading: 'Every page with',
    headingAccent: 'a purpose.',
    note: 'Designs are reviewed with you at each stage, and nothing is built until you have approved the layout.',
    items: [
      { title: 'Site structure & sitemap', desc: 'Deciding which pages you need — services, locations, about, contact — and how they link together for visitors and search engines.' },
      { title: 'Homepage design', desc: 'A homepage that says what you do, who you serve, and why to choose you before anyone scrolls.' },
      { title: 'Service page layouts', desc: 'Dedicated pages for each service with the details, proof, and questions customers need answered before they get in touch.' },
      { title: 'Mobile-first design', desc: 'Layouts designed for phones first, with readable text, tap-friendly buttons, and click-to-call where it matters.' },
      { title: 'Conversion design', desc: 'Calls to action, contact forms, and trust signals placed where visitors are most ready to act.' },
      { title: 'Brand-consistent visuals', desc: 'Typography, color, imagery, and icons that match your brand so the site feels like your business.' },
      { title: 'Accessibility basics', desc: 'Sufficient contrast, clear headings, and descriptive labels so the site works for more people.' },
      { title: 'Website redesigns', desc: 'Refreshing an existing site while keeping the pages and URLs that already bring in search traffic.' },
      { title: 'Design handoff', desc: 'Approved designs prepared for development — by our team or yours — with every state and screen size covered.' },
    ],
  },
  process: {
    heading: 'From first sketch to',
    headingAccent: 'approved design.',
    steps: [
      { title: 'Discovery', desc: 'We learn about your business, customers, competitors, and what you want visitors to do.' },
      { title: 'Structure', desc: 'We plan the sitemap and the content each page needs, in the order visitors need it.' },
      { title: 'Wireframes', desc: 'Simple layouts let us agree the flow of key pages before any visual design.' },
      { title: 'Visual Design', desc: 'We design the full look for desktop and mobile, then refine it with your feedback.' },
      { title: 'Build & Launch', desc: 'Our developers build the approved design, test it on real devices, and launch it with redirects in place.' },
    ],
  },
  showcase: {
    image: '/Assets/about us/whiteboard-session.jpg',
    statement: 'First impressions',
    statementAccent: 'are designed.',
    caption: 'A clear, credible website makes the decision easy for visitors who are comparing you with competitors.',
  },
  fit: {
    audience: [
      { title: 'Businesses with a dated website', desc: 'Your site looks older than your business, and customers comment that it doesn’t reflect the quality of your work.' },
      { title: 'Websites that get visits but few inquiries', desc: 'People arrive but rarely call or fill in the form, which usually points to unclear messaging or a hard-to-find next step.' },
      { title: 'New businesses', desc: 'You need a professional website that explains your services and builds trust from day one.' },
      { title: 'Businesses starting SEO or ads', desc: 'Before you invest in traffic, the pages it lands on need to be ready to convert it.' },
    ],
    why: [
      { title: 'Designers who understand marketing', desc: 'We design around how customers search and decide, informed by the SEO and ad campaigns we run every day.' },
      { title: 'Design and development in one team', desc: 'What you approve is what gets built — no surprises when a design reaches the developers.' },
      { title: 'Search-friendly from the start', desc: 'Page structure, headings, and content are planned with SEO in mind, so the new site is ready to rank.' },
      { title: 'Clients who come back', desc: 'Several of our Google reviews come from business owners whose websites we designed and continue to improve.' },
    ],
  },
  faq: [
    { question: 'What is included in website design?', answer: 'Site structure, page layouts for desktop and mobile, visual design in your brand style, calls to action and forms, and design reviews with you. We can also develop the site, write the content, and set up SEO foundations.' },
    { question: 'How much does a website design cost?', answer: 'It depends on the number of pages, features, and whether you need content written. After a short discovery call we provide a proposal with clear scope and pricing.' },
    { question: 'Will my website be mobile-friendly?', answer: 'Yes. We design mobile-first and test on phones, tablets, and desktops before launch.' },
    { question: 'Can you redesign my existing website without losing my Google rankings?', answer: 'Yes. We review which pages bring in search traffic, keep or improve them, and set up redirects for any URLs that change, so search engines can follow the move.' },
    { question: 'Do you write the website content?', answer: 'We can. Our content team writes service pages, about pages, and calls to action in your voice, or we can work with copy you provide.' },
    { question: 'What is the difference between website design and web development?', answer: 'Design decides what the site looks like and how visitors move through it. Development builds it in code. We do both, so the design is built exactly as approved.' },
  ],
  related: ['web-development', 'landing-page', 'search-engine-optimization', 'branding-strategy'],
  cta: {
    heading: 'Ready for a website that',
    headingAccent: 'brings in work?',
    body: 'Share your current website (if you have one) and what you want it to achieve. We will suggest a structure and next steps.',
    button: 'Plan your website',
  },
}

export default content
