import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
        search: "?auto=compress&cs=tinysrgb&w=1920",
      },
    ],
  },
};

export default nextConfig;
