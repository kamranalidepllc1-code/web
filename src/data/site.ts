import {
  Flame,
  BarChart2,
  Layers,
  UserCheck,
  Phone,
  Mail,
} from 'lucide-react'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6'
import type { GoogleReview } from '@/types/site'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services', megaMenu: true },
  { label: 'About Us', href: '/about' },
  { label: 'Special Offer', href: '/special-offer' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const MARQUEE_WORDS = ['Digital Marketing', 'Social Media', 'Branding', 'Content', 'Performance']

export const FOOTER_EXPLORE = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
]

export const FOOTER_CONTACT = [
  { label: 'General Inquiries', value: '(786) 600-1595', href: 'tel:+17866001595', icon: Phone },
  { label: 'Sales Department', value: '(832) 521-7343', href: 'tel:+18325217343', icon: Phone },
  { label: 'Email Us', value: 'info@digierapro.com', href: 'mailto:info@digierapro.com', icon: Mail },
]

export const SOCIAL_LINKS = [
  // Profile URLs as linked from the live digierapro.com site.
  { name: 'Facebook', href: 'https://www.facebook.com/DigiEraProUS', icon: FaFacebookF },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/digierapro', icon: FaLinkedinIn },
  { name: 'Instagram', href: 'https://www.instagram.com/digierapro/', icon: FaInstagram },
  { name: 'TikTok', href: 'https://www.tiktok.com/@digierapro', icon: FaTiktok },
  { name: 'X', href: 'https://twitter.com/digierapro', icon: FaXTwitter },
]

export const HISTORY = [
  { year: '2018', title: 'The Startup Begins', desc: 'Digi Era Pro launched as a small startup with one goal: help growing businesses build a real digital presence.' },
  { year: '2023', title: 'Team Expansion', desc: 'Grew our IT, Support, and Sales teams to keep pace with client demand and deliver faster, more dedicated service.' },
  { year: '2025', title: 'Malaysia Expansion', desc: 'Launched a new venture in Malaysia, extending our reach and bringing our digital marketing services to a new region.' },
  { year: '2026', title: 'Stability & Trusted Clients', desc: 'Built a stable foundation and a growing base of trusted clients who return for long-term partnership.' },
]

export const TEAM = [
  { name: 'Talha Khalid', role: 'CEO/Co-Founder, Strategy', img: '/Assets/images/IMG_3074.webp' },
  { name: 'Kamran Ali', role: 'CTO, Communications', img: '/Assets/images/image4.webp' },
  { name: 'Muhammad Zaid', role: 'Head of IT Team', img: '/Assets/images/image2.webp' },
  { name: 'Danish Naveed', role: 'Design Lead', img: '/Assets/images/image3.webp' },
]

// Only facts stated elsewhere on the site: founding year (HISTORY), the service
// list, the Google rating snapshot (useGoogleReviews) and the offices on /contact.
export const STATS = [
  { value: '2018', label: 'Founded' },
  { value: '16', label: 'Services under one roof' },
  { value: '4.9★', label: 'Google rating' },
  { value: '3', label: 'Office locations' },
]

export const PROCESS_STEPS = [
  { num: '01', phase: 'Discovery & Audit', duration: 'First call', desc: 'We learn about your business, your customers, and what you want more of — calls, bookings, sales, or sign-ups. Then we review your website, Google Business Profile, ad accounts, and social channels to see where you stand against local competitors.' },
  { num: '02', phase: 'Strategy & Plan', duration: 'Planning', desc: 'You get a written plan that names the services we recommend, what each one is expected to fix, the budget involved, and how we will measure progress. Nothing starts until you have approved it.' },
  { num: '03', phase: 'Build & Launch', duration: 'Setup', desc: 'We set up tracking first, then build or fix what the plan calls for — website pages, profile optimization, SEO groundwork, ad campaigns, or social content — and launch it with careful early monitoring.' },
  { num: '04', phase: 'Manage & Optimize', duration: 'Ongoing', desc: 'Your account manager and specialists keep improving the work: refining keywords and bids, publishing content, updating your profile, and fixing issues as they appear rather than at month end.' },
  { num: '05', phase: 'Report & Refine', duration: 'Monthly', desc: 'Each month we walk you through what was done, what changed in your rankings, leads, and traffic, and what we plan to focus on next — in plain language, without jargon.' },
]

