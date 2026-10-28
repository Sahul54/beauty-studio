"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Sparkles,
  Images,
  UserRound,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Sparkles },
  { label: "Portfolio", href: "/portfolio", icon: Images },
  { label: "About", href: "/about", icon: UserRound },
  { label: "Contact", href: "/contact", icon: Phone },
];

export default function Navbar() {
  const pathname = usePathname();

  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      {/* Desktop Navbar */}
      <header className="fixed top-0 z-50 hidden w-full border-b border-[#702C45]/10 bg-[#FFFCF8]/95 shadow-[0_4px_24px_-8px_rgba(112,44,69,0.10)] backdrop-blur-xl lg:block">
        <nav
          className="container mx-auto flex h-20 items-center justify-between gap-6 px-8"
          aria-label="Main navigation"
        >
          <Link href="/" className="group flex shrink-0 items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#54162F] text-white transition-transform duration-300 group-hover:rotate-6">
              <Sparkles size={22} />
            </span>

            <span className="flex flex-col">
              <span className="font-serif text-xl font-semibold text-[#54162F]">
                Beauty Studio
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.19em] text-[#857277]">
                Couture Atelier
              </span>
            </span>
          </Link>

          <div className="flex h-full items-center gap-7">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative flex h-full items-center text-[13px] transition-colors ${
                    active
                      ? "font-semibold text-[#54162F]"
                      : "font-medium text-[#524347] hover:text-[#54162F]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-5 left-0 h-0.5 rounded-full bg-[#54162F] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Button href="/contact" variant="secondary">
              <MessageCircle size={16} />
              WhatsApp
            </Button>
            <Button href="/booking">
              Book Now
              <ArrowUpRight size={15} />
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Top Header */}
      <header className="fixed top-0 z-50 w-full border-b border-[#702C45]/10 bg-[#FFFCF8]/95 backdrop-blur-xl lg:hidden">
        <div className="flex h-[64px] items-center px-4">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#54162F] text-white">
              <Sparkles size={19} />
            </span>
            <span>
              <span className="block font-serif text-base font-semibold leading-tight text-[#54162F]">
                Beauty Studio
              </span>
              <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.16em] text-[#857277]">
                Couture Atelier
              </span>
            </span>
          </Link>

          <Link
            href="/booking"
            className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[#54162F] px-4 py-2.5 text-xs font-semibold !text-white transition-colors hover:bg-[#702C45]"
          >
            Book Now
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav
        aria-label="Mobile bottom navigation"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-[#702C45]/10 bg-[#FFFCF8]/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-5px_24px_-10px_rgba(84,22,47,0.18)] backdrop-blur-xl lg:hidden"
      >
        <div className="mx-auto grid max-w-lg grid-cols-5">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex min-h-[66px] flex-col items-center justify-center gap-1 px-1 py-2 transition-colors ${
                  active
                    ? "font-semibold text-[#54162F]"
                    : "text-[#857277] hover:text-[#54162F]"
                }`}
              >
                {active && (
                  <span className="absolute left-1/2 top-0 h-[3px] w-8 -translate-x-1/2 rounded-b-full bg-[#54162F]" />
                )}

                <Icon
                  size={20}
                  strokeWidth={active ? 2.2 : 1.7}
                  aria-hidden="true"
                />

                <span className="text-[10px] leading-tight sm:text-[11px]">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}