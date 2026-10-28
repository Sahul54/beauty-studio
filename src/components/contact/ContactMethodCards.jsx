import {
  MessageCircle,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

const phoneNumber =
  process.env.NEXT_PUBLIC_PHONE || "";

const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || "";
// Custom Instagram SVG Icon
function InstagramIcon({ size = 23 }) {
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
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

const cards = [
  {
    title: "Direct Chat",
    description: "Ask about services and appointment availability.",
    label: "Chat on WhatsApp",
    icon: MessageCircle,
    href: whatsappNumber
      ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
      : null,
    tag: "Quick Response",
    external: true,
  },
  {
    title: "Studio Inquiries",
    description: phoneNumber || "Contact us by phone.",
    label: "Call the Studio",
    icon: Phone,
    href: phoneNumber
      ? `tel:${phoneNumber.replace(/[^\d+]/g, "")}`
      : null,
    tag: "Phone",
    external: false,
  },
  {
    title: "Instagram",
    description: "Discover our latest looks and transformations.",
    label: "Follow on Instagram",
    icon: InstagramIcon,
    href: instagramUrl || null,
    tag: "Our Portfolio",
    external: true,
  },
];

export default function ContactMethodCards() {
  return (
    <section className="mb-14 grid gap-5 md:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        const content = (
          <>
            <div className="mb-8 flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F1E1E5] text-[#54162F] transition group-hover:bg-[#54162F] group-hover:text-white">
                <Icon size={23} />
              </span>

              <span className="rounded-full bg-[#F7F3F0] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#866873]">
                {card.tag}
              </span>
            </div>

            <h2 className="font-serif text-2xl font-medium text-[#54162F]">
              {card.title}
            </h2>

            <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
              {card.description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#702C45] transition-all group-hover:gap-3">
              {card.label}
              <ArrowUpRight size={17} />
            </div>
          </>
        );

        return card.href ? (
          <a
            key={card.title}
            href={card.href}
            target={card.external ? "_blank" : undefined}
            rel={card.external ? "noopener noreferrer" : undefined}
            className="group flex flex-col rounded-2xl border border-[#EEE3E2] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
          >
            {content}
          </a>
        ) : (
          <div
            key={card.title}
            className="flex flex-col rounded-2xl border border-[#EEE3E2] bg-white p-6 shadow-sm sm:p-8"
          >
            {content}

            <p className="mt-3 text-xs text-gray-400">
              Add your contact details in `.env.local` to activate this link.
            </p>
          </div>
        );
      })}
    </section>
  );
}