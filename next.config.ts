import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

module.exports = {
  images: {
    domains: ["store.storeimages.cdn-apple.com", "example.com"], // Добавьте нужный домен
  },
};

export default nextConfig;
