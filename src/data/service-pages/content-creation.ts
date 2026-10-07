import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'content-creation',
  shortName: 'content creation',
  seo: { title: 'Content Creation & SEO Copywriting Services | Digi Era Pro', description: 'Content creation for websites, blogs, and social media. Original, SEO-aware copy written in your brand voice to explain your services and win customers.' },
  visual: 'content',
  hero: {
    title: 'Content creation that sounds',
    titleAccent: 'like your business.',
    summary: 'We write and create website copy, blog articles, social content, and marketing materials that explain what you do clearly and sound like your business.',
    cta: 'Discuss your content',
  },
  intro: {
    heading: 'Words that do',
    headingAccent: 'real work.',
    lead: 'Good content answers your customers’ questions, reflects how your business sounds, and makes it easy to take the next step.',
    body: [
      'We begin by understanding your business, your audience, and what makes you different. From there, we plan and create content with a clear purpose — whether that is explaining a service, building trust, or supporting your search visibility.',
      'Every piece is researched, written in your brand voice, and reviewed with you, so what goes live is accurate, useful, and genuinely yours.',
    ],
    highlights: [
      'Website, blog, social, and marketing content',
      'Written in your brand voice',
      'Search-aware without keyword stuffing',
      'Review and revisions included',
    ],
  },
  features: {
    eyebrow: 'What we create',
    heading: 'Content for every',
    headingAccent: 'channel.',
    note: 'All content is original, fact-checked with you, and written for people first.',
    items: [
      { title: 'Website content', desc: 'Home, about, and service pages that explain what you do clearly and guide visitors to act.' },
      { title: 'Blog content', desc: 'Well-researched articles that answer customer questions and support your search visibility over time.' },
      { title: 'Social media content', desc: 'Captions, post ideas, and short-form scripts that keep your channels active and on-brand.' },
      { title: 'Marketing copy', desc: 'Email campaigns, ad copy, brochures, and landing pages written to persuade without overselling.' },
      { title: 'Creative concepts', desc: 'Campaign ideas, themes, and angles that give your marketing a clear and memorable direction.' },
      { title: 'Content strategy', desc: 'Topic planning, content calendars, and priorities based on your goals and audience questions.' },
      { title: 'SEO-aware writing', desc: 'Content structured around real search intent, with natural language rather than forced keywords.' },
      { title: 'Editing & refreshing', desc: 'Improving and updating existing content so it stays accurate, current, and useful.' },
      { title: 'Brand voice guidance', desc: 'Defining how your business sounds, so all content feels consistent — whoever writes it.' },
    ],
  },
  process: {
    heading: 'From idea to',
    headingAccent: 'published piece.',
    steps: [
      { title: 'Discovery', desc: 'We learn about your business, audience, voice, and the goals the content needs to support.' },
      { title: 'Strategy', desc: 'We plan topics, formats, and priorities, and agree a schedule that works for you.' },
      { title: 'Research & Write', desc: 'We research each topic and create content in your brand voice.' },
      { title: 'Review', desc: 'You review each piece, and we refine it until it is accurate and ready.' },
      { title: 'Publish & Improve', desc: 'We deliver or publish content and revisit it over time to keep it performing.' },
    ],
  },
  showcase: {
    image: '/Assets/about us/focused-work.jpg',
    statement: 'Content your customers',
    statementAccent: 'actually read.',
    caption: 'Clear, useful content builds trust long before a customer gets in touch — and keeps working after it is published.',
  },
  faq: [
    { question: 'How long should a blog post be?', answer: 'Long enough to answer the question completely, and no longer. A quick how-to might need 600 words; a detailed buying guide might need 2,000. We decide length based on the topic and what is already ranking, not a fixed word count.' },
    { question: 'Who writes the content?', answer: 'Our team of writers and content specialists. We combine your knowledge of the business with our experience in writing for the web, social media, and marketing.' },
    { question: 'Will the content sound like my business?', answer: 'Yes. We start by understanding your brand voice and review drafts with you, so the final content reads naturally and represents you accurately.' },
    { question: 'Is the content original?', answer: 'Yes. Every piece is written specifically for your business. We don’t reuse or spin content from other sources.' },
    { question: 'Do you optimize content for search engines?', answer: 'Yes, where it makes sense. We structure content around real search intent and write naturally, without keyword stuffing.' },
    { question: 'Can you create content on an ongoing basis?', answer: 'Yes. Many clients work with us monthly on blog articles, social content, and marketing copy to keep their channels consistently active.' },
  ],
  fit: {
    audience: [
      { title: 'Websites with thin service pages', desc: 'Each service gets a sentence or two, so neither customers nor search engines can tell what you actually offer.' },
      { title: 'Businesses that want a blog but lack time', desc: 'You know helpful articles build trust and search visibility, but writing them never makes it onto the schedule.' },
      { title: 'Copy that sounds like everyone else', desc: 'Your website and posts say “quality service” and “customer satisfaction” — the same words every competitor uses.' },
      { title: 'Launches and new services', desc: 'A new product, location, or offer needs clear pages, emails, and posts written quickly and consistently.' },
    ],
    why: [
      { title: 'Writers who work with SEO specialists', desc: 'Topics and page structure are planned around real search questions, then written naturally for people.' },
      { title: 'Checked with you before publishing', desc: 'You review every piece for accuracy, so what goes live reflects how your business really works.' },
      { title: 'One voice across every channel', desc: 'Website, blog, social, email, and ad copy all come from the same team and sound like the same business.' },
      { title: 'Written for your business only', desc: 'Every piece is original and created specifically for you — never recycled or spun from other sources.' },
    ],
  },
  related: ['search-engine-optimization', 'social-media-marketing', 'branding-strategy', 'website-design'],
  cta: {
    heading: 'Let’s tell your story',
    headingAccent: 'well.',
    body: 'Tell us what content you need and where it will be used. We will suggest a plan, timeline, and the best place to start.',
    button: 'Discuss your content',
  },
}

export default content
