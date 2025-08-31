import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Enable image optimization
    domains: ['images.unsplash.com', 'placehold.co'], // Add domains as needed
  },
  // Enable experimental features for better performance
  experimental: {
    reactCompiler: true, // Enable React Compiler for better performance
  },
  // Enable compression
  compress: true,
};

export default nextConfig;
