import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceNetwork as d } from "@/data/contact";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceNetwork() {
  return (
    <Section tone="dark">
      <SectionHeading invert align="left" eyebrow={d.eyebrow} title={d.title} accent={d.accent} description={d.description} />
      <Reveal as="ul" delay={1} className="mt-10 flex flex-wrap gap-3">
        {d.cities.map((city) => (
          <li key={city} className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-brand-300 hover:text-brand-300">
            {city}
          </li>
        ))}
      </Reveal>
    </Section>
  );
}
