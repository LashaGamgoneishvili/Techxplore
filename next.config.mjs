/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ajy8khmx9vtvyckn.public.blob.vercel-storage.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "preview.colorlib.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
