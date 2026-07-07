const beliefs = [
  ["Scripture first", "The Bible is the standard for doctrine, correction and discipleship."],
  ["Christ centred", "The platform exists to point people to Jesus Christ."],
  ["Careful review", "We review public teaching, links and claims with humility, patience and accountability."],
  ["Mission minded", "We highlight churches, missions, charities and resources that help believers pray, serve and grow."],
  ["External links only", "The launch version links out to official pages and does not process payments."],
  ["Trust over speed", "The network grows through interviews, public links and clear status labels."],
];

const work = [
  ["Podcast", "Long-form conversations with teachers, pastors, mission leaders, worship voices and testimony guests."],
  ["Resources", "A curated library of books, audio teaching, Bible tools, devotionals and worship resources."],
  ["Guest review", "A clear intake and review process before people are presented as featured voices or organisations."],
  ["Official links", "External links to ministry, charity, event, book, music and support pages."],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero clean-page-hero">
        <div className="container narrow-copy">
          <p className="kicker">About</p>
          <h1>Christian media that helps believers grow and stand firm.</h1>
          <p>
            The True Remnant is a podcast-first Christian media platform. We host serious conversations, gather useful
            resources and build a reviewed network of voices, churches, missions and ministries over time.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          <article className="hero-card span-2 mission-card">
            <p className="kicker">Mission statement</p>
            <h2>To help believers find faithful voices, hear real testimonies and connect with trustworthy Christian resources.</h2>
            <p>
              We do this through podcast conversations, careful review notes, Scripture-centred resources and official
              external links. The first goal is not complexity. The first goal is trust.
            </p>
          </article>
          <article className="card">
            <span className="badge">Foundation</span>
            <h3>1 Thessalonians 5:21</h3>
            <p>“Test everything; hold fast what is good.”</p>
            <p>This is the posture of the project: truth, humility, patience and accountability.</p>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">What we do</p>
              <h2>The launch version has four jobs.</h2>
              <p>Everything else should wait until the foundation is clear and the audience understands the mission.</p>
            </div>
          </div>
          <div className="grid grid-4">
            {work.map(([title, description]) => (
              <article className="card" key={title}>
                <span className="badge">Work</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">What we stand for</p>
              <h2>Clear convictions for a sober Christian platform.</h2>
            </div>
          </div>
          <div className="grid grid-3">
            {beliefs.map(([title, description]) => (
              <article className="card" key={title}>
                <span className="badge">Principle</span>
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
