import { SectionHeading } from "@/components/sections/section-heading";
import { processSteps } from "@/lib/content";

export function ProcessSteps() {
  return (
    <section className="container-page py-20 sm:py-28">
      <SectionHeading
        eyebrow="How it works"
        title="A simple, four-step path to launch"
        description="No confusing jargon or endless meetings. Here's exactly how we take you from idea to a live, working website."
      />

      <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <li key={step.step} className="relative">
            {/* connector line */}
            {i < processSteps.length - 1 ? (
              <span className="absolute left-12 top-6 hidden h-px w-full bg-gradient-to-r from-primary/40 to-transparent lg:block" />
            ) : null}

            <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-background font-heading text-lg font-bold text-primary">
              {step.step}
            </div>
            <h3 className="mt-5 font-heading text-lg font-semibold">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
