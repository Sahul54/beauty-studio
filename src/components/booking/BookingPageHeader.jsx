import { ShieldCheck, Sparkles } from "lucide-react";

export default function BookingPageHeader() {
  return (
    <header className="mb-10 flex flex-col justify-between gap-6 lg:mb-12 lg:flex-row lg:items-end">
      <div className="max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F1E1E5] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#54162F]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#702C45]" />
          Reservations · By Appointment
        </div>

        <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-[#54162F] sm:text-5xl lg:text-6xl">
          Book Your
          <br className="hidden sm:block" />{" "}
          <span className="italic">Appointment</span>
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
          Tell us about your special occasion. Our team will
          connect with you to discuss availability and your
          preferred beauty service.
        </p>
      </div>

      <div className="hidden items-center gap-3 rounded-full border border-[#E9DDE0] bg-white/80 px-4 py-3 shadow-sm lg:flex">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1E1E5] text-[#54162F]">
          <ShieldCheck size={21} />
        </div>

        <div>
          <p className="text-sm font-semibold text-[#54162F]">
            Personalised Assistance
          </p>
          <p className="mt-0.5 text-xs text-gray-500">
            Your booking, your preferences
          </p>
        </div>

        <Sparkles size={17} className="ml-2 text-[#A67C52]" />
      </div>
    </header>
  );
}