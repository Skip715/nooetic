import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero — placeholder copy, swap for client content */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-parchment">
        <div className="max-w-2xl">
          <p className="text-clay font-medium text-sm uppercase tracking-wide mb-4">
            UK regulated wellness network
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-sage-deep leading-tight mb-6">
            Smarter access. Better pricing.
          </h1>
          <p className="text-charcoal/70 text-lg mb-8 max-w-lg">
            {/* TODO: replace with client copy */}
            Join Nooetic to unlock discounted access to licensed UK clinics
            and premium wellness brands — no lock-in contracts, cancel
            anytime.
          </p>
          <div className="flex gap-4">
            <a
              href="/join"
              className="bg-clay text-white px-6 py-3 rounded-pill font-medium hover:bg-clay-dark transition-colors"
            >
              Check eligibility
            </a>
            <a
              href="/offers"
              className="border border-sage-deep text-sage-deep px-6 py-3 rounded-pill font-medium hover:bg-sage-deep hover:text-parchment transition-colors"
            >
              Browse deals
            </a>
          </div>
        </div>
      </section>

      {/* Membership snapshot */}
      <section className="px-6 md:px-12 py-16 bg-sage-deep text-parchment">
        <div className="max-w-md bg-[#14201a] rounded-card p-8">
          <p className="text-gold-tint text-xs uppercase tracking-wide mb-3">
            Nooetic member
          </p>
          <p className="font-display text-4xl mb-1">
            £10<span className="text-sm font-body opacity-70">/mo</span>
          </p>
          <ul className="text-sm space-y-2 my-6 opacity-90">
            <li>Reduced consultation rates</li>
            <li>Exclusive wellness deals</li>
            <li>No lock-in contracts</li>
          </ul>
          <a
            href="/join"
            className="inline-block bg-clay text-white px-5 py-2.5 rounded-pill text-sm font-medium hover:bg-clay-dark transition-colors"
          >
            Become a member
          </a>
        </div>
      </section>

      {/* Deals placeholder grid */}
      <section className="px-6 md:px-12 py-20">
        <h2 className="font-display text-3xl text-sage-deep mb-10">
          Exclusive member deals
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-card overflow-hidden border border-charcoal/10"
            >
              <div className="h-40 bg-gold-tint" />
              <div className="p-5 bg-white">
                <p className="text-clay text-xs font-medium uppercase tracking-wide mb-2">
                  Deal placeholder
                </p>
                <p className="font-display text-lg text-sage-deep mb-1">
                  Partner name
                </p>
                <p className="text-sm text-charcoal/60">
                  Short description of the offer goes here.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
