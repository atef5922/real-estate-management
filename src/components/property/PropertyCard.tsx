"use client";

import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, Heart, MapPin, Maximize2, Scale, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePropertyState } from "@/components/providers/PropertyStateProvider";
import { getAgentById } from "@/data/agents";
import type { Property } from "@/types/property";
import { cn } from "@/lib/utils";

type PropertyCardProps = {
  property: Property;
  variant?: "grid" | "list" | "compact";
};

const badgeVariant = {
  "For Sale": "success",
  "For Rent": "warning",
  Featured: "default",
  New: "gold",
  Luxury: "gold"
} as const;

export function PropertyCard({ property, variant = "grid" }: PropertyCardProps) {
  const { toggleWishlist, toggleCompare, isWishlisted, isCompared } = usePropertyState();
  const agent = getAgentById(property.agentId);
  const wishlisted = isWishlisted(property.id);
  const compared = isCompared(property.id);
  const isList = variant === "list";

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-lg border border-borderSoft bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium",
        isList && "grid md:grid-cols-[330px_1fr]"
      )}
    >
      <div className={cn("relative overflow-hidden", isList ? "min-h-[280px]" : "aspect-[1.22]")}>
        <Image
          src={property.images[0].src}
          alt={property.images[0].alt}
          fill
          sizes={isList ? "(min-width: 768px) 330px, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <Badge variant={badgeVariant[property.badge]}>{property.badge}</Badge>
          <button
            type="button"
            onClick={() => toggleWishlist(property.id)}
            aria-label={wishlisted ? "Remove from wishlist" : "Save property"}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-white/95 text-navy-950 shadow-[0_10px_24px_rgba(6,26,45,0.22)] backdrop-blur transition duration-200 hover:scale-105 hover:border-red-200 hover:bg-red-50 hover:text-red-600",
              wishlisted && "border-red-200 bg-red-600 text-white shadow-[0_14px_30px_rgba(220,38,38,0.28)] hover:bg-red-700 hover:text-white"
            )}
          >
            <Heart
              className={cn(
                "h-5 w-5 stroke-[2.4] drop-shadow-sm transition",
                wishlisted ? "fill-current" : "fill-white/60 hover:fill-red-100"
              )}
            />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 rounded-md bg-white px-3 py-2 text-lg font-black text-navy-950 shadow-lg">
          {property.priceLabel}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-sm bg-gold-500/12 px-2.5 py-1 text-xs font-bold text-gold-500">
            {property.type}
          </span>
          <span className="text-xs font-semibold text-mutedText">{property.status}</span>
        </div>
        <h3 className="mt-3 font-heading text-2xl font-semibold leading-snug text-slateText">
          <Link href={`/properties/${property.slug}`} className="hover:text-gold-500">
            {property.title}
          </Link>
        </h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-mutedText">
          <MapPin className="h-4 w-4 text-gold-500" />
          {property.location}, {property.city}
        </p>
        <div className="mt-5 grid grid-cols-3 gap-2 border-y border-borderSoft py-4 text-sm text-slate-600">
          <span className="flex items-center gap-2">
            <BedDouble className="h-4 w-4 text-gold-500" />
            {property.beds || "-"} Beds
          </span>
          <span className="flex items-center gap-2">
            <Bath className="h-4 w-4 text-gold-500" />
            {property.baths || "-"} Baths
          </span>
          <span className="flex items-center gap-2">
            <Maximize2 className="h-4 w-4 text-gold-500" />
            {property.areaSqft.toLocaleString("en-IN")} sqft
          </span>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-mutedText">
            {agent?.image ? (
              <Image
                src={agent.image}
                alt={agent.name}
                width={34}
                height={34}
                className="rounded-full"
              />
            ) : (
              <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-100">
                <UserRound className="h-4 w-4" />
              </span>
            )}
            <span>{agent?.name ?? "Dream Habitat Advisor"}</span>
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              variant={compared ? "gold" : "outline"}
              size="icon"
              onClick={() => toggleCompare(property.id)}
              aria-label={compared ? "Remove from compare" : "Compare property"}
            >
              <Scale className="h-4 w-4" />
            </Button>
            <Button asChild size="sm">
              <Link href={`/properties/${property.slug}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
