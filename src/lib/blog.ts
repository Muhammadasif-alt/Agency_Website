export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** Icon key — mapped to a lucide icon in blog-cover.tsx. */
  icon: string;
  /** ISO date string. */
  date: string;
  readMinutes: number;
  author: string;
  intro: string;
  sections: BlogSection[];
  takeaway?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "website-speed-costing-customers",
    title: "Why a Slow Website Is Quietly Costing You Customers",
    excerpt:
      "Every extra second your site takes to load sends visitors — and sales — to a competitor. Here's what actually slows sites down, and how to fix it.",
    category: "Web Performance",
    icon: "gauge",
    date: "2026-07-14",
    readMinutes: 5,
    author: "Development By Niaz",
    intro:
      "Most business owners never see it happen. Someone taps your link, waits two or three seconds, gets bored, and hits back — gone before your homepage even loads. Multiply that by every visitor and a slow website becomes one of the most expensive problems you're not measuring.",
    sections: [
      {
        heading: "What slow speed actually costs you",
        paragraphs: [
          "Google's own research is blunt: as page load time goes from one second to three, the chance a visitor leaves jumps by 32%. At five seconds it's around 90%. Speed doesn't just annoy people — it decides whether they ever see your offer.",
          "It also affects rankings. Core Web Vitals — Google's speed and stability metrics — are a ranking factor. A slow site is fighting Google and its own visitors at the same time.",
        ],
      },
      {
        heading: "The usual culprits",
        list: [
          "Huge, uncompressed images uploaded straight from a phone or camera.",
          "A bloated theme and a dozen plugins doing what a few lines of code could.",
          "Cheap shared hosting that buckles the moment you get traffic.",
          "No caching, so every visitor rebuilds the whole page from scratch.",
          "Render-blocking scripts and fonts that freeze the page while they load.",
        ],
      },
      {
        heading: "How we fix it",
        paragraphs: [
          "We start with a real measurement — PageSpeed Insights and field data, not guesses. Then we compress and correctly size images, strip unused plugins and scripts, add proper caching and a CDN, and serve modern image formats.",
          "For builds where speed is critical, we go a step further and build on a modern stack (Next.js) that ships fast, pre-rendered pages by default. Most sites we touch go from a 3–5 second load to under 2.",
        ],
      },
    ],
    takeaway:
      "If your site takes more than two seconds to load, you're paying for it in lost enquiries every single day. A speed audit is the cheapest way to find out how much.",
  },
  {
    slug: "how-to-rank-on-google-2026",
    title: "How to Actually Rank on Google in 2026 (Without the Jargon)",
    excerpt:
      "Ranking on Google isn't magic — it's a handful of fundamentals done consistently. Here's the practical version for small businesses.",
    category: "SEO",
    icon: "search",
    date: "2026-07-08",
    readMinutes: 6,
    author: "Development By Niaz",
    intro:
      "SEO gets wrapped in mystery because that's how a lot of agencies justify their invoice. The truth is simpler: Google wants to show the most relevant, trustworthy, fastest answer to what someone searched. Do that better than your competitors and you rank. Here's how that breaks down.",
    sections: [
      {
        heading: "1. Target what people actually search",
        paragraphs: [
          "Rankings start with keywords — the exact phrases your customers type. 'Dentist near me', 'roofer in Phoenix', 'landscaper for backyard'. Build a dedicated page for each core service and location instead of cramming everything onto one page.",
        ],
      },
      {
        heading: "2. Get the technical foundations right",
        list: [
          "Fast load times and mobile-first design (see our post on site speed).",
          "Clean URLs, proper heading structure and descriptive title tags.",
          "Schema markup so Google understands your business, reviews and services.",
          "An XML sitemap and no crawl errors blocking Google from your pages.",
        ],
      },
      {
        heading: "3. Win local search",
        paragraphs: [
          "For most small businesses, the money is in local results and the map pack. Claim and fully complete your Google Business Profile, keep your name, address and phone consistent everywhere, and collect real reviews. This alone outranks a lot of bigger competitors.",
        ],
      },
      {
        heading: "4. Publish content that answers questions",
        paragraphs: [
          "Every question a customer asks is a page you could rank for. Helpful, specific content — like the article you're reading — builds trust with both Google and the humans deciding whether to hire you.",
        ],
      },
    ],
    takeaway:
      "You don't need tricks to rank — you need the fundamentals done properly and consistently. Start with a free audit and we'll show you exactly where you stand.",
  },
  {
    slug: "common-wordpress-problems",
    title: "5 Common WordPress Problems That Hurt Your Business",
    excerpt:
      "Slow load times, security scares, broken updates — the WordPress issues we fix most often, and how to avoid them.",
    category: "WordPress",
    icon: "wrench",
    date: "2026-06-30",
    readMinutes: 5,
    author: "Development By Niaz",
    intro:
      "WordPress powers a huge share of the web for good reason — it's flexible and everyone knows it. But that flexibility is also how sites end up slow, insecure or broken. These are the five problems we're called in to fix most often.",
    sections: [
      {
        heading: "1. Plugin overload",
        paragraphs: [
          "Every plugin is code someone else maintains, loading on your site. Twenty plugins means twenty things that can slow you down, conflict, or open a security hole. We audit what's actually needed and replace the rest with lightweight, purpose-built code.",
        ],
      },
      {
        heading: "2. It's slow",
        paragraphs: [
          "Bloated themes, unoptimised images and cheap hosting make WordPress crawl. Proper caching, image optimisation and good hosting usually cut load times in half.",
        ],
      },
      {
        heading: "3. Security and spam",
        paragraphs: [
          "Out-of-date plugins are the number one way WordPress sites get hacked. We keep everything patched, add a firewall and spam protection, and take regular backups so a bad day never becomes a disaster.",
        ],
      },
      {
        heading: "4. Updates that break the site",
        paragraphs: [
          "Hitting 'update' and watching your layout fall apart is every owner's nightmare. We test updates on a staging copy first, so nothing breaks on the live site your customers see.",
        ],
      },
      {
        heading: "5. It's hard to edit",
        paragraphs: [
          "A good WordPress build should let you change text, images and blog posts without touching code or fearing you'll break something. If yours doesn't, it was built wrong.",
        ],
      },
    ],
    takeaway:
      "WordPress isn't the problem — how it's built and maintained is. A maintenance plan turns it from a liability into a reliable business asset.",
  },
  {
    slug: "contact-form-not-generating-leads",
    title: "Your Contact Form Isn't Getting Leads — Here's Why",
    excerpt:
      "You're getting visitors but no enquiries. Nine times out of ten it's one of these fixable problems with your form and calls-to-action.",
    category: "Conversion",
    icon: "form",
    date: "2026-06-22",
    readMinutes: 4,
    author: "Development By Niaz",
    intro:
      "Traffic without enquiries is one of the most frustrating problems in business — people are visiting, but nobody's getting in touch. Usually it's not the traffic that's broken. It's what happens once they land.",
    sections: [
      {
        heading: "The form asks for too much",
        paragraphs: [
          "Every extra field costs you leads. If you're asking for a company name, budget, phone, address and a five-part message before someone's even sure about you, most people give up. Ask for the minimum, then follow up.",
        ],
      },
      {
        heading: "The call-to-action is weak or hidden",
        paragraphs: [
          "'Submit' is not a reason to act. 'Get my free quote' or 'Book a free consultation' tells people exactly what they get. And your main call-to-action should be impossible to miss — above the fold and repeated down the page.",
        ],
      },
      {
        heading: "It's broken on mobile",
        paragraphs: [
          "Most of your visitors are on a phone. If the form is fiddly, the keyboard covers the fields, or the submit button is off-screen, they'll never finish. We test every form on real devices.",
        ],
      },
      {
        heading: "The emails go to spam",
        paragraphs: [
          "Sometimes leads are coming in — they're just landing in a junk folder you never check, or the form silently fails. We set up reliable delivery and instant notifications so no enquiry is ever lost.",
        ],
      },
    ],
    takeaway:
      "Small changes to your form and calls-to-action often double enquiries from the same traffic. It's the cheapest growth you'll find.",
  },
  {
    slug: "no-website-traffic-reasons",
    title: "No Traffic to Your Website? 7 Reasons Nobody's Finding You",
    excerpt:
      "A beautiful website nobody visits makes no money. Here are the seven most common reasons your site gets no traffic — and how to turn it around.",
    category: "SEO",
    icon: "traffic",
    date: "2026-06-15",
    readMinutes: 6,
    author: "Development By Niaz",
    intro:
      "You paid for a website, it looks great, and… nothing. No calls, no enquiries, no visitors. A site with no traffic is a billboard in the desert. Here are the seven reasons it happens, roughly in order of how often we see them.",
    sections: [
      {
        heading: "The seven usual reasons",
        list: [
          "You're not ranking for anything — no keyword targeting, no service or location pages.",
          "Your Google Business Profile is unclaimed or half-finished, so you're invisible in local search.",
          "The site is slow, which pushes you down the rankings and off the first page.",
          "There's barely any content — a couple of thin pages give Google nothing to rank.",
          "No backlinks or citations, so Google has no reason to trust you over established competitors.",
          "You're relying on word of mouth and never told Google the site exists (no sitemap, not indexed).",
          "You launched and stopped — SEO is ongoing, and competitors who keep going overtake you.",
        ],
      },
      {
        heading: "How to turn it around",
        paragraphs: [
          "Start by finding out where you actually stand: is the site indexed, is it fast, are you targeting the right terms, and is your Google Business Profile complete? From there it's methodical work — the right pages, real content, local SEO and consistency over a few months.",
          "The good news is that most competitors give up early. Doing the fundamentals properly and sticking with them is usually enough to climb past them.",
        ],
      },
    ],
    takeaway:
      "Traffic isn't luck — it's the result of being findable. A free audit will tell you exactly which of these seven is holding you back.",
  },
  {
    slug: "local-seo-for-contractors",
    title: "Local SEO for Contractors: How to Get Found by Customers Near You",
    excerpt:
      "For roofers, landscapers and home-service pros, local search is where the jobs are. Here's how to show up when homeowners search 'near me'.",
    category: "Local SEO",
    icon: "mapPin",
    date: "2026-06-06",
    readMinutes: 5,
    author: "Development By Niaz",
    intro:
      "When a homeowner needs a roof repaired or a patio built, they don't open a directory — they Google 'roofer near me' and call one of the first few results. If you're a contractor and you're not in those results, you're invisible for the jobs that matter most. Here's how to fix that.",
    sections: [
      {
        heading: "Nail your Google Business Profile",
        paragraphs: [
          "This is the single biggest lever in local SEO. Claim it, choose the right categories, add real photos of your work, list your services and service areas, and keep your hours and phone number accurate. A complete profile can outrank a bigger company's website.",
        ],
      },
      {
        heading: "Build a page for every service and area",
        paragraphs: [
          "One page listing everything won't rank for much. Instead, create a page for each service ('tile roofing', 'paver patios') and each town you cover. That's how you show up for 'roofer in Scottsdale' as well as 'roofer near me'.",
        ],
      },
      {
        heading: "Collect reviews — and reply to them",
        paragraphs: [
          "Reviews are both a ranking factor and the thing that convinces a homeowner to call you over the next guy. Ask every happy customer, make it easy with a direct link, and reply to every review you get.",
        ],
      },
      {
        heading: "Get the basics consistent",
        list: [
          "Same business name, address and phone everywhere online.",
          "Listings on the directories that matter in your area.",
          "A fast, mobile-first website — most of these searches are on a phone.",
          "Clear click-to-call and quote buttons so an urgent lead can reach you in one tap.",
        ],
      },
    ],
    takeaway:
      "For contractors, local SEO isn't optional — it's where your next jobs come from. We build contractor sites and profiles designed to rank in exactly these searches.",
  },
  {
    slug: "how-to-improve-website-design",
    title: "How to Improve Your Website Design (7 Changes That Actually Matter)",
    excerpt:
      "Good design isn't about looking pretty — it's about guiding visitors to act. Seven changes that make a site look modern and convert better.",
    category: "Design",
    icon: "palette",
    date: "2026-07-20",
    readMinutes: 5,
    author: "Development By Niaz",
    intro:
      "Most websites don't need a full rebuild to look dramatically better — they need a handful of design fundamentals fixed. Here are the seven changes we make most often that instantly lift how modern, trustworthy and effective a site feels.",
    sections: [
      {
        heading: "The changes that make the biggest difference",
        list: [
          "Give everything room to breathe — generous white space reads as premium, cramped reads as cheap.",
          "Use one clear typeface pairing and a real type scale instead of ten random sizes.",
          "Lead every page with one obvious headline and one primary call-to-action.",
          "Replace stock clichés with real photos of your work, team and results.",
          "Stick to a tight, consistent colour palette with a single accent for actions.",
          "Make it fast and flawless on mobile first — that's where most people see it.",
          "Add proof — reviews, logos, numbers and case studies — near every ask.",
        ],
      },
      {
        heading: "Design is about direction, not decoration",
        paragraphs: [
          "The best-designed sites quietly walk a visitor from 'what is this?' to 'I want this' to 'here's my enquiry'. Every section should answer a question and point to the next step. If a design element doesn't help the visitor decide, it's decoration — and decoration usually gets in the way.",
        ],
      },
      {
        heading: "When it's worth a rebuild",
        paragraphs: [
          "If your site is slow, hard to edit, not mobile-friendly, or built on an ageing template, patching the design only goes so far. In that case a clean rebuild on a modern foundation is usually cheaper over a couple of years than fighting the old one.",
        ],
      },
    ],
    takeaway:
      "You don't need a redesign to look far more professional — you need the fundamentals done right. Send us your site and we'll point out the quickest wins for free.",
  },
  {
    slug: "website-one-time-investment",
    title: "A Website Is a One-Time Investment — If It's Built Right",
    excerpt:
      "The cheapest freelancer is rarely the cheapest option. Why a properly built site pays for itself for years, and how bad builds cost you twice.",
    category: "Business",
    icon: "invest",
    date: "2026-07-18",
    readMinutes: 5,
    author: "Development By Niaz",
    intro:
      "A good website is one of the best investments a business can make: build it once, and it works for you for years — bringing in leads while you sleep. The problem is that 'cheap' and 'good' rarely overlap, and a bad build ends up costing you far more than a proper one ever would.",
    sections: [
      {
        heading: "How cheap builds cost you twice",
        paragraphs: [
          "An inexperienced freelancer working for a few hundred dollars has to cut corners to make it worthwhile. You get a slow, template-heavy site with no SEO, no strategy and no support. Six months later it's not ranking, not converting, and often half-broken.",
          "So you pay again — this time to have it rebuilt properly. You didn't save money; you spent it twice and lost months of leads in between.",
        ],
      },
      {
        heading: "What 'built right' actually means",
        list: [
          "Built to convert, not just to look nice — every page has a job.",
          "SEO baked in from day one so it can actually be found.",
          "Fast, secure and mobile-first, so it holds up as you grow.",
          "Easy for you to update, with support when you need it.",
          "Owned by you — no being held hostage over logins or hosting.",
        ],
      },
      {
        heading: "The long-term maths",
        paragraphs: [
          "A well-built site is a one-time investment that keeps returning for years. If it brings in even one or two extra clients a month, it pays for itself many times over — while the 'cheap' version quietly costs you the clients you never knew you missed.",
        ],
      },
    ],
    takeaway:
      "Build it once, build it right. It's almost always cheaper than building it twice — and it starts earning from day one.",
  },
  {
    slug: "benefits-of-custom-coded-website",
    title: "The Real Benefits of a Custom-Coded Website",
    excerpt:
      "Templates get you online fast, but a custom-coded site is faster, more secure and built around your business. Here's when it's worth it.",
    category: "Custom Code",
    icon: "code",
    date: "2026-07-16",
    readMinutes: 5,
    author: "Development By Niaz",
    intro:
      "Page builders and templates have their place — but there's a reason serious brands invest in custom-coded websites. When performance, uniqueness and scale matter, hand-built beats drag-and-drop every time. Here's what you actually gain.",
    sections: [
      {
        heading: "Speed you can feel",
        paragraphs: [
          "Templates ship with code for every feature you might use — most of which you don't. A custom build only loads what your site actually needs, so pages load in a fraction of the time. That means better rankings and more visitors who stick around.",
        ],
      },
      {
        heading: "Built around your business, not a template",
        paragraphs: [
          "Off-the-shelf themes force your business to fit their layout. Custom code does the opposite — the site is shaped around exactly how you sell, the journey you want visitors to take, and the features you actually need.",
        ],
      },
      {
        heading: "More secure and easier to scale",
        list: [
          "No bloated plugins that are the number one target for hackers.",
          "A clean codebase that's easy to extend as you grow.",
          "Integrations — bookings, payments, CRMs, AI — built to fit exactly.",
          "You own the code outright; nothing is locked behind someone else's platform.",
        ],
      },
      {
        heading: "When a template is fine",
        paragraphs: [
          "To be fair, if you need a simple brochure site up quickly and cheaply, a well-built WordPress or Shopify site is a perfectly good choice. Custom code earns its keep when speed, a unique experience, or complex functionality really matter.",
        ],
      },
    ],
    takeaway:
      "Custom code isn't about showing off — it's about a site that's faster, safer and built to grow with you. We'll tell you honestly whether your project needs it.",
  },
  {
    slug: "wordpress-vs-nextjs",
    title: "WordPress vs Next.js: Which Should Your Business Use?",
    excerpt:
      "Two of the most popular ways to build a website — but they suit very different needs. A jargon-free guide to picking the right one.",
    category: "Comparison",
    icon: "compare",
    date: "2026-07-12",
    readMinutes: 6,
    author: "Development By Niaz",
    intro:
      "We build on both WordPress and Next.js, and clients often ask which is 'better'. The honest answer: it depends on what you're building. Here's a straight comparison so you can understand the trade-offs — no fanboyism.",
    sections: [
      {
        heading: "WordPress — great for content you manage yourself",
        paragraphs: [
          "WordPress powers a huge share of the web because it's flexible and easy to edit. If you want to publish blog posts, swap images and manage pages yourself without a developer, it's hard to beat. WooCommerce also makes it a solid choice for simpler online stores.",
          "The trade-offs: it can get slow and plugin-heavy, needs ongoing updates and security care, and complex custom features get awkward.",
        ],
      },
      {
        heading: "Next.js — great for speed, scale and custom products",
        paragraphs: [
          "Next.js is a modern framework for building fast, custom websites and web apps. Pages are pre-rendered and lightning quick, it scales beautifully, and it's ideal for custom platforms, dashboards, job portals and anything with real functionality.",
          "The trade-offs: content editing usually needs a connected CMS, and it's a developer-built solution rather than something you assemble yourself.",
        ],
      },
      {
        heading: "A simple way to choose",
        list: [
          "Mostly content you'll edit yourself, on a budget → WordPress.",
          "A simple-to-mid online store → WordPress + WooCommerce or Shopify.",
          "Speed-critical, custom, or a web app / platform → Next.js.",
          "Not sure? A quick call about your goals usually makes it obvious.",
        ],
      },
    ],
    takeaway:
      "There's no universal winner — only the right tool for your goals. We'll recommend whichever genuinely fits your project, and build it properly either way.",
  },
  {
    slug: "how-shopify-stores-sell",
    title: "How a Great Shopify Store Actually Sells (Not Just Looks Good)",
    excerpt:
      "A pretty store that nobody buys from is just an expensive gallery. Here's what separates Shopify stores that convert from ones that don't.",
    category: "E-commerce",
    icon: "cart",
    date: "2026-07-10",
    readMinutes: 5,
    author: "Development By Niaz",
    intro:
      "Shopify makes it easy to launch a store — which is exactly why so many stores look fine but barely sell. The difference between a store that converts and one that doesn't isn't the theme; it's a series of decisions about trust, speed and the path to checkout.",
    sections: [
      {
        heading: "Product pages that do the selling",
        paragraphs: [
          "Your product page is where the sale is won or lost. Great ones have crisp photos from every angle, benefit-led descriptions, clear pricing and delivery info, reviews right there, and one obvious 'Add to cart'. Every doubt you leave unanswered is a cart you lose.",
        ],
      },
      {
        heading: "Trust, before they'll hand over a card",
        list: [
          "Real reviews and ratings on products and the store.",
          "Clear returns, shipping and contact information.",
          "Trust badges, secure checkout and recognisable payment options.",
          "A brand that looks established, not thrown together overnight.",
        ],
      },
      {
        heading: "A fast, frictionless checkout",
        paragraphs: [
          "Every extra step, surprise cost or slow page loses buyers. We streamline the journey from product to payment, offer the payment methods your customers expect, and cut the friction that causes abandoned carts.",
        ],
      },
      {
        heading: "Getting found in the first place",
        paragraphs: [
          "Even the best store makes nothing if nobody reaches it. Product SEO, fast pages and the right integrations bring in organic shoppers, while analytics show you exactly what's working so every month sells a little better.",
        ],
      },
    ],
    takeaway:
      "A store that sells is designed around trust, speed and a clear path to checkout — not just a nice theme. That's exactly how we build them.",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogSlugs = blogPosts.map((p) => p.slug);

/** Newest first. */
export const sortedPosts = [...blogPosts].sort((a, b) =>
  a.date < b.date ? 1 : -1,
);

export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}
