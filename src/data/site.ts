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
  { label: 'Contact', href: '/contact' },
]

export const MARQUEE_WORDS = ['Digital Marketing', 'Social Media', 'Branding', 'Content', 'Performance']

export const FOOTER_EXPLORE = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '#' },
]

export const FOOTER_CONTACT = [
  { label: 'General Inquiries', value: '(786) 600-1595', href: 'tel:+17866001595', icon: Phone },
  { label: 'Sales Department', value: '(832) 521-7343', href: 'tel:+18325217343', icon: Phone },
  { label: 'Email Us', value: 'info@digierapro.com', href: 'mailto:info@digierapro.com', icon: Mail },
]

export const SOCIAL_LINKS = [
  { name: 'Facebook', href: '#', icon: FaFacebookF },
  { name: 'LinkedIn', href: '#', icon: FaLinkedinIn },
  { name: 'Instagram', href: '#', icon: FaInstagram },
  { name: 'TikTok', href: '#', icon: FaTiktok },
  { name: 'X', href: '#', icon: FaXTwitter },
]

export const HISTORY = [
  { year: '2018', title: 'The Startup Begins', desc: 'Digi Era Pro launched as a small startup with one goal: help growing businesses build a real digital presence.' },
  { year: '2023', title: 'Team Expansion', desc: 'Grew our IT, Support, and Sales teams to keep pace with client demand and deliver faster, more dedicated service.' },
  { year: '2025', title: 'Malaysia Expansion', desc: 'Launched a new venture in Malaysia, extending our reach and bringing our digital marketing services to a new region.' },
  { year: '2026', title: 'Stability & Trusted Clients', desc: 'Built a stable foundation and a growing base of trusted clients who return for long-term partnership.' },
]

export const TEAM = [
  { name: 'Talha Khalid', role: 'CEO/Co-Founder, Strategy', img: '/Assets/images/IMG_3074.JPG' },
  { name: 'Kamran Ali', role: 'CTO, Communications', img: '/Assets/images/image4.png' },
  { name: 'Nuhammad Zaid', role: 'Head of IT Team', img: '/Assets/images/image (2).png' },
  { name: 'Danish Naveed', role: 'Design Lead', img: '/Assets/images/image3.png' },
]

export const STATS = [
  { value: '14', label: 'Years operating' },
  { value: '280+', label: 'Projects delivered' },
  { value: '40', label: 'Global clients' },
  { value: '3', label: 'Cannes Lions' },
]

export const PROCESS_STEPS = [
  { num: '01', phase: 'Discovery', duration: '1–2 weeks', desc: 'We begin by listening. Stakeholder interviews, competitive analysis, audience research, and brand archaeology to understand what you are and what you want to become.' },
  { num: '02', phase: 'Strategy', duration: '2–3 weeks', desc: 'Positioning territory, naming options (if applicable), messaging architecture, and a creative brief that anchors every design decision that follows.' },
  { num: '03', phase: 'Creative Development', duration: '3–5 weeks', desc: 'Visual exploration across identity, typography, color, and motion. We present three distinct territories and evolve the chosen direction through rounds of refinement.' },
  { num: '04', phase: 'Production', duration: '2–4 weeks', desc: 'Brand guidelines, asset libraries, digital templates, and handoff packages — everything your team needs to deploy the brand consistently at scale.' },
  { num: '05', phase: 'Launch & Embed', duration: 'Ongoing', desc: 'We stay on through launch, answer questions, and offer retainer relationships for brands that need ongoing creative partnership.' },
]