export const GOOGLE_REVIEWS: GoogleReview[] = [
  { author_name: 'Cindy', rating: 5, text: "I've had a great experience working with Digi Era Pro on my Google Business Profile. They've already helped place my business within the top three results for some of my main keywords, which has been a huge win. Even more impressive, within the first month I acquired a new client directly from my improved Google Maps presence.", relative_time_description: '5 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Cindy&background=CE307D&color=fff' },
  { author_name: 'Pamela Greenawalt', rating: 5, text: 'I am very pleased with the results so far of my Google listing, Business Card, Flyer and website. Henry has been very easy and friendly to work with. He has been very attentive to my changes and has been very patient with me.', relative_time_description: '6 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Pamela+Greenawalt&background=CE307D&color=fff' },
  { author_name: 'Spot On Mobile Detailing Services', rating: 5, text: "Since November 2025, Kate and her team have been working on optimizing my business profile, significantly improving our visibility, positioning, and overall performance compared to where we started.", relative_time_description: '7 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Spot+On&background=CE307D&color=fff' },
  { author_name: 'iBuilders Design and Build', rating: 5, text: "Paul has been absolutely exceptional. His level of professionalism, responsiveness, and genuine care makes a real difference in how my account is managed day to day. He stays on top of every detail, communicates clearly, and consistently delivers results.", relative_time_description: '8 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=iBuilders&background=CE307D&color=fff' },
  { author_name: 'Gavin Sundwall', rating: 5, text: "I have been working with Henry for one month now. They built me a quality website for the fairest price around, it was something I was nervous about paying for but seeing what came out of it I was very impressed and relieved. Henry takes his time to make sure everything is right.", relative_time_description: '6 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Gavin+Sundwall&background=CE307D&color=fff' },
  { author_name: 'Bill', rating: 5, text: "Henry, and the rest of the team at Digi Era Pro LLC really know their stuff. They initiated a multi-faceted approach that is raising the ranking of my Google Business Profile almost daily. Their persistent efforts also extend to everyday management of my profile.", relative_time_description: '7 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Bill&background=CE307D&color=fff' },
  { author_name: 'azober qusiem', rating: 5, text: 'I really appreciate Kate for the great help and hospitality. She was very kind, welcoming, and made the whole experience smooth and comfortable. You can tell she genuinely cares about people and takes pride in what she does. Thank you again! 🙏', relative_time_description: '5 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Azober&background=CE307D&color=fff' },
  { author_name: 'Wansley Racine', rating: 5, text: "I've had a great experience working with Digi Era Pro, especially Kate Lyn. She handles my flyers and social media content, and the quality has been consistently solid.", relative_time_description: '9 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Wansley+Racine&background=CE307D&color=fff' },
  { author_name: 'Colette Wiest', rating: 5, text: 'I am very pleased with the services provided by Digiera. Reasonably priced, quick responses, and fantastic landing page. I WILL Continue to work with them moving forward.', relative_time_description: '7 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Colette+Wiest&background=CE307D&color=fff' },
  { author_name: 'Sean Haiker', rating: 5, text: 'Alexa did a great job communicating. I had many questions that she was able to answer.', relative_time_description: 'a month ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Sean+Haiker&background=CE307D&color=fff' },
  { author_name: 'Rock N Roll Pest Control', rating: 5, text: 'They definitely helped grow my business. Affordable rates and a friendly and very responsive team.', relative_time_description: '4 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Rock+N+Roll&background=CE307D&color=fff' },
  { author_name: 'Dennis Hoefsmit', rating: 5, text: "Captain D Cruises here and just wanted to say I had the pleasure of speaking with Kate about the monthly review they graciously provide me on how progress evolved over the past month. Very informative and professional.", relative_time_description: '3 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Dennis+Hoefsmit&background=CE307D&color=fff' },
  { author_name: 'Brenda Hofman', rating: 5, text: "I had a great experience with Kate Lyn and the Digi Era Pro team. She was very patient and attentive, especially because my English is not very clear. Kate took the time to understand everything I needed and helped me a lot throughout the process.", relative_time_description: '11 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Brenda+Hofman&background=CE307D&color=fff' },
  { author_name: 'Luke Porter', rating: 5, text: "Paul and his team designed my website, logo's and more. Paul personally navigated any troubleshooting and kindly guided me through the Google verification process. I couldn't be more happy with the results.", relative_time_description: 'a year ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Luke+Porter&background=CE307D&color=fff' },
  { author_name: 'Alicia Dooley-Garland', rating: 5, text: 'It has been a pleasure working with the Digi Era Pro team. The team is very professional and willing to help you optimize your google ranking. Paul has been very prompt with his communication on my website enhancement. A cool company to work with.', relative_time_description: '11 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Alicia+Dooley&background=CE307D&color=fff' },
  { author_name: 'Michal Lucky', rating: 5, text: "Digi Era Pro LLC did an outstanding job with the digital marketing for my Google profile. I'm working with Kate, my account manager, and I'm very satisfied with her support so far. She's professional, friendly, and always quick to respond.", relative_time_description: '11 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Michal+Lucky&background=CE307D&color=fff' },
  { author_name: 'Rob Caro', rating: 5, text: 'Great company and Alexis has been fantastic to work with. Communication has been phenomenal.', relative_time_description: '4 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Rob+Caro&background=CE307D&color=fff' },
  { author_name: 'Arianne Etuk', rating: 5, text: 'From the moment I began working with Kate, I was impressed. She has been incredibly responsive, attentive to my needs, and absolutely committed to delivering the results I was looking for.', relative_time_description: 'a year ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Arianne+Etuk&background=CE307D&color=fff' },
  { author_name: 'Donna Peacocke', rating: 5, text: "I've been working with Digi Era Pro for a year or so and my website is great! Just recently they made a 28 second video for my business that is absolutely FABULOUS! Give them a chance to help your business!", relative_time_description: '11 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Donna+Peacocke&background=CE307D&color=fff' },
  { author_name: 'anil murgai', rating: 5, text: 'I worked with Paul, and, he was in one word, fantastic. He knew what to do, how to do and did it. Thanks Paul.', relative_time_description: '2 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Anil+Murgai&background=CE307D&color=fff' },
  { author_name: 'Hector Oliva', rating: 5, text: 'For us, this is the best marketing company out there. They have done an amazing job for our business, and we are very happy with the results. We highly recommend them to anyone looking for a reliable and professional marketing company.', relative_time_description: 'a week ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Hector+Oliva&background=CE307D&color=fff' },
  { author_name: 'Trinidad Arceo', rating: 5, text: "I've had a great experience working with Digi Era Pro. They've been helping me optimize the Google Business Profile for my local pet waste removal company. They are knowledgeable, responsive, and take the time to explain their process.", relative_time_description: '4 weeks ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Trinidad+Arceo&background=CE307D&color=fff' },
  { author_name: 'Jody Carlson', rating: 5, text: 'In a month this company brought my Google listing to 3rd in my area! I am excited to see what more they can do!', relative_time_description: '11 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Jody+Carlson&background=CE307D&color=fff' },
  { author_name: 'Rachael Lamet', rating: 5, text: "I've been incredibly pleased with the services provided by Digi Era Pro LLC. Going Above and Beyond — their team is always available and proactive in managing my online presence.", relative_time_description: '11 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Rachael+Lamet&background=CE307D&color=fff' },
  { author_name: 'Trever Harmon', rating: 5, text: 'Paul, from the start, was invaluable and informative about getting started. He helped me along the process to make sure I understand what my Google profile and website needed for improvement.', relative_time_description: 'a year ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Trever+Harmon&background=CE307D&color=fff' },
]

