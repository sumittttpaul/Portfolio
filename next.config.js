const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    webVitalsAttribution: ["CLS", "LCP"],
    serverComponentsExternalPackages: ["@react-email/components", "@react-email/tailwind"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com", pathname: "/frontendddlab/**" }],
  },
  async redirects() {
    return [{ source: "/about", destination: "/#about", permanent: true }];
  },
  async headers() {
    return [
      {
        source: "/(.*)?",
        headers: [
          // SAMEORIGIN in development so pages can be previewed in responsive frames
          { key: "X-Frame-Options", value: process.env.NODE_ENV === "development" ? "SAMEORIGIN" : "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
      {
        source: "/media/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
