/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "*", // Cho phép mọi hostname
          port: "",
        },
      ],
    },
  };
export default nextConfig;