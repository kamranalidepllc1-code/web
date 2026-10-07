# SEO Audit & Implementation — Digi Era Pro

Date: 2026-10-07 · Next.js 16.3.6 (App Router) · WordPress headless blog

Target market (from the live site and existing business information): **New York, NY** digital marketing agency serving small and local businesses across the **United States**. The live WordPress title is “Digital Marketing Agency in New York, NY”. U.S. phone numbers, and offices in Florida, New York and Lahore (per /contact).

## 1. Audit (before)

| Page | Current problem | SEO opportunity | Change made |
|---|---|---|---|
| All | `robots: noindex, nofollow` hard-coded in root layout | Indexable at launch, staging kept out | Driven by `NEXT_PUBLIC_ALLOW_INDEXING` (default noindex) |
| All | Default description was portfolio template text; no canonical, OG or Twitter tags outside the blog | Clean snippets, canonicals, social previews | `pageMetadata()` helper in `src/lib/seo.ts` used on every page |
| All | No Organization or WebSite schema | Entity understanding | Organization + WebSite (+ SearchAction) in layout, verified facts only |
| Home | Generic H1, CTA scrolled to the history section | Primary keyword, conversion path | Keyword H1, specific intro, CTA → contact form |
| Home | Fabricated stats: “14 years” (founded 2018), “280+ projects”, “40 global clients”, “3 Cannes Lions”, “14+ years”, “12+ industries” | Trust / accuracy | Replaced with site-supported facts (2018, 16 services, 4.9 Google rating, 3 offices) |
| Home | Process and Values copy from a branding-studio template | Relevance | Rewritten for a marketing agency, based on themes in real reviews |
| Home | Invented fallback blog posts shown whenever WordPress fails | Fake content risk | Section now hides when there are no real posts |
| Home | Testimonials had no H2; a CEO’s own review shown twice as a client review | Honesty, heading structure | H2 added; employee reviews removed |
| Home/footer | Footer Home/About links and all social icons pointed to `#` | Crawlable links, sameAs | Real routes + verified social URLs |
| Services | H1s had no keywords; meta description = hero summary | Rankings for service terms | Keyword H1 + unique SEO title & description per page |
| Services | 6 pages had no FAQ; collapsed answers missing from HTML | Long-tail queries | FAQs on all 16 pages; all answers server-rendered |
| Services | No “who it’s for” or “why us”; footer linked all 12 services | Intent match, topic clusters | New `ServiceFit` section; curated related services |
| Services | Website Design, E-commerce and AI cards had no page | Missing landing pages | 3 new pages + legacy redirects |
| About | Generic H1; “we deliver every time”, “Walk the Walk!” | E-E-A-T | Specific, evidence-based copy with internal links |
| Contact | H1 “Let’s talk.”; “three continents” (offices are on two) | Accuracy, local relevance | Brand H1, accurate office copy |
| Blog | No visible author/updated date; no links to services | E-E-A-T, internal linking | Byline, updated date, related-services card |
| Sitemap | Hard-coded route list | Automatic coverage | Generated from the service registry |

## 2. Implemented

- **Pages updated:** Home, About, Contact, Special Offer, Blog index, Blog posts, 13 existing service pages; **3 new**: `/services/website-design`, `/services/ecommerce-development`, `/services/ai-solutions`.
- **Titles and descriptions:** unique on all 21 key pages, 37–60 character titles (verified: no duplicates).
- **H1s:** exactly one per page, verified in the rendered HTML.
- **Schema:** Organization, WebSite (all pages); WebPage, AboutPage, ContactPage; Service + BreadcrumbList + FAQPage on every service page; BlogPosting publisher now references the Organization `@id`. All JSON-LD parses as valid JSON. (Google shows FAQ rich results only for limited site types; the markup is still valid.)
- **Internal links:** curated related services on each service page, inline service links on About, blog → related services, footer → Services/About, hero and navbar CTAs → `/contact#contact-form`.
- **Redirects:** `/ecommerce` → `/services/ecommerce-development`, `/virtual-ai-solutions` → `/services/ai-solutions` (308). Existing slugs are unchanged because WordPress URLs already redirect to them.
- **Images:** all `<img>` tags have alt text; decorative backgrounds keep `alt=""`; the misleading stock-photo alt “Our team” was corrected.

## 3. Launch checklist (technical)

1. Set `NEXT_PUBLIC_ALLOW_INDEXING=true` and `NEXT_PUBLIC_SITE_URL=https://digierapro.com` **on the production deployment only**. Leave them unset on the `*.vercel.app` staging and preview builds.
2. Redirect `www.digierapro.com` → `digierapro.com` at the domain/Vercel level (canonicals use the non-www HTTPS host). HTTP→HTTPS is automatic on Vercel. Trailing slashes are already normalized in `src/proxy.ts`.
3. Submit `https://digierapro.com/sitemap.xml` in Google Search Console after cutover.
4. These live WordPress pages have **no Next.js equivalent and will 404 after cutover**: `/privacy-policy`, `/terms-conditions`, `/yelp-ads`, `/amazon`, `/reviews`, `/dfy-funnels`. Migrate them (privacy and terms are required for Google Ads and contact-form compliance) or add redirects in `src/lib/wordpress/legacy.ts`.
5. Footer “Privacy Policy” and “Terms & Conditions” still link to `#` until those pages exist.

## 4. Needs real information from the owner

- **Video testimonials** (`VIDEO_STORIES` in `src/data/site.ts`): the names and roles (Amara Whitfield / Bloom & Co., etc.) match the old placeholder testimonials. Replace them with the real client names, or remove them.
- **Team:** the About carousel (Muhammad, Eric Carter, Emma Wilson…) and `TEAM` (Talha Khalid as CEO, Kamran Ali…) disagree on who the CEO is. Confirm the real team, names and photos. “Nuhammad Zaid” looks like a typo.
- **Hero stats:** confirm the 4.9★ Google rating and the 3 office locations. Add real project or client counts if you can verify them.
- **Locations:** About/History mention a Malaysia expansion; /contact lists Florida, New York and Lahore. Confirm which offices to publish. A **street address** would allow LocalBusiness schema.
- **Client logos:** “Enterprises LLC” links to ahebooks.com. Confirm the business name.
- **Partners:** confirm the Google Partner and Meta Business Partner status is current before relying on it.
- **Special Offer:** title, price, deadline and availability are still placeholders (`src/data/specialOffer.ts`), and the H1 is “Something special, for a limited time.”
- **Stock imagery:** “Why choose us” uses an Unsplash stock photo. Real team or office photos would build more trust.
- **Image file names** such as `imgi_127_a-business-meeting-1 (1).jpg` are not descriptive. Rename them when the assets are next updated.

## 5. Remaining recommendations

- Publish blog posts that target service questions, and link each post to its service page using descriptive anchors.
- Add case studies with real, client-approved results. This is the biggest missing trust signal.
- Consider Google Business Profile → website UTM tagging so local traffic can be measured.
- The home “Process” accordion still renders collapsed steps only after a click. It's low priority, since the same content appears on service pages.
