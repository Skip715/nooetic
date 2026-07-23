import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const POSTS = [
  { title: "What actually counts as a wellness retreat", desc: "A guide to the partner stays now live on Nooetic.", img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=500&q=80" },
  { title: "Reading your consultation letter", desc: "What each section means, and what to do next.", img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=500&q=80" },
  { title: "Three new partners joining this month", desc: "More deals landing across CBD, supplements, and travel.", img: "https://images.unsplash.com/photo-1517686748843-bb360cd39a4c?w=500&q=80" },
  { title: "Holistic, decoded", desc: "What's actually behind the wellness buzzwords.", img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&q=80" },
];

export default function Journal() {
  return (
    <>
      <Header />
      <section className="px-6 md:px-12 py-20 bg-white">
        <h1 className="font-display text-5xl text-charcoal text-center mb-14">The Journal</h1>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {POSTS.map((post) => (
            <div key={post.title} className="grid grid-cols-[160px_1fr] gap-5">
              <div className="relative h-32 rounded overflow-hidden">
                <Image src={post.img} alt={post.title} fill className="object-cover" />
              </div>
              <div>
                <p className="font-display text-lg text-charcoal mb-1">{post.title}</p>
                <p className="text-sm text-charcoal/60 mb-2">{post.desc}</p>
                <a href="#" className="text-xs font-medium text-tide-coral underline underline-offset-2">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
