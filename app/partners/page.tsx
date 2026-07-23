import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PILLARS = [
  { num: "01", title: "Premium wellness brands", tag: "CBD, supplements, recovery tech", desc: "From high-absorption supplements to premium CBD and recovery equipment. If you offer best-in-class wellness products, we want to feature your deals." },
  { num: "02", title: "Licensed UK clinics", tag: "Consultations & specialist pathways", desc: "We partner with CQC-registered clinics and specialist prescribers who offer structured, compliant, and transparent patient care." },
  { num: "03", title: "Travel & retreats", tag: "Wellness stays & experiences", desc: "Coastal retreats, spa breaks, and wellness-focused travel partners offering member-exclusive rates." },
  { num: "04", title: "Affiliates & creators", tag: "Earn by referring members", desc: "Wellness influencers, health professionals, and community leaders can join our affiliate programme to earn by introducing their audience to Nooetic." },
];

const STEPS = [
  { step: "1", label: "Application", title: "Application & vetting", desc: "Submit your details. Our team reviews within 48 hours against our UK regulatory and quality standards." },
  { step: "2", label: "Negotiation", title: "Deal negotiation", desc: "We work with you to build an exclusive offer designed to convert and retain Nooetic members." },
  { step: "3", label: "Integration", title: "Platform integration", desc: "We build your partner profile and deal page, with tracking and performance dashboards." },
  { step: "4", label: "Live", title: "Launch & grow", desc: "Your offer goes live to our member community, with ongoing performance reporting." },
];

export default function Partners() {
  return (
    <>
      <Header />

      <section className="px-6 md:px-12 py-24 bg-sage-deep text-white text-center">
        <p className="text-gold-tint text-xs font-medium uppercase tracking-[0.15em] mb-4">
          B2B partnership programme
        </p>
        <h1 className="font-display text-5xl leading-tight mb-6 max-w-2xl mx-auto">
          Grow your brand with the UK&rsquo;s fastest-growing wellness network
        </h1>
        <p className="text-white/75 max-w-xl mx-auto mb-8">
          Connect your clinic, brand, or travel business with a highly
          engaged, health-conscious audience actively seeking regulated,
          frictionless wellness access.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#apply" className="bg-tide-coral text-white px-7 py-3 font-medium hover:bg-clay-dark transition-colors">
            Apply to partner
          </a>
          <a href="#pillars" className="border border-white/40 text-white px-7 py-3 font-medium hover:bg-white hover:text-sage-deep transition-colors">
            See partner categories
          </a>
        </div>
      </section>

      <section id="pillars" className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-charcoal mb-10 text-center">
            Our partner ecosystem
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PILLARS.map((p) => (
              <div key={p.num} className="border border-charcoal/10 rounded p-8">
                <p className="text-charcoal/30 font-display text-3xl mb-3">{p.num}</p>
                <span className="inline-block bg-tide-coral/15 text-tide-coral text-[10px] font-semibold tracking-wide px-3 py-1 mb-3 uppercase">
                  {p.tag}
                </span>
                <p className="font-display text-xl text-charcoal mb-2">{p.title}</p>
                <p className="text-sm text-charcoal/65">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 bg-parchment/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-charcoal mb-12 text-center">
            Simple onboarding. Immediate impact.
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map((s) => (
              <div key={s.step}>
                <p className="text-tide-coral font-display text-3xl mb-2">{s.step}</p>
                <p className="text-xs uppercase tracking-wide text-charcoal/50 mb-2">{s.label}</p>
                <p className="font-medium text-charcoal mb-2">{s.title}</p>
                <p className="text-sm text-charcoal/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-xl mx-auto border border-charcoal/15 rounded p-10">
          <h2 className="font-display text-2xl text-charcoal mb-2">
            Apply to join the Nooetic ecosystem
          </h2>
          <p className="text-sm text-charcoal/65 mb-8">
            All fields required. We review and respond within 48 hours.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="Full name" className="border border-charcoal/20 px-4 py-3 text-sm" />
              <input placeholder="Work email" className="border border-charcoal/20 px-4 py-3 text-sm" />
            </div>
            <input placeholder="Company / clinic name" className="w-full border border-charcoal/20 px-4 py-3 text-sm" />
            <input placeholder="Website URL" className="w-full border border-charcoal/20 px-4 py-3 text-sm" />
            <select className="w-full border border-charcoal/20 px-4 py-3 text-sm text-charcoal/60">
              <option>Select your category…</option>
              <option>Premium wellness brand</option>
              <option>Licensed UK clinic</option>
              <option>Travel & retreats</option>
              <option>Affiliate / creator</option>
            </select>
            <textarea
              placeholder="What exclusive offer can you provide Nooetic members?"
              rows={4}
              className="w-full border border-charcoal/20 px-4 py-3 text-sm"
            />
            <button type="button" className="w-full bg-charcoal text-white py-3 font-medium hover:bg-sage-deep transition-colors">
              Submit application
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
