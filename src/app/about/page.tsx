const convictions = [
  ["The Word is the standard", "Every supernatural claim, teacher, dream, prophecy and movement must be tested by Scripture, not emotion, popularity or signs alone."],
  ["The Holy Spirit still gives gifts", "We believe the gifts of the Spirit are for the Church today and must operate in love, order, holiness and submission to the Word of God."],
  ["The unseen realm is biblical", "Angels, demons, powers, principalities, deliverance, miracles and spiritual warfare are not fringe topics. They are part of the biblical worldview."],
  ["The last-days warnings matter", "Jesus and the apostles warned about deception, false teachers, lawlessness, spiritual seduction and people turning from truth."],
  ["Worship must be Spirit and truth", "God is calling people out of dead religion, compromise and performance into true worship, repentance and obedience."],
  ["The gospel still saves", "The goal is not fear. The goal is salvation, deliverance, truth and the proclamation that Jesus Christ is Lord."],
];

const work = [
  ["Teach", "Open the supernatural parts of Scripture with reverence, context and the fear of the Lord."],
  ["Expose", "Shine the light of God’s Word on deception, counterfeit spirituality and teachings that lead people away from Christ."],
  ["Equip", "Strengthen believers to pray, discern, worship, walk in the Spirit and stand firm in the last days."],
  ["Proclaim", "Speak the Word of God clearly so unbelievers can hear the truth and come to salvation through Jesus Christ."],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero clean-page-hero">
        <div className="container narrow-copy">
          <p className="kicker">About</p>
          <h1>A podcast for the supernatural truth of Scripture and the call of the remnant.</h1>
          <p>
            The True Remnant was created for Christians who are hungry for truth, tired of shallow religion and aware that
            the Bible reveals a spiritual reality many avoid discussing. We speak about the unseen realm, gifts of the Spirit,
            end-times deception, spiritual warfare and the call to worship God in spirit and in truth.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          <article className="hero-card span-2 mission-card">
            <p className="kicker">Mission statement</p>
            <h2>To reveal the supernatural truth of Scripture, expose end-times deception, equip believers through the Word of God and call people to salvation in Jesus Christ.</h2>
            <p>
              We believe God is calling a remnant people who will not bow to confusion, compromise or false doctrine,
              but will worship Him in spirit and in truth. The aim is not to glorify darkness. The aim is to magnify Jesus Christ.
            </p>
          </article>
          <article className="card">
            <span className="badge">Anchor</span>
            <h3>John 4:24</h3>
            <p>“God is spirit, and those who worship him must worship in spirit and truth.”</p>
            <p>This is the call: truth, worship, obedience and the power of the Holy Spirit.</p>
            <a className="btn btn-primary" href="/donate">Donate with PayPal</a>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">What the show does</p>
              <h2>Teach, expose, equip and proclaim.</h2>
              <p>The podcast exists to bring biblical clarity to topics often ignored, confused or distorted.</p>
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
              <p className="kicker">What we believe</p>
              <h2>Supernatural truth must be anchored in Scripture.</h2>
            </div>
          </div>
          <div className="grid grid-3">
            {convictions.map(([title, description]) => (
              <article className="card" key={title}>
                <span className="badge">Belief</span>
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
