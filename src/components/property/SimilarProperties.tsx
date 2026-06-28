import { PropertyCard } from "@/components/property/PropertyCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { Property } from "@/types/property";

export function SimilarProperties({ properties }: { properties: Property[] }) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container">
        <SectionHeader
          eyebrow="Similar Homes"
          title="Properties You May Also Like"
          description="Comparable premium listings selected by location, property type, and buyer intent."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
