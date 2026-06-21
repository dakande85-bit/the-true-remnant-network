import type { ResourceItem } from "@/data/resources";

export function ResourceCard({ item }: { item: ResourceItem }) {
  return (
    <article className="card">
      <div className="card-cover" />
      <span className="badge">{item.type}</span>
      <h3 style={{ marginTop: 12 }}>{item.title}</h3>
      <p>{item.creator} · {item.topic}</p>
      <p>{item.summary}</p>
      <a className="btn" href={item.url}>Open Resource</a>
    </article>
  );
}
