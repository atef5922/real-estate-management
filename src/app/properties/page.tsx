import { PageBanner } from "@/components/common/PageBanner";
import { PropertiesClient } from "@/components/property/PropertiesClient";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Properties",
  description:
    "Browse premium Bangladeshi properties for sale, rent, and new projects with advanced filters, grid/list views, saved homes, and comparison."
});

export default function PropertiesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Verified Listings"
        title="Premium Properties"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Luxury apartment interior"
        current="Properties"
      />
      <PropertiesClient />
    </>
  );
}
