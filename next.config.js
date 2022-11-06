const prodAPI = "http://185.185.69.74:1337";
const prodSocket = "https://hellopeople.online";

const nextConfig = {
  env: {
    SERVER_URL_PROD: "http://localhost:1337",
    SOCKET_URL: "http://localhost:1337",
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
