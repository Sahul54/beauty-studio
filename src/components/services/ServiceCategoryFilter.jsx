
"use client";

import { useState } from "react";
import {
  Sparkles,
  Palette,
  Flower2,
  Hand,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Services", icon: Sparkles },
  { id: "makeup", label: "Makeup Artistry", icon: Palette },
  { id: "mehndi", label: "Artisanal Mehndi", icon: Flower2 },
  { id: "nail-art", label: "Nail Art & Extensions", icon: Hand },
];

export default function ServiceCategoryFilter({
  activeCategory,
  onCategoryChange,
}) {
  const [selectedCategory, setSelectedCategory] = useState(
    activeCategory || "all"
  );

  function handleCategoryChange(category) {
    setSelectedCategory(category);
    onCategoryChange?.(category);
  }

  return (
    <section className="bg-[#FCF9F5]">
      <div className="mx-auto max-w-7xl px-4 pb-5 sm:px-6 py-6 sm:pb-6 lg:px-12">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A67C52] sm:text-sm lg:text-base">
  Explore our collection
</p>

<h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#54162F] sm:text-4xl lg:text-5xl">
  Find your perfect service
</h2>
          </div>
        </div>

        <div
          role="group"
          aria-label="Filter services by category"
          className="mt-3 flex flex-wrap gap-1.5 sm:gap-2"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryChange(category.id)}
                aria-pressed={isActive}
                className={`inline-flex min-h-7 shrink-0 items-center justify-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-medium leading-tight transition-colors duration-200 sm:min-h-8 sm:gap-1.5 sm:px-3 sm:text-xs ${
                  isActive
                    ? "border-[#54162F] bg-[#54162F] text-white hover:bg-[#702C45]"
                    : "border-[#702C45]/10 bg-white text-[#75656B] hover:border-[#702C45]/30 hover:bg-[#F4E7EB] hover:text-[#54162F]"
                }`}
              >
                <Icon
                  size={12}
                  strokeWidth={1.8}
                  className="shrink-0 sm:size-3.5"
                />

                <span>{category.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
