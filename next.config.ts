import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable React Compiler for better performance
  reactCompiler: true,
  // Enable compression
  compress: true,
  // Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
