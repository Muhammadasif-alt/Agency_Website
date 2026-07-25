import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section id="industries" className="container-page py-24 sm:py-32">
      {/* Header row */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
            Industries we serve
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl">
            Built for your industry
          </h2>
        </div>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-12 shrink-0 rounded-full px-6 text-base"
        >
          <Link href="/industries">
            All industries
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      {/* Cards */}
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {industries.map((industry) => (
          <div
            key={industry.slug}
            className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              {industry.image ? (
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(120%_120%_at_20%_0%,color-mix(in_oklch,var(--brand)_18%,transparent),transparent_60%)] bg-card p-6 text-center">
                  <span className="font-heading text-3xl font-bold leading-tight text-foreground/90">
                    {industry.title}
                  </span>
                </div>
              )}
              <Badge className="absolute left-4 top-4 rounded-full border-transparent bg-brand px-3 py-1 text-white shadow">
                {industry.badge}
              </Badge>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-heading text-2xl font-semibold">
                {industry.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {industry.excerpt}
              </p>
              <Link
                href={`/industries/${industry.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all hover:gap-2.5"
              >
                Learn more
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
