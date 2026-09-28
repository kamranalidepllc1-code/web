import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'software-development',
  visual: 'software',
  hero: {
    title: 'Software shaped around the way you',
    titleAccent: 'work.',
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
  cta: {
    heading: 'Ready to simplify how your business',
    headingAccent: 'runs?',
    body: 'Tell us about the process or problem you want to solve. We will come back with practical options and next steps.',
    button: 'Talk about your project',
  },
}

export const metadata = serviceMetadata(content)

export default function SoftwareDevelopmentPage() {
  return <ServicePage content={content} />
}
