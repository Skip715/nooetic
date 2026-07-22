import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CATEGORIES = [
  { label: "Consultations", img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80" },
  { label: "Supplements", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80" },
  { label: "CBD & recovery", img: "https://images.unsplash.com/photo-1611072965169-e6d5606f6b0a?w=400&q=80" },
  { label: "Sleep & stress", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80" },
];

const DEALS = [
  {
    title: "Specialist follow-up care",
    tag: "BEST SELLER",
    price: "FROM £49",
    img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=600&q=80",
  },
  {
    title: "Cognitive complex",
    tag: "BEST SELLER",
    price: "25% OFF FIRST BOX",
    img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=80",
  },
  {
    title: "Calm & recovery bundle",
    tag: "BUNDLE & SAVE",
    price: "FROM £96",
    img: "https://images.unsplash.com/photo-1611072965169-e6d5606f6b0a?w=600&q=80",
  },
  {
    title: "Full-spectrum CBD drops",
    tag: "BEST SELLER",
    price: "20% OFF STOREWIDE",
    img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80",
  },
];

const JOURNAL = [
  {
    title: "How the eligibility check actually works",
    desc: "A plain-English walkthrough of what clinicians look for.",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80",
  },
  {
    title: "Reading your first consultation letter",
    desc: "What each section means, and what to do next.",
    img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=400&q=80",
  },
  {
    title: "Three new partners joining this month",
    desc: "More deals landing across CBD, sleep, and recovery.",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80",
  },
  {
    title: "Consistency is the ritual",
    desc: "Why members who stay longest save the most.",
    img: "https://images.unsplash.com/photo-1517686748843-bb360cd39a4c?w=400&q=80",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero — dark, editorial, image-led */}
      <section className="grid md:grid-cols-2 bg-sage-deep">
        <div className="relative h-[420px] md:h-[600px] order-2 md:order-1">
          <Image
            src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&q=80"
            alt="Consultation with a licensed UK clinician"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="order-1 md:order-2 flex flex-col justify-center px-8 md:px-16 py-16 md:py-0 text-parchment">
          <p className="text-gold-tint text-xs font-medium uppercase tracking-[0.2em] mb-6">
            Feel-good access
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight mb-6">
            Access well,
            <br />
            live better.
          </h1>
          <p className="text-parchment/75 text-lg mb-8 max-w-sm">
            {/* TODO: replace with client copy */}
            Reduced consultation rates. Ongoing partner discounts. One
            membership, no lock-in contracts.
          </p>
          <a
            href="/join"
            className="inline-block w-fit bg-clay text-white px-7 py-3 rounded-pill font-medium hover:bg-clay-dark transition-colors"
          >
            Join now
          </a>
        </div>
      </section>

      {/* Browse by need */}
      <section className="px-6 md:px-12 py-20 bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold-tint text-xs font-medium uppercase tracking-[0.15em] mb-3">
            Shop by need
          </p>
          <h2 className="font-display text-3xl text-parchment mb-10">
            Browse by benefit
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <a key={cat.label} href="#" className="group">
                <div className="relative h-40 md:h-52 rounded-card overflow-hidden mb-3">
                  <Image src={cat.img} alt={cat.label} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <p className="text-parchment text-sm font-medium uppercase tracking-wide">
                  {cat.label}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Membership snapshot */}
      <section className="px-6 md:px-12 py-20 bg-sage-deep">
        <div className="grid md:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
          <div className="relative h-96 rounded-card overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
              alt="Apothecary shelf of wellness products"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-parchment">
            <p className="text-gold-tint text-xs font-medium uppercase tracking-[0.15em] mb-4">
              One membership
            </p>
            <h2 className="font-display text-4xl mb-5 leading-tight">
              Everything, for £10 a month.
            </h2>
            <p className="text-parchment/75 mb-6 max-w-md">
              {/* TODO: replace with client copy */}
              No lock-in contracts. No hidden fees. Cancel any time — but
              members tend to stay, because the savings pay for themselves
              after one visit.
            </p>
            <ul className="space-y-3 text-sm text-parchment/85 mb-8">
              <li>— Reduced consultation rates at licensed clinics</li>
              <li>— Ongoing partner discounts on wellness brands</li>
              <li>— Priority booking with specialists</li>
            </ul>
            <a
              href="/join"
              className="inline-block bg-clay text-white px-7 py-3 rounded-pill font-medium hover:bg-clay-dark transition-colors"
            >
              Become a member
            </a>
          </div>
        </div>
      </section>

      {/* Deals grid — Sakara-style tag + price treatment */}
      <section className="px-6 md:px-12 py-20 bg-parchment">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-sage-deep mb-10">
            Science-backed savings
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {DEALS.map((deal) => (
              <div key={deal.title}>
                <span className="inline-block bg-sage-deep text-parchment text-[10px] font-semibold tracking-wide px-3 py-1 mb-3">
                  {deal.tag}
                </span>
                <div className="relative h-48 rounded-card overflow-hidden mb-3">
                  <Image src={deal.img} alt={deal.title} fill className="object-cover" />
                </div>
                <p className="font-display text-lg text-sage-deep mb-1">
                  {deal.title}
                </p>
                <p className="text-clay text-sm font-medium mb-4">{deal.price}</p>
                <button className="w-full border border-charcoal/30 text-charcoal text-sm font-medium py-2.5 hover:bg-charcoal hover:text-parchment hover:border-charcoal transition-colors">
                  View deal
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal strip */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-sage-deep mb-10">
            Recommended reading
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {JOURNAL.map((post) => (
              <div key={post.title}>
                <div className="relative h-48 rounded-card overflow-hidden mb-3">
                  <Image src={post.img} alt={post.title} fill className="object-cover" />
                </div>
                <p className="text-sm font-medium text-charcoal mb-1">
                  {post.title}
                </p>
                <p className="text-xs text-charcoal/60 mb-2">{post.desc}</p>
                <a href="/journal" className="text-xs font-medium text-sage-deep underline">
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
