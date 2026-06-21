const events = [
  ["Prayer Night", "Weekly or monthly prayer gatherings with organiser details and location."],
  ["Conference", "Christian conferences, teaching weekends and leadership events."],
  ["Mission Trip", "Mission opportunities with official organisers and application links."],
  ["Book Launch", "Christian author launches, talks and resource events."],
  ["Worship Night", "Worship gatherings, music events and testimony nights."],
  ["Evangelism Outreach", "Public outreach, discipleship events and community ministry."]
];

export default function EventsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Events</p>
          <h1>Christian events, conferences, prayer nights and missions.</h1>
          <p>
            Events should be reviewed before listing and should link externally to the official organiser or ticket page.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container card">
          <div className="form-grid">
            <label>Search event<input className="input" placeholder="Prayer, conference, mission, worship" /></label>
            <label>Location<input className="input" placeholder="City, country or online" /></label>
            <label>Event type<select><option>All Events</option><option>Prayer Night</option><option>Conference</option><option>Mission Trip</option><option>Worship Night</option></select></label>
            <label>Month<select><option>Any Month</option><option>This Month</option><option>Next Month</option></select></label>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container grid grid-3">
          {events.map(([title, description]) => (
            <article className="card" key={title}>
              <div className="card-cover profile-cover"><span>{title}</span></div>
              <span className="badge">Event</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <a className="btn btn-soft" href="/submit">Submit Event</a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
