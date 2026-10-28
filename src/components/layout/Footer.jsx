import Link from "next/link";
import {
  Sparkles,
  MessageCircle,
  Clock3,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import CurrentYear from "@/components/layout/CurrentYear";

const serviceLinks = [
  { label: "Bridal & Party Makeup", href: "/services" },
  { label: "Mehndi Artistry", href: "/services" },
  { label: "Nail Art & Extensions", href: "/services" },
  { label: "Beauty Packages", href: "/services" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
];

const rawWhatsAppNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
  process.env.WHATSAPP_NUMBER ||
  "";

const whatsappNumber = rawWhatsAppNumber.replace(/\D/g, "");

const whatsappMessage = encodeURIComponent(
  "Hi! I would like to enquire about your beauty services and appointment availability."
);

const whatsappUrl = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  : "/contact";

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-[#75656B] transition-colors hover:text-[#54162F]"
      >
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#702C45]/10 bg-[#FCF9F5]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main Footer */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-10 sm:py-12 lg:grid-cols-4 lg:gap-12 lg:py-14">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Beauty Studio home"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#54162F] text-white">
                <Sparkles size={20} />
              </span>

              <span>
                <span className="block font-serif text-xl font-semibold text-[#54162F]">
                  Beauty Studio
                </span>
                <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.2em] text-[#857277]">
                  Couture Atelier
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-[#75656B]">
              Celebrating your beauty with elegant makeup, intricate mehndi
              and beautiful nail artistry.
            </p>

            <a
              href={whatsappUrl}
              target={whatsappNumber ? "_blank" : undefined}
              rel={whatsappNumber ? "noopener noreferrer" : undefined}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#54162F] transition-colors hover:text-[#A56A80]"
            >
              <MessageCircle size={17} />
              Chat with us
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-base font-semibold text-[#35272D]">
              Our Services
            </h3>

            <ul className="mt-4 space-y-3">
              {serviceLinks.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold text-[#35272D]">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3">
              {quickLinks.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}

              <FooterLink href="/booking">
                Book Appointment
              </FooterLink>
            </ul>
          </div>

          {/* Studio Information */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-serif text-base font-semibold text-[#35272D]">
              Visit Our Studio
            </h3>

            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3">
                <Clock3
                  size={18}
                  className="mt-0.5 shrink-0 text-[#A56A80]"
                />
                <div>
                  <p className="text-sm font-medium text-[#35272D]">
                    Studio Hours
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#85747A]">
                    Contact us to confirm timings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#A56A80]"
                />
                <div>
                  <p className="text-sm font-medium text-[#35272D]">
                    Studio Location
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#85747A]">
                    Contact us for directions and availability.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/booking"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#54162F] px-5 py-3 text-sm font-medium !text-white transition-colors hover:bg-[#702C45]"
            >
              Book Now
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-2 border-t border-[#702C45]/10 py-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-[#85747A]">
            © <CurrentYear /> Beauty Studio. All rights reserved.
          </p>

          <Link
            href="/contact"
            className="text-xs font-medium text-[#54162F] transition-colors hover:text-[#A56A80]"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </footer>
  );
}