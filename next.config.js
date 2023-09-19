const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },

  experimental: {
    // typedRoutes: true, // Not supported with turbo
  },
};

module.exports = nextConfig;
