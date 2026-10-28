
import { Suspense } from "react";

import BookingBreadcrumb from "@/components/booking/BookingBreadcrumb";
import BookingPageHeader from "@/components/booking/BookingPageHeader";
import BookingForm from "@/components/booking/BookingForm";
import BookingSidebar from "@/components/booking/BookingSidebar";
import BookingTrustStrip from "@/components/booking/BookingTrustStrip";

import { services } from "@/data/services";

export const metadata = {
  title: "Book an Appointment | Beauty Studio",
  description:
    "Enquire about beauty studio appointments for makeup, mehndi, nail art and more.",
};

async function BookingContent({ searchParams }) {
  const params = await searchParams;
  const requestedService = params?.service || "";

  const matchedService = services.find(
    (service) =>
      service.id === requestedService ||
      service.slug === requestedService
  );

  const initialService = matchedService?.id || "";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FCF9F5]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#F1E1E5]/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-[500px] h-80 w-80 rounded-full bg-[#F0D7B1]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <BookingBreadcrumb />

        <BookingPageHeader />

        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-start gap-3.5 rounded-2xl border border-[#E8D6DC] bg-[#F7F0F1] p-4 sm:p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#702C45] shadow-sm">
                <span className="text-lg">i</span>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-[#54162F]">
                  Booking Availability Check
                </h2>

                <p className="mt-1.5 text-sm leading-6 text-gray-600">
                  Send your appointment request through WhatsApp.
                  Our team will review your preferred date and
                  confirm availability with you. Submitting this
                  form does not confirm the booking.
                </p>
              </div>
            </div>

            <BookingForm initialService={initialService} />
          </div>

          <div className="lg:col-span-4">
            <BookingSidebar />
          </div>
        </div>

        <BookingTrustStrip />
      </div>
    </main>
  );
}

export default function BookingPage({ searchParams }) {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#FCF9F5] px-4 py-12">
          <div className="mx-auto max-w-7xl animate-pulse">
            <div className="h-5 w-40 rounded bg-[#E8D6DC]" />
            <div className="mt-8 h-12 max-w-md rounded bg-[#E8D6DC]" />
            <div className="mt-8 h-72 rounded-2xl bg-white" />
          </div>
        </main>
      }
    >
      <BookingContent searchParams={searchParams} />
    </Suspense>
  );
}
