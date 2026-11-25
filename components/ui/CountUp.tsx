"use client";

import { useEffect, useRef, useState } from "react";

/** "85,000+" → { num: 85000, prefix: "", suffix: "+" } */
function parse(value: string) {
  const m = value.match(/^(\D*)([\d,]+)(.*)$/);
  if (!m) return null;
  return { prefix: m[1], num: Number(m[2].replace(/,/g, "")), suffix: m[3], grouped: m[2].includes(",") };
}

const fmt = (n: number, grouped: boolean) => (grouped ? n.toLocaleString("en-IN") : String(n));

/**
 * Number that counts up when scrolled into view (1.8s, ease-out — as on the reference).
 * 4-digit years (e.g. 1997) count up from 40 years earlier, like the reference.
 * Server-renders the final value, so no-JS / reduced-motion users see the right number.
 */
export function CountUp({ value, className, sup }: { value: string; className?: string; /** Render the suffix (e.g. "+") as a superscript, like the reference stats strip. */ sup?: boolean }) {
  const p = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState<number | null>(null); // null = show final value

  useEffect(() => {
    if (!p || !ref.current) return;
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const isYear = p.num >= 1900 && p.num <= 2100 && !p.grouped;
    const from = isYear ? p.num - 40 : 0;
    setShown(from);

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min((now - start) / 1800, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(Math.round(from + (p.num - from) * eased));
          if (t < 1) raf = requestAnimationFrame(step);
          else setShown(null);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.15 },
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!p) return <span className={className}>{value}</span>;
  return (
    <span ref={ref} className={className}>
      {p.prefix}
      {fmt(shown ?? p.num, p.grouped)}
      {sup && p.suffix ? <sup className="ml-0.5 align-top text-[0.5em] leading-none">{p.suffix}</sup> : p.suffix}
    </span>
  );
}
