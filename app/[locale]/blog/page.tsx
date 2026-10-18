import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TranslationNote } from "@/components/translation-note";
import { formatDate } from "@/lib/i18n";
import { requireLocale } from "@/lib/locale";
import { posts } from "@/lib/posts";
import { pageMetadata } from "@/lib/site";

const copy = {
  en: {
    label: "JOURNAL",
    title: "Notes from the building.",
    intro:
      "Essays and posts brought across from angelinepoitout.com. The wording is hers.",
    empty: "No cover yet.",
  },
  fr: {
    label: "JOURNAL",
    title: "Notes from the building.",
    intro:
      "Essays and posts brought across from angelinepoitout.com. The wording is hers.",
    empty: "No cover yet.",
  },
} as const;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/blog">) {
  const locale = await requireLocale(params);
  return pageMetadata({
    locale,
    path: "/blog",
    title: "Blog",
    description:
      "Essays and notes by Angéline Poitout on indie hacking, EdTech, AI agents, retention and building in public.",
  });
}

export default async function BlogIndexPage({
  params,
}: PageProps<"/[locale]/blog">) {
  const locale = await requireLocale(params);
  const t = copy[locale];

  return (
    <main className="min-h-screen bg-[#F8F7F2] text-[#20201E]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <SiteHeader />
        {locale === "fr" ? <TranslationNote /> : null}
        <section className="pb-16 pt-20 sm:pt-28">
          <p className="mb-6 text-[10px] tracking-[0.2em] text-black/45">
            {t.label}
          </p>
          <h1 className="max-w-4xl text-5xl font-medium tracking-[-0.07em] sm:text-7xl">
            {t.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-black/60">
            {t.intro}
          </p>
        </section>
        <section className="grid gap-px border-t border-black/10 bg-black/10 pb-20 sm:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="bg-[#F8F7F2]">
              <Link href={`/${locale}/blog/${post.slug}`} className="group block h-full">
                {post.cover ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                    <Image
                      src={post.cover}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[16/10] items-end border-b border-black/10 p-6">
                    <p className="text-[10px] tracking-[0.16em] text-black/35">
                      {t.empty}
                    </p>
                  </div>
                )}
                <div className="px-1 py-6 sm:px-4">
                  <p className="text-[10px] tracking-[0.16em] text-black/40">
                    {formatDate(post.date, locale)} ·{" "}
                    {post.kind === "essay" ? "ESSAY" : "POST"}
                  </p>
                  <h2 className="mt-3 text-2xl font-medium tracking-[-0.04em] transition-colors group-hover:text-[#7660D8] sm:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-black/55">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </section>
        <SiteFooter locale={locale} />
      </div>
    </main>
  );
}
