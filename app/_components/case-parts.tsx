"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Lang, Localized, Project, Visual } from "../_data/projects";
import { projectHref } from "../_data/projects";
import { thePath } from "../_data/the-path";
import { StandingAvatar } from "./standing-avatar";

export type Slide = {
  id: string;
  nav: Localized;
  eyebrow: Localized;
  title: Localized;
  text: Localized;
  marquee: string;
  tags: string[];
  href?: string;
  /** Label of the cursor badge, defaults to "View project". */
  cta?: Localized;
  visual: Visual;
  tint: string;
  marqueeColor: string;
  ink: string;
};

export const LINKEDIN = "https://www.linkedin.com/in/angelinepoitoutpro/";
export const CONTACT_EMAIL = "webnomadland@gmail.com";
export const EASE = "ease-[cubic-bezier(.25,.46,.45,.94)]";
export const BRAND = "#7660D8";

const DELAYS = {
  100: "delay-100",
  250: "delay-250",
  350: "delay-350",
  450: "delay-450",
} as const;

export const ui = {
  EN: {
    disciplines: ["Generative AI", "Learning Design", "Digital Products"],
    view: "View project",
    switchLang: "Passer en français",
    collaborate: "Open to collaboration",
    newTab: "(opens in a new tab)",
    avatar: "Angéline's avatar, one finger raised, smiling",
  },
  FR: {
    disciplines: ["IA générative", "Ingénierie pédagogique", "Produits digitaux"],
    view: "Voir le projet",
    switchLang: "Switch to English",
    collaborate: "Ouverte aux collaborations",
    newTab: "(nouvel onglet)",
    avatar: "Avatar d'Angéline, un doigt levé, souriante",
  },
};

/** Opening slide of the home stage, also the About page band. */
export const approachSlide: Slide = {
  id: "approach",
  nav: { EN: "Approach", FR: "Approche" },
  eyebrow: { EN: "THE APPROACH", FR: "L'APPROCHE" },
  title: { EN: "Approach", FR: "Approche" },
  text: {
    EN: "I work at the intersection of generative AI, learning design and digital products. I use AI as a creative and technical partner, with a focus on useful outcomes rather than technology for its own sake.",
    FR: "Je travaille à la croisée de l'IA générative, de l'ingénierie pédagogique et des produits numériques. J'utilise l'IA comme partenaire créatif et technique, avec une priorité : produire quelque chose d'utile, pas simplement technologique.",
  },
  marquee: "Technology is the tool. Human potential is the point.",
  tags: ["Generative AI", "Learning design", "Digital products"],
  href: "/about",
  cta: { EN: "Go further", FR: "Aller plus loin" },
  visual: "about",
  tint: "#ECE8FB",
  marqueeColor: "#6A4FE0",
  ink: "#7660D8",
};

export const writingSlide: Slide = {
  id: "writing",
  nav: { EN: "Writing", FR: "Écrits" },
  eyebrow: { EN: "WRITING", FR: "ÉCRITS" },
  title: { EN: "Writing", FR: "Écrits" },
  text: {
    EN: "Essays on building products, learning, and working with AI.",
    FR: "Essais sur la construction de produits, l'apprentissage et le travail avec l'IA.",
  },
  marquee: "Essays on building, learning and working with AI.",
  tags: ["Essays", "Building", "AI"],
  href: "/writing",
  cta: { EN: "Read", FR: "Lire" },
  visual: "writing",
  tint: "#F6F1E6",
  marqueeColor: "#E7DCC4",
  ink: "#7660D8",
};

/** The Path, shown after the last project (home stage and "next" block). */
export const thePathSlide: Slide = {
  id: "the-path",
  nav: { EN: "The Path", FR: "The Path" },
  eyebrow: { EN: "THE PATH · BRICK METHOD", FR: "THE PATH · BRICK METHOD" },
  title: { EN: thePath.title, FR: thePath.title },
  text: {
    EN: thePath.tagline,
    FR: "Agents IA et micro-SaaS pour l'éducation | 7+ partenariats EdTech en France | Internationalisation en cours",
  },
  marquee: "Indie everywheeere. Techie yours.",
  tags: ["EdTech", "AI agents", "Indie Hacking"],
  href: "/the-path",
  cta: { EN: "Read", FR: "Lire" },
  visual: "path",
  tint: "#DCEADF",
  marqueeColor: "#C5DCCB",
  ink: "#2E6A48",
};

