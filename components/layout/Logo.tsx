import Link from "next/link";
import { Droplets } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Logo({ invert }: { invert?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="grid size-9 place-items-center rounded-full bg-brand-600 text-white">
        <Droplets className="size-5" />
      </span>
      <span className="leading-none">
        <span className={cn("block font-display text-xl font-semibold", invert ? "text-white" : "text-ink")}>
          {site.name}
        </span>
        <span className={cn("text-[10px] uppercase tracking-[0.2em]", invert ? "text-brand-300" : "text-brand-600")}>
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
