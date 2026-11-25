import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import { MOTION_INIT_SCRIPT } from "@/lib/motion";

const sans = Manrope({
  variable: "--font-sans-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  // Used while Manrope loads or if it fails; next/font also size-adjusts it to avoid layout shift.
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: { default: `${site.name} — ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} antialiased`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Applies the saved theme before first paint, so there is no color flash */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT + MOTION_INIT_SCRIPT }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