export function projectToSlide(project: Project): Slide {
  return {
    id: project.slug,
    nav: { EN: project.title, FR: project.title },
    eyebrow: {
      EN: `${project.number} · ${project.eyebrow.EN}`,
      FR: `${project.number} · ${project.eyebrow.FR}`,
    },
    title: { EN: project.title, FR: project.title },
    text: project.summary,
    marquee: project.marquee,
    tags: project.tags,
    href: projectHref(project.slug),
    visual: project.visual,
    tint: project.tint,
    marqueeColor: project.marqueeColor,
    ink: project.ink,
  };
}

export const isVideo = (src: string) => /\.(mp4|webm)$/i.test(src);

export function SiteHeader({
  lang,
  onLangChange,
  compactBelow = "700px",
  children,
}: {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  /** Hide the disciplines on viewports shorter than this. */
  compactBelow?: "700px" | "none";
  children?: ReactNode;
}) {
  const t = ui[lang];
  return (
    <header className="pointer-events-none absolute inset-x-0 top-3.5 z-30 flex items-start justify-between px-4 sm:top-6 sm:px-10">
      <div className="pointer-events-auto flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className="text-xl leading-none font-semibold tracking-[-0.04em] transition-opacity hover:opacity-50 sm:text-2xl"
          >
            Angéline Poitout<span style={{ color: BRAND }}>.</span>
          </Link>
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#22C55E] opacity-60 [animation-duration:2s] motion-reduce:animate-none" />
              <span className="relative inline-flex size-1.5 rounded-full bg-[#22C55E]" />
            </span>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className={`w-fit text-[11px] leading-none text-black/55 underline decoration-black/20 underline-offset-[5px] transition-colors duration-300 hover:text-[#7660D8] hover:decoration-[#7660D8] ${EASE}`}
            >
              {t.collaborate}
              <span className="sr-only"> {t.newTab}</span>
            </a>
          </span>
        </div>
        <p
          className={`hidden text-xs leading-[1.2] text-black/60 sm:block ${
            compactBelow === "700px" ? "[@media(max-height:700px)]:hidden" : ""
          }`}
        >
          {t.disciplines.map((d) => (
            <span key={d} className="block">
              {d}
            </span>
          ))}
        </p>
      </div>

      <div className="pointer-events-auto flex items-center gap-5">
        {children}
        <SocialLinks newTab={t.newTab} />
        <button
          type="button"
          onClick={() => onLangChange(lang === "EN" ? "FR" : "EN")}
          className="flex h-12 min-w-12 items-center justify-center rounded-full px-4 text-xs font-medium tracking-[0.08em] text-white transition-transform duration-300 hover:scale-105 sm:h-14 sm:min-w-14"
          style={{ backgroundColor: BRAND }}
          aria-label={t.switchLang}
        >
          {lang === "EN" ? "FR" : "EN"}
        </button>
      </div>
    </header>
  );
}

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Angelinei",
    icon: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: LINKEDIN,
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/angeline.poitout.music/",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
  },
  {
    label: "Substack",
    href: "https://easywebie.substack.com/",
    icon: <path d="M5 4h14M5 8h14M5 12h14v8l-7-4-7 4z" />,
  },
  {
    label: "Indie Page",
    href: "https://indiepa.ge/madship",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </>
    ),
  },
];

