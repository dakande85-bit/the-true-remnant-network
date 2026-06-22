type BrandLogoProps = {
  variant?: "dark" | "light";
};

export function BrandLogo({ variant = "dark" }: BrandLogoProps) {
  return (
    <span className={`brand-logo brand-logo-${variant}`} aria-label="The True Remnant Network">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 120 120" role="img" focusable="false">
          <path className="brand-arc" d="M18 84C20 43 48 18 84 18C95 18 104 21 112 26" />
          <path className="brand-base" d="M20 94C39 87 77 87 102 96" />
          <path className="brand-cross" d="M60 19V88M38 43H82" />
          <circle className="brand-person" cx="34" cy="70" r="5" />
          <circle className="brand-person" cx="86" cy="70" r="5" />
          <path className="brand-person-body" d="M28 88C30 78 35 75 40 88M80 88C82 78 87 75 92 88" />
        </svg>
      </span>
      <span className="brand-wordmark">
        <strong>THE TRUE REMNANT</strong>
        <small>NETWORK</small>
      </span>
    </span>
  );
}
