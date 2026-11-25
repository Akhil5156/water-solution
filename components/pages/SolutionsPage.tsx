import { PageHero } from "@/components/sections/PageHero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { SplitSection } from "@/components/sections/SplitSection";
import { SolutionCards } from "@/components/sections/SolutionCards";
import { StepCards } from "@/components/sections/StepCards";
import { VideoFeature } from "@/components/sections/VideoFeature";
import { IconCards } from "@/components/sections/IconCards";
import { DarkFeatureSplit } from "@/components/sections/DarkFeatureSplit";
import { FaqCentered } from "@/components/sections/FaqCentered";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/lib/site";
import type { SolutionsPageData } from "@/types/solutions";

/** One template for the Water and Air category pages — pass different data. */
export function SolutionsPage({ data: d }: { data: SolutionsPageData }) {
  return (
    <>
      <PageHero
        size="medium"
        eyebrow={d.hero.eyebrow}
        title={
          <>
            {d.hero.title} <span className="block text-accent">{d.hero.accent}</span>
          </>
        }
        text={d.hero.text}
        video={d.hero.video}
        image={d.hero.poster}
        primary={d.hero.primary}
        secondary={d.hero.secondary}
        chips={d.hero.chips}
      />
      <TrustStrip variant="band" items={d.facts} />
      <SplitSection {...d.intro} imageSide="right" tone="muted" />
      <SolutionCards {...d.range} id="range" label="Product" />
      <StepCards {...d.steps} variant="chip" tone="muted" />
      <VideoFeature {...d.feature} />
      <IconCards {...d.uses} />
      <DarkFeatureSplit {...d.why} />
      <FaqCentered {...d.faq} />
      <CtaBanner
        tone="muted"
        eyebrow={d.cta.eyebrow}
        title={d.cta.title}
        text={d.cta.text}
        primary={{ label: "Contact Us", href: "/contact-us" }}
        secondary={{ label: "Email Our Team", href: `mailto:${site.contact.email}` }}
      />
    </>
  );
}
