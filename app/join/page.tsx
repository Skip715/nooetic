import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Join() {
  return (
    <>
      <Header />
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-lg mx-auto text-center mb-10">
          <h1 className="font-display text-5xl text-charcoal mb-4">Join Nooetic</h1>
          <p className="text-charcoal/70">
            £10/month. No lock-in contracts, cancel any time.
          </p>
        </div>
        <form className="max-w-lg mx-auto space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input placeholder="First name" className="border border-charcoal/20 px-4 py-3 text-sm" />
            <input placeholder="Last name" className="border border-charcoal/20 px-4 py-3 text-sm" />
          </div>
          <input placeholder="Email address" className="w-full border border-charcoal/20 px-4 py-3 text-sm" />
          <button type="button" className="w-full bg-tide-coral text-white py-3 font-medium hover:bg-clay-dark transition-colors">
            Start membership — £10/mo
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}
