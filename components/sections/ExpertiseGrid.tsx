import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutExpertise as d } from "@/data/about";
import { Reveal } from "@/components/ui/Reveal";

export function ExpertiseGrid() {
  return (
    <Section tone="muted">
      <SectionHeading align="left" eyebrow={d.eyebrow} title={d.title} accent={d.accent} description={d.description} />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {d.items.map((item, i) => (
          <Reveal key={item.title} delay={((i % 3) + 1) as 1 | 2 | 3} className="h-full">
          <div className="hover-lift-sm h-full rounded-2xl border border-line bg-white p-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-600">
              {String(i + 1).padStart(2, "0")} / {item.tag}
            </p>
            <h3 className="mt-5 text-xl tracking-normal text-ink">{item.title}</h3>
            <p className="mt-2 text-sm text-ink-muted">{item.text}</p>
          </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
