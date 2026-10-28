
import Link from "next/link";
import { Home, ChevronRight, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ServicesPageHeader() {
  return (
    <section className="relative overflow-hidden bg-[#FCF9F5]">
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F1E1E5]/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex items-center gap-2 text-xs text-[#857277] sm:mb-7"
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 transition-colors hover:text-[#54162F]"
          >
            <Home size={14} />
            Home
          </Link>

          <ChevronRight size={14} />

          <span className="font-medium text-[#54162F]">
            Services
          </span>
        </nav>

        {/* Heading + CTA */}
        <div className="flex items-start justify-between gap-3 sm:items-end sm:gap-6">
          <div className="min-w-0 flex-1">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A67C52] sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
              Thoughtfully Curated For You
            </p>

            <h1 className="font-serif text-3xl font-medium leading-tight tracking-tight text-[#54162F] sm:text-5xl lg:text-6xl">
              Our Services
              <span className="mt-1 block font-serif italic text-[#A56A80] sm:mt-2">
                Your Beauty, Your Way.
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-xs leading-6 text-[#75656B] sm:mt-4 sm:text-base sm:leading-7">
              From bridal makeup to intricate mehndi and elegant
              nail artistry, discover beauty services designed
              especially for you.
            </p>
          </div>

          {/* Compact CTA, stays on the right */}
          <Button
            href="/booking"
            variant="primary"
            className="mt-1 inline-flex w-fit shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2.5 text-[11px] sm:mt-0 sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
          >
            <span>Book Consultation</span>
            <ArrowUpRight size={15} className="shrink-0 sm:h-4 sm:w-4" />
          </Button>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px bg-gradient-to-r from-[#DCC7CC] via-[#EEE3E2] to-transparent sm:mt-8" />
      </div>
    </section>
  );
}
