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
        title="Conversations for the Body of Christ."
        description="Through interviews, long-form discussions, testimonies, and teaching videos, we explore the questions that matter: Who is Jesus? What is the true Gospel? How should believers understand prophecy, deception, prayer, doctrine, and unity?"
      />
      <section className="py-16">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Latest"
            title="Interviews, testimonies, and biblical conversations"
            description="Video conversations remain externally hosted and can later be connected to YouTube playlists, transcripts, and show notes."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {media.map((item) => (
              <article className="rounded-[1.5rem] border border-linen bg-white p-5 shadow-sm" key={item.id}>
                <ImageCard imageKey="podcastStudio" title={item.title} label={item.type} className="min-h-[260px]" />
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
