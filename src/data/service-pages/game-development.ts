import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'game-development',
  visual: 'game',
  hero: {
    title: 'Games built to be',
    titleAccent: 'played.',
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
  cta: {
    heading: 'Got a game idea you want to',
    headingAccent: 'bring to life?',
    body: 'Share your concept, platform, and audience. We will help you plan a realistic path from prototype to launch.',
    button: 'Pitch us your game',
  },
}

export default content
