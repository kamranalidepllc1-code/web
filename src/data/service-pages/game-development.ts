import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'game-development',
  shortName: 'game development',
  seo: { title: 'Mobile & Web Game Development Services | Digi Era Pro', description: 'Game development for mobile and web: game design, art and UI, playable prototypes, development, testing, and launch for casual and promotional games.' },
  visual: 'game',
  hero: {
    title: 'Mobile and web game development,',
    titleAccent: 'built to be played.',
    summary: 'We turn game ideas into polished, playable experiences for mobile and web — from concept and design through development, testing, and launch.',
    cta: 'Pitch us your game',
  },
  intro: {
    heading: 'Ideas into',
    headingAccent: 'playable worlds.',
    lead: 'A great game is simple to pick up and hard to put down. Getting that balance right is a craft.',
    body: [
      'We work with you to shape the core idea — the mechanics, the goal, and what makes it fun — then prototype early so you can play it and give feedback before full production.',
      'Our designers and developers work together on art, interface, and gameplay, so the finished game looks good, feels responsive, and runs smoothly on the devices your players use.',
    ],
    highlights: [
      'Early playable prototypes',
      'Game art and interface design',
      'Built for mobile and web',
      'Testing and post-launch updates',
    ],
  },
  features: {
    eyebrow: 'What we build',
    heading: 'From first idea to',
    headingAccent: 'final level.',
    items: [
      { title: 'Mobile games', desc: 'Games designed for phones and tablets, with touch controls and short, satisfying play sessions.' },
      { title: 'Web & browser games', desc: 'Games that run in the browser with no download — great for campaigns, promotions, and quick play.' },
      { title: 'Casual games', desc: 'Easy-to-learn puzzle, arcade, and casual games built for a wide audience.' },
      { title: 'Game design & mechanics', desc: 'Core loops, levels, and progression planned so the game stays engaging from the first minute.' },
      { title: 'Game art & UI', desc: 'Characters, environments, menus, and HUDs designed to give your game a distinct look.' },
      { title: 'Testing & live updates', desc: 'Playtesting, bug fixing, and new content or balance updates after release.' },
    ],
  },
  process: {
    heading: 'How a game comes',
    headingAccent: 'together.',
    steps: [
      { title: 'Concept', desc: 'We explore your idea, audience, and platform, and agree on what the game should feel like.' },
      { title: 'Game Design', desc: 'We plan mechanics, levels, and progression, and document how the game will play.' },
      { title: 'Art & Prototype', desc: 'We create the visual style and a playable prototype to test the core idea early.' },
      { title: 'Development', desc: 'We build out the full game — levels, interface, sound, and polish — in regular playable builds.' },
      { title: 'Testing & Launch', desc: 'We playtest, fix issues, tune difficulty, and prepare the game for release.' },
    ],
  },
  showcase: {
    statement: 'Fun is designed.',
    statementAccent: 'Then refined.',
    caption: 'We prototype, play, and adjust until the core experience feels right — before scaling up to the full game.',
  },
  fit: {
    audience: [
      { title: 'Brands planning a promotional game', desc: 'A browser game for a campaign, launch, or event that people can play instantly without downloading anything.' },
      { title: 'Founders with a casual game idea', desc: 'A puzzle, arcade, or casual concept that needs design, art, and development to become a playable release.' },
      { title: 'Gamified learning and training', desc: 'Organizations that want to teach or train through short, interactive game experiences.' },
    ],
    why: [
      { title: 'Prototype first', desc: 'You play an early version of the core idea before full production, so problems are found when they are cheap to fix.' },
      { title: 'Art and code in one team', desc: 'Our designers and developers work together on characters, interface, and gameplay.' },
      { title: 'Built for your players’ devices', desc: 'We test on the phones and browsers your audience actually uses.' },
      { title: 'Updates after launch', desc: 'Bug fixes, balance changes, and new content once the game is live.' },
    ],
  },
  faq: [
    { question: 'Which platforms do you build games for?', answer: 'Mobile games for iOS and Android, and browser games that run on desktop and mobile without a download.' },
    { question: 'Can you build a game for a marketing campaign?', answer: 'Yes. Short, branded browser games work well for promotions and events, and we can connect them to your website, landing page, or lead capture.' },
    { question: 'How long does it take to develop a game?', answer: 'A simple casual or promotional game takes far less time than a game with many levels and systems. We agree scope and milestones after the concept stage.' },
    { question: 'Do you create the game art?', answer: 'Yes. Our designers create characters, environments, menus, and interface elements in a style agreed with you.' },
    { question: 'Can you update the game after it launches?', answer: 'Yes. We provide post-launch support for fixes, balance changes, and new content.' },
  ],
  related: ['app-development', 'graphic-design', 'software-development'],
  cta: {
    heading: 'Got a game idea you want to',
    headingAccent: 'bring to life?',
    body: 'Share your concept, platform, and audience. We will help you plan a realistic path from prototype to launch.',
    button: 'Pitch us your game',
  },
}

export default content
