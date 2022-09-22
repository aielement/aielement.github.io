/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS && "/aielement.github.io",
  trailingSlash: true,
}

module.exports = nextConfig
