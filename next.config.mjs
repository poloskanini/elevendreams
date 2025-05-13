/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'linkaband.com',
        pathname: '/**', // ← accepte tous les chemins
      },
    ],
  },
};

export default nextConfig;