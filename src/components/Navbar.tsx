const links = [
  ["Home", "/"],
  ["Podcast", "/podcast"],
  ["Directory", "/directory"],
  ["Map", "/map"],
  ["Missions", "/missions"],
  ["Events", "/events"],
  ["Resources", "/resources"],
  ["Clothing", "/clothing"],
  ["About", "/about"]
];

export function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="logo">
          THE TRUE REMNANT
          <span>NETWORK</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-dark" href="/submit">Submit Ministry</a>
      </div>
    </header>
  );
}
