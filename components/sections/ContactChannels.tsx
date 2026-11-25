import { Handshake, Headset, Mail, Phone, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactChannels, contactIntro } from "@/data/contact";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<string, LucideIcon> = { headset: Headset, handshake: Handshake, phone: Phone };

const href = (v: string) => v.replace(/[^\d+]/g, "");

export function ContactChannels() {
  const c = site.contact;
  const lines: Record<string, { phone: string; email?: string }> = {
    care: { phone: c.customerCare, email: c.customerCareEmail },
    sales: { phone: c.phone, email: c.email },
    phone: { phone: c.customerCare },
  };

  return (
    <Section>
      <SectionHeading align="left" {...contactIntro} />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {contactChannels.map((ch, i) => {
          const Icon = icons[ch.icon];
          const l = lines[ch.key];
          return (
            <Reveal key={ch.key} delay={((i % 3) + 1) as 1 | 2 | 3} className="h-full">
            <div className="group hover-lift-sm h-full rounded-2xl border border-line bg-white p-7">
              <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-xl tracking-normal text-ink">{ch.title}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{ch.text}</p>
              <ul className="mt-5 space-y-2 text-sm font-semibold text-brand-600">
                <li>
                  <a href={`tel:${href(l.phone)}`} className="inline-flex items-center gap-2 hover:text-brand-700">
                    <Phone className="size-4" /> {l.phone}
                  </a>
                </li>
                {l.email && (
                  <li>
                    <a href={`mailto:${l.email}`} className="inline-flex items-center gap-2 hover:text-brand-700">
                      <Mail className="size-4" /> {l.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
