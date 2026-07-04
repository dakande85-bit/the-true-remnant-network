import type { DirectoryProfile } from "@/data/directory";
import { StatusBadge } from "./StatusBadge";

export function ProfileCard({ profile }: { profile: DirectoryProfile }) {
  const href = profile.kind === "person" ? `/people/${profile.slug}` : `/organisations/${profile.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-linen bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-editorial">
      <div className={`min-h-44 bg-gradient-to-br ${profile.imageTone} p-5 text-cream`}>
        <span className="rounded-full border border-cream/20 bg-cream/10 px-3 py-1 text-xs font-black uppercase tracking-wide">
          {profile.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={profile.status} />
          <span className="text-xs font-bold uppercase tracking-wide text-stone-500">{profile.kind}</span>
        </div>
        <h3 className="mt-4 font-display text-2xl leading-tight text-ink">{profile.name}</h3>
        <p className="mt-2 text-sm font-bold text-stone-600">
          {profile.location}, {profile.country}
        </p>
        <p className="mt-3 flex-1 text-sm leading-6 text-stone-600">{profile.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {profile.tags.slice(0, 3).map((tag) => (
            <span className="rounded-full bg-cream px-3 py-1 text-xs font-bold text-stone-700" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <a className="mt-5 rounded-full bg-ink px-4 py-3 text-center text-sm font-black text-cream" href={href}>
          View Profile
        </a>
      </div>
    </article>
  );
}
