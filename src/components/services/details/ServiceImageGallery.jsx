"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

export default function ServiceImageGallery({ service }) {
  const images =
    service.images?.length > 0
      ? service.images
      : [service.image];

  const [activeImage, setActiveImage] = useState(
    images[0] || service.image
  );

  return (
    <div className="space-y-3">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#F2E9E7]">
        {activeImage ? (
          <Image
            src={activeImage}
            alt={service.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover transition duration-500"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <ImageIcon size={42} className="text-[#702C45]" />
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(image)}
              aria-label={`View ${service.title} image ${index + 1}`}
              aria-pressed={activeImage === image}
              className={`relative aspect-square overflow-hidden rounded-xl border-2 transition ${
                activeImage === image
                  ? "border-[#702C45]"
                  : "border-transparent opacity-75 hover:opacity-100"
              }`}
            >
              <Image
                src={image}
                alt={`${service.title} preview ${index + 1}`}
                fill
                sizes="(max-width: 768px) 25vw, 12vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}