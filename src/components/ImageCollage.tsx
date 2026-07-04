import { ImageCard } from "./ImageCard";

export function ImageCollage() {
  return (
    <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
      <ImageCard
        className="min-h-[460px]"
        imageKey="podcastStudio"
        label="Media"
        title="Podcast interviews"
        description="Long-form conversations with teachers, leaders, missionaries, and testimony voices."
        priority
      />
      <div className="grid gap-4">
        <ImageCard imageKey="missionHands" label="Mission" title="Field stories" className="min-h-[220px]" />
        <ImageCard imageKey="globalMap" label="Network" title="Map discovery" className="min-h-[220px]" />
      </div>
    </div>
  );
}
