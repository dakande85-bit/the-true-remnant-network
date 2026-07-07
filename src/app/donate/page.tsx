const paypalDonateUrl = "https://www.paypal.com/donate";

const supportItems = [
  ["Recording", "Camera, audio, lighting and the basic production setup needed to record clear conversations."],
  ["Editing", "Turning long-form episodes into clean audio, video, clips and shareable teaching moments."],
  ["Research", "Preparing questions, checking Scripture, reviewing topics and making sure the content is handled responsibly."],
  ["Publishing", "Website hosting, podcast distribution, artwork, resources and the ongoing work of getting the message out."],
];

export default function DonatePage() {
  return (
    <>
      <section className="page-hero clean-page-hero">
        <div className="container narrow-copy">
          <p className="kicker">Donate</p>
          <h1>Support a podcast shining light on the truth of God’s Word.</h1>
          <p>
            Your support helps The True Remnant produce conversations, teachings, interviews and resources that equip believers
            to understand the supernatural truth of Scripture, discern end-times deception and stand firm in Jesus Christ.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={paypalDonateUrl} target="_blank" rel="noopener noreferrer">Donate using PayPal</a>
            <a className="btn" href="/social-media">Follow the Show</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          <article className="hero-card span-2 mission-card">
            <p className="kicker">Why give?</p>
            <h2>Faithful media takes prayer, preparation and practical support.</h2>
            <p>
              Each episode requires research, recording, editing, publishing and resource building. Giving helps keep the work
              focused on the Word of God, the power of the Holy Spirit and the call to reach people with truth.
            </p>
          </article>
          <article className="card">
            <span className="badge">PayPal</span>
            <h3>Simple external giving</h3>
            <p>Donations open through PayPal, so the site stays simple and payments are handled outside the website.</p>
            <a className="btn btn-primary" href={paypalDonateUrl} target="_blank" rel="noopener noreferrer">Donate using PayPal</a>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">What support helps cover</p>
              <h2>Practical costs for a spiritual mission.</h2>
            </div>
          </div>
          <div className="grid grid-4">
            {supportItems.map(([title, description]) => (
              <article className="card" key={title}>
                <span className="badge">Support</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
