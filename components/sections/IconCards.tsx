import { Briefcase, Building2, Droplets, Factory, Gauge, Hospital, Hotel, House, Wind, Wrench, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<string, LucideIcon> = { droplets: Droplets, gauge: Gauge, wind: Wind, hospital: Hospital, home: House, factory: Factory, building: Building2, briefcase: Briefcase, hotel: Hotel, wrench: Wrench };

type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  items: readonly { icon: string; title: string; text: string }[];
  tone?: "default" | "muted";
};

/** Left-aligned icon cards (3-up). The icon chip fills with the brand color on hover. */
export function IconCards({ eyebrow, title, accent, description, items, tone }: Props) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} accent={accent} description={description} />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => {
          const Icon = icons[it.icon] ?? Droplets;
          return (
            <Reveal key={it.title} delay={((i % 3) + 1) as 1 | 2 | 3} className="h-full">
              <div className="group hover-lift-sm h-full rounded-2xl border border-line bg-white p-7">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl tracking-normal text-ink">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{it.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
