
import Link from "next/link";
import {
  MessageCircle,
  CalendarCheck,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function BookingCTA() {
  return (
    <section className="bg-[#FFFCF8] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="container mx-auto">
        <div className="relative isolate overflow-hidden rounded-3xl bg-[#54162F] px-6 py-12 shadow-[0_20px_60px_rgba(84,22,47,0.16)] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full bg-[#702C45] opacity-70 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-[#A34E6D] opacity-20 blur-3xl" />

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Text Content */}
            <div className="lg:col-span-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[#FFD9E2]">
                <CalendarCheck size={16} />

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] sm:text-xs">
                  Your Special Day Starts Here
                </span>
              </div>

              <h2 className="max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight !text-white sm:text-4xl lg:text-5xl">
                Ready for Your{" "}
                <span className="italic text-[#FFD9E2]">
                  Special Day?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#F0DCE3] sm:text-base sm:leading-8">
                Let us help you create a look you will love.
                Get in touch to discuss your occasion, explore our
                services and plan your beauty appointment.
              </p>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
              <Button
                href="/booking"
                fullWidth
              >
                <CalendarCheck size={18} />
                Book an Appointment
                <ArrowUpRight size={16} />
              </Button>

              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold !text-white transition-colors hover:bg-white/20"
              >
                <MessageCircle size={18} />
                Contact Us
              </Link>

              <p className="flex items-center gap-2 text-xs text-[#E8C7D3]">
                <Sparkles size={14} />
                Let&apos;s create something beautiful
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
