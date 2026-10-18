import type { NextConfig } from "next";
import { legacyRedirects } from "./lib/redirects";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Next inserts a higher-priority "/:path+/" → "/:path+" redirect ahead of
  // this list. Skipping it lets each legacy path, with or without a trailing
  // slash, redirect straight to its destination.
  skipTrailingSlashRedirect: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return legacyRedirects();
  },
};

export default nextConfig;
