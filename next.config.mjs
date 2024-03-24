/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // transpilePackages: [],
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "i.postimg.cc",
      //   port: "",
      //   pathname: "/**",
      // },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/backend-api/images/**",
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

export default nextConfig;