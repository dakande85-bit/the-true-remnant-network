const productSlots = [
  ["Statement T-Shirts", "Faith-centred everyday designs that point people to Christ."],
  ["Hoodies", "Simple premium Christian clothing for colder weather and outreach events."],
  ["Accessories", "Caps, bags, journals or simple items that can link to an external shop."],
  ["Mission Collection", "A future product group that can support Christian media and mission work if you choose."]
];

export default function ClothingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Clothing</p>
          <h1>Christian clothing links and future product section.</h1>
          <p>
            A separate commercial page for clothing or selected Christian products. Keep it clearly labelled and separate from ministry verification.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          <article className="hero-card span-2">
            <p className="kicker">External shop</p>
            <h2>Add your clothing store link here.</h2>
            <p>
              Connect to Shopify, Gelato, Printful or another external shop. The network stays focused on content, directory profiles and resources.
            </p>
            <a className="btn btn-primary" href="#">External Shop Link</a>
          </article>
          <aside className="card">
            <span className="badge">Rule</span>
            <h3>Keep trust clean</h3>
            <p>Commercial product cards should never imply spiritual verification or endorsement of ministries.</p>
          </aside>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container grid grid-4">
          {productSlots.map(([title, description]) => (
            <article className="card" key={title}>
              <div className="resource-icon" aria-hidden="true">Shop</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
