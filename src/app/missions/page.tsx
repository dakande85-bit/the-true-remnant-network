const missionAreas = [
  ["Mission Trips", "Short-term and long-term mission work with official external support links."],
  ["Evangelism Projects", "Street outreach, gospel campaigns, Bible distribution and testimony-led work."],
  ["Church Support", "Church plants, equipment needs, building support and local ministry help."],
  ["Charity Outreach", "Food support, family care, crisis help and mercy ministry."],
  ["Media Equipment", "Cameras, microphones, livestream kits and content tools for ministries."],
  ["Bibles and Resources", "Bibles, books, discipleship materials and translated resources."]
];

export default function MissionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Missions</p>
          <h1>Discover mission work and official support links.</h1>
          <p>
            The True Remnant does not process donations in the MVP. Mission cards should link to official ministry,
            charity, church, or campaign pages after review.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container grid grid-3">
          <article className="hero-card span-2">
            <p className="kicker">External support only</p>
            <h2>Keep giving simple and accountable.</h2>
            <p>
              Each mission profile should explain who is responsible, what the need is, where updates are posted and which official external link handles support.
            </p>
          </article>
          <article className="card">
            <span className="badge">MVP rule</span>
            <h3>No in-site payments</h3>
            <p>This keeps the first version simpler, safer and easier to launch.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          {missionAreas.map(([title, description]) => (
            <article className="card" key={title}>
              <span className="badge">External links only</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <a className="btn btn-soft" href="/submit">Suggest Project</a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