// OWNER TO CONFIRM: these names/roles match the old placeholder testimonials and
// cannot be verified. Replace with the real client name and business for each video.
export const VIDEO_STORIES = [
  { name: 'Amara Whitfield', role: 'Founder, Bloom & Co.', poster: '/Assets/poster/imgi_77_client-review-1.webp', videoId: 'cvRc7QBf-7A' },
  { name: 'Marcus Chen', role: 'CEO, Northline Logistics', poster: '/Assets/poster/imgi_78_client-review2.webp', videoId: 'Clrd11emal4' },
  { name: 'Priya Raman', role: 'Director, Solace Wellness', poster: '/Assets/poster/imgi_79_client-review3-1_result.webp', videoId: 'OmHcHTjklSk' },
  { name: 'Sofia Lindqvist', role: 'CMO, Vantage Retail', poster: '/Assets/poster/imgi_80_client-review4-1_result.webp', videoId: 'p57xrGysihs' },
]

export const CLIENT_LOGOS = [
  { name: 'Enterprises LLC', img: '/Assets/business success/1.webp', href: 'https://ahebooks.com/' },
  { name: 'Raven Rock Contracting', img: '/Assets/business success/2.webp', href: 'https://ravenrockcontractingva.com/' },
  { name: 'OnPoint Detailing LLC', img: '/Assets/business success/7.webp', href: 'https://onpointdetailingllc.net/' },
  { name: 'Affordable Demolition & Construction LLC', img: '/Assets/business success/4.webp', href: 'https://affordabledemolitionconstruction.com/' },
  { name: 'Creative Fence Company', img: '/Assets/business success/5.webp', href: 'https://creativefenceca.com/' },
  { name: 'SW Mobile Detailing', img: '/Assets/business success/6.webp', href: 'https://swdetailing.com/' },
]

