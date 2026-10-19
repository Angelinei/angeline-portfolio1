"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import type { Lang, Localized } from "../_data/projects";
import { CONTACT_EMAIL } from "./case-parts";

/** The three portfolio Thumbys stay hidden on the site for one year. */
const ENDS_AT = Date.parse("2027-10-19T23:59:59Z");
const ENDS_LABEL: Localized = { EN: "October 19, 2027", FR: "19 octobre 2027" };

const subscribe = () => () => {};
const isOpen = () => Date.now() <= ENDS_AT;

export type ThumbyPrize = "xp" | "credits" | "ad";

const PRIZES: Record<ThumbyPrize, { code: string; label: Localized }> = {
  xp: { code: "THUMBY-2500XP", label: { EN: "2,500 SkillXP", FR: "2 500 SkillXP" } },
  credits: { code: "THUMBY-150CREDITS", label: { EN: "150 credits", FR: "150 crédits" } },
  ad: { code: "THUMBY-ADSPOT199", label: { EN: "1 ad spot ($199)", FR: "1 spot publicitaire (199 $)" } },
};

const copy = {
  EN: {
    trigger: "A hidden Thumby",
    title: "You found Thumby!",
    prize: "He was hiding",
    body: "A SkillxTube easter egg hidden on my portfolio. Email me this code from the address of your SkillxTube account and I'll add it.",
    until: "Valid until",
    claim: "Claim by email",
    copy: "Copy",
    copied: "Copied",
    close: "Close",
  },
  FR: {
    trigger: "Un Thumby caché",
    title: "Tu as trouvé Thumby !",
    prize: "Il cachait",
    body: "Un easter egg SkillxTube caché dans mon portfolio. Envoie-moi ce code depuis l'adresse de ton compte SkillxTube et je l'ajoute.",
    until: "Valable jusqu'au",
    claim: "Réclamer par mail",
    copy: "Copier",
    copied: "Copié",
    close: "Fermer",
  },
};

/**
 * A small Thumby peeking from a block: a click opens what he hides. The parent places it
 * (absolute) and must be `relative`. Gone after ENDS_AT.
 */
export function ThumbyEgg({ prize, lang, className = "" }: { prize: ThumbyPrize; lang: Lang; className?: string }) {
  // Read on the client only, so the static page never bakes in the date.
  const active = useSyncExternalStore(subscribe, isOpen, () => false);
  const [copied, setCopied] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const t = copy[lang];
  const { code, label } = PRIZES[prize];

  if (!active) return null;

  const subject = encodeURIComponent(`Thumby ${code}`);
  const body = encodeURIComponent(`${t.title}\n\n${code} · ${label[lang]}\n\nSkillxTube account email: `);

  return (
    <>
      <button
        type="button"
        aria-label={t.trigger}
        onClick={() => dialog.current?.showModal()}
        className={`group absolute z-30 block w-[46px] cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:rotate-6 sm:w-[54px] ${className}`}
      >
        <Image
          src="/thumby/thumby.png"
          alt=""
          width={160}
          height={174}
          className="h-auto w-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]"
        />
      </button>

      <dialog
        ref={dialog}
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current?.close();
        }}
        className="m-auto w-[min(420px,calc(100vw-2rem))] rounded-[22px] bg-[#F8F7F2] p-0 text-[#20201E] backdrop:bg-black/40"
      >
        <div className="flex flex-col items-center px-7 pt-8 pb-7 text-center">
          <Image src="/thumby/thumby.png" alt="" width={160} height={174} className="h-auto w-20" />
          <p className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{t.title}</p>
          <p className="mt-3 text-xs tracking-[0.16em] text-black/50 uppercase">{t.prize}</p>
          <p className="mt-1 text-xl font-semibold text-[#7660D8]">{label[lang]}</p>
          <p className="mt-4 text-sm leading-6 text-black/70">{t.body}</p>
          <div className="mt-5 flex items-center gap-2 rounded-full border border-black/15 py-1.5 pr-1.5 pl-4">
            <code className="font-[family-name:var(--font-geist-mono)] text-sm">{code}</code>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard?.writeText(code).then(() => setCopied(true), () => {});
              }}
              className="rounded-full bg-black/5 px-3 py-1.5 text-xs transition-colors hover:bg-black/10"
            >
              {copied ? t.copied : t.copy}
            </button>
          </div>
          <p className="mt-3 text-xs text-black/45">
            {t.until} {ENDS_LABEL[lang]}
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}
            className="mt-6 rounded-full bg-[#7660D8] px-5 py-3 text-sm leading-none text-white transition-opacity hover:opacity-85"
          >
            {t.claim}
          </a>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="mt-3 text-xs text-black/50 underline underline-offset-4 hover:text-black"
          >
            {t.close}
          </button>
        </div>
      </dialog>
    </>
  );
}
