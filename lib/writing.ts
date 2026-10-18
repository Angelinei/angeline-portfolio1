import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { isWritingSlug, writing, type WritingPost, type WritingSlug } from "../app/_data/writing";

export type { WritingPost };

function readPost(slug: WritingSlug): WritingPost {
  const file = path.join(process.cwd(), "content", "blog", `${slug}.en.mdx`);
  const { data } = matter(fs.readFileSync(file, "utf8"));
  const title = data.title;
  const date = data.date;
  const excerpt = data.excerpt;
  if (typeof title !== "string" || typeof date !== "string" || typeof excerpt !== "string") {
    throw new Error(`Missing title, date or excerpt in content/blog/${slug}.en.mdx`);
  }
  return { slug, title, date, excerpt };
}

export function getWritingPosts(): WritingPost[] {
  return writing.map(readPost);
}

export function getWritingPost(slug: string): WritingPost | undefined {
  if (!isWritingSlug(slug)) return undefined;
  return readPost(slug);
}
