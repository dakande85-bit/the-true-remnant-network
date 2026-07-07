import { FounderPortrait } from "@/components/FounderPortrait";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { podcastEpisodes } from "@/data/podcasts";
import { resourceItems } from "@/data/resources";

const launchPillars = [
  ["Discernment", "Testing teaching and public claims with Scripture, humility, wisdom and accountability."],
  ["Testimony", "Real conversations about repentance, rescue, calling, endurance and hope in Christ."],
  ["Mission", "Stories from churches, charities and missionaries with official external support links."],
  ["Resources", "Books, Bible tools, audio teaching, devotionals and worship resources that serve the episodes."],
];

const buildSteps = [
  ["Listen", "Long-form podcast conversations that let people hear the person, doctrine, testimony and mission behind the voice."],
  ["Test", "Clear review notes: what the guest teaches, where they are based, what they link to and why they are being featured."],
  ["Grow", "Each episode points to Scripture, useful resources, official ministry links and practical next steps for believers."],
];

export default function HomePage() {
  const latestEpisode = podcastEpisodes[0];
  const featuredResources = resourceItems.slice(0, 3);

  return (
    <>
      <section className="hero podcast-hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Christian podcast and resource hub</p>
            <h1>Faithful Christian media for truth, testimony and mission.</h1>
            <p>
              The True Remnant exists to host serious Christian conversations, test what is being taught, share
              testimonies, highlight mission work and point believers to reliable books, Bible tools, worship and teaching resources.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/podcast">Watch the Podcast</a>
              <a className="btn" href="/guests">View Guests</a>
              <a className="btn btn-soft" href="/resources">Explore Resources</a>
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
            eyebrow="What we do"
            title="Podcast first. Resources behind it. Trust around it."
            description="The launch version is simple: publish conversations, organise guests, add real resource links and make the mission clear. The directory and map can grow later without confusing the first release."
            actionLabel="Read About Us"
            actionHref="/about"
          />
          <div className="grid grid-3">
            {buildSteps.map(([title, description]) => (
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
            eyebrow="Standing for"
            title="Clear convictions without careless claims."
            description="The site should feel sober, biblical and useful: not hype, not personality worship, not a payment marketplace."
          />
          <div className="grid grid-4">
            {launchPillars.map(([title, description]) => (
              <article className="card topic-card" key={title}>
                <span className="badge">Pillar</span>
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
            <span className="badge">Launch episode</span>
            <h2>{latestEpisode.title}</h2>
            <p>{latestEpisode.summary}</p>
            <div className="row">
              <a className="btn btn-primary" href="/podcast">Open Podcast Hub</a>
              <a className="btn" href="/guests">View Guests</a>
            </div>
          </div>
          <div className="hero-card scripture-card">
            <p className="kicker">Foundation</p>
            <h3>“Test everything; hold fast what is good.”</h3>
            <p>1 Thessalonians 5:21</p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeader
            eyebrow="Guests"
            title="Upcoming conversations."
            description="Start with the founder episode, then build toward teachers, pastors, apologists, missionaries, charity leaders, worship voices and testimony stories."
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
            title="Real books, audio and tools for the launch archive."
            description="Resources support the episodes instead of replacing them: books, teaching audio, Bible tools, devotionals, worship resources and external links."
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
            <p className="kicker">Launch ready direction</p>
            <h2>Start with excellent conversations. Build the network after trust is earned.</h2>
            <p>
              The first release should drive people to watch, listen and explore reviewed resources. More complex features can come after the audience understands the mission.
            </p>
            <div className="row">
              <a className="btn btn-primary" href="/podcast">Start with the Podcast</a>
              <a className="btn" href="/about">Read the Mission</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
