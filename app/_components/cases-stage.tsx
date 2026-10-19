"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "../_data/projects";
import {
  CaseItem,
  EASE,
  Marquee,
  SiteHeader,
  Stalker,
  projectToSlide,
  thePathSlide as path,
  approachSlide as approach,
  writingSlide as writing,
  ui,
  type Slide,
} from "./case-parts";
import { TestimonialsSlide } from "./testimonials-slide";
import { ThumbyEgg } from "./thumby-egg";
import { useLang } from "./use-lang";

const contact: Slide = {
  id: "contact",
  nav: { EN: "Contact", FR: "Contact" },
  eyebrow: { EN: "OPEN TO COLLABORATION", FR: "OUVERTE AUX COLLABORATIONS" },
  title: { EN: "Say “Hey!”", FR: "Dites « Hey ! »" },
  text: {
    EN: "Send me a message on LinkedIn or by email, okay?",
    FR: "Envoyez-moi un message sur LinkedIn ou par mail, d'accord ?",
  },
  marquee: "Have a project in mind? Let's make it real.",
  tags: [],
  visual: "contact",
  tint: "#ECE8FB",
  marqueeColor: "#D9D1FA",
  ink: "#7660D8",
};

const testimonials: Slide = {
  id: "testimonials",
  nav: { EN: "Kind words", FR: "Ils en parlent" },
  eyebrow: { EN: "TESTIMONIALS", FR: "TÉMOIGNAGES" },
  title: { EN: "Kind words", FR: "Ils en parlent" },
  text: {
    EN: "Managers, partners, learners and customers, in their own words.",
    FR: "Managers, partenaires, apprenants et clients, avec leurs mots.",
  },
  marquee: "In their own words. Learning, shipped together.",
  tags: [],
  visual: "testimonials",
  tint: "#ECE8FB",
  marqueeColor: "#E6E0FB",
  ink: "#7660D8",
};

const slides: Slide[] = [approach, ...projects.map(projectToSlide), path, writing, testimonials, contact];

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
  const touchStart = useRef<{ x: number; y: number; row: boolean } | null>(null);
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
    // A horizontal gesture on a row that scrolls by hand (testimonials) stays in that row.
    const ownsScrollX = (target: EventTarget | null) =>
      target instanceof Element && target.closest("[data-scroll-x]") !== null;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && ownsScrollX(e.target)) return;
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 12) return;
      step(delta > 0 ? 1 : -1);
    };
    const onKey = (e: KeyboardEvent) => {
      // An open dialog (a full testimonial) keeps the keyboard.
      if (document.querySelector("dialog[open]")) return;
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
      touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, row: ownsScrollX(e.target) };
    };
    const onTouchEnd = (e: TouchEvent) => {
      const start = touchStart.current;
      touchStart.current = null;
      if (!start) return;
      const dx = start.x - e.changedTouches[0].clientX;
      const dy = start.y - e.changedTouches[0].clientY;
      if (start.row && Math.abs(dx) > Math.abs(dy)) return;
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
          large
          state={i === current ? "active" : i < current ? "before" : "after"}
        />
      ))}

      <SiteHeader lang={lang} onLangChange={setLang} />

      {/* Cases */}
      {slides.map((slide, i) =>
        slide.visual === "testimonials" ? (
          <TestimonialsSlide
            key={slide.id}
            slide={slide}
            lang={lang}
            state={i === current ? "active" : i < current ? "before" : "after"}
            label={`${i + 1} / ${slides.length} — ${slide.nav[lang]}`}
          />
        ) : (
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
        ),
      )}

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

      <ThumbyEgg spot="home" lang={lang} className="right-[22%] -bottom-3 sm:right-[30%]" />

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
