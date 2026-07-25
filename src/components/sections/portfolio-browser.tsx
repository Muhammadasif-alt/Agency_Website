"use client";

import { useState } from "react";

import { PortfolioCard } from "@/components/sections/portfolio-card";
import { portfolioItems } from "@/lib/content";

type Filter = { label: string; match: (category: string) => boolean };

const FILTERS: Filter[] = [
  { label: "All", match: () => true },
  {
    label: "Home Services",
    match: (c) => /roof|landscap|outdoor|excavat|pool|hardscape/i.test(c),
  },
  { label: "Real Estate", match: (c) => /real estate/i.test(c) },
  { label: "Platforms", match: (c) => /portal|platform|delivery/i.test(c) },
  { label: "Healthcare", match: (c) => /health|biotech/i.test(c) },
  { label: "Events", match: (c) => /event|dj/i.test(c) },
  {
    label: "Design & Brand",
    match: (c) => /interior|agency|coaching|brand/i.test(c),
  },
];

export function PortfolioBrowser() {
  const [active, setActive] = useState(0);
  const filter = FILTERS[active];
  const items = portfolioItems.filter((item) => filter.match(item.category));

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2.5">
        {FILTERS.map((f, i) => {
          const count = portfolioItems.filter((item) =>
            f.match(item.category),
          ).length;
          if (count === 0 && f.label !== "All") return null;
          const isActive = i === active;
          return (
            <button
              key={f.label}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-transparent bg-brand text-white"
                  : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid — 4 per row, cards auto-scroll their full homepage */}
      <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <PortfolioCard key={item.slug} item={item} scroll="auto" />
        ))}
      </div>
    </div>
  );
}
