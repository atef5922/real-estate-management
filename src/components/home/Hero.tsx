"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CalendarCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scope = heroRef.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        opacity: 0,
        y: 34,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.12
      });
      gsap.to(".hero-bg", {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: scope,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[760px] overflow-hidden bg-navy-950 text-white">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
        alt="Luxury villa with warm lights and modern architecture"
        fill
        priority
        sizes="100vw"
        className="hero-bg object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/76 to-navy-950/12" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />
      <div className="container relative z-10 flex min-h-[650px] items-center pt-16">
        <div className="max-w-3xl">
          <p className="hero-reveal text-xs font-bold uppercase tracking-[0.36em] text-gold-400">
            Find Your Dream Home
          </p>
          <h1 className="hero-reveal mt-5 max-w-4xl font-heading text-5xl font-semibold leading-[0.98] luxury-text-balance sm:text-6xl lg:text-7xl">
            Discover Luxury Living Redefined
          </h1>
          <p className="hero-reveal mt-6 max-w-2xl text-lg leading-8 text-white/82">
            Explore premium homes, lands, and commercial spaces where your next chapter feels secure, refined, and unmistakably yours.
          </p>
          <div className="hero-reveal mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="gold">
              <Link href="/properties">
                Explore Properties
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="inverse">
              <Link href="/contact">
                <CalendarCheck className="h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
          </div>
          <div className="hero-reveal mt-10 inline-flex max-w-sm items-center gap-4 rounded-lg border border-white/18 bg-white/12 p-4 backdrop-blur-md">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-500 text-navy-950">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <span>
              <span className="block font-semibold">Verified premium inventory</span>
              <span className="mt-1 block text-sm text-white/70">Legal screening, site visits, and financing guidance.</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
