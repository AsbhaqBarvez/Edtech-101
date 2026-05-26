import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { NewsletterForm } from "@/components/NewsletterForm";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/courses", label: "Courses" },
      { href: "/pricing", label: "Pricing" },
      { href: "/for-educators", label: "For educators" },
      { href: "/about", label: "Mobile apps" }
    ]
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/about", label: "Careers" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" }
    ]
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Learner stories" },
      { href: "/blog", label: "Guides" },
      { href: "/blog", label: "Newsletter" },
      { href: "/contact", label: "Help center" }
    ]
  },
  {
    title: "Legal",
    links: [
      { href: "/", label: "Terms" },
      { href: "/", label: "Privacy" },
      { href: "/", label: "Cookies" },
      { href: "/", label: "Acceptable use" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-indigo-deep text-cream/85">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <Logo tone="cream" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-cream/70">
              An India-first learning platform built around the courses,
              instructors, and quiet craft that actually change careers.
            </p>

            <div className="mt-8">
              <NewsletterForm />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-base font-bold text-cream">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l, i) => (
                    <li key={`${col.title}-${i}`}>
                      <Link
                        href={l.href}
                        className="text-sm text-cream/70 transition-colors hover:text-yellow"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-cream/10 py-6 text-sm text-cream/60 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} MantranaEdutech Learning India Pvt. Ltd. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link href="/" className="hover:text-yellow">Terms</Link>
            <Link href="/" className="hover:text-yellow">Privacy</Link>
            <Link href="/contact" className="hover:text-yellow">Contact</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
