"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Building2, ChevronLeft, ChevronRight, Droplet, Wind, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { HeroSlide } from "@/data/hero";

const icons: Record<HeroSlide["icon"], LucideIcon> = { drop: Droplet, wind: Wind, building: Building2 };

/** Auto-advancing hero carousel: video backgrounds, tab progress bars, prev/next arrows. */
export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const count = slides.length;

  const go = useCallback((i: number) => setActive((i + count) % count), [count]);

  // Auto-advance (skipped for reduced-motion users and while hovered/focused)
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => go(active + 1), slides[active].duration);
    return () => clearTimeout(t);
  }, [active, paused, go, slides]);

  // Only the visible slide's video plays
  useEffect(() => {
    videos.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else v.pause();
    });
  }, [active]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative isolate overflow-hidden bg-brand-950 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hero-h relative">
        {slides.map((s, i) => {
          const Heading = i === 0 ? "h1" : "h2";
          const isActive = i === active;
          return (
            <div
              key={s.id}
              aria-hidden={!isActive}
              className={cn("absolute inset-0 transition-opacity duration-700", isActive ? "z-10 opacity-100" : "pointer-events-none opacity-0")}
            >
              <video
                ref={(el) => {
                  videos.current[i] = el;
                }}
                className="absolute inset-0 -z-20 size-full object-cover"
                src={s.video}
                poster={s.poster}
                autoPlay={i === 0}
                muted
                loop
                playsInline
                preload={i === 0 ? "auto" : "metadata"}
                aria-hidden="true"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950 via-brand-950/75 to-brand-950/10" />

              <div className="container-page flex h-full flex-col justify-center pb-32 pt-8">
                <p className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent backdrop-blur">
                  <span className="pulse-dot size-2 rounded-full bg-accent" /> {s.tag}
                </p>
                <Heading className="max-w-3xl text-4xl sm:text-6xl lg:text-7xl">
                  {s.title} <span className="block text-accent">{s.highlight}</span>
                </Heading>
                <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">{s.text}</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button href={s.primary.href} className="h-14 px-8 text-base" tabIndex={isActive ? 0 : -1}>
                    {s.primary.label} <ArrowRight className="size-4" />
                  </Button>
                  <Button
                    href={s.secondary.href}
                    variant="secondary"
                    className="h-14 border-white/30 bg-white/5 px-8 text-base text-white hover:bg-white/10"
                    tabIndex={isActive ? 0 : -1}
                  >
                    {s.secondary.label}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Tabs + arrows */}
        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="container-page flex items-end justify-between gap-6 pb-8">
            <div role="tablist" aria-label="Banner slides" className="grid flex-1 gap-4 sm:max-w-3xl sm:grid-cols-3">
              {slides.map((s, i) => {
                const Icon = icons[s.icon];
                const isActive = i === active;
                return (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => go(i)}
                    className="group text-left"
                  >
                    <span className="relative mb-3 block h-0.5 overflow-hidden rounded bg-white/25">
                      {isActive && (
                        <span
                          key={`${active}-${paused}`}
                          className="hero-progress absolute inset-y-0 left-0 w-full bg-accent"
                          style={{ animationDuration: `${s.duration}ms`, animationPlayState: paused ? "paused" : "running" }}
                        />
                      )}
                    </span>
                    <span className="flex items-center gap-3">
                      <span
                        className={cn(
                          "grid size-11 shrink-0 place-items-center rounded-full border transition-colors",
                          isActive ? "border-transparent bg-accent text-ink" : "border-white/30 text-white/70 group-hover:border-white/60",
                        )}
                      >
                        <Icon className="size-5" />
                      </span>
                      <span className="hidden sm:block">
                        <span className="block text-[11px] font-bold tracking-[0.2em] text-white/50">{String(i + 1).padStart(2, "0")}</span>
                        <span className={cn("block text-base font-bold", isActive ? "text-white" : "text-white/60")}>{s.tab}</span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="hidden gap-3 sm:flex">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => go(active - 1)}
                className="grid size-14 place-items-center rounded-full border border-white/30 transition-colors hover:bg-white/10"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => go(active + 1)}
                className="grid size-14 place-items-center rounded-full border border-white/30 transition-colors hover:bg-white/10"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
