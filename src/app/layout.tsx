import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";

import "./globals.css";
import "./ai.css";
import { Preloader } from "@/components/layout/Preloader";
import { AiAssistant } from "@/components/ai/AiAssistant";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import { JsonLd } from "@/components/seo/JsonLd";
import { FOOTER_CONTACT, SOCIAL_LINKS } from "@/data/site";
import { SITE_URL } from "@/lib/blog/utils";
import { ALLOW_INDEXING, DEFAULT_OG_IMAGE, ORG_ID, SITE_NAME, WEBSITE_ID } from "@/lib/seo";

// Self-hosted at build time: no request to Google, no render-blocking stylesheet.
// Components use them through var(--font-fraunces) / var(--font-outfit).
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const DEFAULT_DESCRIPTION =
  "Digi Era Pro is a New York digital marketing agency offering SEO, Google Ads, social media, Google Business Profile optimization, branding, and web design.";

// Defaults only — every indexable page sets its own title, description and canonical via pageMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | Digital Marketing Agency`,
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  icons: {
    icon: "/Assets/logo/logo.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: { card: "summary_large_image", site: "@digierapro" },
  // Staging/preview builds stay out of search results; see ALLOW_INDEXING in src/lib/seo.ts.
  robots: ALLOW_INDEXING
    ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } }
    : { index: false, follow: false },
};

const phones = FOOTER_CONTACT.filter(c => c.href.startsWith("tel:"));
const email = FOOTER_CONTACT.find(c => c.href.startsWith("mailto:"));

// Only verified business facts. No street address is published, so no LocalBusiness/PostalAddress.
const siteSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: "Digi Era Pro LLC",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/Assets/logo/logo.png` },
    description: DEFAULT_DESCRIPTION,
    foundingDate: "2018",
    email: email?.value,
    telephone: phones[0]?.href.replace("tel:", ""),
    contactPoint: phones.map(p => ({
      "@type": "ContactPoint",
      contactType: p.label === "Sales Department" ? "sales" : "customer service",
      telephone: p.href.replace("tel:", ""),
      areaServed: "US",
      availableLanguage: "English",
    })),
    sameAs: SOCIAL_LINKS.map(s => s.href).filter(h => h.startsWith("http")),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The init script sets data-theme before hydration
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        {/* Prevent browser scroll restoration from jumping to a previous section after reload */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if('scrollRestoration' in history){history.scrollRestoration='manual'}}catch(e){}",
          }}
        />

        {/* Apply the saved theme before first paint */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />

        {/* Without JS the preloader could never dismiss itself */}
        <noscript>
          <style>{"#site-preloader{display:none!important}"}</style>
        </noscript>
      </head>

      <body>
        <JsonLd data={siteSchema} />
        <Preloader />
        {children}
        <AiAssistant />
      </body>
    </html>
  );
}