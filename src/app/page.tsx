import { DirectoryCard } from "@/components/DirectoryCard";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { directoryItems } from "@/data/directory";
import { podcastEpisodes } from "@/data/podcasts";
import { resourceItems } from "@/data/resources";

const categories = ["Churches", "Teachers", "Ministries", "Charities", "Missions", "Events", "Music & Books"];

export default function HomePage() {
  const latestEpisode = podcastEpisodes[0];

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">The True Remnant Network</p>
            <h1>Find faithful voices. Discover trusted ministries.</h1>
            <p>A Christian network helping believers find reviewed churches, teachers, missions, charities, books, music, events and testimonies in one place.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/podcast">Watch the Podcast</a>
              <a className="btn" href="/directory">Explore the Directory</a>
            </div>
          </div>
          <aside className="hero-card">
            <p className="kicker">Current Focus</p>
            <h2>Simple first. Trusted always.</h2>
            <p>No payment marketplace. No random listings. Start with reviewed profiles, YouTube podcast content, external links and a clear verification process.</p>
            <a className="btn btn-primary" href="/verification">View Verification</a>
          </aside>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeader title="Explore by Category" description="Start with the core areas of Christian content and ministry discovery." />
          <div className="grid grid-4">
            {categories.map((category) => <a className="card" href="/directory" key={category}><h3>{category}</h3><p>Browse reviewed listings.</p></a>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Featured Directory Profiles" description="Seed profiles now. Replace with real verified churches, teachers, missions and ministries." actionLabel="View Directory" actionHref="/directory" />
          <div className="grid grid-4">
            {directoryItems.map((item) => <DirectoryCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container grid grid-3">
          <div className="card" style={{ gridColumn: "span 2" }}>
            <span className="badge">Latest Podcast</span>
            <h2 style={{ marginTop: 12 }}>{latestEpisode.title}</h2>
            <p>{latestEpisode.summary}</p>
            <a className="btn btn-primary" href="/podcast">Watch on YouTube</a>
          </div>
          <div className="card">
            <span className="badge">Clothing</span>
            <h2 style={{ marginTop: 12 }}>Christian clothing links</h2>
            <p>Use this section later for your clothing brand or selected Christian products.</p>
            <a className="btn" href="/clothing">View Clothing</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Reading, Music and Audio" description="A resource library with tabs for books, music, teaching audio, devotionals and Bible tools." actionLabel="Open Resources" actionHref="/resources" />
          <div className="grid grid-3">
            {resourceItems.slice(0, 3).map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
