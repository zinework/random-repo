import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Anchor Turbopack to this project so a stray lockfile elsewhere on the
  // machine doesn't get picked as the workspace root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
