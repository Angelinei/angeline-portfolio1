"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "../_data/projects";
import { thePath } from "../_data/the-path";
import {
  CaseItem,
  EASE,
  Marquee,
  SiteHeader,
  Stalker,
  projectToSlide,
  ui,
  type Slide,
} from "./case-parts";
import { useLang } from "./use-lang";

const approach: Slide = {
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

const contact: Slide = {
  id: "contact",
  nav: { EN: "Contact", FR: "Contact" },
  eyebrow: { EN: "OPEN TO COLLABORATION", FR: "OUVERTE AUX COLLABORATIONS" },
  title: { EN: "Say hello", FR: "Écrivez-moi" },
  text: {
    EN: "Have a project in mind? Let's turn the idea into something real.",
    FR: "Une idée à concrétiser ? Donnons-lui une forme réelle.",
  },
  marquee: "Have a project in mind? Let's make it real.",
  tags: [],
  visual: "contact",
  tint: "#ECE8FB",
  marqueeColor: "#D9D1FA",
  ink: "#7660D8",
};

const path: Slide = {
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

const writing: Slide = {
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

const slides: Slide[] = [approach, ...projects.map(projectToSlide), path, writing, contact];

const copy = {
  EN: { hint: "Scroll", nav: "Projects" },
  FR: { hint: "Défiler", nav: "Projets" },
};

const LOCK_MS = 1000;

export default function CasesStage({
  covers = {},
}: {
  /** Slide id → media path found in public/projects/<id>/cover.* */
  covers?: Record<string, string>;
}) {
  const [lang, setLang] = useLang();
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);
  const lockedUntil = useRef(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const t = copy[lang];
  const active = slides[current];

  const go = useCallback((index: number) => {
    const next = Math.max(0, Math.min(slides.length - 1, index));
    setCurrent((prev) => {
      if (next === prev) return prev;
      lockedUntil.current = Date.now() + LOCK_MS;
      return next;
    });
  }, []);

  const step = useCallback((dir: 1 | -1) => {
    if (Date.now() < lockedUntil.current) return;
    setCurrent((prev) => {
      const next = Math.max(0, Math.min(slides.length - 1, prev + dir));
      if (next !== prev) lockedUntil.current = Date.now() + LOCK_MS;
      return next;
    });
  }, []);

  // Open the case named in the URL hash (e.g. "/#skillxtube" from a detail page).
  useEffect(() => {
    const index = slides.findIndex((s) => `#${s.id}` === window.location.hash);
    if (index > 0) go(index);
  }, [go]);

  // Keep the hash in sync so the current case can be shared or returned to.
  useEffect(() => {
    const hash = current === 0 ? "" : `#${slides[current].id}`;
    if (window.location.hash !== hash) {
      history.replaceState(history.state, "", `${window.location.pathname}${hash}`);
    }
  }, [current]);

  // Wheel, keyboard and swipe navigation between cases.
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 12) return;
      step(delta > 0 ? 1 : -1);
    };
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "ArrowRight", "PageDown"].includes(e.key)) {
        e.preventDefault();
        step(1);
      } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        step(-1);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(slides.length - 1);
      }
    };
    const onTouchStart = (e: TouchEvent) => {
      touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = (e: TouchEvent) => {
      const start = touchStart.current;
      touchStart.current = null;
      if (!start) return;
      const dx = start.x - e.changedTouches[0].clientX;
      const dy = start.y - e.changedTouches[0].clientY;
      const delta = Math.abs(dy) > Math.abs(dx) ? dy : dx;
      if (Math.abs(delta) < 50) return;
      step(delta > 0 ? 1 : -1);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [go, step]);

  return (
    <main
      className="relative h-svh w-full overflow-clip overscroll-none bg-[#F8F7F2] text-[#20201E] selection:bg-[#7660D8] selection:text-white"
      aria-roledescription="carousel"
      aria-label={t.nav}
    >
      {/* Giant scrolling background lines, one per case */}
      {slides.map((slide, i) => (
        <Marquee
          key={slide.id}
          text={slide.marquee}
          color={slide.marqueeColor}
          large={slide.id === "approach" || slide.id === "skillxtube"}
          state={i === current ? "active" : i < current ? "before" : "after"}
        />
      ))}

      <SiteHeader lang={lang} onLangChange={setLang} />

      {/* Cases */}
      {slides.map((slide, i) => (
        <CaseItem
          key={slide.id}
          slide={slide}
          cover={covers[slide.id]}
          lang={lang}
          state={i === current ? "active" : i < current ? "before" : "after"}
          label={`${i + 1} / ${slides.length} — ${slide.nav[lang]}`}
          preload={i === 0}
          onHover={(on) => setHovered(on ? slide.id : null)}
        />
      ))}

      {/* Case navigation */}
      <nav
        aria-label={t.nav}
        className="absolute top-1/2 right-4 z-20 -translate-y-1/2 sm:top-auto sm:right-10 sm:bottom-6 sm:translate-y-0"
      >
        <ul className="flex flex-col items-end gap-1">
          {slides.map((slide, i) => (
            <li key={slide.id}>
              <button
                type="button"
                onClick={() => go(i)}
                aria-current={i === current ? "step" : undefined}
                aria-label={slide.nav[lang]}
                className={`flex items-center gap-2 py-1 text-xs leading-[1.2] transition-opacity duration-400 ${EASE} ${
                  i === current ? "opacity-100" : "opacity-35 hover:opacity-100"
                }`}
              >
                <span className="hidden sm:inline">{slide.nav[lang]}</span>
                <span
                  className={`size-2 rounded-full transition-transform duration-400 ${EASE} ${
                    i === current ? "scale-125" : "scale-100"
                  }`}
                  style={{ backgroundColor: slide.ink }}
                />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-4 text-xs text-black/50 sm:bottom-6 sm:left-10">
        <small className="text-xs">© 2026 Angéline Poitout</small>
        <span
          aria-hidden="true"
          className={`hidden items-center gap-2 transition-opacity duration-500 sm:flex ${
            current === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="h-px w-6 bg-current" />
          {t.hint} ↓
        </span>
      </div>

      <Stalker
        visible={hovered === active.id}
        color={active.id === "skillxtube" ? active.marqueeColor : active.ink}
        label={active.cta?.[lang] ?? ui[lang].view}
      />

      <p className="sr-only" role="status" aria-live="polite">
        {active.nav[lang]}
      </p>
    </main>
  );
}
