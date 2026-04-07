/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://44.222.98.52:8000/:path*",
      },
    ];
  },
};

module.exports = nextConfig;