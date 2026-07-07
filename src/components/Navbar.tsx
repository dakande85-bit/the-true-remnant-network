import { BrandLogo } from "./BrandLogo";

const links = [
  ["Podcast", "/podcast"],
  ["Guests", "/guests"],
  ["Resources", "/resources"],
  ["Social Media", "/social-media"],
  ["About", "/about"]
];

export function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner nav-inner-simple">
        <a href="/" className="logo" aria-label="Home">
          <BrandLogo />
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={`${label}-${href}`} href={href}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
