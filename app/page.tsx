import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DEALS = [
  {
    title: "Specialist follow-up care",
    tag: "Save 30% on repeat visits",
    desc: "Seamless follow-up consultations to monitor progress.",
    img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=600&q=80",
  },
  {
    title: "Cognitive complex",
    tag: "25% off first box",
    desc: "A science-backed adaptogen supplement for daily focus.",
    img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=80",
  },
  {
    title: "Full-spectrum CBD drops",
    tag: "20% off storewide",
    desc: "High-strength, third-party lab-tested for daily balance.",
    img: "https://images.unsplash.com/photo-1611072965169-e6d5606f6b0a?w=600&q=80",
  },
];

const JOURNAL = [
  {
    title: "How the eligibility check actually works",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80",
  },
  {
    title: "Reading your first consultation letter",
    img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=400&q=80",
  },
  {
    title: "Three new partners joining this month",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Split hero — TODO: swap for client photography */}
      <section className="grid md:grid-cols-2">
        <div className="relative h-[420px] md:h-[560px]">
          <Image
            src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&q=80"
            alt="Clinician reviewing a consultation with a patient"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-sage-deep/40" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-parchment">
            <p className="font-display text-4xl md:text-5xl leading-tight mb-4">
              Access.
              <br />
              Simplified.
            </p>
            <p className="max-w-sm text-sm md:text-base opacity-90 mb-6">
              Structured referrals to licensed UK clinics — no confusing
              waitlists, no guesswork.
            </p>
            <a
              href="/eligibility"
              className="inline-block w-fit border border-parchment px-6 py-2.5 rounded-pill text-sm font-medium hover:bg-parchment hover:text-sage-deep transition-colors"
            >
              Check eligibility
            </a>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[560px]">
          <Image
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=80"
            alt="Wellness products including CBD oil and supplements"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-clay-dark/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
            <p className="font-display text-4xl md:text-5xl leading-tight mb-4">
              Save.
              <br />
              Instantly.
            </p>
            <p className="max-w-sm text-sm md:text-base opacity-90 mb-6">
              Member pricing on premium supplements, CBD, and recovery
              brands from day one.
            </p>
            <a
              href="/offers"
              className="inline-block w-fit bg-clay px-6 py-2.5 rounded-pill text-sm font-medium hover:bg-clay-dark transition-colors"
            >
              Browse deals
            </a>
          </div>
        </div>
      </section>

      {/* Membership snapshot */}
      <section className="px-6 md:px-12 py-20 bg-parchment">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <p className="text-clay text-xs font-medium uppercase tracking-[0.15em] mb-4">
              One membership
            </p>
            <h2 className="font-display text-4xl text-sage-deep mb-5 leading-tight">
              Everything, for £10 a month.
            </h2>
            <p className="text-charcoal/70 mb-6 max-w-md">
              {/* TODO: replace with client copy */}
              No lock-in contracts. No hidden fees. Cancel any time — but
              members tend to stay, because the savings pay for themselves
              after one visit.
            </p>
            <ul className="space-y-3 text-sm text-charcoal/80 mb-8">
              <li>— Reduced consultation rates at licensed clinics</li>
              <li>— Ongoing partner discounts on wellness brands</li>
              <li>— Priority booking with specialists</li>
            </ul>
            <a
              href="/join"
              className="inline-block bg-sage-deep text-parchment px-7 py-3 rounded-pill font-medium hover:bg-charcoal transition-colors"
            >
              Become a member
            </a>
          </div>
          <div className="relative h-80 rounded-card overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
              alt="Calm apothecary-style shelf of wellness products"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Deals grid */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-clay text-xs font-medium uppercase tracking-[0.15em] mb-3">
            Exclusive to members
          </p>
          <h2 className="font-display text-3xl text-sage-deep mb-10">
            This week&rsquo;s deals
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {DEALS.map((deal) => (
              <div key={deal.title} className="rounded-card overflow-hidden border border-charcoal/10">
                <div className="relative h-44">
                  <Image src={deal.img} alt={deal.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-clay text-xs font-medium uppercase tracking-wide mb-2">
                    {deal.tag}
                  </p>
                  <p className="font-display text-lg text-sage-deep mb-1">
                    {deal.title}
                  </p>
                  <p className="text-sm text-charcoal/60">{deal.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal strip */}
      <section className="px-6 md:px-12 py-20 bg-parchment">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-3xl text-sage-deep">
              From the journal
            </h2>
            <a href="/journal" className="text-sm text-sage-deep underline">
              View all articles
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {JOURNAL.map((post) => (
              <div key={post.title}>
                <div className="relative h-40 rounded-card overflow-hidden mb-3">
                  <Image src={post.img} alt={post.title} fill className="object-cover" />
                </div>
                <p className="text-sm font-medium text-charcoal/85">
                  {post.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
