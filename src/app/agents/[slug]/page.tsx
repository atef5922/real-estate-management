import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, Phone, Star } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";
import { agents, getAgentBySlug } from "@/data/agents";
import { properties } from "@/data/properties";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return agents.map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    return createMetadata({ title: "Agent Not Found", description: "The requested agent could not be found." });
  }

  return createMetadata({
    title: agent.name,
    description: agent.bio,
    path: `/agents/${agent.slug}`,
    image: agent.image
  });
}

export default async function AgentDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    notFound();
  }

  const listings = properties.filter((property) => property.agentId === agent.id);

  return (
    <>
      <section className="bg-slate-50 py-8">
        <div className="container">
          <Breadcrumb items={[{ label: "Agents", href: "/agents" }, { label: agent.name }]} />
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="container grid gap-10 lg:grid-cols-[360px_1fr]">
          <aside className="rounded-lg border border-borderSoft bg-white p-6 text-center shadow-premium">
            <Image src={agent.image} alt={agent.name} width={180} height={180} className="mx-auto rounded-full border-4 border-gold-500/20" />
            <h1 className="mt-6 font-heading text-4xl font-semibold text-slateText">{agent.name}</h1>
            <p className="mt-2 text-gold-500">{agent.designation}</p>
            <div className="mt-5 flex justify-center gap-1 text-gold-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div className="mt-6 space-y-3 text-sm text-mutedText">
              <a href={`tel:${agent.phone}`} className="flex items-center justify-center gap-2 hover:text-gold-500">
                <Phone className="h-4 w-4" />
                {agent.phone}
              </a>
              <a href={`mailto:${agent.email}`} className="flex items-center justify-center gap-2 hover:text-gold-500">
                <Mail className="h-4 w-4" />
                {agent.email}
              </a>
            </div>
            <div className="mt-6 flex justify-center gap-4 text-navy-950">
              <Link href={agent.social.facebook} aria-label="Facebook"><FaFacebookF /></Link>
              <Link href={agent.social.linkedin} aria-label="LinkedIn"><FaLinkedinIn /></Link>
              <Link href={agent.social.whatsapp} aria-label="WhatsApp"><FaWhatsapp /></Link>
            </div>
            <Button asChild className="mt-6 w-full" variant="gold">
              <a href={agent.social.whatsapp}>WhatsApp Agent</a>
            </Button>
          </aside>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-500">Agent Profile</p>
            <h2 className="mt-3 font-heading text-4xl font-semibold text-slateText">Premium Advisory for Bangladesh Real Estate</h2>
            <p className="mt-5 text-base leading-8 text-mutedText">{agent.bio}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Experience", agent.experience],
                ["Properties", `${agent.propertyCount}+`],
                ["Location", agent.location]
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-borderSoft bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-mutedText">{label}</p>
                  <p className="mt-2 font-semibold text-slateText">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-heading text-2xl font-semibold text-slateText">Specialties</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {agent.specialties.map((item) => (
                    <span key={item} className="rounded-sm bg-gold-500/12 px-3 py-1.5 text-sm font-semibold text-gold-500">{item}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-slateText">Languages</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {agent.languages.map((item) => (
                    <span key={item} className="rounded-sm bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slateText">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="font-heading text-3xl font-semibold text-slateText">Listed Properties</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {listings.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
