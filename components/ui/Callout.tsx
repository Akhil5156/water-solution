/** Highlighted one-liner with a colored left bar. */
export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-r-xl border-l-4 border-brand-300 bg-brand-50 px-6 py-4 text-[15px] font-semibold leading-relaxed text-ink">
      {children}
    </p>
  );
}
