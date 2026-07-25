export type IndustryStat = { value: string; label: string };
export type IndustryFeature = {
  title: string;
  description: string;
  /** Icon key — mapped to a lucide icon in industry-detail.tsx. */
  icon: string;
};

export type IndustryDetail = {
  slug: string;
  name: string;
  eyebrow: string;
  /** Italic green part of the hero headline. */
  tagline: string;
  lead: string;
  whyTitle: string;
  whyBody: string[];
  stats: IndustryStat[];
  features: IndustryFeature[];
  advantages: IndustryFeature[];
  ctaTitle: string;
  image: string;
};

export const industryDetails: IndustryDetail[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    eyebrow: "Web design for healthcare & clinics",
    tagline: "that attract and retain patients.",
    lead: "Fast, trustworthy websites for clinics, dental practices, physiotherapists and healthcare businesses — built to get found locally and turn visitors into booked patients.",
    whyTitle: "Patients judge your practice by your website before they ever call",
    whyBody: [
      "People research providers online before they book. A slow, dated or confusing website quietly sends them to a competitor — often before they read a single word about your care.",
      "We build healthcare websites that load fast, build trust instantly and make booking effortless, so more of the people searching for your services actually become patients.",
    ],
    stats: [
      { value: "Local SEO", label: "rank for 'dentist near me' and treatment searches in your area" },
      { value: "Online booking", label: "appointment and enquiry forms so patients can book 24/7" },
      { value: "Mobile-first", label: "fast, tap-friendly design for the phones patients search from" },
    ],
    features: [
      { icon: "fileText", title: "Treatment & service pages", description: "Clear pages for every treatment you offer, built to rank for the searches your patients actually make." },
      { icon: "calendar", title: "Online appointment booking", description: "Integrated booking or enquiry forms so patients can request an appointment 24/7 without calling." },
      { icon: "shield", title: "Trust & credentials", description: "Credentials, reviews and accreditations built in, with privacy-conscious, compliant intake forms." },
      { icon: "mapPin", title: "Local SEO for healthcare", description: "Google Business Profile, local citations and location keywords so you show up in your area." },
      { icon: "smartphone", title: "Mobile-first for patients", description: "Fast, tap-friendly design that works perfectly on the phones most patients search from." },
      { icon: "clipboard", title: "Patient forms & portals", description: "Secure intake forms, referrals and portals connected to the tools your practice already uses." },
    ],
    advantages: [
      { icon: "search", title: "Rank for local searches", description: "Structured for the exact terms patients type when looking for your services locally." },
      { icon: "heartPulse", title: "Build patient trust", description: "A professional, reassuring design that converts hesitant visitors into confident bookings." },
      { icon: "calendarCheck", title: "More appointments, less admin", description: "Online booking and forms take pressure off your front desk and fill your schedule." },
      { icon: "users", title: "Reach the right patients", description: "Clear messaging that reaches the patients you want, for the services you actually offer." },
    ],
    ctaTitle: "Is your healthcare website costing you patients?",
    image: "/aloe_project.jpeg",
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    eyebrow: "Web design for landscapers & outdoor-living pros",
    tagline: "that fill your schedule with high-value jobs.",
    lead: "Fast, visual websites for landscapers, hardscapers and outdoor-living contractors — the kind we've shipped for design-build crews from Phoenix and El Paso to Ottawa and Charleston. Built to show off your work and turn local searches into booked consultations.",
    whyTitle: "Homeowners hire the contractor whose work they can see",
    whyBody: [
      "Before anyone requests a quote for a paver patio, retaining wall or outdoor kitchen, they Google local contractors and judge them on one thing — the photos. A slow, gallery-less site quietly hands that job to the next company.",
      "Every landscaping site we build leads with your projects: big before-and-after galleries, clear service-area pages and a fast quote form — so your best work books your next job while you're out on site.",
    ],
    stats: [
      { value: "6+", label: "landscaping & outdoor-living sites shipped across the US & Canada" },
      { value: "Local SEO", label: "built to rank for your city and service-area searches" },
      { value: "Finance-ready", label: "0% finance offers and quote forms built in, like your competitors run" },
    ],
    features: [
      { icon: "image", title: "Project galleries", description: "Big before-and-after galleries of patios, pavers, turf and outdoor kitchens that prove your quality at a glance." },
      { icon: "fileText", title: "Free-consultation forms", description: "The 'Book a Free Consultation' / 'Get Your Free Quote' flow every top contractor site runs, wired straight to your inbox." },
      { icon: "mapPin", title: "Service-area pages", description: "A page for every town you cover — Scottsdale, El Paso, Ottawa — so you rank where you actually work." },
      { icon: "search", title: "Local SEO & Google Profile", description: "Google Business Profile, map-pack and local citations so you show up for 'landscaper near me'." },
      { icon: "percent", title: "Financing & offers", description: "Highlight 0% financing, seasonal offers and warranties that push bigger projects over the line." },
      { icon: "shield", title: "Trust & licensing", description: "Licensed, bonded & insured badges, reviews and warranties front and center to win trust before you call back." },
    ],
    advantages: [
      { icon: "trending", title: "Win higher-value jobs", description: "A premium, portfolio-led site attracts the $10k–$50k paver, pool-deck and outdoor-kitchen projects, not just small repairs." },
      { icon: "image", title: "Show off your best work", description: "Gallery-first design that lets your finished projects sell for you around the clock." },
      { icon: "mapPin", title: "Rank in your service area", description: "Local SEO that puts you in front of homeowners searching in every town you serve." },
      { icon: "mail", title: "More quotes, less chasing", description: "Clear 'free consultation' CTAs that bring warm, ready-to-book enquiries straight to you." },
    ],
    ctaTitle: "Ready to book more outdoor-living jobs?",
    image: "/bee_project.jpeg",
  },
  {
    slug: "roofing-pools",
    name: "Roofing & Pools",
    eyebrow: "Web design for roofing & pool contractors",
    tagline: "that turn urgent searches into signed jobs.",
    lead: "High-converting websites for roofing and pool contractors — the kind we've built for crews like Pro Roofing in Arizona and roofers across Texas. Built to capture urgent storm-damage leads and win full re-roofs and pool builds.",
    whyTitle: "When a roof leaks or a storm hits, people call the first contractor they trust",
    whyBody: [
      "Roofing and pool work is urgent and high-value. A homeowner with monsoon or hail damage searches on their phone and calls whoever looks licensed, reviewed and responsive — usually within a day.",
      "We build fast, credibility-first sites with click-to-call, free-inspection booking and insurance-claim help, so you catch those high-intent leads before your competitors even answer.",
    ],
    stats: [
      { value: "Free inspection", label: "the booking flow that converts urgent roof & storm leads" },
      { value: "Insurance-ready", label: "storm & hail claim assistance built right into the page" },
      { value: "AZ & TX", label: "roofing contractor sites already live and generating leads" },
    ],
    features: [
      { icon: "phone", title: "Click-to-call & free inspection", description: "Prominent call buttons and 'Book Your Free Inspection' forms designed to capture urgent, high-intent leads fast." },
      { icon: "fileText", title: "Service & roof-type pages", description: "Dedicated pages for tile, shingle, flat/TPO, repairs and pool builds — each built to rank and convert." },
      { icon: "shield", title: "Storm & insurance help", description: "Storm and hail-damage pages with insurance-claim assistance, the way Arizona and Texas roofers actually win work." },
      { icon: "mapPin", title: "Local SEO", description: "Rank in the map pack for 'roofer near me' and pool services across every city you serve." },
      { icon: "award", title: "Licensing & trust", description: "License numbers, 'bonded & insured', warranties and 5-star reviews front and center to reassure homeowners." },
      { icon: "smartphone", title: "Mobile-first design", description: "Built for the phones almost every urgent repair search comes from." },
    ],
    advantages: [
      { icon: "zap", title: "Capture urgent leads", description: "Click-to-call and free-inspection forms turn emergency storm searches into booked jobs the same day." },
      { icon: "trending", title: "Win bigger projects", description: "A premium, trustworthy site attracts full re-roofs and pool builds, not just patch jobs." },
      { icon: "mapPin", title: "Rank locally", description: "Service-area SEO that puts you in front of homeowners the moment they search." },
      { icon: "award", title: "Stand out as legit", description: "License numbers and clear credentials that separate you from storm-chasing fly-by-nights." },
    ],
    ctaTitle: "Ready to win more roofing & pool jobs?",
    image: "/crosal_project.jpeg",
  },
  {
    slug: "job-portals",
    name: "Job Portals",
    eyebrow: "Development for job portals & career platforms",
    tagline: "that connect talent with employers.",
    lead: "Custom job boards and career platforms — like Jobs in USA, a nationwide board with 8,000+ verified listings we built — with fast search, employer dashboards, one-click apply and payments, engineered to scale.",
    whyTitle: "A job portal lives or dies on search and trust",
    whyBody: [
      "Candidates want fast, relevant search and a one-click apply. Employers want easy posting and real exposure. And everyone wants to know the listings are genuine — no scams, no ghost listings. If any of that breaks, they leave.",
      "We build custom job portals with powerful search, clean employer dashboards, CV registration, alerts and verification — the exact stack behind Jobs in USA — ready to grow to thousands of listings.",
    ],
    stats: [
      { value: "8,000+", label: "verified listings on Jobs in USA, a job board we built" },
      { value: "50 states", label: "nationwide search, alerts and one-click apply" },
      { value: "Verified", label: "employer verification so it stays 'no scams, no ghost listings'" },
    ],
    features: [
      { icon: "search", title: "Advanced job search", description: "Fast, filterable search by role, location, salary and category that candidates actually enjoy." },
      { icon: "dashboard", title: "Employer dashboards", description: "Self-serve posting, applicant tracking and company profiles for the employer side." },
      { icon: "fileText", title: "One-click apply & CVs", description: "Register-CV, saved jobs, one-click apply and email job alerts for candidates." },
      { icon: "shield", title: "Employer verification", description: "Review and verify every employer so your board stays free of scams and ghost listings." },
      { icon: "creditCard", title: "Payments & plans", description: "Paid job posts, featured listings and subscriptions with Stripe or your provider of choice." },
      { icon: "trending", title: "SEO for listings", description: "Job schema and clean URLs so individual listings rank and pull in organic traffic." },
    ],
    advantages: [
      { icon: "layers", title: "A platform that scales", description: "Built on a modern stack (Next.js / MERN) so it handles thousands of jobs and users." },
      { icon: "creditCard", title: "Revenue built in", description: "Paid posts, featured listings and subscriptions wired in from day one." },
      { icon: "users", title: "Trust that retains", description: "Verification and clean UX that keep candidates and employers coming back." },
      { icon: "database", title: "Own your data", description: "A custom platform you fully own — no per-listing fees to a third-party board." },
    ],
    ctaTitle: "Ready to build your job portal?",
    image: "/honest_cash_project.jpeg",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    eyebrow: "Web design for online stores",
    tagline: "that turn browsers into buyers.",
    lead: "Custom online stores on Shopify and WooCommerce, built and optimized to sell. We don't just design the store — we rank it: one e-commerce SEO project lifted product-page rankings 156% and added $124k in revenue.",
    whyTitle: "A store only makes money if people find it and trust it",
    whyBody: [
      "Shoppers are ruthless — a slow store, a clunky checkout or a design that doesn't build trust means an abandoned cart. And a beautiful store nobody can find on Google makes no sales at all.",
      "We build conversion-first stores on Shopify or WooCommerce and back them with real e-commerce SEO, so you get a store that both converts and pulls in organic buyers.",
    ],
    stats: [
      { value: "156%", label: "product-page ranking lift from one e-commerce SEO project" },
      { value: "$124k", label: "additional revenue that store earned from SEO" },
      { value: "Shopify + Woo", label: "custom stores we build, then rank on Google" },
    ],
    features: [
      { icon: "store", title: "Custom storefronts", description: "Bespoke Shopify or WooCommerce builds designed around your brand and best sellers." },
      { icon: "cart", title: "Conversion-first checkout", description: "Streamlined product and checkout flows built to cut drop-off and grow average order value." },
      { icon: "plug", title: "App & payment integrations", description: "Reviews, subscriptions, upsells, email and every payment method wired in and working." },
      { icon: "boxes", title: "Product & collection setup", description: "We structure your catalogue, variants and collections so the store is easy to run." },
      { icon: "search", title: "E-commerce SEO", description: "Product schema, fast pages and clean URLs so shoppers find you on Google and Shopping." },
      { icon: "barChart", title: "Analytics & tracking", description: "GA4, pixels and conversion tracking so you know exactly what drives sales." },
    ],
    advantages: [
      { icon: "trending", title: "Rank and sell", description: "A store built to convert and rank, so you grow from paid and organic traffic together." },
      { icon: "zap", title: "A store that's fast", description: "Speed-tuned builds that keep shoppers moving toward checkout instead of bouncing." },
      { icon: "layers", title: "Scale without limits", description: "Shopify or WooCommerce architecture that grows with your catalogue and traffic." },
      { icon: "lineChart", title: "Revenue you can measure", description: "Analytics and CRO baked in so every month you learn what to improve next." },
    ],
    ctaTitle: "Ready to grow your online store?",
    image: "/coreo_project.jpeg",
  },
  {
    slug: "saas",
    name: "SaaS & AI Tools",
    eyebrow: "Development for SaaS, web apps & AI tools",
    tagline: "that launch fast and scale.",
    lead: "Full-stack SaaS platforms, web apps and AI tools — auth, dashboards, billing and API integrations — built on Next.js, Node and modern cloud. The same custom-platform engineering behind Jobs in USA and the ErrandBee booking service, with AI baked in where it genuinely helps.",
    whyTitle: "Your product needs to ship fast and feel effortless",
    whyBody: [
      "For a platform, speed to market and a clean experience are everything. A clunky build or a slow launch hands the advantage straight to your competitors.",
      "We build production-ready web apps — accounts, dashboards, payments, booking and integrations — on a stack designed to scale from your first user to your thousandth.",
    ],
    stats: [
      { value: "Next.js / MERN", label: "the modern, scalable stack we build client platforms on" },
      { value: "Custom", label: "platforms like Jobs in USA and ErrandBee, not rigid templates" },
      { value: "Cloud", label: "deployed on Vercel or AWS with CI/CD from day one" },
    ],
    features: [
      { icon: "keyRound", title: "Auth & user accounts", description: "Secure sign-up, login, roles and teams with modern authentication." },
      { icon: "creditCard", title: "Payments & billing", description: "Stripe, Tabby, Apple Pay and subscriptions wired in and ready to charge." },
      { icon: "dashboard", title: "Dashboards & admin", description: "Clean, fast dashboards and admin panels that make your product easy to run." },
      { icon: "calendar", title: "Booking & workflows", description: "Booking, scheduling and workflow flows like the ErrandBee platform we built." },
      { icon: "bot", title: "AI & API integrations", description: "LLMs, third-party APIs and webhooks integrated cleanly where they genuinely improve the product." },
      { icon: "cloud", title: "Scalable architecture", description: "Databases, queues and infrastructure structured to handle real growth." },
    ],
    advantages: [
      { icon: "rocket", title: "Launch sooner", description: "A pragmatic MVP-first approach that gets you in front of users and revenue faster." },
      { icon: "trending", title: "Built to scale", description: "Architecture and cloud setup that grows with your user base, not against it." },
      { icon: "users", title: "One team, whole product", description: "Marketing site, app and infrastructure handled by the same team, under one plan." },
      { icon: "database", title: "You own it", description: "A custom platform you fully own — no per-seat fees to someone else's SaaS." },
    ],
    ctaTitle: "Ready to build your platform?",
    image: "/honest_cash_project.jpeg",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    eyebrow: "Web design for real estate & property",
    tagline: "that turn traffic into real offers.",
    lead: "Websites for estate agents, brokers, developers and cash home-buyers — like Address2Cash in North Carolina — with listings, fast lead capture and service-area SEO that turn searches into valuations, viewings and offers.",
    whyTitle: "Buyers and sellers decide online, on their phone",
    whyBody: [
      "Whether someone is buying, selling or after a fast cash offer, they start on a phone. If your site is slow, hard to search or doesn't capture the enquiry, they move to Zillow, Realtor.com or a competing agent.",
      "We build fast property sites with clear lead capture — instant valuations, 'get my cash offer' forms, listings and area pages — so more visitors become real seller and buyer leads that you own.",
    ],
    stats: [
      { value: "24hr", label: "written-offer turnaround, like the Address2Cash site we built" },
      { value: "No-fee leads", label: "capture enquiries directly instead of paying per portal lead" },
      { value: "Local SEO", label: "area and neighborhood pages built to rank in your market" },
    ],
    features: [
      { icon: "fileText", title: "Cash-offer & valuation forms", description: "'Get my cash offer' and instant-valuation forms that turn browsers into real seller leads in 24 hours." },
      { icon: "home", title: "Property listings", description: "Fast listing pages with galleries, maps and enquiry forms for agents and developers." },
      { icon: "filter", title: "Advanced search & filters", description: "Search by price, area, beds and type that buyers actually find useful." },
      { icon: "mapPin", title: "Service-area & city pages", description: "Pages for every city and neighborhood you work — Raleigh, Durham, Charlotte — built to rank locally." },
      { icon: "plug", title: "CRM & portal feeds", description: "Integrate your CRM and portals so leads and listings stay in sync automatically." },
      { icon: "search", title: "Real estate SEO", description: "Property schema and local SEO so your listings and area pages show up on Google." },
    ],
    advantages: [
      { icon: "trending", title: "More seller leads", description: "Cash-offer and valuation tools that fill your pipeline with motivated sellers." },
      { icon: "users", title: "Own your leads", description: "Capture enquiries directly on a site you control — no per-lead fees to a portal." },
      { icon: "mapPin", title: "Rank in your market", description: "Area and city SEO that pulls in buyers and sellers searching in your patch." },
      { icon: "shield", title: "Close with confidence", description: "Trustworthy design and real reviews that make people comfortable transacting with you." },
    ],
    ctaTitle: "Ready to turn property searches into offers?",
    image: "/crosal_project.jpeg",
  },
  {
    slug: "management-systems",
    name: "Management Systems",
    eyebrow: "Development for management systems",
    tagline: "that run your whole operation.",
    lead: "Custom management systems for schools, clinics, service businesses and growing teams — records, scheduling, billing, dispatch and admin portals built around exactly how you work, the way we engineered the ops behind a service platform like ErrandBee.",
    whyTitle: "Off-the-shelf software rarely fits how you actually work",
    whyBody: [
      "Growing organizations get stuck with rigid, expensive software that forces messy workarounds and never quite fits their process.",
      "We build custom management systems — records, scheduling, dispatch, billing and reporting — designed around your workflow and built to scale securely.",
    ],
    stats: [
      { value: "Custom", label: "built around your exact process, not a rigid template" },
      { value: "Secure", label: "role-based access, audit logs and encrypted data" },
      { value: "Scale", label: "from one location to many, on modern cloud infrastructure" },
    ],
    features: [
      { icon: "database", title: "Records management", description: "Student, patient, customer or member records with secure, role-based access and full history." },
      { icon: "calendarClock", title: "Scheduling & dispatch", description: "Timetables, appointments, rosters and job dispatch in one place." },
      { icon: "barChart", title: "Dashboards & reporting", description: "Real-time dashboards and exportable reports for the metrics that matter to you." },
      { icon: "receipt", title: "Billing & payments", description: "Invoices, fees and payments handled securely and reconciled automatically." },
      { icon: "lock", title: "Roles & permissions", description: "Granular permissions so admins, staff and users each see exactly what they should." },
      { icon: "plug", title: "Integrations & API", description: "Connect the tools you already use, with an API for anything custom." },
    ],
    advantages: [
      { icon: "cog", title: "Fits your workflow", description: "Software shaped around your process instead of forcing you to change how you work." },
      { icon: "shield", title: "Secure & compliant", description: "Role-based access, audit trails and encryption to protect sensitive data." },
      { icon: "zap", title: "Save hours of admin", description: "Automation that replaces spreadsheets and manual work across your team." },
      { icon: "trending", title: "Grow with confidence", description: "A system that scales from a single location to many, without a costly rebuild." },
    ],
    ctaTitle: "Ready to build your management system?",
    image: "/aloe_project.jpeg",
  },
];

export function getIndustryDetail(slug: string) {
  return industryDetails.find((i) => i.slug === slug);
}

export const industrySlugs = industryDetails.map((i) => i.slug);
