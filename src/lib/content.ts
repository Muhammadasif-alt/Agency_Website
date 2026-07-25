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
    title: "Web Design and Development",
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
    slug: "seo",
    title: "Local SEO",
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
    slug: "beliesol-legal",
    title: "Beliesol Legal",
    category: "Law Firm",
    country: "US",
    label: "LawFirm / Attorney Website Design",
    image: "/honest_cash_project.jpeg",
  },
  {
    slug: "allen-county-endodontics",
    title: "Allen County Endodontics",
    category: "Dental",
    country: "US",
    label: "Dentist Website Design",
    image: "/crosal_project.jpeg",
  },
  {
    slug: "kumar-pain-management",
    title: "Kumar Pain Management",
    category: "Healthcare",
    country: "US",
    label: "HealthCare Website Design",
    image: "/aloe_project.jpeg",
  },
  {
    slug: "santa-lucia-hotel",
    title: "Santa Lucia Hotel",
    category: "Hospitality",
    country: "Malta",
    label: "Boutique Hotel Website Design",
    image: "/bee_project.jpeg",
  },
  {
    slug: "your-functional-therapy",
    title: "Your Functional Therapy",
    category: "Therapy",
    country: "Australia",
    label: "Therapy Website Design",
    image: "/coreo_project.jpeg",
  },
  {
    slug: "pro-tlo-law-office",
    title: "Pro TLO Law Office",
    category: "Law",
    country: "US",
    label: "Law Firm Website Design",
    image: "/honest_cash_project.jpeg",
  },
  {
    slug: "salon-beautician",
    title: "Salon & Beautician",
    category: "Beauty",
    country: "France",
    label: "Salon / Beautician Website Design",
    image: "/crosal_project.jpeg",
  },
  {
    slug: "wise-patient-medicine",
    title: "Wise Patient Medicine",
    category: "Healthcare",
    country: "US",
    label: "Wellness / Care Website Design",
    image: "/aloe_project.jpeg",
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
      "Idea Digital transformed our online presence completely. Our bookings have increased significantly since the new site went live. Professional, fast and genuinely invested in our success.",
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
      "Listings, search and lead capture that turn property browsers into valuations and viewings for agents and developers.",
    image: "/crosal_project.jpeg",
  },
  {
    slug: "ecommerce",
    badge: "E-commerce",
    title: "Shopify & Online Stores",
    excerpt:
      "Conversion-first Shopify and headless stores with fast product pages and a smooth checkout that turns browsers into buyers.",
    image: "/coreo_project.jpeg",
  },
  {
    slug: "saas",
    badge: "SaaS & AI",
    title: "SaaS & AI Products",
    excerpt:
      "Full-stack SaaS platforms and AI tools with auth, billing and dashboards — built on a modern stack to launch fast and scale.",
    image: "/honest_cash_project.jpeg",
  },
  {
    slug: "landscaping",
    badge: "Landscaping",
    title: "Web Design for Landscapers",
    excerpt:
      "Show off your work and fill your calendar with booked quotes from local homeowners searching for landscapers.",
    image: "/bee_project.jpeg",
  },
  {
    slug: "roofing-pools",
    badge: "Roofing & Pools",
    title: "Roofing & Pool Contractors",
    excerpt:
      "Capture urgent, high-value leads with a fast, credibility-first website built for roofing and pool contractors.",
    image: "/crosal_project.jpeg",
  },
];
