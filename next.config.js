/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_TITLE: process.env.APP_TITLE || 'Movienama',
    API_KEY: process.env.API_KEY || '5f47e1936002363288a3a8d5b0b9a4c6',
  },
  images: {
    // accept tmdb API images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
