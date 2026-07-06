import { Hero } from "@/components/Hero";
import { ImageCard } from "@/components/ImageCard";
import { SectionHeader } from "@/components/SectionHeader";
import { mediaItems } from "@/data/media";

export default function WatchPage() {
  return (
    <>
      <Hero
        eyebrow="Episodes"
        title="Watch the podcast. Follow the conversations."
        description="Full episodes, guest interviews, testimonies, teaching discussions, and future clips will live here as the podcast grows."
        primaryHref="/newsletter"
        primaryLabel="Subscribe for Updates"
        secondaryHref="/resources"
        secondaryLabel="Episode Resources"
      />
      <section className="py-16">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Episode Library"
            title="Faith, truth, Scripture, and the times we are living in."
            description="Use this page as the main podcast hub. Each card can later connect to video embeds, audio platforms, transcripts, clips, and show notes."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {mediaItems.map((item) => (
              <article className="rounded-[1.5rem] border border-linen bg-white p-5 shadow-sm" key={item.id}>
                <ImageCard imageKey="podcastStudio" title={item.title} label={item.status} className="min-h-[260px]" />
                <p className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-gold-deep">{item.guest} · {item.duration}</p>
                <p className="mt-3 text-sm leading-6 text-stone-600">{item.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags?.map((tag) => (
                    <span className="rounded-full bg-parchment px-3 py-1 text-xs font-bold text-stone-600" key={tag}>{tag}</span>
                  ))}
                </div>
                <a className="mt-5 inline-flex rounded-full bg-ink px-4 py-3 text-sm font-black text-cream" href={item.url}>
                  Watch Episode
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
