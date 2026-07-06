export type MediaItem = {
  id: string;
  title: string;
  guest: string;
  type: "Podcast" | "Interview" | "Teaching" | "Testimony";
  status: "Planned" | "Recording" | "Published";
  summary: string;
  url: string;
  duration?: string;
  tags?: string[];
};

export const mediaItems: MediaItem[] = [
  {
    id: "episode-001",
    title: "Why The True Remnant Exists",
    guest: "Founder episode",
    type: "Podcast",
    status: "Planned",
    duration: "45 min",
    tags: ["Launch", "Gospel", "Conversation"],
    summary:
      "A launch episode introducing the podcast, the heart behind the conversations, and why faith, truth, Scripture, and the last days matter now.",
    url: "https://youtube.com"
  },
  {
    id: "episode-002",
    title: "What Is the True Gospel?",
    guest: "Guest to be announced",
    type: "Interview",
    status: "Planned",
    duration: "60 min",
    tags: ["Gospel", "Salvation", "Doctrine"],
    summary:
      "A conversation on salvation, grace, repentance, faith, and what the Church must keep clear when speaking about Jesus Christ.",
    url: "https://youtube.com"
  },
  {
    id: "episode-003",
    title: "Spiritual Warfare Without Hype",
    guest: "Guest to be announced",
    type: "Interview",
    status: "Planned",
    duration: "60 min",
    tags: ["Prayer", "Spiritual Warfare", "Discernment"],
    summary:
      "A serious and Scripture-first discussion on prayer, deliverance, spiritual darkness, and standing firm without sensationalism.",
    url: "https://youtube.com"
  },
  {
    id: "episode-004",
    title: "Are We Living in the Last Days?",
    guest: "Guest to be announced",
    type: "Teaching",
    status: "Planned",
    duration: "50 min",
    tags: ["End Times", "Prophecy", "Readiness"],
    summary:
      "A sober conversation about prophecy, deception, tribulation, readiness, and the return of Jesus Christ.",
    url: "https://youtube.com"
  }
];
