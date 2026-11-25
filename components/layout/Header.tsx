import { mainNav } from "@/lib/site";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="container-page flex h-(--header-h) items-center justify-between gap-6">
        <Logo />

        <DesktopNav items={mainNav} />

        <div className="flex items-center gap-3">
          <Button href="/contact-us" className="hidden h-10 sm:inline-flex">
            Get a Quote
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
