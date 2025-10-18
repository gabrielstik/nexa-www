/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.prismic.io" },
      { protocol: "https", hostname: "images2.prismic.io" },
      { protocol: "https", hostname: "nexacms.cdn.prismic.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
