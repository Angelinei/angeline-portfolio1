"use client";

import Link from "next/link";
import { thePath, type PathBlock } from "../_data/the-path";
import { BRAND, LINKEDIN, PageStage, ProjectVisual, RollText, SiteHeader, ui } from "./case-parts";
import { ExternalLink, Group, Inline, enter } from "./editorial";
import { useLang } from "./use-lang";

const INK = "#2E6A48";
const TINT = "#DCEADF";

const copy = {
  EN: {
    eyebrow: "THE PATH · BRICK METHOD",
    allProjects: "← All projects",
    back: "Back to projects",
    newTab: "(opens in a new tab)",
    englishOnly: null,
  },
  FR: {
    eyebrow: "THE PATH · BRICK METHOD",
    allProjects: "← Tous les projets",
    back: "Retour aux projets",
    newTab: "(nouvel onglet)",
    englishOnly: "Cette page est rédigée en anglais.",
  },
};

export default function ThePathPage({ cover }: { cover?: string }) {
  const [lang, setLang] = useLang();
  const t = copy[lang];

  return (
    <div className="relative min-h-svh bg-[#F8F7F2] text-[#20201E] selection:bg-[#7660D8] selection:text-white">
      <SiteHeader lang={lang} onLangChange={setLang} compactBelow="none">
        <Link
          href="/#the-path"
          className="hidden text-xs text-black/50 transition-colors hover:text-[#7660D8] md:inline"
        >
          {t.allProjects}
        </Link>
      </SiteHeader>

      <main>
        <article lang="en">
          <PageStage
            eyebrow={t.eyebrow}
            title={
              <>
                {thePath.title}
                <span className="sr-only"> – </span>
              </>
            }
            marquee="Indie everywheeere. Techie yours."
            marqueeColor="#C5DCCB"
          >
            <p
              lang="en"
              className={`mt-5 text-[clamp(1.35rem,2.4vw,1.85rem)] font-medium tracking-[-0.03em] ${enter("delay-300")}`}
              style={{ color: INK }}
            >
              {thePath.subtitle}
            </p>
            <figure className={`relative mt-8 size-[min(300px,34svh)] [@media(max-height:700px)]:size-[min(190px,26svh)] ${enter("delay-450")}`}>
              <ProjectVisual
                kind="path"
                tint={TINT}
                ink={INK}
                linked={false}
                cover={cover}
                alt={`${thePath.title} – ${thePath.subtitle}`}
                preload
                sizes="300px"
              />
            </figure>
            <p className={`mt-6 max-w-[28rem] text-[15px] leading-[1.6] font-medium text-black/75 sm:text-base ${enter("delay-500")}`}>
              {thePath.tagline}
            </p>
            {t.englishOnly && (
              <p lang="fr" className="mt-4 text-xs text-black/45">
                {t.englishOnly}
              </p>
            )}
          </PageStage>

          <div className="mx-auto w-full max-w-[760px] px-5 pt-14 sm:px-10 sm:pt-20">
            <p className="mb-6 text-base leading-8 text-black/75">{thePath.intro}</p>
            <ul className="mb-16 flex flex-wrap items-center gap-2 border-y border-black/10 py-6 text-xs">
              <li className="mr-2 text-black/65">{thePath.location}</li>
              {thePath.links.map((link) => (
                <li key={link.href}>
                  <ExternalLink
                    href={link.href}
                    newTab={t.newTab}
                    className="block rounded-full border px-3.5 py-2 leading-none transition-opacity hover:opacity-70"
                    style={{ borderColor: INK, color: INK }}
                  >
                    {link.label} ↗
                  </ExternalLink>
                </li>
              ))}
            </ul>

            {thePath.sections.map((section) => (
              <Group key={section.title} title={section.title}>
                {section.note && <p className="mb-4 font-serif text-lg italic" style={{ color: INK }}>{section.note}</p>}
                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} newTab={t.newTab} />
                ))}
              </Group>
            ))}

            <div className="mb-20 border-t border-black/10 pt-10">
              <p className="text-base leading-8 text-black/75">
                {thePath.contact}{" "}
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4"
                  style={{ color: INK }}
                >
                  LinkedIn
                  <span className="sr-only"> {t.newTab}</span>
                </a>
                .
              </p>
              <p className="mt-6 font-serif text-2xl italic" style={{ color: INK }}>
                {thePath.signoff[0]}
              </p>
              <p className="text-lg font-medium">{thePath.signoff[1]}</p>
            </div>
          </div>
        </article>

        <nav aria-label={lang === "FR" ? "Projets" : "Projects"} className="mx-auto w-full max-w-[1120px] px-5 sm:px-10">
          <div className="flex justify-center border-t border-black/10 py-20 sm:py-28">
            <Link
              href="/#the-path"
              className="group flex items-center gap-4 text-[clamp(2.25rem,7vw,4rem)] leading-[1.2] font-medium tracking-[-0.06em] sm:gap-6"
            >
              <span aria-hidden="true" className="text-[0.6em] font-normal" style={{ color: BRAND }}>
                ←
              </span>
              <RollText color={BRAND}>{t.back}</RollText>
            </Link>
          </div>
        </nav>
      </main>

      <footer className="mx-auto flex w-full max-w-[1120px] flex-col gap-2 px-5 pb-6 text-xs text-black/50 sm:flex-row sm:justify-between sm:px-10">
        <small className="text-xs">© 2026 Angéline Poitout</small>
        <span>{ui[lang].disciplines.join(" · ")}</span>
      </footer>
    </div>
  );
}

function Block({ block, newTab }: { block: PathBlock; newTab: string }) {
  if (block.type === "p") {
    return (
      <p className="mb-4 text-base leading-8 text-black/75">
        <Inline text={block.text} newTab={newTab} />
      </p>
    );
  }
  if (block.type === "list") return <Bullets items={block.items} newTab={newTab} />;
  return (
    <div className="mb-10 last:mb-0">
      <h3 className="text-lg leading-snug font-semibold tracking-[-0.02em]">{block.title}</h3>
      {block.subtitle && <p className="mt-1 text-sm text-black/70">{block.subtitle}</p>}
      <p className="mt-1 text-xs tracking-[0.04em] text-black/50">{block.meta}</p>
      {block.description && <p className="mt-2 text-sm leading-6 text-black/65">{block.description}</p>}
      <div className="mt-4">
        <Bullets items={block.items} newTab={newTab} />
      </div>
    </div>
  );
}

function Bullets({ items, newTab }: { items: string[]; newTab: string }) {
  return (
    <ul className="mb-4 flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-base leading-7 text-black/75">
          <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full" style={{ backgroundColor: INK }} />
          <span>
            <Inline text={item} newTab={newTab} />
          </span>
        </li>
      ))}
    </ul>
  );
}
