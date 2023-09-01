/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["randomuser.me"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
        pathname: "/blocks/marketing-ui/**"
      },
      // https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/*"
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/*"
      }
    ]
  }
}

module.exports = nextConfig
