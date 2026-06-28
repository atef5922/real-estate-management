import { Banknote, Building2, FileCheck2, Home, KeyRound, Landmark, Paintbrush, Scale } from "lucide-react";
import { PageBanner } from "@/components/common/PageBanner";
import { SectionHeader } from "@/components/common/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Premium Bangladesh real estate services including buy/sell, rent, project marketing, legal verification, valuation, home loans, interiors, and corporate leasing."
});

const services = [
  ["Property Buy/Sell", "End-to-end advisory for apartments, villas, land, and commercial assets.", Home],
  ["Property Rent", "Tenant and landlord support for premium residential and corporate rentals.", KeyRound],
  ["Project Marketing", "Developer-ready project pages, lead capture, launch campaigns, and inventory presentation.", Building2],
  ["Legal Verification", "Document screening, title review coordination, mutation support, and risk notes.", FileCheck2],
  ["Property Valuation", "Pricing guidance using location, asset quality, demand, and comparable inventory.", Scale],
  ["Home Loan Assistance", "Bank introductions, EMI planning, eligibility guidance, and document preparation.", Banknote],
  ["Interior Consultation", "Design handoff support for premium homes and show units.", Paintbrush],
  ["Corporate Space Leasing", "Office, showroom, retail, and floor-plate search for business teams.", Landmark]
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="Realty Services"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Real estate service planning desk"
        current="Services"
      />
      <section className="bg-white py-20">
        <div className="container">
          <SectionHeader
            align="center"
            eyebrow="What We Do"
            title="Full-Spectrum Property Support"
            description="Professional, Bangladesh-focused service lines for agencies, developers, and housing companies."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map(([title, description, Icon]) => (
              <article key={title as string} className="rounded-lg border border-borderSoft bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                <span className="grid h-12 w-12 place-items-center rounded-sm bg-gold-500/12 text-gold-500">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-heading text-2xl font-semibold text-slateText">{title as string}</h2>
                <p className="mt-3 text-sm leading-6 text-mutedText">{description as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
