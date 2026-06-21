export type DirectoryCategory =
  | "Church"
  | "Teacher"
  | "Mission"
  | "Charity"
  | "Music"
  | "Event"
  | "Resource";

export type VerificationStatus =
  | "Listed"
  | "Reviewed"
  | "Verified"
  | "Recommended"
  | "Under Review";

export type DirectoryItem = {
  id: string;
  name: string;
  category: DirectoryCategory;
  city: string;
  country: string;
  summary: string;
  focus: string;
  language: string;
  verificationStatus: VerificationStatus;
  reviewNote: string;
  tags: string[];
  websiteUrl?: string;
  youtubeUrl?: string;
  resourceUrl?: string;
  relatedPodcastUrl?: string;
};

export const directoryItems: DirectoryItem[] = [
  {
    id: "tfc-style-local-church-profile",
    name: "Local Church Review Profile",
    category: "Church",
    city: "Tenerife",
    country: "Spain",
    summary:
      "A starter church profile layout for a reviewed local fellowship, including service information, beliefs, media links and location data.",
    focus: "Local church, worship, discipleship and community care",
    language: "English / Spanish",
    verificationStatus: "Reviewed",
    reviewNote:
      "Use this slot for a church whose leadership, location, doctrine, public links and references have been reviewed.",
    tags: ["Local church", "Sunday service", "Community", "Map-ready"],
    websiteUrl: "#"
  },
  {
    id: "missionary-project-profile",
    name: "Missionary Project Profile",
    category: "Mission",
    city: "Global",
    country: "International",
    summary:
      "A mission profile template for outreach work, evangelism projects, Bible distribution, children’s work or humanitarian support.",
    focus: "Mission work, evangelism and external support links",
    language: "Multiple languages",
    verificationStatus: "Listed",
    reviewNote:
      "Use external giving and information links only. Do not process donations through the site in the MVP.",
    tags: ["Missions", "External giving", "Field updates", "Prayer"],
    resourceUrl: "#"
  },
  {
    id: "bible-teacher-profile",
    name: "Bible Teacher Profile",
    category: "Teacher",
    city: "Online",
    country: "Global",
    summary:
      "A teacher profile template connected to books, podcast interviews, teaching audio, YouTube content and doctrine notes.",
    focus: "Bible teaching, discipleship and discernment",
    language: "English",
    verificationStatus: "Verified",
    reviewNote:
      "Use this level only after reviewing doctrine, public teaching, leadership accountability and references where possible.",
    tags: ["Teaching", "Podcast guest", "Books", "Audio"],
    relatedPodcastUrl: "#"
  },
  {
    id: "christian-charity-profile",
    name: "Christian Charity Profile",
    category: "Charity",
    city: "London",
    country: "United Kingdom",
    summary:
      "A charity profile template for food outreach, family support, homeless ministry, prison ministry or crisis support.",
    focus: "Mercy ministry, public accountability and practical support",
    language: "English",
    verificationStatus: "Reviewed",
    reviewNote:
      "Add charity registration, leadership details, public reports and official giving links before moving higher than Reviewed.",
    tags: ["Charity", "Outreach", "External support", "Accountability"],
    websiteUrl: "#"
  },
  {
    id: "worship-and-music-profile",
    name: "Worship Music Profile",
    category: "Music",
    city: "Online",
    country: "Global",
    summary:
      "A music profile template for worship artists, playlists, albums, spoken-word projects and testimony-based music.",
    focus: "Worship, music, audio and testimony",
    language: "English",
    verificationStatus: "Listed",
    reviewNote:
      "Music listings should be curated for doctrine, message, public integrity and usefulness to believers.",
    tags: ["Music", "Worship", "Audio", "Playlist"],
    youtubeUrl: "#"
  },
  {
    id: "christian-event-profile",
    name: "Christian Event Profile",
    category: "Event",
    city: "Tenerife",
    country: "Spain",
    summary:
      "An event profile template for prayer nights, conferences, evangelism outreaches, worship nights and ministry training.",
    focus: "Events, gatherings and official organiser links",
    language: "English / Spanish",
    verificationStatus: "Under Review",
    reviewNote:
      "Events should link externally to official organisers and include clear host, location, date and safeguarding information.",
    tags: ["Event", "Prayer", "Conference", "External link"],
    resourceUrl: "#"
  }
];
