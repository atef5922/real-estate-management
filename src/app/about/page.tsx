import Image from "next/image";
import { Award, Building2, Eye, Handshake, ShieldCheck, Target } from "lucide-react";
import { PageBanner } from "@/components/common/PageBanner";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { agents } from "@/data/agents";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Dream Habitat Realty, a premium Bangladesh real estate frontend brand focused on verified listings, advisory, and client trust."
});

const timeline = [
  ["2016", "Started with apartment advisory in Dhaka's prime neighborhoods."],
  ["2019", "Expanded into developer project marketing and commercial leasing."],
  ["2022", "Introduced structured legal verification and site visit workflows."],
  ["2026", "Prepared a backend-ready digital platform for premium agencies."]
];

const statCards = [
  { label: "Properties Listed", value: 25, suffix: "K+", icon: Building2 },
  { label: "Happy Clients", value: 18, suffix: "K+", icon: Handshake },
  { label: "Premium Projects", value: 150, suffix: "+", icon: Award },
  { label: "Years Experience", value: 10, suffix: "+", icon: ShieldCheck }
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Dream Habitat"
        title="Trusted Realty Advisory"
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Premium real estate advisory office"
        current="About Us"
      />
      <section className="bg-white py-20">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-lg shadow-premium">
            <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80" alt="Premium real estate consultation lounge" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeader
              eyebrow="Our Story"
              title="Built for High-Trust Property Decisions"
              description="Dream Habitat Realty represents a polished frontend product for Bangladeshi real estate agencies that need more than a listing grid. The experience supports consultation, verification, developer inventory, and conversion-focused lead capture."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Mission", text: "Make premium property decisions clearer, safer, and easier.", icon: Target },
                { title: "Vision", text: "Become Bangladesh's most trusted digital real estate advisory experience.", icon: Eye },
                { title: "Trust", text: "Promote verified listings, legal screening, and transparent communication.", icon: ShieldCheck },
                { title: "Partnership", text: "Help developers, agencies, and clients move with confidence.", icon: Handshake }
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-borderSoft bg-slate-50 p-5">
                  <item.icon className="h-7 w-7 text-gold-500" />
                  <h3 className="mt-4 font-heading text-2xl font-semibold text-slateText">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-mutedText">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-navy-radial py-16 text-white">
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => {
            const Icon = stat.icon;

            return (
            <div key={stat.label} className="rounded-lg border border-white/12 bg-white/8 p-6">
              <Icon className="h-7 w-7 text-gold-400" />
              <p className="mt-4 font-heading text-4xl font-semibold">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
            );
          })}
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Timeline" title="A Platform Roadmap Ready for Scale" />
          <div className="grid gap-4">
            {timeline.map(([year, text]) => (
              <div key={year} className="rounded-lg border border-borderSoft bg-white p-5 shadow-sm">
                <p className="font-heading text-3xl font-semibold text-gold-500">{year}</p>
                <p className="mt-2 text-mutedText">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container">
          <SectionHeader align="center" eyebrow="Team" title="Experienced Real Estate Advisors" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {agents.map((agent) => (
              <div key={agent.id} className="rounded-lg border border-borderSoft bg-white p-5 text-center shadow-sm">
                <Image src={agent.image} alt={agent.name} width={112} height={112} className="mx-auto rounded-full" />
                <h3 className="mt-4 font-heading text-2xl font-semibold text-slateText">{agent.name}</h3>
                <p className="text-sm text-gold-500">{agent.designation}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Northstar", "Crescent", "GreenArc", "Harborline"].map((partner) => (
              <div key={partner} className="grid h-24 place-items-center rounded-lg border border-borderSoft bg-slate-50 font-heading text-2xl font-semibold text-slate-400">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
