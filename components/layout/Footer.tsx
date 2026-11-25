import Link from "next/link";
import { Headphones, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { footerNav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { ScrollToTop } from "./ScrollToTop";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-6 text-lg text-white">{title}</h3>
      <ul className="space-y-3.5 text-[15px] text-white/80">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="flex items-center gap-3 transition-colors hover:text-white">
              <span className="size-1.5 rounded-full bg-brand-400" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: LucideIcon; label: string; value: string; href?: string }) {
  const content = <span className="block font-semibold text-white">{value}</span>;
  return (
    <li className="flex items-center gap-4">
      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10 text-brand-300">
        <Icon className="size-5" />
      </span>
      <span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-300">{label}</span>
        {href ? <a href={href} className="hover:text-brand-300">{content}</a> : content}
      </span>
    </li>
  );
}

export function Footer() {
  const { contact } = site;
  return (
    <footer className="bg-brand-950 text-white">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="container-page flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl text-white sm:text-3xl">Need help choosing the right system?</h2>
            <p className="mt-2 text-brand-100">Talk to our experts about your water or air requirement.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact-us">Get a Free Consultation</Button>
            <Button href={contact.phoneHref} variant="secondary" className="border-white/30 text-white hover:bg-white/10">
              <Phone className="size-4" /> Call Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Logo invert />
          <p className="mt-6 max-w-sm leading-relaxed text-brand-100">
            {site.description} Serving customers since 1997.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {site.social.map((s) => (
              <SocialIcon key={s.label} {...s} bordered />
            ))}
          </div>
        </div>

        <LinkColumn title="Water Solutions" links={footerNav.water} />
        <LinkColumn title="Air & Company" links={footerNav.airCompany} />

        <div>
          <h3 className="mb-6 text-lg text-white">Get in Touch</h3>
          <ul className="space-y-5 text-[15px]">
            <ContactItem icon={MapPin} label="Office" value={contact.address} />
            <ContactItem icon={Phone} label={contact.salesLabel} value={contact.phone} href={contact.phoneHref} />
            <ContactItem icon={Headphones} label="Customer Care" value={contact.customerCare} href={contact.customerCareHref} />
            <ContactItem icon={Mail} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-sm text-brand-100 sm:flex-row">
          <p>© {site.copyrightYear} {site.name}. All rights reserved.</p>
          <nav className="flex gap-6 pr-0 sm:pr-16" aria-label="Footer">
            {footerNav.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">{l.label}</Link>
            ))}
          </nav>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
}
