/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "snzhzfjipuxeiacxldnd.supabase.co",
      },
      {
        protocol: "https",
        hostname: "www.javascript-ceara.org",
      },
    ],
  },
};

export default nextConfig;
