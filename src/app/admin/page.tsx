const adminAreas = [
  ["Applications", "Review new submissions before they become public profiles."],
  ["Directory Profiles", "Edit churches, teachers, missions, charities, music and events."],
  ["Verification Queue", "Move profiles through Listed, Reviewed, Verified, Recommended or Under Review."],
  ["Podcast Episodes", "Manage YouTube episode cards, guests, topics and profile links."],
  ["Resources", "Add books, music, teaching audio, devotionals and Bible tools."],
  ["Events", "Approve event cards and official external organiser links."],
  ["Map Locations", "Add city, country, latitude and longitude for approved profiles."],
  ["Reports", "Track concerns, updates, corrections and removal requests."]
];

export default function AdminPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Admin</p>
          <h1>Admin dashboard blueprint.</h1>
          <p>
            This page is a frontend admin overview. Later it should require authentication and connect to Supabase tables.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container grid grid-4">
          {adminAreas.map(([area, description]) => (
            <article className="card" key={area}>
              <span className="badge">Admin</span>
              <h3>{area}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
