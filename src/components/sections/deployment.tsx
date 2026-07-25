import { RefreshCw, Server } from "lucide-react";

import { BrandIcon, hasBrandIcon } from "@/components/brand-icons";

type Deploy = {
  stack: string;
  icon?: string;
  hosts: string[];
  description: string;
  updates: string;
};

const deployments: Deploy[] = [
  {
    stack: "Next.js / React apps",
    icon: "react",
    hosts: ["Vercel", "AWS"],
    description:
      "We ship Next.js and React apps to Vercel or AWS with automatic CI/CD. Every push builds, previews and deploys — with instant rollbacks and global edge caching so your site loads fast worldwide.",
    updates:
      "Zero-downtime deploys and a preview URL on every change before it goes live.",
  },
  {
    stack: "PHP / Laravel + SQL",
    icon: "laravel",
    hosts: ["Hostinger", "VPS", "cPanel"],
    description:
      "Laravel and PHP apps with MySQL or PostgreSQL are deployed to Hostinger, a VPS or a cloud server — with environment config, database migrations, SSL certificates and automated backups all set up properly.",
    updates:
      "Managed updates, database migrations and security patches applied safely.",
  },
  {
    stack: "WordPress / WooCommerce",
    icon: "wordpress",
    hosts: ["Hostinger", "Managed WP"],
    description:
      "WordPress and WooCommerce sites go on fast managed hosting like Hostinger, with server caching, a CDN, a staging site, security hardening and one-click backups.",
    updates:
      "Core, theme and plugin updates tested on staging before they touch your live site.",
  },
  {
    stack: "Shopify stores",
    icon: "shopify",
    hosts: ["Shopify"],
    description:
      "Shopify handles hosting, SSL and scaling for you. We deploy custom themes and apps straight to your store using a safe staging-to-live workflow, so nothing breaks on your live shop.",
    updates:
      "Theme and app changes rolled out through preview themes first, then published.",
  },
  {
    stack: "MERN / Node.js",
    icon: "nodejs",
    hosts: ["AWS", "Render", "MongoDB Atlas"],
    description:
      "Node and MERN apps are deployed to AWS or Render with managed databases (MongoDB Atlas or Postgres), environment secrets, logging and uptime monitoring built in from the start.",
    updates:
      "Continuous deployment with automated health checks and uptime monitoring.",
  },
  {
    stack: "Domains, SSL & email",
    hosts: ["Cloudflare", "Any registrar"],
    description:
      "Whatever we build, we handle the boring-but-critical setup: domain and DNS config, SSL certificates, professional email and Search Console — so your site is secure and findable from day one.",
    updates:
      "SSL auto-renewal and DNS managed for you — no expired-certificate surprises.",
  },
];

export function Deployment() {
  return (
    <section className="border-y bg-muted/30">
      <div className="container-page py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
            Hosting &amp; Deployment
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl">
            Where and how we deploy your project
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Every stack has a home. We set up hosting, databases, SSL and CI/CD
            the right way — then keep it updated and monitored after launch.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {deployments.map((d) => (
            <div
              key={d.stack}
              className="rounded-3xl border bg-card p-7 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-muted text-foreground/80">
                  {d.icon ? (
                    <BrandIcon name={d.icon} className="size-6" />
                  ) : (
                    <Server className="size-6" />
                  )}
                </span>
                <h3 className="font-heading text-xl font-semibold">{d.stack}</h3>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Deployed on
                </span>
                {d.hosts.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-1.5 rounded-full border bg-background px-2.5 py-1 text-xs font-medium"
                  >
                    {hasBrandIcon(h) ? (
                      <BrandIcon name={h} className="size-3.5" />
                    ) : null}
                    {h}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {d.description}
              </p>
              <p className="mt-3 flex items-start gap-2 text-sm text-foreground/70">
                <RefreshCw className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>{d.updates}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
