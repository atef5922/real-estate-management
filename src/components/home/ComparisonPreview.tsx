"use client";

import Link from "next/link";
import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property/PropertyCard";
import { usePropertyState } from "@/components/providers/PropertyStateProvider";
import { properties } from "@/data/properties";

export function ComparisonPreview() {
  const { compare } = usePropertyState();
  const selected = compare.length
    ? properties.filter((property) => compare.includes(property.id)).slice(0, 3)
    : properties.filter((property) => property.featured).slice(0, 3);

  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-500">Property Comparison</p>
            <h2 className="mt-3 font-heading text-4xl font-semibold text-slateText">Compare Your Shortlist</h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/compare">
              <BarChart3 className="h-4 w-4" />
              Compare Properties
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {selected.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
