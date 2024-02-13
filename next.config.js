const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "standalone",
  experimental: {
    swcMinify: true,
    optimizeCss: true,
    webVitalsAttribution: ["CLS", "LCP"],
    // typedRoutes: true,
  },
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)?",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/scripts/SwiperScript.js",
  //       destination: "/",
  //       permanent: false,
  //     },
  //   ];
  // },
};

module.exports = withBundleAnalyzer(nextConfig);
