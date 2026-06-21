import { DirectoryCard } from "@/components/DirectoryCard";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { directoryItems } from "@/data/directory";
import { podcastEpisodes } from "@/data/podcasts";
import { resourceItems } from "@/data/resources";

const categories = [
  ["Churches", "Reviewed local fellowships with doctrine, leadership and location notes."],
  ["Teachers", "Books, audio, interviews and teaching profiles connected to clear review notes."],
  ["Missions", "Mission work with official external support links and field information."],
  ["Charities", "Christian outreach, mercy ministry and public accountability details."],
  ["Resources", "Reading lists, worship music, teaching audio, devotionals and Bible tools."],
  ["Events", "Prayer nights, conferences, worship gatherings and mission trips."],
  ["Map", "A location-first discovery layer for churches and ministries near you."],
  ["Podcast", "The media engine that introduces people, testimonies and ministries."]
];

const trustPillars = [
  ["Reviewed first", "Profiles are researched before being featured."],
  ["External links only", "The MVP does not process donations or ministry payments."],
  ["Clear status labels", "Listed, Reviewed, Verified, Recommended or Under Review."],
  ["Podcast-led trust", "Interviews help users hear the people behind the profiles."]
];

export default function HomePage() {
  const latestEpisode = podcastEpisodes[0];
  const featuredResources = resourceItems.slice(0, 3);
  const featuredProfiles = directoryItems.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">The True Remnant Network</p>
            <h1>Find faithful voices. Discover trusted ministries.</h1>
            <p>
              A Christian discovery network for reviewed churches, teachers, missions, charities, books, music,
              events, testimonies and gospel-centred resources in one place.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/podcast">Watch the Podcast</a>
              <a className="btn" href="/directory">Explore Directory</a>
              <a className="btn btn-soft" href="/resources">Books & Audio</a>
            </div>
            <div className="stat-grid">
              <div className="stat"><strong>0%</strong><span>Payment marketplace</span></div>
              <div className="stat"><strong>5</strong><span>Review statuses</span></div>
              <div className="stat"><strong>8</strong><span>Core categories</span></div>
              <div className="stat"><strong>1</strong><span>Simple MVP</span></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="True Remnant network preview">
            <div className="visual-panel">
              <div className="cross-mark" />
              <div className="visual-stack">
                <div className="visual-card"><strong>Podcast Interview</strong><span>Long-form conversations with reviewed voices.</span></div>
                <div className="visual-card"><strong>Directory Profile</strong><span>Bio, doctrine notes, links, location and status.</span></div>
                <div className="visual-card"><strong>Reading + Audio Tabs</strong><span>Books, music, teachings, devotionals and tools.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeader
            eyebrow="Explore"
            title="One network. Multiple discovery paths."
            description="The site starts simple: clean content pages, reviewed directory profiles, external links and a clear verification process."
          />
          <div className="grid grid-4">
            {categories.map(([category, description]) => (
              <a className="card" href={category === "Map" ? "/map" : category === "Podcast" ? "/podcast" : category === "Resources" ? "/resources" : "/directory"} key={category}>
                <span className="badge">{category}</span>
                <h3>{category}</h3>
                <p>{description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Trust"
            title="Built around verification, not hype."
            description="The language stays careful: the platform can review, label and recommend, but it avoids reckless spiritual claims."
            actionLabel="View Verification"
            actionHref="/verification"
          />
          <div className="grid grid-4">
            {trustPillars.map(([title, description]) => (
              <article className="card" key={title}>
                <span className="badge">Trust</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeader
            eyebrow="Directory"
            title="Featured starter profiles"
            description="These are polished starter records. Replace them with real approved churches, teachers, charities, missionaries and Christian resources."
            actionLabel="View Directory"
            actionHref="/directory"
          />
          <div className="grid grid-4">
            {featuredProfiles.map((item) => <DirectoryCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container grid grid-3">
          <div className="card span-2">
            <span className="badge">Latest Podcast</span>
            <h2>{latestEpisode.title}</h2>
            <p>{latestEpisode.summary}</p>
            <div className="row">
              <a className="btn btn-primary" href="/podcast">Open Podcast Hub</a>
              <a className="btn" href="/submit">Suggest Guest</a>
            </div>
          </div>
          <div className="hero-card">
            <p className="kicker">MVP rule</p>
            <h3>External links only</h3>
            <p>Donation, mission, event, book, music and clothing links go out to official pages. The website stays simple and trusted.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Resources"
            title="Reading list, music and audio teaching"
            description="A dedicated resources page with tabs for books, music, teaching audio, devotionals and Bible study tools."
            actionLabel="Open Resources"
            actionHref="/resources"
          />
          <div className="grid grid-3">
            {featuredResources.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
