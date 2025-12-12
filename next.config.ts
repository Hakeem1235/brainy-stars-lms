import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // Often helps with Netlify image limits/issues
  },
};


export default nextConfig;
