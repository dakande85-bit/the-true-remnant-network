export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">About</p>
          <h1>The True Remnant is a simple Christian trust network.</h1>
          <p>The aim is to help believers discover faithful teaching, ministries, missions, churches, events and resources in one place.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-3">
          <article className="card">
            <h3>Media</h3>
            <p>The podcast introduces people, ministries and testimonies through long-form conversation.</p>
          </article>
          <article className="card">
            <h3>Directory</h3>
            <p>The directory helps users search reviewed Christian people, organisations and resources.</p>
          </article>
          <article className="card">
            <h3>Discernment</h3>
            <p>The platform uses a visible review process instead of claiming blanket spiritual authority.</p>
          </article>
        </div>
      </section>
    </>
  );
}
