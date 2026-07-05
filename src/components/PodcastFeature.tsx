import { ImageCard } from "./ImageCard";

export function PodcastFeature() {
  return (
    <div className="grid min-h-[calc(100vh-80px)] items-center gap-8 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
      <div className="flex min-h-[520px] flex-col justify-center border-l-4 border-gold bg-cream/[0.06] px-6 py-10 shadow-[0_32px_100px_rgba(0,0,0,0.4)] sm:px-8 lg:px-10">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-gold md:text-sm">Podcast-led trust</p>
        <h1 className="mt-5 max-w-3xl font-display text-[3.6rem] leading-[0.94] text-white md:text-7xl xl:text-8xl">
          Podcast interviews and video teachings
        </h1>
        <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-cream/88 md:text-xl md:leading-9">
          Most of the platform will be built around conversations, interviews, teaching videos, testimonies, and
          short-form resources published on YouTube and other platforms, then organised here for easy access.
        </p>
        <a className="mt-9 w-fit rounded-full bg-gold px-7 py-4 text-sm font-black text-ink shadow-[0_14px_36px_rgba(214,163,51,0.24)]" href="/watch">
          Watch Latest
        </a>
      </div>
      <ImageCard
        imageKey="podcastStudio"
        title="Conversations, testimonies, and biblical teaching."
        label="Watch"
        priority
        className="min-h-[500px] lg:min-h-[640px]"
      />
    </div>
  );
}
