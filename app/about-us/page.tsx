import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SplitSection } from "@/components/sections/SplitSection";
import { FeatureColumns } from "@/components/sections/FeatureColumns";
import { VisionMission } from "@/components/sections/VisionMission";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";
import { WaterAirCards } from "@/components/sections/WaterAirCards";
import { StatsBand } from "@/components/sections/StatsBand";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { aboutHero, aboutStats, aboutStory, aboutWhy } from "@/data/about";

export const metadata: Metadata = {
  title: "About Us",
  description: "More than 28 years of water-handling expertise — complete water and air solutions backed by in-house sales and service.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutHero.eyebrow}
        title={
          <>
            Technology.
            <br />
            <span className="text-accent">Experience.</span> Trust.
          </>
        }
        text={aboutHero.text}
        image={aboutHero.image}
        primary={{ label: "Explore Our Solutions", href: "/water-solutions" }}
        secondary={{ label: "Talk to an Expert", href: "/contact-us" }}
      />
      <SplitSection {...aboutStory} imageSide="left" />
      <FeatureColumns {...aboutWhy} tone="muted" />
      <VisionMission />
      <ExpertiseGrid />
      <WaterAirCards />
      <StatsBand stats={aboutStats} />
      <CtaBanner title="Let's build the right solution together." text="From a single water requirement to a complete water and air solution, talk to our team." />
    </>
  );
}
