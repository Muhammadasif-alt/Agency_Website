"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { PortfolioCard } from "@/components/sections/portfolio-card";
import { portfolioItems } from "@/lib/content";
import type { PortfolioItem } from "@/types";

/**
 * Horizontal carousel of portfolio cards. The cards do NOT auto-slide — the
 * user scrolls/swipes (or uses the arrows). Inside each fixed card the full
 * homepage auto-scrolls up and down.
 */
export function PortfolioCarousel({
  items = portfolioItems,
}: {
  items?: PortfolioItem[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 384, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-4 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div
            key={item.slug}
            className="w-[300px] shrink-0 snap-start sm:w-[360px]"
          >
            <PortfolioCard item={item} scroll="auto" />
          </div>
        ))}
      </div>

      {/* Arrows (desktop) */}
      <button
        type="button"
        onClick={() => scrollByCards(-1)}
        aria-label="Previous"
        className="absolute -left-4 top-[45%] hidden size-11 -translate-y-1/2 place-items-center rounded-full border bg-background text-foreground shadow-md transition-colors hover:border-brand hover:text-brand sm:grid"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => scrollByCards(1)}
        aria-label="Next"
        className="absolute -right-4 top-[45%] hidden size-11 -translate-y-1/2 place-items-center rounded-full border bg-background text-foreground shadow-md transition-colors hover:border-brand hover:text-brand sm:grid"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
