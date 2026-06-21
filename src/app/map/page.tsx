export default function MapPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Map</p>
          <h1>Find Christian work near you.</h1>
          <p>Map-ready page for churches, missions, charities and events. Add Google Maps or Mapbox later.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-3">
          <div className="card" style={{ gridColumn: "span 2" }}>
            <h2>World Map Placeholder</h2>
            <p>Future map pins will be generated from approved directory profiles with latitude and longitude fields.</p>
            <div style={{ minHeight: 360, borderRadius: 18, background: "linear-gradient(135deg, #dfe9ea, #f6ead1)", border: "1px solid var(--line)" }} />
          </div>
          <aside className="card">
            <h3>Filters</h3>
            <input className="input" placeholder="City or country" />
            <br /><br />
            <select><option>All Categories</option><option>Churches</option><option>Missions</option><option>Events</option></select>
            <br /><br />
            <a className="btn btn-primary" href="/directory">Search Directory</a>
          </aside>
        </div>
      </section>
    </>
  );
}
