import { BrandLogo } from "./BrandLogo";

const links = [
  ["Episodes", "/podcast"],
  ["Guests", "/submit"],
  ["Topics", "/resources"],
  ["Resources", "/resources"],
  ["About", "/about"],
];

export function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="logo" aria-label="The True Remnant homepage">
          <BrandLogo />
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={`${label}-${href}`} href={href}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-dark nav-cta" href="/#subscribe">Subscribe</a>
      </div>
    </header>
  );
}
