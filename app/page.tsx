import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const OFFERS = [
  {
    tag: "£49 Follow-Up",
    title: "Specialist Follow-Up Care",
    desc: "Continue your care journey with seamless follow-up consultations to monitor progress and adjust prescriptions.",
    cta: "Book Follow-Up",
    img: "https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=800&auto=format&fit=crop",
  },
  {
    tag: "£99 Consultation",
    title: "Medical Cannabis Consultation Pathway",
    desc: "Connect with licensed UK specialists to see if you are eligible for regulated medical cannabis treatments.",
    cta: "Check Eligibility",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop",
  },
  {
    tag: "Buy 1, Get 1 Free",
    title: "EarthBrew Mushroom Coffee",
    desc: "Upgrade your morning routine with organic, fair-trade coffee infused with functional wellness mushrooms.",
    cta: "Claim BOGO Deal",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
  },
  {
    tag: "25% Off First Box",
    title: "Cerebro Align Cognitive Complex",
    desc: "A premium, science-backed adaptogen supplement formulated for peak mental clarity and focus.",
    cta: "Shop Nootropics",
    img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop",
  },
  {
    tag: "Save £40",
    title: "PulseGun Elite Massage Device",
    desc: "Accelerate your muscle recovery and relieve tension with industry-leading deep tissue percussion therapy.",
    cta: "Get £40 Off",
    img: "https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?q=80&w=800&auto=format&fit=crop",
  },
  {
    tag: "20% Off Storewide",
    title: "Zenith Botanicals Full-Spectrum Drops",
    desc: "High-strength, third-party lab-tested CBD oils designed to support daily balance and natural stress relief.",
    cta: "Claim 20% Off",
    img: "https://images.unsplash.com/photo-1611075384834-4e77c8ac52ac?q=80&w=800&auto=format&fit=crop",
  },
];

const CATEGORIES = [
  { label: "Licensed UK Clinics", icon: "🏥" },
  { label: "Regulated Pharmacies", icon: "💊" },
  { label: "Wellness Brands", icon: "🌿" },
  { label: "Supplement Providers", icon: "🧪" },
];

