import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Props = { eyebrow: string; title: string; accent?: string; description?: string; items: readonly { title: string; text: string }[]; tone?: "default" | "muted" };

/** Four plain text cards (no icons) under a centered heading. */
export function InfoCards({ eyebrow, title, accent, description, items, tone }: Props) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} accent={accent} description={description} />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="h-full">
            <div className="hover-lift-sm h-full rounded-2xl border border-line bg-white p-6">
              <h3 className="text-base tracking-normal text-ink">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{it.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
