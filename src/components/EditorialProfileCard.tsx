import Image from "next/image";
import type { DirectoryProfile } from "@/data/directory";
import { editorialImages } from "@/content/images";

export function EditorialProfileCard({ profile }: { profile: DirectoryProfile }) {
  const href = profile.kind === "person" ? `/people/${profile.slug}` : `/organisations/${profile.slug}`;
  const image = editorialImages[profile.imageKey];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-linen bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-editorial">
      <a className="relative block min-h-56 overflow-hidden bg-ink" href={href}>
        <Image className="object-cover transition duration-700 group-hover:scale-105" src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-cream/90 px-3 py-1 text-xs font-black uppercase tracking-wide text-ink">
            {profile.category}
          </span>
          {profile.isExample ? <span className="rounded-full border border-cream/30 bg-black/35 px-3 py-1 text-xs font-bold text-cream">Example</span> : null}
        </div>
      </a>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-stone-500">{profile.kind}</span>
        </div>
        <h3 className="mt-4 font-display text-3xl leading-tight text-ink">{profile.name}</h3>
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
