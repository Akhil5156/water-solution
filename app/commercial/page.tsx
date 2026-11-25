import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { SplitSection } from "@/components/sections/SplitSection";
import { SolutionCards } from "@/components/sections/SolutionCards";
import { SectorGrid } from "@/components/sections/SectorGrid";
import { VideoSplit } from "@/components/sections/VideoSplit";
import { InfoCards } from "@/components/sections/InfoCards";
import { StepCards } from "@/components/sections/StepCards";
import { FaqCentered } from "@/components/sections/FaqCentered";
import { CtaBanner } from "@/components/sections/CtaBanner";
import * as c from "@/data/commercial";

export const metadata: Metadata = {
  title: "Commercial Solutions",
  description: "Integrated water, pumping, HVAC and water-treatment solutions for commercial buildings, hotels, hospitals, campuses and large facilities.",
};

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow={c.commercialHero.eyebrow}
        title="Built for Business. Engineered for Performance."
        text={c.commercialHero.text}
        size="tall"
        video={c.commercialHero.video}
        image={c.commercialHero.poster}
        primary={{ label: "Explore Solutions", href: "#solutions" }}
        secondary={{ label: "Discuss Your Project", href: "/contact-us" }}
      />
      <TrustStrip items={c.commercialTrust} />
      <SplitSection {...c.commercialIntro} imageSide="right" />
      <SolutionCards {...c.commercialSolutions} tone="muted" id="solutions" />
      <SectorGrid {...c.commercialSectors} />
      <VideoSplit {...c.commercialCapability} />
      <InfoCards {...c.commercialWhy} tone="muted" />
      <StepCards {...c.commercialSteps} />
      <FaqCentered {...c.commercialFaq} tone="muted" />
      <CtaBanner tone="default" eyebrow={c.commercialCta.eyebrow} title={c.commercialCta.title} text={c.commercialCta.text} primary={{ label: "Contact Us", href: "/contact-us" }} secondary={null} />
    </>
  );
}
