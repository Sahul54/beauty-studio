
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import Button from "@/components/ui/Button";

const services = [
  {
    id: 1,
    category: "FACE ARTISTRY",
    title: "Makeup - Bridal & Party Looks",
    description:
      "Beautiful makeup looks tailored to your features, outfit and special occasion.",
    duration: "90–120 mins",
    tag: "Couture",
    image: "/makeup.png",
    alt: "Elegant bridal makeup look",
  },
  {
    id: 2,
    category: "HENNA TRADITION",
    title: "Mehndi - Beautiful Henna Designs",
    description:
      "Intricate floral patterns and beautiful henna artistry for weddings and celebrations.",
    duration: "60–180 mins",
    tag: "Artisanal",
    image: "/mehndi.png",
    alt: "Intricate bridal mehndi design",
  },
  {
    id: 3,
    category: "GEL & EXTENSIONS",
    title: "Nail Art - Elegant Nail Styles",
    description:
      "Discover elegant nail designs, modern finishes and styles for every occasion.",
    duration: "45–90 mins",
    tag: "Sculpted",
    image: "/nails.png",
    alt: "Elegant nail art design",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#F8F3F0] py-20 sm:py-24 lg:py-28"
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-8 bg-[#702C45]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#702C45]">
                Our Expertise
              </span>
            </div>

            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#292326] sm:text-4xl lg:text-5xl">
              Our Services
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#6F6268] sm:text-base">
              Artistry crafted for your cherished celebrations.
              Find the perfect beauty service for your special moments.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#702C45] transition-colors hover:text-[#54162F]"
          >
            View All Services
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-[#702C45]/5 bg-white shadow-[0_4px_20px_rgba(84,22,47,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(84,22,47,0.12)]"
            >
              {/* Service Image */}
              <Link
                href="/services"
                className="relative block aspect-[4/3] overflow-hidden bg-[#F0E5E5]"
                aria-label={`Explore ${service.title}`}
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span className="absolute right-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#702C45] backdrop-blur-md">
                  {service.tag}
                </span>
              </Link>

              {/* Service Details */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#857277]">
                  {service.category}
                </p>

                <h3 className="font-serif text-xl font-semibold leading-snug text-[#292326] transition-colors group-hover:text-[#702C45] sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#6F6268]">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#F0E6E8] pt-5">
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-[#857277]">
                    <Clock3 size={15} />
                    {service.duration}
                  </span>

                  <Button href="/booking">
                    Book Now
                    <ArrowRight size={15} />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <Button href="/services" variant="secondary">
            Explore All Services
            <ArrowRight size={17} />
          </Button>
        </div>
      </div>
    </section>
  );
}
