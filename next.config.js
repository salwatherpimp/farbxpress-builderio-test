/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
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

  // optional:
  // allowedDevOrigins wird von Next.js nicht verwendet,
  // es sei denn du greifst manuell darauf zu
};

module.exports = nextConfig;
