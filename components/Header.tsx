const NAV_LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "Wellness offers", href: "/offers" },
  { label: "Partners", href: "/partners" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-5 bg-parchment">
      <div>
        <p className="font-display text-2xl text-sage-deep">Nooetic</p>
        <p className="text-xs text-charcoal/60">
          The UK wellness membership network
        </p>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm text-charcoal/80">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-sage-deep">
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href="/join"
        className="bg-clay text-white text-sm font-medium px-5 py-2.5 rounded-pill hover:bg-clay-dark transition-colors"
      >
        Join now
      </a>
    </header>
  );
}
