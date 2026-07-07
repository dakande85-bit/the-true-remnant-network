export default function SubmitPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Guests</p>
          <h1>Suggest a guest, testimony, teacher, mission or resource.</h1>
          <p>
            Use this intake page to collect names for podcast review. The MVP is frontend-only for now; next it can write
            to Supabase as a pending guest or resource submission.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          <form className="card span-2">
            <div className="form-grid">
              <label>Name<input className="input" placeholder="Guest, organisation, ministry or resource name" /></label>
              <label>Type<select><option>Guest type</option><option>Teacher / Pastor</option><option>Apologist</option><option>Missionary</option><option>Charity Leader</option><option>Testimony</option><option>Music / Worship</option><option>Book / Resource</option></select></label>
              <label>City<input className="input" placeholder="City or online" /></label>
              <label>Country<input className="input" placeholder="Country or global" /></label>
              <label>Website URL<input className="input" placeholder="Official website link" /></label>
              <label>YouTube / Media URL<input className="input" placeholder="YouTube, podcast, music or media link" /></label>
              <label>Support URL<input className="input" placeholder="External official link only, optional" /></label>
              <label>Contact Email<input className="input" placeholder="Public or admin contact" /></label>
            </div>
            <br />
            <label>
              Why should this person be reviewed for the podcast?
              <textarea placeholder="Add a short bio, testimony angle, doctrine notes, public references, concerns to check and why this voice may help believers." />
            </label>
            <br />
            <button className="btn btn-primary" type="button">Submit for Review</button>
          </form>

          <aside className="card">
            <span className="badge">Before recording</span>
            <h3>What should be checked?</h3>
            <p>Identity, public links, doctrine, leadership, references, testimony claims, accountability and any official support pages.</p>
            <a className="btn btn-soft" href="/verification">View Review Levels</a>
          </aside>
        </div>
      </section>
    </>
  );
}
