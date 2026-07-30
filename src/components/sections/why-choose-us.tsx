import { benefits } from "@/lib/content";
import { siteConfig } from "@/config/site";

export function WhyChooseUs() {
  return (
    <section className="dark bg-background text-foreground">
      <div className="container-page py-24 sm:py-32">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
          Why choose us
        </p>
        <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl">
          Why businesses choose {siteConfig.name}
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-3xl border border-white/10 bg-card p-7 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.22)]"
          >
            <span className="grid size-12 place-items-center rounded-xl bg-brand/10 text-brand">
              <benefit.icon className="size-6" strokeWidth={1.75} />
            </span>
            <h3 className="mt-5 font-heading text-xl font-semibold">
              {benefit.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
