import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  paragraphs: readonly string[];
  cta?: { label: string; href: string };
  items: readonly { title: string; text: string }[];
};

/** Dark section: heading + copy + button on the left, a 2×2 grid of glass cards on the right. */
export function DarkFeatureSplit({ eyebrow, title, accent, paragraphs, cta, items }: Props) {
  return (
    <Section tone="dark">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading invert align="left" eyebrow={eyebrow} title={title} accent={accent} />
          <Reveal delay={1}>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/80">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {cta && (
              <Button href={cta.href} className="mt-8">
                {cta.label} <ArrowRight className="size-4" />
              </Button>
            )}
          </Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="h-full">
              <div className="h-full rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors duration-300 hover:border-white/30 hover:bg-white/10">
                <h3 className="text-base tracking-normal text-white">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
