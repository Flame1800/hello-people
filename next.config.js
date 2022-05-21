/** @type {import('next').NextConfig} */

const baseUrl =
    process.env.APP_ENV === 'dev'
        ? "http://185.185.69.74:1337"
        : "https://surgut.expert"

const nextConfig = {
    reactStrictMode: true,
    env: {
        SERVER_URL_PROD: baseUrl,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/events',
                permanent: true,
            }
        ]
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
