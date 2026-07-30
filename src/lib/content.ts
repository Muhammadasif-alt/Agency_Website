import {
  BadgeCheck,
  Clock,
  Code2,
  Globe,
  Headset,
  MessageSquare,
  Search,
  ShieldCheck,
  Target,
  Wrench,
} from "lucide-react";

import type {
  BenefitItem,
  FaqItem,
  IndustryItem,
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
    title: "Custom Web Development",
    excerpt:
      "Custom-built, fast-loading websites designed to convert visitors into paying clients. Every site is unique to your brand, built from scratch with SEO baked in from day one, not bolted on afterwards.",
    icon: Code2,
    points: [
      "48hr first draft",
      "Mobile-first build",
      "SEO from day one",
      "Fixed price always",
    ],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
    badge: "Most popular",
    price: "From £799",
  },
  {
    slug: "wordpress",
    title: "WordPress Development",
    excerpt:
      "Fast, secure custom WordPress and WooCommerce builds you can actually manage yourself — clean custom themes, only the plugins you need, no slow page-builder bloat.",
    icon: Code2,
    points: [
      "Custom themes",
      "WooCommerce stores",
      "Speed optimised",
      "Easy to edit",
    ],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    price: "From £599",
  },
  {
    slug: "shopify",
    title: "Shopify Development",
    excerpt:
      "Custom Shopify storefronts designed to turn browsers into buyers — built for conversion and speed, with the apps and integrations your store needs to grow.",
    icon: Globe,
    points: [
      "Custom themes",
      "Liquid development",
      "Conversion-first",
      "App integrations",
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    badge: "E-commerce",
    price: "From £799",
  },
  {
    slug: "seo",
    title: "SEO & Local SEO",
    excerpt:
      "Get found by customers who are actively searching for what you offer. We optimise your Google Business Profile, build local citations and improve your rankings so the right people find you first.",
    icon: Search,
    points: [
      "Google Business Profile",
      "On-page optimisation",
      "Citation building",
      "Monthly reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    badge: "High ROI",
    price: "From £449/mo",
  },
  {
    slug: "social-media-ads",
    title: "Social Media & Ads",
    excerpt:
      "Done-for-you social media and paid ad campaigns that put your business in front of the right people — and bring back real leads and sales, not just likes.",
    icon: MessageSquare,
    points: [
      "Meta & Google Ads",
      "Content & scheduling",
      "Audience targeting",
      "Monthly reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80",
    badge: "Growth",
    price: "From £399/mo",
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    excerpt:
      "Your website is a live business asset. Monthly updates, security monitoring, speed checks and content changes. We keep everything running smoothly so you never have to worry about it.",
    icon: Wrench,
    points: [
      "Monthly updates",
      "Security patches",
      "Speed monitoring",
      "Content changes",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    badge: "Ongoing",
    price: "From £149/mo",
  },
];

export const benefits: BenefitItem[] = [
  {
    title: "48-hour first draft",
    description:
      "You see a real design within 48 hours of briefing. No waiting weeks to see something. We move fast without cutting corners and most clients are live within 2 to 3 weeks.",
    icon: Clock,
  },
  {
    title: "Fixed prices, always",
    description:
      "Every project starts with a clear, upfront quote. No hourly billing, no scope creep surprises. The number we give you is the number you pay. Full stop.",
    icon: BadgeCheck,
  },
  {
    title: "SEO built in from day one",
    description:
      "Every site we build is structured for Google from the ground up. Proper heading hierarchy, schema markup, fast load times, metadata and mobile-first development. Not an afterthought.",
    icon: Search,
  },
  {
    title: "Global reach, personal service",
    description:
      "We're based in Pakistan but work with clients across the UK, US and Europe. Fully remote, no geographical limits and you always deal directly with the team doing the work.",
    icon: Globe,
  },
  {
    title: "Conversion focused",
    description:
      "A beautiful website that does not generate enquiries is just an expensive business card. Every decision we make is guided by what turns visitors into leads.",
    icon: Target,
  },
  {
    title: "Direct communication",
    description:
      "No account managers, no ticket systems. You work directly with the people building your site. Fast replies, honest updates and a team that treats your project like it matters.",
    icon: MessageSquare,
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "1",
    title: "Free audit and discovery",
    description:
      "We review your current online presence, research your competitors and show you exactly what is holding your business back from ranking and converting.",
  },
  {
    step: "2",
    title: "Strategy and fixed quote",
    description:
      "A clear proposal covering scope, timeline and a fixed price. You know exactly what you are getting before anything starts.",
  },
  {
    step: "3",
    title: "Design and build",
    description:
      "Your first design draft arrives within 48 hours. We refine until it is perfect, then build every page with full SEO, forms, analytics and speed optimisation included.",
  },
  {
    step: "4",
    title: "Launch and ongoing support",
    description:
      "We handle domain setup, SSL, Search Console submission and stay on hand for 30 days post-launch. Ongoing SEO and maintenance packages available if you want us to keep growing it.",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "aloe-therapeutics",
    title: "ALOE Therapeutics",
    category: "Biotech · Healthcare",
    country: "US",
    label: "Biotech / Immunotherapy Website",
    image: "/aloe_project.jpeg",
  },
  {
    slug: "pro-roofing-az",
    title: "Pro Roofing AZ",
    category: "Roofing Contractor",
    country: "Arizona, US",
    url: "https://proroofingaz.com",
  },
  {
    slug: "ksj-contracting",
    title: "KSJ Contracting",
    category: "Landscaping · Interlock",
    country: "Ottawa, CA",
    url: "https://ksjcontracting.com",
  },
  {
    slug: "errandbee",
    title: "ErrandBee",
    category: "On-Demand Delivery Platform",
    country: "UAE",
    label: "Errand & Delivery Platform",
    image: "/bee_project.jpeg",
    url: "https://errandbee.ae",
  },
  {
    slug: "florida-outdoor-builders",
    title: "Florida Outdoor Builders",
    category: "Luxury Outdoor Living",
    country: "Florida, US",
    url: "https://flabuilders.com",
  },
  {
    slug: "jonnys-hardscaping",
    title: "Jonny's Hardscaping",
    category: "Excavation · Hardscaping",
    country: "Tampa, US",
    url: "https://jonnyshardscaping.com",
  },
  {
    slug: "coreq-performance",
    title: "COREQ Performance",
    category: "Coaching · Personal Brand",
    country: "Canada",
    label: "Performance Coaching Website",
    image: "/coreo_project.jpeg",
    url: "https://coreqi.fit",
  },
  {
    slug: "pro-outdoor-living",
    title: "Pro Outdoor Living",
    category: "Landscaping · Pools",
    country: "Phoenix, US",
    url: "https://podlaz.com",
  },
  {
    slug: "papi-and-lillys",
    title: "Papi and Lilly's",
    category: "Outdoor Living Contractor",
    country: "Charleston, US",
    url: "https://papiandlillys.com",
  },
  {
    slug: "crossfade-entertainment",
    title: "CrossFade Entertainment",
    category: "Events · DJ",
    country: "Illinois, US",
    label: "DJ & Events Booking Website",
    image: "/crosal_project.jpeg",
    url: "https://crossfadeentertainment.net",
  },
  {
    slug: "cinco-mosqueteros",
    title: "Cinco Mosqueteros",
    category: "Landscaping · Hardscape",
    country: "El Paso, US",
    url: "https://cincomosqueteros.co",
  },
  {
    slug: "jobs-in-usa",
    title: "Jobs in USA",
    category: "Job Portal · 8,000+ listings",
    country: "US",
    url: "https://jobsinusa.us",
    noShot: true,
  },
  {
    slug: "honest-cash",
    title: "Honest Cash",
    category: "Real Estate · Cash Buyer",
    country: "North Carolina, US",
    label: "Real Estate Cash-Buyer Website",
    image: "/honest_cash_project.jpeg",
  },
  {
    slug: "address2cash",
    title: "Address2Cash",
    category: "Real Estate · Cash Buyer",
    country: "North Carolina, US",
    url: "https://address2cash.com",
  },
  {
    slug: "dehleez-studio",
    title: "Dehleez Studio",
    category: "Interior Design · Fit-out",
    country: "Dubai",
    url: "https://dehleezstudio.com",
  },
  {
    slug: "mark-it-in",
    title: "Mark IT In",
    category: "Digital Agency",
    country: "Lahore, PK",
    url: "https://markitin.site",
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
    name: "Shane Davies",
    company: "South View Glamping",
    location: "United Kingdom",
    content:
      "Development By Niaz transformed our online presence completely. Our bookings have increased significantly since the new site went live. Professional, fast and genuinely invested in our success.",
    rating: 5,
  },
  {
    name: "Ricardo B.",
    company: "RB Interiors",
    location: "United States",
    content:
      "This is the second project with them. Awesome at what they do, great communication throughout, gave me feedback on my project, made it better, and went above and beyond.",
    rating: 5,
  },
  {
    name: "Ayesha Khan",
    company: "Noor Dental Clinic",
    location: "Lahore, PK",
    content:
      "Our new booking site went live in under two weeks and appointment requests jumped straight away. It genuinely felt like they cared about the results, not just the design.",
    rating: 5,
  },
  {
    name: "Daniel Moore",
    company: "Peak Fitness",
    location: "United Kingdom",
    content:
      "Fixed price, fast turnaround, and the site is quick. Exactly what was promised. We've already recommended them to two other companies.",
    rating: 5,
  },
  {
    name: "Sofia Alvarez",
    company: "Bella Salon",
    location: "Spain",
    content:
      "Beautiful, modern and so easy to update ourselves. Our clients constantly compliment the new website and we're getting far more online bookings.",
    rating: 5,
  },
  {
    name: "Omar Sheikh",
    company: "Sheikh & Co Law",
    location: "United States",
    content:
      "They understood exactly what a law firm needs — trust, clarity and strong calls to action. Enquiries from the website have more than doubled.",
    rating: 5,
  },
  {
    name: "Emma Wright",
    company: "Wright Physiotherapy",
    location: "Australia",
    content:
      "From first call to launch was seamless. The site ranks locally now and new patients mention finding us on Google every week.",
    rating: 5,
  },
];

export const trustSignals = [
  { icon: ShieldCheck, label: "Secure & GDPR-ready" },
  { icon: Clock, label: "48-hour first draft" },
  { icon: Headset, label: "Direct support" },
  { icon: BadgeCheck, label: "Fixed pricing" },
];

/** Scrolling keyword ticker under the hero */
export const marqueeKeywords = [
  "Digital Agency",
  "SEO Agency",
  "SEO Services",
  "Digital Marketing",
  "Web Design Company",
  "SEO Company",
  "Conversion Design",
  "Brand Strategy",
];

/** Services checklist shown on the About promo card */
export const aboutServices = [
  "Web Design",
  "E-commerce Web",
  "Local SEO Services",
  "Website Maintenance",
];

/** Industries grid — uses the project screenshots in /public */
export const industries: IndustryItem[] = [
  {
    slug: "healthcare",
    badge: "Healthcare",
    title: "Web Design for Healthcare",
    excerpt:
      "Attract and retain patients with a fast, trustworthy clinic website built to rank on Google and turn visitors into booked appointments.",
    image: "/aloe_project.jpeg",
  },
  {
    slug: "real-estate",
    badge: "Real Estate",
    title: "Web Design for Real Estate",
    excerpt:
      "Listings, cash-offer forms and lead capture that turn property browsers into valuations and offers — like the Honest Cash site we built.",
    image: "/honest_cash_project.jpeg",
  },
  {
    slug: "saas",
    badge: "SaaS & AI",
    title: "SaaS & AI Products",
    excerpt:
      "Custom platforms like Jobs in USA and the ErrandBee booking service — auth, billing and dashboards, built to launch fast and scale.",
    image: "/bee_project.jpeg",
  },
  {
    slug: "events-entertainment",
    badge: "Events & Entertainment",
    title: "Web Design for DJs & Events",
    excerpt:
      "Booking-first websites for DJs, event companies and entertainers — like the CrossFade Entertainment site we built.",
    image: "/crosal_project.jpeg",
  },
];
