/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  experimental: {
    turbo: {
      resolveAlias: {
        "@/components": "./components",
        "@/hooks": "./hooks",
      },
    },
  },
};

export default nextConfig;
