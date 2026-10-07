import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'graphic-design',
  shortName: 'graphic design',
  seo: { title: 'Graphic Design Services for Marketing & Print | Digi Era Pro', description: 'Graphic design services for social media, flyers, ads, business cards, and brand materials — on-brand visuals delivered print-ready and web-ready.' },
  visual: 'design',
  hero: {
    title: 'Graphic design that communicates',
    titleAccent: 'at a glance.',
    summary: 'From social posts to campaign creatives, we design visuals that look sharp, stay on-brand, and communicate your message at a glance.',
    cta: 'Start a design project',
  },
  intro: {
    heading: 'Good design is',
    headingAccent: 'clear communication.',
    lead: 'People decide in seconds whether something is worth their attention. Design is what earns that moment.',
    body: [
      'We create graphics that do a job: explaining an offer, announcing news, building recognition, or guiding someone to the next step. Every piece starts with what it needs to say and who needs to see it.',
      'We work within your brand guidelines — or help establish them — so every design, across every channel, looks like it came from the same business.',
    ],
    highlights: [
      'Marketing, social, and campaign design',
      'Consistent with your brand identity',
      'Print-ready and digital formats',
      'Revisions built into every project',
    ],
  },
  features: {
    eyebrow: 'Creative design services',
    heading: 'Visuals for every',
    headingAccent: 'touchpoint.',
    note: 'Every design is created for its format and purpose, and delivered in the file types you need.',
    items: [
      { title: 'Marketing graphics', desc: 'Flyers, brochures, posters, and promotional materials that present your offer clearly and professionally.' },
      { title: 'Social media graphics', desc: 'Post designs, carousels, stories, and cover images sized and styled for each platform.' },
      { title: 'Campaign creatives', desc: 'Cohesive sets of visuals for a launch, promotion, or seasonal campaign, adapted across channels.' },
      { title: 'Digital ad design', desc: 'Display and social ad creatives designed to stand out in a busy feed and communicate quickly.' },
      { title: 'Digital design', desc: 'Website banners, email headers, presentation decks, and graphics for your online presence.' },
      { title: 'Print design', desc: 'Business cards, signage, packaging, and printed materials prepared correctly for production.' },
      { title: 'Visual communication', desc: 'Infographics and illustrated explanations that make complex information easy to follow.' },
      { title: 'Brand-consistent templates', desc: 'Reusable templates so your team can create on-brand materials quickly and consistently.' },
      { title: 'Refresh & redesign', desc: 'Updating existing materials so they look current while keeping what your customers recognize.' },
    ],
  },
  process: {
    heading: 'A creative process',
    headingAccent: 'with clear steps.',
    steps: [
      { title: 'Brief', desc: 'We learn what the design needs to achieve, who it is for, where it will appear, and any brand guidelines.' },
      { title: 'Concept', desc: 'We explore visual directions — layout, typography, imagery, and color — grounded in your brand.' },
      { title: 'Design', desc: 'We develop the chosen direction into polished designs, sized and formatted for each use.' },
      { title: 'Refine', desc: 'We review the work with you and make revisions until it is exactly right.' },
      { title: 'Deliver', desc: 'We hand over final files in the formats you need, ready for print, web, or social.' },
    ],
  },
  showcase: {
    image: '/Assets/about us/studio-team.webp',
    statement: 'Make every visual',
    statementAccent: 'count.',
    caption: 'Thoughtful design gives your message clarity, your brand consistency, and your audience a reason to stop and look.',
  },
  faq: [
    { question: 'Do you design business cards and flyers?', answer: 'Yes. Business cards, flyers, brochures, door hangers, and posters are some of our most common requests. We set up files to your printer’s specifications so they print correctly.' },
    { question: 'What kinds of design projects do you take on?', answer: 'Marketing materials, social media graphics, campaign creatives, digital ads, print materials, presentations, and more. If it is visual and represents your business, we can likely help.' },
    { question: 'Do you need brand guidelines to start?', answer: 'No. If you have guidelines, we follow them closely. If you don’t, we can work from your existing materials or help you define a simple visual direction first.' },
    { question: 'How many revisions are included?', answer: 'Revision rounds are agreed at the start of each project, so you know exactly what is included. We aim to get the direction right early to keep revisions focused.' },
    { question: 'Which file formats will I receive?', answer: 'You receive files suited to how the design will be used — for example print-ready PDFs, high-resolution PNG or JPG files, and source files where agreed.' },
    { question: 'Can you design on an ongoing basis?', answer: 'Yes. Many clients work with us monthly for social graphics and marketing materials, which keeps their visuals consistent over time.' },
  ],
  fit: {
    audience: [
      { title: 'Businesses needing regular social graphics', desc: 'You post every week and need a steady supply of on-brand graphics without hiring a designer.' },
      { title: 'Owners preparing print materials', desc: 'Flyers, business cards, brochures, and signage that need to look professional and print correctly the first time.' },
      { title: 'Advertisers needing ad creatives', desc: 'Display and social ads in every size the platforms require, designed to read clearly on a phone.' },
      { title: 'Teams without an in-house designer', desc: 'Marketing managers who need dependable design support for presentations, emails, and campaigns.' },
    ],
    why: [
      { title: 'Design made for marketing', desc: 'Our designers work alongside the people running your ads and social channels, so every graphic is made for where it will appear.' },
      { title: 'Consistent with your brand', desc: 'We follow your guidelines — or create simple ones — so everything looks like it came from the same business.' },
      { title: 'Files ready to use', desc: 'Print-ready PDFs, correctly sized web and social files, and source files where agreed.' },
      { title: 'Trusted for everyday materials', desc: 'Clients regularly come to us for flyers, business cards, logos, and social content alongside their website and marketing.' },
    ],
  },
  related: ['branding-strategy', 'social-media-marketing', 'content-creation', 'landing-page'],
  cta: {
    heading: 'Let’s create something',
    headingAccent: 'worth noticing.',
    body: 'Tell us what you need designed and where it will be used. We will come back with a clear plan, timeline, and next steps.',
    button: 'Start a design project',
  },
}

export default content
