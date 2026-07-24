import {
  BadgeCheck,
  Clock,
  Code2,
  Globe,
  Headset,
  LineChart,
  MessageSquare,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import type {
  BenefitItem,
  FaqItem,
  PortfolioItem,
  ProcessStep,
  ServiceItem,
  Stat,
  TestimonialItem,
} from "@/types";

export const stats: Stat[] = [
  { value: "48hr", label: "First draft turnaround", sub: "Guaranteed" },
  { value: "PKR 90k", label: "Starting price", sub: "Fixed quotes always" },
  { value: "90+", label: "Projects delivered", sub: "Across 15+ industries" },
  { value: "100%", label: "Mobile-first", sub: "Every build" },
];

export const services: ServiceItem[] = [
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    excerpt:
      "Custom-built, fast-loading websites designed to convert visitors into paying clients — not just look pretty.",
    icon: Code2,
    points: ["Next.js & modern stack", "Conversion-first layouts", "Blazing-fast performance"],
  },
  {
    slug: "seo",
    title: "SEO & Local SEO",
    excerpt:
      "Get found by customers who are actively searching for what you offer, in your city and beyond.",
    icon: Search,
    points: ["Technical + on-page SEO", "Google Business Profile", "Content strategy"],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    excerpt:
      "Your website is a live business asset. Monthly updates, security monitoring, speed checks and content changes.",
    icon: Wrench,
    points: ["Security monitoring", "Speed & uptime checks", "Content updates"],
  },
];

export const benefits: BenefitItem[] = [
  {
    title: "48-hour first draft",
    description:
      "See a real design of your homepage within two days — no month-long waits before you see progress.",
    icon: Clock,
  },
  {
    title: "Fixed prices, always",
    description:
      "You get a clear, fixed quote up front. No surprise invoices, no hourly billing games.",
    icon: BadgeCheck,
  },
  {
    title: "SEO built in from day one",
    description:
      "Every build ships with clean markup, fast load times and search-ready structure.",
    icon: Search,
  },
  {
    title: "Global reach, personal service",
    description:
      "We work with clients across Pakistan, the UK and the US — but you always talk to a real person.",
    icon: Globe,
  },
  {
    title: "Conversion focused",
    description:
      "Every section is designed to turn a visitor into an enquiry, a call, or a sale.",
    icon: LineChart,
  },
  {
    title: "Direct communication",
    description:
      "No account-manager telephone game. You talk directly to the people building your site.",
    icon: MessageSquare,
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Free audit & discovery",
    description:
      "We review your current site (or idea), your goals and your competitors — then tell you exactly what will move the needle.",
  },
  {
    step: "02",
    title: "Strategy & fixed quote",
    description:
      "You get a clear plan and a fixed price. You know exactly what you're getting before we start.",
  },
  {
    step: "03",
    title: "Design & build",
    description:
      "First draft in 48 hours. We refine together until it's right, then build it fast and clean.",
  },
  {
    step: "04",
    title: "Launch & ongoing support",
    description:
      "We launch, monitor performance and stay on hand for updates, changes and growth.",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "law-firm-website",
    title: "Corporate Law Firm",
    category: "Law Firms",
    excerpt: "A trust-building redesign that tripled qualified consultation requests.",
    result: "+210% enquiries",
  },
  {
    slug: "dental-clinic",
    title: "Dental Clinic Booking Site",
    category: "Healthcare",
    excerpt: "Fast booking-focused site with online appointment requests.",
    result: "+150% bookings",
  },
  {
    slug: "real-estate-portal",
    title: "Real Estate Listings Portal",
    category: "Real Estate",
    excerpt: "Property search portal with filtering and lead capture.",
    result: "12k monthly visits",
  },
  {
    slug: "ecommerce-store",
    title: "Fashion E-commerce Store",
    category: "E-commerce",
    excerpt: "Conversion-optimised storefront with a 2-step checkout.",
    result: "+38% conversion",
  },
  {
    slug: "restaurant-site",
    title: "Restaurant & Reservations",
    category: "Hospitality",
    excerpt: "Menu, gallery and table reservations in one fast site.",
    result: "+90% reservations",
  },
  {
    slug: "saas-landing",
    title: "SaaS Product Launch",
    category: "Technology",
    excerpt: "High-converting launch page with waitlist and demo booking.",
    result: "2,400 signups",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What does a web design agency actually do?",
    answer:
      "We plan, design, build and maintain websites that are fast, easy to use and built to generate business — not just to look good. That covers strategy, UX/UI design, development, SEO and ongoing support.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Our builds start from a fixed price and scale with what you need. You always get a clear quote up front after a free audit — no hourly surprises.",
  },
  {
    question: "Do you work with clients outside my city?",
    answer:
      "Yes. We work with businesses across Pakistan, the UK, the US and beyond. Everything is handled online with direct, personal communication.",
  },
  {
    question: "How long does a website take?",
    answer:
      "You'll see a first draft of your homepage within 48 hours. A typical full site launches in 1–3 weeks depending on size and how quickly we get content and feedback.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Always. Every site we build is mobile-first and tested across phones, tablets and desktops before launch.",
  },
  {
    question: "Do you offer SEO with web design?",
    answer:
      "Yes — SEO fundamentals are built into every project from day one, and we offer dedicated SEO packages for businesses that want to rank aggressively.",
  },
  {
    question: "Will I be able to update the website myself?",
    answer:
      "Yes. We can build on a CMS and hand over a simple admin panel so you can edit content, add blog posts and manage your portfolio without touching code.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Absolutely. Our maintenance plans cover security, speed, backups and content changes so your site stays healthy and up to date.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Ricardo B.",
    role: "Business Owner",
    location: "United States",
    content:
      "This is the second project with them. Awesome at what they do, great communication throughout, gave me feedback on my project, made it better, and went above and beyond.",
    rating: 5,
  },
  {
    name: "Ayesha K.",
    role: "Clinic Director",
    location: "Lahore, PK",
    content:
      "Our new booking site went live in under two weeks and appointment requests jumped straight away. Genuinely felt like they cared about the results, not just the design.",
    rating: 5,
  },
  {
    name: "Daniel M.",
    role: "Marketing Lead",
    location: "United Kingdom",
    content:
      "Fixed price, fast turnaround, and the site is quick. Exactly what was promised. We've already recommended them to two other companies.",
    rating: 5,
  },
];

export const trustSignals = [
  { icon: ShieldCheck, label: "Secure & GDPR-ready" },
  { icon: Clock, label: "48-hour first draft" },
  { icon: Headset, label: "Direct support" },
  { icon: BadgeCheck, label: "Fixed pricing" },
];
