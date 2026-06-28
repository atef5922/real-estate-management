import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, projects } from "@/data/projects";
import { properties } from "@/data/properties";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({ title: "Project Not Found", description: "The requested project could not be found." });
  }

  return createMetadata({
    title: project.name,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: project.image
  });
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = properties.filter((property) => property.developer === project.developer).slice(0, 3);

  return (
    <>
      <section className="bg-slate-50 py-8">
        <div className="container">
          <Breadcrumb items={[{ label: "Projects", href: "/projects" }, { label: project.name }]} />
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-lg shadow-premium">
            <Image src={project.image} alt={project.name} fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
          </div>
          <div>
            <Badge variant={project.status === "Ready" ? "success" : project.status === "Upcoming" ? "warning" : "gold"}>{project.status}</Badge>
            <h1 className="mt-5 font-heading text-5xl font-semibold leading-tight text-slateText">{project.name}</h1>
            <p className="mt-4 flex items-center gap-2 text-mutedText">
              <MapPin className="h-5 w-5 text-gold-500" />
              {project.location}
            </p>
            <p className="mt-5 text-lg leading-8 text-mutedText">{project.description}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["Developer", project.developer],
                ["Starting Price", project.startingPriceLabel],
                ["Total Units", String(project.totalUnits)],
                ["Handover", project.handover]
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-borderSoft bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-mutedText">{label}</p>
                  <p className="mt-2 font-semibold text-slateText">{value}</p>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8" variant="gold" size="lg">
              <Link href="/contact">Request Project Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-16">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-slateText">Amenities</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.amenities.map((amenity) => (
                <span key={amenity} className="flex items-center gap-2 rounded-md border border-borderSoft bg-white p-3 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  {amenity}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-heading text-3xl font-semibold text-slateText">Project Gallery</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((image) => (
                <div key={image} className="relative aspect-video overflow-hidden rounded-lg">
                  <Image src={image} alt={`${project.name} gallery`} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {related.length ? (
        <section className="bg-white py-16">
          <div className="container">
            <h2 className="font-heading text-3xl font-semibold text-slateText">Available Units</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {related.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
