"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import { DEFAULT_THEME, THEME_STORAGE_KEY, THEME_SWATCH, THEMES, type Theme } from "@/lib/theme";

const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => void listeners.delete(cb);
};
const getTheme = (): Theme => {
  const t = document.documentElement.getAttribute("data-theme");
  return THEMES.includes(t as Theme) ? (t as Theme) : DEFAULT_THEME;
};

function setTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {}
  listeners.forEach((l) => l());
}

/** Floating switch: flips <html data-theme>; all colors follow via CSS variables. */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => DEFAULT_THEME);

  return (
    <div
      role="group"
      aria-label="Color theme"
      className="fixed bottom-0 left-4 z-50 flex items-center gap-0.5 rounded-full border border-line bg-white p-0.5 shadow-md"
    >
      {THEMES.map((t) => (
        <button
          key={t}
          type="button"
          onClick={() => setTheme(t)}
          aria-pressed={theme === t}
          aria-label={`${t} theme`}
          title={`${t} theme`}
          className={cn(
            "grid size-7 place-items-center rounded-full transition-colors",
            theme === t ? "bg-brand-100 ring-[1.5px] ring-brand-600" : "hover:bg-brand-50",
          )}
        >
          <span className="size-4 rounded-full" style={{ background: THEME_SWATCH[t] }} />
        </button>
      ))}
    </div>
  );
}