export const GOOGLE_REVIEWS: GoogleReview[] = [
  { author_name: 'Cindy', rating: 5, text: "I've had a great experience working with Digi Era Pro on my Google Business Profile. They've already helped place my business within the top three results for some of my main keywords, which has been a huge win. Even more impressive, within the first month I acquired a new client directly from my improved Google Maps presence.", relative_time_description: '5 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Cindy&background=CE307D&color=fff' },
  { author_name: 'Pamela Greenawalt', rating: 5, text: 'I am very pleased with the results so far of my Google listing, Business Card, Flyer and website. Henry has been very easy and friendly to work with. He has been very attentive to my changes and has been very patient with me.', relative_time_description: '6 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Pamela+Greenawalt&background=CE307D&color=fff' },
  { author_name: 'Spot On Mobile Detailing Services', rating: 5, text: "Since November 2025, Kate and her team have been working on optimizing my business profile, significantly improving our visibility, positioning, and overall performance compared to where we started.", relative_time_description: '7 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Spot+On&background=CE307D&color=fff' },
  { author_name: 'iBuilders Design and Build', rating: 5, text: "Paul has been absolutely exceptional. His level of professionalism, responsiveness, and genuine care makes a real difference in how my account is managed day to day. He stays on top of every detail, communicates clearly, and consistently delivers results.", relative_time_description: '8 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=iBuilders&background=CE307D&color=fff' },
  { author_name: 'Gavin Sundwall', rating: 5, text: "I have been working with Henry for one month now. They built me a quality website for the fairest price around, it was something I was nervous about paying for but seeing what came out of it I was very impressed and relieved. Henry takes his time to make sure everything is right.", relative_time_description: '6 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Gavin+Sundwall&background=CE307D&color=fff' },
  { author_name: 'Talha Khalid', rating: 5, text: "Working at DEP LLC has been a great experience for me as a programmer. The company operates as a dynamic digital marketing agency that combines marketing expertise with modern technology to deliver effective solutions for clients.One of the things I appreciate most about DEP LLC is the collaborative environment. The team includes marketers, designers, and developers who work closely together, which makes it easy to turn ideas into real, impactful products. As a programmer, I get the opportunity to work on different types of projects ranging from marketing automation tools to web applications that support client campaigns.The company also encourages learning and growth. New technologies, frameworks, and development practices are always welcomed, which allows developers like me to continuously improve our skills while contributing to meaningful projects.", relative_time_description: '2 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Terry&background=CE307D&color=fff' },
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
  { author_name: 'Talha Khalid', rating: 5, text: "Working at DEP LLC has been a great experience for me as a programmer. The company operates as a dynamic digital marketing agency that combines marketing expertise with modern technology to deliver effective solutions for clients.One of the things I appreciate most about DEP LLC is the collaborative environment. The team includes marketers, designers, and developers who work closely together, which makes it easy to turn ideas into real, impactful products. As a programmer, I get the opportunity to work on different types of projects ranging from marketing automation tools to web applications that support client campaigns.The company also encourages learning and growth. New technologies, frameworks, and development practices are always welcomed, which allows developers like me to continuously improve our skills while contributing to meaningful projects.", relative_time_description: '2 months ago', profile_photo_url: 'https://ui-avatars.com/api/?name=Terry&background=CE307D&color=fff' },
]

