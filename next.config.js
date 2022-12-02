/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias['src'] = path.resolve(__dirname, 'src');
    return config;
  },
  
};

module.exports = nextConfig;
