import type { NextConfig } from "next";



const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      // Increase body size limit for Server Actions
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;
