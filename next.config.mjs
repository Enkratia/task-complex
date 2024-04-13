/** @type {import('next').NextConfig} */

import bundleAnalyzer from "@next/bundle-analyzer";
const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

const nextConfig = {
  output: "standalone",
  transpilePackages: [
    "@hookform/resolvers",
    "@reduxjs/toolkit",
    "@svgr/webpack",
    "next",
    "normalize.css",
    "react",
    "react-dom",
    "react-hook-form",
    "react-imask",
    "react-redux",
    "sharp",
    "sonner",
    "use-immer",
    "immer",
    "zod",
    "react-intersection-observer",
    "sanitize-html",
  ],
  images: {
    minimumCacheTTL: 31540000000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/shopping/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn1.gstatic.com",
        port: "",
        pathname: "/shopping/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn2.gstatic.com",
        port: "",
        pathname: "/shopping/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn3.gstatic.com",
        port: "",
        pathname: "/shopping/**",
      },
    ],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
