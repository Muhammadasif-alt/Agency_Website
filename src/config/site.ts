/**
 * Single source of truth for brand + contact info.
 * Sirf yahan edit karo — poori site update ho jayegi.
 */
export const siteConfig = {
  name: "Idea Digital",
  legalName: "Idea Digital Services",
  tagline: "Web design that actually gets you clients",
  description:
    "Idea Digital is a web design and digital agency building fast, conversion-focused websites for businesses across Pakistan, UK, US and beyond.",
  url: "https://ideadigital.services",
  ogImage: "/images/og.jpg",

  contact: {
    email: "hello@ideadigital.services",
    phone: "+92 300 0000000",
    phoneHref: "tel:+923000000000",
    whatsapp: "https://wa.me/923000000000",
    address: "Lahore, Pakistan",
  },

  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    x: "#",
  },
} as const;

export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export const mainNav: { title: string; href: string; items?: NavItem[] }[] = [
  {
    title: "Services",
    href: "/services",
    items: [
      {
        title: "Custom Web Development",
        href: "/services/web-design-development",
        description:
          "MERN, Next.js and Laravel — fast, custom-built websites and web apps.",
      },
      {
        title: "WordPress",
        href: "/services/wordpress",
        description:
          "Fast, secure custom WordPress and WooCommerce builds you can manage yourself.",
      },
      {
        title: "Shopify",
        href: "/services/shopify",
        description:
          "Custom Shopify storefronts designed to convert browsers into buyers.",
      },
      {
        title: "SEO & Local SEO",
        href: "/services/seo",
        description:
          "Get found by customers who are actively searching for what you offer.",
      },
      {
        title: "Website Maintenance",
        href: "/services/website-maintenance",
        description:
          "Monthly updates, security monitoring, speed checks and content changes.",
      },
    ],
  },
  {
    title: "Industries",
    href: "/industries",
    items: [
      { title: "Healthcare", href: "/industries/healthcare" },
      { title: "Real Estate", href: "/industries/real-estate" },
      { title: "E-commerce", href: "/industries/ecommerce" },
      { title: "SaaS & AI Tools", href: "/industries/saas" },
      { title: "Landscaping", href: "/industries/landscaping" },
      { title: "Roofing & Pools", href: "/industries/roofing-pools" },
      { title: "Job Portals", href: "/industries/job-portals" },
      { title: "Interior Design", href: "/industries/interior-design" },
      { title: "Events & Entertainment", href: "/industries/events-entertainment" },
      { title: "Management Systems", href: "/industries/management-systems" },
    ],
  },
  { title: "Portfolio", href: "/portfolio" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { title: "Custom Web Development", href: "/services/web-design-development" },
    { title: "WordPress", href: "/services/wordpress" },
    { title: "Shopify", href: "/services/shopify" },
    { title: "SEO & Local SEO", href: "/services/seo" },
    { title: "Website Maintenance", href: "/services/website-maintenance" },
  ],
  company: [
    { title: "About", href: "/about" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
    { title: "Free Audit", href: "/contact?type=audit" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
  ],
};
