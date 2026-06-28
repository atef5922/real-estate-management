"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { projects } from "@/data/projects";

export function ProjectsClient() {
  const [status, setStatus] = useState("All");
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filtered = useMemo(
    () =>
      projects.filter((project) => {
        const matchesStatus = status === "All" || project.status === status;
        const matchesLocation = location
          ? project.location.toLowerCase().includes(location.toLowerCase())
          : true;
        const matchesPrice = maxPrice ? project.startingPrice <= Number(maxPrice) : true;
        return matchesStatus && matchesLocation && matchesPrice;
      }),
    [location, maxPrice, status]
  );

  return (
    <div className="container py-14">
      <div className="rounded-lg border border-borderSoft bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-4">
          <label className="grid gap-2 text-sm font-semibold text-slateText">
            Status
            <select value={status} onChange={(event) => setStatus(event.target.value)} className="h-11 rounded-md border border-borderSoft bg-white px-3">
              {["All", "Ongoing", "Ready", "Upcoming"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slateText md:col-span-2">
            Location
            <Input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Dhaka, Chattogram, Sylhet..." />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slateText">
            Max Starting Price
            <Input value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} type="number" placeholder="BDT" />
          </label>
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <article key={project.id} className="overflow-hidden rounded-lg border border-borderSoft bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
            <div className="relative aspect-[1.28]">
              <Image src={project.image} alt={project.name} fill sizes="(min-width: 1280px) 33vw, 100vw" className="object-cover" />
              <Badge className="absolute left-4 top-4" variant={project.status === "Ready" ? "success" : project.status === "Upcoming" ? "warning" : "gold"}>
                {project.status}
              </Badge>
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold text-gold-500">{project.developer}</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-slateText">{project.name}</h2>
              <p className="mt-3 flex items-center gap-2 text-sm text-mutedText">
                <MapPin className="h-4 w-4 text-gold-500" />
                {project.location}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 border-y border-borderSoft py-4 text-sm">
                <span>
                  <span className="block text-mutedText">Units</span>
                  <span className="font-semibold text-slateText">{project.totalUnits}</span>
                </span>
                <span>
                  <span className="block text-mutedText">Handover</span>
                  <span className="font-semibold text-slateText">{project.handover}</span>
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-bold text-navy-950">{project.startingPriceLabel}</span>
                <Button asChild size="sm">
                  <Link href={`/projects/${project.slug}`}>View Project</Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
