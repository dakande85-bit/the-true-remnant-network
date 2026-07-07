import { FounderPortrait } from "@/components/FounderPortrait";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { podcastEpisodes } from "@/data/podcasts";
import { resourceItems } from "@/data/resources";

const convictions = [
  ["Scripture before platforms", "The work is not to chase Christian celebrity. The aim is to ask what is true, what is biblical and what actually helps believers obey Christ."],
  ["Testimony with weight", "Stories should not be entertainment. We want honest accounts of repentance, endurance, restoration, prayer and costly obedience."],
  ["Mission with accountability", "When we highlight missions or charities, we point people to official links and clear information rather than emotional pressure."],
  ["Resources that serve people", "Books, audio, Bible tools and worship links are added because they strengthen the listener after the episode ends."],
];

const work = [
  ["Conversations", "Long-form episodes with Bible teachers, pastors, missionaries, charity leaders and believers with testimonies that can serve the church."],
  ["Discernment", "Each feature is handled carefully: public teaching, links, mission claims and resources should be checked before being recommended."],
  ["Support", "The site gives people a clean way to pray, share, listen, donate through PayPal and follow the work on Spotify and YouTube."],
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
            <h1>A Christian show for people who want truth, not noise.</h1>
            <p>
              The True Remnant is being built as a clear table for serious Christian conversation: testimony, Scripture,
              discernment, mission and practical resources. We interview people worth hearing, point listeners to what
              helps them grow, and keep giving links simple and external.
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
            eyebrow="What this is"
            title="A media platform before it becomes a network."
            description="The launch focus is not a complicated directory. It is simple: record strong conversations, publish them well, organise the guests and connect every episode to useful resources and official support links."
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
            eyebrow="What we stand for"
            title="Not hype. Not gossip. Not personality worship."
            description="The tone of the project should be sober, direct and useful. We want to help believers test what they hear, love the truth and find faithful voices without pretending every platform is safe."
          />
          <div className="grid grid-4">
            {convictions.map(([title, description]) => (
              <article className="card topic-card" key={title}>
                <span className="badge">Conviction</span>
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
            eyebrow="Guests"
            title="The guest list is built around substance."
            description="The first season should bring in Bible teachers, pastors, missionaries, charity leaders, worship voices and testimony guests who can speak clearly and humbly."
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
            title="A library that supports the episodes."
            description="When someone finishes listening, they should know where to go next: Scripture tools, books, audio teaching, devotionals and worship resources that are worth reviewing."
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
            <h2>Help build a clean Christian media table for truth, testimony and mission.</h2>
            <p>
              Donations help cover recording, editing, hosting, design, travel for interviews and the practical work of turning conversations into useful resources.
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
