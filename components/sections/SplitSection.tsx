import type { ReactNode } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Callout } from "@/components/ui/Callout";
import { Media } from "@/components/ui/Media";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  paragraphs: readonly string[];
  callout?: string;
  image?: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
  /** Optional icon badge above the title (e.g. vision / mission). */
  icon?: ReactNode;
  /** 2×2 small title+text cards under the paragraphs. */
  miniCards?: readonly { title: string; text: string }[];
  /** Tick-list under the paragraphs. */
  bullets?: readonly string[];
  cta?: { label: string; href: string };
  /** Dark caption bar over the bottom of the image. */
  caption?: string;
  tone?: "default" | "muted";
  /** Render without its own <Section> wrapper (when nested inside another section/card). */
  bare?: boolean;
};

/** Image + text row. Used for Who We Are, Vision, Mission… Flip with imageSide. */
export function SplitSection({ eyebrow, title, accent, paragraphs, callout, image, imageAlt = "", imageSide = "left", icon, bullets, miniCards, cta, caption, tone, bare }: Props) {
  const body = (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={cn(imageSide === "right" && "order-2")}>
        <div className="relative">
          <Media src={image} alt={imageAlt} className="aspect-[4/3] rounded-3xl shadow-2xl shadow-brand-900/10" />
          {caption && (
            <p className="absolute inset-x-4 bottom-4 rounded-xl bg-brand-950/85 px-4 py-3 text-sm font-medium text-white backdrop-blur">{caption}</p>
          )}
        </div>
      </Reveal>
      <Reveal delay={2}>
        <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
          <span className="h-0.5 w-7 bg-brand-300" />
          {eyebrow}
        </p>
        {icon && <span className="mb-4 grid size-14 place-items-center rounded-full bg-brand-100 text-brand-600">{icon}</span>}
        <SectionHeading align="left" title={title} accent={accent} className="max-w-none [&_h2]:lg:text-5xl" />
        <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-muted">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {miniCards && (
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {miniCards.map((m) => (
              <div key={m.title} className="hover-lift-sm rounded-xl border border-line bg-white px-5 py-4">
                <h3 className="text-sm tracking-normal text-ink">{m.title}</h3>
                <p className="mt-1 text-xs text-ink-muted">{m.text}</p>
              </div>
            ))}
          </div>
        )}
        {bullets && (
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-[15px] font-medium text-ink">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <Check className="size-3.5" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        )}
        {callout && (
          <div className="mt-6">
            <Callout>{callout}</Callout>
          </div>
        )}
        {cta && (
          <Button href={cta.href} className="mt-8">
            {cta.label} <ArrowUpRight className="size-4" />
          </Button>
        )}
      </Reveal>
    </div>
  );
  return bare ? body : <Section tone={tone}>{body}</Section>;
}
