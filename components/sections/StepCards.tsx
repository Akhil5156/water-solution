import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Props = { eyebrow: string; title: string; accent?: string; description?: string; items: readonly { title: string; text: string }[]; tone?: "default" | "muted"; variant?: "edge" | "chip" };

/** Numbered process cards. "edge": colored top border (commercial). "chip": bordered card with a small number chip (water/air). */
export function StepCards({ eyebrow, title, accent, description, items, tone, variant = "edge" }: Props) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} accent={accent} description={description} />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="h-full">
            <div
              className={
                variant === "chip"
                  ? "group hover-lift-sm h-full rounded-2xl border border-line bg-white p-6"
                  : "hover-lift-sm h-full rounded-b-xl border-t-4 border-brand-300 bg-white p-6 shadow-lg shadow-brand-900/5"
              }
            >
              {variant === "chip" ? (
                <p className="grid size-10 place-items-center rounded-lg bg-brand-50 text-sm font-bold text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </p>
              ) : (
                <p className="text-2xl font-bold text-brand-600">{String(i + 1).padStart(2, "0")}</p>
              )}
              <h3 className={`${variant === "chip" ? "mt-5" : "mt-2"} text-base tracking-normal text-ink`}>{it.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{it.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
