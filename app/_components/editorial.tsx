"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { EASE, Marquee } from "./case-parts";

/** Fade-up on first paint (CSS @starting-style, no JS needed). */
export function enter(delay: string) {
  return `transition-[opacity,translate] duration-700 motion-reduce:transition-none starting:translate-y-4 starting:opacity-0 ${delay} ${EASE}`;
}

export function useInView<T extends Element>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView] as const;
}

export function Group({ title, children }: { title: string; children: ReactNode }) {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <section ref={ref} className="mb-16 grid gap-4 sm:mb-20 md:grid-cols-[180px_1fr] md:gap-10">
      <h2 className="h-fit overflow-clip text-xl leading-[1.5] font-medium tracking-[-0.03em] sm:text-2xl">
        <span
          className={`block transition-transform duration-700 motion-reduce:transition-none ${EASE} ${
            inView ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {title}
        </span>
      </h2>
      <div
        className={`min-w-0 transition-[opacity,translate] delay-150 duration-700 motion-reduce:transition-none ${EASE} ${
          inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

export function ExternalLink({
  href,
  newTab,
  className,
  style,
  children,
}: {
  href: string;
  newTab: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className} style={style}>
      {children}
      <span className="sr-only"> {newTab}</span>
    </a>
  );
}

const INLINE = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;

/** Renders **bold**, *italic* and [label](https://url) inside a string. */
export function Inline({ text, newTab }: { text: string; newTab: string }): ReactNode {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(INLINE)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const key = m.index;
    if (m[1]) {
      out.push(
        <ExternalLink
          key={key}
          href={m[2]}
          newTab={newTab}
          className="underline decoration-black/25 underline-offset-4 transition-colors hover:decoration-current"
        >
          <Inline text={m[1]} newTab={newTab} />
        </ExternalLink>,
      );
    } else if (m[3]) {
      out.push(
        <strong key={key} className="font-semibold text-[#20201E]">
          {m[3]}
        </strong>,
      );
    } else {
      out.push(<em key={key}>{m[4]}</em>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

/**
 * Opening block of every inner page, in the home stage's language: centred
 * eyebrow and title, then the category's heavy marquee band with the visual
 * laid over it.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  subtitleColor,
  marquee,
  marqueeColor,
  visual,
  visualSize = "cover",
  children,
}: {
  eyebrow: ReactNode;
  title: string;
  subtitle?: ReactNode;
  subtitleColor?: string;
  marquee: string;
  marqueeColor: string;
  /** Laid over the band: a small piece ("card") or a wide cover that overlaps its lower half. */
  visual?: ReactNode;
  visualSize?: "card" | "cover";
  /** Lead text, links… under the band. */
  children?: ReactNode;
}) {
  const band = (
    <div className="absolute inset-x-0 top-0 h-[clamp(12.5rem,28vw,22rem)] overflow-clip">
      <Marquee text={marquee} color={marqueeColor} large />
    </div>
  );

  return (
    <header className="relative overflow-clip pt-36 sm:pt-[180px]">
      <div className="relative z-10 mx-auto flex w-full max-w-[1120px] flex-col items-center px-5 text-center sm:px-10">
        <p className={`mb-5 text-[10px] tracking-[0.18em] text-black/50 ${enter("delay-100")}`}>{eyebrow}</p>
        <h1 className="overflow-clip pb-[0.08em] text-[clamp(3.25rem,8vw,6.5rem)] leading-none font-semibold tracking-[-0.045em] text-[#3A3832]">
          <span
            className={`block transition-transform delay-150 duration-[1000ms] motion-reduce:transition-none starting:translate-y-[110%] ${EASE}`}
          >
            {title}
          </span>
        </h1>
        {subtitle && (
          <p className={`mt-4 font-serif text-xl italic sm:text-2xl ${enter("delay-300")}`} style={{ color: subtitleColor }}>
            {subtitle}
          </p>
        )}
      </div>

      {visualSize === "card" || !visual ? (
        <div className={`relative mt-8 sm:mt-10 ${enter("delay-300")}`}>
          {band}
          <div className="relative z-10 flex min-h-[clamp(12.5rem,28vw,22rem)] items-center justify-center px-5">
            {visual}
          </div>
        </div>
      ) : (
        <div className={`relative mt-8 sm:mt-10 ${enter("delay-300")}`}>
          {band}
          <div className="relative z-10 mx-auto w-full max-w-[1120px] px-5 pt-[clamp(6.5rem,14vw,11.5rem)] sm:px-10">
            {visual}
          </div>
        </div>
      )}

      {children && (
        <div
          className={`relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-center px-5 pt-10 text-center sm:px-10 sm:pt-12 ${enter("delay-450")}`}
        >
          {children}
        </div>
      )}
    </header>
  );
}
