/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SERVER_URL_PROD: `http://185.185.69.74:1337`
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
