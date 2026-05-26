import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AccentUnderline } from "@/components/ui/Underline";

export default function NotFound() {
  return (
    <section className="bg-cream py-32">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-7xl font-extrabold text-indigo">404</p>
          <h1 className="mt-4 font-display text-display-md font-extrabold">
            <AccentUnderline>Page</AccentUnderline> not found
          </h1>
          <p className="mt-3 text-ink/75">
            The link is wrong, the page has moved, or it never existed. Head back
            to the catalog and try again.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button href="/" variant="primary-yellow" size="lg">
              Home
            </Button>
            <Button href="/courses" variant="outline" size="lg">
              Browse courses
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
