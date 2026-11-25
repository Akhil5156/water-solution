import { Eye, Target } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SplitSection } from "./SplitSection";
import { aboutDirection as d } from "@/data/about";

export function VisionMission() {
  return (
    <Section>
      <SectionHeading align="left" eyebrow={d.eyebrow} title={d.title} accent={d.accent} description={d.description} />
      <div className="mt-12 space-y-8 rounded-[2rem] bg-surface-muted p-6 sm:p-10 lg:space-y-16 lg:p-14">
        <SplitSection bare imageSide="right" {...d.vision} icon={<Eye className="size-6" />} />
        <SplitSection bare imageSide="left" {...d.mission} icon={<Target className="size-6" />} />
      </div>
    </Section>
  );
}
