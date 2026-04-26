/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  transpilePackages: ['three'],
  experimental: {
    largePageDataBytes: 128 * 1000,
  },
  // Explicit headers for video files:
  //  - Accept-Ranges lets browsers seek and stream properly
  //  - Aggressive caching (1 year, immutable) means repeat visitors don't re-download
  //    since the filename doesn't change, this is safe
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          { key: 'Accept-Ranges', value: 'bytes' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
