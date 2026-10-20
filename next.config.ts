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
  images: {
    // AVIF first, WebP for browsers without it.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    // Every media file in these folders carries a content hash in its name, so it never
    // changes under the same URL.
    const immutable = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];
    return [
      { source: "/media/:path*", headers: immutable },
      { source: "/projects/:path*", headers: immutable },
    ];
  },
  async redirects() {
    return legacyRedirects();
  },
};

export default nextConfig;
