"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { EASE } from "./case-parts";

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
    <section ref={ref} className="mb-20 sm:mb-28">
      <h2 className="mb-6 h-fit overflow-clip pb-[0.08em] text-[clamp(2rem,4vw,3rem)] leading-none font-semibold tracking-[-0.045em] text-[#3A3832]">
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
