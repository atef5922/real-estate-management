import type { Agent } from "@/types/agent";

export const agents: Agent[] = [
  {
    id: "agent-1",
    slug: "farhan-ahmed",
    name: "Farhan Ahmed",
    designation: "Senior Property Consultant",
    phone: "+880 17 1188 4422",
    email: "farhan@dreamhabitat.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Gulshan, Dhaka",
    experience: "9 Years",
    propertyCount: 42,
    bio: "Farhan advises high-net-worth families, expatriates, and developers on premium apartments, penthouses, and resale assets in Dhaka's prime neighborhoods.",
    languages: ["English", "Bangla", "Hindi"],
    specialties: ["Luxury Apartments", "Developer Projects", "Negotiation"],
    social: {
      facebook: "#",
      linkedin: "#",
      whatsapp: "https://wa.me/8801711884422"
    }
  },
  {
    id: "agent-2",
    slug: "nusrat-jahan",
    name: "Nusrat Jahan",
    designation: "Land & Legal Verification Advisor",
    phone: "+880 18 2266 5511",
    email: "nusrat@dreamhabitat.com",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "Bashundhara R/A, Dhaka",
    experience: "7 Years",
    propertyCount: 31,
    bio: "Nusrat specializes in land acquisition, document screening, mutation guidance, and developer due diligence for families and investors.",
    languages: ["English", "Bangla"],
    specialties: ["Land", "Legal Review", "Investment Advisory"],
    social: {
      facebook: "#",
      linkedin: "#",
      whatsapp: "https://wa.me/8801822665511"
    }
  },
  {
    id: "agent-3",
    slug: "mahmudul-karim",
    name: "Mahmudul Karim",
    designation: "Commercial Leasing Specialist",
    phone: "+880 16 3344 9012",
    email: "mahmudul@dreamhabitat.com",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    location: "Banani, Dhaka",
    experience: "11 Years",
    propertyCount: 58,
    bio: "Mahmudul helps brands, banks, and fast-growing companies secure offices, showrooms, and corporate floors in strategic business locations.",
    languages: ["English", "Bangla"],
    specialties: ["Office Space", "Retail", "Corporate Leasing"],
    social: {
      facebook: "#",
      linkedin: "#",
      whatsapp: "https://wa.me/8801633449012"
    }
  },
  {
    id: "agent-4",
    slug: "sadia-rahman",
    name: "Sadia Rahman",
    designation: "Client Experience Lead",
    phone: "+880 19 7788 3021",
    email: "sadia@dreamhabitat.com",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    location: "Uttara, Dhaka",
    experience: "6 Years",
    propertyCount: 27,
    bio: "Sadia coordinates private viewings, financing conversations, and handover support so buyers can move from shortlist to ownership with confidence.",
    languages: ["English", "Bangla"],
    specialties: ["Site Visits", "Home Loans", "Client Care"],
    social: {
      facebook: "#",
      linkedin: "#",
      whatsapp: "https://wa.me/8801977883021"
    }
  }
];

export function getAgentBySlug(slug: string) {
  return agents.find((agent) => agent.slug === slug);
}

export function getAgentById(id: string) {
  return agents.find((agent) => agent.id === id);
}
