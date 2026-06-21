import type { DirectoryItem } from "@/data/directory";

const statusClass: Record<DirectoryItem["verificationStatus"], string> = {
  Listed: "status-listed",
  Reviewed: "status-reviewed",
  Verified: "status-verified",
  Recommended: "status-recommended",
  "Under Review": "status-review"
};

export function DirectoryCard({ item }: { item: DirectoryItem }) {
  return (
    <article className="card profile-card">
      <div className="card-cover profile-cover">
        <span>{item.category}</span>
      </div>
      <div className="card-meta">
        <span className="badge">{item.category}</span>
        <span className={`status-pill ${statusClass[item.verificationStatus]}`}>{item.verificationStatus}</span>
      </div>
      <h3>{item.name}</h3>
      <p className="location">{item.city}, {item.country} · {item.language}</p>
      <p>{item.summary}</p>
      <div className="tag-row">
        {item.tags.slice(0, 3).map((tag) => <span key={tag} className="mini-tag">{tag}</span>)}
      </div>
      <a className="btn btn-soft" href={`/directory/${item.id}`}>View Profile</a>
    </article>
  );
}
