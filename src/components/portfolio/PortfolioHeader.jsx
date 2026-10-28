
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

export default function PortfolioHeader() {
  return (
    <section className="relative overflow-hidden pb-8 pt-10 sm:pt-14">
      <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full" />

      <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#866873]">
            <Link href="/" className="transition hover:text-[#54162F]">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="font-medium text-[#54162F]">Portfolio</span>
          </nav>

          <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A67C52]">
            <Sparkles size={15} />
            Our Work, Our Artistry
          </p>

          <h1 className="font-serif text-4xl font-medium tracking-tight text-[#54162F] sm:text-5xl">
            Our Portfolio
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Explore our makeup, mehndi and nail art creations through
            photographs and Instagram Reels.
          </p>
        </div>

        <a
          href={
            process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
            "https://www.instagram.com/"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E9D9DC] bg-white px-5 py-3 text-sm font-semibold text-[#54162F] transition hover:bg-[#F1E1E5]"
        >
          Explore Instagram
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
