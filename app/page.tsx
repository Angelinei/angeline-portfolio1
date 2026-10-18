
"use client";

import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "AI × EDTECH",
    year: "2026",
    title: "Skillxtube",
    subtitle: "Learn differently.",
    description:
      "Un produit EdTech qui explore comment l'IA peut transformer des vidéos en parcours d'apprentissage actifs.",
    tags: ["AI", "Learning", "Product"],
    href: "/studio/skillxtube",
    color: "#DCD3FF",
    ink: "#5940A5",
    kind: "skill",
  },
  {
    number: "02",
    category: "CREATIVE TECHNOLOGY",
    year: "2026",
    title: "The Portfolio",
    subtitle: "A studio in the making.",
    description:
      "Un laboratoire vivant où direction artistique, IA générative et développement web se rencontrent.",
    tags: ["Generative AI", "Web", "Vercel"],
    href: "/studio/portfolio",
    color: "#C9E7FF",
    ink: "#164E87",
    kind: "portfolio",
  },
  {
    number: "03",
    category: "AI × LEARNING DESIGN",
    year: "2026",
    title: "AI Learning Lab",
    subtitle: "Curiosity into capability.",
    description:
      "Des expérimentations autour du prompting, des workflows augmentés et de l'adoption concrète de l'IA.",
    tags: ["AI workflows", "Prompting", "Pedagogy"],
    href: "/studio/ai-experiments",
    color: "#FFE0C8",
    ink: "#974A20",
    kind: "lab",
  },
];

const translations = {
  EN: {
    label: "INDEPENDENT CREATIVE STUDIO",
    headline: "Curiosity,",
    headline2: "made tangible.",
    intro:
      "A growing collection of digital products, AI experiments and learning experiences. Built through curiosity, thoughtful design and a hands-on approach.",
    index: "A SELECTION OF WORK",
    explore: "EXPLORE CASE",
    aboutLabel: "THE SPACE BETWEEN",
    aboutTitle: "Technology is the tool. Human potential is the point.",
    about:
      "My work brings together generative AI, learning design and digital strategy. I explore how ideas become useful experiences — from the first question to the working product.",
    contactLabel: "SOMETHING IN MIND?",
    contactTitle: "Let's make it real.",
    contactLink: "LET'S TALK ↗",
    footer: "INDEPENDENT STUDIO · FRANCE & BEYOND",
    back: "BACK HOME ↗",
  },
  FR: {
    label: "STUDIO CRÉATIF INDÉPENDANT",
    headline: "La curiosité",
    headline2: "prend forme.",
    intro:
      "Une collection vivante de produits numériques, d'expérimentations IA et d'expériences pédagogiques. Des projets façonnés par la curiosité, le design et la pratique.",
    index: "UNE SÉLECTION DE PROJETS",
    explore: "VOIR LE PROJET",
    aboutLabel: "ENTRE DEUX MONDES",
    aboutTitle: "La technologie est un outil. Le potentiel humain, le but.",
    about:
      "Mon travail relie IA générative, ingénierie pédagogique et stratégie digitale. J'explore comment transformer une idée en expérience utile, de la première question au produit fonctionnel.",
    contactLabel: "UNE IDÉE EN TÊTE ?",
    contactTitle: "Donnons-lui vie.",
    contactLink: "ÉCHANGEONS ↗",
    footer: "STUDIO INDÉPENDANT · FRANCE & AILLEURS",
    back: "ACCUEIL ↗",
  },
};

