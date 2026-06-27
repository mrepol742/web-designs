/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  experimental: {
    turbo: {
      resolveAlias: {
        "@/components": "./pages/components",
        "@/hooks": "./pages/hooks",
      },
    },
  },
};

export default nextConfig;
