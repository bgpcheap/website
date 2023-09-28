/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['purecatamphetamine.github.io'],
      unoptimized: true
    }
  }
  
  module.exports = nextConfig
