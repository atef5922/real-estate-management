"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Search } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { agents } from "@/data/agents";

export function AgentsClient() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      agents.filter((agent) =>
        [agent.name, agent.designation, agent.location, ...agent.specialties]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div className="container py-14">
      <div className="relative mx-auto max-w-2xl">
        <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by name, area, or specialty" className="h-12 pl-11" />
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-mutedText" />
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filtered.map((agent) => (
          <article key={agent.id} className="rounded-lg border border-borderSoft bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
            <Image src={agent.image} alt={agent.name} width={128} height={128} className="mx-auto rounded-full border-4 border-gold-500/20" />
            <h2 className="mt-5 font-heading text-3xl font-semibold text-slateText">{agent.name}</h2>
            <p className="mt-1 text-sm text-gold-500">{agent.designation}</p>
            <p className="mt-3 text-sm text-mutedText">{agent.location}</p>
            <div className="mt-5 space-y-2 text-sm text-mutedText">
              <a href={`tel:${agent.phone}`} className="flex items-center justify-center gap-2 hover:text-gold-500">
                <Phone className="h-4 w-4" />
                {agent.phone}
              </a>
              <a href={`mailto:${agent.email}`} className="flex items-center justify-center gap-2 hover:text-gold-500">
                <Mail className="h-4 w-4" />
                {agent.email}
              </a>
            </div>
            <div className="mt-5 flex justify-center gap-4 text-navy-950">
              <Link href={agent.social.linkedin} aria-label="LinkedIn"><FaLinkedinIn /></Link>
              <Link href={agent.social.whatsapp} aria-label="WhatsApp"><FaWhatsapp /></Link>
            </div>
            <Button asChild className="mt-6 w-full">
              <Link href={`/agents/${agent.slug}`}>View Profile</Link>
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}
