export const siteConfig = {
  name: "Dream Habitat Realty",
  shortName: "Dream Habitat",
  tagline: "Premium Real Estate Solutions in Bangladesh",
  description:
    "Discover premium apartments, villas, land, and commercial properties across Bangladesh with trusted advisors, verified listings, and concierge support.",
  url: "https://dream-habitat-realty.vercel.app",
  phone: "+880 1958-645415",
  whatsapp: "https://wa.me/8801958645415",
  email: "info@dreamhabitat.com",
  address: "3rd Floor, 36-37 Umesh Datta Road, Bakshibazar, Dhaka - 1211, Bangladesh",
  hours: "Mon - Sat: 9:00 AM - 8:00 PM",
  ogImage:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Projects", href: "/projects" },
  { label: "Agents", href: "/agents" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Pages", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export const propertyMenuItems = [
  { label: "For Sale", href: "/properties?purpose=For%20Sale" },
  { label: "For Rent", href: "/properties?purpose=For%20Rent" },
  { label: "Apartments", href: "/properties?type=Apartment" },
  { label: "Villas", href: "/properties?type=Villa" },
  { label: "Commercial", href: "/properties?type=Commercial%20Building" },
  { label: "Land", href: "/properties?type=Land" },
  { label: "Luxury Homes", href: "/properties?luxury=true" }
];

export const pageLinks = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Compare Properties", href: "/compare" },
  { label: "Saved Properties", href: "/wishlist" },
  { label: "Dashboard", href: "/dashboard" }
];
