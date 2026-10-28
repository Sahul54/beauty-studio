
"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  X,
  Clock3,
  Sparkles,
  CalendarDays,
  MessageCircle,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function ServiceDetailsModal({ service, onClose }) {
  useEffect(() => {
    if (!service) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [service, onClose]);

  if (!service) return null;

  const details = service.details || service.description;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#21141A]/60 p-3 backdrop-blur-sm sm:p-5"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        className="relative my-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/70 bg-[#FCF9F5] shadow-2xl shadow-black/20 animate-in fade-in zoom-in-95 duration-200 sm:rounded-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#54162F] via-[#68243F] to-[#85445D] px-5 pb-6 pt-6 text-white sm:px-7 sm:pb-7 sm:pt-7">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-3 -top-8 h-28 w-28 rounded-full border border-white/10"
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close service details"
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:right-4 sm:top-4"
          >
            <X size={16} />
          </button>

          <div className="relative">
            <span className="inline-flex max-w-[85%] items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/90 sm:text-[10px]">
              <Sparkles size={12} className="shrink-0" />
              <span className="truncate">
                {service.categoryLabel || "Beauty Service"}
              </span>
            </span>

            <h2
              id="service-modal-title"
              className="mt-4 max-w-sm font-serif text-2xl font-semibold leading-tight sm:text-3xl"
            >
              {service.title}
            </h2>

            <p className="mt-2 max-w-sm text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">
              A personalised beauty experience, thoughtfully designed
              for your style and occasion.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Service highlights */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            <div className="rounded-xl border border-[#702C45]/10 bg-white p-3 sm:rounded-2xl sm:p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F4E7EB] text-[#702C45]">
                <Clock3 size={16} />
              </div>

              <p className="mt-3 text-[9px] font-semibold uppercase tracking-wider text-[#857277] sm:text-[10px]">
                Duration
              </p>

              <p className="mt-1 text-sm font-semibold text-[#54162F]">
                {service.duration || "On enquiry"}
              </p>
            </div>

            <div className="rounded-xl border border-[#702C45]/10 bg-white p-3 sm:rounded-2xl sm:p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F4E7EB] text-[#702C45]">
                <Sparkles size={16} />
              </div>

              <p className="mt-3 text-[9px] font-semibold uppercase tracking-wider text-[#857277] sm:text-[10px]">
                Starting price
              </p>

              <p className="mt-1 text-sm font-semibold text-[#54162F]">
                {service.price || "On enquiry"}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-5 sm:mt-6">
            <h3 className="font-serif text-lg font-semibold text-[#54162F] sm:text-xl">
              About this service
            </h3>

            <p className="mt-2 whitespace-pre-line text-xs leading-6 text-[#75656B] sm:text-sm sm:leading-7">
              {details || "Contact us to learn more about this service."}
            </p>
          </div>

          {/* Note */}
          <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-[#F4E7EB]/70 p-3 sm:mt-5 sm:rounded-2xl sm:p-3.5">
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-[#702C45]"
            />

            <p className="text-[11px] leading-5 text-[#75656B] sm:text-xs">
              Final pricing and availability will be confirmed before
              your appointment.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:gap-2.5">
            <Link
              href={`/booking?service=${encodeURIComponent(service.id)}`}
              className="inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-full bg-[#54162F] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#702C45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85445D] focus-visible:ring-offset-2 sm:flex-1"
            >
              <CalendarDays size={14} />
              Book This Service
              <ArrowUpRight size={13} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-full border border-[#702C45]/20 bg-white px-3.5 py-2 text-xs font-semibold text-[#54162F] transition-colors hover:bg-[#F4E7EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85445D] focus-visible:ring-offset-2 sm:flex-1"
            >
              <MessageCircle size={14} />
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
