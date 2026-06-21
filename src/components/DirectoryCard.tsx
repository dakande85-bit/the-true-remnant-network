import type { DirectoryItem } from "@/data/directory";

export function DirectoryCard({ item }: { item: DirectoryItem }) {
  return (
    <article className="card">
      <div className="card-cover" />
      <span className="badge">{item.category}</span>
      <h3 style={{ marginTop: 12 }}>{item.name}</h3>
      <p>{item.city}, {item.country}</p>
      <p>{item.summary}</p>
      <p><strong>Status:</strong> {item.verificationStatus}</p>
      <a className="btn" href={`/directory/${item.id}`}>View Profile</a>
    </article>
  );
}
