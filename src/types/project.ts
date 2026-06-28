export type ProjectStatus = "Ongoing" | "Ready" | "Upcoming";

export type Project = {
  id: string;
  slug: string;
  name: string;
  developer: string;
  location: string;
  status: ProjectStatus;
  startingPrice: number;
  startingPriceLabel: string;
  handover: string;
  image: string;
  gallery: string[];
  totalUnits: number;
  propertyTypes: string[];
  amenities: string[];
  description: string;
};
