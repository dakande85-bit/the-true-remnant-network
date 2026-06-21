const levels = [
  ["Listed", "A known profile added for research or future review."],
  ["Reviewed", "Basic public details, category and links checked."],
  ["Verified", "Identity, doctrine, leadership, public ministry activity and references reviewed where possible."],
  ["Recommended", "Personally known, interviewed or strongly referenced by trusted contacts."],
  ["Under Review", "Concerns raised or information needs updating before listing continues."]
];

export default function VerificationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Verification</p>
          <h1>Clear review levels without reckless claims.</h1>
          <p>Verification means a profile has passed a defined review stage. It should not be presented as a permanent endorsement of every teaching or action.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-3">
          {levels.map(([title, description]) => (
            <article className="card" key={title}>
              <span className="badge">{title}</span>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
