const NAV_LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "Wellness offers", href: "/offers" },
  { label: "Partners", href: "/partners" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
];

export default function Header() {
  return (
    <>
      {/* TODO: replace with client's real launch offer */}
      <div className="bg-gold-tint text-charcoal text-xs font-medium tracking-wide text-center py-2 px-4">
        Founding members save 20% for their first year — join before launch
      </div>
      <div className="bg-charcoal text-parchment/90 text-xs tracking-wide text-center py-2.5 px-4">
        GET 25% OFF YOUR FIRST CONSULTATION
      </div>

      <header className="flex items-center justify-between px-6 md:px-12 py-5 bg-sage-deep">
        <div>
          <p className="font-display text-2xl text-parchment tracking-wide">
            Nooetic
          </p>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-parchment/80">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gold-tint">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="/join"
          className="bg-clay text-white text-sm font-medium px-6 py-2.5 rounded-pill hover:bg-clay-dark transition-colors"
        >
          Join now
        </a>
      </header>
    </>
  );
}
