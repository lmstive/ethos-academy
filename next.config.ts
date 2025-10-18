import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // se futuramente usar imagens externas
    remotePatterns: [],
  },
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
