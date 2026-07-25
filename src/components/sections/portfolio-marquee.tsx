import { PortfolioCard } from "@/components/sections/portfolio-card";
import { portfolioItems } from "@/lib/content";
import type { PortfolioItem } from "@/types";

/**
 * Two auto-scrolling rows of browser-frame portfolio cards (opposite
 * directions). Pauses on hover. Used on the home page and /portfolio.
 */
export function PortfolioMarquee({
  items = portfolioItems,
  scroll = "hover",
}: {
  items?: PortfolioItem[];
  scroll?: "hover" | "auto" | "static";
}) {
  const half = Math.ceil(items.length / 2);
  const rowA = items.slice(0, half);
  const rowB = items.slice(half);
  const loopA = [...rowA, ...rowA];
  const loopB = [...rowB, ...rowB];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused]">
        {loopA.map((item, i) => (
          <div key={`a-${i}`} className="mr-6 w-[300px] shrink-0 sm:w-[360px]">
            <PortfolioCard item={item} scroll={scroll} />
          </div>
        ))}
      </div>
      <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
        {loopB.map((item, i) => (
          <div key={`b-${i}`} className="mr-6 w-[300px] shrink-0 sm:w-[360px]">
            <PortfolioCard item={item} scroll={scroll} />
          </div>
        ))}
      </div>
    </div>
  );
}
