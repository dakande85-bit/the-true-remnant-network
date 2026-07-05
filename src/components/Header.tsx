import { BrandLogo } from "./BrandLogo";

const links = [
  ["About", "/about"],
  ["Watch", "/watch"],
  ["Resources", "/resources"],
  ["Prayers", "/prayers"],
  ["Blog", "/blog"],
  ["Newsletter", "/newsletter"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-[#fffaf0]/92 shadow-[0_12px_40px_rgba(9,11,15,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-24 w-[min(1240px,calc(100%-32px))] items-center justify-between gap-6">
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
        <a className="hidden rounded-full bg-ink px-5 py-3 text-sm font-bold text-cream shadow-editorial sm:inline-flex" href="/newsletter">
          Join Newsletter
        </a>
      </div>
    </header>
  );
}
