import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { ExecutionRow } from "@/types/projects";

/** "Under execution" table. Rows come from data (a DB query later); numbering is automatic. */
export function ExecutionTable({ title, rows }: { title: string; rows: readonly ExecutionRow[] }) {
  return (
    <Section>
      <Reveal>
        <h2 className="text-3xl text-brand-600 sm:text-4xl">{title}</h2>
      </Reveal>
      <Reveal delay={1} className="mt-8">
        <div className="overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead className="bg-brand-50 text-ink">
              <tr>
                {["S.No.", "Name Of Client", "Project Name", "Work", "Project Type"].map((h) => (
                  <th key={h} scope="col" className="border-b border-line px-5 py-4 text-sm font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-ink-muted">
              {rows.map((r, i) => (
                <tr key={`${r.client}-${r.project}`} className="border-b border-line last:border-b-0 transition-colors hover:bg-brand-50/60">
                  <td className="px-5 py-3.5">{i + 1}</td>
                  <td className="px-5 py-3.5">{r.client}</td>
                  <td className="px-5 py-3.5">{r.project}</td>
                  <td className="px-5 py-3.5">{r.work}</td>
                  <td className="px-5 py-3.5">{r.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
