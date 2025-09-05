import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint checking during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Additional config options
  experimental: {
    turbo: {
      rules: {
        // Custom turbopack rules if needed
      },
    },
  },
};

export default nextConfig;