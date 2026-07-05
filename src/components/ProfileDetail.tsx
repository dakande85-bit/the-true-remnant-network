import Image from "next/image";
import type { DirectoryProfile } from "@/data/directory";
import { getRelatedProfiles } from "@/data/directory";
import { editorialImages } from "@/content/images";
import { EditorialProfileCard } from "./EditorialProfileCard";

export function ProfileDetail({ profile }: { profile: DirectoryProfile }) {
  const image = editorialImages[profile.imageKey];
  const relatedProfiles = getRelatedProfiles(profile);
  const links = [
    ["Website", profile.websiteUrl],
    ["YouTube", profile.youtubeUrl],
    ["Donate / Support", profile.donationUrl],
    ["Media", profile.mediaUrl],
    ["Event", profile.eventUrl],
    ...(profile.resources ?? []).map((resource) => [resource.label, resource.href])
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-cream">
        <Image className="object-cover opacity-45" src={image.src} alt={image.alt} fill priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/72 to-ink/20" />
        <div className="relative mx-auto grid min-h-[640px] w-[min(1180px,calc(100%-32px))] items-end gap-8 py-14 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold">
              {profile.kind === "person" ? "Conversation Profile" : "Ministry Profile"}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[0.92] tracking-tight md:text-8xl">{profile.name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/74">{profile.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.tags.map((tag) => (
                <span className="rounded-full border border-cream/20 bg-cream/10 px-3 py-1 text-xs font-bold text-cream" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <aside className="rounded-[1.5rem] border border-cream/15 bg-cream/10 p-6 backdrop-blur-md">
            {profile.isExample ? <p className="mt-3 text-sm font-bold text-gold">Example profile for launch presentation.</p> : null}
            <dl className="mt-6 grid gap-4 text-sm">
              <div>
                <dt className="font-black uppercase tracking-wide text-cream/48">Category</dt>
                <dd className="mt-1 font-bold text-cream">{profile.category}</dd>
              </div>
              <div>
                <dt className="font-black uppercase tracking-wide text-cream/48">Location</dt>
                <dd className="mt-1 font-bold text-cream">{profile.location}, {profile.country}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-6">
            <article className="rounded-[2rem] border border-linen bg-white p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-deep">Story</p>
              <h2 className="mt-3 font-display text-5xl leading-tight text-ink">The story behind the profile</h2>
              <p className="mt-5 text-lg leading-8 text-stone-600">{profile.story}</p>
            </article>
            <article className="rounded-[2rem] border border-linen bg-white p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-deep">Conversation notes</p>
              <p className="mt-4 text-lg leading-8 text-stone-600">{profile.reviewNotes}</p>
            </article>
            <article className="rounded-[2rem] border border-linen bg-white p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-deep">Beliefs / focus</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {[...profile.beliefs, ...profile.focus].map((item) => (
                  <div className="rounded-xl border border-linen bg-cream p-4 text-sm font-bold text-stone-700" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
          <aside className="h-fit rounded-[2rem] border border-linen bg-parchment p-6 shadow-sm lg:sticky lg:top-28">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-deep">External links</p>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Donations, media, books, websites, music, and events stay on official external pages.
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

      {relatedProfiles.length ? (
        <section className="bg-white py-20">
          <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-deep">Related profiles</p>
            <h2 className="mt-3 font-display text-5xl text-ink">Continue the conversation</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {relatedProfiles.map((related) => (
                <EditorialProfileCard key={related.id} profile={related} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
