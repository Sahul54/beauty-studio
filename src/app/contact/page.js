import ContactPageHeader from "@/components/contact/ContactPageHeader";
import ContactMethodCards from "@/components/contact/ContactMethodCards";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

import { services } from "@/data/services";

export const metadata = {
  title: "Contact Us | Beauty Studio",
  description:
    "Contact Beauty Studio for makeup, mehndi, nail art and beauty service enquiries.",
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const requestedService = params?.service || "";

  const matchedService = services.find(
    (service) =>
      service.id === requestedService ||
      service.slug === requestedService
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FCF9F5]">
      {/* Ambient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#F1E1E5]/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-[650px] h-80 w-80 rounded-full bg-[#F0D7B1]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* Page Header */}
        <nav
          aria-label="Breadcrumb"
          className="mb-7 flex items-center gap-2 text-sm text-gray-500"
        >
          <a href="/" className="transition hover:text-[#54162F]">
            Home
          </a>
          <span>/</span>
          <span className="font-semibold text-[#54162F]">
            Contact
          </span>
        </nav>

        <ContactPageHeader />

        {/* Contact Options */}
        <ContactMethodCards />

        {/* Contact Details + Form */}
        <section className="grid items-start gap-7 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          <div className="lg:col-span-7">
            <ContactForm
              initialService={matchedService?.id || ""}
            />
          </div>
        </section>
      </div>
    </main>
  );
}