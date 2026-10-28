import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function ServiceBookingCTA({ service }) {
  return (
    <section className="pb-14 sm:pb-20">
      <div className="relative overflow-hidden rounded-3xl bg-[#54162F] px-6 py-10 text-center sm:px-12 sm:py-14">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-2xl">
          <Sparkles
            size={26}
            className="mx-auto text-[#E8C6CF]"
          />

          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
            Ready for Your Perfect Look?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            Book your {service.title.toLowerCase()} appointment
            and let us help you feel your best.
          </p>

          <Link
            href={`/booking?service=${encodeURIComponent(service.id)}`}
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#54162F] transition hover:bg-[#F6E9EC]"
          >
            Book Your Appointment
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}