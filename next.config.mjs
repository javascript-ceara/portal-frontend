/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "snzhzfjipuxeiacxldnd.supabase.co",
      },
    ],
  },
};

export default nextConfig;
