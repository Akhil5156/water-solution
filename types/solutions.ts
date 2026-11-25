export type Cta = { label: string; href: string };

export type CategoryItem = {
  /** Small dark label on the photo, e.g. "Water Storage". */
  badge: string;
  /** Small coloured line above the title. */
  kicker: string;
  title: string;
  text: string;
  image: string;
  tags: string[];
  href: string;
  link: string;
};

/** Everything a Water / Air category page needs. Both pages render from this one shape. */
export type SolutionsPageData = {
  seo: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    text: string;
    video: string;
    poster: string;
    primary: Cta;
    secondary: Cta;
    chips: string[];
  };
  facts: { title: string; text: string }[];
  intro: {
    eyebrow: string;
    title: string;
    accent: string;
    paragraphs: string[];
    miniCards: { title: string; text: string }[];
    image: string;
    caption: string;
  };
  range: { eyebrow: string; title: string; accent: string; description: string; items: CategoryItem[] };
  steps: { eyebrow: string; title: string; accent: string; description: string; items: { title: string; text: string }[] };
  feature: { video: string; poster: string };
  uses: { eyebrow: string; title: string; accent: string; description: string; items: { icon: string; title: string; text: string }[] };
  why: { eyebrow: string; title: string; accent: string; paragraphs: string[]; cta: Cta; items: { title: string; text: string }[] };
  faq: { eyebrow: string; title: string; accent: string; description: string; items: { question: string; answer: string }[] };
  cta: { eyebrow: string; title: string; text: string };
};
