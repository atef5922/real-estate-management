"use client";

import { useState } from "react";
import Image from "next/image";
import type { PropertyImage } from "@/types/property";
import { cn } from "@/lib/utils";

export function PropertyGallery({ images, title }: { images: PropertyImage[]; title: string }) {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_180px]">
      <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-slate-200 shadow-premium lg:min-h-[560px]">
        <Image src={active.src} alt={active.alt || title} fill priority sizes="(min-width: 1024px) 75vw, 100vw" className="object-cover" />
      </div>
      <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
        {images.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(image)}
            className={cn(
              "relative aspect-video overflow-hidden rounded-md border-2",
              active.src === image.src ? "border-gold-500" : "border-transparent"
            )}
          >
            <Image src={image.src} alt={image.alt} fill sizes="180px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
