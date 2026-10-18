import Link from "next/link";
import { requireLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/site";

const projects = [
  {
    number: "01",
    type: "DIGITAL PRODUCT · EDTECH",
    year: "2026",
    title: "Skillxtube",
    subtitle: "Turn content into learning.",
    description:
      "An AI-powered learning experience that transforms online videos into structured learning paths, notes and exercises.",
    tags: ["AI", "EdTech", "Product design", "Next.js"],
    href: "https://skillxtube.vercel.app/",
    cta: "site",
    accent: "#A78BFA",
  },
  {
    number: "02",
    type: "AI · CREATIVE DEVELOPMENT",
    year: "2026",
    title: "The Portfolio",
    subtitle: "A studio built with AI.",
    description:
      "A personal digital studio exploring how generative AI can accelerate research, design decisions, development and creative direction.",
    tags: ["Generative AI", "Web design", "Vercel", "GitHub"],
    href: "https://github.com/Angelinei/angeline-portfolio1",
    cta: "code",
    accent: "#7DD3FC",
  },
  {
    number: "03",
    type: "AI · LEARNING DESIGN",
    year: "2026",
    title: "AI Learning Lab",
    subtitle: "From experimentation to application.",
    description:
      "A growing collection of experiments around prompting, AI-assisted workflows, learning experiences and practical adoption.",
    tags: ["AI workflows", "Prompting", "Learning design"],
    href: "https://github.com/Angelinei",
    cta: "github",
    accent: "#F0ABFC",
  },
] as const;

const copy = {
  en: {
    eyebrow: "INDEPENDENT DIGITAL STUDIO · 2026",
    title: "Ideas, made",
    titleAccent: "tangible.",
    intro:
      "A selection of digital products, AI experiments and learning experiences. Each project starts with a question and develops through research, iteration and making.",
    index: "PROJECT INDEX",
    cta: { site: "VISIT THE SITE", code: "VIEW THE CODE", github: "VIEW ON GITHUB" },
    about: "A little about the approach",
    aboutText:
      "I work at the intersection of generative AI, learning design and digital products. I use AI as a creative and technical partner, with a focus on useful outcomes rather than technology for its own sake.",
    contact: "Have a project in mind?",
    contactText: "Let's turn the idea into something real.",
    contactLink: "GET IN TOUCH ↗",
    back: "← BACK HOME",
    footer: "INDEPENDENT · FRANCE · WORKING EVERYWHERE",
    pageTitle: "Studio",
    description:
      "A darker cut of the studio: Skillxtube, the portfolio, and the AI learning lab.",
  },
  fr: {
    eyebrow: "STUDIO DIGITAL INDÉPENDANT · 2026",
    title: "Des idées",
    titleAccent: "au concret.",
    intro:
      "Une sélection de produits numériques, d'expérimentations IA et d'expériences pédagogiques. Chaque projet part d'une question, puis évolue grâce à la recherche, aux itérations et à la pratique.",
    index: "INDEX DES PROJETS",
    cta: { site: "VOIR LE SITE", code: "VOIR LE CODE", github: "VOIR SUR GITHUB" },
    about: "Une approche, en quelques mots",
    aboutText:
      "Je travaille à la croisée de l'IA générative, de l'ingénierie pédagogique et des produits numériques. J'utilise l'IA comme partenaire créatif et technique, avec une priorité : produire quelque chose d'utile, pas simplement technologique.",
    contact: "Une idée à concrétiser ?",
    contactText: "Donnons-lui une forme réelle.",
    contactLink: "ME CONTACTER ↗",
    back: "← RETOUR À L'ACCUEIL",
    footer: "INDÉPENDANTE · FRANCE · PROJETS PARTOUT",
    pageTitle: "Studio",
    description:
      "Une version plus sombre du studio : Skillxtube, le portfolio, et le laboratoire d'apprentissage IA.",
  },
} as const;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/studio">) {
  const locale = await requireLocale(params);
  const t = copy[locale];
  return pageMetadata({
    locale,
    path: "/studio",
    title: t.pageTitle,
    description: t.description,
  });
}

