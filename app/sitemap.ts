import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { posts } from "@/lib/posts";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const paths = [
    "",
    "/blog",
    "/cases",
    "/studio",
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  return paths.flatMap((path) =>
    locales.map((locale) => {
      const post = posts.find((item) => path === `/blog/${item.slug}`);
      return {
        url: `${base}/${locale}${path}`,
        lastModified: post ? new Date(`${post.date}T00:00:00.000Z`) : undefined,
        alternates: {
          languages: {
            en: `${base}/en${path}`,
            fr: `${base}/fr${path}`,
            "x-default": `${base}/en${path}`,
          },
        },
      };
    }),
  );
}
