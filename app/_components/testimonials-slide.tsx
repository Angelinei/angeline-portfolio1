"use client";

import { useRef, useState } from "react";
import type { Lang } from "../_data/projects";
import { testimonials, type Testimonial, type TestimonialSource } from "../_data/testimonials";
import { EASE, type Slide } from "./case-parts";

const copy = {
  EN: { more: "Read more", close: "Close" },
  FR: { more: "Lire plus", close: "Fermer" },
};

const SOURCES: Record<TestimonialSource, { EN: string; FR: string }> = {
  letter: { EN: "Recommendation letter", FR: "Lettre de recommandation" },
  linkedin: { EN: "LinkedIn", FR: "LinkedIn" },
  google: { EN: "Google", FR: "Google" },
  digitaforma: { EN: "Digitaforma", FR: "Digitaforma" },
  facebook: { EN: "Facebook", FR: "Facebook" },
  article: { EN: "Article", FR: "Article" },
  adobe: { EN: "Adobe", FR: "Adobe" },
};

/** Past this length (or with line breaks) a card is clamped and offers "Read more". */
const CLAMP_AT = 150;

const quoteOf = (item: Testimonial, lang: Lang) => (lang === "FR" ? item.quote_fr : item.quote_en);
const nameOf = (item: Testimonial, lang: Lang) => (lang === "EN" && item.name_en) || item.name;
const roleOf = (item: Testimonial, lang: Lang) => (lang === "FR" ? item.role_fr : item.role_en);

// Alternate the list over two rows so both carry long and short quotes.
const rowA = testimonials.filter((_, i) => i % 2 === 0);
const rowB = testimonials.filter((_, i) => i % 2 === 1);

function Card({
  item,
  lang,
  ink,
  onOpen,
}: {
  item: Testimonial;
  lang: Lang;
  ink: string;
  onOpen: (item: Testimonial) => void;
}) {
  const quote = quoteOf(item, lang);
  const long = quote.length > CLAMP_AT || quote.includes("\n");
  return (
    <li className="w-[290px] shrink-0 sm:w-[340px]">
      <figure className="flex h-full flex-col rounded-[22px] border border-black/10 bg-white p-5 text-left shadow-[0_20px_50px_-35px_rgba(32,32,30,0.45)]">
        <span aria-hidden="true" className="font-serif text-3xl leading-none" style={{ color: ink }}>
          “
        </span>
        <blockquote className="mt-1 line-clamp-4 text-[14px] leading-[1.6] whitespace-pre-line text-black/75 [@media(max-height:760px)]:line-clamp-3">
          {quote}
        </blockquote>
        {long && (
          <button
            type="button"
            onClick={() => onOpen(item)}
            className="mt-2 w-fit text-xs font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
            style={{ color: ink }}
          >
            {copy[lang].more}
            <span className="sr-only"> : {nameOf(item, lang)}</span>
          </button>
        )}
        <figcaption className="mt-auto flex items-end justify-between gap-3 pt-4">
          <span className="min-w-0">
            <span className="block text-sm font-medium tracking-[-0.01em] text-[#20201E]">{nameOf(item, lang)}</span>
            <span className="block text-xs leading-snug text-black/60">{roleOf(item, lang)}</span>
          </span>
          {item.source && (
            <span className="shrink-0 rounded-full border border-black/15 px-2.5 py-1 text-[10px] leading-none text-black/60">
              {SOURCES[item.source][lang]}
            </span>
          )}
        </figcaption>
      </figure>
    </li>
  );
}

/**
 * One endless row: the list twice in a track that slides by half its width (cases-marquee),
 * so the loop never jumps. Hover or keyboard focus pauses it. With reduced motion the copy goes
 * away and the row scrolls by hand.
 */
function Row({
  items,
  seconds,
  reverse = false,
  className = "",
  ...card
}: {
  items: Testimonial[];
  seconds: number;
  reverse?: boolean;
  className?: string;
  lang: Lang;
  ink: string;
  onOpen: (item: Testimonial) => void;
}) {
  const cards = items.map((item) => <Card key={item.id} item={item} {...card} />);
  return (
    <div
      data-scroll-x
      className={`group/row overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] motion-reduce:snap-x motion-reduce:overflow-x-auto ${className}`}
    >
      <div
        className="flex w-max animate-[cases-marquee_60s_linear_infinite] group-focus-within/row:[animation-play-state:paused] group-hover/row:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${seconds}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        <ul className="flex items-stretch gap-4 pr-4 motion-reduce:px-5">{cards}</ul>
        <ul aria-hidden="true" inert className="flex items-stretch gap-4 pr-4 motion-reduce:hidden">
          {cards}
        </ul>
      </div>
    </div>
  );
}

