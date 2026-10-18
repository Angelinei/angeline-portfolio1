"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getProject,
  projectHref,
  projects,
  type Lang,
  type Project,
  type Rich,
} from "../_data/projects";
import {
  BRAND,
  CaseItem,
  EASE,
  Marquee,
  ProjectVisual,
  RollText,
  SiteHeader,
  Stalker,
  isVideo,
  projectToSlide,
  ui,
} from "./case-parts";
import { ExternalLink, Group, enter, useInView } from "./editorial";
import { useLang } from "./use-lang";
import { DesignPortfolio } from "./design-portfolio";

// Placeholders for undocumented content are only rendered while developing.
const SHOW_TODO = process.env.NODE_ENV !== "production";

const copy = {
  EN: {
    intro: "Introduction",
    context: "Context",
    intention: "Intention",
    process: "Process",
    visuals: "Visuals",
    work: "Work",
    links: "Links",
    year: "Year",
    role: "Role",
    discipline: "Discipline",
    next: "Next project",
    prev: "Previous",
    following: "Next",
    projects: "Projects",
    back: "Back to projects",
    allProjects: "← All projects",
    project: "Project",
    code: "GitHub",
    newTab: "(opens in a new tab)",
    archiveEmpty:
      "The archive is being assembled. In the meantime, past work is available on GitHub and Behance.",
  },
  FR: {
    intro: "Introduction",
    context: "Contexte",
    intention: "Intention",
    process: "Processus",
    visuals: "Visuels",
    work: "Réalisations",
    links: "Liens",
    year: "Année",
    role: "Rôle",
    discipline: "Discipline",
    next: "Projet suivant",
    prev: "Précédent",
    following: "Suivant",
    projects: "Projets",
    back: "Retour aux projets",
    allProjects: "← Tous les projets",
    project: "Projet",
    code: "GitHub",
    newTab: "(nouvel onglet)",
    archiveEmpty:
      "L'archive est en cours de constitution. En attendant, mes réalisations passées sont visibles sur GitHub et Behance.",
  },
};

