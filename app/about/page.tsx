import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Header />

      <section className="px-6 md:px-12 py-24 bg-sage-deep text-white text-center">
        <p className="text-gold-tint text-xs font-medium uppercase tracking-[0.15em] mb-4">
          Why Nooetic?
        </p>
        <h1 className="font-display text-5xl mb-4">
          Built for access and transparency.
        </h1>
        <p className="text-white/75 max-w-xl mx-auto">
          {/* TODO: client copy */}
          Wellness shouldn&rsquo;t be slow, confusing, or overpriced.
          Nooetic negotiates directly with the UK&rsquo;s best clinics and
          brands, so our members don&rsquo;t have to.
        </p>
      </section>

      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="relative h-96 rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
              alt="Wellness products"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-charcoal mb-5">
              One hub, many benefits.
            </h2>
            <ul className="space-y-4 text-charcoal/75">
              <li>
                <p className="font-medium text-charcoal mb-1">Vetted UK partners</p>
                <p className="text-sm">Only licensed clinics, regulated pharmacies, and trusted brands.</p>
              </li>
              <li>
                <p className="font-medium text-charcoal mb-1">Better pricing through scale</p>
                <p className="text-sm">We negotiate discounts so members save, not just us.</p>
              </li>
              <li>
                <p className="font-medium text-charcoal mb-1">Faster pathways</p>
                <p className="text-sm">Structured referrals skip the usual confusion and waitlists.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 bg-parchment/40 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-display text-3xl text-charcoal leading-snug mb-8">
            &ldquo;We are building infrastructure, not hype. Smarter access.
            Better pricing. Total transparency.&rdquo;
          </p>
          <a
            href="/pricing"
            className="inline-block bg-tide-coral text-white px-7 py-3 font-medium hover:bg-clay-dark transition-colors"
          >
            See membership pricing
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
