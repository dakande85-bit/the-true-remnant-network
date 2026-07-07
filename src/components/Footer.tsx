import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="/" className="logo footer-logo" aria-label="The True Remnant homepage">
            <BrandLogo variant="light" />
          </a>
          <p>A podcast-first Christian media platform for discernment, testimony, mission and sound resources.</p>
          <p className="footer-note">Official giving, book, music and mission links open externally.</p>
        </div>
        <div>
          <strong>Media</strong>
          <a href="/podcast">Podcast</a>
          <a href="/guests">Guests</a>
          <a href="/submit">Suggest</a>
          <a href="/resources">Resources</a>
        </div>
        <div>
          <strong>Platform</strong>
          <a href="/about">About</a>
          <a href="/verification">Review Process</a>
          <a href="/resources">Books & Audio</a>
          <a href="/#subscribe">Subscribe</a>
        </div>
        <div>
          <strong>Foundation</strong>
          <p>Truth, humility, accountability and mission.</p>
          <a href="/about">Mission Statement</a>
        </div>
      </div>
    </footer>
  );
}
