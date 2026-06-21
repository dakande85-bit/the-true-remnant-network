const levels = [
  ["Listed", "A known profile added for research or future review. Not a recommendation yet."],
  ["Reviewed", "Basic public details, category, links, location and description checked."],
  ["Verified", "Identity, doctrine, leadership, public ministry activity and references reviewed where possible."],
  ["Recommended", "Personally known, interviewed or strongly referenced by trusted contacts."],
  ["Under Review", "Concerns raised or information needs updating before the profile continues to be shown."]
];

const checks = [
  ["Identity", "Is this a real person, church, ministry or organisation with traceable public information?"],
  ["Doctrine", "Is the gospel, view of Scripture and core Christian teaching clearly stated?"],
  ["Accountability", "Is there leadership, oversight, references or public accountability?"],
  ["Links", "Are donation, event, book, music and website links official external pages?"],
  ["Fruit", "Is there public evidence of ministry activity, service, teaching or mission work?"],
  ["Review", "Can concerns be raised and can the listing be updated, downgraded or removed?"],
];

export default function VerificationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Verification</p>
          <h1>Clear review levels without reckless claims.</h1>
          <p>
            Verification means a profile has passed a defined review stage. It is not a permanent endorsement of every teaching,
            decision or action. The process should be transparent, careful and humble.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container grid grid-3">
          {levels.map(([title, description]) => (
            <article className="card" key={title}>
              <span className="badge">{title}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Review checklist</h2>
          <p>Use this checklist before promoting a listing as Reviewed, Verified or Recommended.</p>
          <div className="grid grid-3">
            {checks.map(([title, description]) => (
              <article className="card" key={title}>
                <span className="badge">Check</span>
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