export const PARTNERS = [
  { name: 'Yelp Ads Optimization', img: '/Assets/partners/imgi_40_Gemini_Generated_Image_j15rwpj15rwpj15r-e1761943136131-300x200.webp', href: 'https://www.youtube.com/watch?si=KWlDWxutBCHf_YDm&v=rYX04ADoxnI&feature=youtu.be' },
  { name: 'Meta Business Partner', img: '/Assets/partners/imgi_41_MetaBusinessPartne-e1730318781747-300x212.jpg', href: undefined as string | undefined },
  { name: 'Trustpilot', img: '/Assets/partners/imgi_7_Untitled-design-123.png', href: 'https://www.trustpilot.com/review/digierapro.com' },
  { name: 'Secured by PositiveSSL', img: '/Assets/partners/imgi_1_download-17.webp', href: 'https://secure.trust-provider.com/ttb_searcher/trustlogo?v_querytype=W&v_shortname=POSDV&v_search=https://digierapro.com/&x=6&y=5' },
  { name: 'Google Partner', img: '/Assets/partners/imgi_43_BES-featured-image-1-300x150.jpg', href: 'https://www.google.com/partners/agency?id=3311195559' },
]

export const VALUES = [
  { letter: 'C', word: 'Clarity', desc: 'You always know what we are working on, why it matters, and what it costs. Plans and reports are written in plain language, not marketing jargon.', icon: Flame },
  { letter: 'R', word: 'Responsiveness', desc: 'Every client has a named account manager who answers questions quickly and keeps work moving — the thing our clients mention most in their reviews.', icon: UserCheck },
  { letter: 'E', word: 'Evidence', desc: 'Recommendations come from your data: Search Console, Google Ads, Business Profile insights, and call and form tracking — not hunches or trends.', icon: BarChart2 },
  { letter: 'A', word: 'Accountability', desc: 'We report on what we did and what changed, including what did not work. No guaranteed rankings and no locked-in ad accounts.', icon: Layers },
]

export const WHY_CHOOSE_US = [
  { tab: 'Our Mission', desc: 'To give small and growing businesses the kind of marketing support larger companies take for granted: a clear plan, a dedicated account manager, and SEO, ads, social, and web work that is measured by calls, bookings, and sales.' },
  { tab: 'Our Vision', desc: 'To be the agency local business owners keep working with year after year because the work is honest, the communication is consistent, and the results are reported plainly.' },
  { tab: 'Our Philosophy', desc: 'Start with the fundamentals — an accurate Google Business Profile, a fast website, proper tracking — then build on what the data shows is working. Strategy first, tactics second.' },
]
