import { ImageCard } from "./ImageCard";

export function PodcastFeature() {
  return (
    <div className="grid min-h-[calc(100vh-80px)] items-center gap-8 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
      <div className="flex min-h-[520px] flex-col justify-center border-l-4 border-gold bg-cream/[0.06] px-6 py-10 shadow-[0_32px_100px_rgba(0,0,0,0.4)] sm:px-8 lg:px-10">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-gold md:text-sm">Christian interviews and end-times discernment</p>
        <h1 className="mt-5 max-w-3xl font-display text-[3.6rem] leading-[0.94] text-white md:text-7xl xl:text-8xl">
          One Body. One Mind. One Truth in Christ.
        </h1>
        <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-cream/88 md:text-xl md:leading-9">
          A Christian interview and end-times ministry bringing believers together to discuss faith, doctrine, prophecy,
          spiritual warfare, and the difficult questions facing the Church.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a className="rounded-full bg-gold px-7 py-4 text-sm font-black text-ink shadow-[0_14px_36px_rgba(214,163,51,0.24)]" href="/watch">
            Watch Conversations
          </a>
          <a className="rounded-full bg-cream px-7 py-4 text-sm font-black text-ink" href="/topics">
            Explore Topics
          </a>
          <a className="rounded-full border border-cream/35 px-7 py-4 text-sm font-black text-cream" href="/newsletter">
            Join Newsletter
          </a>
        </div>
      </div>
      <ImageCard
        imageKey="podcastStudio"
        title="Conversations for the Body of Christ."
        label="Watch"
        priority
        className="min-h-[500px] lg:min-h-[640px]"
      />
    </div>
  );
}
