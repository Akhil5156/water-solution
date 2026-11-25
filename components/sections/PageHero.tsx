import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { VideoBg } from "@/components/ui/VideoBg";
import { Reveal } from "@/components/ui/Reveal";

type Cta = { label: string; href: string };
type Props = {
  eyebrow: string;
  /** Title content; wrap the highlighted words in <span className="text-accent">. */
  title: ReactNode;
  text: string;
  image?: string;
  /** Looping muted video background (poster = `image`). */
  video?: string;
  /** Desktop height: default 590px · medium 620px · tall 700px. */
  size?: "default" | "medium" | "tall";
  /** Outlined tag chips under the buttons. */
  chips?: readonly string[];
  /** Small uppercase line under the buttons. */
  footnote?: string;
  primary?: Cta;
  secondary?: Cta;
};

/** Inner-page hero: photo background + dark gradient, left-aligned copy. Reuse for every inner page. */
export function PageHero({ eyebrow, title, text, image, video, size = "default", chips, footnote, primary, secondary }: Props) {
  return (
    <section className={cn(
        "relative isolate flex items-center overflow-hidden bg-brand-950 text-white",
        size === "tall" ? "min-h-[560px] lg:min-h-[700px]" : size === "medium" ? "min-h-[500px] lg:min-h-[620px]" : "min-h-[460px] lg:min-h-[590px]",
      )}>
      {video ? (
        <VideoBg src={video} poster={image} className="absolute inset-0 -z-20" />
      ) : (
        <Media src={image} alt="" priority className="absolute inset-0 -z-20" sizes="100vw" />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/95 via-brand-950/85 to-brand-950/20" />

      <div className="container-page py-16">
        <Reveal delay={1}>
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <span className="h-0.5 w-7 bg-accent" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={2}><h1 className="max-w-3xl text-5xl text-white leading-[1.04] sm:text-6xl lg:text-7xl">{title}</h1></Reveal>
        <Reveal delay={3}>
          <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">{text}</p>
        </Reveal>
        {(primary || secondary) && (
          <Reveal delay={4} className="mt-8 flex flex-wrap gap-3">
            {primary && <Button href={primary.href} className="h-[52px] px-6">{primary.label} →</Button>}
            {secondary && (
              <Button href={secondary.href} variant="secondary" className="h-[52px] border-white/40 px-6 text-white hover:bg-white/10">
                {secondary.label}
              </Button>
            )}
          </Reveal>
        )}
        {chips && chips.length > 0 && (
          <Reveal delay={4}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {chips.map((c) => (
                <li key={c} className="rounded-md border border-white/30 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/90">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
        {footnote && (
          <Reveal delay={4}>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.12em] text-white/70">{footnote}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
