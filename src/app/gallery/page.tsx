import { GalleryClient } from "@/components/common/GalleryClient";
import { PageBanner } from "@/components/common/PageBanner";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gallery",
  description: "Browse a premium masonry gallery of apartments, villas, interiors, projects, and commercial real estate visuals."
});

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        eyebrow="Gallery"
        title="Property Gallery"
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Luxury penthouse interior gallery"
        current="Gallery"
      />
      <GalleryClient />
    </>
  );
}
