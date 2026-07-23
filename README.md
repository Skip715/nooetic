# Nooetics

The UK wellness membership network — Next.js + Tailwind, rebuilt on the
"Bold & Modern" brand system (navy `#0D1B2A` / bright blue `#1E90FF` /
sunshine yellow `#FFD62E`, Clash Grotesk + Inter).

## What's here

A full site, structured on the same content/architecture as the One Big
Fish reference:

- `app/page.tsx` — Home (hero, medical access offer, exclusive member
  deals grid, what-is-Nooetics, trust stats, why-us, partner logos)
- `app/pricing` — Membership pricing, checklist, how-it-works, enquiry form
- `app/offers` — Full wellness offers grid + "not a member yet" CTA
- `app/partners` — B2B partner programme (stats, value props, 4 partner
  pillars, onboarding steps, application form)
- `app/about`, `app/faq`, `app/contact`, `app/join` — supporting pages
- `components/Header.tsx`, `components/Footer.tsx`, `components/Logo.tsx`
- `tailwind.config.ts` — brand colours as tokens (`navy`, `blue`, `yellow`,
  `mist`, `charcoal`) — always build with these classes, not raw hex, so
  a future palette tweak is a one-file edit.

**Fonts:** Clash Grotesk loads from Fontshare's free CDN (`app/layout.tsx`
`<head>`), Inter loads via `next/font/google`. This sandbox blocks both
during a local build/typecheck — that's expected, Vercel's build servers
won't have that restriction.

**Images:** placeholder photography is pulled live from Unsplash by URL.
Swap these for real product/lifestyle photography before launch — and
double-check none of it accidentally includes a real competitor's
branding, the way stock photos did in an earlier iteration of this site.

**Logo:** `components/Logo.tsx` is currently a *text* lockup (Clash
Grotesk wordmark + yellow accent dot), not the real vector icon —
swap in the actual logo file (SVG ideally) from whoever produced the
brand board when it's available.

## Run it locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Push to GitHub

Given the pattern of stale-file issues in past uploads, the safest route
is still: select everything in the existing `Skip715/nooetic` repo,
delete it in one commit, then drag in the entire contents of this
unzipped folder in a single upload.

```bash
git init
git add .
git commit -m "Rebrand to Nooetics — navy/blue/yellow"
git branch -M main
git remote add origin https://github.com/Skip715/nooetic.git
git push -u origin main --force
```

## Deploy on Vercel

Framework preset auto-detects as **Next.js** — no config needed. Every
push to `main` auto-deploys from there.

## Still to do

- Swap the text logo for the real vector file
- Real photography throughout
- Membership backend: accounts, unique member codes, Stripe subscription
  checkout (the `/join` page is currently a stub)
- Wire up the enquiry/application forms to actually send somewhere
  (e.g. an email service or a simple API route)
