import Link from "next/link";
import { Building2 } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
      <span
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-sm border",
          inverse ? "border-gold-400 text-gold-400" : "border-gold-500 text-gold-500"
        )}
      >
        <Building2 className="h-7 w-7" />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block text-lg font-black uppercase tracking-[0.28em]",
            inverse ? "text-white" : "text-navy-950"
          )}
        >
          Dream
        </span>
        <span
          className={cn(
            "mt-1 block text-[10px] font-bold uppercase tracking-[0.52em]",
            inverse ? "text-white/70" : "text-navy-950/70"
          )}
        >
          Habitat
        </span>
      </span>
    </Link>
  );
}