const STATS = [
  { value: "58%", label: "Legal & Compliant" },
  { value: "360°", label: "Vetted Supply Chain" },
  { value: "14", label: "Hour Support" },
  { value: "0", label: "Lock-In Contracts" },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-mist">
        {/* decorative yellow dot grid, echoing the brand board's pattern element */}
        <div className="absolute top-10 right-10 hidden lg:grid grid-cols-5 gap-2 opacity-60">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-yellow" />
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24 grid lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-4 z-10 flex items-center gap-2 rounded-2xl bg-white shadow-lg px-4 py-3">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=100&auto=format&fit=crop",
                ].map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-8 w-8 rounded-full object-cover border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-navy">
                2,400+ members
              </span>
            </div>

            <div className="rounded-[2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1000&auto=format&fit=crop"
                alt="Member picking up a wellness order"
                className="w-full h-[460px] md:h-[520px] object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -right-4 sm:-right-8 rounded-full bg-yellow px-6 py-5 shadow-xl text-center leading-tight rotate-3">
              <p className="font-display text-2xl font-bold text-navy">£8</p>
              <p className="text-[11px] font-semibold text-navy/70">/month</p>
            </div>

            <div className="absolute top-1/3 -right-6 hidden sm:block rounded-2xl bg-navy text-white px-5 py-3 shadow-lg -rotate-2">
              <p className="text-xs font-semibold text-yellow">⚡ Instant access</p>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow px-4 py-1.5 text-xs font-bold text-navy mb-6">
              UK REGULATED WELLNESS NETWORK
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-navy leading-[1.05] mb-6">
              Unlock better access.
              <br />
              <span className="relative inline-block">
                Pay less.
                <svg
                  className="absolute left-0 -bottom-2 w-full"
                  height="10"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 6 Q 50 0 100 6 T 200 6"
                    stroke="#FFD62E"
                    strokeWidth="6"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-charcoal/70 max-w-lg mb-8">
              Nooetics is the UK&apos;s fast-growing wellness membership
              network — connecting you to licensed medical clinics and
              exclusive partner deals across CBD, supplements, and recovery.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/pricing"
                className="rounded-full bg-navy px-7 py-3.5 font-semibold text-white hover:bg-navy/90 transition"
              >
                Check Eligibility
              </Link>
              <Link
                href="/offers"
                className="rounded-full border-2 border-navy px-7 py-3.5 font-semibold text-navy hover:bg-navy hover:text-white transition"
              >
                Browse Deals
              </Link>
            </div>

            {/* Membership summary, now integrated inline rather than a floating card */}
            <div className="rounded-3xl bg-white border-2 border-yellow/60 p-6 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="font-display text-2xl font-semibold text-navy">
                  Nooetics Member
                </p>
                <p className="text-sm text-charcoal/60">
                  Discounts, priority booking &amp; more
                </p>
              </div>
              <div className="text-right">
                <p className="font-display text-3xl font-bold text-navy">
                  £8<span className="text-sm font-normal text-charcoal/50">/mo</span>
                </p>
                <Link
                  href="/join"
                  className="text-sm font-semibold text-blue hover:underline"
                >
                  Start today →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yellow strip stat bar, for extra colour presence right under the hero */}
      <section className="bg-yellow">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-2 text-sm font-semibold text-navy">
          <span>🔒 FCA compliant partners</span>
          <span>💊 Licensed UK clinics only</span>
          <span>✕ No lock-in contracts</span>
          <span>⭐ 2,400+ active members</span>
        </div>
      </section>

      {/* MEDICAL ACCESS MADE SIMPLE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-blue tracking-wide">
              OUR HERO OFFER
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mt-3 mb-6 leading-tight">
              Medical access made simple
            </h2>
            <p className="text-charcoal/70 mb-8 max-w-lg">
              Medical cannabis is legal in the UK when prescribed by a
              licensed specialist. We simplify the pathway — with transparent
              pricing, structured clinical processes, and ongoing support.
            </p>
            <dl className="space-y-6 mb-8">
              {[
                {
                  t: "Transparent Consultation Pricing",
                  d: "No hidden costs. £99 consultation, £49 follow-up. Members unlock additional pathways.",
                },
                {
                  t: "Structured Clinical Process",
                  d: "Every consultation follows a structured UK regulatory framework — no shortcuts.",
                },
                {
                  t: "Regulated Pharmacy Dispensing",
                  d: "Medication dispensed only via licensed UK pharmacy partners with proper oversight.",
                },
                {
                  t: "Ongoing Follow-Up Support",
                  d: "Clinical monitoring and continued support after your initial consultation.",
                },
              ].map((row) => (
                <div key={row.t}>
                  <dt className="font-semibold text-navy mb-1">{row.t}</dt>
                  <dd className="text-sm text-charcoal/60">{row.d}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/pricing"
              className="inline-block rounded-full bg-navy px-7 py-3.5 font-semibold text-white hover:bg-navy/90 transition"
            >
              Check Eligibility Now →
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=900&auto=format&fit=crop"
                alt="Licensed pharmacy dispensing"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 rounded-2xl bg-navy text-white px-8 py-6 shadow-xl">
              <p className="font-display text-4xl font-semibold">£8</p>
              <p className="text-xs text-white/70 mt-1">Monthly Membership</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE MEMBER DEALS */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mb-4">
                Exclusive member deals
              </h2>
              <p className="text-charcoal/70 max-w-xl">
                More than just clinics. Nooetics connects members to top-tier
                recovery products, CBD, and supplements.
              </p>
            </div>
            <Link
              href="/offers"
              className="rounded-full bg-navy px-6 py-3 font-semibold text-white hover:bg-navy/90 transition whitespace-nowrap"
            >
              Browse All Deals
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {OFFERS.map((offer) => (
              <div
                key={offer.title}
                className="rounded-2xl overflow-hidden bg-white border border-black/5 flex flex-col"
              >
                <div className="relative h-48">
                  <img
                    src={offer.img}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 left-0 right-0 bg-yellow text-navy text-center text-sm font-bold py-2">
                    {offer.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-semibold text-navy mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 mb-6 flex-1">
                    {offer.desc}
                  </p>
                  <button className="rounded-full bg-navy text-white text-sm font-semibold py-3 hover:bg-navy/90 transition">
                    {offer.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMARTER ACCESS TO REGULATED WELLNESS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop"
              alt="Wellness professional"
              className="rounded-3xl w-full h-[420px] object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-blue tracking-wide">
              WHAT IS NOOETICS?
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mt-3 mb-6 leading-tight">
              Smarter access to regulated wellness
            </h2>
            <p className="text-charcoal/70 mb-10 max-w-lg">
              Nooetics is built for people who want smarter access to
              regulated wellness services — without overpaying. We negotiate
              the deals. You unlock the benefits.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.label}
                  className="flex items-center gap-3 rounded-2xl border border-black/10 px-5 py-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow/25 text-xl">{cat.icon}</span>
                  <span className="text-sm font-semibold text-navy">
                    {cat.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs italic text-charcoal/50 max-w-lg">
              We don&apos;t provide medical advice. All prescribing decisions
              are made by licensed clinicians.
            </p>
          </div>
        </div>
      </section>

      {/* SAFE. REGULATED. SECURE. */}
      <section className="relative bg-navy text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=1600&auto=format&fit=crop"
            alt="Pharmacy"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Safe. Regulated. Secure.
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10">
            We prioritise your privacy and strictly adhere to UK medical
            regulations at every step of your journey.
          </p>
          <Link
            href="/join"
            className="inline-block rounded-full bg-yellow px-8 py-3.5 font-semibold text-navy hover:brightness-95 transition"
          >
            Become a Member
          </Link>
        </div>
        <div className="relative mx-auto max-w-5xl px-6 pb-16">
          <div className="rounded-3xl bg-white text-navy grid grid-cols-2 md:grid-cols-4 gap-8 p-10">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-semibold">{s.value}</p>
                <p className="text-xs text-charcoal/60 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NOOETICS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-blue tracking-wide">
              WHY NOOETICS?
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mt-3 mb-6 leading-tight">
              Built for access and transparency
            </h2>
            <p className="text-charcoal/70 mb-8 max-w-lg">
              The healthcare and wellness system shouldn&apos;t be slow,
              confusing, or overpriced. Nooetics is building a better UK
              network by negotiating directly with top-tier brands and
              clinics so you don&apos;t have to. We do the heavy lifting; you
              get the benefits.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Vetted UK partners (only licensed clinics and trusted brands)",
                "Better pricing through scale (we negotiate discounts so you save)",
                "Faster pathways (skip the confusion with structured referrals)",
                "One hub, many benefits (from consultations to premium CBD)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-charcoal/80">
                  <span className="mt-0.5 text-blue">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/offers"
              className="inline-block rounded-full bg-navy px-7 py-3.5 font-semibold text-white hover:bg-navy/90 transition"
            >
              Browse Wellness Deals
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=900&auto=format&fit=crop"
            alt="Pharmacist and customer"
            className="rounded-3xl w-full h-[440px] object-cover"
          />
        </div>
      </section>

      {/* TRUSTED PARTNERS */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=900&auto=format&fit=crop"
            alt="Wellness partner storefront"
            className="rounded-3xl w-full h-[380px] object-cover"
          />
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mb-6 leading-tight">
              Trusted clinic &amp; wellness partners
            </h2>
            <p className="text-charcoal/70 max-w-lg mb-10">
              We are constantly expanding our network. New deals and
              regulated partners are added regularly to give you the best
              access.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {["Pharmacy", "Pharmacy", "Pharmacy"].map((p, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white py-6 text-charcoal/40"
                >
                  <span className="text-2xl">💊</span>
                  <span className="text-xs">Slogan Here</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
