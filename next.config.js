/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['prisma'],
    serverActions: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'uploadthing.com', 'utfs.io'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;
