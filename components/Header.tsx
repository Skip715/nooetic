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
      {/* TODO: replace with client's real launch offer / social links */}
      <div className="bg-sage-deep text-parchment text-xs tracking-wide text-center py-2 px-4">
        Founding members save 20% for their first year — join before launch
      </div>

      <header className="flex flex-col items-center gap-4 px-6 md:px-12 py-8 bg-parchment border-b border-charcoal/10">
        <div className="text-center">
          <p className="font-display text-3xl tracking-wide text-sage-deep">
            Nooetic
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-charcoal/50 mt-1">
            Rituals for regulated wellness
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-charcoal/80">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-sage-deep">
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
