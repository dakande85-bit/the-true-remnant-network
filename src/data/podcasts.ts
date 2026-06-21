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
      "A launch episode explaining the mission: faithful voices, reviewed ministries, sound resources and a simple Christian discovery network.",
    youtubeUrl: "#",
    status: "Planned"
  },
  {
    id: "testing-the-fruit",
    title: "Testing the Fruit Without Becoming Proud",
    guest: "Guest to be confirmed",
    topic: "Discernment",
    series: "Discernment",
    summary:
      "A discussion on how Christians can test teaching, doctrine and public fruit with humility, Scripture and wisdom.",
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
