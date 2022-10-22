/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    SERVER_URL_PROD: "http://185.185.69.74:1337",
    SOCKET_URL: "https://hellopeople.online",
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
