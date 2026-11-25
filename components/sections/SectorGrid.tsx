import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  items: readonly { tag: string; title: string; image: string }[];
  cta?: { label: string; href: string };
  tone?: "default" | "muted";
};

/** Photo tiles with a numbered tag + title over a dark gradient (e.g. sectors served). */
export function SectorGrid({ eyebrow, title, accent, description, items, cta, tone }: Props) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} accent={accent} description={description} />
      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
            <div className="group relative isolate aspect-[19/20] overflow-hidden rounded-2xl">
              <Media src={it.image} alt={it.title} zoom className="absolute inset-0 -z-20" sizes="(min-width:1024px) 25vw, 50vw" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-300 sm:text-[11px]">
                  {String(i + 1).padStart(2, "0")} / {it.tag}
                </p>
                <h3 className="mt-1 text-base leading-snug tracking-normal text-white sm:text-lg">{it.title}</h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      {cta && (
        <Reveal className="mt-10 text-center">
          <Button href={cta.href}>
            {cta.label} <ArrowUpRight className="size-4" />
          </Button>
        </Reveal>
      )}
    </Section>
  );
}
