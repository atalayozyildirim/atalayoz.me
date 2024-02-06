/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/{reponame}" : "",
  output: "export",
  target: "serverless",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
