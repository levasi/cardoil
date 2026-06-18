import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "cardoilavantaj.ro",
        pathname: "/site/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
