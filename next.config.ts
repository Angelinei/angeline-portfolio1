import type { NextConfig } from "next";
import { legacyRedirects } from "./lib/redirects";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
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
    const slashed = legacyRedirects
      .filter((redirect) => redirect.source !== "/")
      .map((redirect) => ({
        ...redirect,
        source: redirect.source.endsWith("/")
          ? redirect.source
          : `${redirect.source}/`,
      }));

    return [
      ...slashed,
      ...legacyRedirects,
      {
        source: "/:path+/",
        destination: "/:path+",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
