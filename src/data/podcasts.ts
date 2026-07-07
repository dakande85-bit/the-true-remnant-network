export type PodcastEpisode = {
  id: string;
  title: string;
  guest: string;
  topic: string;
  summary: string;
  youtubeUrl: string;
  status: "Planned" | "Recording" | "Published";
  series: string;
};

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "true-remnant-origin",
    title: "Why The True Remnant Exists",
    guest: "Founder episode",
    topic: "Vision",
    series: "Foundations",
    summary:
      "A launch episode explaining the mission: faithful voices, reviewed ministries, sound resources, testimony and a podcast-led Christian media platform.",
    youtubeUrl: "#",
    status: "Recording"
  },
  {
    id: "testing-the-fruit",
    title: "Testing the Fruit Without Becoming Proud",
    guest: "Guest to be confirmed",
    topic: "Discernment",
    series: "Discernment",
    summary:
      "A conversation on testing teaching, doctrine and public fruit with humility, Scripture and wisdom instead of suspicion or hype.",
    youtubeUrl: "#",
    status: "Planned"
  },
  {
    id: "prayer-and-truth",
    title: "Prayer, Truth and Standing Firm",
    guest: "Prayer leader to be confirmed",
    topic: "Prayer",
    series: "Prayer",
    summary:
      "A practical episode on biblical prayer, repentance, truth and standing firm without fear-based extremes.",
    youtubeUrl: "#",
    status: "Planned"
  },
  {
    id: "mission-field-stories",
    title: "Stories From the Mission Field",
    guest: "Mission guest to be confirmed",
    topic: "Missions",
    series: "Missions",
    summary:
      "A testimony-led episode introducing mission work, prayer needs and official external support links.",
    youtubeUrl: "#",
    status: "Planned"
  }
];
