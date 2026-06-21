const adminAreas = [
  "Applications",
  "Directory Profiles",
  "Verification Queue",
  "Podcast Episodes",
  "Resources",
  "Events",
  "Map Locations",
  "Reports"
];

export default function AdminPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Admin</p>
          <h1>Admin dashboard placeholder.</h1>
          <p>Later this should require authentication and connect to Supabase tables.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-4">
          {adminAreas.map((area) => (
            <article className="card" key={area}>
              <h3>{area}</h3>
              <p>Manage {area.toLowerCase()}.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
