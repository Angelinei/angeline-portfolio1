"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { formatWritingDate, type WritingPost } from "../_data/writing";
import { BRAND, EASE, ProjectVisual, RollText, SiteHeader, ui, writingSlide } from "./case-parts";
import { PageHero, enter } from "./editorial";
import { useLang } from "./use-lang";

const INK = "#7660D8";
const TINT = "#F6F1E6";
const SUBSTACK = "https://easywebie.substack.com/";

const copy = {
  EN: {
    eyebrow: "WRITING",
    title: "Writing",
    intro: "Essays on building products, learning, and working with AI.",
    substack: "Also on Substack",
    studio: "← Studio",
    back: "Back to the studio",
    all: "← All writing",
    index: "All writing",
    previous: "Previous",
    next: "Next",
  },
  FR: {
    eyebrow: "ÉCRITS",
    title: "Écrits",
    intro: "Essais sur la construction de produits, l'apprentissage et le travail avec l'IA.",
    substack: "Aussi sur Substack",
    studio: "← Studio",
    back: "Retour au studio",
    all: "← Tous les écrits",
    index: "Tous les écrits",
    previous: "Précédent",
    next: "Suivant",
  },
};

function TranslationNote() {
  return (
    <p lang="fr" role="note" className="text-xs leading-5 text-black/50">
      Traduction en cours
    </p>
  );
}

function Frame({
  backHref,
  backLabel,
  children,
}: {
  backHref: string;
  backLabel: string;
  children: ReactNode;
}) {
  const [lang, setLang] = useLang();
  return (
    <div className="relative min-h-svh bg-[#F8F7F2] text-[#20201E] selection:bg-[#7660D8] selection:text-white">
      <SiteHeader lang={lang} onLangChange={setLang} compactBelow="none">
        <Link
          href={backHref}
          className="hidden text-xs text-black/50 transition-colors hover:text-[#7660D8] md:inline"
        >
          {backLabel}
        </Link>
      </SiteHeader>
      <main>{children}</main>
      <footer className="mx-auto flex w-full max-w-[1120px] flex-col gap-2 px-5 pb-6 text-xs text-black/50 sm:flex-row sm:justify-between sm:px-10">
        <small className="text-xs">© 2026 Angéline Poitout</small>
        <span>{ui[lang].disciplines.join(" · ")}</span>
      </footer>
    </div>
  );
}

