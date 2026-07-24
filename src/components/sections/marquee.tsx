import { marqueeKeywords } from "@/lib/content";

export function Marquee() {
  // Duplicated once so the -50% translate loops seamlessly.
  const items = [...marqueeKeywords, ...marqueeKeywords];

  return (
    <section className="overflow-hidden border-y bg-card py-4">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {items.map((keyword, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {keyword}
            </span>
            <span className="size-1.5 rounded-full bg-brand" />
          </div>
        ))}
      </div>
    </section>
  );
}
