
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

export default function PortfolioCTA() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
        "Hi, I saw your portfolio and would like to enquire about an appointment."
      )}`
    : "/contact";

  return (
    <section className="relative mb-16 overflow-hidden rounded-3xl bg-[#54162F] px-6 py-14 text-center sm:px-12 sm:py-16">
      <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#A67C52]/20 blur-3xl" />

      <div className="relative mx-auto max-w-2xl">
        <Sparkles className="mx-auto text-[#E7CBA5]" size={25} />

        <h2 className="mt-5 font-serif text-3xl text-white sm:text-4xl">
          Love What You See?
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
          Tell us about your occasion and let’s create a look that feels
          uniquely yours.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#54162F] transition hover:bg-[#F1E1E5]"
          >
            Book Appointment
            <ArrowUpRight size={17} />
          </Link>

          <a
            href={whatsappUrl}
            target={whatsappNumber ? "_blank" : undefined}
            rel={whatsappNumber ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <MessageCircle size={17} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
