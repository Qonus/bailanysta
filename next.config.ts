import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://lh3.googleusercontent.com/a/**')],
    },
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);