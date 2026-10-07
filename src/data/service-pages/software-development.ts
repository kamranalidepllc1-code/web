import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'software-development',
  shortName: 'custom software development',
  seo: { title: 'Custom Software Development Services | Digi Era Pro', description: 'Custom software development for small and mid-sized businesses: internal tools, dashboards, workflow automation, and API integrations built around how you work.' },
  visual: 'software',
  hero: {
    title: 'Custom software development shaped around',
    titleAccent: 'how you work.',
    summary: 'Custom software, internal tools, and integrations that remove manual work, connect your systems, and give your team one clear place to get things done.',
    cta: 'Talk about your project',
  },
  intro: {
    heading: 'Built for your',
    headingAccent: 'processes.',
    lead: 'Off-the-shelf tools rarely fit perfectly. Custom software is built around how your business actually runs.',
    body: [
      'We look at where time is lost — spreadsheets passed around, data typed twice, systems that do not talk to each other — and design software that handles it for you.',
      'From a focused internal tool to a larger platform, we plan carefully, build in stages, and keep you involved so the result fits your team from day one.',
    ],
    highlights: [
      'Designed around your workflows',
      'Connects with the tools you already use',
      'Built in clear, reviewable stages',
      'Maintenance and support after launch',
    ],
  },
  features: {
    eyebrow: 'What we build',
    heading: 'Tools that make work',
    headingAccent: 'lighter.',
    items: [
      { title: 'Custom business software', desc: 'Systems built for your specific operations — from managing jobs and clients to tracking orders and inventory.' },
      { title: 'Internal tools & dashboards', desc: 'Admin panels and dashboards that bring your key information together in one place.' },
      { title: 'Workflow automation', desc: 'Automating repetitive tasks such as data entry, notifications, and reports so your team can focus on the work that matters.' },
      { title: 'Integrations & APIs', desc: 'Connecting your CRM, payments, forms, and other tools so data flows between them without manual copying.' },
      { title: 'Web-based platforms', desc: 'Cloud-hosted software your team and customers can reach from any browser, with secure logins and user roles.' },
      { title: 'Maintenance & support', desc: 'Ongoing fixes, updates, and improvements to keep your software reliable as your business grows.' },
    ],
  },
  process: {
    heading: 'From requirements to',
    headingAccent: 'rollout.',
    steps: [
      { title: 'Discovery', desc: 'We map your current processes, tools, and pain points with the people who use them every day.' },
      { title: 'Planning', desc: 'We define requirements, priorities, and a phased plan so the most valuable features come first.' },
      { title: 'Design', desc: 'We design the screens, data structure, and user roles, and review them with you before building.' },
      { title: 'Development', desc: 'We build in stages, sharing working versions regularly so you can give feedback early.' },
      { title: 'Testing & Deployment', desc: 'We test thoroughly, deploy, help your team get started, and stay on for support.' },
    ],
  },
  showcase: {
    image: '/Assets/about us/hero-bg.jpg',
    statement: 'Less busywork.',
    statementAccent: 'More business.',
    caption: 'The right software quietly handles the repetitive work, so your team can spend its time where it counts.',
  },
  fit: {
    audience: [
      { title: 'Businesses running on spreadsheets', desc: 'Jobs, orders, or inventory tracked across shared spreadsheets that break, conflict, or depend on one person.' },
      { title: 'Teams retyping the same data', desc: 'Information copied by hand between your CRM, invoicing, scheduling, and email tools.' },
      { title: 'Companies outgrowing off-the-shelf tools', desc: 'Software that fit when you were smaller but now forces workarounds for how your team actually operates.' },
      { title: 'Businesses that need a customer portal', desc: 'A secure place for customers to see orders, documents, or project status without calling you.' },
    ],
    why: [
      { title: 'Built in reviewable stages', desc: 'You see working software early and often, so feedback shapes the product before it is finished.' },
      { title: 'Integrations with what you already use', desc: 'We connect new software to your existing tools where they offer an API, instead of asking you to replace everything.' },
      { title: 'Plain-language process', desc: 'Requirements, progress, and trade-offs are explained without technical jargon.' },
      { title: 'Long-term support', desc: 'We maintain and extend the software after launch as your processes change.' },
    ],
  },
  faq: [
    { question: 'When does custom software make sense?', answer: 'When off-the-shelf tools force constant workarounds, when your team re-enters the same data in several places, or when your process is a genuine advantage that generic software can’t support.' },
    { question: 'Can you integrate with my existing tools?', answer: 'Usually, yes. We can connect to commonly used CRMs, accounting, payment, scheduling, and email platforms where they provide an API.' },
    { question: 'How do you keep a software project on budget?', answer: 'We define requirements up front, build the most valuable features first, and deliver in stages, so scope decisions are made with working software in front of you.' },
    { question: 'How do you handle security?', answer: 'We build with secure logins, role-based access, encrypted connections, and reputable cloud hosting, and we limit access to data to the people who need it.' },
    { question: 'Do you maintain software after launch?', answer: 'Yes. We offer ongoing support for fixes, updates, and new features.' },
  ],
  related: ['ai-solutions', 'app-development', 'web-development'],
  cta: {
    heading: 'Ready to simplify how your business',
    headingAccent: 'runs?',
    body: 'Tell us about the process or problem you want to solve. We will come back with practical options and next steps.',
    button: 'Talk about your project',
  },
}

export default content
