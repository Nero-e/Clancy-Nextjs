/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["cdn.shopify.com"],
    remotePatterns: [{
      protocol: "https",
      hostname: "cdn.shopify.com",
      // pathname: "https://cdn.shopify.com/s/files/1/0051/1075/8425/files/logo.png?v=1620111100",
    }]
  },
};

export default nextConfig;
