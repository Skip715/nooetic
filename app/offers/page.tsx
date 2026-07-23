import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OFFERS = [
  { title: "EarthBrew mushroom tea", tag: "BUY 1, GET 1", desc: "Functional wellness brand — organic, fair-trade blends.", img: "https://images.unsplash.com/photo-1571907480495-a8de13d7be0f?w=600&q=80" },
  { title: "Specialist consultation", tag: "MEMBER RATE", desc: "Structured referral to a licensed UK specialist.", img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=600&q=80" },
  { title: "Full-spectrum CBD drops", tag: "20% OFF", desc: "High-strength, third-party lab-tested CBD oils.", img: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600&q=80" },
  { title: "Coastal wellness retreat", tag: "MEMBER RATE", desc: "15% off stays with our UK travel partners.", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80" },
  { title: "Cognitive complex", tag: "25% OFF FIRST BOX", desc: "Adaptogen supplement for daily mental clarity.", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80" },
  { title: "Chronic pain assessment", tag: "SAVE £30", desc: "Multi-disciplinary consultation pathway.", img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&q=80" },
];

const CATEGORIES = ["All", "Consultations", "Supplements & holistic", "CBD & recovery", "Travel & retreats"];

export default function Offers() {
  return (
    <>
      <Header />

      <section className="px-6 md:px-12 py-16 bg-sage-deep text-white text-center">
        <p className="text-gold-tint text-xs font-medium uppercase tracking-[0.15em] mb-4">
          Partner brands
        </p>
        <h1 className="font-display text-5xl mb-3">Exclusive member deals</h1>
        <p className="text-white/75 max-w-md mx-auto">
          More than clinics — Nooetic members get exclusive pricing across
          products, retreats, and travel.
        </p>
      </section>

      <section className="px-6 md:px-12 py-8 bg-white border-b border-charcoal/10">
        <div className="flex flex-wrap gap-3 justify-center">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className={`text-sm px-5 py-2 rounded-full border ${
                i === 0
                  ? "bg-tide-coral text-white border-tide-coral"
                  : "border-charcoal/25 text-charcoal hover:border-charcoal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {OFFERS.map((offer, i) => (
            <div key={offer.title}>
              <span
                className={`inline-block text-white text-[10px] font-semibold tracking-wide px-3 py-1 mb-3 ${
                  i % 2 === 0 ? "bg-tide-coral" : "bg-sage-deep"
                }`}
              >
                {offer.tag}
              </span>
              <div className="relative h-48 rounded overflow-hidden mb-3">
                <Image src={offer.img} alt={offer.title} fill className="object-cover" />
              </div>
              <p className="font-display text-lg text-charcoal mb-1">{offer.title}</p>
              <p className="text-sm text-charcoal/60 mb-4">{offer.desc}</p>
              <button className="w-full border border-charcoal text-charcoal text-sm font-medium py-2.5 hover:bg-charcoal hover:text-white transition-colors">
                View deal
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 bg-parchment/40 text-center">
        <h2 className="font-display text-3xl text-charcoal mb-4">
          Not a Nooetic member yet?
        </h2>
        <p className="text-charcoal/70 mb-6 max-w-md mx-auto">
          Join the UK&rsquo;s fastest-growing wellness discount network to
          unlock every deal on this page.
        </p>
        <a
          href="/join"
          className="inline-block bg-tide-coral text-white px-7 py-3 font-medium hover:bg-clay-dark transition-colors"
        >
          Join now
        </a>
      </section>

      <Footer />
    </>
  );
}
