import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'app-development',
  shortName: 'app development',
  seo: { title: 'iOS & Android App Development Services | Digi Era Pro', description: 'Mobile app development for iOS and Android: UX design, cross-platform builds, testing on real devices, app store launch, and ongoing updates.' },
  visual: 'app',
  hero: {
    title: 'App development from idea to',
    titleAccent: 'app store.',
    summary: 'We design and build mobile apps with clean interfaces and reliable performance — taking your idea from first sketch to app store launch.',
    cta: 'Discuss your app',
  },
  intro: {
    heading: 'Simple in the hand,',
    headingAccent: 'solid underneath.',
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
  fit: {
    audience: [
      { title: 'Businesses with repeat customers', desc: 'Booking, ordering, loyalty, or account features that give regular customers a faster way to deal with you.' },
      { title: 'Teams working in the field', desc: 'Checklists, job updates, photos, and customer details available on a phone instead of paper or group chats.' },
      { title: 'Founders with a new product idea', desc: 'A focused first version that proves the idea with real users before you invest in every feature.' },
      { title: 'Businesses with an outdated app', desc: 'An existing app that crashes, looks dated, or no longer works with the latest phone operating systems.' },
    ],
    why: [
      { title: 'Design and development under one roof', desc: 'The people who design your screens work directly with the developers who build them.' },
      { title: 'A realistic first version', desc: 'We help you decide what belongs in version one so you can launch sooner and improve based on real feedback.' },
      { title: 'Tested on real devices', desc: 'We test on actual iPhones and Android phones, not just simulators, before submitting to the stores.' },
      { title: 'Marketing support for launch', desc: 'Our team can also handle your app store listing, landing page, and launch content.' },
    ],
  },
  faq: [
    { question: 'How much does it cost to build an app?', answer: 'It depends on the features, platforms, integrations, and design complexity. After a discovery conversation we provide a scoped estimate, often with options for a smaller first version.' },
    { question: 'Do you build apps for both iOS and Android?', answer: 'Yes. We commonly use cross-platform development so one codebase serves both, and recommend fully native builds when an app needs it.' },
    { question: 'How long does app development take?', answer: 'A focused first version takes considerably less time than a feature-rich platform. We plan the work in stages with clear milestones and share working builds as we go.' },
    { question: 'Do you help publish the app to the App Store and Google Play?', answer: 'Yes. We prepare the builds, store listings, screenshots, and submission details, and work through any review feedback from Apple or Google.' },
    { question: 'Do you support the app after launch?', answer: 'Yes. We offer ongoing maintenance for bug fixes, operating system updates, and new features.' },
  ],
  related: ['software-development', 'ai-solutions', 'website-design', 'landing-page'],
  cta: {
    heading: 'Have an app idea worth',
    headingAccent: 'building?',
    body: 'Tell us what you want your app to do and who it is for. We will help you shape a clear plan for the first version.',
    button: 'Discuss your app',
  },
}

export default content
