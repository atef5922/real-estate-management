import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function ProjectsShowcase() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Premium Projects"
          title="Developer Projects with Serious Finish"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <article key={project.id} className="overflow-hidden rounded-lg border border-borderSoft bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
              <div className="relative aspect-[1.35]">
                <Image src={project.image} alt={project.name} fill sizes="(min-width: 1280px) 33vw, 100vw" className="object-cover" />
                <Badge className="absolute left-4 top-4" variant={project.status === "Ready" ? "success" : project.status === "Upcoming" ? "warning" : "gold"}>
                  {project.status}
                </Badge>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-gold-500">{project.developer}</p>
                <h3 className="mt-2 font-heading text-3xl font-semibold text-slateText">{project.name}</h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-mutedText">
                  <MapPin className="h-4 w-4 text-gold-500" />
                  {project.location}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-borderSoft pt-5">
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-mutedText">Starting</span>
                    <span className="font-bold text-navy-950">{project.startingPriceLabel}</span>
                  </span>
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/projects/${project.slug}`}>View Project</Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
