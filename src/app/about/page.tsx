const principles = [
  ["Christ-centred", "The network exists to point people toward faithful Christian teaching, mission and community."],
  ["Careful with trust", "Profiles use review levels instead of careless claims about who is spiritually perfect."],
  ["Simple to launch", "No payment marketplace, no heavy community features, no complex app at the start."],
  ["Media-led", "Podcast interviews help users hear the people, stories and ministries behind the listings."],
  ["Global direction", "The structure can grow from local profiles into a worldwide map of reviewed Christian work."],
  ["Useful resources", "Books, music, teaching audio, devotionals and tools sit in one organised resource hub."]
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">About</p>
          <h1>The True Remnant is a Christian discovery and trust network.</h1>
          <p>
            The aim is to help believers discover faithful teaching, ministries, missions, churches, events and resources in one place,
            while using a visible review process to protect trust.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          <article className="hero-card span-2">
            <p className="kicker">Vision</p>
            <h2>A network, not just a podcast website.</h2>
            <p>
              The podcast builds credibility. The directory organises trustworthy contacts. The resource hub shares books and audio.
              The map helps people find local Christian work. The mission pages link out to official support pages.
            </p>
          </article>
          <article className="card">
            <span className="badge">Scripture posture</span>
            <h3>Test everything</h3>
            <p>Use Scripture, fruit, humility, wisdom and accountability as the posture behind every review.</p>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container grid grid-3">
          {principles.map(([title, description]) => (
            <article className="card" key={title}>
              <span className="badge">Principle</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
