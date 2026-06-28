"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const gallery = [
  { category: "Apartment", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80", title: "Gulshan apartment lounge" },
  { category: "Villa", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80", title: "Private pool villa" },
  { category: "Interior", image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1000&q=80", title: "Premium kitchen finish" },
  { category: "Project", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80", title: "Modern project exterior" },
  { category: "Commercial", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80", title: "Corporate office floor" },
  { category: "Apartment", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80", title: "Penthouse entertainment area" },
  { category: "Villa", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80", title: "Luxury residence exterior" },
  { category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80", title: "Commercial tower" }
];

export function GalleryClient() {
  const [category, setCategory] = useState("All");
  const categories = ["All", "Apartment", "Villa", "Interior", "Project", "Commercial"];
  const filtered = useMemo(
    () => (category === "All" ? gallery : gallery.filter((item) => item.category === category)),
    [category]
  );

  return (
    <div className="container py-14">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition ${category === item ? "bg-navy-950 text-white" : "bg-white text-slate-600 hover:bg-gold-500/15"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filtered.map((item, index) => (
          <figure key={item.image} className="mb-5 break-inside-avoid overflow-hidden rounded-lg border border-borderSoft bg-white shadow-sm">
            <div className={`relative ${index % 3 === 0 ? "h-96" : "h-72"}`}>
              <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-500">{item.category}</p>
              <p className="mt-1 font-heading text-2xl font-semibold text-slateText">{item.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