export default function ProjectDetail({
  slug,
  covers,
  images,
}: {
  slug: string;
  /** Slug → cover path (all projects, used for the "next project" block). */
  covers: Record<string, string>;
  /** Visuals of this project, from public/projects/<slug>/. */
  images: string[];
}) {
  const [lang, setLang] = useLang();
  const project = getProject(slug)!;
  const t = copy[lang];
  const index = projects.indexOf(project);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const intro: Rich | undefined = project.intro ?? { paragraphs: [project.summary] };

  return (
    <div className="relative min-h-svh bg-[#F8F7F2] text-[#20201E] selection:bg-[#7660D8] selection:text-white">
      <SiteHeader lang={lang} onLangChange={setLang} compactBelow="none">
        <Link
          href={`/#${project.slug}`}
          className="hidden text-xs text-black/50 transition-colors hover:text-[#7660D8] md:inline"
        >
          {t.allProjects}
        </Link>
      </SiteHeader>

      <main>
        <article>
          {/* Head */}
          <header className="mx-auto w-full max-w-[1120px] px-5 pt-36 sm:px-10 sm:pt-[200px]">
            <p className={`mb-4 text-[10px] tracking-[0.18em] text-black/50 ${enter("delay-100")}`}>
              {project.number} · {project.eyebrow[lang]}
            </p>
            <h1 className="overflow-clip pb-[0.08em] text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.02] font-medium tracking-[-0.065em]">
              <span
                className={`block transition-transform duration-[1000ms] delay-150 motion-reduce:transition-none starting:translate-y-[110%] ${EASE}`}
              >
                {project.title}
              </span>
            </h1>
            {project.subtitle && (
              <p
                className={`mt-3 font-serif text-xl italic sm:text-2xl ${enter("delay-300")}`}
                style={{ color: project.ink }}
              >
                {project.subtitle[lang]}
              </p>
            )}
          </header>

          {/* Cover (the portfolio case opens on its own hero instead) */}
          {project.slug !== "portfolio" && (
            <figure className={`mx-auto mt-10 w-full max-w-[1120px] px-5 sm:mt-14 sm:px-10 ${enter("delay-450")}`}>
              <div
                className="relative @container flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[22px] sm:aspect-[16/9]"
                style={{ backgroundColor: project.tint }}
              >
                <div className={covers[project.slug] ? "absolute inset-0" : "size-[78cqw] sm:size-[44cqw]"}>
                  <ProjectVisual
                    kind={project.visual}
                    tint={project.tint}
                    ink={project.ink}
                    linked={false}
                    cover={covers[project.slug]}
                    alt={project.title}
                    preload
                    sizes={covers[project.slug] ? "(min-width: 640px) 70vw, 100vw" : "(min-width: 640px) 44vw, 78vw"}
                  />
                </div>
              </div>
            </figure>
          )}

          {project.slug === "portfolio" ? (
            <>
              <div className="mt-14 sm:mt-20">
                <DesignPortfolio lang={lang} />
              </div>
              <ContactBlock lang={lang} ink={project.ink} />
            </>
          ) : (
            <div className="mx-auto w-full max-w-[760px] px-5 pt-14 sm:px-10 sm:pt-20">
              {/* Category + scope */}
              {project.tags.length > 0 && (
                <ul className="mb-12 flex flex-wrap gap-2" aria-label="Tags">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full px-4 py-2.5 text-xs leading-none text-white"
                      style={{ backgroundColor: project.ink }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}

              <dl className="mb-16 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-black/10 py-6 text-xs sm:grid-cols-3">
                <Scope label={t.discipline} value={project.eyebrow[lang]} />
                <Scope label={t.year} value={project.year} field="year" />
                <Scope label={t.role} value={project.role?.[lang]} field="role" />
              </dl>

              <Section title={t.intro} content={intro} lang={lang} ink={project.ink} field={project.intro ? undefined : "intro"} />
              <Section title={t.context} content={project.context} lang={lang} ink={project.ink} field="context" />
              <Section title={t.intention} content={project.intention} lang={lang} ink={project.ink} field="intention" />
              <Section title={t.process} content={project.process} lang={lang} ink={project.ink} field="process" />

              {project.archive && <Archive project={project} lang={lang} />}

              {(images.length > 0 || SHOW_TODO) && (
                <Group title={t.visuals}>
                  {images.length > 0 ? (
                    <div className="flex flex-col gap-6">
                      {images.map((src) => (
                        <Visual key={src} src={src} project={project} lang={lang} />
                      ))}
                    </div>
                  ) : (
                    <Todo>
                      Aucun visuel : déposez des images ou vidéos dans <code>public/projects/{project.slug}/</code>{" "}
                      (triées par nom ; <code>cover.*</code> sert de couverture).
                    </Todo>
                  )}
                </Group>
              )}

              {(project.links.length > 0 || SHOW_TODO) && (
                <Group title={t.links}>
                  {project.links.length > 0 ? (
                    <ul className="border-t border-black/10">
                      {project.links.map((link) => (
                        <li key={link.href}>
                          <ExternalLink
                            href={link.href}
                            newTab={t.newTab}
                            className="group flex items-center justify-between gap-4 border-b border-black/10 py-4"
                          >
                            <span className="text-lg font-medium tracking-[-0.03em]">
                              <RollText color={project.ink}>{link.label[lang]}</RollText>
                            </span>
                            <span className="flex items-center gap-3 text-xs text-black/45">
                              <span className="hidden sm:inline">{new URL(link.href).hostname.replace(/^www\./, "")}</span>
                              <span aria-hidden="true" style={{ color: project.ink }}>
                                ↗
                              </span>
                            </span>
                          </ExternalLink>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Todo>
                      Aucun lien connu : ajoutez-les dans <code>links</code> (app/_data/projects.ts).
                    </Todo>
                  )}
                </Group>
              )}
            </div>
          )}
        </article>

        <NextProject project={next} cover={covers[next.slug]} lang={lang} />

        {/* Project navigation + back to the gallery */}
        <nav aria-label={t.projects} className="mx-auto w-full max-w-[1120px] px-5 sm:px-10">
          <div className="grid grid-cols-2 gap-6 border-y border-black/10 py-6">
            <Link href={projectHref(prev.slug)} className="group flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.18em] text-black/45">← {t.prev.toUpperCase()}</span>
              <span className="text-lg font-medium tracking-[-0.03em] sm:text-2xl">
                <RollText color={prev.ink}>{prev.title}</RollText>
              </span>
            </Link>
            <Link href={projectHref(next.slug)} className="group flex flex-col items-end gap-2 text-right">
              <span className="text-[10px] tracking-[0.18em] text-black/45">{t.following.toUpperCase()} →</span>
              <span className="text-lg font-medium tracking-[-0.03em] sm:text-2xl">
                <RollText color={next.ink}>{next.title}</RollText>
              </span>
            </Link>
          </div>

          <div className="flex justify-center py-20 sm:py-28">
            <Link
              href={`/#${project.slug}`}
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

const CONTACT_EMAIL = "hello@angelinepoitout.com";

function ContactBlock({ lang, ink }: { lang: Lang; ink: string }) {
  const label = lang === "FR" ? "UNE IDÉE EN TÊTE ?" : "SOMETHING IN MIND?";
  const title = lang === "FR" ? "Construisons la suivante." : "Let's build the next one.";
  return (
    <section className="mx-auto w-full max-w-[1120px] px-5 pt-20 pb-8 sm:px-10 sm:pt-28">
      <div className="border-t border-black/10 pt-12">
        <p className="mb-5 text-[10px] tracking-[0.18em] text-black/50">{label}</p>
        <p className="text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] font-medium tracking-[-0.06em]">{title}</p>
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
  );
}

function Section({
  title,
  content,
  lang,
  ink,
  field,
}: {
  title: string;
  content?: Rich;
  lang: Lang;
  ink: string;
  /** Data field name, shown in the development placeholder when undocumented. */
  field?: string;
}) {
  const missing = !content || (!content.paragraphs?.length && !content.list?.length);
  if (missing && !SHOW_TODO) return null;
  return (
    <Group title={title}>
      {content?.paragraphs?.map((p, i) => (
        <p key={i} className="mb-4 text-base leading-8 text-black/75">
          {p[lang]}
        </p>
      ))}
      {content?.list && (
        <ul className="mb-4 flex flex-col gap-3">
          {content.list.map((item, i) => (
            <li key={i} className="flex gap-3 text-base leading-7 text-black/75">
              <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full" style={{ backgroundColor: ink }} />
              {item[lang]}
            </li>
          ))}
        </ul>
      )}
      {(missing || field === "intro") && SHOW_TODO && field && (
        <Todo>
          Information non documentée : complétez le champ <code>{field}</code> dans app/_data/projects.ts.
        </Todo>
      )}
    </Group>
  );
}

function Scope({ label, value, field }: { label: string; value?: string; field?: string }) {
  if (!value && !SHOW_TODO) return null;
  return (
    <div className="flex flex-col gap-1.5">
      <dt className="font-semibold">{label}</dt>
      <dd className={value ? "leading-[1.5] text-black/65" : "text-amber-700"}>
        {value ?? `À compléter (${field})`}
      </dd>
    </div>
  );
}

function Todo({ children }: { children: ReactNode }) {
  return (
    <p
      role="note"
      className="rounded-xl border border-dashed border-amber-600/50 bg-amber-50 px-4 py-3 text-xs leading-6 text-amber-800 [&_code]:font-mono [&_code]:text-[11px]"
    >
      <strong className="mr-1 font-semibold">À compléter —</strong>
      {children}
    </p>
  );
}

function Visual({ src, project, lang }: { src: string; project: Project; lang: Lang }) {
  const file = src.split("/").pop()!;
  const meta = project.captions?.[file];
  const alt = meta?.alt[lang] ?? `${project.title} — ${file.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ")}`;
  return (
    <figure>
      <div className="overflow-hidden rounded-lg bg-black/[0.03]">
        {isVideo(src) ? (
          <video src={src} controls muted playsInline preload="metadata" className="h-auto w-full" aria-label={alt} />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={1000}
            sizes="(min-width: 768px) 520px, 100vw"
            className="h-auto w-full"
          />
        )}
      </div>
      {meta?.caption && (
        <figcaption className="mt-2 text-[11px] leading-[1.5] text-black/55">{meta.caption[lang]}</figcaption>
      )}
    </figure>
  );
}

function Archive({ project, lang }: { project: Project; lang: Lang }) {
  const t = copy[lang];
  const entries = project.archive ?? [];
  return (
    <Group title={t.work}>
      {entries.length > 0 ? (
        <ul className="border-t border-black/10">
          {entries.map((entry, i) => (
            <li key={`${i}-${entry.title}`} className="border-b border-black/10">
              {entry.group && entry.group[lang] !== entries[i - 1]?.group?.[lang] && (
                <p
                  className={`pb-1 text-[10px] tracking-[0.18em] uppercase ${i === 0 ? "pt-5" : "pt-10"}`}
                  style={{ color: project.ink }}
                >
                  {entry.group[lang]}
                </p>
              )}
              <div className="grid gap-2 py-5 sm:grid-cols-[64px_1fr_auto] sm:gap-6">
                <span className="text-xs text-black/45 tabular-nums">{entry.year ?? "—"}</span>
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.03em]">{entry.title}</h3>
                  {entry.description && (
                    <p className="mt-1 text-sm leading-6 text-black/65">{entry.description[lang]}</p>
                  )}
                  {entry.tags && entry.tags.length > 0 && (
                    <p className="mt-2 text-[11px] text-black/45">{entry.tags.join(" · ")}</p>
                  )}
                </div>
                <div className="flex gap-2 sm:justify-end sm:self-start">
                  {entry.href && (
                    <ExternalLink
                      href={entry.href}
                      newTab={t.newTab}
                      className="rounded-full px-3.5 py-2 text-[11px] leading-none text-white transition-opacity hover:opacity-70"
                      style={{ backgroundColor: project.ink }}
                    >
                      {t.project} ↗
                    </ExternalLink>
                  )}
                  {entry.github && (
                    <ExternalLink
                      href={entry.github}
                      newTab={t.newTab}
                      className="rounded-full border px-3.5 py-2 text-[11px] leading-none transition-opacity hover:opacity-70"
                      style={{ borderColor: project.ink, color: project.ink }}
                    >
                      {t.code} ↗
                    </ExternalLink>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <p className="mb-4 text-base leading-8 text-black/75">{t.archiveEmpty}</p>
          {SHOW_TODO && (
            <Todo>
              Liste vide : ajoutez vos réalisations dans <code>archive</code> (titre, année, description, URL du
              projet, URL GitHub) dans app/_data/projects.ts.
            </Todo>
          )}
        </>
      )}
    </Group>
  );
}

function NextProject({ project, cover, lang }: { project: Project; cover?: string; lang: Lang }) {
  const t = copy[lang];
  const [ref, inView] = useInView<HTMLDivElement>();
  const [hovered, setHovered] = useState(false);
  const slide = projectToSlide(project);
  const label = `${t.next} — ${project.title}`;

  return (
    <section aria-label={label} className="mt-8 sm:mt-16">
      <p className="mx-auto flex w-full max-w-[1120px] items-center gap-4 px-5 text-[10px] tracking-[0.18em] text-black/50 sm:px-10">
        {t.next.toUpperCase()}
        <span className="h-px flex-1 bg-black/10" />
      </p>
      <div ref={ref} className="relative h-[640px] overflow-clip sm:h-[680px]">
        <Marquee text={project.marquee} color={project.marqueeColor} large state={inView ? "active" : "after"} />
        <CaseItem
          slide={slide}
          cover={cover}
          lang={lang}
          state={inView ? "active" : "after"}
          label={label}
          standalone
          onHover={setHovered}
        />
      </div>
      <Stalker visible={hovered && inView} color={project.ink} label={ui[lang].view} />
    </section>
  );
}
