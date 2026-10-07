import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'ecommerce-development',
  shortName: 'e-commerce development',
  seo: { title: 'E-commerce Website Development Services | Digi Era Pro', description: 'E-commerce development for businesses selling online: fast product pages, simple checkout, secure payments, and shipping and inventory integrations.' },
  visual: 'web',
  hero: {
    title: 'E-commerce development for stores',
    titleAccent: 'built to sell.',
    summary: 'We design and build online stores with clear product pages, a simple checkout, and the payment, shipping, and inventory integrations you need to run the business behind them.',
    cta: 'Talk about your store',
  },
  intro: {
    heading: 'An online store is',
    headingAccent: 'a sales system.',
    lead: 'Shoppers leave when a product page is unclear, a page is slow, or the checkout asks for too much. Each of those is a design and development decision.',
    body: [
      'We start with what you sell, how you fulfill orders, and how your customers like to buy. From there we plan the catalog structure, product pages, and checkout flow, then build a store that is fast, secure, and straightforward for your team to manage.',
      'Because we also run SEO, Google Ads, and social campaigns, the store is built with product search visibility, tracking, and marketing feeds in mind from the start.',
    ],
    highlights: [
      'Clear product and category pages',
      'Short, mobile-friendly checkout',
      'Secure payment integrations',
      'Built for product SEO and ad tracking',
    ],
  },
  features: {
    eyebrow: 'What we build',
    heading: 'Everything a store',
    headingAccent: 'needs to sell.',
    note: 'We recommend a platform after understanding your catalog, order volume, and team — not before.',
    items: [
      { title: 'Store setup & platform selection', desc: 'Choosing between a hosted platform and a custom build based on your products, budget, and plans to grow.' },
      { title: 'Product & category pages', desc: 'Photos, descriptions, options, and filters that help shoppers find the right product and buy with confidence.' },
      { title: 'Checkout & payments', desc: 'A short checkout with trusted payment methods, clear shipping costs, and as few form fields as possible.' },
      { title: 'Shipping & tax setup', desc: 'Shipping rates, zones, and sales tax settings configured for where and how you sell.' },
      { title: 'Inventory & order integrations', desc: 'Connecting stock levels, order management, accounting, and fulfillment tools so orders flow without retyping.' },
      { title: 'Product SEO', desc: 'Clean URLs, structured data, unique descriptions, and fast pages that help products appear in search results.' },
      { title: 'Conversion tracking', desc: 'Purchase and revenue tracking for analytics and ad platforms, so you know which channels drive sales.' },
      { title: 'Store migrations', desc: 'Moving products, customers, and orders from another platform, with redirects to protect existing search traffic.' },
      { title: 'Ongoing store support', desc: 'Updates, new features, and fixes once your store is live.' },
    ],
  },
  process: {
    heading: 'From catalog to',
    headingAccent: 'first order.',
    steps: [
      { title: 'Discovery', desc: 'We review your products, customers, fulfillment process, and any store you already run.' },
      { title: 'Planning', desc: 'We recommend a platform, map the catalog structure, and agree features and integrations.' },
      { title: 'Design', desc: 'We design the homepage, category, product, cart, and checkout pages for desktop and mobile.' },
      { title: 'Build & Integrate', desc: 'We build the store, load products, and connect payments, shipping, tax, and inventory.' },
      { title: 'Test & Launch', desc: 'We place test orders end to end, check tracking, and launch with support on hand.' },
    ],
  },
  showcase: {
    statement: 'Fewer clicks to buy.',
    statementAccent: 'More orders.',
    caption: 'Every step between “add to cart” and “order confirmed” is a chance to lose a sale — so we keep it short and clear.',
  },
  fit: {
    audience: [
      { title: 'Businesses starting to sell online', desc: 'You sell in person or by phone and want customers to be able to order online.' },
      { title: 'Stores with low conversion rates', desc: 'Visitors browse but abandon carts, which often points to a slow site, unclear product pages, or a long checkout.' },
      { title: 'Stores that outgrew their setup', desc: 'Your current platform or theme can’t handle your catalog size, product options, or integrations.' },
      { title: 'Brands moving platforms', desc: 'You need to migrate products, customers, and order history without losing search rankings.' },
    ],
    why: [
      { title: 'Built by a marketing agency', desc: 'Your store is built by the same team that can run its SEO, Google Ads, and social campaigns, so marketing is considered from day one.' },
      { title: 'Platform-neutral advice', desc: 'We recommend the platform that suits your business, not the one we happen to prefer.' },
      { title: 'Tracking you can trust', desc: 'Purchase and revenue tracking is set up and tested before launch, so you can measure every channel.' },
      { title: 'Support after launch', desc: 'We stay on to fix issues, add features, and help as your catalog and order volume grow.' },
    ],
  },
  faq: [
    { question: 'Which e-commerce platform should I use?', answer: 'It depends on your catalog, order volume, budget, and how much control you need. Hosted platforms are quick to launch and easy to manage; custom builds suit unusual products or workflows. We recommend one after discovery.' },
    { question: 'Can you migrate my existing online store?', answer: 'Yes. We move products, customers, and order history where the platforms allow it, and set up redirects so existing product URLs keep their search traffic.' },
    { question: 'Do you set up payments and shipping?', answer: 'Yes. We configure payment gateways, shipping rates and zones, and tax settings, then test them with real end-to-end orders before launch.' },
    { question: 'Will my store be optimized for search engines?', answer: 'Yes. We build with clean URLs, product structured data, unique descriptions, and fast pages. Ongoing work such as content and link building is available through our SEO service.' },
    { question: 'Can I manage products and orders myself?', answer: 'Yes. You will be able to add products, update prices and stock, and process orders yourself, and we show your team how.' },
  ],
  related: ['web-development', 'website-design', 'google-ads', 'search-engine-optimization'],
  cta: {
    heading: 'Ready to sell more',
    headingAccent: 'online?',
    body: 'Tell us what you sell, how you fulfill orders, and where you sell today. We will recommend a platform and outline a plan for your store.',
    button: 'Talk about your store',
  },
}

export default content
