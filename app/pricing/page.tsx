import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const CHECKLIST = [
  "Reduced Consultation Rates",
  "Regulated Partners",
  "Exclusive Wellness Deals",
  "No Lock-In Contracts",
  "Priority Booking",
  "Zero Hidden Fees",
];

const STEPS = [
  "Sign up: Join the Nooetics network for just £8 per month.",
  "Book & save: Enjoy reduced rates on your consultations with licensed UK prescribers.",
  "Unlock deals: Access ongoing discounts on premium CBD, supplements, and recovery tech.",
];

export default function PricingPage() {
  return (
    <>
      <Header />

      {/* Gradient banner */}
      <section className="bg-gradient-to-b from-navy to-blue text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="font-display text-5xl font-semibold">Membership</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mb-6 leading-tight">
              Unlock Nooetics membership
            </h2>
            <p className="text-charcoal/70 max-w-lg mb-10">
              Join the UK&apos;s fast-growing wellness discount platform. For
              just £8 a month, you unlock smarter access to licensed clinics
              and exclusive deals on premium wellness brands. No contracts.
              Cancel anytime.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {CHECKLIST.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-medium text-charcoal/80">
                  <span className="text-blue">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop"
              alt="Member checking phone"
              className="rounded-3xl w-full h-[420px] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=600&auto=format&fit=crop"
              alt="Pharmacist"
              className="rounded-3xl w-full h-[420px] object-cover mt-10"
            />
          </div>
        </div>
      </section>

      {/* Clear pricing */}
      <section className="bg-mist">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl font-semibold text-navy mb-6">
            Clear pricing. No surprises.
          </h2>
          <p className="text-charcoal/70">
            We believe transparency builds trust. Whether you are booking a
            one-off consultation or joining the network for ongoing savings,
            our pricing is straightforward.
          </p>
        </div>
      </section>

      {/* How it works + enquiry form */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-3">
              Your details
            </h2>
            <p className="text-charcoal/60 mb-8">Let us know how to get back to you.</p>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">First name *</label>
                  <input type="text" required className="w-full rounded-lg border border-black/10 bg-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Last name *</label>
                  <input type="text" required className="w-full rounded-lg border border-black/10 bg-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Email address *</label>
                <input type="email" required placeholder="user@website.com" className="w-full rounded-lg border border-black/10 bg-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Subject *</label>
                <input type="text" required className="w-full rounded-lg border border-black/10 bg-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue" />
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

          <div>
            <h2 className="font-display text-3xl font-semibold text-navy mb-3">
              How membership works
            </h2>
            <p className="text-charcoal/60 mb-8 max-w-md">
              Getting started is simple. We do the heavy lifting of
              negotiating the deals, so you can focus on your health and
              wellness journey.
            </p>
            <h3 className="font-display text-lg font-semibold text-navy mb-4">
              Step by step
            </h3>
            <ul className="space-y-4 mb-10">
              {STEPS.map((step) => (
                <li key={step} className="flex items-start gap-3 text-charcoal/80">
                  <span className="mt-0.5 text-blue">✓</span>
                  {step}
                </li>
              ))}
            </ul>
            <Link
              href="/join"
              className="inline-block rounded-full bg-navy px-8 py-3.5 font-semibold text-white hover:bg-navy/90 transition"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
