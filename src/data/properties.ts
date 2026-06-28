import type { Property } from "@/types/property";

const villaHero = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80";
const livingRoom = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80";
const poolVilla = "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80";
const apartmentBuilding = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80";
const balconySea = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80";
const office = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80";
const penthouse = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80";
const kitchen = "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1400&q=80";
const land = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80";
const commercial = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80";

export const properties: Property[] = [
  {
    id: "prop-1",
    propertyId: "DHR-GLS-1024",
    slug: "gulshan-lakeview-signature-apartment",
    title: "Gulshan Lakeview Signature Apartment",
    type: "Apartment",
    purpose: "For Sale",
    status: "Ready",
    badge: "For Sale",
    location: "Gulshan 2",
    city: "Dhaka",
    address: "Road 72, Gulshan 2, Dhaka",
    price: 28500000,
    priceLabel: "৳ 2,85,00,000",
    beds: 4,
    baths: 4,
    areaSqft: 2850,
    garage: 2,
    yearBuilt: 2023,
    agentId: "agent-1",
    developer: "Northstar Developments",
    images: [
      { src: livingRoom, alt: "Bright formal living room in Gulshan apartment" },
      { src: apartmentBuilding, alt: "Modern apartment tower in Gulshan" },
      { src: kitchen, alt: "Premium fitted kitchen with stone island" }
    ],
    videoImage: villaHero,
    description:
      "A refined lake-facing residence with generous family zones, imported fittings, and a quiet address near embassies, schools, and members clubs.",
    highlights: ["Lake-facing balcony", "Two-car parking", "Private lift lobby", "Ready registration support"],
    amenities: ["Lift", "Generator", "Parking", "Security", "CCTV", "Gym", "Rooftop Garden", "Gas", "WASA", "Fire Safety"],
    nearby: [
      { name: "Gulshan Lake Park", distance: "4 min" },
      { name: "American Club", distance: "6 min" },
      { name: "United Hospital", distance: "9 min" }
    ],
    floorPlans: [{ title: "Family Residence Layout", size: "2,850 sqft", image: livingRoom }],
    featured: true,
    isLuxury: true,
    latitude: 23.7925,
    longitude: 90.4078
  },
  {
    id: "prop-2",
    propertyId: "DHR-BAN-2048",
    slug: "banani-private-pool-villa",
    title: "Banani Private Pool Villa",
    type: "Villa",
    purpose: "For Rent",
    status: "Ready",
    badge: "For Rent",
    location: "Banani DOHS",
    city: "Dhaka",
    address: "Avenue 5, Banani DOHS, Dhaka",
    price: 145000,
    priceLabel: "৳ 1,45,000 /mo",
    beds: 5,
    baths: 5,
    areaSqft: 4200,
    garage: 3,
    yearBuilt: 2021,
    agentId: "agent-1",
    images: [
      { src: poolVilla, alt: "Private pool villa in Banani" },
      { src: villaHero, alt: "Luxury villa exterior at dusk" },
      { src: livingRoom, alt: "Villa lounge with garden view" }
    ],
    videoImage: poolVilla,
    description:
      "A rare furnished villa for diplomatic and corporate families, offering a private pool, garden deck, staff zone, and strong security profile.",
    highlights: ["Private pool", "Furnished option", "Staff accommodation", "Diplomatic security zone"],
    amenities: ["Parking", "Security", "CCTV", "Swimming Pool", "Generator", "Gas", "Fire Safety", "Rooftop Garden"],
    nearby: [
      { name: "Banani Club", distance: "5 min" },
      { name: "Airport Road", distance: "8 min" },
      { name: "International School Dhaka", distance: "12 min" }
    ],
    floorPlans: [{ title: "Villa Ground and First Floor", size: "4,200 sqft", image: villaHero }],
    featured: true,
    isLuxury: true,
    latitude: 23.7942,
    longitude: 90.4068
  },
  {
    id: "prop-3",
    propertyId: "DHR-BSR-3012",
    slug: "bashundhara-ra-premium-family-home",
    title: "Bashundhara R/A Premium Family Home",
    type: "Apartment",
    purpose: "New Projects",
    status: "Ongoing",
    badge: "Featured",
    location: "Bashundhara R/A",
    city: "Dhaka",
    address: "Block L, Bashundhara Residential Area, Dhaka",
    price: 35000000,
    priceLabel: "৳ 3,50,00,000",
    beds: 4,
    baths: 4,
    areaSqft: 3100,
    garage: 2,
    yearBuilt: 2025,
    agentId: "agent-2",
    developer: "Crescent Holdings",
    images: [
      { src: apartmentBuilding, alt: "Premium family apartment building in Bashundhara" },
      { src: livingRoom, alt: "Open family living space" },
      { src: kitchen, alt: "Contemporary kitchen in premium apartment" }
    ],
    videoImage: apartmentBuilding,
    description:
      "A calm residential address designed for families who need larger rooms, modern amenities, reliable utilities, and access to schools and hospitals.",
    highlights: ["Corner plot building", "Community hall", "School corridor", "Developer installment available"],
    amenities: ["Lift", "Generator", "Parking", "Security", "CCTV", "Gym", "Community Hall", "Gas", "WASA", "Fire Safety"],
    nearby: [
      { name: "Evercare Hospital", distance: "7 min" },
      { name: "North South University", distance: "9 min" },
      { name: "Jamuna Future Park", distance: "10 min" }
    ],
    floorPlans: [{ title: "Four Bedroom Plan", size: "3,100 sqft", image: livingRoom }],
    featured: true,
    isLuxury: false,
    latitude: 23.8197,
    longitude: 90.4526
  },
  {
    id: "prop-4",
    propertyId: "DHR-CXB-4477",
    slug: "cox-bazar-sea-view-penthouse",
    title: "Cox's Bazar Sea View Penthouse",
    type: "Penthouse",
    purpose: "For Sale",
    status: "Ready",
    badge: "New",
    location: "Kolatoli",
    city: "Cox's Bazar",
    address: "Marine Drive Link Road, Kolatoli, Cox's Bazar",
    price: 47500000,
    priceLabel: "৳ 4,75,00,000",
    beds: 4,
    baths: 5,
    areaSqft: 3600,
    garage: 2,
    yearBuilt: 2024,
    agentId: "agent-4",
    images: [
      { src: balconySea, alt: "Sea view balcony in Cox's Bazar penthouse" },
      { src: penthouse, alt: "Penthouse interior with floor to ceiling glass" },
      { src: livingRoom, alt: "Large entertainment lounge" }
    ],
    videoImage: balconySea,
    description:
      "A coastal trophy home with uninterrupted sea views, resort amenities, and strong short-stay rental potential for lifestyle investors.",
    highlights: ["Direct sea view", "Holiday rental potential", "Private terrace", "Concierge lobby"],
    amenities: ["Lift", "Generator", "Parking", "Security", "CCTV", "Swimming Pool", "Gym", "Fire Safety", "Rooftop Garden"],
    nearby: [
      { name: "Kolatoli Beach", distance: "3 min" },
      { name: "Laboni Point", distance: "8 min" },
      { name: "Airport", distance: "15 min" }
    ],
    floorPlans: [{ title: "Penthouse Suite Plan", size: "3,600 sqft", image: penthouse }],
    featured: true,
    isLuxury: true,
    latitude: 21.4253,
    longitude: 91.9762
  },
  {
    id: "prop-5",
    propertyId: "DHR-DHN-2206",
    slug: "dhanmondi-quiet-corner-apartment",
    title: "Dhanmondi Quiet Corner Apartment",
    type: "Apartment",
    purpose: "For Sale",
    status: "Ready",
    badge: "For Sale",
    location: "Dhanmondi",
    city: "Dhaka",
    address: "Road 12A, Dhanmondi, Dhaka",
    price: 17500000,
    priceLabel: "৳ 1,75,00,000",
    beds: 3,
    baths: 3,
    areaSqft: 1850,
    garage: 1,
    yearBuilt: 2022,
    agentId: "agent-4",
    images: [
      { src: livingRoom, alt: "Corner apartment living area in Dhanmondi" },
      { src: apartmentBuilding, alt: "Dhanmondi residential building exterior" },
      { src: kitchen, alt: "Modern kitchen in Dhanmondi home" }
    ],
    videoImage: livingRoom,
    description:
      "A practical, bright apartment near schools, hospitals, cafes, and lakeside walks, ideal for families wanting central convenience.",
    highlights: ["South-facing light", "Quiet road", "Excellent school access", "Completed utility connections"],
    amenities: ["Lift", "Generator", "Parking", "Security", "CCTV", "Gas", "WASA", "Fire Safety"],
    nearby: [
      { name: "Dhanmondi Lake", distance: "5 min" },
      { name: "Square Hospital", distance: "8 min" },
      { name: "Maple Leaf School", distance: "6 min" }
    ],
    floorPlans: [{ title: "Three Bedroom Plan", size: "1,850 sqft", image: livingRoom }],
    featured: false,
    isLuxury: false,
    latitude: 23.7461,
    longitude: 90.3742
  },
  {
    id: "prop-6",
    propertyId: "DHR-MRD-7721",
    slug: "mirpur-dohs-secure-duplex",
    title: "Mirpur DOHS Secure Duplex",
    type: "Duplex",
    purpose: "For Sale",
    status: "Ready",
    badge: "Luxury",
    location: "Mirpur DOHS",
    city: "Dhaka",
    address: "Mirpur DOHS, Dhaka",
    price: 32000000,
    priceLabel: "৳ 3,20,00,000",
    beds: 5,
    baths: 5,
    areaSqft: 3350,
    garage: 2,
    yearBuilt: 2020,
    agentId: "agent-1",
    images: [
      { src: villaHero, alt: "Secure duplex exterior in Mirpur DOHS" },
      { src: livingRoom, alt: "Duplex double height living space" },
      { src: kitchen, alt: "Family kitchen with breakfast counter" }
    ],
    videoImage: villaHero,
    description:
      "A secure duplex home with family privacy, green surroundings, and straightforward access to cantonment and business districts.",
    highlights: ["Gated community", "Double-height living", "Two kitchens", "Low-density building"],
    amenities: ["Parking", "Security", "CCTV", "Generator", "Gas", "WASA", "Rooftop Garden", "Fire Safety"],
    nearby: [
      { name: "Mirpur DOHS Mosque", distance: "4 min" },
      { name: "Cantonment Road", distance: "7 min" },
      { name: "Scholastica Mirpur", distance: "10 min" }
    ],
    floorPlans: [{ title: "Duplex Family Layout", size: "3,350 sqft", image: livingRoom }],
    featured: true,
    isLuxury: true,
    latitude: 23.833,
    longitude: 90.3828
  },
  {
    id: "prop-7",
    propertyId: "DHR-MOT-5188",
    slug: "motijheel-corporate-office-floor",
    title: "Motijheel Corporate Office Floor",
    type: "Office Space",
    purpose: "For Rent",
    status: "Ready",
    badge: "For Rent",
    location: "Motijheel",
    city: "Dhaka",
    address: "Commercial Area, Motijheel, Dhaka",
    price: 225000,
    priceLabel: "৳ 2,25,000 /mo",
    beds: 0,
    baths: 4,
    areaSqft: 5200,
    garage: 5,
    yearBuilt: 2019,
    agentId: "agent-3",
    images: [
      { src: office, alt: "Corporate office floor in Motijheel" },
      { src: commercial, alt: "Commercial tower exterior in Dhaka" },
      { src: apartmentBuilding, alt: "Lift lobby and access area" }
    ],
    videoImage: office,
    description:
      "A full-floor business address for banks, insurers, and service firms needing reception, open workstations, boardroom, and easy transit access.",
    highlights: ["Full floor", "Bank-ready layout", "High-speed lift", "Five parking slots"],
    amenities: ["Lift", "Generator", "Parking", "Security", "CCTV", "Fire Safety", "WASA"],
    nearby: [
      { name: "Bangladesh Bank", distance: "5 min" },
      { name: "Metro Rail Station", distance: "9 min" },
      { name: "Baitul Mukarram", distance: "7 min" }
    ],
    floorPlans: [{ title: "Open Office Layout", size: "5,200 sqft", image: office }],
    featured: false,
    isLuxury: false,
    latitude: 23.7337,
    longitude: 90.4172
  },
  {
    id: "prop-8",
    propertyId: "DHR-SYL-8365",
    slug: "sylhet-resort-style-villa",
    title: "Sylhet Resort Style Villa",
    type: "Villa",
    purpose: "For Sale",
    status: "Upcoming",
    badge: "New",
    location: "Shahjalal Uposhohor",
    city: "Sylhet",
    address: "Shahjalal Uposhohor, Sylhet",
    price: 26000000,
    priceLabel: "৳ 2,60,00,000",
    beds: 4,
    baths: 4,
    areaSqft: 3000,
    garage: 2,
    yearBuilt: 2026,
    agentId: "agent-2",
    developer: "GreenArc Properties",
    images: [
      { src: poolVilla, alt: "Resort style villa planned in Sylhet" },
      { src: villaHero, alt: "Contemporary villa facade" },
      { src: livingRoom, alt: "Villa interior lounge" }
    ],
    videoImage: poolVilla,
    description:
      "A boutique villa project with resort-inspired landscaping, private terraces, and a serene residential environment for Sylhet families.",
    highlights: ["Upcoming gated cluster", "Private lawn", "Flexible payment plan", "Resort landscaping"],
    amenities: ["Parking", "Security", "CCTV", "Rooftop Garden", "Generator", "Gas", "WASA", "Fire Safety"],
    nearby: [
      { name: "MAG Osmani Medical College", distance: "10 min" },
      { name: "Sylhet Airport Road", distance: "15 min" },
      { name: "Hazrat Shahjalal Mazar", distance: "13 min" }
    ],
    floorPlans: [{ title: "Villa Cluster Plan", size: "3,000 sqft", image: villaHero }],
    featured: false,
    isLuxury: true,
    latitude: 24.8949,
    longitude: 91.8687
  },
  {
    id: "prop-9",
    propertyId: "DHR-BAR-6612",
    slug: "baridhara-embassy-zone-penthouse",
    title: "Baridhara Embassy Zone Penthouse",
    type: "Penthouse",
    purpose: "For Sale",
    status: "Ready",
    badge: "Featured",
    location: "Baridhara",
    city: "Dhaka",
    address: "Diplomatic Zone, Baridhara, Dhaka",
    price: 62000000,
    priceLabel: "৳ 6,20,00,000",
    beds: 5,
    baths: 6,
    areaSqft: 4800,
    garage: 3,
    yearBuilt: 2024,
    agentId: "agent-1",
    images: [
      { src: penthouse, alt: "Baridhara penthouse lounge with glass wall" },
      { src: livingRoom, alt: "Formal drawing area in penthouse" },
      { src: kitchen, alt: "Imported kitchen in Baridhara penthouse" }
    ],
    videoImage: penthouse,
    description:
      "A discreet embassy-zone penthouse with private terrace, large entertaining spaces, and premium security protocols for elite buyers.",
    highlights: ["Private terrace", "Embassy-zone address", "Three parking bays", "Imported finishes"],
    amenities: ["Lift", "Generator", "Parking", "Security", "CCTV", "Gym", "Rooftop Garden", "Fire Safety", "Community Hall"],
    nearby: [
      { name: "Baridhara Diplomatic Zone", distance: "2 min" },
      { name: "Gulshan 2 Circle", distance: "8 min" },
      { name: "United Hospital", distance: "6 min" }
    ],
    floorPlans: [{ title: "Penthouse Entertaining Plan", size: "4,800 sqft", image: penthouse }],
    featured: true,
    isLuxury: true,
    latitude: 23.803,
    longitude: 90.421
  },
  {
    id: "prop-10",
    propertyId: "DHR-UTR-9090",
    slug: "uttara-sector-13-showroom-shop",
    title: "Uttara Sector 13 Showroom Shop",
    type: "Shop",
    purpose: "For Rent",
    status: "Ready",
    badge: "For Rent",
    location: "Uttara",
    city: "Dhaka",
    address: "Sector 13, Uttara, Dhaka",
    price: 95000,
    priceLabel: "৳ 95,000 /mo",
    beds: 0,
    baths: 2,
    areaSqft: 1250,
    garage: 1,
    yearBuilt: 2022,
    agentId: "agent-3",
    images: [
      { src: commercial, alt: "Street-facing showroom in Uttara" },
      { src: office, alt: "Retail interior ready for fit-out" },
      { src: apartmentBuilding, alt: "Mixed-use building in Uttara" }
    ],
    videoImage: commercial,
    description:
      "A visible, street-facing showroom suited to retail, clinic, lifestyle, or service brands targeting Uttara's established residential market.",
    highlights: ["Street frontage", "Signage opportunity", "Metro access", "Flexible fit-out"],
    amenities: ["Parking", "Security", "CCTV", "Generator", "Fire Safety", "WASA"],
    nearby: [
      { name: "Uttara Center Metro", distance: "6 min" },
      { name: "Rajuk College", distance: "8 min" },
      { name: "Airport", distance: "14 min" }
    ],
    floorPlans: [{ title: "Showroom Floor Plan", size: "1,250 sqft", image: office }],
    featured: false,
    isLuxury: false,
    latitude: 23.8759,
    longitude: 90.3795
  },
  {
    id: "prop-11",
    propertyId: "DHR-PUR-8140",
    slug: "purbachal-investment-ready-land",
    title: "Purbachal Investment Ready Land",
    type: "Land",
    purpose: "For Sale",
    status: "Ready",
    badge: "For Sale",
    location: "Purbachal",
    city: "Dhaka",
    address: "Sector 10, Purbachal New Town, Dhaka",
    price: 18500000,
    priceLabel: "৳ 1,85,00,000",
    beds: 0,
    baths: 0,
    areaSqft: 3600,
    garage: 0,
    yearBuilt: 2026,
    agentId: "agent-2",
    images: [
      { src: land, alt: "Ready investment land in Purbachal" },
      { src: villaHero, alt: "Potential villa design reference" },
      { src: apartmentBuilding, alt: "Future development corridor" }
    ],
    videoImage: land,
    description:
      "A properly documented residential land opportunity in a planned growth corridor with strong infrastructure upside and legal verification support.",
    highlights: ["Clear title screening", "RAJUK planned sector", "Wide approach road", "Investment corridor"],
    amenities: ["Security", "WASA", "Fire Safety"],
    nearby: [
      { name: "Purbachal Expressway", distance: "7 min" },
      { name: "International Exhibition Center", distance: "12 min" },
      { name: "Kanchan Bridge", distance: "15 min" }
    ],
    floorPlans: [{ title: "Plot Boundary Plan", size: "5 Katha", image: land }],
    featured: false,
    isLuxury: false,
    latitude: 23.8307,
    longitude: 90.5577
  },
  {
    id: "prop-12",
    propertyId: "DHR-CTG-7074",
    slug: "chattogram-nasirabad-skyline-apartment",
    title: "Chattogram Nasirabad Skyline Apartment",
    type: "Apartment",
    purpose: "For Sale",
    status: "Ongoing",
    badge: "New",
    location: "Nasirabad",
    city: "Chattogram",
    address: "Nasirabad Housing Society, Chattogram",
    price: 21500000,
    priceLabel: "৳ 2,15,00,000",
    beds: 3,
    baths: 4,
    areaSqft: 2350,
    garage: 1,
    yearBuilt: 2025,
    agentId: "agent-4",
    developer: "Harborline Developers",
    images: [
      { src: apartmentBuilding, alt: "Nasirabad skyline apartment exterior" },
      { src: livingRoom, alt: "Apartment living area with city view" },
      { src: kitchen, alt: "Contemporary kitchen in Chattogram apartment" }
    ],
    videoImage: apartmentBuilding,
    description:
      "An elevated city apartment near commercial corridors, schools, and medical facilities, built for Chattogram families who value convenience.",
    highlights: ["City view", "Developer installment", "Family-friendly layout", "Strong rental demand"],
    amenities: ["Lift", "Generator", "Parking", "Security", "CCTV", "Gym", "Gas", "WASA", "Fire Safety"],
    nearby: [
      { name: "GEC Circle", distance: "8 min" },
      { name: "Chattogram Medical College", distance: "12 min" },
      { name: "Nasirabad School Zone", distance: "5 min" }
    ],
    floorPlans: [{ title: "Three Bedroom Skyline Plan", size: "2,350 sqft", image: livingRoom }],
    featured: true,
    isLuxury: false,
    latitude: 22.377,
    longitude: 91.8213
  }
];

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function getSimilarProperties(property: Property) {
  return properties
    .filter((item) => item.id !== property.id && (item.city === property.city || item.type === property.type))
    .slice(0, 3);
}
