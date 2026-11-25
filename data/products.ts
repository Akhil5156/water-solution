import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "stainless-steel-water-tanks",
    image: "/media/images/product-ss-tank.png",
    name: "Stainless Steel Water Tanks",
    summary: "Hygienic, durable storage built for decades of clean water.",
    categories: ["water"],
    applications: ["homes", "hotels", "offices", "malls"],
    features: ["Hygienic Storage", "Durable Construction", "Premium Finish", "Long-Term Performance"],
    featured: true,
  },
  {
    id: "2",
    slug: "ro-water-purification",
    image: "/media/images/product-ro.png",
    name: "RO & Water Purification",
    summary: "Advanced purification for safe, great-tasting drinking water.",
    categories: ["water"],
    applications: ["homes", "offices"],
    features: ["Multi-stage filtration", "Low maintenance"],
  },
  {
    id: "3",
    slug: "pressure-booster",
    image: "/media/images/product-booster.png",
    name: "Pressure Booster Systems",
    summary: "Consistent water pressure on every floor, every tap.",
    categories: ["water", "commercial"],
    applications: ["homes", "hotels", "malls"],
    features: ["Variable speed", "Energy efficient"],
  },
  {
    id: "4",
    slug: "softener-filter",
    image: "/media/images/product-softener.png",
    name: "Softeners & Filters",
    summary: "Protect pipes and appliances from hard water damage.",
    categories: ["water"],
    applications: ["homes", "hotels"],
    features: ["Scale prevention", "Automatic regeneration"],
  },
  {
    id: "5",
    slug: "heat-pumps",
    image: "/media/images/product-heat-pump.png",
    name: "Water Heat Pumps",
    summary: "Efficient hot water with a fraction of the energy bill.",
    categories: ["water", "commercial"],
    applications: ["homes", "hotels", "offices"],
    features: ["High COP", "Eco friendly"],
  },
  {
    id: "6",
    slug: "fresh-air-erv",
    image: "/media/images/product-ventilation.png",
    name: "Fresh Air & Ventilation",
    summary: "Breathe fresh, filtered air indoors with energy recovery.",
    categories: ["air"],
    applications: ["homes", "offices"],
    features: ["Energy recovery", "Filtered intake"],
  },
];

/* Query helpers — replace bodies with DB calls later; signatures stay the same. */
export const getProducts = () => products;
export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.categories.includes(category));
export const getProductsByApplication = (app: string) =>
  products.filter((p) => p.applications.includes(app));
export const getFeaturedProduct = () => products.find((p) => p.featured);
