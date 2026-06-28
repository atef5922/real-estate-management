export type PropertyPurpose = "For Sale" | "For Rent" | "New Projects";

export type PropertyType =
  | "Apartment"
  | "Duplex"
  | "Villa"
  | "Land"
  | "Office Space"
  | "Shop"
  | "Commercial Building"
  | "Penthouse";

export type PropertyStatus = "Ready" | "Ongoing" | "Upcoming" | "Sold" | "Rented";

export type PropertyImage = {
  src: string;
  alt: string;
};

export type NearbyPlace = {
  name: string;
  distance: string;
};

export type FloorPlan = {
  title: string;
  size: string;
  image: string;
};

export type Property = {
  id: string;
  propertyId: string;
  slug: string;
  title: string;
  type: PropertyType;
  purpose: PropertyPurpose;
  status: PropertyStatus;
  badge: "For Sale" | "For Rent" | "Featured" | "New" | "Luxury";
  location: string;
  city: string;
  address: string;
  price: number;
  priceLabel: string;
  beds: number;
  baths: number;
  areaSqft: number;
  garage: number;
  yearBuilt: number;
  agentId: string;
  developer?: string;
  images: PropertyImage[];
  videoImage: string;
  description: string;
  highlights: string[];
  amenities: string[];
  nearby: NearbyPlace[];
  floorPlans: FloorPlan[];
  featured: boolean;
  isLuxury: boolean;
  latitude: number;
  longitude: number;
};
