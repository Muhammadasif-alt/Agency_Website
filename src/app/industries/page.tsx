import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Cta } from "@/components/sections/cta";
import { industryDetails } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Specialist web design and development for healthcare, real estate, e-commerce, SaaS, landscaping, roofing, job portals and management systems.",
};

export default function IndustriesPage() {
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
              Industries we serve
            </p>
            <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl">
              Built for <span className="italic text-brand">your industry.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
              We build websites, stores and custom platforms tailored to the way
              your industry actually works — with the right features, content and
              SEO baked in.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-24 sm:pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industryDetails.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {industry.image ? (
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(120%_120%_at_20%_0%,color-mix(in_oklch,var(--brand)_18%,transparent),transparent_60%)] bg-card p-6 text-center">
                    <span className="font-heading text-2xl font-bold leading-tight text-foreground/90">
                      {industry.name}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-heading text-xl font-semibold">
                  {industry.name}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {industry.lead}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all group-hover:gap-2.5">
                  Explore
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/contact">
              Don&apos;t see your industry? Talk to us
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Cta />
    </>
  );
}
