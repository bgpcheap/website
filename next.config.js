/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: 'export',
  reactStrictMode: true,
  allowedDevOrigins: ['10.0.50.20', '127.0.0.1'],
  images: {
    unoptimized: true,
  },
  experimental: {
    useTypeScriptCli: false,
  },
};

module.exports = nextConfig;
