export default function ClothingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Clothing</p>
          <h1>Christian clothing links and future product section.</h1>
          <p>Use this page for selected Christian clothing products. Keep it separate from ministry verification.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-3">
          <article className="card" style={{ gridColumn: "span 2" }}>
            <span className="badge">Future Shop Link</span>
            <h2 style={{ marginTop: 12 }}>External clothing shop</h2>
            <p>Connect this page to Shopify, Gelato, Printful or another external shop. The main network remains content and directory focused.</p>
            <a className="btn btn-primary" href="#">External Shop Link</a>
          </article>
          <aside className="card">
            <h3>Rules</h3>
            <p>Keep commercial content clearly labelled and separate from the verification process.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
