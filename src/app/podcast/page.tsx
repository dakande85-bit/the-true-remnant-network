import { podcastEpisodes } from "@/data/podcasts";

export default function PodcastPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Podcast</p>
          <h1>The media engine for the network.</h1>
          <p>Use podcast interviews to build trust, introduce reviewed ministries and create content around teaching, missions, testimonies and discipleship.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-3">
          {podcastEpisodes.map((episode) => (
            <article className="card" key={episode.id}>
              <div className="card-cover" />
              <span className="badge">{episode.topic}</span>
              <h3 style={{ marginTop: 12 }}>{episode.title}</h3>
              <p>With {episode.guest}</p>
              <p>{episode.summary}</p>
              <a className="btn btn-primary" href={episode.youtubeUrl}>Watch Episode</a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
