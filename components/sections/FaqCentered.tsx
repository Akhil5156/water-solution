import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import type { Faq } from "@/types";

type Props = { eyebrow: string; title: string; accent?: string; description?: string; items: Faq[]; tone?: "default" | "muted" };

/** Centered heading + a narrow smooth accordion. Reusable on any page. */
export function FaqCentered({ eyebrow, title, accent, description, items, tone }: Props) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} accent={accent} description={description} />
      <Reveal delay={1} className="mx-auto mt-12 max-w-3xl">
        <Accordion items={items} />
      </Reveal>
    </Section>
  );
}
