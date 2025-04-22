/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        { loader: "@svgr/webpack", options: { icon: true } },
        { loader: "url-loader" },
      ],
    });

    return config;
  },
  images: {
    // remotePatterns: ["res.cloudinary.com", "youtu.be"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "youtu.be",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
