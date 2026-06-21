export default function SubmitPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Submit</p>
          <h1>Submit a church, ministry, teacher, mission, event or resource.</h1>
          <p>This form is a frontend placeholder. Later it should write to Supabase as a pending application.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <form className="card">
            <div className="form-grid">
              <input className="input" placeholder="Name of organisation or person" />
              <select><option>Category</option><option>Church</option><option>Teacher</option><option>Mission</option><option>Charity</option><option>Event</option><option>Resource</option></select>
              <input className="input" placeholder="City" />
              <input className="input" placeholder="Country" />
              <input className="input" placeholder="Website URL" />
              <input className="input" placeholder="YouTube or media URL" />
            </div>
            <br />
            <textarea placeholder="Short bio and why this should be reviewed for listing" />
            <br /><br />
            <button className="btn btn-primary" type="button">Submit for Review</button>
          </form>
        </div>
      </section>
    </>
  );
}
