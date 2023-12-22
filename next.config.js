/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },

  // hot reload
  webpack: (config) => {
    config.watchOptions = {
      poll: 1200, //チェック時間
      aggregateTimeout: 500, // 遅延時間
      ignored: ["node_modules"],
    };

    return config;
  },
};

module.exports = nextConfig;
