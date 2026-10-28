import { notFound } from "next/navigation";

import {
  services,
  getServiceBySlug,
} from "@/data/services";

import ServiceBreadcrumb from "@/components/services/details/ServiceBreadcrumb";
import ServiceImageGallery from "@/components/services/details/ServiceImageGallery";
import ServiceOverview from "@/components/services/details/ServiceOverview";
import ServiceIncludes from "@/components/services/details/ServiceIncludes";
import ServicePortfolio from "@/components/services/details/ServicePortfolio";
import ServiceFAQ from "@/components/services/details/ServiceFAQ";
import ServiceBookingCTA from "@/components/services/details/ServiceBookingCTA";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Beauty Studio`,
    description:
      service.details?.description || service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FCF9F5]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <ServiceBreadcrumb service={service} />
      </div>

      {/* Hero: Gallery + Overview */}
      <section className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-12">
        <ServiceImageGallery service={service} />

        <ServiceOverview service={service} />
      </section>

      {/* What's Included */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceIncludes service={service} />
      </div>

      {/* Portfolio */}
      <ServicePortfolio service={service} />

      {/* FAQs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceFAQ service={service} />

        {/* Final Booking CTA */}
        <ServiceBookingCTA service={service} />
      </div>
    </main>
  );
}