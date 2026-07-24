export type TechGroup = { category: string; items: string[] };
export type Feature = { title: string; description: string };

export type ServiceDetail = {
  slug: string;
  eyebrow: string;
  title: string;
  hero: string;
  overview: string[];
  features: Feature[];
  techStack?: TechGroup[];
  price: string;
  ctaTitle: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "web-design-development",
    eyebrow: "Custom Web Development",
    title: "Custom web development built to scale",
    hero: "From marketing sites to full-stack web apps — we design and build fast, secure, custom software on modern stacks. No page builders, no bloat, just clean hand-crafted code.",
    overview: [
      "We build custom websites and web applications tailored to your exact business needs. Whether it's a lightning-fast marketing site, a customer portal or a complex SaaS product, we pick the right stack for the job and build it properly.",
      "Everything is engineered for speed, SEO and scale from day one — server-rendered where it matters, tuned for Core Web Vitals, and deployed on cloud infrastructure that grows with you.",
    ],
    features: [
      {
        title: "MERN stack apps",
        description:
          "MongoDB, Express, React and Node — full-stack JavaScript apps with real-time features and REST or GraphQL APIs.",
      },
      {
        title: "Next.js websites",
        description:
          "Server-side rendering and static generation for blazing speed, perfect SEO and instant page loads.",
      },
      {
        title: "PHP & Laravel",
        description:
          "Robust, battle-tested backends for content-heavy platforms, dashboards and complex business logic.",
      },
      {
        title: "Any database",
        description:
          "PostgreSQL, MySQL or MongoDB — we model your data the right way for performance and reliability.",
      },
      {
        title: "Cloud & DevOps",
        description:
          "Deployed on AWS or Vercel with CI/CD pipelines, so every release is fast, safe and repeatable.",
      },
      {
        title: "Built for speed",
        description:
          "A JavaScript-first architecture and Core Web Vitals tuning mean your site loads in milliseconds, not seconds.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express", "PHP", "Laravel"] },
      { category: "Database", items: ["PostgreSQL", "MongoDB", "MySQL / SQL"] },
      { category: "Cloud & Deploy", items: ["AWS", "Vercel", "CI/CD"] },
    ],
    price: "From £799",
    ctaTitle: "Ready to build something custom?",
  },
  {
    slug: "wordpress",
    eyebrow: "WordPress",
    title: "WordPress websites, done properly",
    hero: "Custom WordPress builds that are fast, secure and genuinely easy to manage — not slow, plugin-bloated templates you're scared to touch.",
    overview: [
      "We build WordPress sites the right way: clean custom themes, only the plugins you actually need, and an admin experience your team will love. No page-builder spaghetti that grinds your site to a halt.",
      "Whether you need a content-rich marketing site, a WooCommerce store or a full redesign, we make WordPress fast, secure and simple to update yourself.",
    ],
    features: [
      { title: "Custom themes", description: "Bespoke, lightweight themes built to your brand — not a bought template everyone else uses." },
      { title: "WooCommerce stores", description: "Full e-commerce on WordPress with products, payments, shipping and a smooth checkout." },
      { title: "Easy editing", description: "Custom fields (ACF) and clean editor blocks so you can update content without breaking the design." },
      { title: "Speed optimised", description: "Caching, image optimisation and a CDN so your WordPress site actually loads fast." },
      { title: "Secure & updated", description: "Hardened setup, monitoring and managed updates to keep hackers and downtime away." },
      { title: "SEO ready", description: "Clean markup, schema and fast load times so Google ranks you higher from day one." },
    ],
    techStack: [
      { category: "Platform", items: ["WordPress", "WooCommerce", "Elementor"] },
      { category: "Build", items: ["PHP", "ACF", "Custom themes"] },
      { category: "Performance", items: ["Caching", "CDN", "Core Web Vitals"] },
    ],
    price: "From £599",
    ctaTitle: "Want a WordPress site that's fast?",
  },
  {
    slug: "shopify",
    eyebrow: "Shopify",
    title: "Shopify stores built to sell",
    hero: "Custom Shopify storefronts designed to convert browsers into buyers — with the apps, integrations and speed your store needs to grow.",
    overview: [
      "We design and build custom Shopify stores that look premium and convert. From theme customisation and Liquid development to product setup and app integrations, we handle the whole store.",
      "Every build is optimised for conversion and speed, so more of your traffic turns into paying customers — and your store keeps up as you scale.",
    ],
    features: [
      { title: "Custom Shopify themes", description: "Bespoke storefronts built around your brand and your best-selling products." },
      { title: "Liquid development", description: "Custom sections, templates and functionality beyond what off-the-shelf themes allow." },
      { title: "Conversion-first", description: "Optimised product pages and a streamlined checkout designed to reduce drop-off." },
      { title: "App integrations", description: "Reviews, subscriptions, upsells, email and analytics — wired in and working together." },
      { title: "Product & collection setup", description: "We structure your catalogue, variants and collections so the store is easy to manage." },
      { title: "Ongoing growth", description: "CRO, SEO and analytics to keep improving revenue after launch." },
    ],
    techStack: [
      { category: "Platform", items: ["Shopify", "Shopify Plus"] },
      { category: "Build", items: ["Liquid", "Custom themes", "Shopify apps"] },
      { category: "Growth", items: ["CRO", "Analytics", "SEO"] },
    ],
    price: "From £799",
    ctaTitle: "Ready to launch your Shopify store?",
  },
  {
    slug: "seo",
    eyebrow: "SEO & Local SEO",
    title: "SEO that gets you found and chosen",
    hero: "Rank higher, get found by customers actively searching for what you offer, and turn that traffic into real enquiries and sales.",
    overview: [
      "Great design is only half the battle — people have to find you. We build SEO into every project and offer dedicated SEO packages for businesses that want to rank aggressively.",
      "From technical fixes and on-page optimisation to local SEO and content, we focus on the rankings that actually bring you customers, and report on what's working in plain English.",
    ],
    features: [
      { title: "Technical SEO", description: "Site speed, crawlability, schema and Core Web Vitals — the foundations Google rewards." },
      { title: "On-page SEO", description: "Optimised titles, headings, content and internal links targeting the terms that convert." },
      { title: "Local SEO", description: "Google Business Profile, local citations and map-pack rankings for your service area." },
      { title: "Content strategy", description: "Content that answers what your customers are searching for and builds topical authority." },
      { title: "Link building", description: "Quality, relevant backlinks that grow your domain authority the safe way." },
      { title: "Clear reporting", description: "Monthly reports on rankings, traffic and enquiries — no vanity metrics." },
    ],
    price: "From £449/mo",
    ctaTitle: "Want to rank higher on Google?",
  },
  {
    slug: "website-maintenance",
    eyebrow: "Website Maintenance",
    title: "Website maintenance, fully handled",
    hero: "Your website is a live business asset. We keep it secure, fast and up to date every month so you never have to worry about it.",
    overview: [
      "Websites aren't set-and-forget. Plugins need updating, security needs monitoring, and content needs changing. We handle all of it on a simple monthly plan.",
      "You get a healthy, fast, secure site and a real person to call when you need a change — no tickets, no runaround.",
    ],
    features: [
      { title: "Monthly updates", description: "Core, plugin and dependency updates applied and tested so nothing breaks." },
      { title: "Security monitoring", description: "Continuous monitoring, hardening and malware protection to keep threats out." },
      { title: "Backups", description: "Automated off-site backups so your site can be restored in minutes, not days." },
      { title: "Speed monitoring", description: "Ongoing performance checks and tuning to keep your load times fast." },
      { title: "Content changes", description: "Text, image and small design changes handled for you each month." },
      { title: "Priority support", description: "Fast, direct support from the team that built your site." },
    ],
    price: "From £149/mo",
    ctaTitle: "Want your site looked after?",
  },
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((s) => s.slug === slug);
}

export const serviceSlugs = serviceDetails.map((s) => s.slug);
