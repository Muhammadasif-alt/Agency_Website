import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { serviceSlugs } from "@/lib/services";
import { industrySlugs } from "@/lib/industries";
import { blogSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  const staticPaths = [
    "",
    "/services",
    "/industries",
    "/portfolio",
    "/about",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const dynamicPaths = [
    ...serviceSlugs.map((s) => `/services/${s}`),
    ...industrySlugs.map((s) => `/industries/${s}`),
    ...blogSlugs.map((s) => `/blog/${s}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("/") ? 0.7 : 0.8,
  }));
}
