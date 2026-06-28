import { FAQSection } from "@/components/home/FAQSection";
import { PageBanner } from "@/components/common/PageBanner";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "FAQ",
  description: "Answers to common questions about verified properties, legal support, site visits, home loans, developer listings, and online booking."
});

export default function FAQPage() {
  return (
    <>
      <PageBanner
        eyebrow="FAQ"
        title="Property Answers"
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Property documents and financial planning"
        current="FAQ"
      />
      <FAQSection />
    </>
  );
}
