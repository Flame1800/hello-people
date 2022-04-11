/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
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
}

module.exports = nextConfig
