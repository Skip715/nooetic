import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-b from-navy to-blue text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="font-display text-5xl font-semibold">About Nooetics</h1>
        </div>
      </section>

      {/* Keep yourself healthy */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mb-10 leading-tight">
              Keep yourself healthy and fit with the right medicine.
            </h2>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop"
                alt="Team collaborating"
                className="rounded-3xl w-full h-[340px] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=300&auto=format&fit=crop"
                alt="Wellness products"
                className="absolute -bottom-10 -left-6 w-32 h-24 rounded-2xl object-cover shadow-lg hidden sm:block"
              />
            </div>
          </div>

          <div className="lg:pt-4">
            <p className="font-display text-2xl md:text-3xl text-navy leading-snug mb-8">
              &ldquo;We are building infrastructure, not hype. Smarter
              access. Better pricing. Total transparency.&rdquo;
            </p>
            <p className="text-charcoal/70 mb-8">
              Nooetics was built for people who want smarter access to
              regulated wellness services — without overpaying. We operate
              as a UK-based referral platform, negotiating directly with
              top-tier brands and healthcare providers. We secure the
              deals, and our members unlock the benefits. We focus on:
            </p>
            <ul className="space-y-4">
              {["Better pricing", "Faster access", "Structured support", "Sustainable growth"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 font-semibold text-navy">
                    <span className="text-blue">✓</span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Built for access and transparency */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mb-10 leading-tight">
              Built for access and transparency.
            </h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy mb-2">
                    Better pricing through scale
                  </h3>
                  <p className="text-charcoal/60">
                    The healthcare and wellness system shouldn&apos;t be
                    slow, confusing, or overpriced. We negotiate discounted
                    consultation rates and exclusive product deals so our
                    members save money.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="text-2xl">🚧</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy mb-2">
                    Regulated pathways
                  </h3>
                  <p className="text-charcoal/60">
                    Safety is our priority. We only partner with fully
                    licensed UK clinics, regulated pharmacies, and vetted
                    wellness brands that adhere strictly to UK guidelines.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/offers"
              className="inline-block mt-10 rounded-full bg-navy px-7 py-3.5 font-semibold text-white hover:bg-navy/90 transition"
            >
              Browse Member Deals
            </Link>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=700&auto=format&fit=crop"
              alt="Pharmacist"
              className="rounded-3xl w-full h-[300px] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?q=80&w=700&auto=format&fit=crop"
              alt="Regulated pharmacy shelves"
              className="rounded-3xl w-full h-[220px] object-cover mt-4"
            />
            <div className="absolute -top-6 left-6 rounded-2xl bg-navy text-white px-8 py-6 shadow-xl">
              <p className="font-display text-4xl font-semibold">66%</p>
              <p className="text-xs text-white/70 mt-1">Regulated Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical disclaimer, matching reference site placement */}
      <div className="bg-yellow/15 border-y border-yellow/40">
        <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-charcoal/80">
          <p className="font-semibold text-charcoal mb-1">
            Important medical disclaimer
          </p>
          <p>
            Nooetics is a discount and referral network, not a medical
            provider. We do not offer medical advice, diagnosis, or
            treatment. All prescribing decisions are made solely by
            licensed UK healthcare professionals following an independent
            clinical assessment.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
