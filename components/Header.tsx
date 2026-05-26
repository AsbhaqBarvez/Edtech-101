"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";

const navLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/for-educators", label: "For Educators" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" }
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full border-b transition-all duration-200 ease-out-soft",
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-muted/20 shadow-header"
          : "bg-cream border-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Logo />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-md px-3.5 py-2 text-[15px] font-medium transition-colors",
                    active
                      ? "text-indigo"
                      : "text-ink/70 hover:text-indigo hover:bg-indigo/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="text-[15px] font-medium text-ink/70 hover:text-indigo"
            >
              Sign in
            </Link>
            <Button href="/pricing" variant="primary-yellow" size="md">
              Get started
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-indigo hover:bg-indigo/5 lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </header>
  );
}
