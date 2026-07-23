const NAV_LINKS = [
  { label: "Membership", href: "/pricing" },
  { label: "Partner brands", href: "/offers" },
  { label: "Become a partner", href: "/partners" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
];

export default function Header() {
  return (
    <>
      {/* TODO: replace with client's real launch offer */}
      <div className="bg-tide-coral/15 text-charcoal text-xs text-center py-2.5 px-4">
        New partner brands added every month.{" "}
        <a href="/offers" className="underline font-medium">
          See what&rsquo;s live
        </a>
      </div>

      <header
        className="flex items-center justify-between px-6 md:px-12 py-4 bg-tide-teal"
        style={{ backgroundColor: "#1F5C52" }}
      >
        <a href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Nooetic" className="h-12 md:h-16 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-parchment/85">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-tide-coral">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="/join"
          className="bg-tide-coral text-white text-sm font-medium px-6 py-2.5 hover:bg-clay-dark transition-colors"
          style={{ backgroundColor: "#E2694A" }}
        >
          Join now
        </a>
      </header>

      <div className="bg-charcoal text-parchment text-xs tracking-wide text-center py-2.5 px-4">
        FOUNDING MEMBERS SAVE 20% FOR THEIR FIRST YEAR
      </div>
    </>
  );
}
