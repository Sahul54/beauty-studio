"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

import ServiceCategoryFilter from "@/components/services/ServiceCategoryFilter";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export default function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter(
          (service) => service.category === activeCategory
        );

  return (
    <>
      <ServiceCategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <section className="bg-[#FCF9F5] pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 pt-4 sm:px-8 lg:px-12">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A56A80]">
                Our Collection
              </p>

              <h2 className="mt-2 font-serif text-2xl font-semibold text-[#54162F] sm:text-3xl">
                Beauty, thoughtfully curated
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#75656B]">
                Explore our beauty services and find the perfect
                experience for your next special occasion.
              </p>
            </div>

            <p className="text-sm text-[#857277]" aria-live="polite">
              Showing{" "}
              <span className="font-semibold text-[#54162F]">
                {filteredServices.length}
              </span>{" "}
              {filteredServices.length === 1 ? "service" : "services"}
            </p>
          </div>

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[#702C45]/20 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E7EB] text-[#702C45]">
                <Sparkles size={26} />
              </div>

              <h3 className="mt-5 font-serif text-xl font-semibold text-[#54162F]">
                More services coming soon
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#857277]">
                Please explore another category or contact us for
                personalised service options.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}