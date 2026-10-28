
import Link from "next/link";
import { LoaderCircle } from "lucide-react";

const variants = {
  primary:
    "bg-[#702C45] !text-white hover:bg-[#572035]",
  secondary:
    "bg-[#F8E8E8] text-[#702C45] hover:bg-[#F1DADA]",
  outline:
    "border border-[#702C45] text-[#702C45] hover:bg-[#F8E8E8]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  className = "",
}) {
  const classes = [
    "inline-flex min-h-11 items-center justify-center gap-2",
    "rounded-full px-6 py-3 text-sm font-semibold",
    "transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#702C45]",
    variants[variant] || variants.primary,
    fullWidth ? "w-full" : "",
    className,
  ].join(" ");

  const content = (
    <>
      {loading && (
        <LoaderCircle size={16} className="animate-spin" />
      )}
      {children}
    </>
  );

  // Navigation buttons: no event handlers passed to Link.
  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={disabled || loading}
        tabIndex={disabled || loading ? -1 : undefined}
      >
        {content}
      </Link>
    );
  }

  // Interactive buttons: use inside a Client Component.
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  );
}
