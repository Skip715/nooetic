import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "Wellness Offers", href: "/offers" },
  { label: "Partners", href: "/partners" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" aria-label="Nooetics home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/80 hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/join"
          className="inline-flex items-center justify-center rounded-full bg-yellow px-6 py-2.5 text-sm font-semibold text-navy hover:brightness-95 transition"
        >
          Join Now
        </Link>
      </div>
    </header>
  );
}
