import type { ResourceItem } from "@/data/resources";

export function ResourceCard({ item }: { item: ResourceItem }) {
  return (
    <article className="card resource-card">
      <div className="resource-icon" aria-hidden="true">
        {item.type === "Book" ? "Book" : item.type === "Music" ? "Music" : item.type === "Audio Teaching" ? "Audio" : item.type === "Devotional" ? "Daily" : "Study"}
      </div>
      <div className="card-meta">
        <span className="badge">{item.type}</span>
        <span className="mini-tag">{item.level}</span>
      </div>
      <h3>{item.title}</h3>
      <p className="location">{item.creator} · {item.topic}{item.duration ? ` · ${item.duration}` : ""}</p>
      <p>{item.summary}</p>
      <a className="btn btn-soft" href={item.url}>Open Resource</a>
    </article>
  );
}
