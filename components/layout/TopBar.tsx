import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function TopBar() {
  return (
    <div className="hidden bg-brand-900 text-xs text-white md:block">
      <div className="container-page flex h-(--topbar-h) items-center justify-between">
        <div className="flex items-center gap-6">
          <a href={site.contact.phoneHref} className="flex items-center gap-2 hover:text-accent">
            <Phone className="size-3.5" /> {site.contact.phone}
          </a>
          <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 hover:text-accent">
            <Mail className="size-3.5" /> {site.contact.email}
          </a>
          <span>{site.contact.hours}</span>
        </div>
        <div className="flex items-center gap-1">
          {site.social.map((s) => (
            <SocialIcon key={s.label} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
}
