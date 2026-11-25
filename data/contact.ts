/** Copy for the Contact page. Phone/email/address come from lib/site.ts (single source). */
export const contactHero = {
  eyebrow: "Contact Us",
  text: "Whether you need a water-storage system, purification solution, pressure booster, hot-water system or indoor-air solution, our team is ready to help.",
};

export const contactIntro = {
  eyebrow: "Get in Touch",
  title: "We'd love to",
  accent: "hear from you.",
  description: "Reach out to our team for product information, technical assistance, sales enquiries or service support.",
};

/** Which channel cards to show; values are looked up from site.contact. */
export const contactChannels = [
  { key: "care", icon: "headset", title: "Customer Care", text: "Our friendly team is here to help." },
  { key: "sales", icon: "handshake", title: "Sales", text: "Questions or queries? Get in touch with our sales team." },
  { key: "phone", icon: "phone", title: "Phone", text: "Monday–Saturday from 10am to 6pm." },
] as const;

export const enquiryIntro = {
  eyebrow: "Send an Enquiry",
  title: "How can we help?",
  text: "Share your requirement and our team will get back to you.",
};

export const serviceNetwork = {
  eyebrow: "Service Network",
  title: "Find us",
  accent: "near you.",
  description: "We currently list service locations across multiple cities in India.",
  cities: [
    "Delhi", "Noida", "Faridabad", "Ghaziabad", "Meerut", "Gurgaon", "Lucknow", "Varanasi", "Allahabad", "Gorakhpur",
    "Kanpur", "Indore", "Bhopal", "Gwalior", "Jabalpur", "Raipur", "Bhilai", "Bilaspur", "Jammu", "Chandigarh",
    "Mohali", "Panchkula", "Jaipur", "Nagpur", "Ranchi", "Bhubaneswar", "Udaipur", "Patna",
  ],
};
