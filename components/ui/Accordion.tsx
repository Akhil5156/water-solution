"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Faq } from "@/types";

/**
 * FAQ accordion — one item open at a time, answers slide open smoothly (grid-rows 0fr → 1fr, 350ms, as the reference).
 * Accessible: real buttons, aria-expanded/controls, collapsed answers are inert (not focusable / not read).
 */
export function Accordion({ items, defaultOpen = 0 }: { items: Faq[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const uid = useId();

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.question}
            className={cn(
              "rounded-2xl border bg-white transition-[border-color,box-shadow] duration-300",
              isOpen ? "border-brand-200 shadow-lg shadow-brand-900/5" : "border-line hover:border-brand-200",
            )}
          >
            <h3 className="tracking-normal">
              <button
                type="button"
                id={`${uid}-q${i}`}
                aria-expanded={isOpen}
                aria-controls={`${uid}-a${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-bold text-ink sm:p-6 sm:text-lg"
              >
                {item.question}
                <span
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full transition-[background-color,color,rotate] duration-300",
                    isOpen ? "rotate-45 bg-brand-600 text-white" : "bg-brand-50 text-brand-600",
                  )}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <div
              id={`${uid}-a${i}`}
              role="region"
              aria-labelledby={`${uid}-q${i}`}
              inert={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-[350ms] ease-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-ink-muted sm:px-6 sm:pb-6">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
