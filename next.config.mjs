/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Ensure images are handled correctly in static export
  images: {
    unoptimized: true,
  },
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
  // Disable API routes for static export
  rewrites: async () => {
    return [];
  },
};

export default nextConfig;
