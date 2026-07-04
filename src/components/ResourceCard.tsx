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
  const level = item.level === "Starter" ? "Discovery" : item.level;

  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-linen bg-white p-5 shadow-sm">
      <div className="grid h-16 w-16 place-items-center rounded-2xl border border-gold/25 bg-amber-50 text-sm font-black text-gold-deep">
        {icon}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-cream px-3 py-1 text-xs font-black uppercase tracking-wide text-stone-700">{item.type}</span>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-gold-deep">{level}</span>
      </div>
      <h3 className="mt-4 font-display text-2xl leading-tight text-ink">{item.title}</h3>
      <p className="mt-2 text-sm font-bold text-stone-600">{item.creator} · {item.topic}{item.duration ? ` · ${item.duration}` : ""}</p>
      <p className="mt-3 flex-1 text-sm leading-6 text-stone-600">{item.summary}</p>
      <a
        className="mt-5 rounded-full bg-ink px-4 py-3 text-center text-sm font-black text-cream"
        href={item.url}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        Open Resource
      </a>
    </article>
  );
}
