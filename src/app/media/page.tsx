import { FeaturedSection } from "@/components/FeaturedSection";
import { Hero } from "@/components/Hero";
import { dataProvider } from "@/lib/data";

export default async function MediaPage() {
  const media = await dataProvider.media.list();

  return (
    <>
      <Hero
        eyebrow="Podcast / Media"
        title="The media engine for Christian trust."
        description="Podcast episodes, interviews, teaching, and worship media introduce the people and ministries behind the network."
        primaryHref="/submit"
        primaryLabel="Suggest a Guest"
      />
      <FeaturedSection eyebrow="Episodes" title="Starter media slate" muted>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {media.map((item) => (
            <article className="rounded-2xl border border-linen bg-parchment p-5 shadow-sm" key={item.id}>
              <div className="min-h-40 rounded-2xl bg-gradient-to-br from-ink via-stone-900 to-gold-deep p-5 text-cream">
                <span className="rounded-full bg-cream/10 px-3 py-1 text-xs font-black uppercase tracking-wide">{item.type}</span>
              </div>
              <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-gold-deep">{item.status}</p>
              <h3 className="mt-2 font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-1 text-sm font-bold text-stone-600">{item.guest}</p>
              <p className="mt-3 text-sm leading-6 text-stone-600">{item.summary}</p>
              <a className="mt-5 inline-flex rounded-full bg-ink px-4 py-3 text-sm font-black text-cream" href={item.url}>
                Open External Media
              </a>
            </article>
          ))}
        </div>
      </FeaturedSection>
    </>
  );
}
