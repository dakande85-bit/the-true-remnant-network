import { BrandLogo } from "./BrandLogo";
import { DonateLink } from "./DonateLink";

const links = [
  ["About", "/about"],
  ["Watch", "/watch"],
  ["Resources", "/resources"],
  ["Prayers", "/prayers"],
  ["Blog", "/blog"],
  ["Newsletter", "/newsletter"],
  ["Donate", "/donate"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-[#fffaf0]/92 shadow-[0_12px_40px_rgba(9,11,15,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 w-[calc(100%-32px)] items-center justify-between gap-5 px-0 sm:w-[calc(100%-48px)]">
        <a href="/" aria-label="The True Remnant Network home">
          <BrandLogo />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-stone-700 lg:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a className="transition hover:text-gold-deep" key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <DonateLink className="hidden rounded-full bg-gold px-5 py-3 text-sm font-black text-ink shadow-editorial sm:inline-flex">
          Donate
        </DonateLink>
      </div>
    </header>
  );
}
