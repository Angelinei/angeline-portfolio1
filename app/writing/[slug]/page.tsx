import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WritingArticle } from "../../_components/writing-pages";
import { WritingBody } from "../../_components/writing-body";
import { writing } from "../../_data/writing";
import { getWritingPost, getWritingPosts } from "../../../lib/writing";
import { SITE, clip, pageMetadata, pageTitle, personSchema } from "../../../lib/seo";
import { JsonLd } from "../../_components/json-ld";

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
  return pageMetadata({
    title: pageTitle(post.seoTitle ?? post.title),
    description: post.excerpt,
    path: `/writing/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    image: `/writing/${post.slug}/opengraph-image`,
  });
}

export default async function WritingArticlePage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = getWritingPost(slug);
  if (!post) notFound();

  return (
    <WritingArticle post={post} posts={getWritingPosts()}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title.length > 110 ? post.seoTitle ?? clip(post.title, 110) : post.title,
          description: clip(post.excerpt),
          datePublished: post.date,
          inLanguage: "en",
          url: `${SITE}/writing/${post.slug}`,
          mainEntityOfPage: `${SITE}/writing/${post.slug}`,
          author: personSchema,
        }}
      />
      <WritingBody slug={post.slug} />
    </WritingArticle>
  );
}
