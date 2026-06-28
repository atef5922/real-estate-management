"use client";

import Image from "next/image";
import { Bath, BedDouble, CalendarDays, Car, CheckCircle2, Heart, MapPin, Maximize2, Share2, ShieldCheck, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MortgageCalculator } from "@/components/home/MortgageCalculator";
import { ScheduleVisitForm } from "@/components/property/ScheduleVisitForm";
import { VideoModal } from "@/components/common/VideoModal";
import { usePropertyState } from "@/components/providers/PropertyStateProvider";
import { getAgentById } from "@/data/agents";
import type { Property } from "@/types/property";

export function PropertyDetails({ property }: { property: Property }) {
  const agent = getAgentById(property.agentId);
  const { toggleWishlist, toggleCompare, isWishlisted, isCompared } = usePropertyState();

  return (
    <section className="bg-white py-12">
      <div className="container grid gap-10 lg:grid-cols-[1fr_390px]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="gold">{property.badge}</Badge>
            <Badge variant="outline">{property.type}</Badge>
            <Badge variant="outline">{property.status}</Badge>
          </div>
          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h1 className="font-heading text-4xl font-semibold leading-tight text-slateText lg:text-5xl">
                {property.title}
              </h1>
              <p className="mt-3 flex items-center gap-2 text-mutedText">
                <MapPin className="h-5 w-5 text-gold-500" />
                {property.address}
              </p>
            </div>
            <div className="min-w-fit">
              <p className="text-3xl font-black text-navy-950">{property.priceLabel}</p>
              <div className="mt-3 flex gap-2">
                <Button type="button" variant={isWishlisted(property.id) ? "gold" : "outline"} size="sm" onClick={() => toggleWishlist(property.id)}>
                  <Heart className="h-4 w-4" />
                  Save
                </Button>
                <Button type="button" variant={isCompared(property.id) ? "gold" : "outline"} size="sm" onClick={() => toggleCompare(property.id)}>
                  <Scale className="h-4 w-4" />
                  Compare
                </Button>
                <Button type="button" variant="outline" size="sm">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: BedDouble, label: "Bedrooms", value: property.beds || "N/A" },
              { icon: Bath, label: "Bathrooms", value: property.baths || "N/A" },
              { icon: Maximize2, label: "Area", value: `${property.areaSqft.toLocaleString("en-IN")} sqft` },
              { icon: Car, label: "Garage", value: property.garage || "N/A" },
              { icon: CalendarDays, label: "Built", value: property.yearBuilt }
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-borderSoft bg-slate-50 p-4">
                <item.icon className="h-5 w-5 text-gold-500" />
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-mutedText">{item.label}</p>
                <p className="mt-1 font-semibold text-slateText">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-slate mt-10 max-w-none">
            <h2>Description</h2>
            <p>{property.description}</p>
            <h2>Key Highlights</h2>
            <ul>
              {property.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="font-heading text-3xl font-semibold text-slateText">Features & Amenities</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {property.amenities.map((amenity) => (
                <span key={amenity} className="flex items-center gap-2 rounded-md border border-borderSoft bg-white p-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-heading text-3xl font-semibold text-slateText">Floor Plan</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {property.floorPlans.map((plan) => (
                <div key={plan.title} className="overflow-hidden rounded-lg border border-borderSoft bg-white">
                  <div className="relative aspect-video">
                    <Image src={plan.image} alt={plan.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slateText">{plan.title}</p>
                    <p className="text-sm text-mutedText">{plan.size}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="mb-5 font-heading text-3xl font-semibold text-slateText">Video Tour</h2>
            <VideoModal image={property.videoImage} title={property.title} />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-slateText">Nearby Places</h2>
              <div className="mt-5 space-y-3">
                {property.nearby.map((place) => (
                  <div key={place.name} className="flex items-center justify-between rounded-md border border-borderSoft bg-white p-4">
                    <span className="font-medium text-slateText">{place.name}</span>
                    <span className="text-sm text-mutedText">{place.distance}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-semibold text-slateText">Map Preview</h2>
              <div className="mt-5 grid min-h-[260px] place-items-center rounded-lg border border-borderSoft bg-[linear-gradient(135deg,rgba(201,151,63,.18),rgba(6,26,45,.08))] p-8 text-center">
                <div>
                  <MapPin className="mx-auto h-9 w-9 text-gold-500" />
                  <p className="mt-3 font-semibold text-slateText">{property.location}, {property.city}</p>
                  <p className="mt-1 text-sm text-mutedText">
                    Lat {property.latitude}, Lng {property.longitude}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <MortgageCalculator initialPrice={property.price} />
          </div>
        </div>

        <aside className="space-y-6">
          {agent ? (
            <div className="rounded-lg border border-borderSoft bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <Image src={agent.image} alt={agent.name} width={72} height={72} className="rounded-full" />
                <div>
                  <p className="font-heading text-2xl font-semibold text-slateText">{agent.name}</p>
                  <p className="text-sm text-mutedText">{agent.designation}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-mutedText">{agent.bio}</p>
              <div className="mt-5 grid gap-2 text-sm">
                <a className="font-semibold text-navy-950 hover:text-gold-500" href={`tel:${agent.phone}`}>{agent.phone}</a>
                <a className="font-semibold text-navy-950 hover:text-gold-500" href={`mailto:${agent.email}`}>{agent.email}</a>
              </div>
              <Button asChild className="mt-5 w-full" variant="gold">
                <a href={agent.social.whatsapp}>WhatsApp Agent</a>
              </Button>
            </div>
          ) : null}
          <div className="rounded-lg border border-gold-500/30 bg-gold-500/10 p-5">
            <ShieldCheck className="h-8 w-8 text-gold-500" />
            <h2 className="mt-3 font-heading text-2xl font-semibold text-slateText">Verified Listing</h2>
            <p className="mt-2 text-sm leading-6 text-mutedText">
              Property ID {property.propertyId} is structured for backend verification, document uploads, and approval workflows.
            </p>
          </div>
          <ScheduleVisitForm propertyTitle={property.title} />
        </aside>
      </div>
    </section>
  );
}