export const TESTIMONIALS = [
  { quote: "Digi Era Pro didn't just redesign our brand — they rebuilt our entire market position. We went from regional challenger to national category leader within 18 months.", author: 'Ingrid Halvorsen', title: 'CEO, Meridian Bank', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format', rating: 5 },
  { quote: "The sharpest strategic thinkers we've worked with. They held their conviction under pressure and were right every time.", author: 'Daniel Adeyemi', title: 'CMO, Volta Motors', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format', rating: 5 },
  { quote: 'Our new identity has been featured in three design publications and won a D&AD Pencil. Worth every minute of the process.', author: 'Yuki Tanaka', title: 'Director, Norde Institute', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format', rating: 5 },
  { quote: 'Working with Digi Era Pro transformed our online presence completely. Our leads tripled within the first quarter of the campaign.', author: 'Sofia Lindqvist', title: 'CMO, Vantage Retail', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format', rating: 5 },
  { quote: 'They understood our vision from day one. The content strategy they built for us is still driving results two years later.', author: 'Marcus Chen', title: 'CEO, Northline Logistics', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format', rating: 4 },
  { quote: 'Exceptional team. They delivered a full rebrand and SEO overhaul in record time without compromising quality.', author: 'Priya Raman', title: 'Director, Solace Wellness', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&auto=format', rating: 5 },
  { quote: 'Our Google Ads ROI went from 1.8x to 4.6x after Digi Era Pro took over. The data-driven approach makes all the difference.', author: 'James Okafor', title: 'Founder, BrightPath Media', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&auto=format', rating: 5 },
  { quote: 'The social media growth we experienced was beyond expectations. Engagement up 280% in just 3 months.', author: 'Amara Whitfield', title: 'Founder, Bloom & Co.', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&auto=format', rating: 5 },
  { quote: 'Professional, creative, and results-focused. Digi Era Pro is the only agency we trust with our brand.', author: 'Lena Hoffmann', title: 'Marketing Director, Apex Group', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&auto=format', rating: 4 },
  { quote: 'From website redesign to full digital strategy — they handled everything seamlessly. Our revenue grew 60% year over year.', author: 'Ryan Castillo', title: 'CEO, TerraBuilt Construction', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&auto=format', rating: 5 },
]

export const VIDEO_STORIES = [
  { name: 'Amara Whitfield', role: 'Founder, Bloom & Co.', poster: '/Assets/poster/imgi_77_client-review-1.png', videoId: 'cvRc7QBf-7A' },
  { name: 'Marcus Chen', role: 'CEO, Northline Logistics', poster: '/Assets/poster/imgi_78_client-review2.png', videoId: 'Clrd11emal4' },
  { name: 'Priya Raman', role: 'Director, Solace Wellness', poster: '/Assets/poster/imgi_79_client-review3-1_result.webp', videoId: 'OmHcHTjklSk' },
  { name: 'Sofia Lindqvist', role: 'CMO, Vantage Retail', poster: '/Assets/poster/imgi_80_client-review4-1_result.webp', videoId: 'p57xrGysihs' },
]

export const CLIENT_LOGOS = [
  { name: 'Enterprises LLC', img: '/Assets/business success/1.webp' },
  { name: 'Raven Rock Contracting', img: '/Assets/business success/2.webp' },
  { name: 'OnPoint Detailing LLC', img: '/Assets/business success/7.webp' },
  { name: 'Affordable Demolition & Construction LLC', img: '/Assets/business success/4.webp' },
  { name: 'Creative Fence Company', img: '/Assets/business success/5.webp' },
  { name: 'SW Mobile Detailing', img: '/Assets/business success/6.webp' },
]

export const PARTNERS = [
  { name: 'Yelp Ads Optimization', img: '/Assets/partners/imgi_40_Gemini_Generated_Image_j15rwpj15rwpj15r-e1761943136131-300x200.webp' },
  { name: 'Meta Business Partner', img: '/Assets/partners/imgi_41_MetaBusinessPartne-e1730318781747-300x212.jpg' },
  { name: 'Trustpilot', img: '/Assets/partners/imgi_7_Untitled-design-123.png' },
  { name: 'Secured by PositiveSSL', img: '/Assets/partners/imgi_1_download-17.webp' },
  { name: 'Google Partner', img: '/Assets/partners/imgi_43_BES-featured-image-1-300x150.jpg' },
]

export const JOURNAL = [
  { date: 'Sep 2026', category: 'Essay', title: "The Brand That Won't Stop Moving", excerpt: 'Static identity is dead. The most durable brands today operate as living systems — adaptive, modular, and built for a world that never pauses.', img: 'https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?w=700&h=450&fit=crop&auto=format', readTime: '7 min read' },
  { date: 'Aug 2026', category: 'Case Study', title: 'How We Named a Bank in 6 Days', excerpt: "When Meridian's rebrand demanded a new name, we had six days, three continents of stakeholders, and exactly one naming framework that actually works.", img: 'https://images.unsplash.com/photo-1647675975434-864e1c3fc98d?w=700&h=450&fit=crop&auto=format', readTime: '12 min read' },
  { date: 'Jul 2026', category: 'Perspective', title: 'Against the Rebrand', excerpt: "Not every company needs a new logo. A provocation on the industry's obsession with reinvention over refinement.", img: 'https://images.unsplash.com/photo-1768471125958-78556538fadc?w=700&h=450&fit=crop&auto=format', readTime: '5 min read' },
]

export const VALUES = [
  { letter: 'C', word: 'Conviction', desc: 'We argue for the work. Good ideas require a defender, and we take that role seriously — while knowing when to listen.', icon: Flame },
  { letter: 'R', word: 'Rigour', desc: 'Design built on evidence. Every visual decision traces back to a strategic rationale you can articulate to a boardroom.', icon: BarChart2 },
  { letter: 'E', word: 'Economy', desc: 'Nothing extraneous. We remove until removal would damage the idea — then stop.', icon: Layers },
  { letter: 'A', word: 'Authorship', desc: 'We take responsibility for the work, not just the deliverable. That distinction changes everything about how we show up.', icon: UserCheck },
]

export const WHY_CHOOSE_US = [
  { tab: 'Our Mission', desc: 'To help ambitious brands grow through strategic marketing, compelling content, and digital experiences engineered around real business outcomes — not vanity metrics.' },
  { tab: 'Our Vision', desc: 'To be the long-term growth partner ambitious brands call first — a team that thinks like an owner, not a vendor, and measures success in your results.' },
  { tab: 'Our Philosophy', desc: 'We believe in collaboration, creativity, and constant growth. When we work together, we make sure your business thrives, every step of the way.' },
]
