import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const serviceAreas =
  process.env.NEXT_PUBLIC_STUDIO_SERVICE_AREAS ||
  "Contact us to check service availability in your area.";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Service Area */}
      <section className="rounded-2xl border border-[#EEE3E2] bg-[#F7F3F0] p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1E1E5] text-[#54162F]">
            <MapPin size={21} />
          </span>

          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A67C52]">
            Our Service Area
          </p>
        </div>

        <h2 className="mt-5 font-serif text-2xl font-medium leading-snug text-[#54162F]">
          Beauty Services, Made Personal
        </h2>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          {serviceAreas}
        </p>

        <Link
          href="/booking"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#702C45] transition hover:gap-3"
        >
          Request an Appointment
          <ArrowUpRight size={16} />
        </Link>
      </section>

      {/* Studio Image */}
      <section className="group relative min-h-[320px] overflow-hidden rounded-2xl bg-[#54162F]">
        <Image
          src="/images/bridal-makeup.jpg"
          alt="Beauty Studio makeup artistry"
          fill
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#351020]/95 via-[#54162F]/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F0D7B1]">
            <Sparkles size={14} />
            Beauty & Artistry
          </p>

          <h2 className="mt-3 max-w-sm font-serif text-3xl leading-snug !text-white">
            Your Vision, Our Artistry
          </h2>

          <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
            Share your ideas with us and let’s find the right
            service for your occasion.
          </p>
        </div>
      </section>

      {/* Consultation Note */}
      <section className="rounded-2xl border border-[#EEE3E2] bg-white p-6">
        <div className="flex items-start gap-3.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F1E1E5] text-[#54162F]">
            <ShieldCheck size={21} />
          </span>

          <div>
            <h3 className="font-serif text-xl font-medium text-[#54162F]">
              Personalised Consultation
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-600">
              Tell us about your occasion, preferred style and
              requirements. We’ll help you understand the
              available services and next steps.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}