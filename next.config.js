/** @type {import('next').NextConfig} */

const baseUrl =
  process.env.APP_ENV === "dev"
    ? "http://185.185.69.74:1337"
    : "https://surgut.expert";

const nextConfig = {
  env: {
    SERVER_URL_PROD: "http://185.185.69.74:1337",
  },
  async redirects() {
    return [];
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
