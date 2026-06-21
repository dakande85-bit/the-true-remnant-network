import { ResourceCard } from "@/components/ResourceCard";
import { resourceItems } from "@/data/resources";

const tabs = [
  ["All Resources", "all-resources"],
  ["Reading List (Books)", "reading-list-books"],
  ["Audio (Music)", "audio-music"],
  ["Teachings (Audio)", "teachings-audio"],
  ["Devotionals", "devotionals"],
  ["Bible Apps & Tools", "bible-apps-tools"]
];

export default function ResourcesPage() {
  const books = resourceItems.filter((item) => item.type === "Book");
  const music = resourceItems.filter((item) => item.type === "Music");
  const teaching = resourceItems.filter((item) => item.type === "Audio Teaching");
  const devotionals = resourceItems.filter((item) => item.type === "Devotional");
  const tools = resourceItems.filter((item) => item.type === "Bible Tool");

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Resources</p>
          <h1>Books, music, teaching and tools for faithful growth.</h1>
          <p>
            A curated resource library with visible tabs for reading lists, worship music, audio teaching,
            devotionals and Bible study tools. Start with reviewed external links only.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="tabs" aria-label="Resource tabs">
            {tabs.map(([label, id], index) => (
              <a key={id} className={`tab ${index === 0 ? "tab-active" : ""}`} href={`#${id}`}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="all-resources" className="section section-muted">
        <div className="container">
          <p className="kicker">All Resources</p>
          <h2>Complete resource library</h2>
          <p>Everything approved for the resources page appears here before being split into the specialist tabs below.</p>
          <div className="grid grid-4">
            {resourceItems.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section id="reading-list-books" className="section">
        <div className="container">
          <p className="kicker">Reading List</p>
          <h2>Books</h2>
          <p>Books that inspire, challenge, teach doctrine and build discipleship.</p>
          <div className="grid grid-3">
            {books.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section id="audio-music" className="section section-muted">
        <div className="container">
          <p className="kicker">Audio</p>
          <h2>Music</h2>
          <p>Worship songs, albums, playlists and testimony-led audio.</p>
          <div className="grid grid-3">
            {music.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section id="teachings-audio" className="section">
        <div className="container">
          <p className="kicker">Teaching</p>
          <h2>Teachings (Audio)</h2>
          <p>Audio messages, sermons, studies and teaching series from reviewed voices.</p>
          <div className="grid grid-3">
            {teaching.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section id="devotionals" className="section section-muted">
        <div className="container">
          <p className="kicker">Daily Growth</p>
          <h2>Devotionals</h2>
          <p>Daily readings, prayers and reflection resources.</p>
          <div className="grid grid-3">
            {devotionals.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section id="bible-apps-tools" className="section">
        <div className="container">
          <p className="kicker">Study</p>
          <h2>Bible Apps & Tools</h2>
          <p>Study apps, concordances, maps, language tools and research resources.</p>
          <div className="grid grid-3">
            {tools.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
