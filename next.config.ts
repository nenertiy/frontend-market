import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/menu",
        permanent: true,
      },
    ];
  },
};

module.exports = {
  images: {
    domains: ["**", "example.com", "drive.google.com"],
  },
};

export default nextConfig;
