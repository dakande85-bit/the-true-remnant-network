const paypalDonateUrl = "https://www.paypal.com/donate";

const supportItems = [
  ["Production", "Microphones, lighting, camera support, editing software, storage and the basic cost of recording clean conversations."],
  ["Publishing", "Hosting, website upkeep, podcast distribution, artwork, clips and the practical work of getting each episode online."],
  ["Research", "Time spent checking guests, organising resources, preparing questions and making sure links are clear before publishing."],
  ["Mission", "Building a useful archive that can point people to prayer, testimony, local church life, charities and official support links."],
];

export default function DonatePage() {
  return (
    <>
      <section className="page-hero clean-page-hero">
        <div className="container narrow-copy">
          <p className="kicker">Donate</p>
          <h1>Support The True Remnant through PayPal.</h1>
          <p>
            If the show helps you, you can support the practical work behind it: recording, editing, hosting, design,
            research and turning conversations into resources people can actually use.
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
            <h2>Good Christian media takes more than pressing record.</h2>
            <p>
              Every episode needs preparation, recording, editing, publishing, follow-up notes and resource links. Giving helps keep the work
              focused, independent and useful without turning the site into a payment marketplace.
            </p>
          </article>
          <article className="card">
            <span className="badge">PayPal</span>
            <h3>Simple external giving</h3>
            <p>Donations open through PayPal, so the site stays simple and the payment is handled outside the website.</p>
            <a className="btn btn-primary" href={paypalDonateUrl} target="_blank" rel="noopener noreferrer">Donate using PayPal</a>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">What support helps cover</p>
              <h2>Practical costs, clear purpose.</h2>
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
