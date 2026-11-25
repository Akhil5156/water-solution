"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="grid size-10 place-items-center rounded-full border border-line"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100vh-72px)] overflow-y-auto border-t border-line bg-white p-5 shadow-xl">
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={close} className="block rounded-xl px-3 py-2.5 font-medium hover:bg-brand-50">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-4 border-l border-line pl-3">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} onClick={close} className="block px-3 py-2 text-sm text-ink-muted hover:text-brand-700">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link href="/contact-us" onClick={close} className="mt-4 flex h-12 items-center justify-center rounded-btn bg-brand-600 font-semibold text-white">
            Get a Quote
          </Link>
        </div>
      )}
    </div>
  );
}
