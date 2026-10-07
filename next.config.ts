import type { NextConfig } from "next";

const wordpressHost = new URL(process.env.WORDPRESS_API_URL || "https://digierapro.com/wp-json/wp/v2").hostname;

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  async headers() {
    return [
      {
        // Static assets: JS, CSS, fonts, images — immutable, 1 year
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        // Public folder assets
        source: '/Assets/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        pathname: "/**",
      },
      // Blog featured images served by the WordPress CMS.
      {
        protocol: "https",
        hostname: wordpressHost,
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
