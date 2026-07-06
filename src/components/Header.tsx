import { BrandLogo } from "./BrandLogo";

const links = [
  ["Episodes", "/watch"],
  ["Guests", "/guests"],
  ["Resources", "/resources"],
  ["Blog", "/blog"],
  ["Events", "/events"],
  ["About", "/about"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-[#fffaf0]/92 shadow-[0_12px_40px_rgba(9,11,15,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 w-[calc(100%-32px)] items-center justify-between gap-5 px-0 sm:w-[calc(100%-48px)]">
        <a href="/" aria-label="The True Remnant home">
          <BrandLogo />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-stone-700 lg:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a className="transition hover:text-gold-deep" key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="hidden rounded-full bg-gold px-5 py-3 text-sm font-black text-ink shadow-editorial sm:inline-flex" href="/newsletter">
          Subscribe
        </a>
      </div>
    </header>
  );
}
