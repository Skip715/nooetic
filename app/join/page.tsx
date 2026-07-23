import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function JoinPage() {
  return (
    <>
      <Header />
      <section className="bg-white">
        <div className="mx-auto max-w-xl px-6 py-24 text-center">
          <h1 className="font-display text-4xl font-semibold text-navy mb-4">
            Join Nooetics
          </h1>
          <p className="text-charcoal/70 mb-10">
            Sign-up and payment flow goes here — likely a short form plus
            Stripe checkout once the membership backend is wired up.
          </p>
          <div className="rounded-2xl border border-dashed border-black/20 p-10 text-sm text-charcoal/50">
            TODO: connect membership sign-up (Supabase auth + Stripe
            subscription checkout).
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
