import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CATEGORIES = [
  { label: "Private consultations", img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80" },
  { label: "Supplements & holistic", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80" },
  { label: "CBD & recovery", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80" },
  { label: "Travel & retreats", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80" },
];

const DEALS = [
  {
    title: "EarthBrew mushroom tea",
    tag: "BUY 1, GET 1",
    price: "Functional wellness brand",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
  },
  {
    title: "Specialist consultation",
    tag: "MEMBER RATE",
    price: "From £49",
    img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=600&q=80",
  },
  {
    title: "Full-spectrum CBD drops",
    tag: "20% OFF",
    price: "Storewide",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
  },
  {
    title: "Coastal wellness retreat",
    tag: "MEMBER RATE",
    price: "15% off stays",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
  },
];

const JOURNAL = [
  {
    title: "What actually counts as a wellness retreat",
    desc: "A guide to the partner stays now live on Nooetic.",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&q=80",
  },
  {
    title: "Reading your consultation letter",
    desc: "What each section means, and what to do next.",
    img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=400&q=80",
  },
  {
    title: "Three new partners joining this month",
    desc: "More deals landing across CBD, supplements, and travel.",
    img: "https://images.unsplash.com/photo-1517686748843-bb360cd39a4c?w=400&q=80",
  },
  {
    title: "Holistic, decoded",
    desc: "What's actually behind the wellness buzzwords.",
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="grid md:grid-cols-2">
        <div className="relative h-[420px] md:h-[640px]">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80"
            alt="Woman enjoying a wellness ritual"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center px-8 md:px-20 py-16 md:py-0 bg-white text-center md:text-left">
          <p className="text-tide-coral text-xs font-medium uppercase tracking-[0.2em] mb-6">
            The UK&rsquo;s fastest-growing wellness discount platform
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-charcoal mb-6">
            More wellness.
            <br />
            Less spend.
          </h1>
          <p className="text-charcoal/70 text-lg mb-8 max-w-sm mx-auto md:mx-0">
            {/* TODO: replace with client copy */}
            One membership connects you to licensed medical clinics and
            exclusive discounts on wellness products, retreats, and travel
            partners across the UK.
          </p>
          <a
            href="/join"
            className="inline-block w-fit mx-auto md:mx-0 bg-charcoal text-white px-7 py-3 font-medium hover:bg-tide-coral transition-colors"
          >
            Join now
          </a>
        </div>
      </section>

      {/* Browse by category */}
      <section className="px-6 md:px-12 py-20 bg-tide-teal/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[240px_1fr] gap-10">
          <div>
            <h2 className="font-display text-4xl text-charcoal leading-tight mb-4">
              Browse the
              <br />
              network
            </h2>
            <a href="/offers" className="text-sm font-medium text-charcoal underline underline-offset-4">
              See all partners
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <a key={cat.label} href="#" className="group">
                <div className="relative h-32 md:h-40 rounded overflow-hidden mb-3">
                  <Image src={cat.img} alt={cat.label} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <p className="text-charcoal text-xs font-medium uppercase tracking-wide">
                  {cat.label}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Deals grid */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-charcoal mb-10">
            This month&rsquo;s member deals
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {DEALS.map((deal) => (
              <div key={deal.title}>
                <span className="inline-block bg-tide-coral text-white text-[10px] font-semibold tracking-wide px-3 py-1 mb-3">
                  {deal.tag}
                </span>
                <div className="relative h-48 rounded overflow-hidden mb-3">
                  <Image src={deal.img} alt={deal.title} fill className="object-cover" />
                </div>
                <p className="font-display text-lg text-charcoal mb-1">
                  {deal.title}
                </p>
                <p className="text-tide-teal text-sm font-medium mb-4">{deal.price}</p>
                <button className="w-full border border-charcoal text-charcoal text-sm font-medium py-2.5 hover:bg-tide-teal hover:text-white hover:border-tide-teal transition-colors">
                  View deal
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership snapshot */}
      <section className="px-6 md:px-12 py-20 bg-tide-teal/5">
        <div className="grid md:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
          <div>
            <p className="text-tide-coral text-xs font-medium uppercase tracking-[0.15em] mb-4">
              One membership
            </p>
            <h2 className="font-display text-4xl text-charcoal mb-5 leading-tight">
              Everything, for £10 a month.
            </h2>
            <p className="text-charcoal/70 mb-6 max-w-md">
              {/* TODO: replace with client copy */}
              No lock-in contracts. No hidden fees. Cancel any time — but
              members tend to stay, because the savings pay for themselves
              after one order.
            </p>
            <ul className="space-y-3 text-sm text-charcoal/80 mb-8">
              <li>— Discounted rates with licensed medical clinics</li>
              <li>— Exclusive pricing on premium wellness brands</li>
              <li>— Partner discounts on retreats and travel</li>
            </ul>
            <a
              href="/join"
              className="inline-block bg-tide-teal text-white px-7 py-3 font-medium hover:bg-tide-coral transition-colors"
            >
              Become a member
            </a>
          </div>
          <div className="relative h-96 rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
              alt="Apothecary shelf of wellness products"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Journal strip */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-charcoal mb-10">
            Recommended reading
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {JOURNAL.map((post) => (
              <div key={post.title}>
                <div className="relative h-48 rounded overflow-hidden mb-3">
                  <Image src={post.img} alt={post.title} fill className="object-cover" />
                </div>
                <p className="text-sm font-medium text-charcoal mb-1">
                  {post.title}
                </p>
                <p className="text-xs text-charcoal/60 mb-2">{post.desc}</p>
                <a href="/journal" className="text-xs font-medium text-charcoal underline underline-offset-2">
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
