/**
 * Domain types. Shapes mirror what a DB table/CMS collection would return,
 * so swapping `data/*` for real queries later needs no component changes.
 */
export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  chips: string[];
  image?: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  /** A product can live in several categories (e.g. "water" and "commercial"). */
  categories: string[];
  /** Where it is used — links to Application.slug. */
  applications: string[];
  features: string[];
  image?: string;
  featured?: boolean;
};

export type Application = {
  slug: string;
  title: string;
  description: string;
  href: string;
  image?: string;
};

export type Testimonial = { name: string; initial: string; type: string; quote: string };
export type Faq = { question: string; answer: string };
