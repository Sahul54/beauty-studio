import { Sparkles } from "lucide-react";

export default function ContactPageHeader() {
  return (
    <header className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div className="max-w-2xl">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A67C52]">
          <Sparkles size={15} />
          Concierge & Inquiries
        </p>

        <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-[#54162F] sm:text-5xl">
          Let’s Connect
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
          Have a question about makeup, mehndi or nail art?
          We’re here to help you plan your perfect look.
        </p>
      </div>

      <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#E9DDE0] bg-white px-4 py-3 shadow-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#702C45] opacity-50" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#702C45]" />
        </span>

        <span className="text-xs font-semibold text-[#54162F]">
          Get in Touch
        </span>
      </div>
    </header>
  );
}