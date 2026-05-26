import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/lib/data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-cream-light pt-12 md:pt-16">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-indigo"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to blog
          </Link>

          <article className="mx-auto mt-8 max-w-3xl">
            <Badge variant="yellow">{post.category}</Badge>
            <h1 className="mt-4 font-display text-display-lg font-extrabold">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-ink/75">{post.excerpt}</p>
            <p className="mt-6 text-sm text-muted">
              By {post.author} · {post.date} · {post.readMinutes} min read
            </p>
          </article>
        </Container>
      </section>

      <Section tone="cream">
        <article className="mx-auto max-w-3xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-card border border-muted/15">
            <Image
              src={post.cover}
              alt=""
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-10 flex flex-col gap-6 text-ink/85">
            <p className="text-[17px] leading-[1.75]">
              {post.excerpt} The full text of this article is part of our
              editorial archive — we publish thoughtfully and rarely, so each
              piece has time to be read and considered.
            </p>
            <p className="text-[17px] leading-[1.75]">
              If you'd like to read more from our team, subscribe to the
              monthly letter at the bottom of any page. We send one note a
              month, edited carefully, and you can unsubscribe in a click.
            </p>
            <p className="text-[17px] leading-[1.75]">
              In the meantime, here's a small note from the writer: thank you
              for spending a little of your attention here. We try to make it
              worth your while.
            </p>
          </div>
        </article>
      </Section>
    </>
  );
}
