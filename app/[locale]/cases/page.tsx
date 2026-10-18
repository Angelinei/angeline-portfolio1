import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TranslationNote } from "@/components/translation-note";
import { cases, caseTodos } from "@/lib/cases";
import { requireLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/cases">) {
  const locale = await requireLocale(params);
  return pageMetadata({
    locale,
    path: "/cases",
    title: "Cases",
    description:
      "A short index of results Angéline Poitout has already published: revenue, admission, partnerships, and the builds that still need a number.",
  });
}

export default async function CasesPage({
  params,
}: PageProps<"/[locale]/cases">) {
  const locale = await requireLocale(params);

  return (
    <main className="min-h-screen bg-[#F8F7F2] text-[#20201E]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <SiteHeader />
        {locale === "fr" ? <TranslationNote /> : null}

        <section className="grid gap-10 pb-16 pt-24 sm:pt-32 lg:grid-cols-[1.1fr_0.9fr]">
          <h1 className="max-w-3xl text-[clamp(3.2rem,8vw,7rem)] font-light leading-[0.9] tracking-[-0.06em]">
            Cases
          </h1>
          <p className="max-w-md self-end text-sm leading-7 text-black/55">
            Figures only where she has already published them. Everything else
            stays a TODO.
          </p>
        </section>

        <section className="border-t border-black/15">
          {cases.map((item, index) => {
            const number = String(index + 1).padStart(2, "0");
            const body = (
              <>
                <p className="text-[10px] tracking-[0.22em] text-black/35">
                  {number}
                </p>
                <h2 className="mt-10 text-[clamp(3.4rem,8vw,6.75rem)] font-light leading-none tracking-[-0.065em]">
                  {item.figure}
                </h2>
                <div className="mt-10 max-w-md">
                  <p className="text-sm tracking-wide text-black/80">
                    {item.caption}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-black/55">
                    {item.detail}
                  </p>
                  <p className="mt-8 text-[10px] tracking-[0.16em] text-black/35">
                    {item.source}
                    {item.href ? " ↗" : ""}
                  </p>
                </div>
              </>
            );
            const className =
              "block border-b border-black/10 py-16 sm:py-24 lg:px-10";
            return item.href ? (
              <Link
                key={item.figure}
                href={`/${locale}${item.href}`}
                className={`${className} transition-colors hover:bg-white/40`}
              >
                {body}
              </Link>
            ) : (
              <article key={item.figure} className={className}>
                {body}
              </article>
            );
          })}
        </section>

        <section className="py-20 sm:py-28">
          <p className="text-[10px] tracking-[0.2em] text-[#7660D8]">TODO</p>
          <h2 className="mt-4 max-w-xl text-3xl font-light tracking-[-0.04em] sm:text-4xl">
            No figure yet
          </h2>
          <div className="mt-12 grid gap-px border-t border-black/10 bg-black/10 sm:grid-cols-2">
            {caseTodos.map((item) => (
              <article key={item.title} className="bg-[#F8F7F2] px-1 py-8 sm:px-6">
                <p className="text-[10px] tracking-[0.16em] text-[#7660D8]">
                  TODO
                </p>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-black/55">
                  {item.note}
                </p>
              </article>
            ))}
          </div>
        </section>

        <SiteFooter locale={locale} />
      </div>
    </main>
  );
}
