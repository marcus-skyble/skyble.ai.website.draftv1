/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use 'export' for GitHub Pages, 'standalone' for Docker
  output: process.env.GITHUB_PAGES === 'true' ? 'export' : 'standalone',
  experimental: {
    // Use advanced Next.js features if needed
  },
  // Set basePath for GitHub Pages
  basePath: process.env.GITHUB_PAGES === 'true' 
    ? '/skyble.ai.website.draftv1'
    : (process.env.NEXT_PUBLIC_BASE_PATH || ''),
  images: {
    unoptimized: true,
  },
  // Ensure public directory files are properly accessible
  assetPrefix: process.env.GITHUB_PAGES === 'true'
    ? '/skyble.ai.website.draftv1'
    : (process.env.NEXT_PUBLIC_BASE_PATH || ''),
};

module.exports = nextConfig; 