/** "Kind words": the slide before Contact on the home stage. */
export function TestimonialsSlide({
  slide,
  lang,
  state,
  label,
}: {
  slide: Slide;
  lang: Lang;
  state: "active" | "before" | "after";
  label: string;
}) {
  const [open, setOpen] = useState<Testimonial | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const isActive = state === "active";
  const reveal = (delay: string) =>
    `transition-[opacity,translate] motion-reduce:transition-none ${EASE} ${
      isActive
        ? `opacity-100 translate-y-0 duration-700 ${delay}`
        : `opacity-0 delay-0 duration-300 ${state === "before" ? "-translate-y-4" : "translate-y-4"}`
    }`;

  const onOpen = (item: Testimonial) => {
    setOpen(item);
    dialog.current?.showModal();
  };
  const rows = { lang, ink: slide.ink, onOpen };

  return (
    <section
      aria-roledescription="slide"
      aria-label={label}
      aria-hidden={!isActive}
      inert={!isActive}
      className={`absolute inset-0 z-10 flex flex-col justify-center pt-24 sm:pt-28 ${isActive ? "" : "pointer-events-none"}`}
    >
      <div className="mx-auto flex w-full max-w-[760px] flex-col items-center px-5 text-center">
        <span className={`mb-3 block text-[10px] tracking-[0.18em] text-black/50 ${reveal("delay-100")}`}>
          {slide.eyebrow[lang]}
        </span>
        <h2 className="overflow-clip pb-[0.08em] text-[clamp(2.6rem,11vw,4rem)] leading-[1.05] font-medium tracking-[-0.06em] [@media(max-height:680px)]:text-[2.75rem]">
          <span
            className={`block transition-transform motion-reduce:transition-none ${EASE} ${
              isActive
                ? "translate-y-0 delay-300 duration-[900ms]"
                : state === "before"
                  ? "-translate-y-[110%] duration-500"
                  : "translate-y-[110%] duration-500"
            }`}
          >
            {slide.title[lang]}
          </span>
        </h2>
        <p
          className={`mt-3 max-w-[460px] text-[15px] leading-[1.6] font-medium text-black/75 sm:text-base ${reveal("delay-250")}`}
        >
          {slide.text[lang]}
        </p>
      </div>

      <div className={`mt-6 sm:mt-8 ${reveal("delay-350")}`}>
        {/* Phones and short screens: one slower row with every testimonial (globals.css) */}
        <Row items={testimonials} seconds={170} className="testimonials-single sm:mr-44 lg:mr-52" {...rows} />
        {/* Wider and taller screens: two rows, opposite ways, slightly different speeds; the right edge stays clear for the case navigation */}
        <div className="testimonials-double flex-col gap-4 sm:pr-44 lg:pr-52">
          <Row items={rowA} seconds={75} {...rows} />
          <Row items={rowB} seconds={90} reverse {...rows} />
        </div>
      </div>

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current?.close();
        }}
        aria-label={open ? nameOf(open, lang) : undefined}
        className="m-auto max-h-[85svh] w-[min(560px,calc(100vw-2rem))] overflow-y-auto rounded-[22px] bg-[#F8F7F2] p-0 text-[#20201E] backdrop:bg-black/40"
      >
        {open && (
          <figure className="px-7 pt-7 pb-6">
            <span aria-hidden="true" className="font-serif text-4xl leading-none" style={{ color: slide.ink }}>
              “
            </span>
            <blockquote className="mt-1 text-base leading-[1.7] whitespace-pre-line text-black/80">
              {quoteOf(open, lang)}
            </blockquote>
            <figcaption className="mt-6 flex items-end justify-between gap-4 border-t border-black/10 pt-4">
              <span>
                <span className="block font-medium">{nameOf(open, lang)}</span>
                <span className="block text-sm text-black/60">{roleOf(open, lang)}</span>
              </span>
              {open.source && (
                <span className="shrink-0 rounded-full border border-black/15 px-2.5 py-1 text-[11px] leading-none text-black/60">
                  {SOURCES[open.source][lang]}
                </span>
              )}
            </figcaption>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              className="mt-6 rounded-full px-5 py-2.5 text-sm leading-none text-white transition-opacity hover:opacity-85"
              style={{ backgroundColor: slide.ink }}
            >
              {copy[lang].close}
            </button>
          </figure>
        )}
      </dialog>
    </section>
  );
}
