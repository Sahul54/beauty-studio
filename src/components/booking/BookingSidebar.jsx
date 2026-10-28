import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  CalendarDays,
  MapPin,
  Sparkles,
  Store,
  HeartHandshake,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const operations = [
  {
    day: "Tuesday – Sunday",
    hours: "10 AM – 7:30 PM",
  },
  {
    day: "Monday",
    hours: "By appointment",
  },
];

const coverage = [
  {
    icon: Store,
    title: "Studio Appointments",
    description:
      "Enjoy a personalised beauty experience at the studio.",
  },
  {
    icon: MapPin,
    title: "On-Location Services",
    description:
      "Ask us about artist availability at your home, hotel or event venue.",
  },
  {
    icon: ShieldCheck,
    title: "Care & Hygiene",
    description:
      "We aim to provide a clean, comfortable and professional service experience.",
  },
];

export default function BookingSidebar() {
  return (
    <aside className="space-y-5">
      {/* Studio Operations */}
      <div className="rounded-2xl border border-[#EEE3E2] bg-white p-6 shadow-[0_6px_25px_rgba(84,22,47,0.04)]">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F1E1E5] text-[#54162F]">
            <Clock3 size={21} />
          </div>

          <div>
            <h3 className="font-serif text-xl font-medium text-[#54162F]">
              Studio Hours
            </h3>
            <p className="mt-0.5 text-xs text-gray-500">
              Plan your visit
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {operations.map((item) => (
            <div
              key={item.day}
              className="flex items-start justify-between gap-4 border-b border-[#F0E7E6] pb-3 last:border-0 last:pb-0"
            >
              <span className="text-sm font-medium text-[#45353A]">
                {item.day}
              </span>

              <span className="text-right text-sm text-gray-500">
                {item.hours}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex gap-3 rounded-xl bg-[#FCF8F5] p-4">
          <CalendarDays
            size={19}
            className="mt-0.5 shrink-0 text-[#702C45]"
          />

          <p className="text-xs leading-6 text-gray-600">
            Your preferred date is subject to availability. Our
            team will confirm your appointment after reviewing
            your request.
          </p>
        </div>
      </div>

      {/* Service Coverage */}
      <div className="rounded-2xl border border-[#EEE3E2] bg-white p-6 shadow-[0_6px_25px_rgba(84,22,47,0.04)]">
        <h3 className="font-serif text-xl font-medium text-[#54162F]">
          Service Coverage
        </h3>

        <div className="mt-5 space-y-5">
          {coverage.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F7F0F1] text-[#702C45]">
                  <Icon size={19} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#54162F]">
                    {item.title}
                  </h4>

                  <p className="mt-1.5 text-xs leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Editorial Card */}
      <div className="group relative min-h-[260px] overflow-hidden rounded-2xl bg-[#54162F]">
        {/* <Image
          src="/images/bridal-makeup.jpg"
          alt="Beauty studio bridal makeup artistry"
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        /> */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#351020]/95 via-[#54162F]/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F0D7B1]">
            <Sparkles size={14} />
            Made for Your Moments
          </div>

          <h3 className="mt-3 max-w-sm font-serif text-2xl leading-snug !text-white">
            Your Special Day Deserves a Special Touch
          </h3>

          <Link
            href="/services"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:gap-3"
          >
            Explore Our Services
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Contact Card */}
      <div className="rounded-2xl border border-[#E8D6DC] bg-[#F7F0F1] p-5">
        <div className="flex gap-3">
          <HeartHandshake
            size={22}
            className="shrink-0 text-[#702C45]"
          />

          <div>
            <h3 className="text-sm font-semibold text-[#54162F]">
              Need help choosing?
            </h3>

            <p className="mt-1.5 text-xs leading-6 text-gray-600">
              Tell us about your occasion and we can help you
              enquire about the right service.
            </p>

            <Link
              href="/contact"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#702C45] hover:text-[#54162F]"
            >
              Contact the Studio
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}