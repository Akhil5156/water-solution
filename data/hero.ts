export type HeroSlide = {
  id: string;
  tab: string;
  icon: "drop" | "wind" | "building";
  tag: string;
  title: string;
  highlight: string;
  text: string;
  video: string;
  poster?: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  /** autoplay time in ms */
  duration: number;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "water",
    tab: "Water",
    icon: "drop",
    tag: "Water Solutions",
    title: "Complete Water Solutions.",
    highlight: "Engineered for Performance.",
    text: "",
    video: "/media/videos/hero-water.mp4",
    primary: { label: "Explore Water Solutions", href: "/water-solutions" },
    secondary: { label: "Talk to an Expert", href: "/contact-us" },
    duration: 9000,
  },
  {
    id: "air",
    tab: "Air",
    icon: "wind",
    tag: "Air Solutions",
    title: "Breathe Fresh.",
    highlight: "Live Healthier.",
    text: "Energy-recovery ventilation and fresh-air systems that bring clean, filtered air into every room — quietly and efficiently.",
    video: "/media/videos/hero-air.mp4",
    poster: "/media/images/category-air.png",
    primary: { label: "Explore Air Solutions", href: "/air-solutions" },
    secondary: { label: "Fresh Air System", href: "/products/fresh-air-erv" },
    duration: 8000,
  },
  {
    id: "projects",
    tab: "Projects",
    icon: "building",
    tag: "Commercial & Projects",
    title: "Built for Big Projects.",
    highlight: "Trusted at Scale.",
    text: "Engineered water and fresh-air systems for apartments, hotels, offices and institutions — designed, installed and serviced end to end.",
    video: "/media/videos/hero-projects.mp4",
    poster: "/media/images/app-offices.png",
    primary: { label: "View Our Projects", href: "/projects" },
    secondary: { label: "Commercial Solutions", href: "/commercial" },
    duration: 9000,
  },
];
