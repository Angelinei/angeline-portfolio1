import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TranslationNote } from "@/components/translation-note";
import { formatDate, locales } from "@/lib/i18n";
import { requireLocale } from "@/lib/locale";
import { PostBody } from "@/lib/post-body";
import { getPost, posts } from "@/lib/posts";
import { pageMetadata } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    posts.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/blog/[slug]">) {
  const { slug } = await params;
  const locale = await requireLocale(params);
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    locale,
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.excerpt,
    image: post.cover,
    type: "article",
  });
}

export default async function BlogArticlePage({
  params,
}: PageProps<"/[locale]/blog/[slug]">) {
  const { slug } = await params;
  const locale = await requireLocale(params);
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#F8F7F2] text-[#20201E]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <SiteHeader />
        {locale === "fr" ? <TranslationNote /> : null}
        <article className="mx-auto max-w-[42rem] py-16 sm:py-24">
          <p className="text-[10px] tracking-[0.16em] text-black/40">
            <Link href={`/${locale}/blog`} className="transition hover:text-black">
              BLOG
            </Link>
            {" · "}
            {formatDate(post.date, locale)}
            {" · "}
            {post.kind === "essay" ? "ESSAY" : "POST"}
          </p>
          <h1 className="mt-6 text-4xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-black/55">{post.excerpt}</p>
          <div className="essay mt-12">
            <PostBody slug={post.slug} />
          </div>
          <p className="mt-16 border-t border-black/10 pt-6 text-xs leading-6 text-black/45">
            Original:{" "}
            <a
              href={post.originalUrl}
              className="underline decoration-black/30 underline-offset-4"
            >
              {post.originalUrl}
            </a>
          </p>
        </article>
        <SiteFooter locale={locale} />
      </div>
    </main>
  );
}
