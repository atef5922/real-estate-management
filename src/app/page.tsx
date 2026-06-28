import { AgentsSection } from "@/components/home/AgentsSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { Categories } from "@/components/home/Categories";
import { ComparisonPreview } from "@/components/home/ComparisonPreview";
import { CTA } from "@/components/home/CTA";
import { FAQSection } from "@/components/home/FAQSection";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { Hero } from "@/components/home/Hero";
import { Locations } from "@/components/home/Locations";
import { LuxuryShowcase } from "@/components/home/LuxuryShowcase";
import { MortgageCalculator } from "@/components/home/MortgageCalculator";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { PropertySearch } from "@/components/home/PropertySearch";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { VideoTour } from "@/components/home/VideoTour";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Luxury Real Estate in Bangladesh",
  description:
    "Dream Habitat Realty is a premium real estate frontend for apartments, villas, land, commercial spaces, agents, projects, and property advisory in Bangladesh."
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <PropertySearch />
      <Stats />
      <FeaturedProperties />
      <Categories />
      <ProjectsShowcase />
      <Locations />
      <WhyChooseUs />
      <LuxuryShowcase />
      <AgentsSection />
      <section id="mortgage-calculator" className="scroll-mt-32 bg-white py-20">
        <div className="container">
          <MortgageCalculator />
        </div>
      </section>
      <ComparisonPreview />
      <VideoTour />
      <Testimonials />
      <BlogPreview />
      <FAQSection />
      <CTA />
    </>
  );
}
