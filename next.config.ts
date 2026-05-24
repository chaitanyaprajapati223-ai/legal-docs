import type { NextConfig } from "next";

// For GitHub Pages, we need a basePath because the site is served at /<repo-name>/
// For Netlify/Vercel/Cloudflare custom domains, leave it empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
