import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  cta?: { label: string; href: string };
  video: string;
  poster?: string;
};

/** Dark section: copy on the left, a playable video (with controls) on the right. */
export function VideoSplit({ eyebrow, title, accent, description, cta, video, poster }: Props) {
  return (
    <Section tone="dark">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading invert align="left" eyebrow={eyebrow} title={title} accent={accent} description={description} />
          {cta && (
            <Reveal delay={2}>
              <Button href={cta.href} className="mt-8">
                {cta.label} <ArrowUpRight className="size-4" />
              </Button>
            </Reveal>
          )}
        </div>
        <Reveal delay={2}>
          <video
            className="aspect-video w-full rounded-2xl bg-black object-cover shadow-2xl"
            src={video}
            poster={poster}
            controls
            playsInline
            preload="none"
          />
        </Reveal>
      </div>
    </Section>
  );
}
