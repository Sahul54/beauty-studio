import Link from "next/link";
import {
  Clock3,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export default function ServiceOverview({ service }) {
  const details = service.details;

  return (
    <div className="rounded-2xl border border-[#EDE2E0] bg-white p-6 shadow-sm sm:p-8">
      <span className="inline-flex rounded-full bg-[#F6E9EC] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#702C45]">
        {service.categoryLabel}
      </span>

      <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#54162F] sm:text-4xl">
        {service.title}
      </h1>

      <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
        {details?.description || service.description}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-[#FCF9F5] p-4">
          <p className="text-xs text-gray-500">Starting Price</p>
          <p className="mt-1 font-semibold text-[#54162F]">
            {service.price}
          </p>
        </div>

        <div className="rounded-xl bg-[#FCF9F5] p-4">
          <p className="text-xs text-gray-500">Duration</p>
          <p className="mt-1 flex items-center gap-2 font-semibold text-[#54162F]">
            <Clock3 size={16} />
            {service.duration}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-sm text-gray-600">
        <MapPin size={17} className="shrink-0 text-[#702C45]" />
        <span>{details?.location || service.occasion}</span>
      </div>

      <div className="mt-6 space-y-3 border-t border-[#EDE2E0] pt-5">
        {[
          "Personalised service",
          "Professional attention",
          "Consultation before your appointment",
        ].map((item) => (
          <div key={item} className="flex items-start gap-2">
            <CheckCircle2
              size={17}
              className="mt-0.5 shrink-0 text-[#702C45]"
            />
            <span className="text-sm text-gray-600">{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/booking?service=${encodeURIComponent(service.id)}`}
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#54162F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#702C45]"
        >
          Book Appointment
          <ArrowUpRight size={17} />
        </Link>

        <Link
          href={`/contact?service=${encodeURIComponent(service.id)}`}
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#702C45] px-5 py-3 text-sm font-semibold text-[#54162F] transition hover:bg-[#FCF4F5]"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
}