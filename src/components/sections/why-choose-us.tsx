import { SectionHeading } from "@/components/sections/section-heading";
import { benefits } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <section className="border-y bg-muted/30">
      <div className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="Why choose us"
          title="Big-agency results, without the big-agency runaround"
          description="You get speed, clarity and a website that actually pulls its weight — backed by people who pick up the phone."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
                <benefit.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
