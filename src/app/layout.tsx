import type { Metadata } from "next";

import "./globals.css";
import { Preloader } from "@/components/layout/Preloader";

export const metadata: Metadata = {
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
    <html lang="en">
      <head>
        {/* Prevent browser scroll restoration from jumping to a previous section after reload */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if('scrollRestoration' in history){history.scrollRestoration='manual'}}catch(e){}",
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router root layout renders on every page; this rule targets the Pages Router's pages/_document.js */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300;1,9..144,400&family=Outfit:wght@300;400;500;600;700&display=swap"
        />
        {/* Without JS the preloader could never dismiss itself */}
        <noscript>
          <style>{"#site-preloader{display:none!important}"}</style>
        </noscript>
      </head>

      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}