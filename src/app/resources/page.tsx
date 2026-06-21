import { ResourceCard } from "@/components/ResourceCard";
import { resourceItems } from "@/data/resources";

const tabs = [
  "All Resources",
  "Reading List (Books)",
  "Audio (Music)",
  "Teachings (Audio)",
  "Devotionals",
  "Bible Apps & Tools"
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
          <p>Curated recommendations for reading lists, worship music, audio teaching, devotionals and Bible study tools.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tabs" aria-label="Resource tabs">
            {tabs.map((tab, index) => (
              <a key={tab} className={`tab ${index === 1 ? "tab-active" : ""}`} href={`#${tab.toLowerCase().replaceAll(" ", "-").replace(/[()]/g, "")}`}>
                {tab}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="reading-list-books" className="section section-muted">
        <div className="container">
          <h2>Reading List (Books)</h2>
          <p>Books that inspire, challenge and build faith.</p>
          <div className="grid grid-3">
            {books.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section id="audio-music" className="section">
        <div className="container">
          <h2>Audio (Music)</h2>
          <p>Worship songs, albums and playlists to uplift the soul.</p>
          <div className="grid grid-3">
            {music.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section id="teachings-audio" className="section section-muted">
        <div className="container">
          <h2>Teachings (Audio)</h2>
          <p>Audio messages, sermons and teaching series from reviewed voices.</p>
          <div className="grid grid-3">
            {teaching.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section id="devotionals" className="section">
        <div className="container">
          <h2>Devotionals</h2>
          <p>Daily readings, prayers and spiritual formation resources.</p>
          <div className="grid grid-3">
            {devotionals.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section id="bible-apps-tools" className="section section-muted">
        <div className="container">
          <h2>Bible Apps & Tools</h2>
          <p>Study apps, Bible tools, concordances, maps and research resources.</p>
          <div className="grid grid-3">
            {tools.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
