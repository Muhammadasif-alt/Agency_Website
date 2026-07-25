import Image from "next/image";

import type { PortfolioItem } from "@/types";

/** Strip protocol/www/trailing slash for a clean address-bar host. */
function prettyHost(url?: string, fallback = ""): string {
  if (!url) return fallback;
  return url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

/** Live full-page homepage screenshot of a URL, via thum.io. */
function screenshotUrl(url: string): string {
  return `https://image.thum.io/get/width/1000/fullpage/${url}`;
}

/**
 * Portfolio card styled as a browser window — traffic-light dots + an address
 * bar showing the live project URL, then the real homepage rendered inside the
 * frame. The frame stays fixed while the full-page screenshot scrolls on hover.
 */
export function PortfolioCard({ item }: { item: PortfolioItem }) {
  const host = prettyHost(item.url, item.title);

  const inner = (
    <>
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-2.5 border-b bg-muted/60 px-3 py-2.5">
          <span className="flex shrink-0 gap-1.5">
            <span className="size-2.5 rounded-full bg-red-400/80" />
            <span className="size-2.5 rounded-full bg-yellow-400/80" />
            <span className="size-2.5 rounded-full bg-green-400/80" />
          </span>
          <span className="flex-1 truncate rounded-md bg-background/80 px-3 py-1 text-center text-xs text-muted-foreground">
            {host}
          </span>
        </div>

        {/* Live homepage render — frame stays fixed, page scrolls on hover */}
        <div className="relative h-[240px] overflow-hidden bg-muted">
          {item.url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={screenshotUrl(item.url)}
              alt={`${item.title} homepage`}
              loading="lazy"
              decoding="async"
              className="absolute left-0 top-0 w-full transition-transform duration-[5000ms] ease-linear group-hover:[transform:translateY(calc(240px_-_100%))]"
            />
          ) : item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 90vw, 400px"
              className="object-cover object-center"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[radial-gradient(120%_120%_at_20%_0%,color-mix(in_oklch,var(--brand)_18%,transparent),transparent_60%)] bg-card p-6 text-center">
              <span className="font-heading text-2xl font-bold leading-tight text-foreground/90">
                {item.title}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                {item.category}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Meta below the frame */}
      <div className="mt-3 px-1">
        <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {item.category}
          {item.country ? ` · ${item.country}` : ""}
        </p>
      </div>
    </>
  );

  return item.url ? (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {inner}
    </a>
  ) : (
    <div className="group block">{inner}</div>
  );
}
