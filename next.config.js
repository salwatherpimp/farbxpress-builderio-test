/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // wichtig für statischen Export (z. B. für FTP-Hosting)

  images: {
    unoptimized: true, // Erforderlich für statischen Export
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

  // Wird nur lokal in Dev-Umgebungen verwendet
  // Hat keinen Effekt beim statischen Export
  allowedDevOrigins: ["*.fly.dev"],
};

module.exports = nextConfig;
