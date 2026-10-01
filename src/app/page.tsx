import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { VideoStories } from '@/components/sections/VideoStories'
import { AboutTimeline } from '@/components/sections/about/AboutTimeline'
import { Services } from '@/components/sections/Services'
import { MarqueeBar } from '@/components/sections/MarqueeBar'
import { Partners } from '@/components/sections/Partners'
import { Values } from '@/components/sections/Values'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { ClientLogos } from '@/components/sections/ClientLogos'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Journal } from '@/components/sections/Journal'
import { Contact } from '@/components/sections/Contact'
import { getPosts } from '@/lib/wordpress/api'
import { formatDate } from '@/lib/blog/utils'
import type { JournalPost } from '@/components/ui/JournalCard'

async function latestJournalPosts(): Promise<JournalPost[]> {
  try {
    const { posts } = await getPosts({ perPage: 5 }) // 1 featured + 4 in the side list
    return posts.map(p => ({
      date: formatDate(p.date, 'short'),
      category: p.categories[0]?.name ?? 'Blog',
      title: p.title,
      excerpt: p.excerpt,
      img: p.image?.url ?? null,
      imgRatio: p.image?.width && p.image?.height ? p.image.width / p.image.height : undefined,
      readTime: 'Read article →',
      href: `/blog/${p.slug}`,
    }))
  } catch (error) {
    console.error('Could not load latest blogs for the home page:', error)
    return []
  }
}

export default async function Home() {
  const journalPosts = await latestJournalPosts()
  return (
    <div style={{ background: '#222429', color: '#f0ede8', fontFamily: "var(--font-outfit), sans-serif", overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <VideoStories />
      <AboutTimeline />
      <Services />
      <MarqueeBar />
      <Partners />
      <Values />
      <Process />
      <Testimonials />
      <ClientLogos />
      <WhyChooseUs />
      <Journal posts={journalPosts} />
      <Contact />
    </div>
  )
}
