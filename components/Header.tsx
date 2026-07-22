import Image from "next/image";

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
      <div className="bg-gold-tint/60 text-charcoal text-xs text-center py-2.5 px-4">
        New partner brands added every month.{" "}
        <a href="/offers" className="underline font-medium">
          See what&rsquo;s live
        </a>
      </div>
      <div className="bg-charcoal text-parchment text-xs tracking-wide text-center py-2.5 px-4">
        FOUNDING MEMBERS SAVE 20% FOR THEIR FIRST YEAR
      </div>

      <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-white border-b border-charcoal/10">
        <a href="/" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="Nooetic"
            width={220}
            height={69}
            className="h-12 md:h-14 w-auto"
            priority
          />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-charcoal/75">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-tide-coral">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="/join"
          className="bg-charcoal text-white text-sm font-medium px-6 py-2.5 hover:bg-tide-coral transition-colors"
        >
          Join now
        </a>
      </header>
    </>
  );
}
