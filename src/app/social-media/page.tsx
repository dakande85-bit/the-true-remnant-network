const channels = [
  {
    title: "Spotify Show",
    label: "Audio podcast",
    description: "Spotify is the audio home for full conversations on the supernatural Bible, gifts of the Spirit, end-times deception, spiritual warfare and the call to worship in Spirit and truth.",
    embedTitle: "Spotify show embed placeholder",
    iframeSrc: "",
    note: "Send the Spotify embed URL when the show is live and it will appear here."
  },
  {
    title: "YouTube Channel",
    label: "Video podcast",
    description: "YouTube will carry the full video episodes, clips and visual teaching resources that help believers share truth and reach people who need the Word of God.",
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
          <h1>Listen on Spotify. Watch on YouTube. Share the light.</h1>
          <p>
            The True Remnant is built to reach people through long-form audio, video conversations and short clips that point
            listeners back to Scripture, the Holy Spirit, discernment and salvation in Jesus Christ.
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
            <h2>Help the message reach believers and unbelievers.</h2>
            <p>
              Follow, share and support the show so the supernatural truth of Scripture can reach people who need clarity, conviction and the gospel of Jesus Christ.
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
