import type { ResourceItem } from "@/data/resources";

export function ResourceCard({ item }: { item: ResourceItem }) {
  const icon =
    item.type === "Book" ? "Book" :
    item.type === "Music" ? "Music" :
    item.type === "Audio Teaching" ? "Audio" :
    item.type === "Audio Bible" ? "Bible" :
    item.type === "Devotional" ? "Daily" :
    "Study";

  const isExternal = item.url.startsWith("http");

  return (
    <article className="card resource-card">
      <div className="resource-icon" aria-hidden="true">{icon}</div>
      <div className="card-meta">
        <span className="badge">{item.type}</span>
        <span className="mini-tag">{item.level}</span>
      </div>
      <h3>{item.title}</h3>
      <p className="location">{item.creator} · {item.topic}{item.duration ? ` · ${item.duration}` : ""}</p>
      <p>{item.summary}</p>
      <a
        className="btn btn-soft"
        href={item.url}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        Open Resource
      </a>
    </article>
  );
}
