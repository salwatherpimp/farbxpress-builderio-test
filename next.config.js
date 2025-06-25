/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "res.cloudinary.com",
      "images.pexels.com",
      "upload.wikimedia.org",
    ],
  },

  trailingSlash: false,
};

module.exports = nextConfig;
