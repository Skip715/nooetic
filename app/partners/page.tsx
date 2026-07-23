import Header from "@/components/Header";
import Footer from "@/components/Footer";

const STATS = [
  { value: "2,400+", label: "Active Members" },
  { value: "50+", label: "Vetted Partners" },
  { value: "48hr", label: "Application Response" },
  { value: "4", label: "Partner Categories" },
];

const VALUE_CARDS = [
  {
    n: "01",
    icon: "🎯",
    title: "Highly Targeted Audience",
    desc: "Gain direct access to a dedicated demographic of health-conscious individuals who prioritise overall wellness and are actively seeking natural, holistic solutions — not casual browsers.",
  },
  {
    n: "02",
    icon: "⚡",
    title: "Frictionless Referrals",
    desc: "We streamline the patient and customer journey. Our platform acts as a high-conversion funnel, routing qualified members directly to your booking systems or e-commerce checkouts.",
  },
  {
    n: "03",
    icon: "🏆",
    title: "Brand Elevation",
    desc: "Position your business alongside the UK's most trusted licensed clinics and premium supplement brands in a highly curated, compliance-first environment that signals quality.",
  },
];

const PILLARS = [
  {
    n: "01",
    icon: "🌿",
    tag: "PREMIUM WELLNESS BRANDS",
    title: "Premium Wellness Brands",
    desc: "From high-absorption supplements harnessing the science of nootropics and adaptogens to premium CBD, recovery tech, and fitness equipment. If you offer best-in-class wellness products, we want to feature your exclusive deals.",
    points: [
      "CBD & hemp-derived products",
      "Nootropics & adaptogen supplements",
      "Recovery tech & fitness equipment",
      "Premium health-focused consumables",
    ],
  },
  {
    n: "02",
    icon: "🏥",
    tag: "LICENSED UK CLINICS",
    title: "Licensed UK Clinics",
    desc: "We partner with CQC-registered clinics and specialist prescribers — including medical cannabis pathways — who offer structured, compliant, and transparent patient care. Clinical independence is always maintained.",
    points: [
      "CQC-registered clinical practices",
      "Medical cannabis specialist prescribers",
      "Structured, compliant patient pathways",
      "Transparent, regulated pricing",
    ],
  },
  {
    n: "03",
    icon: "💊",
    tag: "REGULATED PHARMACIES",
    title: "Regulated Pharmacies",
    desc: "Licensed UK pharmacy partners who dispense with proper oversight, ensuring every member pathway is safe, compliant, and fully accountable.",
    points: [
      "GPhC-registered pharmacies",
      "Secure, tracked dispensing",
      "Fast, reliable fulfilment",
      "Full regulatory oversight",
    ],
  },
  {
    n: "04",
    icon: "🤝",
    tag: "AFFILIATES & CREATORS",
    title: "Affiliates & Creators",
    desc: "Health and wellness creators who want to bring trusted, vetted offers to their audience through a transparent, performance-based partnership.",
    points: [
      "Performance-based commission",
      "Ready-made creative assets",
      "Dedicated partner support",
      "Transparent reporting dashboard",
    ],
  },
];

