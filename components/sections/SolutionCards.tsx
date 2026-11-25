import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";

type Item = {
  title: string;
  text: string;
  image: string;
  href: string;
  link: string;
  /** Dark pill on the photo. When set, the numbered "Solution 01" label is replaced by `kicker`. */
  badge?: string;
  kicker?: string;
  tags?: readonly string[];
};
type Props = { eyebrow: string; title: string; accent?: string; description?: string; items: readonly Item[]; tone?: "default" | "muted"; label?: string; id?: string };

/** Image-top cards ("SOLUTION 01 …") with a text link. Reusable for any category/product group. */
export function SolutionCards({ eyebrow, title, accent, description, items, tone, label = "Solution", id }: Props) {
  return (
    <Section tone={tone} id={id}>
      <SectionHeading eyebrow={eyebrow} title={title} accent={accent} description={description} />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={((i % 3) + 1) as 1 | 2 | 3} className="h-full">
            <Link href={it.href} className="group hover-lift flex h-full flex-col overflow-hidden rounded-card border border-line bg-white">
              <span className="relative block">
                <Media src={it.image} alt={it.title} zoom className="aspect-[16/10]" sizes="(min-width:1024px) 33vw, 100vw" />
                {it.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-brand-950/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                    {it.badge}
                  </span>
                )}
              </span>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-600">
                  {it.kicker ?? `${label} ${String(i + 1).padStart(2, "0")}`}
                </p>
                <h3 className="mt-3 text-xl tracking-normal text-ink">{it.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-muted">{it.text}</p>
                {it.tags && (
                  <span className="mt-4 flex flex-wrap gap-2">
                    {it.tags.map((t) => (
                      <span key={t} className="rounded-md bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700">
                        {t}
                      </span>
                    ))}
                  </span>
                )}
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600">
                  {it.link}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
