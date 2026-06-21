export default function EventsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Events</p>
          <h1>Christian events, conferences, prayer nights and missions.</h1>
          <p>Start with event cards that link externally to official organisers or ticket pages.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-3">
          {["Prayer Night", "Conference", "Mission Trip", "Book Launch", "Worship Night", "Evangelism Outreach"].map((title) => (
            <article className="card" key={title}>
              <div className="card-cover" />
              <span className="badge">Event</span>
              <h3 style={{ marginTop: 12 }}>{title}</h3>
              <p>Add date, location, host, description and official external event link.</p>
              <a className="btn" href="/submit">Submit Event</a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
