const nextConfig = {
  typescript: {
    // !! WARNING !!
    // TypeScript errors ke bawajood build hone dega
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint warnings ko bhi ignore karega
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;