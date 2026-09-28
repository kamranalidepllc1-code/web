import { ServicePage, serviceMetadata } from '@/components/sections/service/ServicePage'
import type { ServicePageContent } from '@/types/site'

const content: ServicePageContent = {
  slug: 'social-media-marketing',
  visual: 'social',
  hero: {
    title: 'Social media with a',
    titleAccent: 'plan behind it.',
    summary: 'We plan, create, and publish social content that reflects your brand, keeps your channels active, and gives your audience a reason to engage.',
    cta: 'Talk about your socials',
  },
  intro: {
    heading: 'Consistent, considered,',
    headingAccent: 'on-brand.',
    lead: 'Social media works best when it is consistent, relevant, and recognizably yours — which is hard to keep up while running a business.',
    body: [
      'We build a social strategy around your goals and your audience, then handle the ongoing work: planning content, creating posts, scheduling them, and keeping an eye on conversations.',
      'Each month we review what resonated and what didn’t, and use that to shape the next plan — so your social presence keeps improving rather than just staying busy.',
    ],
    highlights: [
      'Strategy tailored to each platform',
      'Monthly content calendars',
      'Branded graphics and captions',
      'Monthly performance insights',
    ],
  },
  features: {
    eyebrow: 'Service includes',
    heading: 'Everything your channels',
    headingAccent: 'need.',
    note: 'Growth on social depends on many factors outside anyone’s control, so we don’t promise follower counts, engagement, or sales. We focus on quality and consistency.',
    items: [
      { title: 'Social media strategy', desc: 'Clear goals, audience definitions, content pillars, and tone of voice that guide everything we post.' },
      { title: 'Platform strategy', desc: 'Choosing the right platforms for your audience and adapting content to how each one is used.' },
      { title: 'Content planning', desc: 'Monthly calendars that balance promotions, education, behind-the-scenes, and timely topics.' },
      { title: 'Creative content', desc: 'On-brand graphics, carousels, short videos, and captions created for each post.' },
      { title: 'Publishing & scheduling', desc: 'Posting at sensible times with the right formats, hashtags, and links — so your channels stay active.' },
      { title: 'Audience engagement', desc: 'Monitoring comments and messages and responding in your brand voice, or flagging anything that needs you.' },
      { title: 'Profile optimization', desc: 'Bios, highlights, links, and visuals set up so your profiles make a strong first impression.' },
      { title: 'Performance analysis', desc: 'Reviewing reach, engagement, and audience trends to understand what content resonates.' },
      { title: 'Monthly reporting', desc: 'A clear summary of what we published, how it performed, and what we recommend next.' },
    ],
  },
  process: {
    heading: 'Social, managed',
    headingAccent: 'month by month.',
    steps: [
      { title: 'Discovery', desc: 'We review your current channels, audience, competitors, and goals.' },
      { title: 'Strategy', desc: 'We define platforms, content pillars, tone of voice, and posting frequency.' },
      { title: 'Plan & Create', desc: 'We build a monthly calendar and create the graphics, videos, and captions for approval.' },
      { title: 'Publish & Engage', desc: 'We schedule and publish content, then monitor and respond to your community.' },
      { title: 'Review & Refine', desc: 'We analyze performance each month and adjust the plan based on what we learn.' },
    ],
  },
  showcase: {
    statement: 'Show up consistently,',
    statementAccent: 'sound like you.',
    caption: 'A well-run social presence keeps your business visible, familiar, and easy to connect with between purchases.',
  },
  faq: [
    { question: 'Which platforms do you manage?', answer: 'We commonly work with Facebook, Instagram, LinkedIn, TikTok, and X. We’ll recommend the platforms that make sense for your audience rather than trying to be everywhere.' },
    { question: 'Can you guarantee more followers or sales?', answer: 'No. Social media results depend on your audience, industry, and many platform factors. We focus on consistent, quality content and clear insight into what is working.' },
    { question: 'Do I approve content before it goes live?', answer: 'Yes. We share each month’s content calendar for your review and approval before anything is published.' },
    { question: 'How often will you post?', answer: 'Posting frequency is agreed in your plan, based on your goals, platforms, and budget. Consistency matters more than volume.' },
    { question: 'Do you handle paid social advertising?', answer: 'Our social media marketing service focuses on organic content. If you want to run paid social campaigns, we can discuss that as an addition.' },
  ],
  cta: {
    heading: 'Let’s give your socials',
    headingAccent: 'some direction.',
    body: 'Share your social profiles and what you want them to achieve. We will review where you are and suggest a practical plan.',
    button: 'Talk about your socials',
  },
}

export const metadata = serviceMetadata(content)

export default function SocialMediaMarketingPage() {
  return <ServicePage content={content} />
}
