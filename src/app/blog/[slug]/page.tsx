import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";

import { siteConfig } from "@/config/site";
import { getBlogPost, blogSlugs, formatDate, sortedPosts } from "@/lib/blog";
import { BlogCover } from "@/components/sections/blog-cover";
import { Cta } from "@/components/sections/cta";

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = sortedPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    articleSection: post.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
          >
            <ArrowLeft className="size-4" />
            All articles
          </Link>

          <div className="mt-6">
            <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              {post.category}
            </span>
          </div>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            By {post.author} · {formatDate(post.date)} · {post.readMinutes} min
            read
          </p>

          <BlogCover post={post} className="mt-8 h-64 rounded-3xl sm:h-80" />

          <p className="mt-8 text-xl leading-relaxed text-foreground/90 text-pretty">
            {post.intro}
          </p>

          <div className="mt-8 space-y-8">
            {post.sections.map((section, i) => (
              <section key={i}>
                {section.heading ? (
                  <h2 className="font-heading text-2xl font-semibold tracking-tight">
                    {section.heading}
                  </h2>
                ) : null}
                {section.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="mt-3 leading-relaxed text-muted-foreground text-pretty"
                  >
                    {p}
                  </p>
                ))}
                {section.list ? (
                  <ul className="mt-4 space-y-2.5">
                    {section.list.map((li, k) => (
                      <li key={k} className="flex gap-3 text-muted-foreground">
                        <Check
                          className="mt-1 size-4 shrink-0 text-brand"
                          strokeWidth={2.5}
                        />
                        <span className="leading-relaxed">{li}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {post.takeaway ? (
            <div className="mt-10 rounded-2xl border-l-4 border-brand bg-brand/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
                The takeaway
              </p>
              <p className="mt-2 leading-relaxed text-foreground/90">
                {post.takeaway}
              </p>
            </div>
          ) : null}

          {/* Related */}
          <div className="mt-14 border-t pt-10">
            <h2 className="font-heading text-2xl font-semibold">
              Keep reading
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-2xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold text-brand">{r.category}</p>
                  <h3 className="mt-2 font-heading text-base font-semibold leading-snug transition-colors group-hover:text-brand">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Cta />
    </>
  );
}
