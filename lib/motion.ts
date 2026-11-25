/**
 * Motion foundation. Runs in <head> before paint: marks the page as "reveal-ready" only when the browser can
 * actually run the reveal (IntersectionObserver present, no reduced-motion preference). Without this class
 * nothing is hidden, so content is never invisible if JS fails.
 */
export const MOTION_INIT_SCRIPT = `(function(){try{var d=document.documentElement;if("IntersectionObserver"in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("reveal-ready")}}catch(e){}})();`;
