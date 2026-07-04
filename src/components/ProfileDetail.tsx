import type { DirectoryProfile } from "@/data/directory";
import { StatusBadge } from "./StatusBadge";

export function ProfileDetail({ profile }: { profile: DirectoryProfile }) {
  const links = [
    ["Website", profile.websiteUrl],
    ["YouTube", profile.youtubeUrl],
    ["Donate / Support", profile.donationUrl],
    ["Media", profile.mediaUrl],
    ["Event", profile.eventUrl]
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));

  return (
    <>
      <section className="border-b border-linen bg-white">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 py-14 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold-deep">
              {profile.kind === "person" ? "Person Profile" : "Organisation Profile"}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-ink md:text-7xl">{profile.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">{profile.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.tags.map((tag) => (
                <span className="rounded-full bg-cream px-3 py-1 text-xs font-bold text-stone-700" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl border border-linen bg-parchment p-6">
            <StatusBadge status={profile.status} />
            <dl className="mt-5 grid gap-4 text-sm">
              <div>
                <dt className="font-black uppercase tracking-wide text-stone-500">Category</dt>
                <dd className="mt-1 font-bold text-ink">{profile.category}</dd>
              </div>
              <div>
                <dt className="font-black uppercase tracking-wide text-stone-500">Location</dt>
                <dd className="mt-1 font-bold text-ink">{profile.location}, {profile.country}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 lg:grid-cols-[1fr_340px]">
          <article className="rounded-2xl border border-linen bg-white p-6">
            <h2 className="font-display text-4xl text-ink">Profile summary</h2>
            <p className="mt-4 leading-8 text-stone-600">{profile.description}</p>
            <h3 className="mt-8 font-display text-3xl text-ink">Focus areas</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {profile.focus.map((focus) => (
                <div className="rounded-xl border border-linen bg-cream p-4 text-sm font-bold text-stone-700" key={focus}>
                  {focus}
                </div>
              ))}
            </div>
          </article>
          <aside className="rounded-2xl border border-linen bg-parchment p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-gold-deep">External links</p>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Donations, media, books, websites, music, and events stay external in the MVP.
            </p>
            <div className="mt-5 grid gap-3">
              {links.map(([label, href]) => (
                <a className="rounded-full bg-ink px-4 py-3 text-center text-sm font-black text-cream" href={href} key={label}>
                  {label}
                </a>
              ))}
              {links.length === 0 ? <span className="text-sm font-bold text-stone-500">No public links yet.</span> : null}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
