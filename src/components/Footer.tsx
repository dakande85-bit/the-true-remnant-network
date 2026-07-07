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
          <p className="footer-note">No payment marketplace in the MVP. Giving, shop, book and mission links point externally.</p>
        </div>
        <div>
          <strong>Media</strong>
          <a href="/podcast">Episodes</a>
          <a href="/submit">Suggest Guest</a>
          <a href="/#subscribe">Subscribe</a>
          <a href="/resources">Resources</a>
        </div>
        <div>
          <strong>Trust</strong>
          <a href="/verification">Verification Process</a>
          <a href="/resources">Books & Audio</a>
          <a href="/missions">Missions</a>
          <a href="/events">Events</a>
        </div>
        <div>
          <strong>Foundation</strong>
          <p>“Test everything; hold fast what is good.”</p>
          <p>1 Thessalonians 5:21</p>
          <a href="/about">About the Vision</a>
        </div>
      </div>
    </footer>
  );
}
