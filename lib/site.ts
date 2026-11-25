/** Single source of truth for brand + navigation. Swap values here, not in components. */
export const site = {
  name: "Aquavia",
  copyrightYear: 2026,
  tagline: "Flow of Life",
  description:
    "Complete water and indoor-air solutions for homes, businesses and large projects.",
  contact: {
    phone: "+91 00000 00000",
    phoneHref: "tel:+910000000000",
    email: "sales@example.com",
    salesLabel: "Sales",
    customerCareEmail: "care@example.com",
    officeLines: ["Your office address,", "City – 000000,", "India"],
    mapUrl: "https://maps.google.com/?q=your+office+address",
    customerCare: "+91 00000 00000",
    customerCareHref: "tel:+910000000000",
    hours: "Mon – Sat, 10:00 AM – 6:00 PM",
    address: "Your office address, City – 000000",
  },
  social: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

export type NavIcon = "tank" | "drop" | "drops" | "gauge" | "filter" | "flame" | "wind" | "fan";
export type NavItem = { label: string; href: string; icon?: NavIcon; children?: NavItem[] };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Water Solutions",
    href: "/water-solutions",
    children: [
      { label: "Stainless Steel Tanks", href: "/products/stainless-steel-water-tanks", icon: "tank" },
      { label: "RO & Purification", href: "/products/ro-water-purification", icon: "drop" },
      { label: "Alkaline Water", href: "/products/alkaline-water", icon: "drops" },
      { label: "Pressure Booster", href: "/products/pressure-booster", icon: "gauge" },
      { label: "Softener & Filter", href: "/products/softener-filter", icon: "filter" },
      { label: "Water Heat Pump", href: "/products/heat-pumps", icon: "flame" },
    ],
  },
  {
    label: "Air Solutions",
    href: "/air-solutions",
    children: [
      { label: "Fresh Air System (ERV)", href: "/products/fresh-air-erv", icon: "wind" },
      { label: "Ventilation System", href: "/products/ventilation-system", icon: "fan" },
    ],
  },
  { label: "Commercial", href: "/commercial" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact-us" },
];

export const footerNav = {
  water: mainNav.find((n) => n.label === "Water Solutions")!.children!,
  airCompany: [
    { label: "Fresh Air System (ERV)", href: "/products/fresh-air-erv" },
    { label: "Ventilation System", href: "/products/ventilation-system" },
    { label: "About Us", href: "/about-us" },
    { label: "Commercial", href: "/commercial" },
    { label: "Projects", href: "/projects" },
    { label: "Partners", href: "/partners" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "About", href: "/about-us" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact-us" },
  ],
};
