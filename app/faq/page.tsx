import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ_ITEMS = [
  {
    q: "What exactly is Nooetics?",
    a: "Nooetics is the UK's fast-growing wellness discount platform. We act as a referral network, partnering with licensed UK medical clinics, regulated pharmacies, and premium wellness brands. We negotiate the deals, and our members unlock the benefits — from discounted consultation rates to exclusive pricing on CBD and supplements.",
  },
  {
    q: "Is medical cannabis legal in the UK?",
    a: "Yes. Medical cannabis was legalised in the UK in 2018, provided it is prescribed by a specialist doctor on the General Medical Council (GMC) register. Nooetics connects you with these licensed specialists through a structured, compliant pathway.",
  },
  {
    q: "Is Nooetics a medical provider?",
    a: "No. Nooetics is a referral and membership platform. We do not provide medical advice, diagnosis, or treatment. All clinical assessments and prescribing decisions are made solely by independent, licensed UK healthcare professionals.",
  },
  {
    q: "How does the clinic eligibility check work?",
    a: "The eligibility check is a simple, quick questionnaire designed to see if you meet the baseline criteria for a specialist consultation. It is completely free to check your eligibility. Please note that passing the initial check does not guarantee a prescription; all final decisions are made by the clinician during your formal assessment.",
  },
  {
    q: "How do I access the wellness deals and discounts?",
    a: "Once you become a Nooetics member, you will gain access to our secure platform where you can browse active deals from our vetted partners. You can claim discounts directly through our portal using exclusive member links or promo codes.",
  },
  {
    q: "If I am prescribed medication, how do I get it?",
    a: "If your specialist issues a prescription, it will be sent to one of our regulated UK partner pharmacies. The pharmacy will then dispense your medication and arrange for it to be securely delivered to your home.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-b from-navy to-blue text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="font-display text-5xl font-semibold">
            Frequently asked questions
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-display text-4xl font-semibold text-navy mb-4">
            General Question
          </h2>
          <p className="text-charcoal/60">
            Everything you need to know about the Nooetics network, our
            clinical pathways, and how our memberships work.
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-6 lg:px-10 pb-24 grid md:grid-cols-2 gap-x-16 gap-y-12">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q} className="flex gap-4">
              <span className="flex-shrink-0 h-7 w-7 rounded-full bg-navy/10 text-navy flex items-center justify-center text-sm font-semibold">
                ?
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy mb-2">
                  {item.q}
                </h3>
                <p className="text-sm text-charcoal/60">A: {item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section className="relative bg-navy">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1600&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 py-24">
          <h2 className="font-display text-3xl font-semibold text-white mb-10">
            Contact Us
          </h2>
          <form className="space-y-6 bg-white rounded-2xl p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">First Name *</label>
                <input type="text" required placeholder="First name here" className="w-full rounded-lg border border-black/10 bg-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Last Name *</label>
                <input type="text" required placeholder="Last name here" className="w-full rounded-lg border border-black/10 bg-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Email Address *</label>
                <input type="email" required placeholder="Add email" className="w-full rounded-lg border border-black/10 bg-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Subject *</label>
                <input type="text" required placeholder="How can we help you?" className="w-full rounded-lg border border-black/10 bg-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Comments / Questions *</label>
              <textarea required rows={4} className="w-full rounded-lg border border-black/10 bg-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue" />
            </div>
            <button type="submit" className="rounded-full bg-navy px-7 py-3.5 font-semibold text-white hover:bg-navy/90 transition">
              Send message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
