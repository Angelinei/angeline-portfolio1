"use client";

import Link from "next/link";
import { BRAND, EASE, LINKEDIN, RollText, SiteHeader, WinkingPortrait, ui } from "./case-parts";
import { Group, enter } from "./editorial";
import { useLang } from "./use-lang";

const copy = {
  EN: {
    eyebrow: "ABOUT",
    title: "About",
    lead: "I work at the intersection of generative AI, learning design and digital products. I use AI as a creative and technical partner, with a focus on useful outcomes rather than technology for its own sake.",
    workTitle: "The work",
    work: "Digital products, AI experiments and learning experiences. Generative AI is a partner in the work, not the point of it.",
    pathTitle: "The path",
    path: "The longer account, from training rooms to independent products, is written as The Path.",
    pathCta: "Read The Path",
    collabTitle: "Collaboration",
    collab: "Open to collaboration.",
    back: "Back to the studio",
    studio: "← Studio",
    newTab: "(opens in a new tab)",
  },
  FR: {
    eyebrow: "À PROPOS",
    title: "À propos",
    lead: "Je travaille à la croisée de l'IA générative, de l'ingénierie pédagogique et des produits numériques. J'utilise l'IA comme partenaire créatif et technique, avec une priorité : produire quelque chose d'utile, pas simplement technologique.",
    workTitle: "Le travail",
    work: "Des produits numériques, des expérimentations en IA et des expériences d'apprentissage. L'IA générative est une partenaire de travail, pas une fin en soi.",
    pathTitle: "Le parcours",
    path: "Le récit plus long, des salles de formation aux produits indépendants, est sur The Path.",
    pathCta: "Lire The Path",
    collabTitle: "Collaboration",
    collab: "Ouverte aux collaborations.",
    back: "Retour au studio",
    studio: "← Studio",
    newTab: "(nouvel onglet)",
  },
};

export default function AboutPage() {
  const [lang, setLang] = useLang();
  const t = copy[lang];

  return (
    <div className="relative min-h-svh bg-[#F8F7F2] text-[#20201E] selection:bg-[#7660D8] selection:text-white">
      <SiteHeader lang={lang} onLangChange={setLang} compactBelow="none">
        <Link
          href="/#approach"
          className="hidden text-xs text-black/50 transition-colors hover:text-[#7660D8] md:inline"
        >
          {t.studio}
        </Link>
      </SiteHeader>

      <main>
        <article>
          <header className="mx-auto w-full max-w-[760px] px-5 pt-36 sm:px-10 sm:pt-[180px]">
            <p className={`mb-4 text-[10px] tracking-[0.18em] text-black/50 ${enter("delay-100")}`}>
              {t.eyebrow}
            </p>
            <h1 className="overflow-clip pb-[0.08em] text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.02] font-medium tracking-[-0.065em]">
              <span
                className={`block transition-transform delay-150 duration-[1000ms] motion-reduce:transition-none starting:translate-y-[110%] ${EASE}`}
              >
                {t.title}
              </span>
            </h1>
            <p
              className={`mt-8 max-w-3xl text-lg leading-[1.5] font-medium tracking-[-0.02em] sm:text-2xl ${enter("delay-300")}`}
            >
              {t.lead}
            </p>
          </header>

          <figure className={`mx-auto mt-10 flex w-full max-w-[760px] justify-center px-5 sm:mt-14 sm:px-10 ${enter("delay-450")}`}>
            <WinkingPortrait preload className="w-[min(220px,52vw)]" />
          </figure>

          <div className="mx-auto w-full max-w-[760px] px-5 pt-14 sm:px-10 sm:pt-20">
            <Group title={t.workTitle}>
              <p className="mb-4 text-base leading-8 text-black/75">{t.work}</p>
              <ul className="mb-4 flex flex-wrap gap-2">
                {ui[lang].disciplines.map((item) => (
                  <li
                    key={item}
                    className="rounded-full px-4 py-2.5 text-xs leading-none text-white"
                    style={{ backgroundColor: BRAND }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Group>

            <Group title={t.pathTitle}>
              <p className="mb-4 text-base leading-8 text-black/75">{t.path}</p>
              <Link href="/the-path" className="group inline-flex text-lg font-medium tracking-[-0.03em]">
                <RollText color={BRAND}>{t.pathCta}</RollText>
                <span aria-hidden="true" className="ml-2" style={{ color: BRAND }}>
                  ↗
                </span>
              </Link>
            </Group>

            <Group title={t.collabTitle}>
              <p className="text-base leading-8 text-black/75">
                {t.collab}{" "}
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4"
                  style={{ color: BRAND }}
                >
                  LinkedIn
                  <span className="sr-only"> {t.newTab}</span>
                </a>
                .
              </p>
            </Group>
          </div>
        </article>

        <nav className="mx-auto w-full max-w-[1120px] px-5 sm:px-10">
          <div className="flex justify-center border-t border-black/10 py-20 sm:py-28">
            <Link
              href="/#approach"
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
