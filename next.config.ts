import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'maa-industries.vercel.app',
          },
        ],
        destination: 'https://www.maaindustries.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
