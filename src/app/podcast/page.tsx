import { FounderPortrait } from "@/components/FounderPortrait";
import { podcastEpisodes } from "@/data/podcasts";

const series = [
  ["Supernatural Bible", "The unseen realm, angels, demons, divine council language, miracles, prophecy and the biblical worldview."],
  ["Gifts of the Spirit", "Prophecy, healing, discernment, tongues, words of knowledge and the Spirit’s work in the Church today."],
  ["End-Times Deception", "False teachers, counterfeit signs, spiritual seduction, strong delusion and the warnings Jesus gave for the last days."],
  ["Spiritual Warfare", "Prayer, deliverance, the armour of God, strongholds, repentance and standing in the authority of Jesus Christ."],
  ["Spirit and Truth Worship", "The call to leave dead religion and worship the Father in holiness, truth and the power of the Holy Spirit."],
  ["Salvation and Testimony", "Stories and biblical teaching that proclaim the Word of God so unbelievers can hear the gospel and be saved."],
];

export default function PodcastPage() {
  return (
    <>
      <section className="page-hero podcast-page-hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Podcast</p>
            <h1>Conversations on the supernatural Bible and the last days.</h1>
            <p>
              The True Remnant Podcast tackles the topics many avoid: the unseen realm, spiritual gifts, warfare, prophecy,
              deception, false doctrine, deliverance, worship and the power of the Word of God. We believe the Bible is supernatural,
              the Holy Spirit still moves, and Jesus Christ is calling people to truth before the hour grows darker.
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
            <p className="kicker">Show purpose</p>
            <h2>We shine light on the truths the enemy wants hidden.</h2>
            <p>
              The aim is not fear, hype or religious entertainment. The aim is to bring everything back to Scripture,
              equip believers to discern the times and call unbelievers to salvation through Jesus Christ.
            </p>
            <a className="btn btn-primary" href="/guests">View Guest Pipeline</a>
          </article>
          <article className="card">
            <span className="badge">Support</span>
            <h3>Why donations matter</h3>
            <p>Giving helps cover editing, hosting, research, equipment, design and the practical work of publishing clear biblical conversations.</p>
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
