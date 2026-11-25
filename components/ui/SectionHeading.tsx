import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  /** Colored phrase appended to the title (signature look of the reference). */
  accent?: string;
  /** Put the accent on its own line (used in left-aligned split sections). */
  breakAccent?: boolean;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, title, accent, breakAccent, description, align = "center", invert, className }: Props) {
  const center = align === "center";
  const line = <span className={cn("h-px w-6", invert ? "bg-brand-300" : "bg-brand-500")} />;
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]", center && "justify-center", invert ? "text-brand-300" : "text-brand-600")}>
          {line}
          {eyebrow}
          {center && line}
        </p>
      )}
      <h2 className={cn("text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]", invert ? "text-white" : "text-ink")}>
        {title}
        {accent && (breakAccent ? <br /> : " ")}
        {accent && <span className={invert ? "text-brand-300" : "text-brand-600"}>{accent}</span>}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", invert ? "text-brand-100" : "text-ink-muted")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
