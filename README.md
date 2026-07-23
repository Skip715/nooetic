# Nooetic

The UK wellness membership network — Next.js + Tailwind, styled with the
"Apothecary" brand palette (sage green / warm clay / parchment).

## What's here

This is a starting scaffold, not a finished site:

- `app/layout.tsx` — loads the brand fonts (Source Serif 4 for display,
  DM Sans for body) and global styles.
- `app/page.tsx` — homepage stub with placeholder copy, marked `TODO`
  where client content should go.
- `components/Header.tsx`, `components/Footer.tsx` — shared nav/footer.
- `tailwind.config.ts` — every brand colour as a Tailwind token
  (`sage`, `clay`, `parchment`, `gold-tint`, `charcoal`). Build new
  pages using these classes, not raw hex values, so a future palette
  change is a one-file edit.
- `app/globals.css` — the same tokens as CSS variables, for the rare
  case something can't use a Tailwind class.

## Run it locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial Nooetic scaffold"
git branch -M main
git remote add origin https://github.com/<your-username>/nooetic.git
git push -u origin main
```

## Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset should auto-detect as **Next.js** — no config needed.
3. Deploy. Every push to `main` will auto-deploy from then on.

## Still to do

- Swap placeholder copy/images for the client's real content.
- Decide on membership backend (member accounts, unique codes,
  payments) — likely Supabase (Postgres + auth) plus Stripe.
- Build out the remaining pages: Pricing, Wellness Offers, Partners,
  FAQ, About, Contact.
