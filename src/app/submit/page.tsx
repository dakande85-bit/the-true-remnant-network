export default function SubmitPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Submit</p>
          <h1>Submit a church, ministry, teacher, mission, event or resource.</h1>
          <p>
            This is the future intake form for profiles. In the MVP it is a frontend form; next it should write to Supabase as a pending application.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          <form className="card span-2">
            <div className="form-grid">
              <label>Name<input className="input" placeholder="Organisation, person, ministry or resource name" /></label>
              <label>Category<select><option>Category</option><option>Church</option><option>Teacher</option><option>Mission</option><option>Charity</option><option>Event</option><option>Music</option><option>Book / Resource</option></select></label>
              <label>City<input className="input" placeholder="City or online" /></label>
              <label>Country<input className="input" placeholder="Country or global" /></label>
              <label>Website URL<input className="input" placeholder="Official website link" /></label>
              <label>YouTube / Media URL<input className="input" placeholder="YouTube, podcast, music or media link" /></label>
              <label>Donation / Support URL<input className="input" placeholder="External official link only" /></label>
              <label>Contact Email<input className="input" placeholder="Public or admin contact" /></label>
            </div>
            <br />
            <label>
              Bio and reason for review
              <textarea placeholder="Give a short bio, doctrine notes, leadership information, references and why this should be reviewed for listing." />
            </label>
            <br />
            <button className="btn btn-primary" type="button">Submit for Review</button>
          </form>

          <aside className="card">
            <span className="badge">Before listing</span>
            <h3>What should be checked?</h3>
            <p>Identity, public links, doctrine, leadership, references, location, accountability and any external support pages.</p>
            <a className="btn btn-soft" href="/verification">View Review Levels</a>
          </aside>
        </div>
      </section>
    </>
  );
}