export default async function StudioPage({
  params,
}: PageProps<"/[locale]/studio">) {
  const locale = await requireLocale(params);
  const t = copy[locale];
  const nextLocale = locale === "en" ? "fr" : "en";

  return (
    <main className="min-h-screen bg-[#09090b] text-[#f1f0ed] selection:bg-violet-300 selection:text-black">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-white/10 py-6">
          <Link href={`/${locale}`} className="text-sm font-semibold tracking-tight">
            ANGÉLINE POITOUT<span className="text-violet-300">.</span>
          </Link>
          <div className="flex items-center gap-6 text-xs">
            <span className="hidden text-white/40 sm:inline">DIGITAL STUDIO / 001</span>
            <Link
              href={`/${nextLocale}/studio`}
              hrefLang={nextLocale}
              className="rounded-full border border-white/20 px-3 py-2 transition hover:border-violet-300 hover:text-violet-200"
              aria-label={locale === "fr" ? "English version" : "Version française"}
            >
              {locale === "en" ? "EN ↔ FR" : "FR ↔ EN"}
            </Link>
          </div>
        </header>
        {locale === "fr" ? (
          <p
            role="note"
            className="mt-6 border border-white/15 px-4 py-3 text-sm text-white/70"
          >
            Traduction en cours
          </p>
        ) : null}

        <section className="grid gap-10 pb-20 pt-20 md:grid-cols-[1.4fr_0.6fr] md:pb-28 md:pt-32">
          <div>
            <p className="mb-8 text-[10px] tracking-[0.25em] text-violet-300">
              {t.eyebrow}
            </p>
            <h1 className="max-w-4xl text-6xl font-medium leading-[0.98] tracking-[-0.065em] sm:text-8xl lg:text-[112px]">
              {t.title}
              <br />
              <span className="text-white/40">{t.titleAccent}</span>
            </h1>
          </div>
          <div className="flex flex-col justify-end md:pb-3">
            <div className="mb-6 h-px w-12 bg-violet-300" />
            <p className="max-w-md text-base leading-7 text-white/60 sm:text-lg">
              {t.intro}
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between border-y border-white/15 py-4">
            <p className="text-[10px] tracking-[0.22em] text-white/60">{t.index}</p>
            <p className="text-[10px] tracking-[0.18em] text-white/40">001 — 003</p>
          </div>
          <div>
            {projects.map((project) => (
              <article
                key={project.number}
                className="group grid gap-6 border-b border-white/10 py-10 transition-colors hover:bg-white/[0.02] sm:py-12 md:grid-cols-[70px_1fr_1fr_150px] md:items-center md:gap-8"
              >
                <p className="text-xs text-white/30">{project.number}</p>
                <div>
                  <p className="mb-3 text-[9px] tracking-[0.17em] text-white/40">
                    {project.type} / {project.year}
                  </p>
                  <h2
                    className="text-3xl font-medium tracking-[-0.045em] transition-colors sm:text-4xl"
                    style={{ color: project.accent }}
                  >
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm text-white/50">{project.subtitle}</p>
                </div>
                <div>
                  <p className="max-w-md text-sm leading-6 text-white/60">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-white/20 pb-2 text-[10px] tracking-[0.12em] text-white/70 transition hover:border-violet-300 hover:text-violet-200 md:justify-self-end"
                >
                  {t.cta[project.cta]}
                  <span className="ml-4 text-base transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-b border-white/10 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-5 text-[10px] tracking-[0.2em] text-violet-300">
              THE APPROACH
            </p>
            <h2 className="max-w-lg text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl">
              {t.about}
            </h2>
          </div>
          <p className="max-w-xl self-end text-base leading-8 text-white/60">
            {t.aboutText}
          </p>
        </section>

        <section className="py-20 sm:py-28">
          <p className="mb-5 text-[10px] tracking-[0.2em] text-violet-300">
            OPEN TO COLLABORATION
          </p>
          <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
            {t.contact}
          </h2>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="text-white/50">{t.contactText}</p>
            <a
              href="https://www.linkedin.com/in/angelinepoitoutpro/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit border-b border-violet-300 pb-2 text-xs tracking-[0.12em] text-violet-200 transition hover:text-white"
            >
              {t.contactLink}
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/10 py-6 text-[10px] tracking-[0.12em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ANGÉLINE POITOUT</p>
          <p>{t.footer}</p>
          <Link href={`/${locale}`} className="transition hover:text-white">
            {t.back}
          </Link>
        </footer>
      </div>
    </main>
  );
}
