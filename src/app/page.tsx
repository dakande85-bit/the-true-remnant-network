import { FounderPortrait } from "@/components/FounderPortrait";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { podcastEpisodes } from "@/data/podcasts";
import { resourceItems } from "@/data/resources";

const convictions = [
  ["The Bible is supernatural", "Scripture reveals the unseen realm, angels, demons, spiritual gifts, prophecy, miracles and the authority of Jesus Christ over every power of darkness."],
  ["The gifts of the Spirit matter", "We believe the Holy Spirit still equips believers today for witness, discernment, prayer, healing, prophecy and the building up of the Church."],
  ["End-times deception is here", "Jesus warned that deception would increase. We test teachings, movements and spiritual claims by the written Word of God."],
  ["Worship must be Spirit and truth", "God is calling a people out of dead religion, compromise and confusion to worship Him with truth, holiness and surrender."],
];

const work = [
  ["Reveal", "Open the supernatural worldview of the Bible and show that the unseen realm is not fantasy. It is part of the biblical story."],
  ["Discern", "Talk plainly about false doctrine, counterfeit spirituality, deception and the topics many believers are not being taught."],
  ["Equip", "Use Scripture, testimony and serious conversation to strengthen believers and call unbelievers to salvation in Jesus Christ."],
];

export default function HomePage() {
  const latestEpisode = podcastEpisodes[0];
  const featuredResources = resourceItems.slice(0, 3);

  return (
    <>
      <section className="hero podcast-hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">The True Remnant Podcast</p>
            <h1>Supernatural truth for the last days.</h1>
            <p>
              The True Remnant is a Christian podcast exploring the supernatural reality of the Bible, the gifts of the
              Holy Spirit, spiritual warfare, end-times deception and the call to worship God in spirit and in truth.
              We shine the light of Scripture on the truths the enemy wants hidden and proclaim Jesus Christ to believers and unbelievers.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/podcast">Watch the Podcast</a>
              <a className="btn" href="/social-media">Spotify & YouTube</a>
              <a className="btn btn-soft" href="/donate">Donate with PayPal</a>
            </div>
          </div>
          <div className="hero-visual hero-visual-portrait">
            <FounderPortrait />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeader
            eyebrow="Why this exists"
            title="The hour is late. The deception is real. The Word of God is still the light."
            description="We believe God is calling a remnant people to wake up, return to Scripture, walk in the Holy Spirit and stand firm in Jesus Christ while confusion increases around them."
            actionLabel="Read the Mission"
            actionHref="/about"
          />
          <div className="grid grid-3">
            {work.map(([title, description]) => (
              <article className="card number-card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What we believe"
            title="The Bible is supernatural. The Spirit still moves. Truth must be tested."
            description="This show is not religious entertainment. It is a call to discernment, repentance, worship, spiritual maturity and bold faith in the power of the Word of God."
          />
          <div className="grid grid-4">
            {convictions.map(([title, description]) => (
              <article className="card topic-card" key={title}>
                <span className="badge">Belief</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container grid grid-3">
          <div className="card span-2 dark-feature-card">
            <span className="badge">First episode</span>
            <h2>{latestEpisode.title}</h2>
            <p>{latestEpisode.summary}</p>
            <div className="row">
              <a className="btn btn-primary" href="/podcast">Open Podcast Hub</a>
              <a className="btn" href="/donate">Support by PayPal</a>
            </div>
          </div>
          <div className="hero-card scripture-card">
            <p className="kicker">Anchor verse</p>
            <h3>“Test everything; hold fast what is good.”</h3>
            <p>1 Thessalonians 5:21</p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeader
            eyebrow="Podcast themes"
            title="Conversations many churches avoid, but the Bible does not."
            description="The unseen realm, gifts of the Spirit, spiritual warfare, prophecy, deliverance, deception, false doctrine, worship, holiness, mission and the return of Christ."
            actionLabel="View Guests"
            actionHref="/guests"
          />
          <div className="grid grid-3">
            {podcastEpisodes.slice(0, 3).map((episode) => (
              <article className="card" key={episode.id}>
                <div className="card-cover profile-cover"><span>{episode.series}</span></div>
                <div className="card-meta">
                  <span className="badge">{episode.topic}</span>
                  <span className="mini-tag">{episode.status}</span>
                </div>
                <h3>{episode.title}</h3>
                <p className="location">{episode.guest}</p>
                <p>{episode.summary}</p>
                <a className="btn btn-primary" href="/guests">View Guest List</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Resources"
            title="Books, audio and tools for supernatural Bible study."
            description="Resources should help listeners go deeper into Scripture, discern truth, understand the unseen realm and grow in prayer, worship and obedience to Christ."
            actionLabel="Open Resources"
            actionHref="/resources"
          />
          <div className="grid grid-3">
            {featuredResources.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="subscribe">
        <div className="container">
          <div className="cta-panel">
            <p className="kicker">Support the work</p>
            <h2>Help shine the light of God’s Word in a time of deception.</h2>
            <p>
              Donations help cover recording, editing, hosting, design, research and the practical work of publishing episodes that equip believers and call unbelievers to Jesus Christ.
            </p>
            <div className="row">
              <a className="btn btn-primary" href="/donate">Donate with PayPal</a>
              <a className="btn" href="/social-media">Follow the Show</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
