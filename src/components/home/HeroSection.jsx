
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Heart,
  Award,
} from "lucide-react";

import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFFCF8]">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-[#F4E5E8]/60 blur-3xl" />

      <div className="container relative mx-auto px-5 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">

          {/* Left Content */}
          <div className="relative z-10">
            {/* Availability badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#EAD7DE] bg-[#F8EDF0] px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#702C45]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#702C45] sm:text-xs">
                Your Beauty, Our Artistry
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl font-serif text-4xl font-medium leading-[1.15] tracking-tight text-[#292326] sm:text-5xl lg:text-6xl xl:text-[64px]">
              Beauty for Your{" "}
              <span className="italic text-[#702C45]">
                Special Moments
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-[#6F6268] sm:text-lg">
              Makeup, Mehndi &amp; Nail Art for every occasion.
              Discover your perfect look with personalised beauty
              services crafted to celebrate your unique elegance.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="/services">
                Explore Services
                <ArrowRight size={17} />
              </Button>

              <Button href="/contact" variant="secondary">
                <MessageCircle size={18} />
                Book on WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 divide-x divide-[#E8DCE0] rounded-2xl bg-[#F8F3F0] px-3 py-5 sm:px-6 sm:py-6">
              <div className="px-2 sm:px-4">
                <p className="font-serif text-xl font-semibold text-[#702C45] sm:text-2xl">
                  100%
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase leading-4 tracking-wider text-[#857277] sm:text-[10px]">
                  Personalised Looks
                </p>
              </div>

              <div className="px-2 sm:px-4">
                <p className="font-serif text-xl font-semibold text-[#702C45] sm:text-2xl">
                  Premium
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase leading-4 tracking-wider text-[#857277] sm:text-[10px]">
                  Beauty Products
                </p>
              </div>

              <div className="px-2 sm:px-4">
                <p className="font-serif text-xl font-semibold text-[#702C45] sm:text-2xl">
                  Every
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase leading-4 tracking-wider text-[#857277] sm:text-[10px]">
                  Special Occasion
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-[480px] lg:ml-auto">
            {/* Decorative background frame */}
            <div className="absolute -inset-3 rotate-2 rounded-[30px] bg-[#F0DFE4]" />

            {/* Main image */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[26px] bg-[#F4E5E8] shadow-2xl">
              <Image
                src="/hero.jpg"
                alt="Beauty Studio bridal makeup artistry"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#54162F]/45 via-transparent to-transparent" />
            </div>

            {/* Top floating badge */}
            <div className="absolute -left-3 top-6 flex max-w-[215px] items-center gap-3 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl backdrop-blur sm:-left-8 sm:p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F4E5E8] text-[#702C45]">
                <Award size={22} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#54162F]">
                  Expert Artistry
                </p>
                <p className="mt-1 text-[10px] leading-4 text-[#857277]">
                  Beauty tailored to you
                </p>
              </div>
            </div>

            {/* Bottom floating badge */}
            <div className="absolute -bottom-5 right-3 flex items-center gap-3 rounded-2xl bg-[#54162F] px-4 py-4 text-white shadow-xl sm:-right-6 sm:px-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Heart size={21} className="text-[#FFD9E2]" />
              </div>

              <div>
                <p className="font-serif text-xl font-semibold">
                  Made for You
                </p>
                <p className="mt-1 text-[10px] tracking-wide text-[#FFD9E2]">
                  Every detail matters
                </p>
              </div>
            </div>

            {/* Decorative sparkle */}
            <Sparkles
              size={34}
              className="absolute -right-3 -top-7 text-[#B68A70] sm:-right-7"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
