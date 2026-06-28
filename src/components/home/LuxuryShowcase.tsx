import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/common/FadeIn";

const amenities = ["Private lake view", "Imported fittings", "Concierge lobby", "Rooftop garden", "Two parking bays", "Legal verification"];

export function LuxuryShowcase() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
        <FadeIn className="relative min-h-[520px] overflow-hidden rounded-lg shadow-premium">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
            alt="Luxury penthouse lounge with city view"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 rounded-lg bg-white/92 p-5 shadow-gold backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-500">Showcase Home</p>
            <p className="mt-2 font-heading text-3xl font-semibold text-navy-950">৳ 6.20 Cr</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-500">Luxury Property Showcase</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-slateText lg:text-5xl">
            Baridhara Penthouse Crafted for Private Entertaining
          </h2>
          <p className="mt-5 text-base leading-8 text-mutedText">
            A polished presentation section for hero listings, signature projects, or developer inventory. The layout can later connect to a featured-property API flag.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {amenities.map((amenity) => (
              <span key={amenity} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                {amenity}
              </span>
            ))}
          </div>
          <Button asChild className="mt-8" variant="gold" size="lg">
            <Link href="/properties/baridhara-embassy-zone-penthouse">
              View Signature Home
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
