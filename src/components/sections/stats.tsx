import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="border-y bg-muted/30">
      <div className="container-page grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1 text-sm font-medium">{stat.label}</div>
            <div className="text-sm text-muted-foreground">{stat.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
