/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "images.pexels.com",
      "upload.wikimedia.org",
    ],
  },
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // Allow cross-origin requests for development
  allowedDevOrigins: ["*.fly.dev"],
};

module.exports = nextConfig;
