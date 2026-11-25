import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  tone?: "default" | "muted" | "dark" | "transparent";
  id?: string;
  className?: string;
};

const tones = {
  default: "bg-surface",
  muted: "bg-surface-muted",
  dark: "bg-brand-900 text-white",
  transparent: "text-white",
};

/** Standard section wrapper: background tone + vertical rhythm + centered container. */
export function Section({ children, tone = "default", id, className }: Props) {
  return (
    <section id={id} className={cn("section-y", tones[tone], className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}
