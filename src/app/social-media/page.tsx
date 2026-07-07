const channels = [
  {
    title: "Spotify Show",
    label: "Audio podcast",
    description: "Spotify will be the clean audio home for the show: full conversations, testimonies and teaching-led episodes people can listen to while travelling, training or working.",
    embedTitle: "Spotify show embed placeholder",
    iframeSrc: "",
    note: "Send the Spotify embed URL when the show is live and it will appear here."
  },
  {
    title: "YouTube Channel",
    label: "Video podcast",
    description: "YouTube will carry the full video conversations, shorter clips and visual resources for people who want to watch and share the discussions.",
    embedTitle: "YouTube embed placeholder",
    iframeSrc: "",
    note: "Send the YouTube channel, playlist or episode embed and it will replace this placeholder."
  }
];

export default function SocialMediaPage() {
  return (
    <>
      <section className="page-hero clean-page-hero">
        <div className="container narrow-copy">
          <p className="kicker">Social Media</p>
          <h1>One show, two main channels: Spotify and YouTube.</h1>
          <p>
            This is where listeners will find the latest audio and video releases. Spotify serves people who want to listen;
            YouTube serves people who want to watch, share clips and see the full conversations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          {channels.map((channel) => (
            <article className="card social-card" key={channel.title}>
              <span className="badge">{channel.label}</span>
              <h2>{channel.title}</h2>
              <p>{channel.description}</p>
              <div className="embed-shell">
                {channel.iframeSrc ? (
                  <iframe
                    title={channel.embedTitle}
                    src={channel.iframeSrc}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                ) : (
                  <div className="embed-placeholder">
                    <strong>{channel.title}</strong>
                    <span>Embed coming soon</span>
                  </div>
                )}
              </div>
              <p className="footer-note">{channel.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="cta-panel">
            <p className="kicker">Support the channels</p>
            <h2>Follow, share and support the show as it launches.</h2>
            <p>
              The fastest way to help the project grow is to listen, subscribe, share the strongest clips and support the practical production work through PayPal.
            </p>
            <div className="row">
              <a className="btn btn-primary" href="/donate">Donate with PayPal</a>
              <a className="btn" href="/podcast">View Podcast Plan</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
