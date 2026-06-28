import { PageBanner } from "@/components/common/PageBanner";
import { BlogClient } from "@/components/blog/BlogClient";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Read Bangladesh real estate insights on apartment buying, land verification, home loans, locations, and investment strategy."
});

export default function BlogPage() {
  return (
    <>
      <PageBanner
        eyebrow="Real Estate Insights"
        title="Property Journal"
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Editorial desk for property market insights"
        current="Blog"
      />
      <BlogClient />
    </>
  );
}
