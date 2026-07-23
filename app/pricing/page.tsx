import Header from "@/components/Header";
import Footer from "@/components/Footer";

const INCLUDED = [
  "Discounted rates with licensed medical clinics",
  "Exclusive pricing on premium wellness brands",
  "Partner discounts on retreats and travel",
  "No lock-in contracts — cancel any time",
  "Zero hidden fees",
  "New partner deals added monthly",
];

const STEPS = [
  { step: "01", title: "Join", desc: "Sign up to Nooetic for £10 a month. No contracts, cancel any time." },
  { step: "02", title: "Browse", desc: "Explore live deals across clinics, products, and travel partners." },
  { step: "03", title: "Save", desc: "Use your member code at checkout or booking — savings apply instantly." },
];

export default function Pricing() {
  return (
    <>
      <Header />

      <section className="px-6 md:px-12 py-20 bg-white text-center">
        <p className="text-tide-coral text-xs font-medium uppercase tracking-[0.15em] mb-4">
          Membership
        </p>
        <h1 className="font-display text-5xl text-charcoal mb-4">
          Clear pricing. No surprises.
        </h1>
        <p className="text-charcoal/70 max-w-md mx-auto">
          {/* TODO: client copy */}
          One membership, one monthly price, access to everything in the
          Nooetic network.
        </p>
      </section>

      <section className="px-6 md:px-12 pb-20 bg-white">
        <div className="max-w-md mx-auto border border-charcoal/15 rounded p-10 text-center">
          <p className="text-tide-coral font-display text-2xl mb-1">Nooetic Membership</p>
          <p className="font-display text-5xl text-charcoal mb-1">
            £10<span className="text-lg text-charcoal/60"> / month</span>
          </p>
          <ul className="text-left text-sm text-charcoal/80 space-y-3 my-8">
            {INCLUDED.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-sage-deep">—</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="/join"
            className="block bg-tide-coral text-white text-center py-3 font-medium hover:bg-clay-dark transition-colors"
          >
            Become a member
          </a>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 bg-sage-deep text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl mb-12 text-center">
            How membership works
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {STEPS.map((s) => (
              <div key={s.step}>
                <p className="text-gold-tint font-display text-4xl mb-3">{s.step}</p>
                <p className="font-medium mb-2">{s.title}</p>
                <p className="text-sm text-white/75">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-3xl mx-auto bg-parchment/60 rounded p-8 text-sm text-charcoal/70 text-center">
          Nooetic is a discount and referral network, not a medical
          provider. We do not offer medical advice, diagnosis, or
          treatment. All prescribing decisions are made solely by licensed
          UK healthcare professionals following an independent clinical
          assessment.
        </div>
      </section>

      <Footer />
    </>
  );
}
