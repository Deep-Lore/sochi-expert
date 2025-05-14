import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: '/sochi-expert',
  basePath: '/sochi-expert',
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  output: 'export'
};

export default nextConfig;
