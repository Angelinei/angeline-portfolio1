"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import type { Lang } from "../_data/projects";
import {
  CONTACT_EMAIL,
  SHOW_TO_FILL,
  contentSeo,
  designed,
  earlyAi,
  gallery,
  hero,
  links,
  outcomes,
  overview,
  processClosing,
  processSteps,
  role,
  toFill,
  tools,
  toolsClosing,
  type GalleryItem,
} from "../_data/portfolio-case";
import { RollText } from "./case-parts";
import type { GalleryFile } from "./covers";
import { ExternalLink, Group } from "./editorial";

const copy = {
  EN: {
    overview: "01 · Overview",
    role: "02 · Role",
    designed: "03 · What I designed",
    process: "04 · Process",
    processLead: "See it before coding it.",
    tools: "05 · Tools",
    tool: "Tool",
    usedFor: "Used for",
    seo: "05b · Content & SEO system",
    seoSection: "Section",
    seoPages: "Pages",
    seoHow: "How the system works",
    early: "05c · Early AI design",
    earlyPublished: "Published",
    outcomes: "06 · Outcomes",
    links: "07 · Links",
    gallery: "08 · Gallery",
    toFill: "To fill",
    missingImage: "Image to add",
    contactLabel: "SOMETHING IN MIND?",
    contactTitle: "Let's build the next one.",
    newTab: "(opens in a new tab)",
  },
  FR: {
    overview: "01 · Vue d'ensemble",
    role: "02 · Rôle",
    designed: "03 · Ce que j'ai conçu",
    process: "04 · Processus",
    processLead: "Le voir avant de le coder.",
    tools: "05 · Outils",
    tool: "Outil",
    usedFor: "Utilisé pour",
    seo: "05b · Système de contenus & SEO",
    seoSection: "Section",
    seoPages: "Pages",
    seoHow: "Comment le système fonctionne",
    early: "05c · Premiers designs IA",
    earlyPublished: "Publié",
    outcomes: "06 · Résultats",
    links: "07 · Liens",
    gallery: "08 · Galerie",
    toFill: "À compléter",
    missingImage: "Image à ajouter",
    contactLabel: "UNE IDÉE EN TÊTE ?",
    contactTitle: "Construisons la suivante.",
    newTab: "(nouvel onglet)",
  },
};

/** Discreet marker for a fact or link that is not documented yet. */
function ToFill({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span className="flex items-baseline gap-3 border border-dashed border-black/20 px-4 py-3 text-sm leading-6 text-black/45">
      <span className="shrink-0 text-[10px] tracking-[0.16em] uppercase">{label}</span>
      <span>{children}</span>
    </span>
  );
}