const ONBOARDING = [
  {
    n: "1",
    tag: "APPLICATION",
    title: "Application & Vetting",
    desc: "Submit your details below. Our team will review your business to ensure it meets our strict UK regulatory and quality standards. We respond within 48 hours.",
  },
  {
    n: "2",
    tag: "NEGOTIATION",
    title: "Deal Negotiation",
    desc: "We work with you to establish an exclusive, compelling offer or discounted rate specifically for Nooetics members — designed to convert and retain.",
  },
  {
    n: "3",
    tag: "INTEGRATION",
    title: "Platform Integration",
    desc: "We build your custom brand profile and deal page on our secure member portal — including tracking, performance dashboards, and compliant marketing assets.",
  },
  {
    n: "4",
    tag: "LIVE",
    title: "Launch & Grow",
    desc: "Your offer goes live to our community, driving new, highly-qualified traffic directly to your business — with ongoing performance reporting and growth support.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 mb-8">
              B2B PARTNERSHIP PROGRAMME
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] mb-8">
              Grow your brand with the UK&apos;s{" "}
              <span className="text-yellow italic">fastest-growing</span>{" "}
              wellness network
            </h1>
            <p className="text-white/70 max-w-xl mb-10">
              Connect your clinic, pharmacy, or premium wellness brand with a
              highly engaged, health-conscious audience actively seeking
              regulated, frictionless care.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#apply"
                className="rounded-full bg-blue px-7 py-3.5 font-semibold text-white hover:brightness-95 transition"
              >
                Apply to Partner →
              </a>
              <a
                href="#who-we-work-with"
                className="rounded-full border-2 border-white/30 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition"
              >
                See Who We Work With
              </a>
            </div>
            <p className="text-sm text-white/60">
              <span className="font-semibold text-white">
                50+ vetted partners
              </span>{" "}
              already in the network — Clinics · Pharmacies · Wellness Brands
              · Creators
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                <p className="font-display text-3xl font-semibold text-yellow">{s.value}</p>
                <p className="text-xs text-white/60 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for scale */}
      <section className="bg-mist">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <span className="text-sm font-semibold text-blue tracking-wide">
            WHY PARTNER WITH NOOETICS?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mt-3 mb-6">
            A partnership built for scale
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            We do the heavy lifting of member acquisition and marketing,
            allowing you to focus on what you do best: delivering exceptional
            care and premium products.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 grid md:grid-cols-3 gap-6">
          {VALUE_CARDS.map((c) => (
            <div key={c.n} className="rounded-2xl bg-white p-8 border border-black/5">
              <p className="text-3xl text-charcoal/15 font-display font-semibold mb-2">{c.n}</p>
              <p className="text-2xl mb-4">{c.icon}</p>
              <h3 className="font-display text-xl font-semibold text-navy mb-3">
                {c.title}
              </h3>
              <p className="text-sm text-charcoal/60">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we work with */}
      <section id="who-we-work-with" className="bg-navy text-white scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
          <span className="text-sm font-semibold text-white/50 tracking-wide">
            OUR PARTNER ECOSYSTEM
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3 mb-6">
            Who we work with
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Nooetics maintains strict vetting standards to ensure our members
            only access the best. We are actively expanding partnerships
            across four key pillars.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 grid md:grid-cols-2 gap-6">
          {PILLARS.map((p) => (
            <div key={p.n} className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <p className="text-3xl text-white/15 font-display font-semibold mb-2">{p.n}</p>
              <p className="text-2xl mb-4">{p.icon}</p>
              <span className="inline-block rounded-full bg-blue/20 text-blue px-3 py-1 text-xs font-semibold mb-4">
                {p.tag}
              </span>
              <h3 className="font-display text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-sm text-white/60 mb-5">{p.desc}</p>
              <ul className="space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="text-yellow">✦</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Onboarding */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 pt-24 pb-16 text-center">
          <span className="text-sm font-semibold text-blue tracking-wide">
            THE ONBOARDING PROCESS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mt-3 mb-6">
            Simple onboarding. Immediate impact.
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Four clear steps from application to your offer going live to our
            growing member community.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 grid md:grid-cols-4 gap-8">
          {ONBOARDING.map((step) => (
            <div key={step.n} className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-navy text-white font-display text-xl font-semibold">
                {step.n}
              </div>
              <span className="inline-block rounded-full bg-mist px-3 py-1 text-xs font-semibold text-charcoal/60 mb-3">
                {step.tag}
              </span>
              <h3 className="font-display text-lg font-semibold text-navy mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-charcoal/60">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Apply to Join the Ecosystem */}
      <section id="apply" className="bg-mist scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-[1fr_1.2fr] gap-16">
          <div>
            <span className="text-sm font-semibold text-blue tracking-wide">
              READY TO DIVE IN?
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mt-3 mb-6 leading-tight">
              Apply to join the Nooetics ecosystem
            </h2>
            <p className="text-charcoal/70 mb-10 max-w-md">
              Fill out the form and our Partnerships Team will be in touch
              within 48 hours. Every application is reviewed personally —
              we build real partnerships, not just listings.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: "🎯",
                  title: "Access to 2,400+ qualified members",
                  desc: "Health-conscious UK adults actively spending on wellness",
                },
                {
                  icon: "📊",
                  title: "Transparent tracking & reporting",
                  desc: "Real-time performance dashboard for your partnership",
                },
                {
                  icon: "🔒",
                  title: "Compliance-first environment",
                  desc: "Full marketing compliance guidance provided on onboarding",
                },
                {
                  icon: "⚡",
                  title: "Fast, structured onboarding",
                  desc: "From application to live in as little as one week",
                },
              ].map((b) => (
                <div key={b.title} className="flex items-start gap-4 rounded-xl bg-white p-5">
                  <span className="text-xl">{b.icon}</span>
                  <div>
                    <p className="font-semibold text-navy">{b.title}</p>
                    <p className="text-sm text-charcoal/60">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-navy p-8 md:p-10">
            <h3 className="font-display text-2xl font-semibold text-white mb-2">
              Submit application
            </h3>
            <p className="text-sm text-white/60 mb-8">
              All fields marked * are required. We review and respond
              within 48 hours.
            </p>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold tracking-wide text-white/70 mb-2">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-yellow"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wide text-white/70 mb-2">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-yellow"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold tracking-wide text-white/70 mb-2">
                    COMPANY / CLINIC NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your company name"
                    className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-yellow"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wide text-white/70 mb-2">
                    WEBSITE URL *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://yourwebsite.com"
                    className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-yellow"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-wide text-white/70 mb-2">
                  PARTNER CATEGORY *
                </label>
                <select
                  required
                  defaultValue=""
                  className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-yellow"
                >
                  <option value="" disabled className="text-charcoal">
                    Select your category...
                  </option>
                  <option className="text-charcoal">Premium Wellness Brand</option>
                  <option className="text-charcoal">Licensed UK Clinic</option>
                  <option className="text-charcoal">Regulated Pharmacy</option>
                  <option className="text-charcoal">Affiliate / Creator</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-wide text-white/70 mb-2">
                  WHAT EXCLUSIVE OFFER OR SERVICE CAN YOU PROVIDE NOOETICS MEMBERS? *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your proposed offer, discount structure, or how you'd add value to the Nooetics member community..."
                  className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-yellow"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-white px-7 py-3.5 font-semibold text-navy hover:bg-white/90 transition"
              >
                Submit Application →
              </button>
              <p className="text-xs text-white/40 text-center">
                By submitting you agree to our Privacy Policy and Partner
                Terms. We never share your details with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
