"use client";

import Link from "next/link";
import { BRAND, EASE, LINKEDIN, RollText, SiteHeader, WinkingPortrait, ui } from "./case-parts";
import { enter } from "./editorial";
import { useLang } from "./use-lang";

const copy = {
  EN: {
    eyebrow: "ABOUT",
    title: "About",
    paragraphs: [
      "I build learning products that turn curiosity into capability. As the founder of SkillxTube, an AI agent that turns YouTube videos into structured skill paths, I work where generative AI, learning design and digital strategy meet.",
      "My path is anything but linear, and that's my edge. I've worked at the French Ministry of the Armed Forces, partnered with 8+ EdTech ventures, generated $37,302 for Adobe in three months, and taught myself to code to ship my own products. I was a Google Ateliers Numériques coach from 2022 to 2024, lived and worked in Bali, and make my music entirely with my voice.",
      "Technology is the tool. Human potential is the point. I ship fast, document everything, and build only what genuinely helps people learn or make something.",
    ],
    collab: "Open to collaboration.",
    back: "Back to the studio",
    studio: "← Studio",
    newTab: "(opens in a new tab)",
  },
  FR: {
    eyebrow: "À PROPOS",
    title: "À propos",
    paragraphs: [
      "Je conçois des produits d'apprentissage qui transforment la curiosité en compétence. Fondatrice de SkillxTube, un agent IA qui transforme des vidéos YouTube en parcours d'apprentissage structurés, je relie IA générative, ingénierie pédagogique et stratégie digitale.",
      "Mon parcours n'a rien de linéaire, et c'est ce qui fait ma force. J'ai travaillé au Ministère des Armées, accompagné plus de 8 projets EdTech en France, généré 37 302 $ pour Adobe en trois mois, puis appris à coder pour construire mes propres produits. J'ai été coach pour Google Ateliers Numériques de 2022 à 2024, j'ai vécu et travaillé à Bali, et je produis ma musique entièrement à la voix.",
      "Je crois que la technologie est un outil et que le potentiel humain est le but. Je construis vite, je documente tout, et je ne lance rien qui ne serve vraiment à apprendre ou à créer.",
    ],
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
              {t.paragraphs[0]}
            </p>
          </header>

          <figure className={`mx-auto mt-10 flex w-full max-w-[760px] justify-center px-5 sm:mt-14 sm:px-10 ${enter("delay-450")}`}>
            <WinkingPortrait preload className="w-[min(220px,52vw)]" />
          </figure>

          <div className="mx-auto w-full max-w-[760px] px-5 pt-14 sm:px-10 sm:pt-20">
            {t.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph} className="mb-6 text-base leading-8 text-black/75">
                {paragraph}
              </p>
            ))}
            <p className="mt-10 text-base leading-8 text-black/75">
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
