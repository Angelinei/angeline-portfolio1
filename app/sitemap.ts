import type { MetadataRoute } from "next";
import { projects } from "./_data/projects";
import { getWritingPosts } from "../lib/writing";

const SITE = "https://angelinepoitout.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getWritingPosts();

  return [
    { url: SITE },
    { url: `${SITE}/about` },
    { url: `${SITE}/the-path` },
    { url: `${SITE}/writing` },
    ...posts.map((post) => ({
      url: `${SITE}/writing/${post.slug}`,
      lastModified: post.date,
    })),
    ...projects.map((project) => ({
      url: `${SITE}/studio/${project.slug}`,
    })),
  ];
}
