"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import type { ProjectCategory } from "@/types/projects";

type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  categories: readonly ProjectCategory[];
  tone?: "default" | "muted";
};

/**
 * Filter chips + sector cards. Clicking a card opens that sector's project list in a panel below the grid
 * (smooth height animation); clicking another card switches it; "Close" hides it.
 */
export function ProjectPortfolio({ eyebrow, title, accent, description, categories, tone }: Props) {
  const uid = useId();
  const [filter, setFilter] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>(null);
  // keep rendering the last-opened category while the panel animates closed
  const [shownId, setShownId] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const visible = filter === "all" ? categories : categories.filter((c) => c.id === filter);
  const shown = categories.find((c) => c.id === shownId) ?? null;
  const open = openId !== null && visible.some((c) => c.id === openId);

  useEffect(() => {
    if (openId) setShownId(openId);
  }, [openId]);

  // bring a freshly opened panel into view (after the layout starts moving)
  useEffect(() => {
    if (!openId) return;
    const t = setTimeout(() => panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 120);
    return () => clearTimeout(t);
  }, [openId]);

  return (
    <Section tone={tone} id="portfolio">
      <SectionHeading eyebrow={eyebrow} title={title} accent={accent} description={description} />

      <Reveal delay={1} className="mt-8 flex flex-wrap justify-center gap-3" >
        {[{ id: "all", filter: "All Projects" }, ...categories].map((c) => {
          const active = filter === c.id;
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(c.id)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-semibold transition-[background-color,color,border-color] duration-300",
                active ? "border-brand-600 bg-brand-600 text-white" : "border-line bg-white text-ink hover:border-brand-600 hover:text-brand-600",
              )}
            >
              {c.filter}
            </button>
          );
        })}
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((c, i) => {
          const isOpen = openId === c.id;
          return (
            <Reveal key={c.id} delay={((i % 3) + 1) as 1 | 2 | 3} className="h-full">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${uid}-panel`}
                onClick={() => setOpenId(isOpen ? null : c.id)}
                className={cn(
                  "group hover-lift flex h-full w-full flex-col overflow-hidden rounded-card border bg-white text-left",
                  isOpen ? "border-brand-600 shadow-xl" : "border-line",
                )}
              >
                <span className="relative block">
                  <Media src={c.image} alt={c.title} zoom className="aspect-[5/3]" sizes="(min-width:1024px) 33vw, 100vw" />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-950/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white">
                    {c.label}
                  </span>
                </span>
                <span className="flex flex-1 flex-col p-6">
                  <span className="text-xl font-bold text-ink">{c.title}</span>
                  <span className="mt-2 block flex-1 text-sm leading-relaxed text-ink-muted">{c.text}</span>
                  <span className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-md bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700">
                        {t}
                      </span>
                    ))}
                  </span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600">
                    {isOpen ? "Hide projects" : "View projects"}
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </span>
              </button>
            </Reveal>
          );
        })}
      </div>

      {/* Expandable list panel */}
      <div
        id={`${uid}-panel`}
        ref={panelRef}
        inert={!open}
        className={cn(
          "grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out motion-reduce:transition-none",
          open ? "mt-8 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          {shown && (
            <div className="rounded-3xl border border-line bg-white shadow-xl shadow-brand-900/5">
              <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5 sm:px-8">
                <div>
                  <h3 className="text-xl tracking-normal text-ink sm:text-2xl">{shown.listTitle}</h3>
                  <p className="mt-1 text-sm text-ink-muted">Click a different project card to view another category</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenId(null)}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-btn border border-line px-4 py-2 text-sm font-semibold text-ink transition-colors duration-300 hover:border-brand-600 hover:text-brand-600"
                >
                  Close <X className="size-4" />
                </button>
              </div>
              <div className="space-y-8 px-6 py-7 sm:px-8">
                {shown.groups.map((g, gi) => (
                  <div key={g.title ?? gi}>
                    {g.title && <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-brand-600">{g.title}</h4>}
                    <ul className="grid gap-x-8 gap-y-2.5 text-sm text-ink sm:grid-cols-2 lg:grid-cols-3">
                      {g.items.map((it, ii) => (
                        <li key={`${it}-${ii}`} className="flex items-start gap-3">
                          <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-brand-400" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
