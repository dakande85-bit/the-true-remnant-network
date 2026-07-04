import { Hero } from "@/components/Hero";
import { ImageCard } from "@/components/ImageCard";
import { SectionHeader } from "@/components/SectionHeader";
import { dataProvider } from "@/lib/data";

export default async function WatchPage() {
  const media = await dataProvider.media.list();

  return (
    <>
      <Hero
        eyebrow="Watch"
        title="Podcast interviews and video teachings"
        description="Conversations, interviews, teaching videos, testimonies, and short-form resources published on YouTube and other platforms, then organised here for easy access."
      />
      <section className="py-16">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Latest"
            title="Teaching, testimony, and conversations"
            description="Video resources remain externally hosted and can later be connected to YouTube playlists, transcripts, and show notes."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {media.map((item) => (
              <article className="rounded-[1.5rem] border border-linen bg-white p-5 shadow-sm" key={item.id}>
                <ImageCard imageKey="podcastStudio" title={item.title} label={item.type} className="min-h-[260px]" />
                <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-gold-deep">{item.status}</p>
                <p className="mt-2 text-sm font-bold text-stone-600">{item.guest}</p>
                <p className="mt-3 text-sm leading-6 text-stone-600">{item.summary}</p>
                <a className="mt-5 inline-flex rounded-full bg-ink px-4 py-3 text-sm font-black text-cream" href={item.url}>
                  Watch Latest
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
