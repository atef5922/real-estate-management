"use client";

import * as Slider from "@radix-ui/react-slider";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { PropertyPurpose, PropertyType } from "@/types/property";

export type PropertyFilterState = {
  keyword: string;
  purpose: "All" | PropertyPurpose;
  type: "All" | PropertyType;
  location: string;
  bedrooms: string;
  bathrooms: string;
  areaMin: string;
  status: string;
  amenities: string[];
  price: [number, number];
};

type PropertyFiltersProps = {
  filters: PropertyFilterState;
  setFilters: (filters: PropertyFilterState) => void;
  locations: string[];
  types: PropertyType[];
  amenities: string[];
};

export function PropertyFilters({
  filters,
  setFilters,
  locations,
  types,
  amenities
}: PropertyFiltersProps) {
  const update = <K extends keyof PropertyFilterState>(key: K, value: PropertyFilterState[K]) => {
    setFilters({ ...filters, [key]: value });
  };

  const toggleAmenity = (amenity: string) => {
    const exists = filters.amenities.includes(amenity);
    update(
      "amenities",
      exists ? filters.amenities.filter((item) => item !== amenity) : [...filters.amenities, amenity]
    );
  };

  const reset = () => {
    setFilters({
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
    });
  };

  return (
    <aside className="rounded-lg border border-borderSoft bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-heading text-2xl font-semibold text-slateText">
          <SlidersHorizontal className="h-5 w-5 text-gold-500" />
          Filters
        </h2>
        <Button variant="ghost" size="sm" onClick={reset}>
          <X className="h-4 w-4" />
          Reset
        </Button>
      </div>
      <div className="mt-5 space-y-5">
        <label className="grid gap-2 text-sm font-semibold text-slateText">
          Keyword
          <Input
            value={filters.keyword}
            onChange={(event) => update("keyword", event.target.value)}
            placeholder="Search title, city, type"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slateText">
          Purpose
          <select
            className="h-11 rounded-md border border-borderSoft bg-white px-3 text-sm"
            value={filters.purpose}
            onChange={(event) => update("purpose", event.target.value as PropertyFilterState["purpose"])}
          >
            {["All", "For Sale", "For Rent", "New Projects"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slateText">
          Type
          <select
            className="h-11 rounded-md border border-borderSoft bg-white px-3 text-sm"
            value={filters.type}
            onChange={(event) => update("type", event.target.value as PropertyFilterState["type"])}
          >
            <option>All</option>
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slateText">
          Location
          <select
            className="h-11 rounded-md border border-borderSoft bg-white px-3 text-sm"
            value={filters.location}
            onChange={(event) => update("location", event.target.value)}
          >
            <option>All</option>
            {locations.map((location) => (
              <option key={location}>{location}</option>
            ))}
          </select>
        </label>
        <div>
          <div className="mb-3 flex items-center justify-between text-sm font-semibold text-slateText">
            <span>Price Range</span>
            <span className="text-xs text-mutedText">
              ৳ {(filters.price[0] / 10000000).toFixed(1)}Cr - ৳ {(filters.price[1] / 10000000).toFixed(1)}Cr
            </span>
          </div>
          <Slider.Root
            className="relative flex h-5 touch-none select-none items-center"
            value={filters.price}
            max={70000000}
            step={500000}
            onValueChange={(value) => update("price", value as [number, number])}
          >
            <Slider.Track className="relative h-1 grow rounded-full bg-slate-200">
              <Slider.Range className="absolute h-full rounded-full bg-gold-500" />
            </Slider.Track>
            <Slider.Thumb className="block h-5 w-5 rounded-full border-2 border-gold-500 bg-white shadow" />
            <Slider.Thumb className="block h-5 w-5 rounded-full border-2 border-gold-500 bg-white shadow" />
          </Slider.Root>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <label className="grid gap-2 text-sm font-semibold text-slateText">
            Bedrooms
            <select
              className="h-11 rounded-md border border-borderSoft bg-white px-3 text-sm"
              value={filters.bedrooms}
              onChange={(event) => update("bedrooms", event.target.value)}
            >
              {["All", "1", "2", "3", "4", "5"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slateText">
            Bathrooms
            <select
              className="h-11 rounded-md border border-borderSoft bg-white px-3 text-sm"
              value={filters.bathrooms}
              onChange={(event) => update("bathrooms", event.target.value)}
            >
              {["All", "1", "2", "3", "4", "5"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
        <label className="grid gap-2 text-sm font-semibold text-slateText">
          Minimum Area
          <Input
            type="number"
            value={filters.areaMin}
            onChange={(event) => update("areaMin", event.target.value)}
            placeholder="sqft"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slateText">
          Status
          <select
            className="h-11 rounded-md border border-borderSoft bg-white px-3 text-sm"
            value={filters.status}
            onChange={(event) => update("status", event.target.value)}
          >
            {["All", "Ready", "Ongoing", "Upcoming", "Sold", "Rented"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <div>
          <p className="mb-3 text-sm font-semibold text-slateText">Amenities</p>
          <div className="grid gap-2">
            {amenities.slice(0, 10).map((amenity) => (
              <label key={amenity} className="flex items-center gap-2 text-sm text-mutedText">
                <input
                  type="checkbox"
                  checked={filters.amenities.includes(amenity)}
                  onChange={() => toggleAmenity(amenity)}
                  className="h-4 w-4 rounded border-borderSoft text-gold-500"
                />
                {amenity}
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
