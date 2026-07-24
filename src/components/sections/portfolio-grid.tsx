import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/lib/content";
import type { PortfolioItem } from "@/types";

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="mr-6 w-[320px] shrink-0 overflow-hidden rounded-3xl border bg-card shadow-sm sm:w-[400px]">
      <div className="relative aspect-[16/11] overflow-hidden bg-muted">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="400px"
            className="object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-transparent" />
        {item.label ? (
          <span className="absolute left-5 top-4 max-w-[75%] font-heading text-lg font-semibold leading-tight text-white drop-shadow">
            {item.label}
          </span>
        ) : null}
      </div>
      <div className="p-5">
        <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {item.category}
          {item.country ? ` · ${item.country}` : ""}
        </p>
      </div>
    </div>
  );
}

export function PortfolioGrid() {
  const half = Math.ceil(portfolioItems.length / 2);
  const rowA = portfolioItems.slice(0, half);
  const rowB = portfolioItems.slice(half);
  const loopA = [...rowA, ...rowA];
  const loopB = [...rowB, ...rowB];

  return (
    <section id="portfolio" className="overflow-hidden py-24 sm:py-32">
      {/* Header */}
      <div className="container-page flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
            Our work
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl">
            Websites we&apos;ve built
          </h2>
        </div>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-12 shrink-0 rounded-full px-6 text-base"
        >
          <Link href="/portfolio">
            View all
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      {/* Two auto-scrolling rows */}
      <div className="mt-14 flex flex-col gap-6">
        <div className="group flex w-max animate-marquee-slow hover:[animation-play-state:paused]">
          {loopA.map((item, i) => (
            <PortfolioCard key={`a-${i}`} item={item} />
          ))}
        </div>
        <div className="group flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {loopB.map((item, i) => (
            <PortfolioCard key={`b-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
