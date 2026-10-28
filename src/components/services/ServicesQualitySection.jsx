import {
  BadgeCheck,
  Sparkles,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

import Button from "@/components/ui/Button";

const qualityFeatures = [
  {
    id: 1,
    icon: BadgeCheck,
    title: "Personalised Consultation",
    description:
      "Discuss your preferred look, outfit and occasion with us so we can help you choose the right beauty service.",
    label: "Made for you",
  },
  {
    id: 2,
    icon: Sparkles,
    title: "Attention to Every Detail",
    description:
      "From makeup finishing touches to intricate mehndi patterns and nail designs, we focus on your individual style.",
    label: "Crafted with care",
  },
  {
    id: 3,
    icon: HeartHandshake,
    title: "Your Special Occasion",
    description:
      "Planning a wedding, engagement or celebration? Get in touch to discuss your requirements and appointment availability.",
    label: "Let's plan together",
  },
];

export default function ServicesQualitySection() {
  return (
    <section className="bg-[#FCF9F5] pb-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#702C45]/10 bg-white px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#702C45]">
            <Sparkles size={13} />
            The Beauty Studio Promise
          </span>

          <h2 className="mt-5 font-serif text-3xl font-medium tracking-tight text-[#54162F] sm:text-4xl lg:text-5xl">
            Beauty is in the details.
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#75656B] sm:text-base">
            Every appointment starts with understanding your vision.
            We focus on thoughtful service, personalised choices and
            the little details that make your look uniquely yours.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {qualityFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.id}
                className="group relative overflow-hidden rounded-3xl border border-[#702C45]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#702C45]/20 hover:shadow-xl hover:shadow-[#54162F]/5 sm:p-8"
              >
                {/* Decorative background */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F4E7EB]/60 blur-2xl transition-transform duration-500 group-hover:scale-125"
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E7EB] text-[#702C45] transition-all duration-300 group-hover:bg-[#54162F] group-hover:text-white">
                      <Icon size={25} strokeWidth={1.6} />
                    </div>

                    <span className="font-serif text-3xl text-[#E7D5DC]">
                      0{feature.id}
                    </span>
                  </div>

                  <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.15em] text-[#A56A80]">
                    {feature.label}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#54162F]">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#75656B]">
                    {feature.description}
                  </p>

                  <div className="mt-7 h-px w-full bg-[#702C45]/10" />

                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#702C45]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A56A80]" />
                    Thoughtfully personalised
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="relative mt-8 overflow-hidden rounded-3xl bg-[#54162F] px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-12 h-48 w-48 rounded-full border border-white/10"
          />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E8B9CA]">
                Let's create your look
              </p>

              <h3 className="mt-3 font-serif text-2xl font-medium !text-white sm:text-3xl lg:text-4xl">
                Have something special in mind?
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
                Tell us about your occasion and the look you have in
                mind. We'll help you explore the right service for you.
              </p>
            </div>

            <div className="shrink-0">
              <Button
                href="/contact"
                variant="secondary"
                className="w-full justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#54162F] hover:bg-[#F4E7EB] sm:w-auto"
              >
                Talk to Our Team
                <ArrowUpRight size={17} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}