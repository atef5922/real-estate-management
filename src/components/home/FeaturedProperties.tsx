import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { PropertyCard } from "@/components/property/PropertyCard";
import { properties } from "@/data/properties";

export function FeaturedProperties() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Featured Properties"
            title="Handpicked Homes for Serious Buyers"
            description="Verified premium listings across Dhaka, Chattogram, Sylhet, and coastal destinations."
          />
          <Link href="/properties" className="inline-flex items-center gap-2 font-semibold text-gold-500 hover:text-navy-950">
            View All Properties
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {properties
            .filter((property) => property.featured)
            .slice(0, 4)
            .map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
        </div>
      </div>
    </section>
  );
}
