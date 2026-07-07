import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="/" className="logo footer-logo" aria-label="The True Remnant homepage">
            <BrandLogo variant="light" />
          </a>
          <p>A Christian podcast and resource project for truth, testimony, discernment and mission.</p>
          <p className="footer-note">Donations open through PayPal. Podcast and mission links open externally.</p>
        </div>
        <div>
          <strong>Media</strong>
          <a href="/podcast">Podcast</a>
          <a href="/guests">Guests</a>
          <a href="/social-media">Social Media</a>
          <a href="/resources">Resources</a>
        </div>
        <div>
          <strong>Support</strong>
          <a href="/donate">Donate with PayPal</a>
          <a href="/about">Mission</a>
          <a href="/verification">Review Process</a>
          <a href="/resources">Books & Audio</a>
        </div>
        <div>
          <strong>Foundation</strong>
          <p>“Test everything; hold fast what is good.”</p>
          <p>1 Thessalonians 5:21</p>
          <a href="/about">What We Stand For</a>
        </div>
      </div>
    </footer>
  );
}
