/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  // Add your specific Next.js configurations here
  // For example, you can enable the 'images' experimental feature:
  experimental: {
    images: true,
  },

  // Replace the App Router with static HTML export
  // This enables static HTML export instead of the App Router
  output: {
    // Set the output directory for the exported files
    path: '/path/to/your/export/folder',
    // (Optional) Set a prefix for all exported paths
    // For example, '/your-app-prefix' will result in '/your-app-prefix/index.html' for the homepage
    publicPath: '/your-app-prefix',
  },
};
