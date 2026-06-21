const links = [
  ["Podcast", "/podcast"],
  ["Directory", "/directory"],
  ["Map", "/map"],
  ["Missions", "/missions"],
  ["Events", "/events"],
  ["Resources", "/resources"],
  ["About", "/about"]
];

export function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="logo" aria-label="The True Remnant homepage">
          <span className="logo-mark">TR</span>
          <span className="logo-copy">
            THE TRUE REMNANT
            <small>NETWORK</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-dark nav-cta" href="/submit">Submit Ministry</a>
      </div>
    </header>
  );
}
