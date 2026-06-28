import { PageBanner } from "@/components/common/PageBanner";
import { AgentsClient } from "@/components/agent/AgentsClient";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Agents",
  description:
    "Meet Dream Habitat Realty agents specializing in luxury apartments, land verification, commercial leasing, and client experience."
});

export default function AgentsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Trusted Advisors"
        title="Private Advisors"
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Professional real estate advisors in consultation"
        current="Agents"
      />
      <AgentsClient />
    </>
  );
}
