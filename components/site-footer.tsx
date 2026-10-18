import type { Locale } from "@/lib/i18n";

const footer = {
  en: "INDEPENDENT STUDIO · FRANCE & BEYOND",
  fr: "STUDIO INDÉPENDANT · FRANCE & AILLEURS",
} as const;

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="flex flex-col gap-4 border-t border-black/10 py-6 text-[10px] tracking-[0.1em] text-black/45 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 ANGÉLINE POITOUT</p>
      <p>{footer[locale]}</p>
    </footer>
  );
}
