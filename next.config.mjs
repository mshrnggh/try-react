/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/about',
      },
      {
        source: '/page',
        destination: '/page',
      },
      // 他のルート...
    ]
  },
};

export default nextConfig;