export function WritingIndex({ posts }: { posts: WritingPost[] }) {
  const [lang] = useLang();
  const t = copy[lang];

  return (
    <Frame backHref="/#writing" backLabel={t.studio}>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        marquee={writingSlide.marquee}
        marqueeColor={writingSlide.marqueeColor}
        visual={
          <div
            className="@container flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[22px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] sm:aspect-[16/7]"
            style={{ backgroundColor: TINT }}
          >
            <div className="size-[70cqw] sm:size-[34cqw]">
              <ProjectVisual
                kind="writing"
                tint={TINT}
                ink={INK}
                linked={false}
                alt={t.title}
                preload
                sizes="(min-width: 640px) 34vw, 70vw"
              />
            </div>
          </div>
        }
      >
        <p className="text-lg leading-[1.5] font-medium tracking-[-0.02em] sm:text-2xl">{t.intro}</p>
        <a
          href={SUBSTACK}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block rounded-full border px-4 py-2.5 text-xs leading-none transition-opacity hover:opacity-70"
          style={{ borderColor: INK, color: INK }}
        >
          {t.substack} ↗<span className="sr-only"> {ui[lang].newTab}</span>
        </a>
        {lang === "FR" && (
          <div className="mt-4">
            <TranslationNote />
          </div>
        )}
      </PageHero>

      <ol className="mx-auto w-full max-w-[1120px] px-5 pt-12 sm:px-10 sm:pt-16">
        {posts.map((post, index) => (
          <li key={post.slug} className="border-t border-black/10">
            <Link href={`/writing/${post.slug}`} className="group grid gap-3 py-8 sm:grid-cols-[4.5rem_1fr] sm:gap-8 sm:py-10">
              <span className="pt-1 text-xs text-black/35 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="block min-w-0">
                <time dateTime={post.date} className="text-[10px] tracking-[0.16em] text-black/45">
                  {formatWritingDate(post.date)}
                </time>
                <span className="mt-3 block text-[clamp(1.7rem,4vw,2.5rem)] leading-[1.12] font-medium tracking-[-0.045em] transition-colors duration-300 group-hover:text-[#7660D8]">
                  {post.title}
                </span>
                <span className="mt-3 block max-w-2xl text-sm leading-7 text-black/60 line-clamp-3">
                  {post.excerpt}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <BottomLink href="/#writing" label={t.back} />
    </Frame>
  );
}

export function WritingArticle({
  post,
  posts,
  children,
}: {
  post: WritingPost;
  posts: WritingPost[];
  children: ReactNode;
}) {
  const [lang] = useLang();
  const t = copy[lang];
  const index = posts.findIndex((item) => item.slug === post.slug);
  const previous = index > 0 ? posts[index - 1] : undefined;
  const next = index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined;

  return (
    <Frame backHref="/writing" backLabel={t.all}>
      <article lang="en">
        <header className="mx-auto w-full max-w-[760px] px-5 pt-36 sm:px-10 sm:pt-[200px]">
          <p className={`mb-4 text-[10px] tracking-[0.18em] text-black/50 ${enter("delay-100")}`}>
            <span lang={lang.toLowerCase()}>{t.eyebrow}</span>
            <span aria-hidden="true"> · </span>
            <time dateTime={post.date}>{formatWritingDate(post.date)}</time>
          </p>
          <h1 className="text-[clamp(2.2rem,6vw,3.75rem)] leading-[1.08] font-medium tracking-[-0.05em]">
            <span
              className={`block transition-transform delay-150 duration-[1000ms] motion-reduce:transition-none starting:translate-y-[110%] ${EASE}`}
            >
              {post.title}
            </span>
          </h1>
          {lang === "FR" && (
            <div className="mt-6">
              <TranslationNote />
            </div>
          )}
        </header>
        <div className={`mx-auto w-full max-w-[760px] px-5 pt-10 sm:px-10 sm:pt-14 ${enter("delay-300")}`}>
          {children}
        </div>
      </article>

      <nav aria-label={t.index} className="mx-auto mt-16 w-full max-w-[760px] border-t border-black/10 px-5 sm:px-10">
        <div className="grid gap-8 py-10 sm:grid-cols-2">
          {previous ? (
            <Link href={`/writing/${previous.slug}`} className="group block">
              <span className="text-[10px] tracking-[0.16em] text-black/45">{t.previous}</span>
              <span className="mt-2 block text-lg leading-snug font-medium tracking-[-0.03em] transition-colors group-hover:text-[#7660D8]">
                {previous.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/writing/${next.slug}`} className="group block sm:text-right">
              <span className="text-[10px] tracking-[0.16em] text-black/45">{t.next}</span>
              <span className="mt-2 block text-lg leading-snug font-medium tracking-[-0.03em] transition-colors group-hover:text-[#7660D8]">
                {next.title}
              </span>
            </Link>
          ) : null}
        </div>
      </nav>

      <BottomLink href="/writing" label={t.index} />
    </Frame>
  );
}

function BottomLink({ href, label }: { href: string; label: string }) {
  return (
    <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-10">
      <div className="flex justify-center border-t border-black/10 py-20 sm:py-28">
        <Link
          href={href}
          className="group flex items-center gap-4 text-[clamp(2.25rem,7vw,4rem)] leading-[1.2] font-medium tracking-[-0.06em] sm:gap-6"
        >
          <span aria-hidden="true" className="text-[0.6em] font-normal" style={{ color: BRAND }}>
            ←
          </span>
          <RollText color={BRAND}>{label}</RollText>
        </Link>
      </div>
    </div>
  );
}
