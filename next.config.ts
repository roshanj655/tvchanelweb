import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  // 👇 ADD THIS if NOT hosted at root
  // basePath: "/tvchanel/web",
  // assetPrefix: "/tvchanel/web/",
};

export default nextConfig;
