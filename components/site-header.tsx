"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";

const labels = {
  en: {
    work: "Work",
    cases: "Cases",
    blog: "Blog",
    contact: "Contact",
  },
  fr: {
    work: "Work",
    cases: "Cases",
    blog: "Blog",
    contact: "Contact",
  },
} as const;

export function SiteHeader({ tone = "light" }: { tone?: "light" | "dark" }) {
  const pathname = usePathname() || "/en";
  const segment = pathname.split("/")[1] ?? "";
  const locale: Locale = isLocale(segment) ? segment : "en";
  const rest = pathname.replace(/^\/(en|fr)/, "") || "";
  const nextLocale: Locale = locale === "en" ? "fr" : "en";
  const switchHref = `/${nextLocale}${rest}`;
  const t = labels[locale];
  const dark = tone === "dark";

  const linkClass = dark
    ? "text-[10px] tracking-[0.14em] text-white/55 transition hover:text-white"
    : "text-[10px] tracking-[0.14em] text-black/50 transition hover:text-black";

  return (
    <header
      className={`flex items-center justify-between gap-6 border-b py-6 ${
        dark ? "border-white/10" : "border-black/10"
      }`}
    >
      <Link
        href={`/${locale}`}
        className="text-sm font-semibold tracking-[-0.04em]"
      >
        ANGÉLINE POITOUT
        <span className={dark ? "text-violet-300" : "text-[#7660D8]"}>.</span>
      </Link>

      <nav className="flex items-center gap-4 sm:gap-6">
        <Link href={`/${locale}#work`} className={`${linkClass} hidden sm:inline`}>
          {t.work}
        </Link>
        <Link href={`/${locale}/cases`} className={linkClass}>
          {t.cases}
        </Link>
        <Link href={`/${locale}/blog`} className={linkClass}>
          {t.blog}
        </Link>
        <Link
          href={`/${locale}#contact`}
          className={`${linkClass} hidden sm:inline`}
        >
          {t.contact}
        </Link>
        <Link
          href={switchHref}
          hrefLang={nextLocale}
          className={`rounded-full border px-4 py-2 text-xs transition ${
            dark
              ? "border-white/20 hover:border-violet-300 hover:text-violet-200"
              : "border-black/15 hover:bg-[#20201E] hover:text-white"
          }`}
          aria-label={locale === "fr" ? "English version" : "Version française"}
        >
          {locale === "fr" ? "FR ↔ EN" : "EN ↔ FR"}
        </Link>
      </nav>
    </header>
  );
}
