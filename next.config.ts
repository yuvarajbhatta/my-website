import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-profile-summary-cards.vercel.app",
      },
    ],
  },
};

export default nextConfig;
