import { FounderPortrait } from "@/components/FounderPortrait";
import { podcastEpisodes } from "@/data/podcasts";

const series = [
  ["Foundations", "Vision, testimony, doctrine and why The True Remnant exists."],
  ["Discernment", "Testing teaching, public fruit and spiritual claims with humility."],
  ["Prayer", "Biblical prayer, truth, repentance and standing firm."],
  ["Missions", "Stories from the field with official external support links."],
  ["Church Life", "Pastors, local churches, discipleship and Christian community."],
  ["Resources", "Books, music, audio teaching, devotionals and practical tools."],
];

export default function PodcastPage() {
  return (
    <>
      <section className="page-hero podcast-page-hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Podcast</p>
            <h1>The media engine for The True Remnant.</h1>
            <p>
              Launch with long-form Christian conversations that build trust: teachers, pastors, apologists,
              missionaries, charity leaders, worship voices and believers with serious testimonies. Every strong
              episode can become clips, notes, resources and a future guest profile.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/guests">View Guests</a>
              <a className="btn" href="/resources">Open Resources</a>
            </div>
          </div>
          <div className="hero-visual hero-visual-portrait page-portrait">
            <FounderPortrait />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container grid grid-3">
          <article className="hero-card span-2">
            <p className="kicker">YouTube Series</p>
            <h2>Start with conversations that reveal doctrine, fruit and calling.</h2>
            <p>
              The first season should feel like a trusted table: clear Scripture, humble questions, testimony, prayer,
              careful review and practical resources for believers who want truth.
            </p>
            <a className="btn btn-primary" href="/guests">View Guest Pipeline</a>
          </article>
          <article className="card">
            <span className="badge">Workflow</span>
            <h3>Episode becomes archive</h3>
            <p>Each recording can create clips, quotes, notes, links, resources and a reviewed profile when appropriate.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {podcastEpisodes.map((episode) => (
              <article className="card episode-card" key={episode.id}>
                <div className="card-cover profile-cover"><span>{episode.series}</span></div>
                <div className="card-meta">
                  <span className="badge">{episode.topic}</span>
                  <span className="mini-tag">{episode.status}</span>
                </div>
                <h3>{episode.title}</h3>
                <p className="location">{episode.guest}</p>
                <p>{episode.summary}</p>
                <a className="btn btn-primary" href={episode.youtubeUrl}>Watch Episode</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="grid grid-3">
            {series.map(([title, description]) => (
              <article className="card" key={title}>
                <span className="badge">Series</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
