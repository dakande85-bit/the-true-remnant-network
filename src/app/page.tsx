import { FounderPortrait } from "@/components/FounderPortrait";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { podcastEpisodes } from "@/data/podcasts";
import { resourceItems } from "@/data/resources";

const launchPillars = [
  ["Discernment", "Test doctrine, fruit and public ministry with Scripture, humility and clear review notes."],
  ["Testimony", "Let believers hear real stories of rescue, repentance, calling, endurance and hope."],
  ["Prayer", "Equip people with biblical language for prayer, truth, repentance and standing firm."],
  ["Mission", "Connect interviews to official mission, charity, event, book and resource links without taking payments."],
];

const buildSteps = [
  ["01", "Record", "Start with strong long-form episodes: founder vision, guest interviews, testimonies and teaching conversations."],
  ["02", "Review", "Add notes beside every voice: doctrine, location, links, public resources and current review status."],
  ["03", "Resource", "Turn every episode into clips, articles, book lists, prayer resources and guest profile pages."],
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
            <h1>Faithful Christian media for discernment, testimony and mission.</h1>
            <p>
              A podcast-first platform for long-form conversations with Christians who teach truth, expose deception,
              share testimony and point people back to Scripture. The website stays clean: episodes, guests, topics,
              resources and external links only.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/podcast">Watch the Podcast</a>
              <a className="btn" href="/submit">Suggest a Guest</a>
              <a className="btn btn-soft" href="/resources">Explore Resources</a>
            </div>
            <div className="stat-grid trust-strip">
              <div className="stat"><strong>01</strong><span>Podcast first</span></div>
              <div className="stat"><strong>0%</strong><span>Payment marketplace</span></div>
              <div className="stat"><strong>5</strong><span>Review labels</span></div>
              <div className="stat"><strong>∞</strong><span>Scripture over hype</span></div>
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
            eyebrow="Launch shape"
            title="Make the podcast the front door."
            description="The old directory idea becomes the archive behind the media. People arrive through interviews, then discover approved resources, guest notes and mission links."
            actionLabel="Open Podcast Hub"
            actionHref="/podcast"
          />
          <div className="grid grid-3">
            {buildSteps.map(([step, title, description]) => (
              <article className="card number-card" key={title}>
                <span>{step}</span>
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
            eyebrow="Topics"
            title="Content pillars for the first season."
            description="Keep the first release focused. These pillars give the channel a clear identity without cluttering the navigation."
          />
          <div className="grid grid-4">
            {launchPillars.map(([title, description]) => (
              <article className="card topic-card" key={title}>
                <span className="badge">Season 1</span>
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
            <span className="badge">Latest Launch Episode</span>
            <h2>{latestEpisode.title}</h2>
            <p>{latestEpisode.summary}</p>
            <div className="row">
              <a className="btn btn-primary" href="/podcast">Open Podcast Hub</a>
              <a className="btn" href="/submit">Suggest Guest</a>
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
            eyebrow="Guest pipeline"
            title="Planned conversations to build trust."
            description="Start with the founder episode, then bring in teachers, pastors, apologists, missionaries, charity leaders and testimony voices."
            actionLabel="View Episodes"
            actionHref="/podcast"
          />
          <div className="grid grid-3">
            {podcastEpisodes.map((episode) => (
              <article className="card" key={episode.id}>
                <div className="card-cover profile-cover"><span>{episode.series}</span></div>
                <div className="card-meta">
                  <span className="badge">{episode.topic}</span>
                  <span className="mini-tag">{episode.status}</span>
                </div>
                <h3>{episode.title}</h3>
                <p className="location">{episode.guest}</p>
                <p>{episode.summary}</p>
                <a className="btn btn-primary" href="/podcast">View Episode Plan</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Resources"
            title="Books, audio, prayers and tools that serve the episodes."
            description="Resources support the podcast instead of competing with it: books, teaching audio, prayer notes, Bible study tools and external links."
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
            <p className="kicker">Subscribe</p>
            <h2>Launch lean. Build trust. Add the network behind the podcast.</h2>
            <p>
              The immediate goal is simple: publish strong conversations, collect guest suggestions, build a reviewed
              resource archive and send people to official external links for giving, books, music and mission support.
            </p>
            <div className="row">
              <a className="btn btn-primary" href="/podcast">Start with the Podcast</a>
              <a className="btn" href="/about">Read the Vision</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
