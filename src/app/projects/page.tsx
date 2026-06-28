import { PageBanner } from "@/components/common/PageBanner";
import { ProjectsClient } from "@/components/project/ProjectsClient";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Explore ready, ongoing, and upcoming premium real estate projects in Bangladesh with developer details and backend-ready project data."
});

export default function ProjectsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Developer Inventory"
        title="Signature Projects"
        image="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Modern luxury residential development"
        current="Projects"
      />
      <ProjectsClient />
    </>
  );
}
