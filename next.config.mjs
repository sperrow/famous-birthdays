/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.famousbirthdays.com',
                port: '',
                pathname: '/thumbnails/**',
            },
        ],
    },
};

export default nextConfig;
