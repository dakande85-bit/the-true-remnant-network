export type PodcastEpisode = {
  id: string;
  title: string;
  guest: string;
  topic: string;
  summary: string;
  youtubeUrl: string;
};

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "faith-that-moves-mountains",
    title: "Faith That Moves Mountains",
    guest: "Guest Name",
    topic: "Faith and obedience",
    summary: "A placeholder episode for the future YouTube podcast series.",
    youtubeUrl: "#"
  },
  {
    id: "tested-and-true",
    title: "Tested and True",
    guest: "Guest Name",
    topic: "Discernment and Christian living",
    summary: "A placeholder interview connected to a verified directory profile.",
    youtubeUrl: "#"
  }
];
