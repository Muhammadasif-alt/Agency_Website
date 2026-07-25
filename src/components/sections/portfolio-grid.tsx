import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PortfolioMarquee } from "@/components/sections/portfolio-marquee";

export function PortfolioGrid() {
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
      <div className="mt-14">
        <PortfolioMarquee />
      </div>
    </section>
  );
}
