import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["http://localhost:3000", "*http://localhost:3000"],
    },
  },
};

export default nextConfig;