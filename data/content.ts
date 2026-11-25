import type { Application, Category, Faq, Testimonial } from "@/types";

export const categories: Category[] = [
  {
    slug: "water",
    image: "/media/images/category-water.png",
    name: "Water Solutions",
    tagline: "Clean, pure, pressurised water — start to finish.",
    description: "Everything from storage to purification, built to work together.",
    chips: ["SS Tanks", "RO", "Alkaline", "Booster", "Softener", "Heat Pump"],
  },
  {
    slug: "air",
    image: "/media/images/category-air.png",
    name: "Air Solutions",
    tagline: "Fresh indoor air for healthier living.",
    description: "Energy-recovery ventilation and fresh-air systems for every space.",
    chips: ["Fresh Air ERV", "Ceiling Mount", "Wall Mount", "Ventilation Fans"],
  },
];

export const applications: Application[] = [
  { slug: "homes", image: "/media/images/app-homes.png", title: "Modern Homes", description: "Comfort and clean water for every family.", href: "/water-solutions" },
  { slug: "hotels", image: "/media/images/app-hotels.png", title: "Hotels & Hospitality", description: "Reliable systems for guest-ready service.", href: "/commercial" },
  { slug: "offices", image: "/media/images/app-offices.png", title: "Offices & IT Parks", description: "Scalable water and air for large teams.", href: "/commercial" },
  { slug: "malls", image: "/media/images/app-malls.png", title: "Malls & Complexes", description: "Heavy-duty performance at project scale.", href: "/projects" },
];

export const whyUs = [
  { title: "30+ Years Experience", text: "Decades of water & air expertise behind every product." },
  { title: "Complete Solutions", text: "One partner from storage to purification to delivery." },
  { title: "Professional Support", text: "Expert guidance from selection to installation." },
  { title: "Smart Service", text: "App-enabled service and quick after-sales response." },
];

export const steps = [
  { title: "Store", text: "Hygienic stainless steel storage keeps water fresh." },
  { title: "Purify", text: "RO and filtration remove impurities and hardness." },
  { title: "Pressurise", text: "Boosters deliver steady pressure to every outlet." },
  { title: "Experience", text: "Enjoy pure, soft, comfortable water at home." },
];

export const stats = [
  { value: "30+", label: "Years in Business" },
  { value: "85,000+", label: "Happy Customers" },
  { value: "10+", label: "Product Ranges" },
  { value: "1997", label: "Serving Since" },
];

export const testimonials: Testimonial[] = [
  { name: "Rohan", initial: "R", type: "Residential", quote: "Installation was smooth and the water quality at home improved immediately." },
  { name: "Harpreet", initial: "H", type: "Home Solution", quote: "Their team recommended exactly the right booster for our building." },
  { name: "Priya", initial: "P", type: "Project Customer", quote: "Professional from quotation to commissioning. Great after-sales support." },
];

export const faqs: Faq[] = [
  { question: "What water solutions do you provide?", answer: "Stainless steel tanks, RO & purification, alkaline water, pressure boosters, softeners & filters and water heat pumps." },
  { question: "Can you provide complete project solutions?", answer: "Yes. We design, supply and commission complete water and air systems for residential and commercial projects." },
  { question: "How do I choose the right water pressure booster?", answer: "It depends on building height, number of outlets and flow needs. Send us an enquiry and our experts will size it for you." },
  { question: "Do you provide service support?", answer: "Yes — installation, annual maintenance and quick service response through our support team." },
  { question: "How can I contact you?", answer: "Use the enquiry form, call our sales line or email us. We reply within one working day." },
];
