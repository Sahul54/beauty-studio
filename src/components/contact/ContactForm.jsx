"use client";

import { useState } from "react";
import {
  UserRound,
  Phone,
  Palette,
  MessageSquareText,
  Send,
  MessageCircle,
} from "lucide-react";

import { services } from "@/data/services";

const whatsappNumber = process.env.NEXT_PUBLIC_STUDIO_WHATSAPP_NUMBER || "";

const inputClass =
  "w-full rounded-xl border border-transparent bg-[#F7F3F0] px-4 py-3.5 text-sm text-[#2D2527] outline-none transition placeholder:text-gray-400 focus:border-[#C6A6AF] focus:bg-white focus:ring-2 focus:ring-[#702C45]/10";

function FormField({ label, htmlFor, icon: Icon, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-[#4D3740]"
      >
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <Icon
            size={18}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#866873]"
          />
        )}

        {children}
      </div>
    </div>
  );
}

export default function ContactForm({ initialService = "" }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: initialService || "general-inquiry",
    message: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));

    if (error) setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!whatsappNumber) {
      setError(
        "Contact form is not configured yet. Please contact the studio directly.",
      );
      return;
    }

    if (!/^\+?[0-9\s()-]{8,18}$/.test(form.phone.trim())) {
      setError("Please enter a valid contact number.");
      return;
    }

    const selectedService = services.find(
      (service) => service.id === form.service,
    );

    const serviceName =
      selectedService?.title ||
      (form.service === "bridal-package"
        ? "Complete Bridal Package"
        : "General Inquiry");

    const message = [
      "Hello Beauty Studio! I have a new enquiry.",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Interested Service: ${serviceName}`,
      `Message: ${form.message.trim()}`,
      "",
      "Please get in touch with me regarding my enquiry.",
    ].join("\n");

    const url =
      `https://wa.me/${whatsappNumber.replace(/\D/g, "")}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="rounded-2xl border border-[#EEE3E2] bg-white p-5 shadow-[0_8px_35px_rgba(84,22,47,0.05)] sm:p-8 lg:p-10">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A67C52]">
          Send a Message
        </p>

        <h2 className="mt-3 font-serif text-3xl font-medium text-[#54162F] sm:text-4xl">
          We’d Love to Hear from You
        </h2>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          Share your question or requirements, and continue the conversation
          with our team on WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <FormField label="Full Name *" htmlFor="contact-name" icon={UserRound}>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`${inputClass} pl-11`}
            maxLength={100}
            required
          />
        </FormField>

        <FormField label="Phone Number *" htmlFor="contact-phone" icon={Phone}>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={`${inputClass} pl-11`}
            maxLength={18}
            required
          />
        </FormField>

        <FormField
          label="Interested Service *"
          htmlFor="contact-service"
          icon={Palette}
        >
          <select
            id="contact-service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`${inputClass} appearance-none pl-11`}
            required
          >
            <option value="general-inquiry">General Inquiry</option>

            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}

            <option value="bridal-package">Complete Bridal Package</option>
          </select>
        </FormField>

        <FormField label="Message *" htmlFor="contact-message">
          <div className="relative">
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your occasion or question..."
              rows={5}
              maxLength={1500}
              className={`${inputClass} resize-y pl-11`}
              required
            />

            <MessageSquareText
              size={18}
              className="pointer-events-none absolute left-4 top-4 text-[#866873]"
              aria-hidden="true"
            />
          </div>
        </FormField>

        {error && (
          <p
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#54162F] px-6 py-4 text-sm font-bold tracking-wide text-white shadow-md transition hover:bg-[#702C45] focus:outline-none focus:ring-4 focus:ring-[#702C45]/20"
        >
          <MessageCircle size={19} />
          Send Enquiry on WhatsApp
          <Send
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>

        <p className="text-center text-xs leading-5 text-gray-500">
          Your WhatsApp conversation will open with the enquiry details filled
          in. You’ll need to press Send in WhatsApp.
        </p>
      </form>
    </section>
  );
}
