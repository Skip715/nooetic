import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-b from-navy to-blue text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="font-display text-5xl font-semibold">Get in touch</h1>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Questions about membership, a partner offer, or something else?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-24">
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">First name *</label>
                <input type="text" required className="w-full rounded-lg border border-black/10 bg-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Last name *</label>
                <input type="text" required className="w-full rounded-lg border border-black/10 bg-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Email address *</label>
              <input type="email" required placeholder="user@website.com" className="w-full rounded-lg border border-black/10 bg-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Subject *</label>
              <input type="text" required className="w-full rounded-lg border border-black/10 bg-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Comments / Questions *</label>
              <textarea required rows={5} className="w-full rounded-lg border border-black/10 bg-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue" />
            </div>
            <button type="submit" className="rounded-full bg-navy px-7 py-3.5 font-semibold text-white hover:bg-navy/90 transition">
              Send message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
