# Agency Website

A fast, conversion-focused **web design agency / portfolio** site built with the modern Next.js stack.

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| UI | shadcn/ui + Tailwind CSS v4 |
| Forms | react-hook-form + zod |
| Database | PostgreSQL + Prisma 7 (`@prisma/adapter-pg`) |
| Theme | next-themes (light / dark) |
| Deployment | Vercel |

## Getting Started

```bash
# 1. install deps
npm install

# 2. env setup — copy and fill in your values
cp .env.example .env

# 3. generate prisma client
npm run db:generate

# 4. run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build (runs `prisma generate` first) |
| `npm run start` | Start production server |
| `npm run db:migrate` | Run Prisma migrations |
| `npm run db:push` | Push schema to DB (no migration files) |
| `npm run db:studio` | Open Prisma Studio |

## Project Structure

```
src/
├── app/            # App Router pages + layout
├── components/
│   ├── ui/         # shadcn components
│   ├── layout/     # navbar, footer, logo
│   └── sections/   # home page sections
├── config/         # site config (brand, nav, contact)
├── lib/            # db client, validations, content, utils
└── types/          # shared types
prisma/
└── schema.prisma   # DB models
```

## Environment Variables

See [.env.example](.env.example). You need at minimum `DATABASE_URL` for the database.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Add the env vars from `.env.example` (especially `DATABASE_URL`).
4. Deploy.
