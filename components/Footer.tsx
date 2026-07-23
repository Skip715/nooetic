import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <>
      {/* Get notified strip */}
      <section className="bg-blue text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Get notified about new deals
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Join the Nooetics mailing list for early access to new partner
            launches, priority booking, and exclusive wellness discounts.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 rounded-full px-5 py-3 text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-yellow"
            />
            <button
              type="submit"
              className="rounded-full bg-yellow px-6 py-3 font-semibold text-navy hover:brightness-95 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>

      {/* Medical disclaimer */}
      <div className="bg-yellow/15 border-y border-yellow/40">
        <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-charcoal/80">
          <p className="font-semibold text-charcoal mb-1">
            Important medical disclaimer
          </p>
          <p>
            Nooetics is a discount and referral network, not a medical
            provider. We do not offer medical advice, diagnosis, or
            treatment. All prescribing decisions are made solely by licensed
            UK healthcare professionals following an independent clinical
            assessment. Eligibility for treatment is determined by clinicians
            and is never guaranteed. All medical services are delivered by
            regulated healthcare providers.
          </p>
        </div>
      </div>

      {/* Main footer */}
      <footer className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-white/60 max-w-xs text-sm">
              The UK wellness membership network. Making regulated wellness
              simpler, faster, and more affordable.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-wide text-yellow mb-4">
              Platform
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/pricing" className="hover:text-white">How it works</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/offers" className="hover:text-white">Wellness Offers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-wide text-yellow mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/partners" className="hover:text-white">Partners</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-wide text-yellow mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-white">Cookie Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Nooetics. All rights reserved.
        </div>
      </footer>
    </>
  );
}
