const channels = [
  {
    title: "Spotify Show",
    label: "Audio podcast",
    description: "Paste the Spotify show embed URL here after the podcast is created in Spotify for Podcasters.",
    embedTitle: "Spotify show embed placeholder",
    iframeSrc: "",
    note: "Use a Spotify show embed link, not the normal share link."
  },
  {
    title: "YouTube Channel",
    label: "Video podcast",
    description: "Add the YouTube channel, playlist or latest episode embed once the channel is ready.",
    embedTitle: "YouTube embed placeholder",
    iframeSrc: "",
    note: "Use a YouTube playlist embed for a clean show archive."
  }
];

export default function SocialMediaPage() {
  return (
    <>
      <section className="page-hero clean-page-hero">
        <div className="container narrow-copy">
          <p className="kicker">Social Media</p>
          <h1>Watch, listen and follow The True Remnant.</h1>
          <p>
            This page is ready for the Spotify show embed and YouTube embed. Once the real links are available, replace
            the placeholder source values and the players will show the latest episodes directly on the site.
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
            <p className="kicker">Launch checklist</p>
            <h2>Add the Spotify and YouTube embeds when the show is live.</h2>
            <p>
              Create the Spotify show, create or connect the YouTube channel, then add the official embed URLs here.
              This keeps the website simple while making the media channels easy to access.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
