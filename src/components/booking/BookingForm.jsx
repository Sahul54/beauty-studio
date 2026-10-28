"use client";

import { useState } from "react";
import {
  UserRound,
  Phone,
  Palette,
  CalendarDays,
  Clock3,
  MapPin,
  Building2,
  MessageSquareText,
  ArrowRight,
  MessageCircle,
  LockKeyhole,
} from "lucide-react";

import { services } from "@/data/services";

const TIME_SLOTS = [
  "Morning (8 AM - 12 PM)",
  "Afternoon (12 PM - 4 PM)",
  "Evening (4 PM - 8 PM)",
  "Early morning (On request)",
];

const STUDIO_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

const inputClass =
  "w-full rounded-xl border border-transparent bg-[#F7F3F0] py-3.5 pl-11 pr-4 text-sm text-[#2D2527] outline-none transition placeholder:text-gray-400 focus:border-[#C6A6AF] focus:bg-white focus:ring-2 focus:ring-[#702C45]/10";

const labelClass =
  "mb-2 block text-sm font-semibold text-[#4D3740]";

function FieldIcon({ icon: Icon }) {
  return (
    <Icon
      size={18}
      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#866873]"
    />
  );
}

export default function BookingForm({ initialService = "" }) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    service: initialService,
    eventDate: "",
    preferredTime: "",
    cityArea: "",
    venueAddress: "",
    notes: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!STUDIO_WHATSAPP_NUMBER) {
      setError(
        "WhatsApp number is not configured yet. Please contact the studio."
      );
      return;
    }

    const phone = form.phone.trim();

    if (!/^\+?[0-9\s()-]{8,18}$/.test(phone)) {
      setError("Please enter a valid contact number.");
      return;
    }

    const selectedService = services.find(
      (item) => item.id === form.service
    );

    const message = [
      "Hello! I would like to enquire about an appointment.",
      "",
      `Name: ${form.fullName.trim()}`,
      `WhatsApp / Phone: ${phone}`,
      `Service: ${selectedService?.title || form.service}`,
      `Starting Price: ${selectedService?.price || "To be discussed"}`,
      `Event Date: ${form.eventDate}`,
      `Preferred Time: ${form.preferredTime}`,
      `City / Area: ${form.cityArea.trim()}`,
      form.venueAddress.trim()
        ? `Venue / Address: ${form.venueAddress.trim()}`
        : "",
      form.notes.trim()
        ? `Additional Notes: ${form.notes.trim()}`
        : "",
      "",
      "Please confirm availability and share the next steps.",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl =
      `https://wa.me/${STUDIO_WHATSAPP_NUMBER.replace(/\D/g, "")}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#EEE3E2] bg-white shadow-[0_8px_35px_rgba(84,22,47,0.05)]">
      <div className="border-b border-[#F0E7E6] px-5 py-6 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A67C52]">
              Let’s Get Started
            </p>

            <h2 className="mt-2 font-serif text-2xl font-medium text-[#54162F] sm:text-3xl">
              Appointment Details
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Fill in your details to enquire about your booking.
            </p>
          </div>

          <span className="rounded-full bg-[#F7F0F1] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#702C45]">
            Booking Request
          </span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-7 p-5 sm:p-8"
      >
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#866873]">
            01 · Your Details
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <FieldIcon icon={UserRound} />

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  className={inputClass}
                  required
                  maxLength={100}
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Contact Number <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <FieldIcon icon={Phone} />

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  required
                  maxLength={18}
                />
              </div>

              <p className="mt-1.5 text-xs text-gray-400">
                Include your country code.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F0E7E6]" />

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#866873]">
            02 · Your Service
          </p>

          <label htmlFor="service" className={labelClass}>
            Select Service <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <FieldIcon icon={Palette} />

            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`${inputClass} appearance-none pr-10`}
              required
            >
              <option value="" disabled>
                Choose your preferred service
              </option>

              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title} — {service.price}
                </option>
              ))}
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              ▾
            </span>
          </div>

          {form.service && (
            <div className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-[#FCF8F5] p-4">
              <div>
                <p className="text-sm font-semibold text-[#54162F]">
                  {services.find((s) => s.id === form.service)?.title}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Estimated duration:{" "}
                  {services.find((s) => s.id === form.service)?.duration}
                </p>
              </div>

              <p className="shrink-0 text-sm font-semibold text-[#702C45]">
                {services.find((s) => s.id === form.service)?.price}
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-[#F0E7E6]" />

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#866873]">
            03 · Event Details
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="eventDate" className={labelClass}>
                Event Date <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <FieldIcon icon={CalendarDays} />

                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  min={new Date().toLocaleDateString("en-CA")}
                  value={form.eventDate}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="preferredTime" className={labelClass}>
                Preferred Time <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <FieldIcon icon={Clock3} />

                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={form.preferredTime}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none`}
                  required
                >
                  <option value="" disabled>
                    Select a time
                  </option>

                  {TIME_SLOTS.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="cityArea" className={labelClass}>
                City / Area <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <FieldIcon icon={MapPin} />

                <input
                  id="cityArea"
                  name="cityArea"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="Enter city or locality"
                  value={form.cityArea}
                  onChange={handleChange}
                  className={inputClass}
                  required
                  maxLength={150}
                />
              </div>
            </div>

            <div>
              <label htmlFor="venueAddress" className={labelClass}>
                Venue / Address
              </label>

              <div className="relative">
                <FieldIcon icon={Building2} />

                <input
                  id="venueAddress"
                  name="venueAddress"
                  type="text"
                  autoComplete="street-address"
                  placeholder="Studio, hotel or home"
                  value={form.venueAddress}
                  onChange={handleChange}
                  className={inputClass}
                  maxLength={250}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F0E7E6]" />

        <div>
          <label htmlFor="notes" className={labelClass}>
            Additional Notes{" "}
            <span className="font-normal text-gray-400">(Optional)</span>
          </label>

          <div className="relative">
            <MessageSquareText
              size={18}
              className="absolute left-3.5 top-4 text-[#866873]"
            />

            <textarea
              id="notes"
              name="notes"
              rows={4}
              maxLength={1000}
              placeholder="Tell us about your event, preferred look or any special requests..."
              value={form.notes}
              onChange={handleChange}
              className={`${inputClass} resize-y py-3.5`}
            />
          </div>
        </div>

        {error && (
          <p
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"
          >
            {error}
          </p>
        )}

        <div className="space-y-4 pt-1">
          <button
            type="submit"
            className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#54162F] px-6 py-4 text-sm font-bold tracking-wide text-white shadow-[0_8px_20px_rgba(84,22,47,0.18)] transition hover:bg-[#702C45] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#702C45]/20"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]">
              <MessageCircle size={18} className="text-white" />
            </span>

            <span>Continue on WhatsApp</span>

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-xs leading-5 text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <LockKeyhole size={14} />
              No upfront payment through this form
            </span>

            <span className="hidden text-[#D7C1C6] sm:inline">•</span>

            <span>Availability is confirmed separately.</span>
          </div>
        </div>
      </form>
    </div>
  );
}