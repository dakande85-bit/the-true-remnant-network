import { FounderPortrait } from "@/components/FounderPortrait";
import { podcastEpisodes } from "@/data/podcasts";

const series = [
  ["Foundations", "Why the show exists, what it will cover and how listeners can test the work as it grows."],
  ["Discernment", "Conversations on doctrine, false teaching, public claims, spiritual confusion and how to test without pride."],
  ["Testimony", "Stories that move beyond emotion into repentance, discipleship, prayer and steady obedience."],
  ["Missions", "Interviews with people serving churches, charities and mission work, with official links for prayer and support."],
  ["Resources", "Books, Bible tools, audio teaching and worship resources that help listeners keep growing after an episode."],
  ["Church Life", "Pastors, local fellowship, discipleship, family, prayer and the ordinary faithfulness that keeps people grounded."],
];

export default function PodcastPage() {
  return (
    <>
      <section className="page-hero podcast-page-hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Podcast</p>
            <h1>Long-form Christian conversations with a clear purpose.</h1>
            <p>
              The show is built for people who are tired of shallow clips and vague Christian content. Each episode should
              help listeners understand the guest, test the message, hear the testimony and leave with something useful to pray, study or share.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/social-media">Spotify & YouTube</a>
              <a className="btn" href="/donate">Support the Show</a>
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
            <p className="kicker">Show format</p>
            <h2>A table for testimony, doctrine, mission and practical help.</h2>
            <p>
              The aim is not to manufacture controversy. The aim is to ask honest questions, listen carefully, test what is being said,
              and point people to Scripture, prayer, local church life and reliable resources.
            </p>
            <a className="btn btn-primary" href="/guests">View Guest Pipeline</a>
          </article>
          <article className="card">
            <span className="badge">Support</span>
            <h3>Why donations matter</h3>
            <p>Giving helps cover editing, hosting, equipment, design and the time needed to turn interviews into useful resources.</p>
            <a className="btn btn-soft" href="/donate">Donate with PayPal</a>
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
