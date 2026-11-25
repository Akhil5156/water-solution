import { ArrowUpRight } from "lucide-react";
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
  listTitle: string;
  items: readonly string[];
  note?: string;
  tone?: "default" | "muted";
};

/** Left: heading + copy + button. Right: a card with a dark title bar and a two-column dotted list. */
export function ReferenceList({ eyebrow, title, accent, paragraphs, cta, listTitle, items, note, tone }: Props) {
  return (
    <Section tone={tone}>
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading align="left" eyebrow={eyebrow} title={title} accent={accent} breakAccent={false} />
          <Reveal delay={1}>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-muted">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {cta && (
              <Button href={cta.href} className="mt-8">
                {cta.label} <ArrowUpRight className="size-4" />
              </Button>
            )}
          </Reveal>
        </div>

        <Reveal delay={2}>
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-brand-900/5">
            <h3 className="bg-brand-950 px-6 py-5 text-base tracking-normal text-white">{listTitle}</h3>
            <ul className="grid sm:grid-cols-2">
              {items.map((it, i) => (
                <li key={it} className={`flex items-center gap-3 border-b border-line px-6 py-4 text-sm text-ink ${i % 2 === 0 ? "sm:border-r" : ""}`}>
                  <span className="size-2 shrink-0 rounded-full bg-brand-300" />
                  {it}
                </li>
              ))}
            </ul>
            {note && <p className="bg-brand-50 px-6 py-4 text-xs text-ink-muted">{note}</p>}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
