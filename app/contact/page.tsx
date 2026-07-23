import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Header />

      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h1 className="font-display text-5xl text-charcoal mb-4">Contact us</h1>
          <p className="text-charcoal/70">
            Questions about membership, a partner deal, or anything else —
            we usually reply within one business day.
          </p>
        </div>

        <form className="max-w-xl mx-auto space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input placeholder="First name" className="border border-charcoal/20 px-4 py-3 text-sm" />
            <input placeholder="Last name" className="border border-charcoal/20 px-4 py-3 text-sm" />
          </div>
          <input placeholder="Email address" className="w-full border border-charcoal/20 px-4 py-3 text-sm" />
          <input placeholder="Subject" className="w-full border border-charcoal/20 px-4 py-3 text-sm" />
          <textarea
            placeholder="How can we help?"
            rows={5}
            className="w-full border border-charcoal/20 px-4 py-3 text-sm"
          />
          <button type="button" className="w-full bg-tide-coral text-white py-3 font-medium hover:bg-clay-dark transition-colors">
            Send message
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
}
