"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/* One shared IntersectionObserver for every <Reveal> on the page (threshold .15, fire once — as the reference). */
const callbacks = new WeakMap<Element, () => void>();
let io: IntersectionObserver | null = null;

function observe(el: Element, cb: () => void) {
  io ??= new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        callbacks.get(e.target)?.();
        callbacks.delete(e.target);
        io?.unobserve(e.target);
      }
    },
    { threshold: 0.15 },
  );
  callbacks.set(el, cb);
  io.observe(el);
  return () => {
    callbacks.delete(el);
    io?.unobserve(el);
  };
}

type Props = {
  children: ReactNode;
  /** Stagger step 0–4 (0.08s each) — for items in a row, like the reference's d1…d4. */
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: ElementType;
  className?: string;
};

/**
 * Fade-up on scroll. Wrap ANYTHING in this and it animates — works from server components too.
 * The "in" state lives in React (not poked into the DOM), so hydration is always safe and
 * route changes / hidden-then-shown pages just work.
 * Put it on a wrapper *around* a card (not on the card) so the card's hover transform doesn't fight it.
 * CSS (globals.css) only hides it when <html class="reveal-ready">, so no-JS / reduced-motion users see everything.
 */
export function Reveal({ children, delay = 0, as: Tag = "div", className }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observe(el, () => setInView(true));
  }, []);

  return (
    <Tag ref={ref} className={cn("reveal", delay > 0 && `reveal-d${delay}`, inView && "in", className)}>
      {children}
    </Tag>
  );
}
