const convictions = [
  ["Scripture is the measure", "Every episode, guest and resource should be tested against Scripture. Useful Christian media must serve obedience, not curiosity alone."],
  ["Christ is the centre", "The work is not built around the host, guests or online personalities. It exists to make much of Jesus Christ and strengthen His people."],
  ["Discernment must be clean", "We will ask hard questions without turning the project into gossip, fear or careless accusation."],
  ["Testimony should lead somewhere", "Stories should point to repentance, discipleship, prayer, local church life and steady fruit after the dramatic moment has passed."],
  ["Mission needs clarity", "When we share a charity, missionary or ministry, people should know who they are, what they do and where the official support link is."],
  ["Support should be transparent", "Donations are for the practical work of recording, editing, publishing and building resources. PayPal is used as the simple external giving route."],
];

const work = [
  ["Record", "Produce long-form conversations that give people enough time to hear the guest properly, not just a clip designed for attention."],
  ["Review", "Check public links, teaching themes, mission claims and resource recommendations before presenting them as useful."],
  ["Publish", "Turn episodes into YouTube videos, Spotify audio, clips, written notes and resource pages that can be shared."],
  ["Support", "Give listeners a clear way to pray, follow, share and donate through PayPal without hiding the purpose of the support."],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero clean-page-hero">
        <div className="container narrow-copy">
          <p className="kicker">About</p>
          <h1>A Christian media table for truth, testimony, discernment and mission.</h1>
          <p>
            The True Remnant is not trying to be another noisy platform. It is a podcast-first project built to host
            serious conversations, point believers to solid resources and make mission support clear and accountable.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          <article className="hero-card span-2 mission-card">
            <p className="kicker">Mission statement</p>
            <h2>To help believers hear faithful voices, test what is being taught, grow through sound resources and support real Christian mission.</h2>
            <p>
              The first expression of that mission is media: conversations on YouTube and Spotify, a guest archive, a
              reviewed resource library and a simple PayPal route for people who want to support the work.
            </p>
          </article>
          <article className="card">
            <span className="badge">Anchor</span>
            <h3>1 Thessalonians 5:21</h3>
            <p>“Test everything; hold fast what is good.”</p>
            <p>This is the posture: humble, biblical, sober and useful.</p>
            <a className="btn btn-primary" href="/donate">Donate with PayPal</a>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">What we actually do</p>
              <h2>Four practical jobs, not vague branding.</h2>
              <p>The website should make the work obvious in seconds: record, review, publish and support.</p>
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
              <h2>Clear convictions for every episode and resource.</h2>
            </div>
          </div>
          <div className="grid grid-3">
            {convictions.map(([title, description]) => (
              <article className="card" key={title}>
                <span className="badge">Conviction</span>
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
