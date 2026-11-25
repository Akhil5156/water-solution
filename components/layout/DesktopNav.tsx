"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Database, Droplet, Droplets, Fan, Filter, Flame, Gauge, Wind, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import type { NavIcon, NavItem } from "@/lib/site";

const icons: Record<NavIcon, LucideIcon> = {
  tank: Database,
  drop: Droplet,
  drops: Droplets,
  gauge: Gauge,
  filter: Filter,
  flame: Flame,
  wind: Wind,
  fan: Fan,
};

const isActive = (pathname: string, item: NavItem): boolean => {
  if (item.href === "/") return pathname === "/";
  return pathname === item.href || pathname.startsWith(item.href + "/") || !!item.children?.some((c) => isActive(pathname, c));
};

/** Underline that draws left → right on hover / when the item is the current page. */
const underline =
  "pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded bg-brand-600 transition-transform duration-300 ease-out";

export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
      {items.map((item) => {
        const active = isActive(pathname, item);
        const linkClass = cn(
          "relative flex items-center gap-1 px-3 py-2 text-sm font-bold transition-colors",
          active ? "text-brand-600" : "text-ink group-hover:text-brand-600 group-focus-within:text-brand-600",
        );
        const bar = cn(underline, active ? "scale-x-100" : "group-hover:scale-x-100 group-focus-within:scale-x-100");

        if (!item.children) {
          return (
            <div key={item.href} className="group relative">
              <Link href={item.href} className={linkClass} aria-current={active ? "page" : undefined}>
                {item.label}
                <span className={bar} />
              </Link>
            </div>
          );
        }

        return (
          <div key={item.href} className="group relative">
            <Link href={item.href} className={linkClass} aria-haspopup="true" aria-current={active ? "page" : undefined}>
              {item.label}
              <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
              <span className={bar} />
            </Link>

            {/* pt-3 bridges the gap so the menu stays open while the mouse travels to it */}
            <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-64 rounded-2xl border border-line bg-white p-1.5 shadow-2xl">
                <ul>
                  {item.children.map((c) => {
                    const Icon = c.icon ? icons[c.icon] : Droplet;
                    return (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className={cn(
                            "flex items-center gap-3 rounded-xl px-2.5 py-2 text-[13px] font-medium transition-colors hover:bg-brand-50 hover:text-brand-700",
                            pathname === c.href ? "bg-brand-50 text-brand-700" : "text-ink",
                          )}
                        >
                          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                            <Icon className="size-4" />
                          </span>
                          {c.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="mx-2 mt-1 border-t border-line pt-0.5">
                  <Link href={item.href} className="group/all flex items-center gap-2 rounded-xl px-0.5 py-2.5 text-[13px] font-bold text-brand-600 hover:text-brand-700">
                    View all {item.label.toLowerCase()}
                    <ArrowRight className="size-3.5 transition-transform group-hover/all:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
