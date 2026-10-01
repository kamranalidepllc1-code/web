import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";

import "./globals.css";
import "./ai.css";
import { Preloader } from "@/components/layout/Preloader";
import { AiAssistant } from "@/components/ai/AiAssistant";

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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://digierapro.com"),
  title: "Digi Era Pro",
  description:
    "Showcase your company's projects, services, and achievements in a professional portfolio to attract clients and build brand credibility.",
  icons: {
    icon: "/Assets/logo/logo.png",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <head>
        {/* Prevent browser scroll restoration from jumping to a previous section after reload */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if('scrollRestoration' in history){history.scrollRestoration='manual'}}catch(e){}",
          }}
        />

        {/* Without JS the preloader could never dismiss itself */}
        <noscript>
          <style>{"#site-preloader{display:none!important}"}</style>
        </noscript>
      </head>

      <body>
        <Preloader />
        {children}
        <AiAssistant />
      </body>
    </html>
  );
}