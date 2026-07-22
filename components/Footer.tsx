const COLUMNS = [
  {
    heading: "Platform",
    links: ["How it works", "Pricing", "Wellness offers", "Check eligibility"],
  },
  {
    heading: "Company",
    links: ["About us", "Partners", "FAQ", "Contact"],
  },
  {
    heading: "Legal",
    links: ["Privacy policy", "Cookie policy", "Terms & conditions", "Affiliate terms"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-sage-deep text-parchment px-6 md:px-12 py-14">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-xl mb-3">Nooetic</p>
          <p className="text-sm text-parchment/70 max-w-xs">
            The UK wellness membership network. Making regulated wellness
            simpler, faster, and more affordable.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <p className="text-xs uppercase tracking-wide text-gold-tint mb-3">
              {col.heading}
            </p>
            <ul className="space-y-2 text-sm text-parchment/80">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-xs text-parchment/50 mt-12">
        © {new Date().getFullYear()} Nooetic. All rights reserved.
      </p>
    </footer>
  );
}
