import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WritingArticle } from "../../_components/writing-pages";
import { WritingBody } from "../../_components/writing-body";
import { writing } from "../../_data/writing";
import { getWritingPost, getWritingPosts } from "../../../lib/writing";

// Prerendered from generateStaticParams. Reading params at the top keeps a
// real 404 for unknown slugs instead of a streamed one.
export const instant = false;

export function generateStaticParams() {
  return writing.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getWritingPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Angéline Poitout`,
    description: post.excerpt,
  };
}

export default async function WritingArticlePage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = getWritingPost(slug);
  if (!post) notFound();

  return (
    <WritingArticle post={post} posts={getWritingPosts()}>
      <WritingBody slug={post.slug} />
    </WritingArticle>
  );
}
