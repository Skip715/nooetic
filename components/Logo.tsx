type LogoProps = {
  variant?: "dark" | "light";
  iconOnly?: boolean;
  className?: string;
};

// Icon + wordmark lockup approximating the brand board (yellow squircle,
// navy swirl mark, wordmark with yellow accent dot). Swap the <svg> below
// for the real vector file once available.
export default function Logo({
  variant = "dark",
  iconOnly = false,
  className = "",
}: LogoProps) {
  const textColor = variant === "dark" ? "text-navy" : "text-white";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <rect width="40" height="40" rx="12" fill="#FFD62E" />
        <path
          d="M12 26V17.5C12 15.567 13.567 14 15.5 14C17.433 14 19 15.567 19 17.5V21C19 22.933 20.567 24.5 22.5 24.5C24.433 24.5 26 22.933 26 21V14"
          stroke="#0D1B2A"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="26" cy="12" r="2" fill="#0D1B2A" />
      </svg>
      {!iconOnly && (
        <span
          className={`font-display font-semibold text-2xl tracking-tight ${textColor}`}
        >
          nooetics
        </span>
      )}
    </span>
  );
}
