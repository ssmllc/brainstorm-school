/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  reactStrictMode: true,
};

export default nextConfig;
