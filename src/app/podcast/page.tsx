import { podcastEpisodes } from "@/data/podcasts";

const series = [
  ["Foundations", "Vision, doctrine, testimony and why the network exists."],
  ["Discernment", "How to test teaching, fruit and public ministry without arrogance."],
  ["Missions", "Stories from the field with official external support links."],
  ["Church Life", "Pastors, local churches, discipleship and community."],
  ["Resources", "Books, music, audio teaching and practical tools."]
];

export default function PodcastPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Podcast</p>
          <h1>The media engine for the network.</h1>
          <p>
            The podcast introduces reviewed people, ministries and testimonies through long-form conversation.
            Each guest can later connect to a directory profile, resource card or mission page.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container grid grid-3">
          <article className="hero-card span-2">
            <p className="kicker">YouTube Series</p>
            <h2>Launch with conversations that build trust.</h2>
            <p>
              Start by interviewing local pastors, Bible teachers, missionaries, charity leaders, worship artists and people with strong testimonies.
            </p>
            <a className="btn btn-primary" href="/submit">Suggest a Guest</a>
          </article>
          <article className="card">
            <span className="badge">Workflow</span>
            <h3>Episode becomes profile</h3>
            <p>Every strong interview can become a directory profile, a resource recommendation, a mission feature or an event listing.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {podcastEpisodes.map((episode) => (
              <article className="card" key={episode.id}>
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
