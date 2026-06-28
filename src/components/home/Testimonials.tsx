"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <section className="bg-white py-20">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Client Stories"
          title="Trusted by Buyers, Investors, and Brands"
        />
        <div ref={emblaRef} className="mt-10 overflow-hidden">
          <div className="flex gap-6">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="min-w-0 flex-[0_0_88%] rounded-lg border border-borderSoft bg-slate-50 p-6 sm:flex-[0_0_48%] lg:flex-[0_0_32%]">
                <div className="flex gap-1 text-gold-500">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-700">{testimonial.review}</p>
                <div className="mt-6 flex items-center gap-3">
                  <Image src={testimonial.image} alt={testimonial.name} width={52} height={52} className="rounded-full" />
                  <div>
                    <p className="font-semibold text-slateText">{testimonial.name}</p>
                    <p className="text-sm text-mutedText">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
