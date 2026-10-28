
"use client";

import { useState } from "react";
import Image from "next/image";
import { Images, Sparkles } from "lucide-react";

export default function ServiceImageGallery({
  images = [],
  title,
  featured = false,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const validImages = images.filter(Boolean);

  if (!validImages.length) {
    return (
      <div className="flex aspect-[4/5] items-center justify-center rounded-3xl bg-[#F4E7EB] text-[#702C45]">
        <div className="text-center">
          <Images size={40} className="mx-auto" />
          <p className="mt-3 text-sm">Images coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#F4E7EB] shadow-[0_16px_40px_rgba(84,22,47,0.10)] sm:aspect-[5/4] lg:aspect-[4/5]">
        <Image
          key={validImages[activeIndex]}
          src={validImages[activeIndex]}
          alt={`${title} - image ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#54162F]/30 via-transparent to-transparent" />

        {featured && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-xs font-semibold text-[#54162F] shadow-sm backdrop-blur-md sm:left-5 sm:top-5">
            <Sparkles size={14} />
            Signature Service
          </div>
        )}

        <div className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-[#54162F] backdrop-blur-md">
          {activeIndex + 1} / {validImages.length}
        </div>
      </div>

      {validImages.length > 1 && (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {validImages.slice(0, 8).map((image, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View image ${index + 1} of ${title}`}
                aria-pressed={isActive}
                className={`relative aspect-[4/3] overflow-hidden rounded-xl transition ${
                  isActive
                    ? "ring-2 ring-[#54162F] ring-offset-2 ring-offset-[#FCF9F5]"
                    : "opacity-75 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`${title} thumbnail ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 33vw, 150px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