export default function StudioPage() {
  const [lang, setLang] = useState<"FR" | "EN">("FR");
  const t = translations[lang];

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F7F2] text-[#20201E]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-black/10 py-6">
          <Link href="/" className="text-sm font-semibold tracking-[-0.04em]">
            ANGÉLINE POITOUT<span className="text-[#7660D8]">.</span>
          </Link>

          <div className="flex items-center gap-5">
            <span className="hidden text-[10px] tracking-[0.14em] text-black/45 sm:inline">
              AI · DESIGN · LEARNING
            </span>
            <button
              onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
              className="rounded-full border border-black/15 px-4 py-2 text-xs transition hover:bg-[#20201E] hover:text-white"
              aria-label="Change language"
            >
              {lang === "FR" ? "FR ↔ EN" : "EN ↔ FR"}
            </button>
          </div>
        </header>

        <section className="grid gap-12 pb-20 pt-20 sm:pt-28 lg:grid-cols-[1.4fr_0.6fr] lg:pb-28">
          <div>
            <p className="mb-8 flex items-center gap-3 text-[10px] tracking-[0.2em] text-black/50">
              <span className="h-2 w-2 rounded-full bg-[#7660D8]" />
              {t.label}
            </p>

            <h1 className="max-w-5xl text-[clamp(3.7rem,10vw,9rem)] font-medium leading-[0.87] tracking-[-0.085em]">
              {t.headline}
              <br />
              <span className="font-serif font-normal italic text-[#7660D8]">
                {t.headline2}
              </span>
            </h1>
          </div>

          <div className="flex flex-col justify-end lg:pb-2">
            <div className="mb-6 h-px w-12 bg-[#7660D8]" />
            <p className="max-w-md text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
              {t.intro}
            </p>
            <p className="mt-8 text-[10px] tracking-[0.16em] text-black/40">
              MEANINGFUL BY DESIGN. BUILT TO EXPLORE.
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between border-y border-black/15 py-4">
            <p className="text-[10px] tracking-[0.18em]">{t.index}</p>
            <p className="text-[10px] tracking-[0.15em] text-black/40">
              001 — 003
            </p>
          </div>

          <div>
            {projects.map((project) => (
              <article
                key={project.number}
                className="grid gap-5 border-b border-black/10 py-8 sm:py-10 md:grid-cols-[44px_0.9fr_1.1fr] md:gap-8 md:py-12"
              >
                <p className="pt-1 text-xs text-black/35">
                  {project.number}
                </p>

                <Link href={project.href} className="group block">
                  <div
                    className="relative mb-6 flex aspect-[1.35/1] items-center justify-center overflow-hidden rounded-sm transition-transform duration-500 group-hover:scale-[0.99]"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.kind === "skill" && (
                      <div className="w-[76%] -rotate-2 rounded-xl bg-white p-4 shadow-xl sm:p-6">
                        <div className="mb-5 flex items-center justify-between">
                          <span className="text-xs font-bold tracking-tight text-[#242424]">
                            skillxtube
                          </span>
                          <span className="rounded-full bg-[#E6DFFF] px-2 py-1 text-[9px] text-[#5940A5]">
                            LEARN MODE
                          </span>
                        </div>
                        <div className="mb-3 h-2 w-2/3 rounded-full bg-black/10" />
                        <div className="mb-5 h-2 w-1/2 rounded-full bg-black/10" />
                        <div className="flex gap-2">
                          <div className="h-12 flex-1 rounded-md bg-[#DCD3FF]" />
                          <div className="h-12 flex-1 rounded-md bg-[#F8E7B9]" />
                          <div className="h-12 flex-1 rounded-md bg-[#C9E7FF]" />
                        </div>
                      </div>
                    )}

                    {project.kind === "portfolio" && (
                      <div className="w-[76%] rotate-2 border border-black/10 bg-[#F8F7F2] p-5 shadow-xl sm:p-8">
                        <p className="mb-5 text-[8px] tracking-[0.18em] text-black/50">
                          ANGÉLINE POITOUT — STUDIO
                        </p>
                        <p className="text-3xl font-medium leading-[0.95] tracking-[-0.07em] text-black sm:text-5xl">
                          Ideas into
                          <br />
                          <span className="font-serif italic text-[#7660D8]">
                            experiences.
                          </span>
                        </p>
                        <div className="mt-6 h-px bg-black/15" />
                      </div>
                    )}

                    {project.kind === "lab" && (
                      <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-[#974A20]/25 sm:h-48 sm:w-48">
                        <div className="absolute inset-3 rounded-full border border-dashed border-[#974A20]/40" />
                        <div className="absolute h-20 w-20 rounded-full bg-[#F5B58D] sm:h-28 sm:w-28" />
                        <span className="relative text-xs font-semibold tracking-[0.15em] text-[#633015]">
                          AI / LAB
                        </span>
                      </div>
                    )}

                    <span className="absolute bottom-4 right-4 text-xs text-black/50">
                      ↗
                    </span>
                  </div>

                  <p className="mb-2 text-[9px] tracking-[0.16em] text-black/45">
                    {project.category} · {project.year}
                  </p>
                  <h2 className="text-3xl font-medium tracking-[-0.06em] transition-colors group-hover:text-[#7660D8] sm:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-2 font-serif text-lg italic text-black/55">
                    {project.subtitle}
                  </p>
                </Link>

                <div className="flex flex-col justify-between gap-6 md:py-1">
                  <p className="max-w-lg text-sm leading-7 text-black/65">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/15 px-3 py-1.5 text-[10px] text-black/60"
                      >
                        {tag}
                      </span>
                    ))}
                    <Link
                      href={project.href}
                      className="ml-auto self-center text-[10px] tracking-[0.1em] transition hover:text-[#7660D8]"
                    >
                      {t.explore} ↗
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-b border-black/15 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-[10px] tracking-[0.18em] text-[#7660D8]">
              {t.aboutLabel}
            </p>
            <h2 className="max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.065em] sm:text-6xl">
              {t.aboutTitle}
            </h2>
          </div>
          <p className="max-w-xl self-end text-base leading-8 text-black/60">
            {t.about}
          </p>
        </section>

        <section className="py-20 sm:py-28">
          <p className="mb-5 text-[10px] tracking-[0.18em] text-[#7660D8]">
            {t.contactLabel}
          </p>
          <h2 className="text-5xl font-medium tracking-[-0.07em] sm:text-7xl">
            {t.contactTitle}
          </h2>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm leading-7 text-black/60">
              AI training, learning experiences and digital product projects.
            </p>
            <a
              href="https://www.linkedin.com/in/angelinepoitoutpro/"
              target="_blank"
              rel="noreferrer"
              className="w-fit border-b border-[#7660D8] pb-2 text-xs tracking-[0.12em] text-[#5940A5] transition hover:text-black"
            >
              {t.contactLink}
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-black/10 py-6 text-[10px] tracking-[0.1em] text-black/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ANGÉLINE POITOUT</p>
          <p>{t.footer}</p>
          <Link href="/" className="transition hover:text-[#7660D8]">
            {t.back}
          </Link>
        </footer>
      </div>
    </main>
  );
}
