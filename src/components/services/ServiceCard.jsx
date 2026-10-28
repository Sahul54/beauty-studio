
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Sparkles,
  CalendarDays,
  Images,
} from "lucide-react";

export default function ServiceCard({ service }) {
  const serviceSlug = service.slug || service.id;

  // Use the service data already defined in services.js
  const serviceImages =
    service.images?.length > 0
      ? service.images
      : service.image
        ? [service.image]
        : [];

  const coverImage = serviceImages[0];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#702C45]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#702C45]/20 hover:shadow-lg hover:shadow-[#54162F]/10 sm:rounded-3xl">
      {/* Service Image */}
      <Link
        href={`/services/${serviceSlug}`}
        aria-label={`View ${service.title} details`}
        className="relative block aspect-[4/3] overflow-hidden bg-[#F4E7EB]"
      >
        {coverImage ? (
          <Image
            src={coverImage}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[#A56A80]">
            <Sparkles size={32} />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#54162F]/60 via-transparent to-transparent" />

        {/* Category */}
        <span className="absolute left-2.5 top-2.5 inline-flex max-w-[70%] items-center gap-1 rounded-full border border-white/60 bg-white/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-[#54162F] shadow-sm backdrop-blur-sm sm:left-3 sm:top-3 sm:text-[10px]">
          <Sparkles size={11} className="shrink-0" />
          <span className="truncate">
            {service.categoryLabel || "Beauty Service"}
          </span>
        </span>

        {/* Popular */}
        {service.featured && (
          <span className="absolute right-2.5 top-2.5 rounded-full bg-[#54162F] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-white shadow-sm sm:right-3 sm:top-3 sm:text-[10px]">
            Popular
          </span>
        )}

        {/* Gallery Count */}
        {serviceImages.length > 1 && (
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full border border-white/30 bg-black/25 px-2.5 py-1.5 text-[10px] font-medium text-white backdrop-blur-sm">
            <Images size={12} />
            {serviceImages.length} Photos
          </span>
        )}

        {/* Occasion & Price */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 sm:bottom-4 sm:left-4 sm:right-4">
          <p
            className={`min-w-0 truncate text-xs font-medium text-white drop-shadow-md sm:text-sm ${
              serviceImages.length > 1 ? "pl-1" : ""
            }`}
          >
            {/* {service.occasion} */}
          </p>

          <span className="shrink-0 rounded-full bg-white/95 px-2.5 py-1.5 text-[10px] font-bold text-[#54162F] shadow-sm sm:px-3 sm:text-xs">
            {service.price || "Price on enquiry"}
          </span>
        </div>
      </Link>

      {/* Service Content */}
      <div className="flex flex-1 flex-col p-3.5 sm:p-5">
        {/* Duration */}
        <div className="mb-2.5 flex items-center gap-1.5 text-[11px] text-[#857277] sm:text-xs">
          <Clock3 size={13} className="shrink-0 text-[#A56A80]" />
          <span>{service.duration || "Duration on enquiry"}</span>
        </div>

        {/* Title */}
        <h3 className="line-clamp-2 font-serif text-lg font-semibold leading-snug tracking-tight text-[#54162F] transition-colors group-hover:text-[#8B405B] sm:text-xl">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-3 text-xs leading-5 text-[#75656B] sm:mt-3 sm:text-sm sm:leading-6">
          {service.description}
        </p>

        {/* Actions */}
        <div className="mt-auto grid grid-cols-2 gap-2 pt-4 sm:gap-2.5 sm:pt-5">
          <Link
            href={`/services/${serviceSlug}`}
            className="inline-flex min-h-8 items-center justify-center gap-1 rounded-full border border-[#702C45]/20 bg-white px-2 py-1.5 text-[10px] font-semibold text-[#54162F] transition-colors hover:bg-[#F4E7EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85445D] focus-visible:ring-offset-2 sm:min-h-9 sm:gap-1.5 sm:px-3 sm:text-xs"
          >
            <span>View Details</span>
            <ArrowUpRight size={12} className="shrink-0" />
          </Link>

          <Link
            href={`/booking?service=${encodeURIComponent(service.id)}`}
            className="inline-flex min-h-8 items-center justify-center gap-1 rounded-full bg-[#54162F] px-2 py-1.5 text-[10px] font-semibold !text-white transition-colors hover:bg-[#702C45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85445D] focus-visible:ring-offset-2 sm:min-h-9 sm:gap-1.5 sm:px-3 sm:text-xs"
          >
            <CalendarDays size={12} className="shrink-0" />
            <span>Book Now</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
