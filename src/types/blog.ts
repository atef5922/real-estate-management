export type Blog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  image: string;
  tags: string[];
  sections: {
    heading: string;
    body: string;
  }[];
};
