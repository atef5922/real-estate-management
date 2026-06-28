import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 text-white">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
        alt="Luxury residence background"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/94 via-navy-950/88 to-navy-950/76" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,164,74,0.18),transparent_36%)]" />
      <div className="container relative z-10 text-center">
        <p className="inline-flex rounded-sm border border-gold-300/40 bg-navy-950/55 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-gold-300 shadow-gold backdrop-blur">
          Private Consultation
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight text-white drop-shadow-lg sm:text-5xl">
          Ready to Find Your Dream Property?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-white/92 drop-shadow">
          Tell us how you want to live, invest, or grow. We will shape a shortlist that feels right before it looks perfect on paper.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="gold" size="lg">
            <Link href="/properties">
              Browse Properties
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white bg-white text-navy-950 shadow-premium hover:bg-gold-400 hover:text-navy-950"
          >
            <Link href="/contact">
              <Phone className="h-5 w-5" />
              Contact Expert
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
