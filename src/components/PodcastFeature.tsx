import { ImageCard } from "./ImageCard";

export function PodcastFeature() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col justify-center rounded-[2rem] border border-cream/10 bg-cream/5 p-8">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">Podcast-led trust</p>
        <h2 className="mt-4 font-display text-5xl leading-tight text-cream">
          Trust grows when you hear the person behind the profile.
        </h2>
        <p className="mt-5 text-lg leading-8 text-cream/70">
          Long-form conversations, testimonies, ministry stories, and teaching discussions help users understand the
          people and work behind each listing.
        </p>
        <a className="mt-8 w-fit rounded-full bg-gold px-6 py-3 text-sm font-black text-ink" href="/media">
          Watch the Podcast
        </a>
      </div>
      <ImageCard imageKey="podcastStudio" title="Conversations with weight and context." label="Media" className="min-h-[430px]" />
    </div>
  );
}
