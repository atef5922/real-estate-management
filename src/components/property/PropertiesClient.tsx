"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Grid3X3, List, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/common/EmptyState";
import { PropertyCardSkeleton } from "@/components/common/LoadingSkeleton";
import { PropertyCard } from "@/components/property/PropertyCard";
import { PropertyFilters, type PropertyFilterState } from "@/components/property/PropertyFilters";
import { properties } from "@/data/properties";
import { getUniqueValues } from "@/lib/utils";
import type { Property, PropertyType } from "@/types/property";

const perPage = 6;

const defaultFilters: PropertyFilterState = {
  keyword: "",
  purpose: "All",
  type: "All",
  location: "All",
  bedrooms: "All",
  bathrooms: "All",
  areaMin: "",
  status: "All",
  amenities: [],
  price: [0, 70000000]
};

function filterProperties(items: Property[], filters: PropertyFilterState, luxury: boolean) {
  return items.filter((property) => {
    const keyword = filters.keyword.toLowerCase().trim();
    const matchesKeyword = keyword
      ? [property.title, property.city, property.location, property.type, property.developer ?? ""]
          .join(" ")
          .toLowerCase()
          .includes(keyword)
      : true;
    const matchesPurpose = filters.purpose === "All" || property.purpose === filters.purpose;
    const matchesType = filters.type === "All" || property.type === filters.type;
    const matchesLocation = filters.location === "All" || property.location.includes(filters.location) || property.city.includes(filters.location);
    const matchesPrice = property.price >= filters.price[0] && property.price <= filters.price[1];
    const matchesBeds = filters.bedrooms === "All" || property.beds >= Number(filters.bedrooms);
    const matchesBaths = filters.bathrooms === "All" || property.baths >= Number(filters.bathrooms);
    const matchesArea = filters.areaMin ? property.areaSqft >= Number(filters.areaMin) : true;
    const matchesStatus = filters.status === "All" || property.status === filters.status;
    const matchesAmenities = filters.amenities.every((amenity) => property.amenities.includes(amenity));
    const matchesLuxury = luxury ? property.isLuxury : true;

    return (
      matchesKeyword &&
      matchesPurpose &&
      matchesType &&
      matchesLocation &&
      matchesPrice &&
      matchesBeds &&
      matchesBaths &&
      matchesArea &&
      matchesStatus &&
      matchesAmenities &&
      matchesLuxury
    );
  });
}

function PropertiesContent() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<PropertyFilterState>(defaultFilters);
  const [sort, setSort] = useState("featured");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const purpose = searchParams.get("purpose");
    const type = searchParams.get("type");
    const location = searchParams.get("location");
    const keyword = searchParams.get("keyword");
    const min = Number(searchParams.get("min") || 0);
    const max = Number(searchParams.get("max") || 70000000);
    const beds = searchParams.get("beds");
    const area = searchParams.get("area");

    setFilters({
      ...defaultFilters,
      keyword: keyword ?? "",
      purpose: purpose === "For Sale" || purpose === "For Rent" || purpose === "New Projects" ? purpose : "All",
      type: type ? (type as PropertyFilterState["type"]) : "All",
      location: location ?? "All",
      bedrooms: beds ? beds.replace("+", "") : "All",
      areaMin: area ?? "",
      price: [min, max]
    });
    setPage(1);
  }, [searchParams]);

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), 180);
    return () => window.clearTimeout(timer);
  }, [filters, sort, view]);

  const locations = useMemo(() => getUniqueValues(properties, (property) => property.location), []);
  const types = useMemo(() => getUniqueValues(properties, (property) => property.type) as PropertyType[], []);
  const amenities = useMemo(
    () => Array.from(new Set(properties.flatMap((property) => property.amenities))).sort(),
    []
  );
  const luxury = searchParams.get("luxury") === "true";

  const filtered = useMemo(() => {
    const result = filterProperties(properties, filters, luxury);
    return [...result].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "area-desc") return b.areaSqft - a.areaSqft;
      return Number(b.featured) - Number(a.featured);
    });
  }, [filters, luxury, sort]);

  const totalPages = Math.max(Math.ceil(filtered.length / perPage), 1);
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  useEffect(() => {
    setPage(1);
  }, [filters, sort]);

  return (
    <div className="container py-14">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-gold-500">{filtered.length} curated listings found</p>
          <h2 className="mt-1 font-heading text-3xl font-semibold text-slateText">Advanced Property Search</h2>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Dialog.Root open={drawerOpen} onOpenChange={setDrawerOpen}>
            <Dialog.Trigger asChild>
              <Button variant="outline" className="lg:hidden">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[90] bg-navy-950/70" />
              <Dialog.Content className="fixed right-0 top-0 z-[91] h-full w-[min(92vw,390px)] overflow-y-auto bg-slate-50 p-4 shadow-premium">
                <div className="mb-4 flex items-center justify-between">
                  <Dialog.Title className="font-heading text-2xl font-semibold text-slateText">Property Filters</Dialog.Title>
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </Dialog.Close>
                </div>
                <PropertyFilters filters={filters} setFilters={setFilters} locations={locations} types={types} amenities={amenities} />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="h-11 rounded-md border border-borderSoft bg-white px-3 text-sm font-semibold text-slateText"
            aria-label="Sort properties"
          >
            <option value="featured">Featured First</option>
            <option value="price-asc">Price Low to High</option>
            <option value="price-desc">Price High to Low</option>
            <option value="area-desc">Largest Area</option>
          </select>
          <div className="flex rounded-md border border-borderSoft bg-white p-1">
            <Button type="button" variant={view === "grid" ? "default" : "ghost"} size="icon" onClick={() => setView("grid")} aria-label="Grid view">
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button type="button" variant={view === "list" ? "default" : "ghost"} size="icon" onClick={() => setView("list")} aria-label="List view">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[310px_1fr]">
        <div className="hidden lg:block">
          <PropertyFilters filters={filters} setFilters={setFilters} locations={locations} types={types} amenities={amenities} />
        </div>
        <div>
          {loading ? (
            <div className={view === "grid" ? "grid gap-6 md:grid-cols-2 xl:grid-cols-3" : "grid gap-6"}>
              {Array.from({ length: 6 }).map((_, index) => (
                <PropertyCardSkeleton key={index} />
              ))}
            </div>
          ) : pageItems.length ? (
            <div className={view === "grid" ? "grid gap-6 md:grid-cols-2 xl:grid-cols-3" : "grid gap-6"}>
              {pageItems.map((property) => (
                <PropertyCard key={property.id} property={property} variant={view} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No properties match your filters"
              description="Try broadening the price range, removing amenities, or choosing another Dhaka neighborhood."
              actionLabel="Browse All Properties"
              actionHref="/properties"
            />
          )}

          {filtered.length > perPage ? (
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <Button
                  key={index}
                  type="button"
                  variant={page === index + 1 ? "default" : "outline"}
                  size="icon"
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function PropertiesClient() {
  return (
    <Suspense fallback={<div className="container py-16"><PropertyCardSkeleton /></div>}>
      <PropertiesContent />
    </Suspense>
  );
}
