type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

// Text-based lockup matching the brand board (Clash Grotesk wordmark +
// yellow accent dot). Swap for the real vector logo file once available.
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "dark" ? "text-navy" : "text-white";

  return (
    <span
      className={`inline-flex items-center gap-2 font-display font-semibold text-2xl tracking-tight ${textColor} ${className}`}
    >
      <span className="relative">
        nooet
        <span className="relative">
          i
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-yellow" />
        </span>
        cs
      </span>
    </span>
  );
}
