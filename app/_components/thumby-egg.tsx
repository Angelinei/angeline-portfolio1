"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import type { Lang } from "../_data/projects";

/**
 * Three Thumbys hide on the site until October 19, 2027, each on a spot drawn at random per visit
 * (tab). A click opens its claim page on SkillxTube, which handles sign-up, one prize per account,
 * and sends a taken prize to the demo.
 */
const ENDS_AT = Date.parse("2027-10-19T23:59:59Z");
const CLAIM_URL = "https://skillxtube.com/thumby/";
const CODES = ["THUMBY-2500XP", "THUMBY-150CREDITS", "THUMBY-ADSPOT199"];

export const THUMBY_SPOTS = [
  "home",
  "skillxtube",
  "portfolio",
  "archives",
  "cimetiere",
  "ai-experiments",
  "the-path",
  "about",
  "writing",
] as const;

export type ThumbySpot = (typeof THUMBY_SPOTS)[number];

const SEED_KEY = "thumby-seed";

/** A small seeded generator, so a visit keeps the same three spots on every page. */
function seeded(seed: number) {
  let value = seed >>> 0 || 1;
  return () => {
    value = (Math.imul(value, 1664525) + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function visitSeed(): number {
  try {
    let seed = Number(sessionStorage.getItem(SEED_KEY)) || 0;
    if (!seed) {
      seed = Math.floor(Math.random() * 2 ** 31) + 1;
      sessionStorage.setItem(SEED_KEY, String(seed));
    }
    return seed;
  } catch {
    return 1;
  }
}

/** Spot → code for this visit: three spots drawn from THUMBY_SPOTS, one code each. */
let assignment: Map<string, string> | null = null;
function spotCode(spot: ThumbySpot): string | null {
  if (Date.now() > ENDS_AT) return null;
  if (!assignment) {
    const random = seeded(visitSeed());
    const spots = [...THUMBY_SPOTS];
    for (let i = spots.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));
      [spots[i], spots[j]] = [spots[j], spots[i]];
    }
    assignment = new Map(CODES.map((code, i) => [spots[i], code]));
  }
  return assignment.get(spot) ?? null;
}

const subscribe = () => () => {};

/**
 * A small Thumby peeking from a block, shown only when this visit hid one on `spot`. The parent
 * places it (absolute) and must be `relative`.
 */
export function ThumbyEgg({ spot, lang, className = "" }: { spot: ThumbySpot; lang: Lang; className?: string }) {
  // Read on the client only: the static page never bakes in a spot or the date.
  const code = useSyncExternalStore(subscribe, () => spotCode(spot), () => null);
  if (!code) return null;

  return (
    <a
      href={`${CLAIM_URL}${code}`}
      target="_blank"
      rel="noopener"
      aria-label={lang === "FR" ? "Un Thumby caché (nouvel onglet)" : "A hidden Thumby (opens in a new tab)"}
      className={`group absolute z-30 block w-[46px] cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:rotate-6 sm:w-[54px] ${className}`}
    >
      <Image
        src="/media/img/thumby.db9c2efa3c.webp"
        alt=""
        width={120}
        height={130}
        sizes="54px"
        className="h-auto w-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]"
      />
    </a>
  );
}