/** Minimal social icons, left of the language switch. */
function SocialLinks({ newTab }: { newTab: string }) {
  return (
    <ul className="flex items-center gap-3 sm:gap-4">
      {SOCIALS.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
            title={social.label}
            className="block text-black/55 transition-colors duration-300 hover:text-[#7660D8]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 sm:size-[18px]"
            >
              {social.icon}
            </svg>
            <span className="sr-only">
              {social.label} {newTab}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Giant line scrolling behind a case. */
export function Marquee({
  text,
  color,
  state = "active",
  large = false,
}: {
  text: string;
  color: string;
  state?: "active" | "before" | "after";
  /** Same band as the opening screen: heavy sans, tight, tall enough to run through the case. */
  large?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 flex items-center transition-[opacity,translate] motion-reduce:transition-none ${EASE} ${
        state === "active"
          ? "translate-y-0 opacity-100 duration-[1100ms]"
          : state === "before"
            ? "-translate-y-[18%] opacity-0 duration-500"
            : "translate-y-[18%] opacity-0 duration-500"
      }`}
    >
      <div
        className={`flex w-max animate-[cases-marquee_48s_linear_infinite] whitespace-nowrap motion-reduce:animate-none ${
          large
            ? "font-[family-name:var(--font-geist-sans)] text-[clamp(13rem,28vw,22rem)] leading-[0.72] font-black tracking-[-0.06em]"
            : "font-serif text-[clamp(5rem,12vw,10.5rem)] leading-[1.2] tracking-[-0.04em] italic"
        }`}
      >
        <p className="pr-[0.5em]" style={{ color }}>
          {text}
        </p>
        <p className="pr-[0.5em]" style={{ color }}>
          {text}
        </p>
      </div>
    </div>
  );
}

/** Text that rolls up to a coloured clone on hover of the closest `.group`. */
export function RollText({ children, color }: { children: string; color: string }) {
  return (
    <span className="relative block min-w-0 overflow-clip">
      <span className={`block transition-transform duration-300 ${EASE} group-hover:-translate-y-full`}>
        {children}
      </span>
      <span
        aria-hidden="true"
        className={`absolute inset-0 block translate-y-full transition-transform duration-300 ${EASE} group-hover:translate-y-0`}
        style={{ color }}
      >
        {children}
      </span>
    </span>
  );
}

/** Round "View project" badge that eases towards the mouse pointer. */
export function Stalker({ visible, color, label }: { visible: boolean; color: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const tick = () => {
      pos.x += (target.x - pos.x) * 0.16;
      pos.y += (target.y - pos.y) * 0.16;
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove);
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-40 hidden [@media(hover:hover)_and_(pointer:fine)]:block"
    >
      <div
        className={`-mt-[120px] -ml-[120px] flex size-60 items-center justify-center gap-2.5 rounded-full px-8 text-center text-lg leading-tight font-medium tracking-[-0.02em] text-white shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-[scale,opacity,background-color] duration-500 ${EASE} ${
          visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{ backgroundColor: color }}
      >
        {label}
        <span className="text-xl">↗</span>
      </div>
    </div>
  );
}

/** The open portrait, with one eyelid that closes on a loop. */
export function WinkingPortrait({
  className = "",
  preload = false,
}: {
  className?: string;
  preload?: boolean;
}) {
  return (
    <span className={`relative block ${className}`}>
      <Image
        src="/media/img/portrait.a0ca463a6f.webp"
        alt="Angéline Poitout"
        width={333}
        height={482}
        sizes="250px"
        preload={preload}
        draggable={false}
        className="h-auto w-full"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-[18.3%] left-[56.8%] h-[4.6%] w-[9.6%] origin-top rounded-[50%] bg-[#C69678] shadow-[inset_0_-1.5px_0_#6E4638] animate-[portrait-wink_4.8s_ease-in-out_infinite] motion-reduce:hidden"
      />
    </span>
  );
}

/** First screen, composed like the Mild Sugar about case: title, portrait, caption. */
function AboutSlide({
  slide,
  lang,
  state,
  label,
  preload,
  onHover,
}: {
  slide: Slide;
  lang: Lang;
  state: "active" | "before" | "after";
  label: string;
  preload: boolean;
  onHover: (on: boolean) => void;
}) {
  const isActive = state === "active";
  const reveal = (delay: keyof typeof DELAYS) =>
    `transition-[opacity,translate] motion-reduce:transition-none ${EASE} ${
      isActive
        ? `opacity-100 translate-y-0 duration-700 ${DELAYS[delay]}`
        : `opacity-0 delay-0 duration-300 ${state === "before" ? "-translate-y-4" : "translate-y-4"}`
    }`;

  const goFurther = slide.cta?.[lang] ?? "Go further";
  const grid = (
    <div className="relative grid h-full w-full grid-rows-[1fr_auto_1fr] justify-items-center px-8 pb-16 pt-20 sm:px-16">
      <h2 className="self-end overflow-clip pb-[0.08em] text-center text-[clamp(3.25rem,7vw,5.75rem)] leading-none font-semibold tracking-[-0.045em] text-[#3A3832] [@media(max-height:700px)]:text-5xl">
        <span
          className={`block transition-transform motion-reduce:transition-none ${EASE} ${
            isActive
              ? "translate-y-0 duration-[900ms] delay-150"
              : state === "before"
                ? "-translate-y-[110%] duration-500"
                : "translate-y-[110%] duration-500"
          }`}
        >
          {slide.title[lang]}
        </span>
      </h2>
      <WinkingPortrait
        preload={preload}
        className={`w-[min(250px,58vw)] [@media(max-height:700px)]:w-[min(190px,46vw)] ${reveal(250)}`}
      />
      <p
        className={`mt-1 max-w-[26rem] self-start text-center text-[13px] leading-[1.65] font-medium text-[#2C2A26] sm:text-sm ${reveal(350)}`}
      >
        {slide.text[lang]}
      </p>
      {slide.href && (
        <span className="absolute top-[60%] left-[calc(50%+4.75rem)] z-20 flex size-24 items-center justify-center rounded-full bg-[#7660D8] px-3 text-center text-[11px] leading-tight font-medium text-white shadow-[0_8px_24px_rgba(0,0,0,0.1)] [@media(hover:hover)_and_(pointer:fine)]:hidden">
          {goFurther}
          <span aria-hidden="true"> ↗</span>
        </span>
      )}
    </div>
  );

  return (
    <section
      aria-roledescription="slide"
      aria-label={label}
      aria-hidden={!isActive}
      inert={!isActive}
      className={`absolute inset-0 z-10 ${isActive ? "" : "pointer-events-none"}`}
    >
      {slide.href ? (
        <Link
          href={slide.href}
          className="block h-full"
          onPointerEnter={(e) => e.pointerType === "mouse" && onHover(true)}
          onPointerLeave={() => onHover(false)}
          onFocus={() => onHover(false)}
          onClick={() => onHover(false)}
        >
          {grid}
        </Link>
      ) : (
        grid
      )}
    </section>
  );
}

export function CaseItem({
  slide,
  cover,
  lang,
  state,
  label,
  preload = false,
  standalone = false,
  onHover,
}: {
  slide: Slide;
  cover?: string;
  lang: Lang;
  state: "active" | "before" | "after";
  /** Accessible name of the slide, e.g. "2 / 7 — Skillxtube". */
  label: string;
  preload?: boolean;
  /** Rendered on its own (e.g. "next project"), not as a carousel slide. */
  standalone?: boolean;
  onHover: (on: boolean) => void;
}) {
  if (slide.visual === "about") {
    return (
      <AboutSlide
        slide={slide}
        lang={lang}
        state={state}
        label={label}
        preload={preload}
        onHover={onHover}
      />
    );
  }

  const isActive = state === "active";
  // Each block enters with a staggered delay and leaves without one.
  const reveal = (delay: keyof typeof DELAYS) =>
    `transition-[opacity,translate,scale] motion-reduce:transition-none ${EASE} ${
      isActive
        ? `opacity-100 translate-y-0 scale-100 duration-700 ${DELAYS[delay]}`
        : `opacity-0 delay-0 duration-300 ${state === "before" ? "-translate-y-4" : "translate-y-4"}`
    }`;

  // The contact slide uses the rounded face of the "Say Hey!" reference.
  const isContact = slide.visual === "contact";
  const title = (
    <span
      className={`block overflow-clip pb-[0.08em] text-[clamp(2.6rem,11vw,4rem)] leading-[1.05] [@media(max-height:680px)]:text-[2.75rem] ${
        isContact ? "font-[family-name:var(--font-fredoka)] font-bold tracking-[-0.02em]" : "font-medium tracking-[-0.06em]"
      }`}
    >
      <span
        className={`flex items-center gap-4 transition-transform motion-reduce:transition-none ${EASE} ${
          isActive
            ? "translate-y-0 duration-[900ms] delay-300"
            : state === "before"
              ? "-translate-y-[110%] duration-500"
              : "translate-y-[110%] duration-500"
        }`}
      >
        <RollText color={slide.ink}>{slide.title[lang]}</RollText>
        {(slide.href || slide.visual === "contact") && (
          <span className="text-[0.55em] font-normal" style={{ color: slide.ink }} aria-hidden="true">
            ↗
          </span>
        )}
      </span>
    </span>
  );

  const text = (delay: keyof typeof DELAYS) => (
    <span
      className={`block w-[400px] max-w-[calc(100vw-4rem)] text-[15px] leading-[1.6] text-black/75 sm:text-base [@media(max-height:680px)]:text-sm ${
        isContact ? "font-[family-name:var(--font-fredoka)] font-semibold sm:text-lg" : "font-medium"
      } ${reveal(delay)}`}
    >
      {slide.text[lang]}
    </span>
  );

  const body = (
    <>
      <span className={`mb-3 block text-[10px] tracking-[0.18em] text-black/50 ${reveal(100)}`}>
        {slide.eyebrow[lang]}
      </span>
      {slide.visual === "contact" ? (
        <a href={LINKEDIN} target="_blank" rel="noreferrer" className="group">
          {title}
          <span className="sr-only"> {ui[lang].newTab}</span>
        </a>
      ) : (
        title
      )}
      {isContact ? (
        <>
          {text(250)}
          <span className={`mt-2 block h-[min(360px,40svh)] ${reveal(350)}`}>
            <StandingAvatar label={ui[lang].avatar} className="h-full w-auto" />
          </span>
        </>
      ) : (
        <>
          <span
            className={`my-5 block size-[min(280px,32svh)] [@media(max-height:560px)]:my-2 ${reveal(250)}`}
          >
            <ProjectVisual
              kind={slide.visual}
              tint={slide.tint}
              ink={slide.ink}
              linked={Boolean(slide.href)}
              cover={cover}
              alt={slide.title[lang]}
              preload={preload}
              sizes="280px"
            />
          </span>
          {text(350)}
        </>
      )}
      <span
        className={`mt-4 flex w-[400px] max-w-[calc(100vw-4rem)] flex-wrap gap-2 ${reveal(450)}`}
      >
        {slide.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full px-4 py-2.5 text-[11px] leading-none text-white sm:text-xs"
            style={{ backgroundColor: slide.ink }}
          >
            {tag}
          </span>
        ))}
        {slide.visual === "contact" && (
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border px-4 py-2.5 text-xs leading-none transition-opacity hover:opacity-70"
            style={{ borderColor: slide.ink, color: slide.ink }}
          >
            LinkedIn ↗
            <span className="sr-only"> {ui[lang].newTab}</span>
          </a>
        )}
        {slide.visual === "contact" && (
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-full border px-4 py-2.5 text-xs leading-none transition-opacity hover:opacity-70"
            style={{ borderColor: slide.ink, color: slide.ink }}
          >
            {CONTACT_EMAIL}
          </a>
        )}
      </span>
    </>
  );

  const itemClass = "relative top-4 flex max-w-[calc(100vw-4rem)] flex-col items-start";

  return (
    <section
      aria-roledescription={standalone ? undefined : "slide"}
      aria-label={label}
      aria-hidden={!isActive}
      inert={!isActive}
      className={`absolute inset-0 z-10 flex items-center justify-center ${
        isActive ? "" : "pointer-events-none"
      }`}
    >
      {slide.href ? (
        <Link
          href={slide.href}
          className={`group ${itemClass}`}
          onPointerEnter={(e) => e.pointerType === "mouse" && onHover(true)}
          onPointerLeave={() => onHover(false)}
          onFocus={() => onHover(false)}
          onClick={() => onHover(false)}
        >
          {body}
        </Link>
      ) : (
        <div className={itemClass}>{body}</div>
      )}
    </section>
  );
}

export function ProjectVisual({
  kind,
  tint,
  ink,
  linked,
  cover,
  alt,
  preload,
  sizes,
}: {
  kind: Visual;
  tint: string;
  ink: string;
  linked: boolean;
  cover?: string;
  alt: string;
  preload: boolean;
  sizes: string;
}) {
  return (
    <span
      className="@container relative flex size-full items-center justify-center overflow-hidden rounded-[22px] shadow-[0_20px_50px_-30px_rgba(32,32,30,0.45)] transition-transform duration-500 group-hover:scale-[0.98]"
      style={{ backgroundColor: tint }}
    >
      {cover && isVideo(cover) && (
        <video
          src={cover}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover"
        />
      )}

      {cover && !isVideo(cover) && (
        <Image
          src={cover}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-contain transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {!cover && kind === "skill" && (
        <span className="block w-[78cqw] -rotate-2 rounded-[4cqw] bg-white p-[6cqw] shadow-xl transition-transform duration-700 group-hover:rotate-0">
          <span className="mb-[6cqw] flex items-center justify-between">
            <span className="text-[5cqw] font-bold tracking-tight text-[#242424]">skillxtube</span>
            <span className="rounded-full bg-[#E6DFFF] px-[2.5cqw] py-[1cqw] text-[3cqw] text-[#5940A5]">
              LEARN MODE
            </span>
          </span>
          <span className="mb-[3cqw] block h-[2.4cqw] w-2/3 rounded-full bg-black/10" />
          <span className="mb-[6cqw] block h-[2.4cqw] w-1/2 rounded-full bg-black/10" />
          <span className="flex gap-[2.5cqw]">
            <span className="h-[16cqw] flex-1 rounded-[2cqw] bg-[#DCD3FF]" />
            <span className="h-[16cqw] flex-1 rounded-[2cqw] bg-[#F8E7B9]" />
            <span className="h-[16cqw] flex-1 rounded-[2cqw] bg-[#C9E7FF]" />
          </span>
        </span>
      )}

      {!cover && kind === "portfolio" && (
        <span className="block w-[78cqw] rotate-2 border border-black/10 bg-[#F8F7F2] p-[7cqw] shadow-xl transition-transform duration-700 group-hover:rotate-0">
          <span className="mb-[5cqw] block text-[2.6cqw] tracking-[0.18em] text-black/50">
            ANGÉLINE POITOUT — STUDIO
          </span>
          <span className="block text-[10cqw] leading-[0.95] font-medium tracking-[-0.07em] text-black">
            Ideas into
            <br />
            <span className="font-serif italic" style={{ color: BRAND }}>
              experiences.
            </span>
          </span>
          <span className="mt-[6cqw] block h-px bg-black/15" />
        </span>
      )}

      {!cover && kind === "archive" && (
        <span className="relative block h-[58cqw] w-[62cqw]">
          {[
            "translate-x-[-7cqw] translate-y-[-6cqw] -rotate-6 bg-[#F6F1E6]",
            "translate-x-[4cqw] translate-y-[-2cqw] rotate-3 bg-[#FBF8F1]",
            "translate-y-[4cqw] -rotate-1 bg-white group-hover:-translate-y-[2cqw]",
          ].map((pos, i) => (
            <span
              key={i}
              className={`absolute inset-0 block rounded-[2.5cqw] border border-black/10 p-[5cqw] shadow-lg transition-transform duration-700 ${pos}`}
            >
              <span className="mb-[4cqw] block h-[2cqw] w-1/3 rounded-full bg-black/10" />
              <span className="mb-[2.5cqw] block h-[1.6cqw] w-4/5 rounded-full bg-black/[0.07]" />
              <span className="block h-[1.6cqw] w-3/5 rounded-full bg-black/[0.07]" />
              {i === 2 && (
                <span className="absolute bottom-[5cqw] left-[5cqw] text-[3.2cqw] tracking-[0.18em]" style={{ color: ink }}>
                  ARCHIVES — STUDIO
                </span>
              )}
            </span>
          ))}
        </span>
      )}

      {!cover && kind === "cemetery" && (
        <span className="relative flex h-[64cqw] w-full items-end justify-center">
          <span className="absolute inset-x-[10cqw] bottom-[8cqw] h-px bg-black/20" />
          <span className="relative mb-[8cqw] flex h-[46cqw] w-[34cqw] items-center justify-center rounded-t-full bg-[#F4F3F0] shadow-xl transition-transform duration-700 group-hover:-translate-y-[1.5cqw]">
            <span className="text-center text-[3.4cqw] leading-[1.6] tracking-[0.2em]" style={{ color: ink }}>
              LE
              <br />
              CIMETIÈRE
            </span>
          </span>
        </span>
      )}

      {!cover && kind === "path" && (
        <span className="flex flex-col items-end gap-[1.6cqw]">
          {[1, 2, 3, 4].map((count, row) => (
            <span key={row} className="flex gap-[1.6cqw]">
              {Array.from({ length: count }, (_, i) => (
                <span
                  key={i}
                  className={`block h-[9cqw] w-[14cqw] rounded-[1.6cqw] shadow-md transition-transform duration-700 ${
                    row === 0 ? "group-hover:-translate-y-[2cqw]" : "bg-white"
                  }`}
                  style={row === 0 ? { backgroundColor: ink } : undefined}
                />
              ))}
            </span>
          ))}
        </span>
      )}

      {!cover && kind === "lab" && (
        <span className="relative flex size-[64cqw] items-center justify-center rounded-full border border-[#974A20]/25">
          <span className="absolute inset-[4cqw] animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-[#974A20]/40 motion-reduce:animate-none" />
          <span className="absolute size-[36cqw] rounded-full bg-[#F5B58D] transition-transform duration-700 group-hover:scale-110" />
          <span className="relative text-[4cqw] font-semibold tracking-[0.15em] text-[#633015]">
            AI / LAB
          </span>
        </span>
      )}

      {!cover && kind === "games" && (
        <span className="block w-[72cqw] -rotate-3 rounded-[4cqw] border-[0.8cqw] border-[#16130F] bg-[#16130F] p-[4cqw] shadow-[1.6cqw_1.6cqw_0_0_#16130F] transition-transform duration-700 group-hover:rotate-0">
          <span className="mb-[4cqw] flex items-center justify-between">
            <span className="text-[5cqw] font-bold tracking-tight text-[#FFF6E5]">SkillX</span>
            <span className="rounded-[1.2cqw] bg-[#FFC72C] px-[2cqw] py-[0.6cqw] text-[3cqw] font-semibold tracking-[0.15em] text-[#16130F]">
              GAMES
            </span>
          </span>
          <span className="grid grid-cols-4 gap-[2cqw] rounded-[2.5cqw] bg-[#1B2A72] p-[2.5cqw]">
            {["#FF5A3C", null, "#1FC28F", null, null, "#FF5A3C", null, "#1FC28F"].map((face, i) => (
              <span
                key={i}
                className="flex aspect-square items-center justify-center rounded-[1.6cqw] border-[0.5cqw] border-[#0D1540]"
                style={{ backgroundColor: face ? "#FFFDF7" : "#4061FF" }}
              >
                {face ? (
                  <span
                    className={`block size-[6cqw] ${face === "#1FC28F" ? "rotate-45" : "rounded-full"}`}
                    style={{ backgroundColor: face }}
                  />
                ) : (
                  <span className="block size-[2.4cqw] bg-[#FFC72C]" />
                )}
              </span>
            ))}
          </span>
          <span className="mt-[3.5cqw] block text-center text-[2.8cqw] tracking-[0.25em] text-[#FFC72C]">
            INSERT COIN
          </span>
        </span>
      )}

      {!cover && kind === "about" && (
        <span className="relative flex size-[64cqw] items-center justify-center rounded-full bg-white shadow-xl">
          <span
            className="absolute -inset-[5cqw] animate-[spin_50s_linear_infinite] rounded-full border border-dashed motion-reduce:animate-none"
            style={{ borderColor: `${ink}66` }}
          />
          <span className="font-serif text-[22cqw] leading-none tracking-[-0.06em] italic" style={{ color: ink }}>
            AP<span className="text-[#20201E] not-italic">.</span>
          </span>
        </span>
      )}

      {!cover && kind === "writing" && (
        <span className="relative block h-[62cqw] w-[70cqw]">
          <span className="absolute inset-0 translate-x-[4cqw] -translate-y-[3cqw] rotate-3 rounded-[2.5cqw] border border-black/10 bg-white shadow-lg" />
          <span className="absolute inset-0 block -rotate-2 rounded-[2.5cqw] border border-black/10 bg-[#F8F7F2] p-[6cqw] shadow-xl transition-transform duration-700 group-hover:rotate-0">
            <span className="mb-[4cqw] block h-[2cqw] w-1/4 rounded-full" style={{ backgroundColor: ink }} />
            <span className="block font-serif text-[9cqw] leading-[1.05] tracking-[-0.04em] italic" style={{ color: ink }}>
              Essays
            </span>
            <span className="mt-[5cqw] block h-px bg-black/15" />
            <span className="mt-[3.5cqw] block h-[1.6cqw] w-4/5 rounded-full bg-black/10" />
            <span className="mt-[2.2cqw] block h-[1.6cqw] w-3/5 rounded-full bg-black/10" />
          </span>
        </span>
      )}

      {!cover && kind === "contact" && (
        <span className="block w-[74cqw] -rotate-3 rounded-[5cqw] bg-white p-[7cqw] shadow-xl">
          <span className="block font-serif text-[15cqw] leading-none tracking-[-0.04em] italic" style={{ color: ink }}>
            Hello!
            <span className="ml-[1cqw] inline-block h-[12cqw] w-[0.8cqw] translate-y-[1.5cqw] animate-pulse bg-[#20201E]" />
          </span>
          <span className="mt-[6cqw] block h-px bg-black/10" />
          <span className="mt-[3cqw] block text-[3.2cqw] text-black/50">Open to collaboration</span>
        </span>
      )}

      {linked && (
        <span className="absolute right-[5cqw] bottom-[4cqw] text-[4cqw] text-black/40">↗</span>
      )}
    </span>
  );
}
