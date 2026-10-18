import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] text-[#20201E]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <SiteHeader />
        <section className="py-28">
          <p className="text-[10px] tracking-[0.18em] text-[#7660D8]">404</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-medium tracking-[-0.06em] sm:text-7xl">
            This page is not here.
          </h1>
          <div className="mt-10 flex gap-6 text-xs tracking-[0.12em]">
            <Link href="/en" className="border-b border-[#7660D8] pb-1">
              EN
            </Link>
            <Link href="/fr" className="border-b border-black/20 pb-1">
              FR
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
