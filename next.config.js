/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export for production builds
  ...(process.env.NODE_ENV === "production" && { output: "export" }),

  images: {
    unoptimized: true,
    domains: [
      "res.cloudinary.com",
      "images.pexels.com",
      "upload.wikimedia.org",
    ],
  },

  trailingSlash: true,

  // Allow Builder.io domain for cross-origin requests
  allowedDevOrigins: [
    "e40e1a4e3d89403f87e5247e1849456c-ed045405a39f4f899a53822c4.fly.dev",
  ],
};

module.exports = nextConfig;
