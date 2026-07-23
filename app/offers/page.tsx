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

export default function OffersPage() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-b from-navy to-blue text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="font-display text-5xl font-semibold">
            Wellness Offers
          </h1>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            More than just clinics. Nooetics connects members to top-tier
            recovery products, CBD, and supplements.
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-3 gap-6">
            {/* CTA card slotted into the grid, matching the reference layout */}
            <div className="rounded-2xl bg-navy text-white p-8 flex flex-col justify-center">
              <h3 className="font-display text-2xl font-semibold mb-4">
                Not a Nooetics member yet?
              </h3>
              <p className="text-white/70 text-sm mb-6">
                The savings on this page are just the beginning. Join the
                UK&apos;s fast-growing wellness network today to unlock these
                discounts, plus reduced rates on licensed clinic
                consultations.
              </p>
              <Link
                href="/join"
                className="inline-block rounded-full bg-yellow px-6 py-3 text-center font-semibold text-navy hover:brightness-95 transition"
              >
                Join Now
              </Link>
            </div>

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
                  <span className="absolute bottom-0 left-0 right-0 bg-blue text-white text-center text-sm font-semibold py-2">
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

          <div className="flex justify-center gap-3 mt-14 text-navy font-semibold">
            <span className="h-9 w-9 flex items-center justify-center rounded-full bg-white border border-black/10">1</span>
            <span className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-white border border-transparent">2</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
