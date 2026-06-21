export type ResourceType = "Book" | "Music" | "Audio Teaching" | "Devotional" | "Bible Tool";

export type ResourceItem = {
  id: string;
  title: string;
  creator: string;
  type: ResourceType;
  topic: string;
  summary: string;
  url: string;
  level: "Starter" | "Recommended" | "Reviewed";
  duration?: string;
};

export const resourceItems: ResourceItem[] = [
  {
    id: "book-discernment-reading-slot",
    title: "Discernment Reading Slot",
    creator: "Curated author to be added",
    type: "Book",
    topic: "Discernment",
    summary: "Use this card for a book that helps believers test teaching, understand Scripture and grow in maturity.",
    url: "#",
    level: "Starter"
  },
  {
    id: "book-discipleship-reading-slot",
    title: "Discipleship Reading Slot",
    creator: "Curated author to be added",
    type: "Book",
    topic: "Discipleship",
    summary: "A reading-list slot for books on obedience, spiritual formation, prayer and following Christ.",
    url: "#",
    level: "Starter"
  },
  {
    id: "music-worship-playlist-slot",
    title: "Worship Playlist Slot",
    creator: "Curated artist or playlist to be added",
    type: "Music",
    topic: "Worship",
    summary: "A music-tab card for worship songs, albums or playlists that are reviewed before being featured.",
    url: "#",
    level: "Starter",
    duration: "Playlist"
  },
  {
    id: "music-testimony-audio-slot",
    title: "Testimony Music Slot",
    creator: "Curated artist to be added",
    type: "Music",
    topic: "Testimony",
    summary: "A space for Christian music connected to testimony, worship, prayer or evangelism.",
    url: "#",
    level: "Starter",
    duration: "Album or single"
  },
  {
    id: "audio-teaching-series-slot",
    title: "Audio Teaching Series Slot",
    creator: "Curated speaker to be added",
    type: "Audio Teaching",
    topic: "Bible Teaching",
    summary: "A teaching-audio card for sermons, studies, messages and podcast series from reviewed voices.",
    url: "#",
    level: "Reviewed",
    duration: "Series"
  },
  {
    id: "audio-prayer-teaching-slot",
    title: "Prayer Teaching Slot",
    creator: "Curated speaker to be added",
    type: "Audio Teaching",
    topic: "Prayer",
    summary: "A teaching slot for practical Christian disciplines such as prayer, forgiveness and perseverance.",
    url: "#",
    level: "Starter",
    duration: "Audio"
  },
  {
    id: "devotional-daily-reading-slot",
    title: "Daily Devotional Slot",
    creator: "Curated ministry to be added",
    type: "Devotional",
    topic: "Daily Faith",
    summary: "A daily reading, prayer or reflection card for believers who want steady spiritual growth.",
    url: "#",
    level: "Starter"
  },
  {
    id: "bible-tool-study-slot",
    title: "Bible Study Tool Slot",
    creator: "Curated tool provider to be added",
    type: "Bible Tool",
    topic: "Study Tools",
    summary: "A Bible app, concordance, map, language tool or study resource card for deeper Scripture study.",
    url: "#",
    level: "Starter"
  }
];
