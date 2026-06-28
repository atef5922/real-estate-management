"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/common/EmptyState";
import { usePropertyState } from "@/components/providers/PropertyStateProvider";
import { properties } from "@/data/properties";

export function CompareClient() {
  const { compare, removeCompare } = usePropertyState();
  const selected = properties.filter((property) => compare.includes(property.id));

  if (!selected.length) {
    return (
      <div className="container py-14">
        <EmptyState
          title="No properties selected for comparison"
          description="Use the compare button on property cards to compare price, location, features, and amenities."
          actionLabel="Browse Properties"
          actionHref="/properties"
        />
      </div>
    );
  }

  const rows = [
    ["Price", (id: string) => properties.find((property) => property.id === id)?.priceLabel],
    ["Location", (id: string) => {
      const property = properties.find((item) => item.id === id);
      return property ? `${property.location}, ${property.city}` : "";
    }],
    ["Type", (id: string) => properties.find((property) => property.id === id)?.type],
    ["Beds", (id: string) => properties.find((property) => property.id === id)?.beds || "N/A"],
    ["Baths", (id: string) => properties.find((property) => property.id === id)?.baths || "N/A"],
    ["Area", (id: string) => `${properties.find((property) => property.id === id)?.areaSqft.toLocaleString("en-IN")} sqft`],
    ["Amenities", (id: string) => properties.find((property) => property.id === id)?.amenities.slice(0, 5).join(", ")]
  ];

  return (
    <div className="container overflow-x-auto py-14">
      <table className="min-w-[900px] w-full overflow-hidden rounded-lg border border-borderSoft bg-white text-left shadow-sm">
        <thead>
          <tr>
            <th className="w-48 bg-slate-50 p-4 text-sm uppercase tracking-[0.16em] text-mutedText">Feature</th>
            {selected.map((property) => (
              <th key={property.id} className="p-4 align-top">
                <div className="relative aspect-video overflow-hidden rounded-md">
                  <Image src={property.images[0].src} alt={property.title} fill sizes="300px" className="object-cover" />
                </div>
                <div className="mt-3 flex items-start justify-between gap-3">
                  <Link href={`/properties/${property.slug}`} className="font-heading text-2xl font-semibold text-slateText hover:text-gold-500">
                    {property.title}
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => removeCompare(property.id)} aria-label="Remove property">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, getter]) => (
            <tr key={label as string} className="border-t border-borderSoft">
              <td className="bg-slate-50 p-4 font-semibold text-slateText">{label as string}</td>
              {selected.map((property) => (
                <td key={property.id} className="p-4 text-sm text-mutedText">
                  {(getter as (id: string) => React.ReactNode)(property.id)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
