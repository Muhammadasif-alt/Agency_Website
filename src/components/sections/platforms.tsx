import { Code2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { BrandIcon } from "@/components/brand-icons";

type Platform = {
  name: string;
  icon?: string;
  custom?: boolean;
  recommended?: boolean;
  description: string;
};

const platforms: Platform[] = [
  {
    name: "React / Next.js",
    icon: "react",
    recommended: true,
    description:
      "Our preferred stack for maximum speed and SEO — server-side rendering, instant load times and full control over every technical detail.",
  },
  {
    name: "MERN / Node.js",
    icon: "nodejs",
    description:
      "Full-stack JavaScript apps with MongoDB, Express, React and Node — ideal for real-time, data-driven products and dashboards.",
  },
  {
    name: "PHP / Laravel",
    icon: "laravel",
    description:
      "Robust, battle-tested backends for content-heavy platforms, portals and complex business logic that needs to scale.",
  },
  {
    name: "WordPress",
    icon: "wordpress",
    description:
      "Custom WordPress and WooCommerce builds — fast, secure and easy to manage yourself. Great for content-led marketing sites.",
  },
  {
    name: "Shopify",
    icon: "shopify",
    description:
      "Custom Shopify storefronts and Liquid development, optimised to turn browsers into buyers.",
  },
  {
    name: "Custom / Headless",
    custom: true,
    description:
      "Hand-coded and headless builds when you need something completely bespoke, with no platform limits.",
  },
];

export function Platforms() {
  return (
    <section className="container-page py-16 sm:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
          Platforms we build on
        </p>
        <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl">
          Which platform is right for you?
        </h2>
        <p className="mt-5 text-lg text-muted-foreground text-pretty">
          MERN, Next.js, Laravel, WordPress or Shopify — we&apos;re
          platform-agnostic and recommend what&apos;s genuinely best for your
          business, not what&apos;s easiest for us to build.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {platforms.map((p) => (
          <div
            key={p.name}
            className="flex gap-5 rounded-3xl border bg-card p-6 shadow-sm transition-colors hover:border-brand/40"
          >
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-muted text-foreground/80">
              {p.custom ? (
                <Code2 className="size-7" />
              ) : (
                <BrandIcon name={p.icon!} className="size-8" />
              )}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-heading text-xl font-semibold">{p.name}</h3>
                {p.recommended ? (
                  <Badge className="rounded-full border-transparent bg-brand/10 text-brand hover:bg-brand/15">
                    Recommended
                  </Badge>
                ) : null}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
