"use client";

import { EmptyState } from "@/components/common/EmptyState";
import { PropertyCard } from "@/components/property/PropertyCard";
import { usePropertyState } from "@/components/providers/PropertyStateProvider";
import { properties } from "@/data/properties";

export function WishlistClient() {
  const { wishlist } = usePropertyState();
  const saved = properties.filter((property) => wishlist.includes(property.id));

  return (
    <div className="container py-14">
      {saved.length ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {saved.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No saved properties yet"
          description="Save apartments, villas, land, or commercial spaces from the listings to build a private shortlist."
          actionLabel="Browse Properties"
          actionHref="/properties"
        />
      )}
    </div>
  );
}
