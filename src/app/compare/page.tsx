import { CompareClient } from "@/components/property/CompareClient";
import { PageBanner } from "@/components/common/PageBanner";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Compare Properties",
  description: "Compare selected properties by price, location, type, beds, baths, area, and amenities."
});

export default function ComparePage() {
  return (
    <>
      <PageBanner
        eyebrow="Comparison"
        title="Compare Shortlist"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Commercial skyline comparison"
        current="Compare Properties"
      />
      <CompareClient />
    </>
  );
}
