import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { locations } from "@/data/locations";

export function Locations() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Explore by Location"
          title="Bangladesh's Most Requested Addresses"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {locations.map((location, index) => (
            <Link
              key={location.name}
              href={`/properties?location=${encodeURIComponent(location.name)}`}
              className={`group relative min-h-[220px] overflow-hidden rounded-lg shadow-sm ${index < 2 ? "lg:col-span-2" : ""}`}
            >
              <Image src={location.image} alt={`${location.name} real estate`} fill sizes="(min-width: 1024px) 20vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
              <span className="absolute inset-0 bg-gradient-to-t from-navy-950/86 to-navy-950/12" />
              <span className="absolute bottom-5 left-5 right-5 text-white">
                <span className="block font-heading text-3xl font-semibold">{location.name}</span>
                <span className="mt-2 flex items-center gap-2 text-sm text-white/78">
                  {location.count} listings
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
