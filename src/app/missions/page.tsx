export default function MissionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Missions</p>
          <h1>Discover mission work and external support links.</h1>
          <p>The True Remnant does not process donations in the MVP. Profiles link out to official mission, charity or church pages.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-3">
          {[
            "Mission Trips",
            "Evangelism Projects",
            "Church Support",
            "Charity Outreach",
            "Media Equipment",
            "Bibles and Resources"
          ].map((title) => (
            <article className="card" key={title}>
              <span className="badge">External links only</span>
              <h3 style={{ marginTop: 12 }}>{title}</h3>
              <p>Add reviewed projects here with links to their official support pages.</p>
              <a className="btn" href="/submit">Suggest Project</a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
