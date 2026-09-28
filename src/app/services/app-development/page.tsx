import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'app-development',
  visual: 'app',
  hero: {
    title: 'Apps your customers will',
    titleAccent: 'keep opening.',
    summary: 'We design and build mobile apps with clean interfaces and reliable performance — taking your idea from first sketch to app store launch.',
    cta: 'Discuss your app',
  },
  intro: {
    heading: 'From idea to',
    headingAccent: 'app store.',
    lead: 'A good app feels simple in the hand. Getting it there takes careful planning, thoughtful design, and solid engineering.',
    body: [
      'We start by understanding who the app is for and what it needs to do, then design screens and flows that make those tasks quick and obvious.',
      'Our developers build, test, and prepare the app for release, and we stay involved after launch to fix issues and roll out improvements as your users give feedback.',
    ],
    highlights: [
      'User-first screen and flow design',
      'Built for iOS and Android',
      'Tested on real devices',
      'Updates and support after launch',
    ],
  },
  features: {
    eyebrow: 'What we build',
    heading: 'Apps built around',
    headingAccent: 'real needs.',
    items: [
      { title: 'Mobile apps', desc: 'Apps for iPhone and Android devices, designed around the tasks your users come to do.' },
      { title: 'Cross-platform apps', desc: 'One codebase that runs on both major platforms, helping you reach more users with a single build.' },
      { title: 'Customer-facing apps', desc: 'Booking, ordering, loyalty, and account apps that give your customers a direct line to your business.' },
      { title: 'Business & internal apps', desc: 'Apps that help your team work on the move — field updates, checklists, and access to the data they need.' },
      { title: 'App UI/UX design', desc: 'Clear navigation, readable screens, and interactions that feel natural on a small screen.' },
      { title: 'Maintenance & updates', desc: 'Bug fixes, OS compatibility updates, and new features once your app is live.' },
    ],
  },
  process: {
    heading: 'Five steps to a',
    headingAccent: 'launch-ready app.',
    steps: [
      { title: 'Discovery', desc: 'We learn about your users, goals, and the problem the app should solve.' },
      { title: 'Strategy', desc: 'We define features, priorities, and platforms, and plan a first version that is realistic to build.' },
      { title: 'Design', desc: 'We design screens and user flows, then refine them with you before development starts.' },
      { title: 'Development', desc: 'We build the app, connect it to any services it needs, and share progress as we go.' },
      { title: 'Testing & Launch', desc: 'We test on real devices, fix what we find, and prepare the app for store submission.' },
    ],
  },
  showcase: {
    image: '/Assets/special-offer/hero.jpg',
    statement: 'Every great app starts',
    statementAccent: 'on paper.',
    caption: 'We map screens and user journeys before writing a line of code, so the app you get is the app your users need.',
  },
  cta: {
    heading: 'Have an app idea worth',
    headingAccent: 'building?',
    body: 'Tell us what you want your app to do and who it is for. We will help you shape a clear plan for the first version.',
    button: 'Discuss your app',
  },
}

export const metadata = serviceMetadata(content)

export default function AppDevelopmentPage() {
  return <ServicePage content={content} />
}
