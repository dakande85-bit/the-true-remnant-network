export type ResourceItem = {
  id: string;
  title: string;
  creator: string;
  type: "Book" | "Music" | "Audio Teaching" | "Devotional" | "Bible Tool";
  topic: string;
  summary: string;
  url: string;
};

export const resourceItems: ResourceItem[] = [
  {
    id: "purpose-reading-placeholder",
    title: "Reading List Item Placeholder",
    creator: "Author Name",
    type: "Book",
    topic: "Spiritual Growth",
    summary: "A recommended book card for the reading list section.",
    url: "#"
  },
  {
    id: "worship-audio-placeholder",
    title: "Music Audio Placeholder",
    creator: "Artist Name",
    type: "Music",
    topic: "Worship",
    summary: "A music card for worship songs, albums or playlists.",
    url: "#"
  },
  {
    id: "teaching-audio-placeholder",
    title: "Teaching Audio Placeholder",
    creator: "Teacher Name",
    type: "Audio Teaching",
    topic: "Bible Teaching",
    summary: "An audio teaching card for sermons, messages and teaching series.",
    url: "#"
  },
  {
    id: "devotional-placeholder",
    title: "Devotional Placeholder",
    creator: "Ministry Name",
    type: "Devotional",
    topic: "Daily Faith",
    summary: "A devotional card for daily readings and prayer resources.",
    url: "#"
  },
  {
    id: "bible-tool-placeholder",
    title: "Bible Tool Placeholder",
    creator: "Tool Provider",
    type: "Bible Tool",
    topic: "Study Tools",
    summary: "A tool card for Bible apps, concordances, maps or study aids.",
    url: "#"
  }
];
