/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/ytai" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/ytai/" : "",
};

export default nextConfig;
