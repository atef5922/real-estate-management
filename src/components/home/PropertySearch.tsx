"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import * as Tabs from "@radix-ui/react-tabs";
import { ArrowRight, Building2, Home, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { PropertyPurpose } from "@/types/property";

const popular = ["Apartment", "Villa", "Land", "Office Space", "Shop", "Duplex", "Bashundhara", "Gulshan", "Banani", "Uttara"];

const searchLocations = [
  "Gulshan",
  "Banani",
  "Bashundhara R/A",
  "Uttara",
  "Dhanmondi",
  "Mirpur DOHS",
  "Mohammadpur",
  "Baridhara",
  "Purbachal",
  "Chattogram",
  "Sylhet",
  "Cox's Bazar"
];

export function PropertySearch() {
  const router = useRouter();
  const [purpose, setPurpose] = useState<PropertyPurpose>("For Sale");
  const [location, setLocation] = useState("");
  const [locationOpen, setLocationOpen] = useState(false);
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [beds, setBeds] = useState("");
  const [area, setArea] = useState("");

  const filteredLocations = searchLocations
    .filter((item) => item.toLowerCase().includes(location.toLowerCase()))
    .slice(0, 6);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    params.set("purpose", purpose);
    if (location) params.set("location", location);
    if (type) params.set("type", type);
    if (minPrice) params.set("min", minPrice);
    if (maxPrice) params.set("max", maxPrice);
    if (beds) params.set("beds", beds);
    if (area) params.set("area", area);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="relative z-20 mx-auto -mt-24 max-w-7xl px-4 sm:px-6 lg:-mt-28">
      <div className="rounded-lg border border-white/70 bg-white p-4 shadow-premium sm:p-5">
        <Tabs.Root value={purpose} onValueChange={(value) => setPurpose(value as PropertyPurpose)}>
          <Tabs.List className="flex flex-wrap gap-2 border-b border-borderSoft pb-4">
            {[
              { label: "For Sale", icon: Home },
              { label: "For Rent", icon: Home },
              { label: "New Projects", icon: Building2 }
            ].map((tab) => (
              <Tabs.Trigger
                key={tab.label}
                value={tab.label}
                className="inline-flex h-11 items-center gap-2 rounded-md px-4 text-sm font-semibold text-mutedText data-[state=active]:bg-navy-950 data-[state=active]:text-white"
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>
        <form onSubmit={onSubmit} className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr_1fr_0.8fr_0.8fr_1.2fr]">
          <label className="grid gap-2 text-sm font-semibold text-slateText">
            Location
            <div className="relative">
              <Input
                value={location}
                onChange={(event) => {
                  setLocation(event.target.value);
                  setLocationOpen(true);
                }}
                onFocus={() => setLocationOpen(true)}
                onBlur={() => {
                  window.setTimeout(() => setLocationOpen(false), 120);
                }}
                placeholder="Type or select location"
                className="pr-10"
              />
              <MapPin className="absolute right-3 top-3.5 h-4 w-4 text-mutedText" />
              {locationOpen ? (
                <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-40 overflow-hidden rounded-lg border border-borderSoft bg-white shadow-premium">
                  <div className="border-b border-borderSoft px-3 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-mutedText">
                    Prime Locations
                  </div>
                  <div className="max-h-64 overflow-y-auto p-2">
                    {(filteredLocations.length ? filteredLocations : searchLocations.slice(0, 6)).map((item) => (
                      <button
                        key={item}
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => {
                          setLocation(item);
                          setLocationOpen(false);
                        }}
                        className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-semibold text-slate-700 transition hover:bg-gold-500/12 hover:text-navy-950"
                      >
                        <span className="inline-flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gold-500" />
                          {item}
                        </span>
                        <span className="text-xs font-medium text-mutedText">Select</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slateText">
            Property Type
            <select value={type} onChange={(event) => setType(event.target.value)} className="h-11 rounded-md border border-borderSoft bg-white px-3 text-sm text-slateText">
              <option value="">Select type</option>
              {["Apartment", "Villa", "Duplex", "Land", "Office Space", "Shop", "Penthouse"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slateText">
            Min Price
            <Input value={minPrice} onChange={(event) => setMinPrice(event.target.value)} placeholder="Min price" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slateText">
            Max Price
            <Input value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} placeholder="Max price" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slateText">
            Bedrooms
            <select value={beds} onChange={(event) => setBeds(event.target.value)} className="h-11 rounded-md border border-borderSoft bg-white px-3 text-sm text-slateText">
              <option value="">Any</option>
              {[1, 2, 3, 4, 5].map((item) => (
                <option key={item}>{item}+</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slateText">
            Area
            <div className="relative">
              <Input
                type="number"
                min={0}
                step={100}
                value={area}
                onChange={(event) => setArea(event.target.value)}
                placeholder="sqft"
              />
            </div>
          </label>
          <div className="flex items-end">
            <Button type="submit" className="h-11 w-full">
              Search Property
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </form>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-slateText">Popular Searches:</span>
          {popular.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => router.push(`/properties?keyword=${encodeURIComponent(item)}`)}
              className="rounded-sm border border-borderSoft px-3 py-1.5 text-slate-600 transition hover:border-gold-500 hover:text-navy-950"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
