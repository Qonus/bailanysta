import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://lh3.googleusercontent.com/a/**')],
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);