const prodAPI = "http://185.185.69.74:1337";
const prodSocket = "https://hellopeople.online";
const emulatorApi = "http://10.0.2.2";

const nextConfig = {
  env: {
    SERVER_URL_PROD: "https://hellopeople.online",
    SOCKET_URL: "https://hellopeople.online",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
