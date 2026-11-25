import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <Section tone="muted">
      <SectionHeading eyebrow="Customer Experience" title="What our" accent="customers say." />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={((i % 3) + 1) as 1 | 2 | 3} className="h-full">
          <figure className="hover-lift-sm flex h-full flex-col rounded-card border border-line bg-white p-7">
            <div className="mb-4 flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <blockquote className="flex-1 font-display text-lg leading-relaxed text-ink">“{t.quote}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-brand-600 font-semibold text-white">{t.initial}</span>
              <span className="text-sm">
                <span className="block font-semibold text-ink">{t.name}</span>
                <span className="text-ink-muted">{t.type}</span>
              </span>
            </figcaption>
          </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
