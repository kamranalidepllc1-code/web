import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'web-development',
  shortName: 'web development',
  seo: { title: 'Web Development Services | Custom Websites | Digi Era Pro', description: 'Web development for businesses that need fast, secure, responsive websites and custom web applications, built with clean code and SEO best practices.' },
  visual: 'web',
  hero: {
    title: 'Web development built to',
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
  fit: {
    audience: [
      { title: 'Businesses with slow or outdated websites', desc: 'Pages take too long to load, break on phones, or still look like they did years ago.' },
      { title: 'Companies that need custom functionality', desc: 'Booking systems, customer portals, calculators, dashboards, or integrations a template can’t handle.' },
      { title: 'Businesses planning SEO or ads', desc: 'Search and paid traffic only pay off if the site underneath is fast, crawlable, and built to convert.' },
      { title: 'Teams stuck with a site nobody can update', desc: 'You rely on a developer for every small text change and want a site your team can manage.' },
    ],
    why: [
      { title: 'Developers who work with marketers', desc: 'Our developers build alongside our SEO, ads, and design teams, so the site is ready for marketing from launch day.' },
      { title: 'Modern, maintainable code', desc: 'We build with modern frameworks such as Next.js and React, with clean code that is straightforward to extend.' },
      { title: 'Performance and SEO built in', desc: 'Fast loading, mobile responsiveness, metadata, structured data, and redirects are part of the build, not an afterthought.' },
      { title: 'Support after launch', desc: 'We stay on hand to fix issues, make updates, and add features as your business grows.' },
    ],
  },
  faq: [
    { question: 'What is the difference between web design and web development?', answer: 'Web design covers how a site looks and how visitors move through it — layout, visuals, and page structure. Web development is building it: the code, content management, forms, integrations, and performance. We handle both, and our website design service focuses specifically on the visual and conversion side.' },
    { question: 'How long does it take to build a website?', answer: 'It depends on the number of pages, features, and how quickly content and feedback come together. A focused business website takes far less time than a custom web application. We agree a timeline with clear milestones before work begins.' },
    { question: 'Will my website work on phones and tablets?', answer: 'Yes. Every site we build is responsive and tested on phones, tablets, and desktops, since many visitors arrive on mobile.' },
    { question: 'Will I be able to update the website myself?', answer: 'Yes, if you want to. We can set up a content management system so your team can edit text, images, and blog posts without touching code.' },
    { question: 'Do you redesign or rebuild existing websites?', answer: 'Yes. We review your current site first, keep what works — including pages that already rank — and set up redirects so you don’t lose search traffic in the move.' },
    { question: 'Is SEO included in web development?', answer: 'Technical SEO foundations are included: fast pages, clean structure, metadata, and crawlable code. Ongoing work such as keyword targeting, content, and link building is part of our separate SEO service.' },
  ],
  related: ['website-design', 'ecommerce-development', 'landing-page', 'search-engine-optimization'],
  cta: {
    heading: 'Ready to build something',
    headingAccent: 'better?',
    body: 'Tell us about your business and what you need your website to do. We will come back with a clear plan and next steps.',
    button: 'Start your project',
  },
}

export default content
