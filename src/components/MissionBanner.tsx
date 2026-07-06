import { ImageCard } from "./ImageCard";

export function MissionBanner() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <ImageCard imageKey="missionHands" title="Make mission work visible." label="Mission" className="min-h-[420px]" />
      <div className="flex flex-col justify-center rounded-[2rem] border border-linen bg-white p-8 shadow-sm">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-gold-deep">Mission visibility</p>
        <h2 className="mt-4 font-display text-5xl leading-tight text-ink">Make mission work visible.</h2>
        <p className="mt-5 text-lg leading-8 text-stone-600">
          Missionaries, charities, and outreach projects often work quietly. The network gives their work a clear
          profile, story, location, and official support link.
        </p>
      </div>
    </div>
  );
}
