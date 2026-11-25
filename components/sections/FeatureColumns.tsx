import { BadgeCheck, Cog, Headset, Layers, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<string, LucideIcon> = { check: BadgeCheck, cog: Cog, layers: Layers, support: Headset };

type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  items: readonly { icon: string; title: string; text: string }[];
  tone?: "default" | "muted";
};

/** Centered heading + a row of icon-on-top columns. */
export function FeatureColumns({ eyebrow, title, accent, description, items, tone }: Props) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} accent={accent} description={description} />
      <span className="mx-auto mt-6 block h-1 w-16 rounded-full bg-brand-600" />
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = icons[item.icon] ?? BadgeCheck;
          return (
            <Reveal key={item.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="group text-center">
              <span className="mx-auto mb-5 grid size-14 place-items-center rounded-2xl bg-brand-100 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="size-6" />
              </span>
              <h3 className="text-lg tracking-normal text-ink">{item.title}</h3>
              <p className="mx-auto mt-2 max-w-[260px] text-sm text-ink-muted">{item.text}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
