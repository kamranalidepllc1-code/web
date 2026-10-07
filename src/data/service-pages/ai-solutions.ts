import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'ai-solutions',
  shortName: 'AI solutions',
  seo: { title: 'AI Solutions & Business Automation Services | Digi Era Pro', description: 'Practical AI solutions for small businesses: website chat assistants, workflow automation, AI-assisted content tools, and integrations with the software you use.' },
  visual: 'software',
  hero: {
    title: 'AI solutions that take on',
    titleAccent: 'the busywork.',
    summary: 'We build practical AI tools — website assistants, automated workflows, and integrations — that answer common questions, route leads, and save your team hours of repetitive work.',
    cta: 'Discuss an AI project',
  },
  intro: {
    heading: 'Useful AI,',
    headingAccent: 'not hype.',
    lead: 'AI is most valuable when it handles a specific, repetitive job well — answering the same questions, sorting inquiries, drafting first versions — while people stay in charge of decisions.',
    body: [
      'We start by finding where time goes in your business: the questions your team answers every day, the data copied between tools, the follow-ups that slip. Then we design AI and automation for the tasks where it is reliable, and keep a person in the loop where accuracy matters.',
      'The AI assistant and search on this website are examples of our work: they answer visitor questions using only content we have approved, and hand over to our team when they can’t help.',
    ],
    highlights: [
      'Built around specific, measurable tasks',
      'Answers grounded in your own content',
      'Human review where accuracy matters',
      'Connected to the tools you already use',
    ],
  },
  features: {
    eyebrow: 'What we build',
    heading: 'AI that fits',
    headingAccent: 'your workflow.',
    note: 'AI tools can make mistakes, so we design every solution with limits, testing, and a clear way to reach a person.',
    items: [
      { title: 'Website AI assistants', desc: 'Chat assistants that answer common customer questions from your approved content and pass qualified leads to your team.' },
      { title: 'AI-powered site search', desc: 'Search that understands what visitors mean, not just the words they type, and points them to the right page.' },
      { title: 'Workflow automation', desc: 'Automating repetitive steps such as lead routing, follow-up emails, data entry, and notifications.' },
      { title: 'Lead intake & qualification', desc: 'Capturing inquiry details, summarizing them, and sending them to the right person or CRM automatically.' },
      { title: 'AI content tools', desc: 'Internal tools that help your team draft, summarize, and repurpose content faster, with human editing before anything is published.' },
      { title: 'Integrations', desc: 'Connecting AI models to your CRM, email, forms, and databases through secure APIs.' },
      { title: 'Knowledge assistants', desc: 'Internal assistants that help staff find answers in your documents, policies, and procedures.' },
      { title: 'Testing & guardrails', desc: 'Testing responses, limiting topics, and logging conversations so the tool behaves as intended.' },
      { title: 'Support & improvement', desc: 'Reviewing real usage and refining prompts, content, and automations over time.' },
    ],
  },
  process: {
    heading: 'From repetitive task to',
    headingAccent: 'reliable tool.',
    steps: [
      { title: 'Discovery', desc: 'We map the tasks that take the most time and identify where AI or automation can genuinely help.' },
      { title: 'Prioritize', desc: 'We choose a first use case with a clear goal, such as faster replies or fewer manual steps.' },
      { title: 'Prototype', desc: 'We build a working version with your real content and test it against real questions and tasks.' },
      { title: 'Integrate & Launch', desc: 'We connect the tool to your website or systems, add guardrails, and launch it.' },
      { title: 'Review & Improve', desc: 'We review usage, fix weak answers, and extend what works to the next task.' },
    ],
  },
  showcase: {
    image: '/Assets/about us/focused-work.jpg',
    statement: 'Less repetition.',
    statementAccent: 'More time for customers.',
    caption: 'The right automation handles the routine questions and data entry, so your team can focus on work that needs a person.',
  },
  fit: {
    audience: [
      { title: 'Businesses answering the same questions daily', desc: 'Pricing, hours, service areas, and “do you offer…?” questions that take up your team’s time.' },
      { title: 'Teams losing leads to slow follow-up', desc: 'Inquiries arrive after hours or get buried in an inbox before anyone responds.' },
      { title: 'Operations full of manual steps', desc: 'Information copied between forms, spreadsheets, CRMs, and email by hand every day.' },
      { title: 'Content-heavy businesses', desc: 'Teams that produce a lot of written material and want help drafting and summarizing — with people still in control.' },
    ],
    why: [
      { title: 'Practical, task-focused AI', desc: 'We start from a business problem, not a technology, and only use AI where it is reliable enough for the job.' },
      { title: 'We use it ourselves', desc: 'The AI assistant and AI search on this website were built by our team, grounded in our own approved content.' },
      { title: 'Developers and marketers together', desc: 'Our software developers build the tools; our marketers make sure they support how you win and serve customers.' },
      { title: 'Honest about limits', desc: 'We tell you where AI is likely to make mistakes and design human review and handover into the solution.' },
    ],
  },
  faq: [
    { question: 'What kind of AI solutions do you build?', answer: 'Website chat assistants, AI-powered search, lead intake and routing, workflow automation, internal knowledge assistants, and AI content tools — usually connected to the software you already use.' },
    { question: 'Will an AI assistant give customers wrong answers?', answer: 'Any AI can make mistakes. We reduce the risk by grounding answers in content you approve, limiting what the assistant will discuss, testing it against real questions, and making it easy to reach a person.' },
    { question: 'Do I need a lot of data to use AI?', answer: 'No. Many useful tools work from your existing website content, FAQs, and documents. We review what you have and tell you what is realistic.' },
    { question: 'Can AI connect to my CRM or other software?', answer: 'Often, yes — where your software provides an API. We connect AI and automations to CRMs, email, forms, and databases securely.' },
    { question: 'How do you handle privacy and data security?', answer: 'We limit the data each tool can access, avoid sending sensitive information where it isn’t needed, and choose AI providers and settings appropriate for your business. We discuss data handling with you before building.' },
  ],
  related: ['software-development', 'web-development', 'app-development', 'content-creation'],
  cta: {
    heading: 'Have a task that should',
    headingAccent: 'run itself?',
    body: 'Tell us about the questions, follow-ups, or manual steps that take up your team’s time. We will suggest where AI and automation can realistically help.',
    button: 'Discuss an AI project',
  },
}

export default content
