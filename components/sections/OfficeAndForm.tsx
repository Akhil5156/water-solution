import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { enquiryIntro } from "@/data/contact";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

const Eyebrow = ({ children }: { children: string }) => (
  <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
    <span className="h-0.5 w-7 bg-brand-300" />
    {children}
  </p>
);

export function OfficeAndForm() {
  const c = site.contact;
  const rows = [
    { label: "Sales Email", value: c.email, href: `mailto:${c.email}` },
    { label: "Sales Phone", value: c.phone, href: c.phoneHref },
    { label: "Customer Care", value: c.customerCare, href: c.customerCareHref },
    { label: "Service Hours", value: c.hours },
  ];

  return (
    <Section tone="muted" id="enquiry">
      <div className="grid items-start gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal delay={1} className="h-full"><aside className="h-full rounded-3xl border border-line bg-white p-7 shadow-xl shadow-brand-900/5 sm:p-9">
          <Eyebrow>Visit Us</Eyebrow>
          <h2 className="text-2xl text-ink">Our Office</h2>
          <address className="mt-4 text-[15px] not-italic leading-8 text-ink-muted">
            {c.officeLines.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </address>

          <dl className="mt-6 divide-y divide-line border-t border-line">
            {rows.map((r) => (
              <div key={r.label} className="py-4">
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-ink">{r.label}</dt>
                <dd className="mt-1.5 text-[15px] text-ink-muted">
                  {r.href ? <a href={r.href} className="hover:text-brand-600">{r.value}</a> : r.value}
                </dd>
              </div>
            ))}
          </dl>

          <Button href={c.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-4">
            Open in Google Maps <ArrowUpRight className="size-4" />
          </Button>
        </aside></Reveal>

        <Reveal delay={2}><div className="rounded-3xl border border-line bg-white p-7 shadow-xl shadow-brand-900/5 sm:p-9">
          <Eyebrow>{enquiryIntro.eyebrow}</Eyebrow>
          <h2 className="text-3xl text-ink">{enquiryIntro.title}</h2>
          <p className="mb-8 mt-2 text-sm text-ink-muted">{enquiryIntro.text}</p>
          <EnquiryForm />
        </div></Reveal>
      </div>
    </Section>
  );
}
