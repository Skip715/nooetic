import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQS = [
  { q: "What exactly is Nooetic?", a: "Nooetic is the UK's fastest-growing wellness discount platform. We act as a referral and membership network, partnering with licensed UK medical clinics, regulated pharmacies, and premium wellness brands. We negotiate the deals, and our members unlock the benefits — from discounted consultation rates to exclusive pricing on products, retreats, and travel." },
  { q: "Is Nooetic a medical provider?", a: "No. Nooetic is a discount and referral network. We do not provide medical advice, diagnosis, or treatment. All clinical assessments and prescribing decisions are made solely by independent, licensed UK healthcare professionals." },
  { q: "How does the eligibility check work?", a: "It's a simple, quick, free questionnaire to see if you meet the baseline criteria for a specialist consultation. Passing the check doesn't guarantee a prescription — final decisions are always made by the clinician during a formal assessment." },
  { q: "How do I access the deals and discounts?", a: "Once you're a member, you'll get access to our platform where you can browse active deals from vetted partners and claim discounts directly through exclusive member links or codes." },
  { q: "If I'm prescribed medication, how do I get it?", a: "If a specialist issues a prescription, it's sent to one of our regulated UK partner pharmacies, who dispense and arrange secure delivery to your home." },
  { q: "Can I cancel any time?", a: "Yes. There are no lock-in contracts. Cancel whenever you like — no penalties, no hidden fees." },
];

export default function FAQ() {
  return (
    <>
      <Header />

      <section className="px-6 md:px-12 py-20 bg-sage-deep text-white text-center">
        <h1 className="font-display text-5xl mb-3">Frequently asked questions</h1>
        <p className="text-white/75 max-w-md mx-auto">
          Everything you need to know about the Nooetic network and how
          membership works.
        </p>
      </section>

      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-10">
          {FAQS.map((item) => (
            <div key={item.q}>
              <p className="font-display text-lg text-charcoal mb-2">{item.q}</p>
              <p className="text-sm text-charcoal/65">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 bg-parchment/40 text-center">
        <p className="text-charcoal/70 mb-5">Still have a question?</p>
        <a
          href="/contact"
          className="inline-block bg-tide-coral text-white px-7 py-3 font-medium hover:bg-clay-dark transition-colors"
        >
          Contact us
        </a>
      </section>

      <Footer />
    </>
  );
}
