/** All copy for the About page. Edit here — components stay generic. */
export const aboutHero = {
  eyebrow: "About Us",
  text: "We bring together water technology, practical engineering and dependable service to create complete solutions for modern water requirements.",
  image: "/media/images/about-banner.png",
};

export const aboutStory = {
  eyebrow: "Who We Are",
  title: "Pioneering",
  accent: "Water Excellence.",
  paragraphs: [
    "We have a legacy of more than 28 years in the water-handling business, with expertise across water treatment, pumping, HVAC, firefighting, water treatment plants and plumbing applications.",
    "Our complete water solutions are supported by an in-house sales and service team together with digitized smart-service backup for customer support.",
  ],
  callout: "We move, treat and respect water — combining technology, performance and support in every solution.",
  image: "/media/images/about-story.png",
};

export const aboutWhy = {
  eyebrow: "Why Choose Us?",
  title: "Built around",
  accent: "what matters.",
  description: "More than products — we bring experience, technology, solution thinking and support together.",
  items: [
    { icon: "check", title: "Proven Experience", text: "More than 28 years of experience in water handling and related applications." },
    { icon: "cog", title: "Advanced Technology", text: "Technology-led solutions designed around changing water and air requirements." },
    { icon: "layers", title: "Complete Solutions", text: "Multiple technologies brought together through one solution-oriented partner." },
    { icon: "support", title: "Dedicated Support", text: "In-house sales and service supported by digitized smart-service capabilities." },
  ],
} as const;

export const aboutDirection = {
  eyebrow: "What We Stand For",
  title: "What drives",
  accent: "us.",
  description: "Our vision and mission guide how we develop products, solutions and customer experiences.",
  vision: {
    eyebrow: "Our Direction",
    icon: "eye",
    title: "Our",
    accent: "Vision",
    paragraphs: [
      "To build a future where water technology combines quality, performance, sustainability and better everyday experiences.",
      "We aim to continue evolving with technology while keeping customer needs, reliability and responsible water management at the heart of what we do.",
    ],
    callout: "Better technology. Better water. Better experiences.",
    image: "/media/images/about-vision.png",
  },
  mission: {
    eyebrow: "What We Do",
    icon: "target",
    title: "Our",
    accent: "Mission",
    paragraphs: [
      "To deliver reliable and complete water and air solutions through quality technology, practical engineering and dependable customer support.",
      "We focus on understanding real requirements and bringing the right technologies together to create practical, long-term solutions.",
    ],
    callout: "Technology, engineering and service — working together for better solutions.",
    image: "/media/images/about-mission.png",
  },
} as const;

export const aboutExpertise = {
  eyebrow: "Our Expertise",
  title: "Complete solutions.",
  accent: "One partner.",
  description: "We combine multiple technologies across the water journey to address residential, commercial and project requirements.",
  items: [
    { tag: "Storage", title: "Stainless Steel Water Tanks", text: "Hygienic and durable water storage solutions." },
    { tag: "Purification", title: "RO & Water Purification", text: "Water treatment and purification solutions for cleaner water." },
    { tag: "Pressure", title: "Pressure Booster Systems", text: "Reliable solutions for improved pressure and water flow." },
    { tag: "Filtration", title: "Filters & Softeners", text: "Water quality and treatment solutions designed around system needs." },
    { tag: "Hot Water", title: "Heat Pump Systems", text: "Modern hot-water solutions focused on efficient operation." },
    { tag: "Air", title: "Ventilation Solutions", text: "Indoor fresh-air solutions for comfortable spaces." },
  ],
};

export const aboutTech = {
  eyebrow: "Water & Air Technology",
  title: "Better water.",
  accent: "Better spaces.",
  description: "We bring water and air solutions together to support healthier and more dependable environments.",
  cards: [
    { tag: "Water Solutions", title: "Better Water.", text: "Storage, purification, pressure, filtration and hot-water solutions designed around your needs.", href: "/water-solutions", image: "/media/images/about-water.png" },
    { tag: "Air Solutions", title: "Healthier Air.", text: "Ventilation and indoor fresh-air solutions designed for modern spaces.", href: "/air-solutions", image: "/media/images/about-air.png" },
  ],
};

export const aboutStats = [
  { value: "30+", label: "Years in Business" },
  { value: "85,000+", label: "Happy Customers" },
  { value: "5+", label: "Complete Solutions" },
  { value: "1997", label: "Serving Since" },
];
