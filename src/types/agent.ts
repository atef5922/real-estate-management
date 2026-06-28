export type Agent = {
  id: string;
  slug: string;
  name: string;
  designation: string;
  phone: string;
  email: string;
  image: string;
  location: string;
  experience: string;
  propertyCount: number;
  bio: string;
  languages: string[];
  specialties: string[];
  social: {
    facebook: string;
    linkedin: string;
    whatsapp: string;
  };
};
