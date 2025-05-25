import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://firebasestorage.googleapis.com')],
    domains: ['firebasestorage.googleapis.com'],
  },
};

export default nextConfig;
