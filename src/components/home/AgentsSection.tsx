import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { agents } from "@/data/agents";

export function AgentsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Expert Agents"
          title="Advisors for Every Property Decision"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {agents.map((agent) => (
            <article key={agent.id} className="rounded-lg border border-borderSoft bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
              <Image src={agent.image} alt={agent.name} width={112} height={112} className="mx-auto rounded-full border-4 border-gold-500/20" />
              <h3 className="mt-5 font-heading text-2xl font-semibold text-slateText">{agent.name}</h3>
              <p className="mt-1 text-sm text-gold-500">{agent.designation}</p>
              <div className="mt-4 space-y-2 text-sm text-mutedText">
                <a href={`tel:${agent.phone}`} className="flex items-center justify-center gap-2 hover:text-gold-500">
                  <Phone className="h-4 w-4" />
                  {agent.phone}
                </a>
                <a href={`mailto:${agent.email}`} className="flex items-center justify-center gap-2 hover:text-gold-500">
                  <Mail className="h-4 w-4" />
                  {agent.email}
                </a>
              </div>
              <p className="mt-4 text-sm font-semibold text-navy-950">{agent.propertyCount} active properties</p>
              <div className="mt-4 flex justify-center gap-3 text-navy-950">
                <Link href={agent.social.facebook} aria-label={`${agent.name} Facebook`}><FaFacebookF /></Link>
                <Link href={agent.social.linkedin} aria-label={`${agent.name} LinkedIn`}><FaLinkedinIn /></Link>
                <Link href={agent.social.whatsapp} aria-label={`${agent.name} WhatsApp`}><FaWhatsapp /></Link>
              </div>
              <Button asChild className="mt-5 w-full" variant="outline">
                <Link href={`/agents/${agent.slug}`}>Contact Agent</Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
