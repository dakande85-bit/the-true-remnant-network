import type { ImageKey } from "@/content/images";

export type ValidationStatus = "Listed" | "Under Review" | "Reviewed" | "Verified" | "Featured";

export type DirectoryCategory =
  | "Church"
  | "Ministry"
  | "Mission"
  | "Charity"
  | "Teacher"
  | "Worship"
  | "Book"
  | "Podcast"
  | "Event";

export type ProfileKind = "organisation" | "person";

export type DirectoryProfile = {
  id: string;
  slug: string;
  kind: ProfileKind;
  name: string;
  category: DirectoryCategory;
  status: ValidationStatus;
  location: string;
  country: string;
  summary: string;
  description: string;
  story: string;
  reviewNotes: string;
  beliefs: string[];
  focus: string[];
  tags: string[];
  imageKey: ImageKey;
  isExample?: boolean;
  websiteUrl?: string;
  youtubeUrl?: string;
  donationUrl?: string;
  mediaUrl?: string;
  eventUrl?: string;
  resources?: Array<{ label: string; href: string }>;
  relatedProfileSlugs?: string[];
};

export const directoryProfiles: DirectoryProfile[] = [
  {
    id: "org-001",
    slug: "tenerife-family-church",
    kind: "organisation",
    name: "Tenerife Family Church",
    category: "Church",
    status: "Featured",
    location: "Tenerife",
    country: "Spain",
    summary: "An example local church dossier for worship, discipleship, pastoral care, and community presence.",
    description:
      "Tenerife Family Church is a demo profile showing how a local fellowship can be presented with careful language, public links, review context, and a warm editorial layout.",
    story:
      "This example profile represents the kind of church record the network is built to hold: a clear gathering place, a pastoral story, public teaching links, and enough context for believers to continue their own discernment locally.",
    reviewNotes:
      "Demo profile for launch presentation. A real profile should include leadership, doctrine, public teaching, safeguarding context, and location checks before being promoted.",
    beliefs: ["Christ-centred teaching", "Scripture-led discipleship", "Local pastoral accountability"],
    focus: ["Local church", "Worship", "Discipleship", "Community care"],
    tags: ["Sunday gathering", "Bilingual", "Map-ready"],
    imageKey: "worshipGathering",
    isExample: true,
    websiteUrl: "https://example.com",
    relatedProfileSlugs: ["worship-testimony-sessions", "mission-outreach-collective"]
  },
  {
    id: "org-002",
    slug: "global-bible-teaching-archive",
    kind: "organisation",
    name: "Global Bible Teaching Archive",
    category: "Teacher",
    status: "Verified",
    location: "Online",
    country: "Global",
    summary: "A curated teaching archive example for long-form Bible studies, transcripts, and resource trails.",
    description:
      "A sample teaching archive profile that shows how the network can group trusted media, written notes, and external study resources around a reviewed teaching body.",
    story:
      "The archive model is for believers looking beyond short clips. It favours full talks, context, source notes, and a clear path from media into deeper study.",
    reviewNotes:
      "Demo profile. A real archive should be checked for doctrine, citation integrity, public accountability, and how correction requests are handled.",
    beliefs: ["Biblical clarity", "Context-rich teaching", "Correction and accountability"],
    focus: ["Bible teaching", "Resource library", "Study tools", "Podcast references"],
    tags: ["Teaching", "Archive", "Books"],
    imageKey: "studyDesk",
    isExample: true,
    websiteUrl: "https://example.com",
    youtubeUrl: "https://youtube.com",
    resources: [{ label: "Teaching archive", href: "https://example.com/archive" }],
    relatedProfileSlugs: ["remnant-podcast", "tenerife-family-church"]
  },
  {
    id: "org-003",
    slug: "mission-outreach-collective",
    kind: "organisation",
    name: "Mission Outreach Collective",
    category: "Mission",
    status: "Reviewed",
    location: "Global",
    country: "International",
    summary: "A mission project example for field stories, prayer needs, locations, and official support links.",
    description:
      "Mission Outreach Collective demonstrates how mission work can be made visible without turning the site into a fundraising platform.",
    story:
      "Many mission teams work quietly. This profile format gives their work a place to explain the field, the need, the people responsible, and where official updates can be followed.",
    reviewNotes:
      "Demo profile. Real mission profiles should include organiser identity, field updates, references, external support pages, and safeguarding considerations.",
    beliefs: ["Gospel mission", "Local accountability", "Transparent support links"],
    focus: ["Evangelism", "Bible distribution", "Field reports", "Prayer needs"],
    tags: ["Missions", "Prayer", "External support"],
    imageKey: "missionHands",
    isExample: true,
    websiteUrl: "https://example.com",
    donationUrl: "https://example.com/support",
    relatedProfileSlugs: ["mercy-table-food-ministry", "remnant-podcast"]
  },
  {
    id: "org-004",
    slug: "mercy-table-food-ministry",
    kind: "organisation",
    name: "Mercy Table Food Ministry",
    category: "Charity",
    status: "Reviewed",
    location: "London",
    country: "United Kingdom",
    summary: "A mercy ministry example focused on food support, family care, and practical Christian service.",
    description:
      "Mercy Table Food Ministry is a demo charity profile showing public accountability, practical care, and official external giving links.",
    story:
      "Mercy ministries often carry steady work that does not fit social media attention. The profile format gives room for context, leadership, activity, and support routes.",
    reviewNotes:
      "Demo profile. A real charity profile should include registration details where applicable, leadership checks, public reports, and official giving links.",
    beliefs: ["Mercy ministry", "Practical service", "Public accountability"],
    focus: ["Food support", "Family care", "Outreach", "Community partnerships"],
    tags: ["Charity", "External giving", "Safeguarding"],
    imageKey: "prayerCircle",
    isExample: true,
    websiteUrl: "https://example.com",
    donationUrl: "https://example.com/donate",
    relatedProfileSlugs: ["mission-outreach-collective", "tenerife-family-church"]
  },
  {
    id: "person-001",
    slug: "remnant-podcast",
    kind: "person",
    name: "Remnant Podcast",
    category: "Podcast",
    status: "Featured",
    location: "Studio / Online",
    country: "Global",
    summary: "A media profile for long-form conversations, testimonies, ministry stories, and teaching discussions.",
    description:
      "The Remnant Podcast profile shows how the media engine can sit beside directory records and help users hear the person behind each listing.",
    story:
      "Trust grows through more than a card. Long-form interviews give space for testimony, doctrine, mission history, and the texture of a person or ministry's work.",
    reviewNotes:
      "Platform-owned demo profile. Guest profiles should still be reviewed individually before being promoted in the directory.",
    beliefs: ["Story-led trust", "Long-form conversation", "Careful public language"],
    focus: ["Podcast interviews", "Testimonies", "Teaching conversations", "Mission stories"],
    tags: ["Podcast", "Interview", "Media"],
    imageKey: "podcastStudio",
    isExample: true,
    mediaUrl: "https://youtube.com",
    youtubeUrl: "https://youtube.com",
    relatedProfileSlugs: ["global-bible-teaching-archive", "mission-outreach-collective"]
  },
  {
    id: "person-002",
    slug: "worship-testimony-sessions",
    kind: "person",
    name: "Worship & Testimony Sessions",
    category: "Worship",
    status: "Under Review",
    location: "Manchester",
    country: "United Kingdom",
    summary: "A worship and testimony example for music, spoken stories, and externally hosted sessions.",
    description:
      "This demo profile shows how worship artists and testimony-led media can be listed with public links, care, and review notes.",
    story:
      "Music and testimony can be powerful discovery paths, but the network keeps the language careful and asks users to examine doctrine, fruit, and local accountability.",
    reviewNotes:
      "Demo profile in under-review state. Real worship profiles should be reviewed for doctrine, public conduct, ministry context, and link ownership.",
    beliefs: ["Worship shaped by Scripture", "Testimony with humility", "External media links"],
    focus: ["Worship", "Songwriting", "Testimony", "Media"],
    tags: ["Music", "YouTube", "External links"],
    imageKey: "bibleTable",
    isExample: true,
    mediaUrl: "https://example.com/music",
    youtubeUrl: "https://youtube.com",
    relatedProfileSlugs: ["tenerife-family-church", "remnant-podcast"]
  }
];

export const organisationProfiles = directoryProfiles.filter((profile) => profile.kind === "organisation");
export const personProfiles = directoryProfiles.filter((profile) => profile.kind === "person");

export function getProfileBySlug(slug: string) {
  return directoryProfiles.find((profile) => profile.slug === slug);
}

export function getRelatedProfiles(profile: DirectoryProfile) {
  return (profile.relatedProfileSlugs ?? [])
    .map((slug) => getProfileBySlug(slug))
    .filter((entry): entry is DirectoryProfile => Boolean(entry));
}
