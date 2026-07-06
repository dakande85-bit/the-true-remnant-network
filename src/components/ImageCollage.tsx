import { ImageCard } from "./ImageCard";

export function ImageCollage() {
  return (
    <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
      <ImageCard
        className="min-h-[460px]"
        imageKey="podcastStudio"
        label="Media"
        title="Teaching, testimony, and prayer"
        description="Long-form conversations, biblical resources, worship, mission stories, and prayers for believers."
        priority
      />
      <div className="grid gap-4">
        <ImageCard imageKey="missionHands" label="Mission" title="Gospel work" className="min-h-[220px]" />
        <ImageCard imageKey="bibleTable" label="Resources" title="Scripture and study" className="min-h-[220px]" />
      </div>
    </div>
  );
}
