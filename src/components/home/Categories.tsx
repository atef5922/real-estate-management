import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Building2, Factory, Home, HousePlus, Landmark, Map, Store } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { categories } from "@/data/categories";

const icons = {
  Building2,
  Home,
  Map,
  Landmark,
  HousePlus,
  BriefcaseBusiness,
  Store,
  Factory
};

export function Categories() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Property Categories"
          title="Search by Asset Class"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = icons[category.icon as keyof typeof icons] ?? Building2;
            return (
              <Link
                key={category.name}
                href={`/properties?type=${encodeURIComponent(category.name)}`}
                className="group relative min-h-[230px] overflow-hidden rounded-lg shadow-sm"
              >
                <Image src={category.image} alt={`${category.name} properties`} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/72 to-navy-950/18" />
                <span className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 to-transparent" />
                <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-sm bg-white text-gold-500 shadow">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="absolute bottom-5 left-5 right-5 rounded-md border border-white/12 bg-navy-950/55 p-3 shadow-glass backdrop-blur-sm">
                  <span className="block font-heading text-2xl font-semibold text-white drop-shadow">{category.name}</span>
                  <span className="mt-1 block text-sm font-semibold text-gold-300">{category.count.toLocaleString("en-IN")} properties</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
