"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { sortedPosts, formatDate } from "@/lib/blog";

const PAGE_SIZE = 4;

export function BlogList() {
  const [page, setPage] = useState(1);
  const pages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const posts = sortedPosts.slice(start, start + PAGE_SIZE);

  const go = (p: number) => {
    setPage(Math.min(Math.max(p, 1), pages));
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative flex h-40 items-end bg-[radial-gradient(120%_120%_at_15%_0%,color-mix(in_oklch,var(--brand)_22%,transparent),transparent_60%)] bg-muted p-6">
              <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-brand shadow-sm">
                {post.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs text-muted-foreground">
                {formatDate(post.date)} · {post.readMinutes} min read
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold leading-snug transition-colors group-hover:text-brand">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all group-hover:gap-2.5">
                Read more
                <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {pages > 1 ? (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => go(page - 1)}
            disabled={page === 1}
            className="inline-flex h-10 items-center gap-1 rounded-full border bg-card px-4 text-sm font-medium transition-colors hover:border-brand hover:text-brand disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
            Prev
          </button>

          {Array.from({ length: pages }).map((_, i) => {
            const n = i + 1;
            const active = n === page;
            return (
              <button
                key={n}
                type="button"
                onClick={() => go(n)}
                aria-current={active ? "page" : undefined}
                className={`grid size-10 place-items-center rounded-full border text-sm font-medium transition-colors ${
                  active
                    ? "border-transparent bg-brand text-white"
                    : "bg-card hover:border-brand hover:text-brand"
                }`}
              >
                {n}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => go(page + 1)}
            disabled={page === pages}
            className="inline-flex h-10 items-center gap-1 rounded-full border bg-card px-4 text-sm font-medium transition-colors hover:border-brand hover:text-brand disabled:pointer-events-none disabled:opacity-40"
          >
            Next
            <ChevronRight className="size-4" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
