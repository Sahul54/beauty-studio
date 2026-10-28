
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  Play,
  Sparkles,
} from "lucide-react";

export default function ServicePortfolio({ service }) {
  const images = (service.images || [])
    .filter(Boolean)
    .slice(0, 3);

  // Add actual Instagram Reel URLs in services.js.
  // Each item: { title, url, image }
  const reels = service.instagramReels || [];

  return (
    <section className="overflow-hidden bg-[#FCF9F5]">
      {/* Portfolio */}
      {images.length > 0 && (
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#702C45]">
                <Sparkles size={15} />
                Our Portfolio
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#54162F] sm:text-4xl">
                A Glimpse of Our Artistry
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                Explore the details, creativity and beautiful
                results of our {service.title.toLowerCase()} service.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#702C45] transition hover:gap-3 hover:text-[#54162F]"
            >
              Explore Services
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={image}
                className={`group relative overflow-hidden rounded-2xl bg-[#F0E5E4] ${
                  index === 0
                    ? "aspect-[4/4.5] sm:row-span-1"
                    : "aspect-[4/4.5]"
                }`}
              >
                <Image
                  src={image}
                  alt={`${service.title} portfolio ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2D101D]/40 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="text-sm font-medium text-white">
                    {service.title}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#54162F] transition group-hover:bg-white">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instagram Reels */}
      <div className="border-t border-[#E9DAD9] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#702C45]">
                <Camera size={16} />
                Follow Our Journey
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#54162F] sm:text-4xl">
                Beauty in Motion
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                Watch our latest looks, transformations and
                behind-the-scenes moments on Instagram.
              </p>
            </div>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-[#E8D6DC] px-5 py-3 text-sm font-semibold text-[#54162F] transition hover:border-[#702C45] hover:bg-[#FCF4F5]"
            >
              <Camera size={17} />
              Follow on Instagram
              <ArrowUpRight size={16} />
            </a>
          </div>

          {reels.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {reels.slice(0, 4).map((reel, index) => (
                <a
                  key={reel.url}
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${reel.title || service.title} Instagram Reel`}
                  className="group relative aspect-[9/14] overflow-hidden rounded-2xl bg-[#F0E5E4]"
                >
                  <Image
                    src={reel.image || images[index % images.length]}
                    alt={reel.title || `${service.title} Reel`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#702C45]">
                    <Camera size={18} />
                  </span>

                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/20 text-white backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:bg-white/30">
                      <Play size={21} fill="currentColor" />
                    </span>
                  </span>

                  <span className="absolute bottom-4 left-4 right-4">
                    <span className="block text-sm font-semibold text-white">
                      {reel.title || service.title}
                    </span>
                    <span className="mt-1 flex items-center gap-1 text-xs text-white/80">
                      Watch Reel
                      <ArrowUpRight size={13} />
                    </span>
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#E8D6DC] bg-[#FCF9F5] px-6 py-10 text-center">
              <Camera
                size={28}
                className="mx-auto text-[#702C45]"
              />
              <p className="mt-3 font-semibold text-[#54162F]">
                Your Reels will appear here
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-600">
                Add your Instagram Reel links and cover images to
                this service in services.js.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
