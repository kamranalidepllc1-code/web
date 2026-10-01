import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'web-development',
  visual: 'web',
  hero: {
    title: 'Websites engineered to',
    titleAccent: 'perform.',
    summary: 'From business websites to custom web applications, we design and build fast, secure, responsive sites that are easy to use and built to grow with your business.',
    cta: 'Start your project',
  },
  intro: {
    heading: 'Built around how your',
    headingAccent: 'business works.',
    lead: 'Your website is often the first conversation a customer has with your business. We make sure it is a good one.',
    body: [
      'Our web development team turns your goals into a site that loads quickly, works on every screen, and is structured so visitors can find what they need and take the next step.',
      'Because our developers work alongside our designers and marketers, the site we build is ready for the rest of your growth plan — search, ads, social, and content — from day one.',
    ],
    highlights: [
      'Responsive on every device',
      'Clean, maintainable code',
      'Built with search and marketing in mind',
      'Support through launch and beyond',
    ],
  },
  features: {
    eyebrow: 'What we build',
    heading: 'Sites and apps,',
    headingAccent: 'made to measure.',
    items: [
      { title: 'Business websites', desc: 'Professional websites for local and growing businesses that clearly explain what you do and make it easy for customers to get in touch.' },
      { title: 'Corporate websites', desc: 'Structured, multi-page sites for established companies that need to present services, teams, and locations under one consistent brand.' },
      { title: 'Custom web applications', desc: 'Tailored web tools — portals, dashboards, and internal systems — built around the way your business actually operates.' },
      { title: 'E-commerce websites', desc: 'Online stores with clear product pages and a straightforward checkout, designed to make buying simple.' },
      { title: 'Responsive websites', desc: 'Every build adapts to phones, tablets, and desktops, so your site looks and works right wherever customers find you.' },
      { title: 'Website enhancements', desc: 'Improvements to an existing site — refreshed layouts, faster pages, and updated content — without starting from scratch.' },
    ],
  },
  process: {
    heading: 'Five steps from idea to',
    headingAccent: 'launch.',
    steps: [
      { title: 'Discovery', desc: 'We learn about your business, customers, and goals, and review any site or systems you already have.' },
      { title: 'Strategy', desc: 'We plan the pages, features, and structure your site needs, and agree on scope and priorities.' },
      { title: 'Design', desc: 'We design the look and flow of key pages so you can see and approve the experience before it is built.' },
      { title: 'Development', desc: 'We build the site with clean, responsive code, connecting forms, content, and any integrations.' },
      { title: 'Testing & Launch', desc: 'We test across devices and browsers, fix what we find, and launch — then stay on hand for support.' },
    ],
  },
  showcase: {
    image: '/Assets/contact-us/imgi_9_Bg1.jpg',
    statement: 'Great websites feel effortless.',
    statementAccent: 'That takes work.',
    caption: 'Structure, speed, and responsiveness are handled behind the scenes, so your customers only notice how easy it is to use.',
  },
  stack: {
    heading: 'Modern tools, built to last.',
    note: 'This website is built on the same modern stack — a solid foundation for fast, maintainable sites.',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  cta: {
    heading: 'Ready to build something',
    headingAccent: 'better?',
    body: 'Tell us about your business and what you need your website to do. We will come back with a clear plan and next steps.',
    button: 'Start your project',
  },
}

export default content
