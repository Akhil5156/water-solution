export const THEMES = ["green", "blue"] as const;
export type Theme = (typeof THEMES)[number];
/** Preview color for each theme (shown on the toggle). Keep in sync with the primary (--brand-600) in globals.css. */
export const THEME_SWATCH: Record<Theme, string> = { green: "#2b7848", blue: "#087fe8" };
export const DEFAULT_THEME: Theme = "green";
export const THEME_STORAGE_KEY = "site-theme";

/** Runs in <head> before paint: restores the saved theme (falls back to default). */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});if(t==="blue"||t==="green")document.documentElement.setAttribute("data-theme",t);else document.documentElement.setAttribute("data-theme",${JSON.stringify(
  DEFAULT_THEME,
)})}catch(e){document.documentElement.setAttribute("data-theme",${JSON.stringify(DEFAULT_THEME)})}})();`;