export function PortfolioCase({
  lang,
  ink,
  tags,
  files,
}: {
  lang: Lang;
  ink: string;
  tags: string[];
  /** Gallery files present in public/portfolio/, keyed by file name. */
  files: Record<string, GalleryFile>;
}) {
  const t = copy[lang];
  const shownGallery = gallery.filter((item) => SHOW_TO_FILL || item.files.every((f) => files[f]));

  return (
    <>
      <div className="mx-auto w-full max-w-[760px] px-5 pt-14 sm:px-10 sm:pt-20">
        {tags.length > 0 && (
          <ul className="mb-12 flex flex-wrap gap-2" aria-label="Tags">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full px-4 py-2.5 text-xs leading-none text-white"
                style={{ backgroundColor: ink }}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {/* Hero */}
        <p className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-medium tracking-[-0.05em]">
          {hero.kicker[lang]}
        </p>
        <p className="mt-2 font-serif text-lg italic text-black/60 sm:text-xl">{hero.tagline[lang]}</p>

        <dl className="mt-10 mb-16 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-black/10 py-6 text-xs sm:grid-cols-4">
          {hero.meta.map((m) => (
            <div key={m.label.EN} className="flex flex-col gap-1.5">
              <dt className="font-semibold">{m.label[lang]}</dt>
              <dd className="leading-[1.5] text-black/65">{m.value[lang]}</dd>
            </div>
          ))}
        </dl>

        <Group title={t.overview}>
          {overview.map((p, i) => (
            <p
              key={i}
              className={i === 0 ? "mb-6 text-xl leading-[1.5] font-medium tracking-[-0.02em]" : "mb-4 text-base leading-8 text-black/75"}
            >
              {p[lang]}
            </p>
          ))}
        </Group>

        <Group title={t.role}>
          <Bullets items={role.map((r) => r[lang])} ink={ink} />
        </Group>

        <Group title={t.designed}>
          <div className="flex flex-col">
            {designed.map((block) => (
              <section key={block.title.EN} className="border-t border-black/10 py-8 first:pt-0 first:border-t-0">
                <h3 className="mb-3 text-lg font-medium tracking-[-0.03em]" style={{ color: ink }}>
                  {block.title[lang]}
                </h3>
                <p className="text-base leading-8 font-medium text-[#20201E]">{block.lead[lang]}</p>
                {block.items && (
                  <ul className="mt-5 flex flex-col gap-4">
                    {block.items.map((item) => (
                      <li key={item.text.EN} className="text-[15px] leading-7 text-black/70">
                        {item.label && <span className="font-semibold text-[#20201E]">{item.label[lang]}. </span>}
                        {item.text[lang]}
                      </li>
                    ))}
                  </ul>
                )}
                {block.closing && <p className="mt-5 text-[15px] leading-7 text-black/70">{block.closing[lang]}</p>}
              </section>
            ))}
          </div>
        </Group>

        <Group title={t.process}>
          <p className="mb-8 text-xl leading-[1.5] font-medium tracking-[-0.02em]">{t.processLead}</p>
          <ol className="grid gap-px overflow-hidden rounded-[14px] border border-black/10 bg-black/10 sm:grid-cols-2">
            {processSteps.map((step, i) => (
              <li key={step.title.EN} className="flex flex-col gap-2 bg-[#F8F7F2] p-5">
                <span className="text-[10px] tracking-[0.16em] text-black/40 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-medium tracking-[-0.02em]">{step.title[lang]}</span>
                <span className="text-sm leading-6 text-black/65">{step.text[lang]}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-base leading-8 text-black/75">{processClosing[lang]}</p>
        </Group>

        <Group title={t.tools}>
          <table className="w-full border-t border-black/10 text-left">
            <thead className="sr-only">
              <tr>
                <th scope="col">{t.tool}</th>
                <th scope="col">{t.usedFor}</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((row) => (
                <tr key={row.tool} className="border-b border-black/10 align-top">
                  <th scope="row" className="w-[42%] py-4 pr-4 text-[15px] leading-6 font-medium tracking-[-0.02em]">
                    {row.tool}
                  </th>
                  <td className="py-4 text-sm leading-6 text-black/65">{row.use[lang]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-6 text-xl font-medium tracking-[-0.02em]" style={{ color: ink }}>
            {toolsClosing[lang]}
          </p>
        </Group>

        <Group title={t.seo}>
          <p className="mb-6 text-base leading-8 font-medium text-[#20201E]">{contentSeo.lead[lang]}</p>
          <ul className="border-t border-black/10">
            {contentSeo.rows.map((row) => (
              <li key={row.section.EN} className="grid gap-1 border-b border-black/10 py-4 sm:grid-cols-[120px_1fr] sm:gap-6">
                <span className="text-[15px] font-medium tracking-[-0.02em]">{row.section[lang]}</span>
                <span className="min-w-0">
                  <span className="block text-sm leading-6 text-black/75">{row.pages[lang]}</span>
                  <span className="mt-1 block font-mono text-[11px] leading-5 break-words text-black/45">{row.urls}</span>
                </span>
              </li>
            ))}
            <li className="grid gap-1 border-b border-black/10 py-4 sm:grid-cols-[120px_1fr] sm:gap-6">
              <span className="text-[15px] font-semibold tracking-[-0.02em]">Total</span>
              <span className="text-[15px] font-semibold" style={{ color: ink }}>
                {contentSeo.total[lang]}
              </span>
            </li>
          </ul>
          <p className="mt-3 text-xs leading-5 text-black/45">{contentSeo.source[lang]}</p>
          <h3 className="mt-10 mb-4 text-lg font-medium tracking-[-0.03em]" style={{ color: ink }}>
            {t.seoHow}
          </h3>
          <ul className="flex flex-col gap-4">
            {contentSeo.mechanics.map((m) => (
              <li key={m.label.EN} className="text-[15px] leading-7 text-black/70">
                <span className="font-semibold text-[#20201E]">{m.label[lang]}. </span>
                {m.text[lang]}
              </li>
            ))}
          </ul>
          {SHOW_TO_FILL && (
            <div className="mt-8">
              <ToFill label={t.toFill}>{contentSeo.toFill[lang]}</ToFill>
            </div>
          )}
        </Group>

        <Group title={t.early}>
          <p className="mb-6 text-base leading-8 font-medium text-[#20201E]">{earlyAi.lead[lang]}</p>
          <ul className="border-t border-black/10">
            {earlyAi.projects.map((project) => (
              <li key={project.href} className="border-b border-black/10 py-5">
                <ExternalLink href={project.href} newTab={t.newTab} className="group inline-flex items-baseline gap-2">
                  <span className="text-lg font-medium tracking-[-0.03em]">
                    <RollText color={ink}>{project.title}</RollText>
                  </span>
                  <span aria-hidden="true" className="text-xs" style={{ color: ink }}>
                    ↗
                  </span>
                </ExternalLink>
                <p className="text-xs text-black/45">
                  {project.subtitle} · {t.earlyPublished} {project.published[lang]}
                </p>
                <p className="mt-2 text-[15px] leading-7 text-black/70">{project.text[lang]}</p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs leading-5 text-black/45">{earlyAi.profile[lang]}</p>
          <p className="mt-8 font-serif text-xl leading-[1.5] italic" style={{ color: ink }}>
            {earlyAi.framing[lang]}
          </p>
          {SHOW_TO_FILL && (
            <div className="mt-8">
              <ToFill label={t.toFill}>{earlyAi.toFill[lang]}</ToFill>
            </div>
          )}
        </Group>

        <Group title={t.outcomes}>
          <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {outcomes.map((o) => (
              <li key={o.text.EN} className="border-t border-black/10 pt-4">
                <span className="block text-[2.75rem] leading-none font-medium tracking-[-0.06em]" style={{ color: ink }}>
                  {o.value}
                </span>
                <span className="mt-2 block text-sm leading-6 text-black/70">{o.text[lang]}</span>
              </li>
            ))}
          </ul>
          {SHOW_TO_FILL && (
            <ul className="mt-10 flex flex-col gap-2">
              {toFill.map((item) => (
                <li key={item.EN}>
                  <ToFill label={t.toFill}>{item[lang]}</ToFill>
                </li>
              ))}
            </ul>
          )}
        </Group>

        <Group title={t.links}>
          <ul className="border-t border-black/10">
            {links.map((link) =>
              link.href ? (
                <li key={link.href}>
                  <ExternalLink
                    href={link.href}
                    newTab={t.newTab}
                    className="group flex items-center justify-between gap-4 border-b border-black/10 py-4"
                  >
                    <span className="text-lg font-medium tracking-[-0.03em]">
                      <RollText color={ink}>{link.label[lang]}</RollText>
                    </span>
                    <span className="flex items-center gap-3 text-xs text-black/45">
                      <span className="hidden sm:inline">{new URL(link.href).hostname.replace(/^www\./, "")}</span>
                      <span aria-hidden="true" style={{ color: ink }}>
                        ↗
                      </span>
                    </span>
                  </ExternalLink>
                </li>
              ) : (
                SHOW_TO_FILL && (
                  <li key={link.label.EN} className="border-b border-black/10 py-4">
                    <ToFill label={t.toFill}>{link.label[lang]}</ToFill>
                  </li>
                )
              ),
            )}
          </ul>
        </Group>
      </div>

      {shownGallery.length > 0 && (
        <section aria-label={t.gallery} className="mx-auto w-full max-w-[1120px] px-5 pb-8 sm:px-10">
          <h2 className="mb-8 text-xl leading-[1.5] font-medium tracking-[-0.03em] sm:text-2xl">{t.gallery}</h2>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-y-16">
            {shownGallery.map((item) => (
              <GalleryFigure key={item.files.join("+")} item={item} files={files} lang={lang} missing={t.missingImage} />
            ))}
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="mx-auto w-full max-w-[1120px] px-5 pt-20 pb-8 sm:px-10 sm:pt-28">
        <div className="border-t border-black/10 pt-12">
          <p className="mb-5 text-[10px] tracking-[0.18em] text-black/50">{t.contactLabel}</p>
          <p className="text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] font-medium tracking-[-0.06em]">{t.contactTitle}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group mt-8 inline-flex items-center gap-3 text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-[-0.03em]"
          >
            <RollText color={ink}>{CONTACT_EMAIL}</RollText>
            <span aria-hidden="true" style={{ color: ink }}>
              ↗
            </span>
          </a>
        </div>
      </section>
    </>
  );
}

function Bullets({ items, ink }: { items: string[]; ink: string }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-7 text-black/75">
          <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full" style={{ backgroundColor: ink }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function GalleryFigure({
  item,
  files,
  lang,
  missing,
}: {
  item: GalleryItem;
  files: Record<string, GalleryFile>;
  lang: Lang;
  missing: string;
}) {
  const pair = item.files.length > 1;
  return (
    <figure className={item.wide ? "sm:col-span-2" : undefined}>
      <div className={`grid gap-3 ${pair ? "sm:grid-cols-2" : ""}`}>
        {item.files.map((name, i) => {
          const file = files[name];
          const alt = pair ? `${item.alt[lang]} (${i + 1}/${item.files.length})` : item.alt[lang];
          return file ? (
            <div key={name} className="overflow-hidden rounded-[14px] bg-black/[0.03]">
              <Image
                src={file.src}
                alt={alt}
                width={file.width}
                height={file.height}
                loading="lazy"
                sizes={item.wide && !pair ? "(min-width: 1120px) 1040px, 100vw" : "(min-width: 640px) 520px, 100vw"}
                className="h-auto w-full"
              />
            </div>
          ) : (
            <div
              key={name}
              role="img"
              aria-label={alt}
              className={`flex flex-col items-center justify-center gap-2 rounded-[14px] border border-dashed border-black/20 text-center ${
                item.wide && !pair ? "aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <span className="text-[10px] tracking-[0.16em] text-black/40 uppercase">{missing}</span>
              <span className="font-mono text-[11px] text-black/40">public/portfolio/{name}</span>
            </div>
          );
        })}
      </div>
      <figcaption className="mt-3 text-[13px] leading-[1.6] text-black/55">{item.caption[lang]}</figcaption>
    </figure>
  );
}
