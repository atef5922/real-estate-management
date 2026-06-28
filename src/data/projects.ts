import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "project-1",
    slug: "aurum-residences-gulshan",
    name: "Aurum Residences Gulshan",
    developer: "Northstar Developments",
    location: "Gulshan 2, Dhaka",
    status: "Ongoing",
    startingPrice: 28000000,
    startingPriceLabel: "৳ 2.80 Cr",
    handover: "Q4 2026",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80"
    ],
    totalUnits: 36,
    propertyTypes: ["Apartment", "Penthouse"],
    amenities: ["Concierge", "Gym", "Rooftop Garden", "EV-ready Parking", "Fire Safety"],
    description:
      "A boutique luxury tower with large-format residences, private lift lobbies, and curated shared amenities in Dhaka's most established diplomatic neighborhood."
  },
  {
    id: "project-2",
    slug: "crescent-courtyard-bashundhara",
    name: "Crescent Courtyard Bashundhara",
    developer: "Crescent Holdings",
    location: "Bashundhara R/A, Dhaka",
    status: "Ready",
    startingPrice: 18500000,
    startingPriceLabel: "৳ 1.85 Cr",
    handover: "Ready",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1400&q=80"
    ],
    totalUnits: 72,
    propertyTypes: ["Apartment"],
    amenities: ["Community Hall", "Children's Play Zone", "Generator", "Security", "Prayer Room"],
    description:
      "A family-focused ready project with practical layouts, community spaces, and strong access to Bashundhara's schools, hospitals, and retail."
  },
  {
    id: "project-3",
    slug: "harbor-view-chattogram",
    name: "Harbor View Chattogram",
    developer: "Harborline Developers",
    location: "Nasirabad, Chattogram",
    status: "Ongoing",
    startingPrice: 16500000,
    startingPriceLabel: "৳ 1.65 Cr",
    handover: "Q2 2027",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
    ],
    totalUnits: 64,
    propertyTypes: ["Apartment", "Commercial Podium"],
    amenities: ["Sky Lounge", "Gym", "Fire Safety", "Parking", "CCTV"],
    description:
      "A mixed-use address for Chattogram professionals seeking city views, efficient layouts, and a polished shared amenity package."
  },
  {
    id: "project-4",
    slug: "marine-drive-retreat-coxs-bazar",
    name: "Marine Drive Retreat",
    developer: "Blue Coast Properties",
    location: "Cox's Bazar",
    status: "Upcoming",
    startingPrice: 24000000,
    startingPriceLabel: "৳ 2.40 Cr",
    handover: "Q1 2028",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80"
    ],
    totalUnits: 48,
    propertyTypes: ["Serviced Apartment", "Penthouse"],
    amenities: ["Infinity Pool", "Concierge", "Rental Management", "Gym", "Restaurant"],
    description:
      "A sea-facing lifestyle development with serviced residences, hospitality-grade operations, and investment-friendly rental management."
  },
  {
    id: "project-5",
    slug: "greenarc-villas-sylhet",
    name: "GreenArc Villas Sylhet",
    developer: "GreenArc Properties",
    location: "Shahjalal Uposhohor, Sylhet",
    status: "Upcoming",
    startingPrice: 25500000,
    startingPriceLabel: "৳ 2.55 Cr",
    handover: "Q3 2027",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
    ],
    totalUnits: 18,
    propertyTypes: ["Villa", "Duplex"],
    amenities: ["Gated Entry", "Private Garden", "Security", "Club Lounge", "Prayer Room"],
    description:
      "An intimate villa community for Sylhet families who want privacy, greenery, and modern ownership support in a calm residential zone."
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
