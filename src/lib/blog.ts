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
    date: "2026-07-08",
    readMinutes: 6,
    author: "Development By Niaz",
    intro:
      "SEO gets wrapped in mystery because that's how a lot of agencies justify their invoice. The truth is simpler: Google wants to show the most relevant, trustworthy, fastest answer to what someone searched. Do that better than your competitors and you rank. Here's how that breaks down.",
    sections: [
      {
        heading: "1. Target what people actually search",
        paragraphs: [
          "Rankings start with keywords — the exact phrases your customers type. 'Dentist Sheffield', 'roofer near me', 'private GP appointment'. Build a dedicated page for each core service and location instead of cramming everything onto one page.",
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
