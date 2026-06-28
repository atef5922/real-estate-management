import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({
  items,
  variant = "default"
}: {
  items: BreadcrumbItem[];
  variant?: "default" | "light";
}) {
  const isLight = variant === "light";

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex flex-wrap items-center gap-2 text-sm", isLight ? "text-white/72" : "text-slate-500")}
    >
      <Link href="/" className="inline-flex items-center gap-1 hover:text-gold-400">
        <Home className="h-4 w-4" />
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-2">
          <ChevronRight className={cn("h-4 w-4", isLight ? "text-white/42" : "text-slate-400")} />
          {item.href ? (
            <Link href={item.href} className="hover:text-gold-400">
              {item.label}
            </Link>
          ) : (
            <span className={cn("font-medium", isLight ? "text-white" : "text-slateText")}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
