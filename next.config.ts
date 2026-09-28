import type { NextConfig } from "next";

const wordpressHost = new URL(process.env.WORDPRESS_API_URL || "https://digierapro.com/wp-json/wp/v2").hostname;

const nextConfig: NextConfig = {
  images: {
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
