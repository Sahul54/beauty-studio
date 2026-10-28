
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

const portfolioItems = [
  {
    id: 1,
    title: "The Luminous Bridal Glow",
    category: "Bridal Makeup",
    image: "/hero.png",
    alt: "Bridal makeup artistry",
  },
  {
    id: 2,
    title: "Intricate Heritage Henna",
    category: "Mehndi Art",
    image: "/mehndi.png",
    alt: "Intricate henna design",
  },
  {
    id: 3,
    title: "Elegant Nail Art",
    category: "Nail Atelier",
    image: "/nails.png",
    alt: "Elegant nail art",
  },
  {
    id: 4,
    title: "Reception Glamour",
    category: "Party Makeup",
    image: "/makeup.png",
    alt: "Glamorous makeup look",
  },
  {
    id: 5,
    title: "Artisanal Henna Details",
    category: "Modern Mehndi",
    image: "/mehndi.png",
    alt: "Artisanal mehndi design",
  },
  {
    id: 6,
    title: "Timeless Beauty",
    category: "Beauty Styling",
    image: "/hero.png",
    alt: "Timeless bridal beauty look",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="bg-[#FFFCF8] py-20 sm:py-24 lg:py-28"
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-7 bg-[#702C45]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#702C45] sm:text-xs">
              Couture Gallery
            </span>
            <span className="h-px w-7 bg-[#702C45]" />
          </div>

          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#292326] sm:text-4xl lg:text-5xl">
            Our Recent Work
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#6F6268] sm:text-base">
            A curated showcase of beautiful makeup, intricate mehndi
            and elegant nail artistry, created for your special moments.
          </p>
        </div>

        {/* Portfolio Gallery */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              href="/portfolio"
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-[#F0E5E5] shadow-sm transition-all duration-300 hover:shadow-xl sm:rounded-3xl"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Default subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#54162F]/45 via-transparent to-transparent transition-opacity duration-300 group-hover:from-[#54162F]/90 group-hover:via-[#54162F]/10" />

              {/* Hover Overlay */}
              <div className="absolute inset-x-0 bottom-0 flex translate-y-3 flex-col p-5 opacity-100 transition-all duration-300 sm:p-6 sm:group-hover:translate-y-0">
                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#FFD9E2]">
                  {item.category}
                </span>

                <div className="mt-2 flex items-end justify-between gap-3">
                  <h3 className="font-serif text-xl font-medium leading-snug text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-[#54162F]">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-12 flex justify-center sm:mt-14">
          <Button href="/portfolio" variant="secondary">
            View All Work
            <ArrowUpRight size={17} />
          </Button>
        </div>
      </div>
    </section>
  );
}
