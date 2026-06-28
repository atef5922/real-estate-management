import type { Blog } from "@/types/blog";

export const blogs: Blog[] = [
  {
    id: "blog-1",
    slug: "real-estate-investment-in-bangladesh",
    title: "Real Estate Investment in Bangladesh: What Premium Buyers Should Watch",
    excerpt:
      "A practical look at location quality, title safety, rental demand, and developer strength for buyers planning long-term property investments.",
    category: "Investment",
    publishedAt: "June 18, 2026",
    readTime: "6 min read",
    author: {
      name: "Farhan Ahmed",
      role: "Senior Property Consultant",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    tags: ["Investment", "Dhaka", "Bangladesh"],
    sections: [
      {
        heading: "Start With Location Resilience",
        body: "Premium property decisions in Bangladesh should begin with access, utility reliability, school and hospital proximity, and long-term neighborhood planning. A slightly higher entry price in a resilient location often protects value better than a bargain in an uncertain corridor."
      },
      {
        heading: "Review Developer Track Record",
        body: "Completion history, handover quality, utility connections, and association management matter as much as the brochure. Buyers should inspect completed projects before committing to an under-construction asset."
      },
      {
        heading: "Price Is Only One Part Of Risk",
        body: "Legal clarity, mutation status, approval documents, and realistic rental demand should sit beside price negotiation. A verified asset can save months of stress after purchase."
      }
    ]
  },
  {
    id: "blog-2",
    slug: "apartment-buying-guide-dhaka",
    title: "Apartment Buying Guide for Dhaka Families",
    excerpt:
      "From floor plans to parking, utility backup, association rules, and school access, here is what families should check before booking.",
    category: "Buying Guide",
    publishedAt: "June 10, 2026",
    readTime: "7 min read",
    author: {
      name: "Sadia Rahman",
      role: "Client Experience Lead",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    tags: ["Apartment", "Family", "Dhaka"],
    sections: [
      {
        heading: "Think Beyond Square Feet",
        body: "A good apartment layout feels larger because circulation, light, storage, and privacy are planned well. Compare room dimensions and furniture placement rather than relying only on total area."
      },
      {
        heading: "Check Daily Convenience",
        body: "Parking entry, lift capacity, generator coverage, waste management, and security desk operation shape everyday living more than many decorative finishes."
      },
      {
        heading: "Document The Handover Standard",
        body: "Ask for written confirmation of fittings, utility meters, common area responsibilities, defect liability, and expected association charges."
      }
    ]
  },
  {
    id: "blog-3",
    slug: "land-buying-legal-checklist",
    title: "Land Buying Legal Checklist in Bangladesh",
    excerpt:
      "A clear checklist for title review, mutation, khatian, tax receipts, possession, road access, and approval considerations before buying land.",
    category: "Legal",
    publishedAt: "May 29, 2026",
    readTime: "8 min read",
    author: {
      name: "Nusrat Jahan",
      role: "Land & Legal Verification Advisor",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    tags: ["Land", "Legal", "Due Diligence"],
    sections: [
      {
        heading: "Verify Chain Of Title",
        body: "Review deed history, seller ownership, inheritance documents where relevant, and whether the land has disputes, mortgages, or unregistered interests."
      },
      {
        heading: "Match Paper And Possession",
        body: "Khatian, mutation, tax receipts, plot boundary, road access, and possession should align before payment milestones are released."
      },
      {
        heading: "Use Professional Review",
        body: "A qualified legal review and physical survey are small costs compared with the financial risk of unclear land ownership."
      }
    ]
  },
  {
    id: "blog-4",
    slug: "home-loan-tips-bangladesh",
    title: "Home Loan Tips for Premium Property Buyers",
    excerpt:
      "How to compare bank offers, down payment requirements, tenure, floating rates, and documentation before finalizing a home loan.",
    category: "Finance",
    publishedAt: "May 15, 2026",
    readTime: "5 min read",
    author: {
      name: "Sadia Rahman",
      role: "Client Experience Lead",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    tags: ["Home Loan", "Finance", "EMI"],
    sections: [
      {
        heading: "Compare Total Cost",
        body: "Interest rate matters, but processing fees, insurance, early settlement charges, and required account relationships can affect the actual cost."
      },
      {
        heading: "Keep EMI Comfortable",
        body: "A premium home should not create monthly pressure. Buyers should stress-test EMI against future school costs, maintenance, and rate adjustments."
      },
      {
        heading: "Prepare Documents Early",
        body: "Income proof, tax documents, bank statements, booking papers, and property approval documents should be reviewed before signing deadlines."
      }
    ]
  },
  {
    id: "blog-5",
    slug: "best-areas-to-buy-property-in-dhaka",
    title: "Best Areas to Buy Property in Dhaka in 2026",
    excerpt:
      "A neighborhood-focused overview of Gulshan, Banani, Bashundhara, Dhanmondi, Uttara, Mirpur DOHS, and Purbachal for different buyer goals.",
    category: "Locations",
    publishedAt: "April 30, 2026",
    readTime: "9 min read",
    author: {
      name: "Mahmudul Karim",
      role: "Commercial Leasing Specialist",
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
    tags: ["Dhaka", "Neighborhoods", "Buying"],
    sections: [
      {
        heading: "Prime Lifestyle Locations",
        body: "Gulshan, Banani, and Baridhara remain strong for lifestyle buyers, expatriate rental demand, security, and diplomatic proximity."
      },
      {
        heading: "Family Value Corridors",
        body: "Bashundhara, Dhanmondi, Uttara, and Mirpur DOHS offer different blends of schools, hospitals, space, and budget control."
      },
      {
        heading: "Growth-Oriented Plays",
        body: "Purbachal and selected transit-linked corridors appeal to long-term investors who can tolerate infrastructure timelines."
      }
    ]
  }
];

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}
