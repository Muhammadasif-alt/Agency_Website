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
    eyebrow: "Web design for healthcare",
    tagline: "that attract and retain patients.",
    lead: "We build fast, trustworthy websites for clinics, dental practices, GP surgeries, physiotherapists and healthcare businesses — designed to get found and turn visitors into booked patients.",
    whyTitle: "Your healthcare website is your most important patient touchpoint",
    whyBody: [
      "Patients research providers online before they ever call. A slow, dated or confusing website quietly sends them to a competitor — often before they read a single word about your care.",
      "We build healthcare websites that load fast, build trust instantly and make booking effortless, so more of the people searching for your services actually become patients.",
    ],
    stats: [
      { value: "72%", label: "of patients judge a provider by their website before booking" },
      { value: "£599", label: "starting price for a complete healthcare practice website" },
      { value: "48hr", label: "first design draft — see your new site within 2 days" },
    ],
    features: [
      { icon: "fileText", title: "Treatment & service pages", description: "Clear pages for every treatment you offer, built to rank for the searches your patients actually make." },
      { icon: "calendar", title: "Online appointment booking", description: "Integrated booking or enquiry forms so patients can request an appointment 24/7 without calling." },
      { icon: "shield", title: "Trust & compliance design", description: "Credentials, reviews and accreditations built in, with GDPR-compliant forms and cookie handling." },
      { icon: "mapPin", title: "Local SEO for healthcare", description: "Google Business Profile, local citations and location keywords so you show up in your area." },
      { icon: "smartphone", title: "Mobile-first for patients", description: "Fast, tap-friendly design that works perfectly on the phones most patients search from." },
      { icon: "clipboard", title: "Patient forms & portals", description: "Secure intake forms, referrals and portals connected to the tools your practice already uses." },
    ],
    advantages: [
      { icon: "search", title: "Rank for healthcare searches", description: "Structured for the exact terms patients type when looking for your services locally." },
      { icon: "heartPulse", title: "Build patient trust online", description: "A professional, reassuring design that converts hesitant visitors into confident bookings." },
      { icon: "calendarCheck", title: "More appointments, less admin", description: "Online booking and forms take pressure off your front desk and fill your diary." },
      { icon: "users", title: "Reach new & private patients", description: "Reach both self-funding and insured patients with the right message in front of them." },
    ],
    ctaTitle: "Is your healthcare website costing you patients?",
    image: "/aloe_project.jpeg",
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    eyebrow: "Web design for landscapers",
    tagline: "that fill your calendar with jobs.",
    lead: "Websites for landscapers, gardeners and grounds-maintenance businesses — built to show off your work and turn local searches into booked quotes.",
    whyTitle: "Your landscaping website is your best salesperson",
    whyBody: [
      "Homeowners judge landscapers on results. If your website doesn't show beautiful before-and-afters and make it easy to request a quote, they'll call the next company on Google.",
      "We build visual, fast websites that showcase your projects and capture enquiries, so your best work brings in your next job.",
    ],
    stats: [
      { value: "90%", label: "of homeowners check a contractor's website before enquiring" },
      { value: "£599", label: "starting price for a complete landscaping website" },
      { value: "48hr", label: "first design draft — see your new site within 2 days" },
    ],
    features: [
      { icon: "image", title: "Project galleries", description: "Stunning before-and-after galleries that prove the quality of your work at a glance." },
      { icon: "fileText", title: "Quote request forms", description: "Simple, fast quote forms that turn a browsing homeowner into a real enquiry." },
      { icon: "mapPin", title: "Service area pages", description: "Local pages for every town you cover so you rank in the areas you actually serve." },
      { icon: "search", title: "Local SEO", description: "Google Business Profile and local citations so you appear in the map pack for landscaping." },
      { icon: "smartphone", title: "Mobile-first design", description: "Fast, tap-friendly pages for the phones most homeowners search and enquire from." },
      { icon: "star", title: "Reviews & trust", description: "Reviews, accreditations and guarantees built in to win trust before you even call back." },
    ],
    advantages: [
      { icon: "trending", title: "Win higher-value jobs", description: "A premium website attracts the premium clients who happily pay for quality work." },
      { icon: "image", title: "Show off your best work", description: "Portfolio-led design that lets your projects sell for you around the clock." },
      { icon: "mapPin", title: "Rank in your service area", description: "Local SEO that puts you in front of homeowners searching in the towns you cover." },
      { icon: "mail", title: "More quotes, less chasing", description: "Clear calls-to-action and forms that bring warm enquiries straight to your inbox." },
    ],
    ctaTitle: "Ready to book more landscaping jobs?",
    image: "/bee_project.jpeg",
  },
  {
    slug: "roofing-pools",
    name: "Roofing & Pools",
    eyebrow: "Web design for roofing & pool contractors",
    tagline: "that turn searches into signed jobs.",
    lead: "High-converting websites for roofing, pool and home-improvement contractors — built to capture urgent leads and win bigger projects.",
    whyTitle: "When a roof leaks or a pool breaks, people search fast",
    whyBody: [
      "Roofing and pool work is often urgent and high-value. Homeowners search on their phone and call the first contractor that looks trustworthy and responds quickly.",
      "We build fast, credibility-first websites with click-to-call, quote forms and financing options, so you capture those high-intent leads before your competitors do.",
    ],
    stats: [
      { value: "24hr", label: "the window most homeowners decide within for urgent repairs" },
      { value: "£599", label: "starting price for a complete contractor website" },
      { value: "48hr", label: "first design draft — see your new site within 2 days" },
    ],
    features: [
      { icon: "phone", title: "Click-to-call & quote forms", description: "Prominent call buttons and fast quote forms designed to capture urgent, high-intent leads." },
      { icon: "fileText", title: "Service & project pages", description: "Dedicated pages for roofing, pools, repairs and installs, each built to rank and convert." },
      { icon: "percent", title: "Financing & offers", description: "Highlight financing, warranties and seasonal offers that push bigger projects over the line." },
      { icon: "mapPin", title: "Local SEO", description: "Rank in the map pack for 'roofer near me' and pool services across your service area." },
      { icon: "shield", title: "Trust & credibility", description: "Licenses, insurance, guarantees and reviews front and centre to reassure homeowners." },
      { icon: "smartphone", title: "Mobile-first design", description: "Built for the phones almost every urgent repair search comes from." },
    ],
    advantages: [
      { icon: "zap", title: "Capture urgent leads", description: "Click-to-call and fast forms turn emergency searches into booked jobs immediately." },
      { icon: "trending", title: "Win bigger projects", description: "A premium, trustworthy site attracts full re-roofs and pool builds, not just small repairs." },
      { icon: "mapPin", title: "Rank locally", description: "Service-area SEO that puts you in front of homeowners the moment they search." },
      { icon: "award", title: "Stand out from cowboys", description: "Professional design and clear credentials that separate you from fly-by-night competitors." },
    ],
    ctaTitle: "Ready to win more roofing & pool jobs?",
    image: "/crosal_project.jpeg",
  },
  {
    slug: "job-portals",
    name: "Job Portals",
    eyebrow: "Development for job portals",
    tagline: "that connect talent with employers.",
    lead: "Custom job boards and recruitment platforms — with search, employer dashboards, applications and payments, built to scale on a modern stack.",
    whyTitle: "A job portal lives or dies on its user experience",
    whyBody: [
      "Candidates want fast, relevant search. Employers want an easy way to post roles and manage applicants. If either side struggles, they leave and don't come back.",
      "We build custom job portals with powerful search, clean dashboards and reliable payments — engineered for speed and ready to grow with your marketplace.",
    ],
    stats: [
      { value: "2x", label: "faster candidate search vs typical template job boards" },
      { value: "MERN", label: "or Next.js + Postgres — the right stack for real-time platforms" },
      { value: "Scale", label: "built to handle thousands of listings and users" },
    ],
    features: [
      { icon: "search", title: "Advanced job search", description: "Fast, filterable search by role, location, salary and category that candidates actually enjoy." },
      { icon: "dashboard", title: "Employer dashboards", description: "Self-serve posting, applicant tracking and company profiles for the employer side." },
      { icon: "fileText", title: "Applications & CVs", description: "Apply-in-one-click, CV uploads, saved jobs and email alerts for candidates." },
      { icon: "creditCard", title: "Payments & plans", description: "Paid job posts, featured listings and subscriptions with Stripe or your provider of choice." },
      { icon: "shield", title: "Admin & moderation", description: "A full admin panel to manage users, listings, payments and content quality." },
      { icon: "trending", title: "SEO for listings", description: "Job schema and clean URLs so individual listings rank and pull in organic traffic." },
    ],
    advantages: [
      { icon: "layers", title: "A platform that scales", description: "Built on MERN or Next.js so it handles growth without falling over." },
      { icon: "creditCard", title: "Revenue built in", description: "Multiple monetisation options wired in from day one — posts, features and subscriptions." },
      { icon: "users", title: "Great for both sides", description: "Experiences designed for candidates and employers so your marketplace keeps its balance." },
      { icon: "database", title: "Own your data", description: "A custom platform you fully own — no per-listing fees to a third-party job board." },
    ],
    ctaTitle: "Ready to build your job portal?",
    image: "/honest_cash_project.jpeg",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    eyebrow: "Web design for online stores",
    tagline: "that turn browsers into buyers.",
    lead: "Custom Shopify and headless stores built to convert — fast product pages, a smooth checkout and the integrations your store needs to grow.",
    whyTitle: "Your store's speed and design decide whether people buy",
    whyBody: [
      "Online shoppers are ruthless. A slow store, a clunky checkout or a design that doesn't build trust means an abandoned cart and a lost sale.",
      "We build conversion-first stores — on Shopify or a custom headless stack — that load fast, look premium and make buying effortless.",
    ],
    stats: [
      { value: "+38%", label: "typical conversion lift from a properly optimised store" },
      { value: "Shopify", label: "or headless Next.js — whichever fits your growth plan" },
      { value: "48hr", label: "first design draft — see your new store within 2 days" },
    ],
    features: [
      { icon: "store", title: "Custom storefronts", description: "Bespoke Shopify themes or headless builds designed around your brand and best sellers." },
      { icon: "cart", title: "Conversion-first checkout", description: "Streamlined product and checkout flows built to reduce drop-off and grow AOV." },
      { icon: "plug", title: "App & payment integrations", description: "Reviews, subscriptions, upsells, email and every payment method wired in and working." },
      { icon: "boxes", title: "Product & collection setup", description: "We structure your catalogue, variants and collections so the store is easy to run." },
      { icon: "search", title: "E-commerce SEO", description: "Product schema, fast pages and clean URLs so shoppers find you on Google and Shopping." },
      { icon: "barChart", title: "Analytics & tracking", description: "GA4, pixels and conversion tracking so you know exactly what drives sales." },
    ],
    advantages: [
      { icon: "trending", title: "Sell more, refund less", description: "Clear product pages and trust signals that convert and set the right expectations." },
      { icon: "zap", title: "A store that's fast", description: "Speed-tuned builds that keep shoppers moving toward checkout instead of bouncing." },
      { icon: "layers", title: "Scale without limits", description: "Shopify or headless architecture that grows with your catalogue and traffic." },
      { icon: "lineChart", title: "Own your growth", description: "Analytics and CRO baked in so every month you learn what to improve next." },
    ],
    ctaTitle: "Ready to grow your online store?",
    image: "/coreo_project.jpeg",
  },
  {
    slug: "saas",
    name: "SaaS & AI Tools",
    eyebrow: "Development for SaaS & AI products",
    tagline: "that launch fast and scale.",
    lead: "Full-stack SaaS platforms and AI tools — auth, billing, dashboards and APIs — built on Next.js, Node and modern cloud so you can launch and iterate quickly.",
    whyTitle: "Your product needs to ship fast and feel effortless",
    whyBody: [
      "In SaaS, speed to market and product experience are everything. A clunky build or a slow launch hands the advantage to your competitors.",
      "We build production-ready SaaS and AI tools — with authentication, subscriptions, dashboards and integrations — on a stack designed to scale from your first user to your thousandth.",
    ],
    stats: [
      { value: "Next.js", label: "+ Node, Postgres and AI APIs — a modern, scalable stack" },
      { value: "MVP", label: "shipped fast, then iterated on real user feedback" },
      { value: "Cloud", label: "deployed on Vercel or AWS with CI/CD from day one" },
    ],
    features: [
      { icon: "keyRound", title: "Auth & user accounts", description: "Secure sign-up, login, roles and teams with Auth.js or your provider of choice." },
      { icon: "creditCard", title: "Subscriptions & billing", description: "Stripe billing, plans, trials and usage limits wired in and ready to charge." },
      { icon: "dashboard", title: "Dashboards & analytics", description: "Clean, fast dashboards that make your product's value obvious to users." },
      { icon: "bot", title: "AI & API integrations", description: "LLMs, third-party APIs and webhooks integrated cleanly into your product." },
      { icon: "layers", title: "Landing + product", description: "A high-converting marketing site and the app itself, built as one cohesive whole." },
      { icon: "cloud", title: "Scalable architecture", description: "Databases, queues and infrastructure structured to handle real growth." },
    ],
    advantages: [
      { icon: "rocket", title: "Launch sooner", description: "A pragmatic MVP-first approach that gets you in front of users and revenue faster." },
      { icon: "trending", title: "Built to scale", description: "Architecture and cloud setup that grows with your user base, not against it." },
      { icon: "sparkles", title: "AI where it counts", description: "AI features integrated to genuinely improve the product, not as a gimmick." },
      { icon: "users", title: "One team, whole product", description: "Marketing site, app and infrastructure handled by the same team, under one plan." },
    ],
    ctaTitle: "Ready to build your SaaS or AI tool?",
    image: "/honest_cash_project.jpeg",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    eyebrow: "Web design for real estate",
    tagline: "that turn listings into leads.",
    lead: "Websites and portals for estate agents, brokers and property developers — with listings, search, maps and lead capture that convert browsers into viewings.",
    whyTitle: "Buyers and sellers start their journey online",
    whyBody: [
      "Property searches begin on a phone. If your listings are slow to load, hard to filter or don't capture enquiries, buyers move to Rightmove, Zillow or a competing agent.",
      "We build fast property websites and portals with powerful search, beautiful listings and built-in lead capture, so more searches turn into valuations and viewings.",
    ],
    stats: [
      { value: "12k", label: "monthly visits a well-built property portal can attract" },
      { value: "£599", label: "starting price for a complete estate agent website" },
      { value: "48hr", label: "first design draft — see your new site within 2 days" },
    ],
    features: [
      { icon: "home", title: "Property listings", description: "Beautiful, fast listing pages with galleries, floorplans, maps and enquiry forms." },
      { icon: "filter", title: "Advanced search & filters", description: "Search by price, area, bedrooms and type that buyers actually find useful." },
      { icon: "fileText", title: "Valuation & lead capture", description: "Instant valuation and enquiry forms that turn browsers into seller and buyer leads." },
      { icon: "map", title: "Map & area pages", description: "Interactive maps and neighbourhood pages that rank for local property searches." },
      { icon: "plug", title: "CRM & portal feeds", description: "Integrations with your CRM and portals so listings stay in sync automatically." },
      { icon: "search", title: "Real estate SEO", description: "Property schema and local SEO so your listings and area pages rank on Google." },
    ],
    advantages: [
      { icon: "trending", title: "More valuations", description: "Lead-capture and instant-valuation tools that fill your pipeline with sellers." },
      { icon: "building", title: "Showcase properties", description: "Premium listing design that makes every property look its absolute best." },
      { icon: "mapPin", title: "Rank for local property", description: "Area and listing SEO that pulls in buyers searching in your patch." },
      { icon: "users", title: "Own your leads", description: "A platform you control, capturing leads directly instead of paying per portal lead." },
    ],
    ctaTitle: "Ready to turn listings into leads?",
    image: "/crosal_project.jpeg",
  },
  {
    slug: "management-systems",
    name: "Management Systems",
    eyebrow: "Development for management systems",
    tagline: "that run your whole operation.",
    lead: "Custom management systems for schools, hospitals and organisations — student, patient, staff, inventory and admin portals built to fit exactly how you work.",
    whyTitle: "Off-the-shelf software rarely fits how you actually work",
    whyBody: [
      "Schools, hospitals and growing organisations get stuck with rigid, expensive software that forces messy workarounds and never quite fits their process.",
      "We build custom management systems — student and patient records, staff and scheduling, inventory, billing and reporting — designed around your exact workflow and built to scale securely.",
    ],
    stats: [
      { value: "Custom", label: "built around your exact process, not a rigid template" },
      { value: "Secure", label: "role-based access, audit logs and encrypted data" },
      { value: "Scale", label: "from one branch to many, on modern cloud infrastructure" },
    ],
    features: [
      { icon: "database", title: "Records management", description: "Student, patient or member records with secure, role-based access and full history." },
      { icon: "calendarClock", title: "Scheduling & staff", description: "Timetables, appointments, rosters and staff management in one place." },
      { icon: "barChart", title: "Dashboards & reporting", description: "Real-time dashboards and exportable reports for the metrics that matter to you." },
      { icon: "receipt", title: "Billing & payments", description: "Fees, invoices and payments handled securely and reconciled automatically." },
      { icon: "lock", title: "Roles & permissions", description: "Granular permissions so admins, staff and users each see exactly what they should." },
      { icon: "plug", title: "Integrations & API", description: "Connect to the tools you already use, with an API for anything custom." },
    ],
    advantages: [
      { icon: "cog", title: "Fits your workflow", description: "Software shaped around your process instead of forcing you to change how you work." },
      { icon: "shield", title: "Secure & compliant", description: "Role-based access, audit trails and encryption to protect sensitive data." },
      { icon: "zap", title: "Save hours of admin", description: "Automation that replaces spreadsheets and manual work across your organisation." },
      { icon: "trending", title: "Grow with confidence", description: "A system that scales from a single site to many, without a costly rebuild." },
    ],
    ctaTitle: "Ready to build your management system?",
    image: "/aloe_project.jpeg",
  },
];

export function getIndustryDetail(slug: string) {
  return industryDetails.find((i) => i.slug === slug);
}

export const industrySlugs = industryDetails.map((i) => i.slug);
