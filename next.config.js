/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export in production
  ...(process.env.NODE_ENV === "production" && { output: "export" }),

  images: {
    unoptimized: true,
    domains: [
      "res.cloudinary.com",
      "images.pexels.com",
      "upload.wikimedia.org",
    ],
    formats: ["image/avif", "image/webp"],
  },

  trailingSlash: false,

  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // Remove legacy JavaScript polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Cache headers for static assets (only in production)
  async headers() {
    if (process.env.NODE_ENV !== "production") {
      return [];
    }

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*).(js|css|woff|woff2|eot|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
