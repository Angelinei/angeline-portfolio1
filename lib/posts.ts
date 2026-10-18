import postsJson from "@/content/posts.json";

export type PostMeta = {
  slug: string;
  wpSlug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: string | null;
  coverWidth: number | null;
  coverHeight: number | null;
  originalUrl: string;
  kind: "essay" | "post";
};

export const posts = postsJson as PostMeta[];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
