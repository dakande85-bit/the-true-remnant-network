export type ImageKey =
  | "bibleTable"
  | "worshipGathering"
  | "missionHands"
  | "podcastStudio"
  | "cityNight"
  | "prayerCircle"
  | "globalMap"
  | "studyDesk";

export type EditorialImage = {
  src: string;
  alt: string;
  label: string;
  credit?: string;
};

export const editorialImages: Record<ImageKey, EditorialImage> = {
  bibleTable: {
    src: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1600&q=82",
    alt: "Open Bible on a table in warm evening light",
    label: "Scripture and study"
  },
  worshipGathering: {
    src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1600&q=82",
    alt: "Warm atmospheric light over a gathered crowd",
    label: "Church and worship"
  },
  missionHands: {
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1600&q=82",
    alt: "Hands serving food and practical help in community outreach",
    label: "Mission and mercy"
  },
  podcastStudio: {
    src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1600&q=82",
    alt: "Podcast microphone in a dark studio",
    label: "Long-form media"
  },
  cityNight: {
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=82",
    alt: "City skyline at night with lights across the streets",
    label: "Believers in the world"
  },
  prayerCircle: {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=82",
    alt: "People gathered closely in a circle",
    label: "Prayer and fellowship"
  },
  globalMap: {
    src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=82",
    alt: "A map surface suggesting global connection and mission",
    label: "Global discovery"
  },
  studyDesk: {
    src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1600&q=82",
    alt: "Books and notes on a study desk",
    label: "Books and teaching"
  }
};
