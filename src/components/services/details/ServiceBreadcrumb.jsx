import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function ServiceBreadcrumb({ service }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-sm text-gray-500"
    >
      <Link
        href="/"
        className="transition hover:text-[#702C45]"
        aria-label="Home"
      >
        <Home size={15} />
      </Link>

      <ChevronRight size={14} />

      <Link
        href="/services"
        className="transition hover:text-[#702C45]"
      >
        Services
      </Link>

      <ChevronRight size={14} />

      <span className="truncate font-medium text-[#54162F]">
        {service.title}
      </span>
    </nav>
  );
}