import type { Metadata } from "next";

import { BlogList } from "@/components/sections/blog-list";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides on website speed, SEO, WordPress, lead generation and getting more traffic — straight answers for business owners, no jargon.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(38rem_28rem_at_12%_-10%,color-mix(in_oklch,var(--brand)_12%,transparent),transparent_60%)]"
        />
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
              Insights & guides
            </p>
            <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl">
              Straight answers on{" "}
              <span className="italic text-brand">growing online.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
              No jargon, no fluff — practical guides on the things that actually
              move the needle: website speed, SEO, WordPress, lead generation and
              getting found on Google.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-24 sm:pb-32">
        <BlogList />
      </section>

      <Cta />
    </>
  );
}
