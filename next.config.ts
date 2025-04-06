import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/skyble.ai.website.draftv1',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
