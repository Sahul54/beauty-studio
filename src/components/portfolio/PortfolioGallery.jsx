"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Play, X, Images } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import {
  portfolioItems,
  portfolioCategories,
  portfolioMediaTypes,
} from "@/data/portfolio";

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function PortfolioGallery() {
  const [category, setCategory] = useState("all");
  const [mediaType, setMediaType] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      const matchesCategory = category === "all" || item.category === category;

      const matchesMedia = mediaType === "all" || item.type === mediaType;

      return matchesCategory && matchesMedia;
    });
  }, [category, mediaType]);

  return (
    <section className="pb-16">
      {/* Filters */}

      <div className="mb-8 rounded-2xl border border-[#EEE3E2] bg-white p-3 shadow-[0_4px_20px_-8px_rgba(84,22,47,0.10)] sm:p-4">
        <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap pb-1 sm:gap-4">
          {/* Category Label */}
          <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.16em] text-[#A67C52]">
            Category
          </span>

          {/* Category Filters */}
          <div className="flex shrink-0 items-center gap-1.5">
            {portfolioCategories.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setCategory(item.value)}
                aria-pressed={category === item.value}
                className={`rounded-full px-3.5 py-2 text-xs font-semibold transition-all duration-200 sm:px-4 ${
                  category === item.value
                    ? "bg-[#54162F] text-white shadow-sm"
                    : "text-[#6E5960] hover:bg-[#F7F3F0] hover:text-[#54162F]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Vertical Divider */}
          <div className="h-7 w-px shrink-0 bg-[#EEE3E2]" />

          {/* Media Type Filters */}
          <div className="flex shrink-0 items-center gap-1 rounded-full bg-[#F7F3F0] p-1">
            {portfolioMediaTypes.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setMediaType(item.value)}
                aria-pressed={mediaType === item.value}
                className={`rounded-full px-3.5 py-2 text-xs font-semibold transition-all duration-200 ${
                  mediaType === item.value
                    ? "bg-white text-[#54162F] shadow-sm"
                    : "text-[#866873] hover:text-[#54162F]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-[#EEE3E2] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <button
                type="button"
                onClick={() => {
                  if (item.type === "photo") {
                    setSelectedItem(item);
                  } else if (item.instagramUrl) {
                    window.open(
                      item.instagramUrl,
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }
                }}
                aria-label={
                  item.type === "reel"
                    ? `Watch ${item.title} on Instagram`
                    : `Preview ${item.title}`
                }
                className="relative block aspect-[4/5] w-full overflow-hidden bg-[#F7F3F0] text-left"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#30101F]/80 via-transparent to-black/5 opacity-80 transition group-hover:opacity-100" />

                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#54162F] backdrop-blur">
                  {item.category.replace("-", " ")}
                </span>

                {item.type === "reel" && (
                  <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-[#54162F]/90 px-3 py-1.5 text-xs font-medium text-white">
                    <Play size={13} fill="currentColor" />
                    Reel
                  </span>
                )}

                <span className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="mb-2 block text-xs text-white/80">
                    {item.type === "reel"
                      ? "Watch on Instagram"
                      : "Portfolio Photograph"}
                  </span>
                  <span className="block font-serif text-2xl">
                    {item.title}
                  </span>
                  <span className="mt-2 flex items-center gap-2 text-sm font-medium">
                    {item.type === "reel" ? (
                      <>
                        Watch Reel <FaInstagram size={16} />
                      </>
                    ) : (
                      <>
                        View Photo <ArrowUpRight size={16} />
                      </>
                    )}
                  </span>
                </span>
              </button>

              <div className="p-5">
                <h2 className="font-serif text-xl text-[#54162F]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#DCC7CC] px-6 py-16 text-center">
          <Images className="mx-auto text-[#866873]" size={32} />
          <h2 className="mt-4 font-serif text-2xl text-[#54162F]">
            No work found
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Try another category or media filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setCategory("all");
              setMediaType("all");
            }}
            className="mt-5 rounded-full bg-[#54162F] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Show all work
          </button>
        </div>
      )}

      {/* Photo preview */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative grid max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-[#FCF9F5] md:grid-cols-2"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Close photo preview"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#54162F] shadow"
            >
              <X size={20} />
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="max-h-[55vh] w-full object-contain md:max-h-[80vh] md:object-cover"
            />

            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#A67C52]">
                {selectedItem.category.replace("-", " ")}
              </p>
              <h2 className="mt-3 font-serif text-3xl text-[#54162F]">
                {selectedItem.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-600">
                {selectedItem.description}
              </p>

              <a
                href="/booking"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#54162F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#702C45]"
              >
                Book an Appointment
                <ArrowUpRight size={17} />
              </a>

              {selectedItem.instagramUrl && (
                <a
                  href={selectedItem.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#702C45]"
                >
                  View on Instagram
                  <InstagramIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
