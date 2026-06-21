import { directoryItems } from "@/data/directory";

export default function MapPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Map</p>
          <h1>Find Christian work near you.</h1>
          <p>
            A map-ready discovery page for churches, missions, charities and events. Later this can connect to
            Google Maps or Mapbox using approved directory profiles with latitude and longitude fields.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          <div className="card span-2">
            <div className="map-shell" aria-label="World map placeholder">
              <span className="map-pin pin-1" />
              <span className="map-pin pin-2" />
              <span className="map-pin pin-3" />
              <span className="map-pin pin-4" />
              <div className="map-label">
                <strong>The True Remnant Map</strong>
                <p>Map pins will come from reviewed directory profiles.</p>
              </div>
            </div>
          </div>

          <aside className="card">
            <span className="badge">Filters</span>
            <h3>Search locally</h3>
            <p>Use this as the future filter panel for location-based discovery.</p>
            <div className="form-grid" style={{ gridTemplateColumns: "1fr" }}>
              <label>Location<input className="input" placeholder="City or country" /></label>
              <label>Category<select><option>All Categories</option><option>Church</option><option>Mission</option><option>Charity</option><option>Event</option></select></label>
              <label>Language<select><option>Any Language</option><option>English</option><option>Spanish</option><option>Portuguese</option></select></label>
            </div>
            <br />
            <a className="btn btn-primary" href="/directory">Search Directory</a>
          </aside>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <h2>Map-ready listings</h2>
          <p>These starter profiles will later become map pins once real coordinates are added.</p>
          <div className="grid grid-3">
            {directoryItems.slice(0, 3).map((item) => (
              <article className="card" key={item.id}>
                <span className="badge">{item.category}</span>
                <h3>{item.name}</h3>
                <p>{item.city}, {item.country}</p>
                <a className="btn btn-soft" href={`/directory/${item.id}`}>Open Profile</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
