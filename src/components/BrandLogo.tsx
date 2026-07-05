import Image from "next/image";

type BrandLogoProps = {
  variant?: "dark" | "light";
};

export function BrandLogo({ variant = "dark" }: BrandLogoProps) {
  return (
    <span className={`brand-logo brand-logo-${variant}`} aria-label="The True Remnant Network">
      <Image
        alt="The True Remnant Network"
        className="brand-logo-image"
        height={120}
        priority
        src="/brand/true-remnant-wordmark.png"
        width={360}
      />
    </span>
  );
}
