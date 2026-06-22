import { ResourceCard } from "@/components/ResourceCard";
import { resourceItems } from "@/data/resources";

const tabs = [
  ["All Resources", "all-resources"],
  ["Reading List (Books)", "reading-list-books"],
  ["Audio Bible", "audio-bible"],
  ["Audio (Music)", "audio-music"],
  ["Teachings (Audio)", "teachings-audio"],
  ["Devotionals", "devotionals"],
  ["Bible Apps & Tools", "bible-apps-tools"]
];

export default function ResourcesPage() {
  const books = resourceItems.filter((item) => item.type === "Book");
  const audioBible = resourceItems.filter((item) => item.type === "Audio Bible");
  const music = resourceItems.filter((item) => item.type === "Music");
  const teaching = resourceItems.filter((item) => item.type === "Audio Teaching");
  const devotionals = resourceItems.filter((item) => item.type === "Devotional");
  const tools = resourceItems.filter((item) => item.type === "Bible Tool");

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Resources</p>
          <h1>Books, audio, music, teaching and tools for faithful growth.</h1>
          <p>A curated library of external resource links for reading, listening and study.</p>
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
          <div className="grid grid-4">
            {resourceItems.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section id="reading-list-books" className="section">
        <div className="container">
          <p className="kicker">Reading List</p>
          <h2>Books</h2>
          <p>Books for biblical theology, discipleship, discernment and advanced study.</p>
          <div className="grid grid-3">
            {books.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section id="audio-bible" className="section section-muted">
        <div className="container">
          <p className="kicker">Scripture Audio</p>
          <h2>Audio Bible</h2>
          <p>External audio Bible links for Scripture listening.</p>
          <div className="grid grid-3">
            {audioBible.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section id="audio-music" className="section">
        <div className="container">
          <p className="kicker">Audio</p>
          <h2>Music</h2>
          <div className="grid grid-3">
            {music.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section id="teachings-audio" className="section section-muted">
        <div className="container">
          <p className="kicker">Teaching</p>
          <h2>Teachings (Audio)</h2>
          <div className="grid grid-3">
            {teaching.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section id="devotionals" className="section">
        <div className="container">
          <p className="kicker">Daily Growth</p>
          <h2>Devotionals</h2>
          <div className="grid grid-3">
            {devotionals.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section id="bible-apps-tools" className="section section-muted">
        <div className="container">
          <p className="kicker">Study</p>
          <h2>Bible Apps & Tools</h2>
          <div className="grid grid-3">
            {tools.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
