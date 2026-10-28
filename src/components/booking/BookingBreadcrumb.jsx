import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function BookingBreadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-7 flex items-center gap-2 text-sm text-gray-500"
    >
      <Link
        href="/"
        className="flex items-center gap-1.5 transition hover:text-[#54162F]"
      >
        <Home size={15} />
        <span>Home</span>
      </Link>

      <ChevronRight size={15} />

      <span className="font-semibold text-[#54162F]">
        Booking
      </span>
    </nav>
  );
}