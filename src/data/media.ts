export type MediaItem = {
  id: string;
  title: string;
  guest: string;
  type: "Podcast" | "Interview" | "Teaching" | "Worship";
  status: "Planned" | "Recording" | "Published";
  summary: string;
  url: string;
};

export const mediaItems: MediaItem[] = [
  {
    id: "media-001",
    title: "Why The True Remnant Network Exists",
    guest: "Founder episode",
    type: "Podcast",
    status: "Planned",
    summary: "A launch conversation about faithful discovery, careful validation, and media-led trust.",
    url: "https://youtube.com"
  },
  {
    id: "media-002",
    title: "Testing the Fruit Without Becoming Proud",
    guest: "Elias Morgan",
    type: "Teaching",
    status: "Recording",
    summary: "A discernment episode on doctrine, fruit, humility, and public ministry review.",
    url: "https://youtube.com"
  },
  {
    id: "media-003",
    title: "Stories From the Mission Field",
    guest: "Frontier Bible Mission",
    type: "Interview",
    status: "Planned",
    summary: "Mission stories, prayer needs, and official support links from the field.",
    url: "https://youtube.com"
  }
];
