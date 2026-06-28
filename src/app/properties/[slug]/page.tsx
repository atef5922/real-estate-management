import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PropertyDetails } from "@/components/property/PropertyDetails";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { SimilarProperties } from "@/components/property/SimilarProperties";
import { getPropertyBySlug, getSimilarProperties, properties } from "@/data/properties";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return createMetadata({
      title: "Property Not Found",
      description: "The requested property could not be found."
    });
  }

  return createMetadata({
    title: property.title,
    description: property.description,
    path: `/properties/${property.slug}`,
    image: property.images[0].src
  });
}

export default async function PropertyDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <>
      <section className="bg-slate-50 py-8">
        <div className="container">
          <Breadcrumb items={[{ label: "Properties", href: "/properties" }, { label: property.title }]} />
        </div>
      </section>
      <section className="bg-slate-50 pb-12">
        <div className="container">
          <PropertyGallery images={property.images} title={property.title} />
        </div>
      </section>
      <PropertyDetails property={property} />
      <SimilarProperties properties={getSimilarProperties(property)} />
    </>
  );
}
