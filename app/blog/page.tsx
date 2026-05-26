import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AccentUnderline } from "@/components/ui/Underline";
import { FadeUp } from "@/components/ui/FadeUp";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from our team on teaching, learning, design, and the quiet work of building a learning platform."
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <section className="bg-cream-light pt-14 md:pt-20">
        <Container>
          <div className="max-w-3xl pb-12 md:pb-16">
            <h1 className="font-display text-display-xl font-extrabold">
              Notes from <AccentUnderline>the team</AccentUnderline>
            </h1>
            <p className="mt-5 text-lg text-ink/75">
              Thoughts on teaching, learning, design, and the quiet work of
              building a learning platform.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-cream pb-24 md:pb-32">
        <Container>
          <FadeUp>
            <Card interactive className="overflow-hidden">
              <Link
                href={`/blog/${featured.slug}`}
                className="grid items-stretch md:grid-cols-12"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden md:col-span-7 md:aspect-auto">
                  <Image
                    src={featured.cover}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center gap-4 p-7 md:col-span-5 md:p-10">
                  <Badge variant="yellow">{featured.category}</Badge>
                  <h2 className="font-display text-display-md font-extrabold text-indigo">
                    {featured.title}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-ink/75">
                    {featured.excerpt}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    {featured.author} · {featured.date} · {featured.readMinutes}{" "}
                    min read
                  </p>
                </div>
              </Link>
            </Card>
          </FadeUp>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.04} className="h-full">
                <Card interactive className="flex h-full flex-col overflow-hidden">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex h-full flex-col"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/10">
                      <Image
                        src={post.cover}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <Badge variant="muted">{post.category}</Badge>
                      <h3 className="font-display text-xl font-bold text-indigo">
                        {post.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-ink/75">
                        {post.excerpt}
                      </p>
                      <p className="mt-auto pt-2 text-sm text-muted">
                        {post.author} · {post.readMinutes} min read
                      </p>
                    </div>
                  </Link>
                </Card>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
