import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="/" className="logo footer-logo" aria-label="The True Remnant homepage">
            <BrandLogo variant="light" />
          </a>
          <p>A Christian discovery network for reviewed voices, churches, missions, resources, events and testimonies.</p>
          <p className="footer-note">No payment marketplace in the MVP. Donation and shop links point externally.</p>
        </div>
        <div>
          <strong>Explore</strong>
          <a href="/podcast">Podcast</a>
          <a href="/directory">Directory</a>
          <a href="/resources">Books & Audio</a>
          <a href="/map">Map</a>
        </div>
        <div>
          <strong>Trust</strong>
          <a href="/verification">Verification Process</a>
          <a href="/submit">Submit for Review</a>
          <a href="/missions">Missions</a>
          <a href="/events">Events</a>
        </div>
        <div>
          <strong>Foundation</strong>
          <p>“Test everything; hold fast what is good.”</p>
          <p>1 Thessalonians 5:21</p>
          <a href="/about">About the Network</a>
        </div>
      </div>
    </footer>
  );
}
