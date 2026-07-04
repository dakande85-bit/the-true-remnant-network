import type { Resource } from "@/data/resources";

const statusLabel: Record<Resource["status"], string> = {
  featured: "Featured",
  recommended: "Recommended",
  resource: "Resource",
  "review-needed": "Review needed"
};

export function ResourceCard({ item }: { item: Resource }) {
  const href = `/resources/${item.slug}`;
  const externalLink =
    item.links.website ??
    item.links.youtube ??
    item.links.spotify ??
    item.links.applePodcast ??
    item.links.instagram ??
    item.links.books;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-linen bg-white shadow-sm">
      <div className="min-h-44 bg-gradient-to-br from-ink via-stone-900 to-gold-deep p-5 text-cream">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-cream/10 px-3 py-1 text-xs font-black uppercase tracking-wide">{item.category}</span>
          <span className="rounded-full border border-cream/20 px-3 py-1 text-xs font-bold">{statusLabel[item.status]}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-gold-deep">{item.resourceType.replace("-", " ")}</p>
        <h3 className="mt-3 font-display text-3xl leading-tight text-ink">{item.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-stone-600">{item.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.topics.slice(0, 4).map((topic) => (
            <span className="rounded-full bg-cream px-3 py-1 text-xs font-bold text-stone-700" key={topic}>
              {topic}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <a className="rounded-full bg-ink px-4 py-3 text-sm font-black text-cream" href={href}>
            View Resource
          </a>
          {externalLink ? (
            <a className="rounded-full border border-linen bg-parchment px-4 py-3 text-sm font-black text-ink" href={externalLink}>
              Watch / Visit
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
